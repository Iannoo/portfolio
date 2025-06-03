<template>
  <div>
    <!-- Blog Hero Section -->
    <section class="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">Blog</span>
          </h1>
          <p class="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Thoughts, tutorials, and insights about web development, design, and technology.
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Post Section -->
    <section class="py-12 bg-gray-50 dark:bg-dark/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-dark rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="relative h-64 lg:h-full">
              <img 
                src="https://via.placeholder.com/800x600" 
                alt="Featured Post" 
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div class="p-8 lg:p-12 flex flex-col justify-center">
              <div class="flex items-center space-x-4 mb-4">
                <span class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Featured</span>
                <span class="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm">Web Development</span>
                <span class="text-gray-500 dark:text-gray-400 text-sm">March 20, 2024</span>
              </div>
              <h2 class="text-3xl font-bold mb-4">
                <a href="#" class="hover:text-primary transition-colors">Building Modern Web Applications with Vue 3 and Nuxt</a>
              </h2>
              <p class="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
                A comprehensive guide to building scalable and performant web applications using the latest features of Vue 3 and Nuxt. Learn about composition API, server-side rendering, and more.
              </p>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <img src="/profile.jpg" alt="Meshack Kipkoech" class="w-12 h-12 rounded-full" />
                  <div>
                    <p class="font-medium">Meshack Kipkoech</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</p>
                  </div>
                </div>
                <div class="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>15 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Content -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-8">
            <!-- Blog Posts -->
            <div class="space-y-12">
              <!-- Blog Post Template -->
              <article v-for="post in blogPosts" :key="post.id" class="bg-white dark:bg-dark rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                <div class="grid grid-cols-1 md:grid-cols-2">
                  <div class="relative h-48 md:h-full">
                    <img :src="post.image" :alt="post.title" class="w-full h-full object-cover" />
                  </div>
                  <div class="p-6">
                    <div class="flex flex-wrap items-center gap-2 mb-4">
                      <span v-for="tag in post.tags" :key="tag" class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {{ tag }}
                      </span>
                      <span class="text-gray-500 dark:text-gray-400 text-sm">{{ post.date }}</span>
                    </div>
                    <h2 class="text-2xl font-bold mb-4">
                      <a :href="post.link" class="hover:text-primary transition-colors">{{ post.title }}</a>
                    </h2>
                    <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {{ post.excerpt }}
                    </p>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center space-x-4">
                        <img :src="post.author.image" :alt="post.author.name" class="w-10 h-10 rounded-full" />
                        <div>
                          <p class="font-medium">{{ post.author.name }}</p>
                          <p class="text-sm text-gray-500 dark:text-gray-400">{{ post.author.role }}</p>
                        </div>
                      </div>
                      <div class="flex items-center space-x-4">
                        <div class="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{{ post.readingTime }}</span>
                        </div>
                        <a :href="post.link" class="text-primary font-semibold hover:underline">Read More →</a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <!-- Newsletter Section -->
            <div class="mt-16 bg-gradient-to-r from-primary to-secondary rounded-xl p-8 text-white">
              <div class="text-center max-w-2xl mx-auto">
                <h3 class="text-2xl font-bold mb-4">Subscribe to My Newsletter</h3>
                <p class="text-gray-100 mb-6">Get the latest articles and insights delivered straight to your inbox.</p>
                <form class="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    class="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button type="submit" class="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <!-- Pagination -->
            <div class="mt-12 flex justify-center">
              <nav class="flex items-center space-x-2">
                <a href="#" class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark/50">Previous</a>
                <a href="#" class="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary">1</a>
                <a href="#" class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark/50">2</a>
                <a href="#" class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark/50">3</a>
                <a href="#" class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark/50">Next</a>
              </nav>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-4">
            <!-- Search -->
            <div class="bg-white dark:bg-dark rounded-lg shadow-lg p-6 mb-8">
              <h3 class="text-lg font-semibold mb-4">Search Articles</h3>
              <div class="relative">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search articles..."
                  class="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark"
                  @input="handleSearch"
                />
                <button class="absolute right-3 top-2 text-gray-400 hover:text-primary">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
              <div v-if="searchResults.length > 0" class="mt-4 space-y-2">
                <a 
                  v-for="result in searchResults" 
                  :key="result.id"
                  :href="result.link"
                  class="block p-2 hover:bg-gray-50 dark:hover:bg-dark/50 rounded-md"
                >
                  <p class="font-medium">{{ result.title }}</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">{{ result.excerpt }}</p>
                </a>
              </div>
            </div>

            <!-- Categories -->
            <div class="bg-white dark:bg-dark rounded-lg shadow-lg p-6 mb-8">
              <h3 class="text-lg font-semibold mb-4">Categories</h3>
              <ul class="space-y-2">
                <li v-for="category in categories" :key="category">
                  <a href="#" class="flex items-center justify-between text-gray-600 dark:text-gray-400 hover:text-primary">
                    <span>{{ category.name }}</span>
                    <span class="bg-gray-100 dark:bg-dark/50 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full text-sm">
                      {{ category.count }}
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Recent Posts -->
            <div class="bg-white dark:bg-dark rounded-lg shadow-lg p-6">
              <h3 class="text-lg font-semibold mb-4">Recent Posts</h3>
              <ul class="space-y-4">
                <li v-for="post in recentPosts" :key="post.title">
                  <a href="#" class="flex items-center space-x-4 hover:text-primary">
                    <img :src="post.image" :alt="post.title" class="w-16 h-16 rounded-lg object-cover" />
                    <div>
                      <h4 class="font-medium">{{ post.title }}</h4>
                      <p class="text-sm text-gray-500 dark:text-gray-400">{{ post.date }}</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <!-- Social Links -->
            <div class="bg-white dark:bg-dark rounded-lg shadow-lg p-6">
              <h3 class="text-lg font-semibold mb-4">Follow Me</h3>
              <div class="flex space-x-4">
                <a href="https://github.com/yourusername" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-primary">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-primary">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-primary">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
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

