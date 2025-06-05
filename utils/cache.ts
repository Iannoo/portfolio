interface CacheOptions {
  ttl?: number // Time to live in milliseconds
  staleWhileRevalidate?: boolean
}

interface CacheEntry<T> {
  data: T
  timestamp: number
  expiresAt: number
}

export const useCache = () => {
  const cache = new Map<string, CacheEntry<any>>()
  const defaultTTL = 5 * 60 * 1000 // 5 minutes

  // Get cached data
  const get = <T>(key: string): T | null => {
    const entry = cache.get(key)
    if (!entry) return null

    const now = Date.now()
    
    // Check if entry is expired
    if (now > entry.expiresAt) {
      cache.delete(key)
      return null
    }

    return entry.data as T
  }

  // Set data in cache
  const set = <T>(key: string, data: T, options: CacheOptions = {}): void => {
    const now = Date.now()
    const ttl = options.ttl || defaultTTL

    cache.set(key, {
      data,
      timestamp: now,
      expiresAt: now + ttl
    })
  }

  // Get data with stale-while-revalidate pattern
  const getWithRevalidate = async <T>(
    key: string,
    fetchFn: () => Promise<T>,
    options: CacheOptions = {}
  ): Promise<T> => {
    const cached = get<T>(key)
    const now = Date.now()
    const entry = cache.get(key)

    // If we have stale data and revalidation is enabled, return it while fetching fresh data
    if (cached && options.staleWhileRevalidate && entry) {
      const isStale = now > entry.expiresAt
      
      if (isStale) {
        // Fetch fresh data in background
        fetchFn().then(freshData => {
          set(key, freshData, options)
        }).catch(console.error)
      }
      
      return cached
    }

    // If no cache or not using stale-while-revalidate, fetch fresh data
    const freshData = await fetchFn()
    set(key, freshData, options)
    return freshData
  }

  // Clear specific cache entry
  const clear = (key: string): void => {
    cache.delete(key)
  }

  // Clear all cache
  const clearAll = (): void => {
    cache.clear()
  }

  // Get cache statistics
  const getStats = () => {
    const now = Date.now()
    const entries = Array.from(cache.entries())
    
    return {
      totalEntries: entries.length,
      expiredEntries: entries.filter(([_, entry]) => now > entry.expiresAt).length,
      totalSize: entries.reduce((acc, [_, entry]) => acc + JSON.stringify(entry.data).length, 0)
    }
  }

  return {
    get,
    set,
    getWithRevalidate,
    clear,
    clearAll,
    getStats
  }
} 