// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineContentConfig, defineCollection } from '@nuxt/content'
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'static',
    output: {
      publicDir: 'docs',
    },
  },
   app: {
    baseURL: '/q-salsa/',
    cdnURL: '/q-salsa/' , 
    head: {
      title: 'Q-Salsa', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      // update Nuxt defaults
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    }
  },
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,    },
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
    plugins: [
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_vars.scss" as * ;',
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