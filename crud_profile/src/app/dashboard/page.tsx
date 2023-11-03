'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Key } from 'react';
import useSWR from 'swr';

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const inputStile = 'p-4 bg-transparent border-[2px] border-[#bbb] rounded font-bold text-xl';

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.user?.name}`,
    fetcher,
  );

  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  if (status === 'unauthenticated') {
    router?.push('/dashboard/login');
  }
  console.log(data);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session?.user?.name,
        }),
      });
      mutate();
    } catch (error: any) {
      console.log(error);
    }
  };
  const handleDele = async (id: Key) => {
    try {
      await fetch(`/api/posts/${id}`,{method:'DELETE'});
      mutate()
    } catch (error: any) {
      console.log(error)
    }
  };

  if (status === 'authenticated') {
    return (
      <div className="flex gap-24 flex-col-reverse ">
        <div className="flex-1">
          {data?.map((post: { _id: Key; img: string; title: string; desc: string }) => (
            <div className=" flex items-center justify-between my-12" key={post._id}>
              <div className="">
                <Image
                  src={post.img}
                  alt=""
                  width={200}
                  height={100}
                  className="object-cover "
                />
              </div>
              <h2 className="">{post.title}</h2>
              <span className="cursor-pointer text-[red]" onClick={() => handleDele(post._id)}>
                X
              </span>
            </div>
          ))}
        </div>
        <form className="flex-1 flex flex-col gap-5" onSubmit={handleSubmit}>
          <h1 className="text-4xl font-extrabold text-center">Add new post</h1>
          <input type="text" className={`${inputStile}`} placeholder="Title" />
          <input type="text" className={`${inputStile}`} placeholder="Desc" />
          <input type="text" className={`${inputStile}`} placeholder="Image" />
          <textarea
            placeholder="Content"
            id=""
            cols={30}
            rows={10}
            className={`${inputStile}`}></textarea>
          <button className="p-4 cursor-pointer bg-regal-green rounded-md  text-white">Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
