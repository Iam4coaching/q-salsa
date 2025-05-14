export default defineNuxtConfig({
  ssr: true,

  nitro: {
    preset: 'static',
    output: {
      publicDir: 'docs'  // ✅ THIS is the correct way to set output dir
    }
  },

  app: {
    baseURL: '/q-salsa/',
    cdnURL: '/q-salsa/',
    head: {
      title: 'Q-Salsa',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/q-salsa/favicon.ico' },
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    }
  },

  devtools: { enabled: true },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  css: [
    'animate.css/animate.min.css',
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
          additionalData: '@use "~/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },

  ui: {
    theme: {
      colors: ['primary']
    }
  },

  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
  ]
})
