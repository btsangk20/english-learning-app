'use client';

import { useState } from 'react';
import { FaCheck, FaTimes, FaLightbulb } from 'react-icons/fa';

interface GrammarExercise {
  id: number;
  title: string;
  description: string;
  questions: {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
    explanation: string;
  }[];
}

// Sample grammar exercises
const grammarExercises: GrammarExercise[] = [
  {
    id: 1,
    title: 'Thì hiện tại đơn (Present Simple)',
    description:
      'Thì hiện tại đơn được sử dụng để diễn tả một hành động thường xuyên hoặc một sự thật hiển nhiên.',
    questions: [
      {
        id: 1,
        question: 'She _____ to work every day.',
        options: ['go', 'goes', 'going', 'is going'],
        correctAnswer: 'goes',
        explanation:
          'Với chủ ngữ ngôi thứ 3 số ít (she, he, it), động từ trong thì hiện tại đơn thêm -s/es.',
      },
      {
        id: 2,
        question: 'We _____ breakfast at 7 AM.',
        options: ['have', 'has', 'having', 'are having'],
        correctAnswer: 'have',
        explanation:
          'Với chủ ngữ số nhiều (we, you, they), động từ trong thì hiện tại đơn giữ nguyên dạng gốc.',
      },
      {
        id: 3,
        question: 'The Earth _____ around the Sun.',
        options: ['revolve', 'revolves', 'revolving', 'is revolving'],
        correctAnswer: 'revolves',
        explanation:
          'Thì hiện tại đơn được dùng để diễn tả sự thật hiển nhiên hoặc khoa học. Chủ ngữ "Earth" là ngôi thứ 3 số ít.',
      },
    ],
  },
  {
    id: 2,
    title: 'Thì hiện tại tiếp diễn (Present Continuous)',
    description:
      'Thì hiện tại tiếp diễn được sử dụng để diễn tả một hành động đang diễn ra tại thời điểm nói.',
    questions: [
      {
        id: 1,
        question: 'Look! The baby _____ to walk.',
        options: ['try', 'tries', 'trying', 'is trying'],
        correctAnswer: 'is trying',
        explanation:
          'Thì hiện tại tiếp diễn: be (am/is/are) + V-ing. Chủ ngữ "baby" là ngôi thứ 3 số ít nên dùng "is".',
      },
      {
        id: 2,
        question: 'They _____ a new house at the moment.',
        options: ['build', 'builds', 'building', 'are building'],
        correctAnswer: 'are building',
        explanation:
          'Thì hiện tại tiếp diễn: be (am/is/are) + V-ing. Chủ ngữ "they" số nhiều nên dùng "are".',
      },
      {
        id: 3,
        question: 'I _____ for my exam right now.',
        options: ['study', 'studies', 'studying', 'am studying'],
        correctAnswer: 'am studying',
        explanation:
          'Thì hiện tại tiếp diễn: be (am/is/are) + V-ing. Chủ ngữ "I" ngôi thứ nhất số ít nên dùng "am".',
      },
    ],
  },
  {
    id: 3,
    title: 'So sánh hơn và so sánh nhất (Comparatives and Superlatives)',
    description:
      'So sánh hơn được dùng để so sánh hai đối tượng. So sánh nhất được dùng để so sánh một đối tượng với tất cả các đối tượng khác trong nhóm.',
    questions: [
      {
        id: 1,
        question: 'This book is _____ than that one.',
        options: [
          'interestinger',
          'more interesting',
          'most interesting',
          'the most interesting',
        ],
        correctAnswer: 'more interesting',
        explanation:
          'Tính từ dài (từ 2 âm tiết trở lên) dùng "more + tính từ" để tạo so sánh hơn.',
      },
      {
        id: 2,
        question: 'She is _____ student in our class.',
        options: ['taller', 'tallest', 'the taller', 'the tallest'],
        correctAnswer: 'the tallest',
        explanation:
          'So sánh nhất (superlative) dùng "the + tính từ + est" với tính từ ngắn (1 âm tiết).',
      },
      {
        id: 3,
        question: 'This car is _____ one in the showroom.',
        options: [
          'expensive',
          'more expensive',
          'expensivest',
          'the most expensive',
        ],
        correctAnswer: 'the most expensive',
        explanation:
          'So sánh nhất (superlative) dùng "the most + tính từ" với tính từ dài (từ 2 âm tiết trở lên).',
      },
    ],
  },
];

