// app/blog/[slug]/page.tsx
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug } from '@/lib/utils/blog';
import { PostHeader } from '@/components/blog/PostHeader';
import { notFound } from 'next/navigation';
import { MDXComponentProps } from '@/lib/types/mdx';    

const components = {
  h2: ({ children, ...props }: MDXComponentProps) => (
    <h2 className="text-2xl font-bold my-4" {...props}>
      {children}
    </h2>
  ),
};

export default async function PostPage({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const postData = await getPostBySlug(slug);
  
  if (!postData) {
    notFound();
  }

  const { post, content } = postData;

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <PostHeader post={post} />
      <div className="prose prose-lg prose-gray max-w-none dark:prose-invert">
        <MDXRemote source={content} components={components} />
      </div>
    </article>
  );
}