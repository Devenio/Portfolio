import Image from 'next/image';
import Link from 'next/link';

export interface Post {
 title: string;
 date: string;
 description: string;
 cover: string;
 timeToRead: string;
 slug: string;
}

export default function BlogCard({ post }: { post: Post }) {
 return (
  <li>
   <Link href={`/blog/${post.slug}`}>
    <Image src={post.cover} alt={post.title} />
    <h2>{post.title}</h2>
    <p>{post.description}</p>
    <small>
     {post.date} • {post.timeToRead}
    </small>
   </Link>
  </li>
 );
}
