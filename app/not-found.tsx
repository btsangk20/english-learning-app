'use client';

import { Button } from '@mantine/core';
import { FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-[calc(100vh-145.8px)] bg-gray-50 flex items-center justify-center p-4'>
      <div className='max-w-4xl w-full flex flex-row items-center space-x-12 p-8'>
        {/* 404 Illustration */}
        <div className='relative w-[300px] h-[300px] flex-shrink-0'>
          <Image
            src='/images/404-not-found.png'
            alt='404 Illustration'
            fill
            className='object-contain'
            priority
          />
        </div>

        {/* Content */}
        <div className='flex-1 space-y-4 text-center'>
          <h1 className='text-2xl font-bold text-gray-900'>
            Oops! Trang không tồn tại
          </h1>
          <p className='text-md text-gray-600'>
            Có vẻ như trang bạn đang tìm kiếm không tồn tại hoặc đã được di
            chuyển. Đừng lo lắng, hãy quay lại trang chủ để tiếp tục hành trình
            học tiếng Anh của bạn!
          </p>

          {/* Back Button */}
          <Button
            component={Link}
            href='/'
            leftSection={<FaArrowLeft />}
            size='sm'
            variant='outline'
            className='bg-blue-600 hover:bg-blue-700 transition-colors'
          >
            Quay lại trang chủ
          </Button>
        </div>
      </div>
    </div>
  );
}
