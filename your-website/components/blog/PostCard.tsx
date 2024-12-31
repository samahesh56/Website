// components/blog/PostCard.tsx
import Link from 'next/link';
import { Post } from '@/lib/types/blog';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="p-6">
          <div className="flex gap-2 mb-3">
            {post.categories.map(category => (
              <span 
                key={category}
                className="text-sm bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1"
              >
                {category}
              </span>
            ))}
          </div>
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{post.summary}</p>
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>{post.author.name}</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString()}
            </time>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default PostCard;