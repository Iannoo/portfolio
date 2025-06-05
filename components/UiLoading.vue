<template>
  <div
    v-if="loading"
    class="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
  >
    <div class="flex flex-col items-center space-y-4">
      <div class="relative w-16 h-16">
        <div class="absolute w-16 h-16 border-4 border-blue-200 rounded-full"></div>
        <div class="absolute w-16 h-16 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
      </div>
      <p class="text-sm font-medium text-gray-600 dark:text-gray-300">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    default: 'Loading...'
  }
})
</script> 