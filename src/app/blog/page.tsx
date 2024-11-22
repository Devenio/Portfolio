import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import Curves from '@/components/curves';
import { Metadata } from 'next';

export default function BlogPage() {
 const posts = getAllPosts();

 return (
  <>
   <header className="flex items-center gap-5 my-10">
    <h1 className="text-4xl font-bold text-theme-primary">
     {`Mahziyar Erfani's Blog`}
    </h1>
    <Link className="text-theme-primary text-xl z-10 relative" href="/">
     Go to portfolio
    </Link>
   </header>

   <main className="space-y-6 relative z-20">
    {posts.map((post) => (
     <Link
      href={`/blog/${post.slug}`}
      key={post.slug}
      className="p-5 block rounded-2xl border border-theme-accent shadow-xl hover:shadow-2xl duration-300 transition-all delay-0 hover:border-theme-secondary hover:translate-x-1"
     >
      <h2 className="text-2xl font-bold text-white">{post.title}</h2>
      <small className="text-theme-secondary">
       {typeof post.date === 'string' ? post.date : post.date.toDateString()}
      </small>
      <p className="text-theme-primary my-3">{post.description}</p>
      {post.keywords.map((keyword) => (
       <span
        className="mr-2 bg-theme-accent px-2 py-1 text-sm rounded-2xl text-theme-primary"
        key={keyword}
       >
        {keyword}
       </span>
      ))}
     </Link>
    ))}
   </main>
   <Curves />
  </>
 );
}

const domain = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;

export const metadata: Metadata = {
 title: 'Mahziyar Erfani | Blog',
 description:
  "Explore Mahziyar Erfani's blog to read about his thoughts on web development, design, and the projects he's working on. Stay updated with his latest insights and experiences.",
 openGraph: {
  title: 'Mahziyar Erfani | Blog',
  description:
   "Explore Mahziyar Erfani's blog to read about his thoughts on web development, design, and the projects he's working on. Stay updated with his latest insights and experiences.",
  images: [
   {
    url: `${domain}/blog/thumbnail.png`,
    width: 1200,
    height: 630,
    alt: 'Mahziyar Erfani Blog Thumbnail',
   },
  ],
  locale: 'en_US',
  type: 'website',
 },
 twitter: {
  card: 'summary_large_image',
  title: 'Mahziyar Erfani | Blog',
  description:
   "Explore Mahziyar Erfani's blog to read about his thoughts on web development, design, and the projects he's working on. Stay updated with his latest insights and experiences.",
  images: [`${domain}/blog/thumbnail.png`],
 },
};
