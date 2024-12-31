// lib/utils/mdx.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '../types/blog';

const postsDirectory = path.join(process.cwd(), 'content/blog');

// Add the export for getAllPostSlugs
export function getAllPostSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(fileName => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map(fileName => fileName.replace(/\.(mdx|md)$/, ''));
}

export async function getPostContent(slug: string) {
  let fullPath: string;
  if (fs.existsSync(path.join(postsDirectory, `${slug}.mdx`))) {
    fullPath = path.join(postsDirectory, `${slug}.mdx`);
  } else if (fs.existsSync(path.join(postsDirectory, `${slug}.md`))) {
    fullPath = path.join(postsDirectory, `${slug}.md`);
  } else {
    throw new Error(`Post not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    source: content,
    frontmatter: data as Omit<Post, 'slug'>,
  };
}