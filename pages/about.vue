<template>
  <div>
    <!-- About Hero Section -->
    <section class="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-200">About Me</span>
          </h1>
          <p class="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            A passionate Computer Science student and freelance developer, bridging academic knowledge with real-world applications to create innovative digital solutions.
          </p>
        </div>
      </div>
    </section>

    <!-- About Content -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
          <!-- Personal Info -->
          <div class="space-y-8">
            <div>
              <h2 class="text-3xl font-bold mb-6 tracking-tight">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Who I Am</span>
              </h2>
              <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
                I'm a Computer Science student at Kisii University, currently pursuing my degree while gaining hands-on experience through my attachment program. My journey in tech started with a curiosity about how digital solutions can solve real-world problems, and this passion has only grown stronger with time.
              </p>
              <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
                By day, I'm a dedicated student and intern, immersing myself in academic learning and practical experience. By night, I transform ideas into digital reality as a freelance software developer, creating solutions that make a difference in people's lives.
              </p>
            </div>
            
            <div class="bg-white dark:bg-dark rounded-xl shadow-lg p-6 space-y-4">
              <div class="flex items-center group">
                <span class="text-2xl mr-4 text-primary group-hover:scale-110 transition-transform">📍</span>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">Location</h3>
                  <p class="text-gray-600 dark:text-gray-400">Eldoret, Kenya</p>
                </div>
              </div>
              <div class="flex items-center group">
                <span class="text-2xl mr-4 text-primary group-hover:scale-110 transition-transform">🎓</span>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">Education</h3>
                  <p class="text-gray-600 dark:text-gray-400">BSc. Computer Science, Kisii University</p>
                </div>
              </div>
              <div class="flex items-center group">
                <span class="text-2xl mr-4 text-primary group-hover:scale-110 transition-transform">💼</span>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">Experience</h3>
                  <p class="text-gray-600 dark:text-gray-400">Freelance Developer & Student</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Experience Timeline -->
          <div class="space-y-8">
            <h2 class="text-3xl font-bold mb-6 tracking-tight">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">My Journey</span>
            </h2>
            <div class="space-y-8">
              <!-- Experience Item 1 -->
              <div class="relative pl-8 border-l-2 border-primary group">
                <div class="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                <div class="mb-2">
                  <h3 class="text-xl font-bold">Freelance Developer</h3>
                  <p class="text-primary font-medium">2023 - Present</p>
                </div>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Working with clients to develop custom web applications and solutions. Specializing in modern web technologies and responsive design.
                </p>
              </div>

              <!-- Experience Item 2 -->
              <div class="relative pl-8 border-l-2 border-primary group">
                <div class="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                <div class="mb-2">
                  <h3 class="text-xl font-bold">Computer Science Student</h3>
                  <p class="text-primary font-medium">2021 - Present</p>
                </div>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Pursuing a degree in Computer Science at Kisii University, focusing on software development, algorithms, and data structures.
                </p>
              </div>

              <!-- Experience Item 3 -->
              <div class="relative pl-8 border-l-2 border-primary group">
                <div class="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary group-hover:scale-150 transition-transform"></div>
                <div class="mb-2">
                  <h3 class="text-xl font-bold">Attachment Program</h3>
                  <p class="text-primary font-medium">2023 - Present</p>
                </div>
                <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Gaining practical experience through the university's attachment program, working on real-world projects and learning industry best practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Skills Visualization -->
        <div class="mt-20">
          <h2 class="text-3xl font-bold mb-12 text-center tracking-tight">
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Technical Expertise</span>
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="bg-white dark:bg-dark rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
              <div class="text-4xl mb-4">💻</div>
              <h3 class="text-xl font-bold mb-3">Frontend</h3>
              <ul class="space-y-2 text-gray-600 dark:text-gray-400">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Vue.js & Nuxt.js
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  React
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Tailwind CSS
                </li>
              </ul>
            </div>
            <div class="bg-white dark:bg-dark rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
              <div class="text-4xl mb-4">⚙️</div>
              <h3 class="text-xl font-bold mb-3">Backend</h3>
              <ul class="space-y-2 text-gray-600 dark:text-gray-400">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Node.js
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Python
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  RESTful APIs
                </li>
              </ul>
            </div>
            <div class="bg-white dark:bg-dark rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
              <div class="text-4xl mb-4">🎨</div>
              <h3 class="text-xl font-bold mb-3">Design</h3>
              <ul class="space-y-2 text-gray-600 dark:text-gray-400">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  UI/UX Design
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Responsive Design
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Figma
                </li>
              </ul>
            </div>
            <div class="bg-white dark:bg-dark rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform">
              <div class="text-4xl mb-4">🚀</div>
              <h3 class="text-xl font-bold mb-3">Tools & Others</h3>
              <ul class="space-y-2 text-gray-600 dark:text-gray-400">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Git & GitHub
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Docker
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  AWS Basics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-gray-50 dark:bg-dark/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-6 tracking-tight">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Let's Work Together</span>
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
          Whether you have a project in mind or just want to connect, I'm always open to discussing new opportunities and creative ideas.
        </p>
        <NuxtLink 
          to="/contact" 
          class="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition-colors transform hover:scale-105 duration-300"
        >
          Get in Touch
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script> 