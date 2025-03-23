'use client';

import {
  FaBars,
  FaBook,
  FaCalendarDay,
  FaChartLine,
  FaGraduationCap,
  FaHeadphones,
  FaHome,
  FaKeyboard,
  FaMicrophone,
  FaQuestionCircle,
  FaSearch,
  FaTimes,
} from 'react-icons/fa';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if we're in a browser environment before adding event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { path: '/', label: 'Trang chủ', icon: <FaHome /> },
    { path: '/flashcards', label: 'Flashcards', icon: <FaBook /> },
    { path: '/quiz', label: 'Quiz', icon: <FaQuestionCircle /> },
    { path: '/listening', label: 'Luyện nghe', icon: <FaHeadphones /> },
    { path: '/pronunciation', label: 'Phát âm', icon: <FaMicrophone /> },
    { path: '/typing', label: 'Gõ từ', icon: <FaKeyboard /> },
    { path: '/topic', label: 'Ngữ pháp', icon: <FaGraduationCap /> },
    { path: '/dictionary', label: 'Từ điển', icon: <FaSearch /> },
    { path: '/daily-challenge', label: 'Thử thách', icon: <FaCalendarDay /> },
    { path: '/progress', label: 'Tiến độ', icon: <FaChartLine /> },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`${
        isScrolled ? 'shadow-md' : ''
      } bg-blue-600 text-white p-4 sticky top-0 z-50 transition-all duration-300`}
    >
      <div className='container mx-auto'>
        {/* Desktop and Mobile Navigation Header */}
        <div className='flex justify-between items-center'>
          <Link href='/' className='text-xl font-bold flex items-center gap-2'>
            <Image
              src='/images/logo_white.png'
              alt='EnglishGenius'
              width={32}
              height={32}
            />
            <span className='hidden sm:inline'>EnglishGenius</span>
            <span className='sm:hidden'>EG</span>
          </Link>

          {/* Hamburger menu for tablet and mobile */}
          <div className='lg:hidden'>
            <button
              onClick={toggleMobileMenu}
              className='p-2 text-white focus:outline-none hover:bg-blue-700 rounded transition cursor-pointer'
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop menu - only visible on large screens */}
          <div className='hidden lg:flex items-center space-x-1'>
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
                <span>{item.icon}</span>
                <span className='hidden 2xl:inline'>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Tablet and Mobile Navigation Menu */}
        <div
          className={`lg:hidden bg-blue-700 rounded-lg shadow-lg transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen
              ? 'max-h-[540px] opacity-100 mt-4'
              : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className='flex flex-col space-y-1 p-2'>
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

        {/* Medium screen scrollable menu (md breakpoint) */}
        <div className='hidden md:lg:hidden mt-4 overflow-x-auto pb-2 scrollbar-hide'>
          <div className='flex space-x-1'>
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-1 whitespace-nowrap px-3 py-2 rounded-lg hover:bg-blue-500 transition ${
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
      </div>
    </nav>
  );
}
