import { getAllPosts, getPostBySlug } from '@/lib/posts';
import type { PostContent } from '@/lib/types';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { MDXComponents } from '@/components/mdx-components';
import Link from 'next/link';

type BlogPostPageProps = {
    params: { slug: string };
};

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const post: PostContent = getPostBySlug(params.slug);

    return (
        <article>
            <div className="bg-theme-accent p-10 pb-5 rounded-b-2xl">
                <Link href="/blog" className='mb-5 inline-block bg-theme-background border border-theme-accent fixed text-sm rounded-xl text-theme-primary py-2 px-3 font-semibold z-30'>Go to Posts</Link>
                <h1 className="text-4xl font-bold text-theme-primary mb-4 pt-12 ">
                    {post.metadata.title}
                </h1>
                <p className="text-theme-secondary mb-6 font-bold">
                    {post.metadata.date} · {post.metadata.readingTime}
                </p>
            </div>
            <div className="prose prose-xl px-2">
                <MDXRemote source={post.content} components={MDXComponents} />
            </div>
        </article>
    );
}

export async function generateMetadata({
    params,
}: BlogPostPageProps): Promise<Metadata> {
    const post = getPostBySlug(params.slug);

    const domain =
        process.env.NEXT_PUBLIC_WEBSITE_DOMAIN || 'http://localhost:3000';
    const url = `${domain}/blog/${post.metadata.slug}`;
    const image = `${domain}${post.metadata.cover}`;

    return {
        title: post.metadata.title,
        description: post.metadata.description,
        keywords: post.metadata.keywords.join(', '),
        authors: [{ name: 'Mahziyar Erfani' }],
        openGraph: {
            title: post.metadata.title,
            description: post.metadata.description,
            url,
            type: 'article',
            publishedTime: post.metadata.date,
            images: [
                {
                    url: image,
                    alt: post.metadata.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.metadata.title,
            description: post.metadata.description,
            images: [image],
        },
        alternates: {
            canonical: url,
        },
    };
}
