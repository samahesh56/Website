// app/blog/page.tsx
import { MainLayout } from '@/components/Layout/MainLayout';
import { getAllPosts } from '@/lib/utils/blog';  
import { PostCard } from '@/components/blog/PostCard';

export default async function BlogPage() {
  try {
    const posts = await getAllPosts();

    return (
      <MainLayout>
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Blog
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </MainLayout>
    );
  } catch (error) {
    console.error('Error fetching posts:', error);
    return (
      <MainLayout>
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Blog
        </h1>
        <p className="text-gray-300">Unable to load blog posts at this time.</p>
      </MainLayout>
    );
  }
}