import Image from 'next/image';
import Link from 'next/link';

const Blog = () => {
  return (
    <div className='flex items-center gap-12 mb-12'>
      <Link href="/blog/id">
        <div className="">
          <Image src="https://images.pexels.com/photos/1173651/pexels-photo-1173651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={400} height={250} className='object-cover' />
        </div>
      </Link>
      <div className="">
        <h1 className='font-bold text-6xl mb-3'>Title</h1>
        <p className='text-lg text-[#999]'>test</p>
      </div>
    </div>
  );
};

export default Blog;
