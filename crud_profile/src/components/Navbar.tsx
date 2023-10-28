'use client';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';

interface NavLinks {
  id: number;
  title: string;
  url: string;
}

const links: NavLinks[] = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
];

const Navbar = () => {
  const session = useSession()
  return (
    <div className="h-[100px] flex justify-between items-center">
      <Link href="/" className='font-bold text-2xl'>Portfolio</Link>
      <div className=" flex items-center gap-5">
        <DarkModeToggle/>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
        {session.status==='authenticated' && <button className='p-1 bg-regal-green text-white cursor-pointer rounded ' onClick={signOut}>
            Logout
        </button>}
      </div>
    </div>
  );
};

export default Navbar;
