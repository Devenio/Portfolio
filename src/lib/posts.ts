import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { estimateReadingTime } from './utils';
import { PostContent, PostMetadata } from './types';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getAllPosts(): PostMetadata[] {
 const files = fs.readdirSync(postsDirectory);

 const posts = files.map((filename) => {
  const filePath = path.join(postsDirectory, filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);

  return {
   slug: filename.replace(/\.mdx?$/, ''),
   title: data.title || 'Untitled',
   description: data.description || 'No description available.',
   date: data.date ? new Date(data.date) : new Date(0), // Use Date object for sorting
   cover: data.cover || '/thumbnail.png',
   readingTime: estimateReadingTime(content),
   keywords: data.keywords || [],
  };
 });

 // Sort posts by date in descending order (newest first)
 return posts.sort((a, b) => b.date.getTime() - a.date.getTime());
}

export function getPostBySlug(slug: string): PostContent {
 const filePath = path.join(postsDirectory, `${slug}.mdx`);
 const fileContents = fs.readFileSync(filePath, 'utf8');
 const { content, data } = matter(fileContents);

 return {
  content,
  metadata: {
   slug,
   title: data.title || 'Untitled',
   description: data.description || 'No description available.',
   date: data.date || 'Unknown date',
   cover: data.cover || '/default-cover.jpg',
   readingTime: estimateReadingTime(content),
   keywords: data.keywords || [],
  },
 };
}
