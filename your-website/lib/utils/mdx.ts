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
  console.log('Looking for post files with slug:', slug);
  console.log('Posts directory:', postsDirectory);
  
  let fullPath: string;
  if (fs.existsSync(path.join(postsDirectory, `${slug}.mdx`))) {
    fullPath = path.join(postsDirectory, `${slug}.mdx`);
    console.log('Found MDX file:', fullPath);
  } else if (fs.existsSync(path.join(postsDirectory, `${slug}.md`))) {
    fullPath = path.join(postsDirectory, `${slug}.md`);
    console.log('Found MD file:', fullPath);
  } else {
    console.error('No file found for slug:', slug);
    throw new Error(`Post not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  console.log('Parsed frontmatter:', data);

  return {
    source: content,
    frontmatter: data as Omit<Post, 'slug'>,
  };
}