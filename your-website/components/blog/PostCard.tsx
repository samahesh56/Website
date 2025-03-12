import Link from 'next/link';
import { Post } from '@/lib/types/blog';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  // Debug the post object to verify slug
  console.log('Post slug:', post.slug);

  return (
    <Link href={`/blog/${post.slug}`} className="block w-full">
      <article className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full hover:scale-[1.01]">
        <div className="p-5">
          {/* Categories with flex-wrap */}
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.map(category => (
              <span 
                key={category}
                className="text-xs sm:text-sm bg-gray-700 text-gray-300 rounded-full px-2 py-1 whitespace-nowrap"
              >
                {category}
              </span>
            ))}
          </div>
          
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-white line-clamp-2">{post.title}</h2>
          <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.summary}</p>
          
          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400">
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