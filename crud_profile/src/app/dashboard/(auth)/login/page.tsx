'use client';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'authenticated') {
    router?.push('/dashboard');
  }

  const HandlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn('credentials', { email, password });
  };
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <form className="flex  flex-col gap-5 w-72" onSubmit={HandlerSubmit}>
        <input
          type="email"
          placeholder="email"
          className="p-5 bg-transparent border-2 border-[#bbb] rounded-md font-bold text-sm "
          required
        />
        <input
          type="password"
          placeholder="password"
          className="p-5 bg-transparent border-2  border-[#bbb] rounded-md font-bold text-sm "
          required
        />
        <button className="p-4 cursor-pointer bg-regal-green rounded-md  text-white">
          Register
        </button>
        {/* {err && 'Something went wrong!'} */}
      </form>
      <button onClick={() => signIn('google')}>Login with google</button>
    </div>
  );
};

export default login;
