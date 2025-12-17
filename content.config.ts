import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            type: 'page',
            source: 'blog/*.md', // This looks for files in content/blog/
            schema: z.object({
                title: z.string(),
                date: z.date(),
                description: z.string(),
                // Add any other fields you want to edit in Studio
            })
        })
    }
})