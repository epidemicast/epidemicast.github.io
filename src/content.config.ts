import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const publicationLinks = z.object({
  paper: z.url().nullable().default(null),
  code: z.url().nullable().default(null),
  data: z.url().nullable().default(null),
  demo: z.url().nullable().default(null),
  project: z.url().nullable().default(null),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()).min(1),
    thrust: z.number().int().min(1).max(3),
    year: z.number().int().min(2000).max(2100),
    venue: z.string(),
    status: z.enum(['published', 'accepted', 'submitted', 'preprint']),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    featured: z.number().int().min(1).max(10).nullable().default(null),
    links: publicationLinks,
  }),
});

const people = defineCollection({
  loader: file('./src/data/people.json'),
  schema: z.object({
    name: z.string(),
    initials: z.string().min(1).max(4),
    group: z.enum(['lead', 'investigator']),
    role: z.string(),
    expertise: z.string(),
    affiliation: z.string(),
    profile: z.url().nullable(),
  }),
});

const talks = defineCollection({
  loader: file('./src/data/talks.json'),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    location: z.string(),
    type: z.enum(['symposium', 'keynote', 'talk', 'workshop']),
    summary: z.string(),
    links: z.object({
      event: z.url().nullable(),
      slides: z.url().nullable(),
      video: z.url().nullable(),
    }),
  }),
});

export const collections = { publications, people, talks };
