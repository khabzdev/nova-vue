// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/icon',
    '@nuxtjs/color-mode'
  ],

  nitro: {
    preset: 'vercel'
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark'
  },

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}
    }
  },

  app: {
    head: {
      title: 'Nova Vue - Documentation',
      meta: [
        { name: 'description', content: 'A modern Vue 3 component library built with Reka UI and Tailwind CSS' },
        { name: 'theme-color', content: '#0a0a0a' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },

  css: [
    '~/assets/css/tailwind.css',
    '@nova-vue/ui/styles.css',
    '~/assets/css/main.css'
  ],

  icon: {
    provider: 'iconify',
    class: 'nova-icon'
  },

  routeRules: {
    '/': { redirect: '/getting-started/introduction' }
  }
})
