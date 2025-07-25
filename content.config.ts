import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "blogs/**/*.md",
      schema: z.object({
        date: z.string(),
        title: z.string(),
        description: z.string(),
      }),
    }),
  },
})