import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    status: z.enum(['ongoing', 'complete', 'archived', 'paused']).default('complete'),
    link: z.string().url().optional(),
    page: z.string().url().optional(),       // deployed project page; takes priority over link for card click
    dateRange: z.string().optional(),        // human-readable major dev window, e.g. "Apr – May 2025"
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
