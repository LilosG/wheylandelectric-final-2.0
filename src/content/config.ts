import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    date: z.coerce.date().optional(),
    publishDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Tim Wheyland'),
    relatedServices: z.array(z.string()).default([]),
    faqs: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    serviceAreas: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }).transform((data) => ({
    ...data,
    date: data.date ?? data.publishDate ?? new Date(),
    publishDate: data.publishDate ?? data.date ?? new Date(),
  })),
});

export const collections = { blog: blogCollection };
