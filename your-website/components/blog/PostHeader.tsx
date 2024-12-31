// components/blog/PostHeader.tsx
import { Post } from '@/lib/types/blog';

interface PostHeaderProps {
  post: Post;
}

export function PostHeader({ post }: PostHeaderProps) {
  return (
    <header className="mb-8">
      <div className="flex gap-2 mb-4">
        {post.categories.map(category => (
          <span 
            key={category}
            className="text-sm bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1"
          >
            {category}
          </span>
        ))}
      </div>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center justify-between text-gray-600 dark:text-gray-300">
        <span>{post.author.name}</span>
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString()}
        </time>
      </div>
    </header>
  );
}