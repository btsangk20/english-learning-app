'use client';

import {
  QuizQuestion as QuizQuestionType,
  QuizResult as QuizResultType,
  VocabWord,
} from '../../types';

import { Layout } from '@/components/Layout';
import QuizQuestion from '../../components/QuizQuestion';
import QuizResult from '../../components/QuizResult';
import { Select } from '@mantine/core';
import { generateQuizQuestions } from '../../lib/utils';
import { quizQuestionOptions } from '@/constants/common';
import { useState } from 'react';
import vocabData from '../../data/vocabData';

export default function QuizPage() {
  const [questions, setQuestions] = useState<QuizQuestionType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState<VocabWord[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [quizResult, setQuizResult] = useState<QuizResultType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [questionCount, setQuestionCount] = useState<string>('5');
  const [quizStarted, setQuizStarted] = useState(false);
  // Thêm key để force re-render QuizQuestion component
  const [questionKey, setQuestionKey] = useState(0);

  const startQuiz = () => {
    try {
      setIsLoading(true);
      // Giới hạn số câu hỏi dựa trên số từ vựng có sẵn
      const maxQuestions = Math.min(Number(questionCount), vocabData.length);
      const newQuestions = generateQuizQuestions(vocabData, maxQuestions);

      setQuestions(newQuestions);
      setCurrentQuestionIndex(0);
      setWrongAnswers([]);
      setCorrectCount(0);
      setQuizCompleted(false);
      setStartTime(Date.now());
      setQuizResult(null);
      setQuizStarted(true);
      setQuestionKey(0); // Reset question key
      setIsLoading(false);
    } catch (error) {
      console.error('Error starting quiz:', error);
      alert('Có lỗi khi tạo quiz. Vui lòng thử lại sau.');
      setIsLoading(false);
    }
  };

  const resetQuiz = () => {
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setWrongAnswers([]);
    setCorrectCount(0);
    setQuizCompleted(false);
    setQuizResult(null);
    setQuizStarted(false);
    setQuestionKey(0); // Reset question key
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setWrongAnswers((prev) => [
        ...prev,
        questions[currentQuestionIndex].word,
      ]);
    }

    // Chuyển sang câu hỏi tiếp theo hoặc kết thúc quiz
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
        // Tăng key để force QuizQuestion component re-render
        setQuestionKey((prev) => prev + 1);
      }, 500);
    } else {
      // Kết thúc quiz
      const endTime = Date.now();
      const result: QuizResultType = {
        totalQuestions: questions.length,
        correctAnswers: correctCount + (isCorrect ? 1 : 0),
        wrongAnswers: isCorrect
          ? wrongAnswers
          : [...wrongAnswers, questions[currentQuestionIndex].word],
        timeSpent: endTime - startTime,
      };

      setQuizResult(result);
      setQuizCompleted(true);
    }
  };

  if (isLoading) {
    return (
      <div className='container mx-auto py-12 flex justify-center items-center'>
        <div className='text-center'>
          <div className='w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto'></div>
          <p className='mt-4 text-gray-600'>Đang tải quiz...</p>
        </div>
      </div>
    );
  }

  return (
    <Layout
      title='Quiz Từ Vựng'
      subtitle='Kiểm tra kiến thức của bạn và xem những từ nào cần ôn tập thêm.'
    >
      {!quizStarted ? (
        <div className='bg-white rounded-lg shadow-md p-6 mb-8'>
          <h2 className='text-xl font-semibold mb-4'>Cài đặt quiz</h2>
          <div className='flex items-center gap-2 mb-6'>
            <Select
              value={questionCount}
              label='Số câu hỏi'
              data={quizQuestionOptions}
              onChange={(value: string | null) =>
                setQuestionCount(value || '5')
              }
              className='w-full max-w-xs'
            />
          </div>
          <button
            onClick={startQuiz}
            className='px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
          >
            Bắt đầu Quiz
          </button>
        </div>
      ) : !quizCompleted ? (
        <>
          <QuizQuestion
            key={questionKey}
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
          />
          <div className='mt-6 text-center'>
            <button
              onClick={resetQuiz}
              className='px-6 py-2 cursor-pointer bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition'
            >
              Hủy và làm lại
            </button>
          </div>
        </>
      ) : (
        quizResult && (
          <>
            <QuizResult result={quizResult} onRetry={startQuiz} />
            <div className='mt-6 text-center'>
              <button
                onClick={resetQuiz}
                className='px-6 py-2 cursor-pointer bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition ml-4'
              >
                Thay đổi cài đặt
              </button>
            </div>
          </>
        )
      )}
    </Layout>
  );
}
