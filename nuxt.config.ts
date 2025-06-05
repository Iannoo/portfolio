// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/image',
  ],
  image: {
    quality: 80,
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  app: {
    head: {
      title: 'Meshack K Kosgei - Computer Science Student & Software Developer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Portfolio of Meshack K Kosgei, a Computer Science student at Kisii University. Software developer specializing in web development, currently on attachment in Eldoret.' 
        },
        { 
          name: 'keywords', 
          content: 'Meshack Kosgei, Computer Science Student, Software Developer, Web Development, Kisii University, Portfolio' 
        },
        { name: 'theme-color', content: '#3B82F6' },
        { name: 'format-detection', content: 'telephone=no' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Meshack K Kosgei - Computer Science Student & Software Developer' },
        { property: 'og:description', content: 'Portfolio of Meshack K Kosgei, a Computer Science student at Kisii University. Software developer specializing in web development, currently on attachment in Eldoret.' },
        { property: 'og:image', content: '/og-image.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Meshack K Kosgei - Computer Science Student & Software Developer' },
        { name: 'twitter:description', content: 'Portfolio of Meshack K Kosgei, a Computer Science student at Kisii University. Software developer specializing in web development, currently on attachment in Eldoret.' },
        { name: 'twitter:image', content: '/og-image.jpg' },
        { name: 'author', content: 'Meshack K Kosgei' },
        { name: 'robots', content: 'index, follow' },
        { name: 'language', content: 'English' },
        { name: 'revisit-after', content: '7 days' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preload', as: 'font', href: '/fonts/inter-var.woff2', type: 'font/woff2', crossorigin: '' }
      ]
    }
  },
  nitro: {
    compressPublicAssets: true,
    minify: true,
  },
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['vue', 'pinia'],
            'ui': ['@headlessui/vue', '@heroicons/vue']
          }
        }
      }
    }
  },
  components: {
    dirs: [
      '~/components',
      {
        path: '~/components/ui',
        prefix: 'Ui'
      }
    ]
  }
})
