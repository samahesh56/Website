// app/(routes)/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/utils/blog';
import { PostHeader } from '@/components/blog/PostHeader';
import Link from 'next/link';
import { marked } from 'marked'; // You'll need to install this package

export default async function PostPage({ params }: { params: { slug: string } }) {
  try {
    // Await the params as required in Next.js 15
    const resolvedParams = await params;
    
    const slug = resolvedParams.slug;
    const postData = await getPostBySlug(slug);
    
    if (!postData) {
      return notFound();
    }

    const { post, content } = postData;
    
    // Use marked to convert markdown to HTML
    const htmlContent = marked(content);

    return (
      <article className="max-w-3xl mx-auto py-12 px-4">
        <PostHeader post={post} />
        
        <div className="prose prose-lg prose-invert max-w-none mt-6">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800">
          <Link 
            href="/blog" 
            className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to all posts
          </Link>
        </div>
      </article>
    );
  } catch (error) {
    console.error('Error in blog post page:', error);
    
    // Provide a fallback UI
    return (
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Blog Post Error</h1>
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
          <p className="text-gray-300 mb-4">Sorry, we could not load this blog post. Please try again later.</p>
          <Link 
            href="/blog" 
            className="text-blue-400 hover:text-blue-300"
          >
            Return to all posts
          </Link>
        </div>
      </div>
    );
  }
}