export default function GrammarPage() {
  const [selectedExercise, setSelectedExercise] =
    useState<GrammarExercise | null>(null);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanations, setShowExplanations] = useState<
    Record<number, boolean>
  >({});

  const handleSelectExercise = (exercise: GrammarExercise) => {
    setSelectedExercise(exercise);
    setUserAnswers({});
    setShowResults(false);
    setShowExplanations({});
  };

  const handleSelectOption = (questionId: number, option: string) => {
    if (showResults) return; // Don't allow changing answers after submitting

    setUserAnswers({
      ...userAnswers,
      [questionId]: option,
    });
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleTryAgain = () => {
    setUserAnswers({});
    setShowResults(false);
    setShowExplanations({});
  };

  const toggleExplanation = (questionId: number) => {
    setShowExplanations({
      ...showExplanations,
      [questionId]: !showExplanations[questionId],
    });
  };

  const calculateScore = () => {
    if (!selectedExercise) return 0;

    let correctCount = 0;
    selectedExercise.questions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });

    return correctCount;
  };

  return (
    <div className='container mx-auto py-8 px-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-800'>Bài Tập Ngữ Pháp</h1>
          <p className='text-gray-600 mt-2'>
            Luyện tập các quy tắc ngữ pháp tiếng Anh qua các bài tập đa dạng.
          </p>
        </div>

        <div className='grid md:grid-cols-4 gap-6'>
          <div className='md:col-span-1'>
            <div className='bg-white rounded-xl shadow-lg p-4'>
              <h2 className='text-lg font-semibold text-gray-800 mb-4 text-center'>
                Bài tập
              </h2>
              <div className='space-y-2'>
                {grammarExercises.map((exercise) => (
                  <button
                    key={exercise.id}
                    onClick={() => handleSelectExercise(exercise)}
                    className={`w-full text-left p-3 rounded-lg transition ${
                      selectedExercise?.id === exercise.id
                        ? 'bg-blue-100 text-blue-700 font-medium'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {exercise.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className='md:col-span-3'>
            {selectedExercise ? (
              <div className='bg-white rounded-xl shadow-lg p-6'>
                <h2 className='text-xl font-bold text-gray-800 mb-2'>
                  {selectedExercise.title}
                </h2>
                <p className='text-gray-600 mb-6'>
                  {selectedExercise.description}
                </p>

                {showResults && (
                  <div className='mb-6 p-4 bg-blue-50 rounded-lg'>
                    <p className='text-lg font-medium text-center'>
                      Kết quả: {calculateScore()}/
                      {selectedExercise.questions.length} câu đúng
                    </p>
                  </div>
                )}

                <div className='space-y-6'>
                  {selectedExercise.questions.map((question, questionIndex) => (
                    <div
                      key={question.id}
                      className='p-4 border border-gray-200 rounded-lg'
                    >
                      <p className='text-lg mb-3'>
                        {questionIndex + 1}. {question.question}
                      </p>

                      <div className='space-y-2 mb-4'>
                        {question.options.map((option, optionIndex) => (
                          <button
                            key={optionIndex}
                            onClick={() =>
                              handleSelectOption(question.id, option)
                            }
                            className={`w-full text-left p-3 border rounded-lg transition ${
                              userAnswers[question.id] === option
                                ? showResults
                                  ? option === question.correctAnswer
                                    ? 'bg-green-100 border-green-500'
                                    : 'bg-red-100 border-red-500'
                                  : 'bg-blue-100 border-blue-500'
                                : showResults &&
                                  option === question.correctAnswer
                                ? 'bg-green-100 border-green-500'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            {String.fromCharCode(65 + optionIndex)}. {option}
                            {showResults &&
                              userAnswers[question.id] === option && (
                                <span className='float-right'>
                                  {option === question.correctAnswer ? (
                                    <FaCheck className='text-green-500' />
                                  ) : (
                                    <FaTimes className='text-red-500' />
                                  )}
                                </span>
                              )}
                          </button>
                        ))}
                      </div>

                      {showResults && (
                        <div>
                          <button
                            onClick={() => toggleExplanation(question.id)}
                            className='text-blue-600 text-sm flex items-center mb-2'
                          >
                            <FaLightbulb className='mr-1' />
                            {showExplanations[question.id]
                              ? 'Ẩn giải thích'
                              : 'Xem giải thích'}
                          </button>

                          {showExplanations[question.id] && (
                            <div className='p-3 bg-blue-50 rounded text-sm text-gray-700'>
                              {question.explanation}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className='mt-6 flex justify-center'>
                  {showResults ? (
                    <button
                      onClick={handleTryAgain}
                      className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
                    >
                      Làm lại
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className='px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
                      disabled={
                        Object.keys(userAnswers).length <
                        selectedExercise.questions.length
                      }
                    >
                      Kiểm tra đáp án
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className='bg-white rounded-xl shadow-lg p-8 text-center'>
                <p className='text-gray-600'>
                  Vui lòng chọn một bài tập ngữ pháp từ danh sách bên trái để
                  bắt đầu.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className='mt-8 bg-blue-50 p-6 rounded-lg'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            Mẹo học ngữ pháp hiệu quả:
          </h2>
          <ul className='space-y-2 text-gray-700'>
            <li>• Học quy tắc cơ bản trước rồi đến các trường hợp ngoại lệ</li>
            <li>• Áp dụng ngữ pháp vào việc nói và viết hàng ngày</li>
            <li>
              • Đọc nhiều văn bản tiếng Anh để thấy ngữ pháp trong ngữ cảnh thực
              tế
            </li>
            <li>• Làm nhiều bài tập để củng cố kiến thức</li>
            <li>
              • Tìm người bản xứ hoặc giáo viên để sửa lỗi ngữ pháp của bạn
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
