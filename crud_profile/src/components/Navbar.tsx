'use client';
import { ThemeContext } from '@/context/ThemeContext';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle';

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
  const [nav, setNav] = useState<boolean>(false);
  const { data: session, status } = useSession();
  const { mode } = useContext(ThemeContext);

  const handleClick = () => {
    setNav((event) => !event);
  };

  const navLinks = links.map((link) => (
    <Link key={link.id} href={link.url}>
      {link.title}
    </Link>
  ))
  return (
    <div className="h-[100px] flex justify-between items-center ">
      <Link href="/" className="font-bold text-2xl z-10">
        Portfolio
      </Link>
      <DarkModeToggle />
      <div className=" hidden md:flex items-center gap-5">
        
        {/* {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))} */}
        {navLinks}
        {status === 'authenticated' && (
          <button
            className="p-1 bg-regal-green text-white cursor-pointer rounded "
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}>
            Logout
          </button>
        )}
      </div>
      {/* Mobile button */}
      <div onClick={handleClick} className="cursor-pointer md:hidden block z-10">
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>
      {/* Mobile menu */}
      <div
        className={
          nav
            ? `md:hidden  top-0 left-0 right-0 bottom-0 flex flex-col gap-5 justify-center items-center w-full min-h-screen text-center ease-in duration-500 fixed ${mode}`
            : 'md:hidden absolute top-0 left-[-200%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-500 flex-col gap-5'
        } onClick={handleClick}>
          {navLinks}
          {status === 'authenticated' && (
          <button
            className="p-1 bg-regal-green text-white cursor-pointer rounded "
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}>
            Logout
          </button>
        )}
        </div>
    </div>
  );
};

export default Navbar;
