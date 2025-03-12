'use client';

import { Post } from '@/lib/types/blog';
import { PostCard } from '@/components/blog/PostCard';
import ErrorBoundary from '@/components/shared/ErrorBoundary';

interface BlogClientWrapperProps {
  posts: Post[];
}

export default function BlogClientWrapper({ posts }: BlogClientWrapperProps) {
  return (
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-1">
          {posts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-gray-300">No blog posts available yet. Check back soon!</p>
      )}
    </ErrorBoundary>
  );
}