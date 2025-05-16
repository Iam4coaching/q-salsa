import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    events: defineCollection({
      type: 'page',
      source: 'events/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // YYYY-MM-DD format
        starttime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/), // HH:mm
        endtime: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/), // HH:mm
        adress: z.string(),
        draft: z.boolean(),
        thumbnail: z.string().optional()
      })
      
    })
  }
})
