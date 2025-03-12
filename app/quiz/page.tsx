/* eslint-disable react-hooks/exhaustive-deps */
// app/quiz/page.tsx
'use client';

import { useState, useEffect } from 'react';
import QuizQuestion from '../../components/QuizQuestion';
import QuizResult from '../../components/QuizResult';
import vocabData from '../../data/vocabData';
import { generateQuizQuestions } from '../../lib/utils';
import {
  QuizQuestion as QuizQuestionType,
  VocabWord,
  QuizResult as QuizResultType,
} from '../../types';

export default function QuizPage() {
  const [questions, setQuestions] = useState<QuizQuestionType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState<VocabWord[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [quizResult, setQuizResult] = useState<QuizResultType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [questionCount, setQuestionCount] = useState(5);

  useEffect(() => {
    startQuiz();
  }, []);

  const startQuiz = () => {
    try {
      setIsLoading(true);
      // Giới hạn số câu hỏi dựa trên số từ vựng có sẵn
      const maxQuestions = Math.min(questionCount, vocabData.length);
      const newQuestions = generateQuizQuestions(vocabData, maxQuestions);

      setQuestions(newQuestions);
      setCurrentQuestionIndex(0);
      setWrongAnswers([]);
      setCorrectCount(0);
      setQuizCompleted(false);
      setStartTime(Date.now());
      setQuizResult(null);
      setIsLoading(false);
    } catch (error) {
      console.error('Error starting quiz:', error);
      alert('Có lỗi khi tạo quiz. Vui lòng thử lại sau.');
      setIsLoading(false);
    }
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
    <div className='container mx-auto py-8 px-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-800'>Quiz Từ Vựng</h1>
          <p className='text-gray-600 mt-2'>
            Kiểm tra kiến thức của bạn và xem những từ nào cần ôn tập thêm.
          </p>
        </div>

        {!quizCompleted
          ? questions.length > 0 && (
              <QuizQuestion
                question={questions[currentQuestionIndex]}
                onAnswer={handleAnswer}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={questions.length}
              />
            )
          : quizResult && (
              <QuizResult result={quizResult} onRetry={startQuiz} />
            )}

        {!quizCompleted && (
          <div className='mt-8 text-center'>
            <div className='flex items-center justify-center gap-2 mb-4'>
              <span className='text-gray-600'>Số câu hỏi:</span>
              <select
                className='px-3 py-1 border rounded-md'
                value={questionCount}
                onChange={(e) => setQuestionCount(Number(e.target.value))}
                disabled={questions.length > 0}
              >
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
                <option value='20'>20</option>
              </select>
            </div>

            {questions.length === 0 && (
              <button
                onClick={startQuiz}
                className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
              >
                Bắt đầu Quiz
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
