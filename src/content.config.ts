import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(60),
    description: z.string().max(170),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    image: z.enum(['ufuk', 'havuzlar', 'ova', 'laodikya', 'kaskad', 'palestra']),
    service: z.string().optional(),
  }),
});

export const collections = { blog };
