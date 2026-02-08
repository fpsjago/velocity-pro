import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    author: z.object({
      name: z.string(),
      role: z.string(),
      avatar: z.string().optional(),
    }),
    category: z.enum(['Engineering', 'Product', 'Growth', 'Design', 'Company']),
    coverImage: z.string().optional(),
    readTime: z.string(),
    featured: z.boolean().default(false),
    layout: z.enum(['standard', 'wide', 'minimal']).default('standard'),
    tags: z.array(z.string()).default([]),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    industry: z.enum(['SaaS', 'E-commerce', 'Fintech', 'Healthcare', 'Education', 'Agency']),
    challenge: z.string(),
    excerpt: z.string(),
    logo: z.string().optional(),
    coverImage: z.string().optional(),
    metrics: z.array(z.object({
      value: z.string(),
      label: z.string(),
      prefix: z.string().optional(),
      suffix: z.string().optional(),
    })),
    testimonial: z.object({
      quote: z.string(),
      name: z.string(),
      role: z.string(),
    }).optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const changelog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/changelog' }),
  schema: z.object({
    version: z.string(),
    date: z.string(),
    title: z.string(),
    description: z.string(),
    changes: z.array(z.object({
      type: z.enum(['feature', 'fix', 'improvement', 'breaking']),
      text: z.string(),
    })),
  }),
});

const docs = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().default(0),
    section: z.string().optional(),
  }),
});

export const collections = { blog, 'case-studies': caseStudies, changelog, docs };
