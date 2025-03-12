// components/FlashcardDeck.tsx
'use client';

import { useState, useEffect } from 'react';
import { VocabWord } from '../types';
import Flashcard from './Flashcard';
import { saveProgress, getProgress } from '../lib/utils';
import { FaArrowLeft, FaArrowRight, FaRandom } from 'react-icons/fa';

interface FlashcardDeckProps {
  initialWords: VocabWord[];
}

export default function FlashcardDeck({ initialWords }: FlashcardDeckProps) {
  const [words, setWords] = useState<VocabWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMasteredOnly, setShowMasteredOnly] = useState(false);
  const [showUnmasteredOnly, setShowUnmasteredOnly] = useState(false);

  useEffect(() => {
    // Thử lấy dữ liệu đã lưu từ localStorage
    const savedProgress = getProgress();

    if (savedProgress) {
      setWords(savedProgress);
    } else {
      setWords(
        initialWords.map((word) => ({
          ...word,
          mastered: false,
          lastReviewed: new Date(),
        })),
      );
    }
  }, [initialWords]);

  const filteredWords = words.filter((word) => {
    if (showMasteredOnly) return word.mastered;
    if (showUnmasteredOnly) return !word.mastered;
    return true;
  });

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : filteredWords.length - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < filteredWords.length - 1 ? prevIndex + 1 : 0,
    );
  };

  const handleShuffle = () => {
    // Tạo bản sao mới của mảng từ vựng và trộn
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    setWords(shuffled);
    setCurrentIndex(0);
  };

  const handleMastered = (word: VocabWord, mastered: boolean) => {
    const updatedWords = words.map((w) =>
      w.word === word.word ? { ...w, mastered, lastReviewed: new Date() } : w,
    );

    setWords(updatedWords);
    saveProgress(updatedWords);
  };

  // Xử lý khi không có từ nào sau khi lọc
  if (filteredWords.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg shadow mt-8'>
        <p className='text-xl text-gray-700 mb-4'>
          {showMasteredOnly
            ? 'Bạn chưa đánh dấu từ nào là đã học thuộc!'
            : showUnmasteredOnly
            ? 'Chúc mừng! Bạn đã học thuộc tất cả các từ!'
            : 'Không có từ vựng nào.'}
        </p>
        <button
          className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
          onClick={() => {
            setShowMasteredOnly(false);
            setShowUnmasteredOnly(false);
          }}
        >
          Hiển thị tất cả từ
        </button>
      </div>
    );
  }

  return (
    <div className='w-full max-w-2xl mx-auto p-4'>
      <div className='mb-6 flex flex-wrap gap-2 justify-center'>
        <button
          className={`px-4 py-2 rounded transition ${
            !showMasteredOnly && !showUnmasteredOnly
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => {
            setShowMasteredOnly(false);
            setShowUnmasteredOnly(false);
          }}
        >
          Tất cả ({words.length})
        </button>

        <button
          className={`px-4 py-2 rounded transition ${
            showMasteredOnly
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => {
            setShowMasteredOnly(!showMasteredOnly);
            setShowUnmasteredOnly(false);
            setCurrentIndex(0);
          }}
        >
          Đã thuộc ({words.filter((w) => w.mastered).length})
        </button>

        <button
          className={`px-4 py-2 rounded transition ${
            showUnmasteredOnly
              ? 'bg-yellow-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => {
            setShowUnmasteredOnly(!showUnmasteredOnly);
            setShowMasteredOnly(false);
            setCurrentIndex(0);
          }}
        >
          Chưa thuộc ({words.filter((w) => !w.mastered).length})
        </button>

        <button
          className='px-4 py-2 bg-purple-600 text-white rounded flex items-center gap-1 hover:bg-purple-700 transition'
          onClick={handleShuffle}
        >
          <FaRandom /> Trộn bài
        </button>
      </div>

      <div className='relative'>
        {filteredWords.length > 0 && (
          <Flashcard
            word={filteredWords[currentIndex]}
            onMastered={handleMastered}
          />
        )}

        <div className='flex justify-between mt-6'>
          <button
            className='px-6 py-2 bg-gray-200 text-gray-700 rounded-full flex items-center gap-1 hover:bg-gray-300 transition'
            onClick={handlePrevious}
          >
            <FaArrowLeft /> Trước
          </button>

          <div className='text-center'>
            <p className='text-gray-600'>
              {currentIndex + 1} / {filteredWords.length}
            </p>
          </div>

          <button
            className='px-6 py-2 bg-gray-200 text-gray-700 rounded-full flex items-center gap-1 hover:bg-gray-300 transition'
            onClick={handleNext}
          >
            Sau <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
