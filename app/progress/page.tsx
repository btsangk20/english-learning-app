/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect } from 'react';
import {
  FaTrophy,
  FaChartLine,
  FaClock,
  FaStar,
  FaRegStar,
  FaCalendarCheck,
} from 'react-icons/fa';
import Link from 'next/link';
import { VocabWord, QuizScore } from '../../types';
interface ProgressData {
  vocabularyLearned: number;
  totalVocabulary: number;
  quizScores: {
    date: string;
    score: number;
    total: number;
  }[];
  masteredWords: string[];
  dailyStreak: number;
  lastActive: string | null;
  studyTime: number; // in minutes
  moduleProgress: {
    [key: string]: {
      name: string;
      completed: number;
      total: number;
    };
  };
}

export default function ProgressPage() {
  const [progressData, setProgressData] = useState<ProgressData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTimeframe, setSelectedTimeframe] = useState<
    'week' | 'month' | 'all'
  >('week');

  useEffect(() => {
    // In a real app, you might fetch this from an API
    // Here we'll simulate by getting data from localStorage
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        loadProgressData();
        setIsLoading(false);
      }, 500); // Simulate loading
    }
  }, []);

  const loadProgressData = () => {
    // Get vocab progress
    const vocabProgress = localStorage.getItem('vocabProgress');
    let masteredWords: string[] = [];
    if (vocabProgress) {
      const words = JSON.parse(vocabProgress);
      masteredWords = words
        .filter((w: VocabWord) => w.mastered)
        .map((w: VocabWord) => w.word);
    }

    // Get quiz data
    let quizHistory: QuizScore[] = [];
    const quizHistoryData = localStorage.getItem('quizHistory');
    if (quizHistoryData) {
      quizHistory = JSON.parse(quizHistoryData);
    }

    // Get daily streak
    let streak = 0;
    const dailyChallengeStreak = localStorage.getItem('dailyChallengeStreak');
    if (dailyChallengeStreak) {
      streak = parseInt(dailyChallengeStreak, 10);
    }

    // Simulate study time (in a real app, this would be tracked)
    // Here we'll generate random data for demonstration
    const studyTime = Math.floor(Math.random() * 120) + 60; // 60-180 minutes

    // Build progress data
    const progress: ProgressData = {
      vocabularyLearned: masteredWords.length,
      totalVocabulary: 1000, // Simulated total vocabulary goal
      quizScores:
        quizHistory.length > 0 ? quizHistory : generateSampleQuizData(),
      masteredWords,
      dailyStreak: streak,
      lastActive:
        localStorage.getItem('lastActive') || new Date().toISOString(),
      studyTime,
      moduleProgress: {
        flashcards: {
          name: 'Flashcards',
          completed: masteredWords.length,
          total: 500,
        },
        quiz: {
          name: 'Quiz',
          completed: quizHistory.length > 0 ? quizHistory.length * 5 : 25, // Assuming 5 questions per quiz
          total: 100,
        },
        listening: {
          name: 'Luyện Nghe',
          completed: 18,
          total: 50,
        },
        pronunciation: {
          name: 'Phát Âm',
          completed: 12,
          total: 50,
        },
        typing: {
          name: 'Gõ Từ',
          completed: 30,
          total: 100,
        },
        grammar: {
          name: 'Ngữ Pháp',
          completed: 5,
          total: 20,
        },
        dailyChallenge: {
          name: 'Thử Thách Hàng Ngày',
          completed: streak,
          total: 30, // Monthly goal
        },
      },
    };

    setProgressData(progress);
  };

  const generateSampleQuizData = () => {
    const data = [];
    const now = new Date();

    for (let i = 20; i >= 0; i--) {
      const date = new Date();
      date.setDate(now.getDate() - i);

      if (i % 3 === 0) {
        // Skip some days to make it realistic
        continue;
      }

      data.push({
        date: date.toISOString().split('T')[0],
        score: Math.floor(Math.random() * 3) + 3, // Score between 3-5
        total: 5,
      });
    }

    return data;
  };

  const getFilteredQuizData = () => {
    if (!progressData) return [];

    const now = new Date();
    const scores = [...progressData.quizScores];

    if (selectedTimeframe === 'week') {
      const weekAgo = new Date();
      weekAgo.setDate(now.getDate() - 7);
      return scores.filter((item) => new Date(item.date) >= weekAgo);
    } else if (selectedTimeframe === 'month') {
      const monthAgo = new Date();
      monthAgo.setMonth(now.getMonth() - 1);
      return scores.filter((item) => new Date(item.date) >= monthAgo);
    }

    return scores;
  };

  const getAverageScore = () => {
    const filteredData = getFilteredQuizData();
    if (filteredData.length === 0) return 0;

    const sum = filteredData.reduce(
      (acc, curr) => acc + (curr.score / curr.total) * 100,
      0,
    );
    return Math.round(sum / filteredData.length);
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Xuất sắc';
    if (score >= 80) return 'Giỏi';
    if (score >= 70) return 'Khá';
    if (score >= 60) return 'Trung bình';
    return 'Cần cải thiện';
  };

  const renderStars = (percentage: number) => {
    const starCount = 5;
    const filledStars = Math.round((percentage / 100) * starCount);

    return (
      <div className='flex'>
        {[...Array(starCount)].map((_, index) =>
          index < filledStars ? (
            <FaStar key={index} className='text-yellow-400' />
          ) : (
            <FaRegStar key={index} className='text-gray-300' />
          ),
        )}
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className='container mx-auto py-12 flex justify-center items-center'>
        <div className='text-center'>
          <div className='w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto'></div>
          <p className='mt-4 text-gray-600'>Đang tải dữ liệu tiến độ...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='container mx-auto py-8 px-4'>
      <div className='max-w-5xl mx-auto'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-800'>Tiến độ học tập</h1>
          <p className='text-gray-600 mt-2'>
            Theo dõi quá trình học tập và thành tích của bạn
          </p>
        </div>

        {progressData && (
          <>
            {/* Overview Cards */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
              <div className='bg-white rounded-xl shadow-lg p-6'>
                <div className='flex items-center mb-4'>
                  <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4'>
                    <FaChartLine className='text-blue-600 text-xl' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-800'>
                      Từ vựng đã học
                    </h3>
                    <p className='text-gray-600 text-sm'>Mục tiêu 1000 từ</p>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between mb-2'>
                    <span className='text-2xl font-bold'>
                      {progressData.vocabularyLearned}
                    </span>
                    <span className='text-gray-600'>
                      {Math.round(
                        (progressData.vocabularyLearned /
                          progressData.totalVocabulary) *
                          100,
                      )}
                      %
                    </span>
                  </div>
                  <div className='w-full bg-gray-200 h-2 rounded-full overflow-hidden'>
                    <div
                      className='bg-blue-600 h-full'
                      style={{
                        width: `${
                          (progressData.vocabularyLearned /
                            progressData.totalVocabulary) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-xl shadow-lg p-6'>
                <div className='flex items-center mb-4'>
                  <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4'>
                    <FaTrophy className='text-green-600 text-xl' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-800'>
                      Điểm trung bình
                    </h3>
                    <p className='text-gray-600 text-sm'>Các bài Quiz</p>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between mb-2'>
                    <span className='text-2xl font-bold'>
                      {getAverageScore()}%
                    </span>
                    <span className='text-gray-600'>
                      {getScoreLabel(getAverageScore())}
                    </span>
                  </div>
                  <div className='mt-2'>{renderStars(getAverageScore())}</div>
                </div>
              </div>

              <div className='bg-white rounded-xl shadow-lg p-6'>
                <div className='flex items-center mb-4'>
                  <div className='w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4'>
                    <FaCalendarCheck className='text-yellow-600 text-xl' />
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-gray-800'>
                      Chuỗi ngày học
                    </h3>
                    <p className='text-gray-600 text-sm'>Thử thách hàng ngày</p>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between mb-2'>
                    <span className='text-2xl font-bold'>
                      {progressData.dailyStreak} ngày
                    </span>
                    {progressData.dailyStreak >= 7 && (
                      <span className='bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full'>
                        🔥 Streak!
                      </span>
                    )}
                  </div>
                  <p className='text-sm text-gray-600'>
                    {progressData.lastActive
                      ? `Hoạt động gần nhất: ${new Date(
                          progressData.lastActive,
                        ).toLocaleDateString()}`
                      : 'Chưa có hoạt động nào'}
                  </p>
                </div>
              </div>
            </div>

            {/* Time Spent */}
            <div className='bg-white rounded-xl shadow-lg p-6 mb-8'>
              <h2 className='text-xl font-semibold text-gray-800 mb-4 flex items-center'>
                <FaClock className='mr-2 text-purple-600' /> Thời gian học tập
              </h2>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='p-4 bg-purple-50 rounded-lg'>
                  <p className='text-sm text-gray-600 mb-1'>Tổng thời gian</p>
                  <p className='text-2xl font-bold'>
                    {progressData.studyTime} phút
                  </p>
                </div>

                <div className='p-4 bg-green-50 rounded-lg'>
                  <p className='text-sm text-gray-600 mb-1'>
                    Phiên học gần nhất
                  </p>
                  <p className='text-2xl font-bold'>18 phút</p>
                </div>

                <div className='p-4 bg-blue-50 rounded-lg'>
                  <p className='text-sm text-gray-600 mb-1'>
                    Mục tiêu hàng ngày
                  </p>
                  <p className='text-2xl font-bold'>30 phút</p>
                </div>
              </div>
            </div>

            {/* Module Progress */}
            <div className='bg-white rounded-xl shadow-lg p-6 mb-8'>
              <h2 className='text-xl font-semibold text-gray-800 mb-4'>
                Tiến độ các module học tập
              </h2>

              <div className='space-y-4'>
                {Object.entries(progressData.moduleProgress).map(
                  ([key, module]) => (
                    <div
                      key={key}
                      className='p-4 border border-gray-100 rounded-lg'
                    >
                      <div className='flex justify-between items-center mb-2'>
                        <h3 className='font-medium text-gray-800'>
                          {module.name}
                        </h3>
                        <span className='text-sm text-gray-600'>
                          {module.completed}/{module.total} (
                          {Math.round((module.completed / module.total) * 100)}
                          %)
                        </span>
                      </div>

                      <div className='w-full bg-gray-200 h-2 rounded-full overflow-hidden'>
                        <div
                          className={`h-full ${
                            key === 'flashcards'
                              ? 'bg-blue-600'
                              : key === 'quiz'
                              ? 'bg-green-600'
                              : key === 'listening'
                              ? 'bg-purple-600'
                              : key === 'pronunciation'
                              ? 'bg-red-600'
                              : key === 'typing'
                              ? 'bg-yellow-600'
                              : key === 'grammar'
                              ? 'bg-indigo-600'
                              : 'bg-gray-600'
                          }`}
                          style={{
                            width: `${
                              (module.completed / module.total) * 100
                            }%`,
                          }}
                        ></div>
                      </div>

                      <div className='mt-2 text-right'>
                        <Link
                          href={`/${
                            key === 'dailyChallenge' ? 'daily-challenge' : key
                          }`}
                          className='text-sm text-blue-600 hover:underline'
                        >
                          Tiếp tục học
                        </Link>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Quiz Performance */}
            <div className='bg-white rounded-xl shadow-lg p-6'>
              <div className='flex justify-between items-center mb-4'>
                <h2 className='text-xl font-semibold text-gray-800'>
                  Kết quả Quiz gần đây
                </h2>

                <div className='flex space-x-2'>
                  <button
                    onClick={() => setSelectedTimeframe('week')}
                    className={`px-3 py-1 text-sm rounded-full ${
                      selectedTimeframe === 'week'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    Tuần
                  </button>
                  <button
                    onClick={() => setSelectedTimeframe('month')}
                    className={`px-3 py-1 text-sm rounded-full ${
                      selectedTimeframe === 'month'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    Tháng
                  </button>
                  <button
                    onClick={() => setSelectedTimeframe('all')}
                    className={`px-3 py-1 text-sm rounded-full ${
                      selectedTimeframe === 'all'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    Tất cả
                  </button>
                </div>
              </div>

              {getFilteredQuizData().length > 0 ? (
                <div className='overflow-x-auto'>
                  <table className='w-full min-w-full divide-y divide-gray-200'>
                    <thead className='bg-gray-50'>
                      <tr>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          Ngày
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          Kết quả
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                          Đánh giá
                        </th>
                      </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>
                      {getFilteredQuizData()
                        .slice(0, 10)
                        .map((quiz, index) => (
                          <tr key={index}>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                              {new Date(quiz.date).toLocaleDateString()}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap'>
                              <div className='flex items-center'>
                                <div className='font-medium text-gray-900'>
                                  {quiz.score}/{quiz.total}
                                </div>
                                <div className='ml-2 text-xs text-gray-500'>
                                  ({Math.round((quiz.score / quiz.total) * 100)}
                                  %)
                                </div>
                              </div>
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap'>
                              <span
                                className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                  quiz.score / quiz.total >= 0.8
                                    ? 'bg-green-100 text-green-800'
                                    : quiz.score / quiz.total >= 0.6
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : 'bg-red-100 text-red-800'
                                }`}
                              >
                                {getScoreLabel(
                                  Math.round((quiz.score / quiz.total) * 100),
                                )}
                              </span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className='text-center py-8 text-gray-500'>
                  Không có dữ liệu quiz nào trong khoảng thời gian đã chọn.
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
