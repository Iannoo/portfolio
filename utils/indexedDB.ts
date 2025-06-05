interface DBSchema {
  projects: {
    key: number
    value: {
      id: number
      title: string
      description: string
      image: string
      technologies: string[]
      category: string
      link?: string
      github?: string
      lastUpdated: number
    }
  }
  blogPosts: {
    key: number
    value: {
      id: number
      title: string
      content: string
      excerpt: string
      image: string
      date: string
      author: string
      category: string
      tags: string[]
      lastUpdated: number
    }
  }
}

class IndexedDBService {
  private db: IDBDatabase | null = null
  private readonly DB_NAME = 'portfolio-db'
  private readonly DB_VERSION = 1

  async init(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open(this.DB_NAME, this.DB_VERSION)

      request.onerror = () => reject(request.error)
      request.onsuccess = () => {
        this.db = request.result
        resolve()
      }

      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db = (event.target as IDBOpenDBRequest).result

        // Create object stores
        if (!db.objectStoreNames.contains('projects')) {
          const projectStore = db.createObjectStore('projects', { keyPath: 'id' })
          projectStore.createIndex('category', 'category', { unique: false })
          projectStore.createIndex('lastUpdated', 'lastUpdated', { unique: false })
        }

        if (!db.objectStoreNames.contains('blogPosts')) {
          const blogStore = db.createObjectStore('blogPosts', { keyPath: 'id' })
          blogStore.createIndex('category', 'category', { unique: false })
          blogStore.createIndex('date', 'date', { unique: false })
          blogStore.createIndex('lastUpdated', 'lastUpdated', { unique: false })
        }
      }
    })
  }

  async addItem<T extends keyof DBSchema>(
    storeName: T,
    item: DBSchema[T]['value']
  ): Promise<void> {
    if (!this.db) throw new Error('Database not initialized')

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(storeName, 'readwrite')
      const store = transaction.objectStore(storeName)

      const request = store.put({
        ...item,
        lastUpdated: Date.now()
      })

      request.onerror = () => reject(request.error)
      request.onsuccess = () => resolve()
    })
  }

  async getItem<T extends keyof DBSchema>(
    storeName: T,
    id: number
  ): Promise<DBSchema[T]['value'] | null> {
    if (!this.db) throw new Error('Database not initialized')

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(storeName, 'readonly')
      const store = transaction.objectStore(storeName)
      const request = store.get(id)

      request.onerror = () => reject(request.error)
      request.onsuccess = () => resolve(request.result || null)
    })
  }

  async getAllItems<T extends keyof DBSchema>(
    storeName: T,
    indexName?: string,
    range?: IDBKeyRange
  ): Promise<DBSchema[T]['value'][]> {
    if (!this.db) throw new Error('Database not initialized')

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(storeName, 'readonly')
      const store = transaction.objectStore(storeName)
      const source = indexName ? store.index(indexName) : store
      const request = source.getAll(range)

      request.onerror = () => reject(request.error)
      request.onsuccess = () => resolve(request.result)
    })
  }

  async deleteItem<T extends keyof DBSchema>(
    storeName: T,
    id: number
  ): Promise<void> {
    if (!this.db) throw new Error('Database not initialized')

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(storeName, 'readwrite')
      const store = transaction.objectStore(storeName)
      const request = store.delete(id)

      request.onerror = () => reject(request.error)
      request.onsuccess = () => resolve()
    })
  }

  async clearStore<T extends keyof DBSchema>(storeName: T): Promise<void> {
    if (!this.db) throw new Error('Database not initialized')

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(storeName, 'readwrite')
      const store = transaction.objectStore(storeName)
      const request = store.clear()

      request.onerror = () => reject(request.error)
      request.onsuccess = () => resolve()
    })
  }

  async getItemsByIndex<T extends keyof DBSchema>(
    storeName: T,
    indexName: string,
    value: any
  ): Promise<DBSchema[T]['value'][]> {
    if (!this.db) throw new Error('Database not initialized')

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction(storeName, 'readonly')
      const store = transaction.objectStore(storeName)
      const index = store.index(indexName)
      const request = index.getAll(value)

      request.onerror = () => reject(request.error)
      request.onsuccess = () => resolve(request.result)
    })
  }

  // Utility method to check if data is stale
  isDataStale(lastUpdated: number, maxAge: number): boolean {
    return Date.now() - lastUpdated > maxAge
  }

  // Close the database connection
  close(): void {
    if (this.db) {
      this.db.close()
      this.db = null
    }
  }
}

// Create and export a singleton instance
export const indexedDB = new IndexedDBService()

// Export a composable for Vue components
export const useIndexedDB = () => {
  const isInitialized = ref(false)
  const error = ref<Error | null>(null)

  const init = async () => {
    try {
      await indexedDB.init()
      isInitialized.value = true
    } catch (e) {
      error.value = e as Error
    }
  }

  return {
    indexedDB,
    isInitialized,
    error,
    init
  }
} 