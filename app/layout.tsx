// app/layout.tsx

import './globals.css';
import '@mantine/core/styles.css';

import { Loader, MantineProvider, createTheme } from '@mantine/core';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EnglishGenius - Học tiếng Anh hiệu quả',
  description:
    'Ứng dụng học tiếng Anh với flashcard và quiz giúp bạn ghi nhớ từ vựng lâu dài.',
  openGraph: {
    title: 'EnglishGenius - Học tiếng Anh hiệu quả',
    description:
      'Ứng dụng học tiếng Anh với flashcard và quiz giúp bạn ghi nhớ từ vựng lâu dài.',
    type: 'website',
    images: [
      {
        url: '/images/preview-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EnglishGenius - Ứng dụng học tiếng Anh',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EnglishGenius - Học tiếng Anh hiệu quả',
    description:
      'Ứng dụng học tiếng Anh với flashcard và quiz giúp bạn ghi nhớ từ vựng lâu dài.',
    images: ['/images/preview-image.jpg'],
  },
};

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='vi'>
      <body className={`${inter.className} min-h-screen bg-gray-50`}>
        <MantineProvider theme={theme}>
          <Navbar />
          <main className='min-h-[calc(100vh-145.8px)]'>
            <Suspense
              fallback={
                <div className='flex justify-center items-center h-full'>
                  <Loader />
                </div>
              }
            >
              {children}
            </Suspense>
          </main>
          <footer className='bg-gray-800 text-gray-300 py-6'>
            <div className='container mx-auto px-4 text-center'>
              <p>
                © {new Date().getFullYear()} EnglishGenius - Ứng dụng học tiếng
                Anh hiệu quả
              </p>
            </div>
          </footer>
        </MantineProvider>
      </body>
    </html>
  );
}
