import { PostMetadata } from "@/lib/types";
import Link from "next/link";

export default function BlogCard({ post }: { post: PostMetadata }) {
    return <Link
        href={`/blog/${post.slug}`}
        key={post.slug}
        className="p-5 block rounded-2xl bg-theme-background border border-theme-accent shadow-xl hover:shadow-2xl duration-300 transition-all delay-0 hover:border-theme-secondary hover:translate-x-1"
    >
        <h2 className="text-2xl font-bold text-white">{post.title}</h2>
        <small className="text-theme-secondary">
            {typeof post.date === 'string' ? post.date : post.date.toDateString()}
        </small>
        <p className="text-theme-primary my-3">{post.description}</p>
        <div className="flex gap-2 flex-wrap">
            {post.keywords.map((keyword) => (
                <span
                    className="bg-theme-accent px-2 py-1 text-sm rounded-2xl text-theme-primary"
                    key={keyword}
                >
                    {keyword}
                </span>
            ))}
        </div>
    </Link>
}