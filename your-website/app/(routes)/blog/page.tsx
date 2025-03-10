// app/blog/page.tsx
import { MainLayout } from '@/components/Layout/MainLayout';
import { getAllPosts } from '@/lib/utils/blog';  
import { PostCard } from '@/components/blog/PostCard';
import ErrorBoundary from '@/components/shared/ErrorBoundary';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <MainLayout>
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Blog
      </h1>
      
      <ErrorBoundary fallback={
        <div className="text-center py-12">
          <p className="text-gray-300 mb-4">Unable to load blog posts at this time.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      }>
        {posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map(post => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-gray-300">No blog posts available yet. Check back soon!</p>
        )}
      </ErrorBoundary>
    </MainLayout>
  );
}