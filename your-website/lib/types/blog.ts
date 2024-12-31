// lib/types/blog.ts
export interface Post {
    slug: string;
    title: string;
    date: string;
    summary: string;
    content: string;
    image?: string;
    author: {
      name: string;
      avatar?: string;
    };
    categories: string[];
  }