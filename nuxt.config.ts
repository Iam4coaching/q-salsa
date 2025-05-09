// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineContentConfig, defineCollection } from '@nuxt/content'
export default defineNuxtConfig({
  ssr: true,
  
   app: {
    baseURL: '/q-salsa',
    head: {
      title: 'Q-Salsa', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
      // update Nuxt defaults
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    }
  },
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  },
  compatibilityDate: '2024-11-01',
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
      {
        name: "vite-plugin-ignore-sourcemap-warnings",
        apply: "build",
        configResolved(config) {
          config.build.rollupOptions.onwarn = (warning, warn) => {
            if (
              warning.code === "SOURCEMAP_BROKEN" &&
              warning.plugin === "@tailwindcss/vite:generate:build"
            ) {
              return;
            }

            warn(warning);
          };
        },
      },
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
    '@nuxt/image',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
  ]
  
})