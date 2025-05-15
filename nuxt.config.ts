import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'static',
    output: {
      publicDir: 'docs'
    }
  },
  app: {
    baseURL: '/q-salsa/',
    cdnURL: '/q-salsa/',
    head: {
      title: 'Q-Salsa',
      htmlAttrs: { lang: 'en' },
      link: [{ rel: 'icon', href: '/q-salsa/favicon.ico' }]
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
  alias:{
      "extends": "../../../tsconfig.base.json"
    },
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

 content: {
    build: {
      markdown: {
        toc: {
          depth: 3, // include h3 headings
        },
        // Object syntax can be used to override default options
        rehypePlugins: {
          'rehype-figure': {

          }
        },
      }
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
