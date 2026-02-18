import { defineCollection, z } from 'astro:content';

const businesses = defineCollection({
  type: 'content',
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
