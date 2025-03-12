// app/page.tsx
import Link from 'next/link';
import { FaBook, FaQuestionCircle } from 'react-icons/fa';

export default function Home() {
  return (
    <main className='container mx-auto py-12 px-4'>
      <section className='text-center mb-16'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
          EnglishGenius
        </h1>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
          Học tiếng Anh hiệu quả với hệ thống flashcard và quiz thông minh, giúp
          bạn ghi nhớ từ vựng lâu dài.
        </p>
      </section>

      <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
        <div className='bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition'>
          <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
            <FaBook className='text-blue-600 text-2xl' />
          </div>
          <h2 className='text-2xl font-bold mb-4'>Flashcards</h2>
          <p className='text-gray-600 mb-6'>
            Học từ vựng bằng phương pháp thẻ ghi nhớ hai mặt. Lật thẻ, xem nghĩa
            và ví dụ, đánh dấu từ đã thuộc.
          </p>
          <Link
            href='/flashcards'
            className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition inline-block'
          >
            Bắt đầu học
          </Link>
        </div>

        <div className='bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition'>
          <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
            <FaQuestionCircle className='text-green-600 text-2xl' />
          </div>
          <h2 className='text-2xl font-bold mb-4'>Quiz</h2>
          <p className='text-gray-600 mb-6'>
            Kiểm tra kiến thức của bạn với các câu hỏi đa dạng. Xem kết quả và
            ôn tập những từ chưa thuộc.
          </p>
          <Link
            href='/quiz'
            className='px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition inline-block'
          >
            Làm bài quiz
          </Link>
        </div>
      </div>

      <section className='mt-16 text-center max-w-2xl mx-auto'>
        <h2 className='text-2xl font-bold mb-4'>Tại sao chọn EnglishGenius?</h2>
        <ul className='text-left space-y-3'>
          <li className='flex items-start'>
            <span className='mr-2 text-green-600'>✓</span>
            <span>Học từ vựng hiệu quả với hệ thống thẻ ghi nhớ trực quan</span>
          </li>
          <li className='flex items-start'>
            <span className='mr-2 text-green-600'>✓</span>
            <span>Theo dõi tiến độ học tập và từ vựng đã thuộc</span>
          </li>
          <li className='flex items-start'>
            <span className='mr-2 text-green-600'>✓</span>
            <span>Kiểm tra kiến thức với các bài quiz đa dạng</span>
          </li>
          <li className='flex items-start'>
            <span className='mr-2 text-green-600'>✓</span>
            <span>
              Ghi nhớ từ vựng lâu dài với phương pháp ôn tập ngắt quãng
            </span>
          </li>
        </ul>
      </section>
    </main>
  );
}
