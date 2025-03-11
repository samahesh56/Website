import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/utils/blog';
import { projects } from '@/lib/utils/projects';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://sankeerthmahesh.com'; // Replace with your actual domain when deployed
  const posts = await getAllPosts();
  
  // Core pages
  const routes = ['', '/about', '/projects', '/blog', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
  
  // Blog posts
  const blogEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  
  // Project pages
  const projectEntries = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.dates.completed || project.dates.started),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  return [...routes, ...blogEntries, ...projectEntries];
}