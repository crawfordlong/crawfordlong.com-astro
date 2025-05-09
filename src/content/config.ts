import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string().optional(),
    summary: z.string().optional(),
    date: z.date(),
    type: z.enum(['photo', 'text']),
    image: z.string().optional(), // URL or path to the image
  }),
});

export const collections = {
  posts,
};
