import { defineCollection, z } from 'astro:content';

const techStackCollection = defineCollection({
  type: 'data',
  schema: z.object({
    items: z.array(
      z.object({
        name: z.string(),
        icon: z.string(),
        category: z.enum(['language', 'framework', 'database', 'testing', 'devops', 'other']),
      }),
    ),
  }),
});

const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    items: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        thumbnail: z.string(),
        image: z.string(),
        gitHubLink: z.string(),
        demoLink: z.string().optional(),
        stack: z.array(z.string()),
        features: z.array(z.string()),
        order: z.number(),
        longDescription: z.string().optional(),
      }),
    ),
  }),
});

const skillsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    categories: z.array(
      z.object({
        category: z.string(),
        items: z.array(z.string()),
        order: z.number(),
      }),
    ),
  }),
});

const educationCollection = defineCollection({
  type: 'data',
  schema: z.object({
    items: z.array(
      z.object({
        institution: z.string(),
        program: z.string(),
        date: z.string(),
        description: z.string(),
        order: z.number(),
      }),
    ),
  }),
});

export const collections = {
  techStack: techStackCollection,
  projects: projectsCollection,
  skills: skillsCollection,
  education: educationCollection,
};
