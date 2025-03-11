// app/(routes)/blog/[slug]/page.tsx
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug } from '@/lib/utils/blog';
import { PostHeader } from '@/components/blog/PostHeader';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }: { params: { slug: string } }) {
  const postData = await getPostBySlug(params.slug);
  
  if (!postData) {
    notFound();
  }

  const { post, content } = postData;

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <PostHeader post={post} />
      <div className="prose prose-lg prose-invert max-w-none">
        <MDXRemote source={content} />
      </div>
    </article>
  );
}