// lib/types/project.ts
export interface Project {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    categories: string[];
    technologies: string[];
    images: {
      thumbnail: string;
      featured: string;
      gallery: string[];
    };
    links: {
      github?: string;
      demo?: string;
      documentation?: string;
    };
    dates: {
      started: string;
      completed?: string;
    };
    featured: boolean;
    metrics?: {
      impact: string;
      results: string[];
    };
  }