'use client';

import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export function Layout({
  children,
  title = 'Bài Tập Ngữ Pháp Tiếng Anh',
  subtitle = 'Luyện tập các quy tắc ngữ pháp tiếng Anh qua các bài tập đa dạng',
}: LayoutProps) {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto py-8 px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-4'>
            <h1 className='text-3xl font-bold text-gray-800'>{title}</h1>
            <p className='text-gray-600 mt-2'>{subtitle}</p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
