// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBook, FaQuestionCircle, FaHome } from 'react-icons/fa';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className='bg-blue-600 text-white p-4'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href='/' className='text-xl font-bold flex items-center gap-2'>
          <FaBook /> EnglishGenius
        </Link>

        <div className='flex space-x-4'>
          <Link
            href='/'
            className={`flex items-center gap-1 hover:text-blue-200 transition ${
              pathname === '/' ? 'text-white font-bold' : 'text-blue-100'
            }`}
          >
            <FaHome /> <span>Trang chủ</span>
          </Link>

          <Link
            href='/flashcards'
            className={`flex items-center gap-1 hover:text-blue-200 transition ${
              pathname === '/flashcards'
                ? 'text-white font-bold'
                : 'text-blue-100'
            }`}
          >
            <FaBook /> <span>Flashcards</span>
          </Link>

          <Link
            href='/quiz'
            className={`flex items-center gap-1 hover:text-blue-200 transition ${
              pathname === '/quiz' ? 'text-white font-bold' : 'text-blue-100'
            }`}
          >
            <FaQuestionCircle /> <span>Ôn tập</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
