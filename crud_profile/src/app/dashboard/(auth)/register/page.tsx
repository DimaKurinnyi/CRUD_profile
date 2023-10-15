'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Register = () => {
  const [err, setErr] = useState(false);

  const router = useRouter()

  const HandlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    console.log(name)
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name, email, password}),
      });
      res.status === 201 &&  router.push('/dashboard/login?success=Account has been created')
    } catch (error) { setErr(true)}
  };

  console.log(name)
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <form className="flex  flex-col gap-5 w-72" onSubmit={HandlerSubmit}>
        <input
          type="text"
          placeholder="username"
          className="p-5 bg-transparent border-2 border-[#bbb] rounded-md font-bold text-sm"
          required
        />
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
        {err && "Something went wrong!"}
      </form>
      <Link href="/dashboard/login">Login with an existed account</Link>
    </div>
  );
};

export default Register;
