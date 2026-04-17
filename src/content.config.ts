import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const businesses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/businesses' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    color: z.string(),
    color_secondary: z.string().optional(),
    hero_image: z.string(),
    email: z.string(),
    order: z.number(),
  }),
});

export const collections = { businesses };
