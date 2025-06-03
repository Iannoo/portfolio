<template>
  <div>
    <!-- Projects Hero Section -->
    <section class="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">My Projects</span>
          </h1>
          <p class="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            A collection of my work, showcasing my skills and experience in web development. From full-stack applications to modern websites, each project represents a unique challenge and learning opportunity.
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-extrabold text-center mb-16 tracking-tight">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Featured Projects</span>
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in featuredProjects" :key="project.id" class="bg-white dark:bg-dark rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div class="relative h-48">
              <img 
                :src="project.image" 
                :alt="project.title" 
                class="w-full h-full object-cover"
                @error="$event.target.src = 'https://picsum.photos/400/250?random=' + project.id"
              />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3 tracking-tight">{{ project.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.technologies" :key="tech" class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {{ tech }}
                </span>
              </div>
              <div class="flex justify-between items-center">
                <a :href="project.link" class="text-primary font-semibold hover:underline">View Project →</a>
                <a v-if="project.github" :href="project.github" class="text-gray-600 dark:text-gray-400 hover:text-primary">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- All Projects Section -->
    <section class="py-20 bg-gray-50 dark:bg-dark/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-extrabold text-center mb-16 tracking-tight">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">All Projects</span>
        </h2>
        
        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button
            v-for="category in categories"
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105',
              selectedCategory === category
                ? 'bg-primary text-white shadow-lg'
                : 'bg-white dark:bg-dark text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark/80 shadow-md'
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Project cards will be dynamically rendered here based on the selected category -->
          <div v-for="project in filteredProjects" :key="project.id" class="bg-white dark:bg-dark rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div class="relative h-48">
              <img :src="project.image" :alt="project.title" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3 tracking-tight">{{ project.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.technologies" :key="tech" class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {{ tech }}
                </span>
              </div>
              <div class="flex justify-between items-center">
                <a :href="project.link" class="text-primary font-semibold hover:underline">View Project →</a>
                <a v-if="project.github" :href="project.github" class="text-gray-600 dark:text-gray-400 hover:text-primary">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})

const categories = ['All', 'Web Development', 'Mobile Apps', 'UI/UX Design']
const selectedCategory = ref('All')

// Featured projects data
const featuredProjects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with Vue.js and Node.js, featuring real-time inventory management and secure payment processing.',
    image: '/Projects/project3/main.jpg',
    technologies: ['Vue.js', 'Node.js', 'MongoDB'],
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, built using React and Firebase.',
    image: '/Projects/project2/main.jpg',
    technologies: ['React', 'Firebase', 'Tailwind'],
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Nuxt.js and Tailwind CSS, featuring smooth animations and responsive design.',
    image: '/Projects/project1/main.jpg',
    technologies: ['Nuxt.js', 'Tailwind', 'Vue.js'],
    link: '#',
    github: '#'
  }
]

// All projects data (excluding featured projects)
const projects = [
  {
    id: 4,
    title: 'Weather App',
    description: 'A real-time weather application that provides accurate forecasts and location-based weather information.',
    image: 'https://picsum.photos/400/250?random=2',
    technologies: ['JavaScript', 'OpenWeather API', 'CSS3'],
    category: 'Web Development',
    link: '#',
    github: '#'
  },
  {
    id: 5,
    title: 'Recipe Finder',
    description: 'A mobile-friendly application that helps users discover and save recipes based on available ingredients.',
    image: 'https://picsum.photos/400/250?random=3',
    technologies: ['React Native', 'Firebase', 'Redux'],
    category: 'Mobile Apps',
    link: '#',
    github: '#'
  },
  {
    id: 6,
    title: 'Design System',
    description: 'A comprehensive design system and component library for building consistent user interfaces.',
    image: 'https://picsum.photos/400/250?random=5',
    technologies: ['Figma', 'Storybook', 'React'],
    category: 'UI/UX Design',
    link: '#',
    github: '#'
  }
]

// Computed property to filter projects based on selected category
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === selectedCategory.value)
})
</script> 