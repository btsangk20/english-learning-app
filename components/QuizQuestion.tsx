'use client';

import { useState } from 'react';
import { QuizQuestion as QuizQuestionType } from '../types';

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (isCorrect: boolean) => void;
  questionNumber: number;
  totalQuestions: number;
}

export default function QuizQuestion({
  question,
  onAnswer,
  questionNumber,
  totalQuestions,
}: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSelectAnswer = (answer: string) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);

    const isCorrect = answer === question.correctAnswer;

    // Chờ một chút trước khi thông báo kết quả để người dùng thấy lựa chọn
    setTimeout(() => {
      onAnswer(isCorrect);
    }, 1000);
  };

  const getQuestionText = () => {
    switch (question.questionType) {
      case 'meaning':
        return `"${question.word.word}" có nghĩa là gì?`;
      case 'word':
        return `Từ nào có nghĩa là "${question.word.meaning}"?`;
      case 'example':
        return `Câu nào sử dụng từ "${question.word.word}" đúng cách?`;
      default:
        return 'Câu hỏi:';
    }
  };

  const getAnswerClass = (answer: string) => {
    if (!isAnswered) {
      return 'bg-white hover:bg-gray-100';
    }

    if (answer === question.correctAnswer) {
      return 'bg-green-100 border-green-500';
    }

    if (answer === selectedAnswer) {
      return 'bg-red-100 border-red-500';
    }

    return 'bg-white opacity-50';
  };

  return (
    <div className='w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg'>
      <div className='mb-2 flex justify-between items-center'>
        <span className='text-sm text-gray-500'>
          Câu hỏi {questionNumber}/{totalQuestions}
        </span>
        <span className='text-sm text-gray-500'>
          {question.word.type} - {question.word.pronunciation}
        </span>
      </div>

      <h2 className='text-xl font-bold text-gray-800 mb-6'>
        {getQuestionText()}
      </h2>

      <div className='space-y-3'>
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`w-full text-left p-4 border-2 rounded-lg transition ${getAnswerClass(
              option,
            )}`}
            onClick={() => handleSelectAnswer(option)}
            disabled={isAnswered}
          >
            <span className='mr-2'>{String.fromCharCode(65 + index)}.</span>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
