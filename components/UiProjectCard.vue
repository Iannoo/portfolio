<template>
  <article
    class="group relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl"
    :class="{ 'opacity-0': !isVisible }"
    ref="cardRef"
  >
    <UiLazyImage
      :src="project.image"
      :alt="project.title"
      width="400"
      height="225"
      containerClass="aspect-video w-full"
      imageClass="object-cover transition-transform duration-300 group-hover:scale-105"
    />
    
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {{ project.title }}
      </h3>
      
      <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {{ project.description }}
      </p>
      
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full"
        >
          {{ tech }}
        </span>
      </div>
      
      <div class="flex justify-between items-center">
        <div class="flex gap-3">
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-600 dark:text-blue-400 hover:underline"
            @click="trackClick('demo')"
          >
            Live Demo
          </a>
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            @click="trackClick('github')"
          >
            <span class="sr-only">GitHub</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
        
        <span class="text-sm text-gray-500 dark:text-gray-400">
          {{ project.category }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { usePerformance } from '~/utils/performance'
import { useIntersectionObserver } from '@vueuse/core'

const props = defineProps<{
  project: {
    id: number
    title: string
    description: string
    image: string
    technologies: string[]
    category: string
    link?: string
    github?: string
  }
}>()

const { trackComponentRender } = usePerformance()
const endTracking = trackComponentRender('UiProjectCard')

const cardRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

// Intersection Observer for lazy loading
const { stop } = useIntersectionObserver(
  cardRef,
  ([entry]) => {
    if (entry.isIntersecting) {
      isVisible.value = true
      stop()
    }
  },
  { threshold: 0.1 }
)

// Track clicks
const trackClick = (type: 'demo' | 'github') => {
  // You can implement analytics tracking here
  console.log(`Project card clicked: ${props.project.title} - ${type}`)
}

onMounted(() => {
  endTracking()
})

onUnmounted(() => {
  stop()
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 