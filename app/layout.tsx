// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EnglishGenius - Học tiếng Anh hiệu quả',
  description:
    'Ứng dụng học tiếng Anh với flashcard và quiz giúp bạn ghi nhớ từ vựng lâu dài.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='vi'>
      <body className={`${inter.className} min-h-screen bg-gray-50`}>
        <Navbar />
        <main className='min-h-[calc(100vh-64px)]'>{children}</main>
        <footer className='bg-gray-800 text-gray-300 py-6'>
          <div className='container mx-auto px-4 text-center'>
            <p>
              © {new Date().getFullYear()} EnglishGenius - Ứng dụng học tiếng
              Anh hiệu quả
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
