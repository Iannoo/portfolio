import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDarkMode: false,
    primaryColor: '#3B82F6', // Default blue color
    fontFamily: 'Inter',
    fontSize: 'base',
    animations: true
  }),

  getters: {
    getTheme: (state) => ({
      isDarkMode: state.isDarkMode,
      primaryColor: state.primaryColor,
      fontFamily: state.fontFamily,
      fontSize: state.fontSize,
      animations: state.animations
    })
  },

  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      // Update document class for global styling
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },

    setPrimaryColor(color) {
      this.primaryColor = color
    },

    setFontFamily(font) {
      this.fontFamily = font
    },

    setFontSize(size) {
      this.fontSize = size
    },

    toggleAnimations() {
      this.animations = !this.animations
    }
  },

  persist: {
    storage: persistedState.localStorage
  }
}) 