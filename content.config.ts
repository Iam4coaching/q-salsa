import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    events: defineCollection({
      source: 'events/*.json',
      type: 'page',
      // Define custom schema for docs collection
      schema: z.object({
        tags: z.array(z.string()),
        image: z.string(),
        date: z.date()
      })
    })
  }
})
