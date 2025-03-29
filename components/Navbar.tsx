'use client';

import {
  FaBars,
  FaBook,
  FaCalendarDay,
  FaChartLine,
  FaGraduationCap,
  FaHeadphones,
  FaKeyboard,
  FaMicrophone,
  FaQuestionCircle,
  FaSearch,
  FaTimes,
  FaUser,
} from 'react-icons/fa';
import { Menu, Tooltip } from '@mantine/core';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  path: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

interface NavGroup {
  label: string;
  icon: React.ReactNode;
  items: NavItem[];
}

export default function Navbar() {
  const currentUser = {
    name: 'Tấn Sang',
    id: 1,
    role: 'admin',
    email: '',
  };
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

  const navGroups: NavGroup[] = [
    {
      label: 'Từ vựng',
      icon: <FaBook />,
      items: [
        {
          path: '/topic',
          label: 'Ngữ pháp',
          description: 'Học các quy tắc ngữ pháp tiếng Anh',
          icon: <FaGraduationCap />,
        },
        {
          path: '/flashcards',
          label: 'Thẻ ghi nhớ',
          description: 'Học từ vựng bằng thẻ ghi nhớ',
          icon: <FaBook />,
        },
        {
          path: '/quiz',
          label: 'Trắc nghiệm',
          description: 'Kiểm tra kiến thức qua các bài trắc nghiệm',
          icon: <FaQuestionCircle />,
        },
        {
          path: '/typing',
          label: 'Gõ từ vựng',
          description: 'Luyện gõ từ vựng để ghi nhớ chính tả',
          icon: <FaKeyboard />,
        },
        {
          path: '/dictionary',
          label: 'Từ điển',
          description: 'Tra cứu từ điển Anh-Việt, Việt-Anh',
          icon: <FaSearch />,
        },
      ],
    },
    {
      label: 'Phát âm',
      icon: <FaMicrophone />,
      items: [
        {
          path: '/listening',
          label: 'Luyện nghe',
          description: 'Cải thiện kỹ năng nghe tiếng Anh',
          icon: <FaHeadphones />,
        },
        {
          path: '/pronunciation',
          label: 'Phát âm',
          description: 'Rèn luyện phát âm chuẩn xác',
          icon: <FaMicrophone />,
        },
        {
          path: '/ipa-practice',
          label: 'Bảng phiên âm',
          description: 'Luyện tập với bảng phiên âm quốc tế IPA',
          icon: <FaMicrophone />,
        },
      ],
    },
    {
      label: `${currentUser.name ? `${currentUser.name}` : 'Đăng nhập'}`,
      icon: <FaUser />,
      items: [
        // {
        //   path: '/profile',
        //   label: 'Trang cá nhân',
        //   description: 'Xem và chỉnh sửa thông tin cá nhân',
        //   icon: <FaUser />,
        // },
        {
          path: '/daily-challenge',
          label: 'Thử thách hàng ngày',
          description: 'Hoàn thành thử thách mỗi ngày để duy trì việc học',
          icon: <FaCalendarDay />,
        },
        {
          path: '/progress',
          label: 'Theo dõi tiến độ',
          description: 'Xem và phân tích tiến trình học tập của bạn',
          icon: <FaChartLine />,
        },
      ],
    },
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
          <div className='sm:hidden'>
            <button
              onClick={toggleMobileMenu}
              className='p-2 text-white focus:outline-none hover:bg-blue-700 rounded transition cursor-pointer'
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop menu - only visible on large screens */}
          <div className='hidden sm:flex items-center space-x-1'>
            {navGroups.map((group) => (
              <Menu key={group.label} position='bottom' shadow='md' width={200}>
                <Menu.Target>
                  <button
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-blue-500 transition cursor-pointer ${
                      group.items.some((item) => pathname === item.path)
                        ? 'bg-blue-700 font-medium'
                        : 'text-blue-100'
                    }`}
                  >
                    <span>{group.icon}</span>
                    <span>{group.label}</span>
                  </button>
                </Menu.Target>

                <Menu.Dropdown>
                  {group.items.map((item) => (
                    <Menu.Item
                      key={item.path}
                      component={Link}
                      href={item.path}
                      leftSection={item.icon}
                      className={`${
                        pathname === item.path ? 'bg-blue-50' : ''
                      }`}
                    >
                      {item.label}
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>
            ))}
          </div>
        </div>

        {/* Tablet and Mobile Navigation Menu */}
        <div
          className={`sm:hidden bg-blue-700 rounded-lg shadow-lg transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen
              ? 'max-h-[540px] opacity-100 mt-4'
              : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className='flex flex-col space-y-1 p-2'>
            {navGroups.map((group) => (
              <div key={group.label} className='space-y-1'>
                {/* <div className='px-4 py-2 text-blue-200 font-medium flex items-center gap-2'>
                  <span>{group.icon}</span>
                  <span>{group.label}</span>
                </div> */}
                {group.items.map((item) => (
                  <Tooltip label={item.description} key={item.path}>
                    <Link
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
                  </Tooltip>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Medium screen scrollable menu (md breakpoint) */}
        <div className='hidden md:sm:hidden mt-4 overflow-x-auto pb-2 scrollbar-hide'>
          <div className='flex space-x-1'>
            {navGroups.map((group) => (
              <Menu key={group.label} position='bottom' shadow='md' width={200}>
                <Menu.Target>
                  <button className='flex items-center gap-1 whitespace-nowrap px-3 py-2 rounded-lg hover:bg-blue-500 transition text-blue-100'>
                    <span>{group.icon}</span>
                    <span>{group.label}</span>
                  </button>
                </Menu.Target>

                <Menu.Dropdown>
                  {group.items.map((item) => (
                    <Menu.Item
                      key={item.path}
                      component={Link}
                      href={item.path}
                      leftSection={item.icon}
                      className={`${
                        pathname === item.path ? 'bg-blue-50' : ''
                      }`}
                    >
                      {item.label}
                    </Menu.Item>
                  ))}
                </Menu.Dropdown>
              </Menu>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
