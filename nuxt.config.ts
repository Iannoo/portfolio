// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
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
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Meshack K Kosgei - Computer Science Student & Software Developer' },
        { property: 'og:description', content: 'Portfolio of Meshack K Kosgei, a Computer Science student at Kisii University. Software developer specializing in web development, currently on attachment in Eldoret.' },
        { property: 'og:image', content: '/og-image.jpg' }, // You'll need to add this image
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Meshack K Kosgei - Computer Science Student & Software Developer' },
        { name: 'twitter:description', content: 'Portfolio of Meshack K Kosgei, a Computer Science student at Kisii University. Software developer specializing in web development, currently on attachment in Eldoret.' },
        { name: 'twitter:image', content: '/og-image.jpg' }, // You'll need to add this image
        // Additional SEO
        { name: 'author', content: 'Meshack K Kosgei' },
        { name: 'robots', content: 'index, follow' },
        { name: 'language', content: 'English' },
        { name: 'revisit-after', content: '7 days' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
