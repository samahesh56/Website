// lib/utils/blog.ts
import { getPostContent, getAllPostSlugs } from './mdx';
import { Post } from '../types/blog';

// Update interface for post with content
interface PostWithContent {
  post: Post;
  content: string;  // Changed from MDXRemoteSerializeResult to string
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = await getAllPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { frontmatter } = await getPostContent(slug);
      return {
        slug,
        ...frontmatter,
      } as Post;
    })
  );

  return posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<PostWithContent | null> {
  try {
    const { source, frontmatter } = await getPostContent(slug);
    return {
      post: {
        slug,
        ...frontmatter,
      } as Post,
      content: source,
    };
  } catch {
    return null;
  }
}