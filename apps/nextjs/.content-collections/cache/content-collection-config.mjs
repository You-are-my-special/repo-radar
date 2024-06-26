// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
var posts = defineCollection({
  name: "posts",
  directory: "src/posts",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    image: z.string()
    // summary: z.string(),
  })
});
var content_collections_default = defineConfig({
  collections: [posts]
});
export {
  content_collections_default as default
};
