import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    techStack: z.array(z.string()),
    year: z.number(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    order: z.number().optional(),
    listOnly: z.boolean().default(false),
    outcome: z.string().optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string().url(),
        }),
      )
      .default([]),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    event: z.string(),
    location: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    slidesUrl: z.string().url().optional(),
    videoUrl: z.string().url().optional(),
    codeUrl: z.string().url().optional(),
  }),
});

export const collections = { blog, projects, talks };
