// components/QuizResult.tsx
'use client';

import { QuizResult as QuizResultType } from '../types';
import Link from 'next/link';

interface QuizResultProps {
  result: QuizResultType;
  onRetry: () => void;
}

export default function QuizResult({ result, onRetry }: QuizResultProps) {
  const { totalQuestions, correctAnswers, wrongAnswers, timeSpent } = result;
  const score = Math.round((correctAnswers / totalQuestions) * 100);

  // Chuyển đổi thời gian từ ms sang phút:giây
  const minutes = Math.floor(timeSpent / 60000);
  const seconds = Math.floor((timeSpent % 60000) / 1000);
  const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  // Xác định thông điệp dựa trên điểm số
  const getMessage = () => {
    if (score >= 90) return 'Tuyệt vời! Bạn đã nắm vững các từ này.';
    if (score >= 70) return 'Rất tốt! Chỉ cần ôn lại một chút nữa.';
    if (score >= 50) return 'Cố gắng hơn. Bạn đang trên đúng hướng.';
    return 'Bạn cần ôn tập lại các từ này nhiều hơn.';
  };

  return (
    <div className='w-full max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg'>
      <h2 className='text-2xl font-bold text-center mb-6'>Kết quả Quiz</h2>

      <div className='text-center mb-8'>
        <div className='inline-block w-32 h-32 rounded-full border-8 border-blue-500 flex items-center justify-center'>
          <span className='text-3xl font-bold text-blue-600'>{score}%</span>
        </div>
        <p className='mt-2 text-gray-700'>{getMessage()}</p>
      </div>

      <div className='grid grid-cols-2 gap-4 mb-6'>
        <div className='p-4 bg-gray-100 rounded-lg text-center'>
          <p className='text-sm text-gray-500'>Tổng số câu hỏi</p>
          <p className='text-xl font-bold'>{totalQuestions}</p>
        </div>
        <div className='p-4 bg-gray-100 rounded-lg text-center'>
          <p className='text-sm text-gray-500'>Trả lời đúng</p>
          <p className='text-xl font-bold'>{correctAnswers}</p>
        </div>
        <div className='p-4 bg-gray-100 rounded-lg text-center'>
          <p className='text-sm text-gray-500'>Trả lời sai</p>
          <p className='text-xl font-bold'>{totalQuestions - correctAnswers}</p>
        </div>
        <div className='p-4 bg-gray-100 rounded-lg text-center'>
          <p className='text-sm text-gray-500'>Thời gian</p>
          <p className='text-xl font-bold'>{formattedTime}</p>
        </div>
      </div>

      {wrongAnswers.length > 0 && (
        <div className='mb-6'>
          <h3 className='text-lg font-semibold mb-2'>Các từ cần ôn tập lại:</h3>
          <div className='bg-red-50 border border-red-100 rounded-lg p-4'>
            <ul className='space-y-2'>
              {wrongAnswers.map((word, index) => (
                <li key={index} className='flex justify-between'>
                  <span className='font-medium'>{word.word}</span>
                  <span className='text-gray-600'>{word.meaning}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className='flex flex-col sm:flex-row gap-3 justify-center'>
        <button
          onClick={onRetry}
          className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
        >
          Làm lại Quiz
        </button>
        <Link
          href='/flashcards'
          className='px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition text-center'
        >
          Quay lại Flashcards
        </Link>
      </div>
    </div>
  );
}
