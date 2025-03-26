import { defineContentConfig, defineCollection } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      source: "posts/*.md",
      type: "page",
      // Define custom schema for docs collection
      // schema: z.object({
      //   tags: z.array(z.string()),
      //   image: z.string(),
      //   date: z.date(),
      // }),
    }),
    notes: defineCollection({
      source: "notes/*.md",
      type: "page",
    }),
  },
});
