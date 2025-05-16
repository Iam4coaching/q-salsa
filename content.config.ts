import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        image: z.string(),
        adress: z.string(),
        thumbnail: z.string(),
        date: z.date(),
        draft: z.boolean(),
      })
    })
  }
})