const searchQuery = ref('')
const searchResults = ref([])

// Featured post data
const featuredPost = {
  id: 0,
  title: 'Building Modern Web Applications with Vue 3 and Nuxt',
  excerpt: 'A comprehensive guide to building scalable and performant web applications using the latest features of Vue 3 and Nuxt. Learn about composition API, server-side rendering, and more.',
  image: 'https://via.placeholder.com/800x600',
  date: 'March 20, 2024',
  tags: ['Featured', 'Web Development'],
  readingTime: '15 min read',
  author: {
    name: 'Meshack Kipkoech',
    role: 'Full Stack Developer',
    image: '/profile.jpg'
  },
  link: '#'
}

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Nuxt 3 and Tailwind CSS',
    excerpt: 'Learn how to build modern web applications using Nuxt 3 and Tailwind CSS. This comprehensive guide covers everything from setup to deployment.',
    image: 'https://via.placeholder.com/800x400',
    date: 'March 15, 2024',
    tags: ['Web Development', 'Nuxt.js'],
    readingTime: '10 min read',
    author: {
      name: 'Meshack Kipkoech',
      role: 'Full Stack Developer',
      image: '/profile.jpg'
    },
    link: '#'
  },
  {
    id: 2,
    title: 'The Future of Web Design: Trends to Watch in 2024',
    excerpt: 'Explore the latest trends in web design and learn how to implement them in your projects. From dark mode to micro-interactions, we cover it all.',
    image: 'https://via.placeholder.com/800x400',
    date: 'March 10, 2024',
    tags: ['UI/UX Design', 'Trends'],
    readingTime: '8 min read',
    author: {
      name: 'Meshack Kipkoech',
      role: 'Full Stack Developer',
      image: '/profile.jpg'
    },
    link: '#'
  },
  {
    id: 3,
    title: 'Mastering Vue.js Composition API',
    excerpt: 'A deep dive into Vue.js Composition API and how it can improve your code organization and reusability.',
    image: 'https://via.placeholder.com/800x400',
    date: 'March 5, 2024',
    tags: ['JavaScript', 'Vue.js'],
    readingTime: '12 min read',
    author: {
      name: 'Meshack Kipkoech',
      role: 'Full Stack Developer',
      image: '/profile.jpg'
    },
    link: '#'
  }
]

// Categories data
const categories = [
  { name: 'Web Development', count: 12 },
  { name: 'UI/UX Design', count: 8 },
  { name: 'JavaScript', count: 15 },
  { name: 'Vue.js', count: 10 },
  { name: 'CSS', count: 6 },
  { name: 'Tools & Tips', count: 9 }
]

// Recent posts data
const recentPosts = [
  {
    title: 'Getting Started with Nuxt 3',
    date: 'March 15, 2024',
    image: 'https://via.placeholder.com/100'
  },
  {
    title: 'Web Design Trends 2024',
    date: 'March 10, 2024',
    image: 'https://via.placeholder.com/100'
  },
  {
    title: 'Vue.js Composition API Guide',
    date: 'March 5, 2024',
    image: 'https://via.placeholder.com/100'
  }
]

// Search functionality
const handleSearch = () => {
  if (searchQuery.value.length < 2) {
    searchResults.value = []
    return
  }

  const query = searchQuery.value.toLowerCase()
  searchResults.value = [...blogPosts, featuredPost].filter(post => 
    post.title.toLowerCase().includes(query) || 
    post.excerpt.toLowerCase().includes(query)
  ).slice(0, 5)
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style> 