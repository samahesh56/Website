// app/(routes)/blog/[slug]/page.tsx
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug } from '@/lib/utils/blog';
import { PostHeader } from '@/components/blog/PostHeader';
import { notFound } from 'next/navigation';
import { MDXComponentProps } from '@/lib/types/mdx';
import OptimizedImage from '@/components/ui/OptimizedImage';

// Enhanced MDX components with styling
const components = {
  h1: ({ children, ...props }: MDXComponentProps) => (
    <h1 className="text-3xl font-bold mt-8 mb-4 text-white" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: MDXComponentProps) => (
    <h2 className="text-2xl font-bold mt-8 mb-4 text-white" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: MDXComponentProps) => (
    <h3 className="text-xl font-bold mt-6 mb-3 text-white" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: MDXComponentProps) => (
    <p className="my-4 text-gray-300 leading-relaxed" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: MDXComponentProps) => (
    <ul className="list-disc list-inside my-4 pl-4 text-gray-300" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: MDXComponentProps) => (
    <ol className="list-decimal list-inside my-4 pl-4 text-gray-300" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: MDXComponentProps) => (
    <li className="my-1" {...props}>
      {children}
    </li>
  ),
  a: ({ children, href, ...props }: MDXComponentProps & { href?: string }) => (
    <a 
      href={href} 
      className="text-blue-400 hover:text-blue-300 underline" 
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </a>
  ),
  blockquote: ({ children, ...props }: MDXComponentProps) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 italic my-6 text-gray-400" {...props}>
      {children}
    </blockquote>
  ),
  code: ({ children, className, ...props }: MDXComponentProps) => {
    // Check if this is an inline code or a code block
    const match = /language-(\w+)/.exec(className || '');
    
    return match ? (
      // Code block with syntax highlighting
      <div className="rounded-lg bg-gray-800 my-6 overflow-hidden">
        <div className="px-4 py-2 bg-gray-900 text-xs text-gray-400 uppercase">
          {match[1]}
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      </div>
    ) : (
      // Inline code
      <code className="bg-gray-800 px-1.5 py-0.5 rounded text-gray-300 font-mono text-sm" {...props}>
        {children}
      </code>
    );
  },
  img: ({ src, alt, ...props }: MDXComponentProps & { src?: string, alt?: string }) => (
    <div className="my-6 relative">
      {src && (
        <OptimizedImage 
          src={src} 
          alt={alt || 'Blog post image'} 
          width={800} 
          height={450} 
          className="rounded-lg" 
          {...props} // Forward all remaining props
        />
      )}
    </div>
  ),
  hr: ({ ...props }: MDXComponentProps) => (
    <hr className="my-8 border-gray-700" {...props} />
  ),
};

// This type should match what Next.js 15 is expecting for dynamic routes
type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Props) {
  // No need to resolve params or use the 'use' hook - it's now a normal async function
  const { slug } = params;
  
  const postData = await getPostBySlug(slug);
  
  if (!postData) {
    notFound();
    return null; // This line won't execute but helps TypeScript understand the flow
  }

  const { post, content } = postData;

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <PostHeader post={post} />
      <div className="prose prose-lg prose-invert max-w-none">
        <MDXRemote source={content} components={components} />
      </div>
    </article>
  );
}