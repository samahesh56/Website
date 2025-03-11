// app/blog/page.tsx
import { MainLayout } from '@/components/Layout/MainLayout';
import { getAllPosts } from '@/lib/utils/blog';  
import BlogClientWrapper from '@/components/blog/BlogClientWrapper';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <MainLayout>
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Blog
      </h1>
      
      <BlogClientWrapper posts={posts} />
    </MainLayout>
  );
}