import { getAllPosts } from '@/lib/posts';
import Curves from '@/components/curves';
import { Metadata } from 'next';
import Image from "next/image"
import Socials from '@/components/socials';
import BlogCard from '@/components/blog-card';

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <>
            <header className="flex items-center gap-5 my-10 sm:flex-row flex-col">
                <Image className='rounded-full border-4 border-theme-primary' width={120} height={120} src="/avatar.webp" alt="Mahziyar Erfani's Avatar" />

                <div className='flex flex-col gap-8 items-center sm:items-start'>   <h1 className="text-4xl font-bold text-white">
                    {`Mahziyar Erfani's Blog`}
                </h1>
                    <Socials />
                </div>

            </header>


            <main className="space-y-6 relative z-20">
                {posts.map((post) => (
                    <BlogCard post={post} key={post.title} />
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
