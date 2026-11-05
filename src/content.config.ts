import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every post has a cover at public/blog/<id>.jpg (+ <id>-640.webp) and a share image at public/og/blog-<id>.jpg,
// drawn by scripts/make-images.cjs.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(60),
    description: z.string().max(170),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    service: z.string().optional(),
    imageAlt: z.string(),
  }),
});

export const collections = { blog };
