import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const highlight = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  details: z.array(z.string().min(1)).optional(),
});

const monthly = defineCollection({
  loader: glob({ base: './src/content/monthly', pattern: '*.yml' }),
  schema: z.object({
    draft: z.boolean().default(true),
    update: highlight,
    didYouKnow: highlight,
    goodToKnow: highlight,
  }),
});

export const collections = { monthly };
