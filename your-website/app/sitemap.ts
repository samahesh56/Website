    import { MetadataRoute } from 'next';
    import { getAllPosts } from '@/lib/utils/blog';
    import { projects } from '@/lib/utils/projects';

    export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
        const baseUrl = 'https://akkumahesh.com';
        const posts = await getAllPosts();
        
        // Core pages
        const routes = ['', '/about', '/projects', '/blog', '/contact'].map((route) => ({
          url: `${baseUrl}${route}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: route === '' ? 1 : 0.8,
        }));
        
        // Blog posts
        const blogEntries = posts.map((post) => {
          // Validate post date
          const postDate = post.date ? new Date(post.date) : new Date();
          const isValidDate = !isNaN(postDate.getTime());
          
          return {
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: isValidDate ? postDate : new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
          };
        });
        
        // Project pages
        const projectEntries = projects.map((project) => {
          // Validate project date
          const dateValue = project.dates.completed || project.dates.started;
          const projectDate = dateValue ? new Date(dateValue) : new Date();
          const isValidDate = !isNaN(projectDate.getTime());
          
          return {
            url: `${baseUrl}/projects/${project.slug}`,
            lastModified: isValidDate ? projectDate : new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
          };
        });
        
        return [...routes, ...blogEntries, ...projectEntries];
      }
      