import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import Curves from '@/components/curves';

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <>

            <header className='flex items-center gap-5  my-10'> <h1 className="text-4xl font-bold text-theme-primary">
                {`Mahziyar Erfani's Blog`}
            </h1>
                <Link className='text-theme-secondary text-xl z-10 relative' href="/" >Go to portfolio</Link>

            </header>

            <main className="space-y-6 relative z-20">
                {posts.map((post) => (
                    <Link
                        href={`/blog/${post.slug}`}
                        key={post.slug}
                        className="p-5 block rounded-2xl border border-theme-accent shadow-xl hover:shadow-2xl duration-300 transition-all delay-0 hover:border-theme-secondary hover:translate-x-1"
                    >
                        <h2 className="text-2xl font-bold text-white">{post.title}</h2>
                        <small className="text-theme-secondary">{post.date}</small>
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
