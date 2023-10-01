import Image from 'next/image';
import Link from 'next/link';
import { Key } from 'react';

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className="flex items-center gap-12 mb-12">
      {data.map((post: { id: Key; image: string; title: string; desc: string }) => (
        <Link href="/blog/id" key={post.id}>
          <div className="">
            <Image src={post.image} alt="" width={400} height={250} className="object-cover" />
          </div>
          <div className="">
            <h1 className="font-bold text-6xl mb-3">{post.title}</h1>
            <p className="text-lg text-[#999]">{post.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
