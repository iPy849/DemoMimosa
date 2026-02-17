// Content collections configuration
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    excerpt: z.string(),
    date: z.string(),
    author: z.string(),
    image: z.string(),
  }),
});

const developments = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/developments' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    location: z.string(),
    image: z.string(),
    description: z.string(),
    shortDescription: z.string(),
    amenities: z.array(z.string()),
    featured: z.boolean(),
    mapUrl: z.string(),
    virtualTour: z.string(),
    gallery: z.array(z.string()),
  }),
});

export const collections = { blog, developments };
