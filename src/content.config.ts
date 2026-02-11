import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    author: z.string(),
    image: z.string(),
    lang: z.enum(['es', 'en']),
    pairId: z.string(),
  }),
});

export const collections = { blog };
