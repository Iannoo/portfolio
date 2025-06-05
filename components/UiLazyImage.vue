<template>
  <div class="relative overflow-hidden" :class="containerClass">
    <img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :class="[
        'transition-opacity duration-300',
        { 'opacity-0': !isLoaded },
        imageClass
      ]"
      @load="isLoaded = true"
      loading="lazy"
    />
    <div
      v-if="!isLoaded"
      class="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  width: {
    type: [Number, String],
    default: 'auto'
  },
  height: {
    type: [Number, String],
    default: 'auto'
  },
  containerClass: {
    type: String,
    default: ''
  },
  imageClass: {
    type: String,
    default: ''
  }
})

const isLoaded = ref(false)
</script> 