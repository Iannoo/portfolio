import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => ({
    isLoading: false,
    notifications: [],
    activeModal: null,
    sidebarOpen: false
  }),

  getters: {
    hasNotifications: (state) => state.notifications.length > 0,
    activeNotifications: (state) => state.notifications.filter(n => !n.read),
    isModalOpen: (state) => state.activeModal !== null
  },

  actions: {
    setLoading(status) {
      this.isLoading = status
    },

    addNotification(notification) {
      const id = Date.now()
      this.notifications.push({
        id,
        ...notification,
        read: false,
        timestamp: new Date()
      })

      // Auto-remove notification after 5 seconds
      setTimeout(() => {
        this.removeNotification(id)
      }, 5000)
    },

    removeNotification(id) {
      this.notifications = this.notifications.filter(n => n.id !== id)
    },

    markNotificationAsRead(id) {
      const notification = this.notifications.find(n => n.id === id)
      if (notification) {
        notification.read = true
      }
    },

    openModal(modalName) {
      this.activeModal = modalName
    },

    closeModal() {
      this.activeModal = null
    },

    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    }
  }
}) 