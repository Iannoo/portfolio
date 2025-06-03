import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    // Contact Information
    contactInfo: {
      email: 'ianmesh2000@gmail.com',
      phone: '+254 740 269 748',
      whatsapp: '+254 740 269 748',
      location: 'Eldoret, Kenya',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/meshack-kosgei-04103127a/',
        twitter: 'https://x.com/_iannoo'
      }
    },
    
    // Projects
    projects: {
      featured: [
        {
          id: 1,
          title: 'E-commerce Platform',
          description: 'A full-stack e-commerce platform with real-time inventory management.',
          image: '/projects/ecommerce.jpg',
          technologies: ['Vue.js', 'Node.js', 'MongoDB'],
          link: '#',
          github: '#'
        },
        {
          id: 2,
          title: 'Task Management App',
          description: 'A collaborative task management application with real-time updates.',
          image: '/projects/taskapp.jpg',
          technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
          link: '#',
          github: '#'
        },
        {
          id: 3,
          title: 'Portfolio Website',
          description: 'A modern portfolio website built with Vue.js and Nuxt.',
          image: '/projects/portfolio.jpg',
          technologies: ['Vue.js', 'Nuxt', 'Tailwind CSS'],
          link: '#',
          github: '#'
        }
      ],
      all: [
        {
          id: 4,
          title: 'Weather App',
          description: 'A weather application with real-time updates and forecasts.',
          image: '/projects/weather.jpg',
          technologies: ['Vue.js', 'OpenWeather API'],
          category: 'Web App',
          link: '#',
          github: '#'
        },
        {
          id: 5,
          title: 'Recipe Finder',
          description: 'A recipe discovery app with search and filtering capabilities.',
          image: '/projects/recipe.jpg',
          technologies: ['Vue.js', 'Spoonacular API'],
          category: 'Web App',
          link: '#',
          github: '#'
        },
        {
          id: 6,
          title: 'Design System',
          description: 'A comprehensive design system for web applications.',
          image: '/projects/design.jpg',
          technologies: ['Vue.js', 'Storybook', 'Tailwind CSS'],
          category: 'Design',
          link: '#',
          github: '#'
        }
      ]
    },

    // Blog Posts
    blogPosts: [
      {
        id: 1,
        title: 'Getting Started with Vue.js',
        excerpt: 'Learn the basics of Vue.js and how to build your first application.',
        image: '/blog/vue.jpg',
        date: '2024-03-15',
        author: 'Meshack Kipkoech',
        category: 'Development',
        tags: ['Vue.js', 'JavaScript', 'Web Development'],
        readingTime: '5 min read'
      },
      // Add more blog posts as needed
    ],

    // Skills
    skills: [
      {
        category: 'Frontend',
        icon: '💻',
        technologies: ['Vue.js', 'React', 'HTML5', 'CSS3']
      },
      {
        category: 'Backend',
        icon: '⚙️',
        technologies: ['Node.js', 'Python', 'Django']
      },
      {
        category: 'Design',
        icon: '🎨',
        technologies: ['UI/UX', 'Figma', 'Tailwind']
      },
      {
        category: 'Tools',
        icon: '🚀',
        technologies: ['Git', 'Docker', 'AWS']
      }
    ]
  }),

  getters: {
    getFeaturedProjects: (state) => state.projects.featured,
    getAllProjects: (state) => state.projects.all,
    getContactInfo: (state) => state.contactInfo,
    getBlogPosts: (state) => state.blogPosts,
    getSkills: (state) => state.skills,
    
    // Filter projects by category
    getProjectsByCategory: (state) => (category) => {
      return state.projects.all.filter(project => project.category === category)
    },
    
    // Get blog posts by category
    getBlogPostsByCategory: (state) => (category) => {
      return state.blogPosts.filter(post => post.category === category)
    }
  },

  actions: {
    // Add a new project
    addProject(project) {
      this.projects.all.push(project)
    },

    // Add a new blog post
    addBlogPost(post) {
      this.blogPosts.push(post)
    },

    // Update contact information
    updateContactInfo(info) {
      this.contactInfo = { ...this.contactInfo, ...info }
    },

    // Update skills
    updateSkills(skills) {
      this.skills = skills
    }
  }
}) 