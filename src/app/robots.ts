import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
 const domain = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;

 return {
  rules: [{ userAgent: '*', allow: '/' }],
  sitemap: `${domain}/sitemap.xml`,
 };
}
