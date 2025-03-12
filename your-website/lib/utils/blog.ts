// lib/utils/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getPostContent, getAllPostSlugs } from './mdx';
import { Post } from '../types/blog';

const postsDirectory = path.join(process.cwd(), 'content/blog');

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

export async function getPostBySlug(slug: string) {
  let fullPath: string;
  if (fs.existsSync(path.join(postsDirectory, `${slug}.mdx`))) {
    fullPath = path.join(postsDirectory, `${slug}.mdx`);
  } else if (fs.existsSync(path.join(postsDirectory, `${slug}.md`))) {
    fullPath = path.join(postsDirectory, `${slug}.md`);
  } else {
    throw new Error(`Post not found: ${slug}`);
  }

  console.log('Found MD file:', fullPath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  console.log('Parsed frontmatter:', data);

  return {
    post: {
      slug,
      ...data as Omit<Post, 'slug'>,
    } as Post,
    content: content, // Just returning the raw markdown content
  };
}