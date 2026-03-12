import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().default('Tim Wheyland'),
    relatedServices: z.array(z.string()).default([]),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
