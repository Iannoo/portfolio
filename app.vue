<template>
  <div>
    <UiLoading :loading="isLoading" message="Loading portfolio..." />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useUIStore } from '~/stores/ui'
import { storeToRefs } from 'pinia'

const uiStore = useUIStore()
const { isLoading } = storeToRefs(uiStore)

// Handle page transitions
const route = useRoute()
watch(() => route.path, () => {
  uiStore.setLoading(true)
  // Simulate minimum loading time for better UX
  setTimeout(() => {
    uiStore.setLoading(false)
  }, 300)
})

// Handle initial page load
onMounted(() => {
  uiStore.setLoading(false)
})

// Handle page visibility
onMounted(() => {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      // Refresh data when page becomes visible
      uiStore.setLoading(true)
      setTimeout(() => {
        uiStore.setLoading(false)
      }, 300)
    }
  })
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap');

html {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  @apply bg-gray-50 dark:bg-dark text-gray-900 dark:text-white;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-100 dark:bg-dark;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-300 dark:bg-gray-600 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-400 dark:bg-gray-500;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Focus styles */
:focus {
  @apply outline-none ring-2 ring-primary ring-offset-2;
}

/* Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Optimize font loading */
@font-face {
  font-family: 'Inter var';
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
  font-named-instance: 'Regular';
  src: url('/fonts/inter-var.woff2') format('woff2');
}

/* Optimize animations */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Optimize scrolling */
html {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}

/* Optimize text rendering */
body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
