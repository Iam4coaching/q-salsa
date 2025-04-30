// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,    },
    ],
    css: [
      // SCSS file in the project
      '@/assets/scss/main.scss'
    ],
  image: {
    format: ['png'],
    dir: 'assets/Images',
},
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_vars.scss" as * ;',
        },
      },
    },
  },

  modules: [
    '@nuxt/image',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
  ]
  
})