// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  FaBook,
  FaQuestionCircle,
  FaHome,
  FaHeadphones,
  FaMicrophone,
  FaKeyboard,
  FaSearch,
  FaCalendarDay,
  FaGraduationCap,
  FaChartLine,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { path: '/', label: 'Trang chủ', icon: <FaHome /> },
    { path: '/flashcards', label: 'Flashcards', icon: <FaBook /> },
    { path: '/quiz', label: 'Quiz', icon: <FaQuestionCircle /> },
    { path: '/listening', label: 'Luyện nghe', icon: <FaHeadphones /> },
    { path: '/pronunciation', label: 'Phát âm', icon: <FaMicrophone /> },
    { path: '/typing', label: 'Gõ từ', icon: <FaKeyboard /> },
    { path: '/dictionary', label: 'Từ điển', icon: <FaSearch /> },
    { path: '/daily-challenge', label: 'Thử thách', icon: <FaCalendarDay /> },
    { path: '/grammar', label: 'Ngữ pháp', icon: <FaGraduationCap /> },
    { path: '/progress', label: 'Tiến độ', icon: <FaChartLine /> },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='bg-blue-600 text-white p-4 sticky top-0 z-50'>
      <div className='container mx-auto'>
        {/* Desktop Navigation */}
        <div className='flex justify-between items-center'>
          <Link href='/' className='text-xl font-bold flex items-center gap-2'>
            <FaBook className='text-2xl' /> EnglishGenius
          </Link>

          {/* Hamburger menu for mobile */}
          <div className='md:hidden'>
            <button
              onClick={toggleMobileMenu}
              className='p-2 text-white focus:outline-none'
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className='hidden md:flex space-x-1 overflow-x-auto'>
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-blue-500 transition ${
                  pathname === item.path
                    ? 'bg-blue-700 font-medium'
                    : 'text-blue-100'
                }`}
              >
                {item.icon} <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden mt-4 bg-blue-700 rounded-lg p-2'>
            <div className='flex flex-col space-y-1'>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg hover:bg-blue-600 transition ${
                    pathname === item.path
                      ? 'bg-blue-800 font-medium'
                      : 'text-blue-100'
                  }`}
                >
                  <span className='text-lg'>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
