import Link from 'next/link';

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
  return (
    <div className="h-[100px] flex justify-between items-center">
      <Link href="/" className='font-bold text-2xl'>Portfolio</Link>
      <div className=" flex items-center gap-5">
        {links.map((link) => (
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
        <button className='p-1 bg-[#53c28b] text-white cursor-pointer rounded '>
            Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
