// app/blog/page.tsx
import { getAllPosts } from '@/lib/utils/blog';  // Make sure this path is correct
import { PostCard } from '@/components/blog/PostCard';

export default async function BlogPage() {
  try {
    const posts = await getAllPosts();

    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map(post => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching posts:', error);
    return (
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <p>Unable to load blog posts at this time.</p>
      </div>
    );
  }
}