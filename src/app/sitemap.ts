import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/posts';

export default function sitemap(): MetadataRoute.Sitemap {
 const domain = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;

 const staticPages: MetadataRoute.Sitemap = [
  {
   url: `${domain}`,
   lastModified: new Date(),
   changeFrequency: 'monthly',
   priority: 1.0,
  },
  {
   url: `${domain}/blog`,
   lastModified: new Date(),
   changeFrequency: 'weekly',
   priority: 0.9,
  },
 ];

 const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
  url: `${domain}/blog/${post.slug}`,
  lastModified: new Date(post.date),
  changeFrequency: 'never',
  priority: 0.8,
 }));

 return [...staticPages, ...blogPosts];
}
