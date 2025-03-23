'use client';

import { FaCheck, FaTimes, FaVolumeUp } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

import { Layout } from '@/components/Layout';
import { VocabWord } from '../../types';
import vocabData from '../../data/vocabData';

export default function TypingPage() {
  const [currentWord, setCurrentWord] = useState<VocabWord | null>(null);
  const [words, setWords] = useState<VocabWord[]>([]);
  const [userInput, setUserInput] = useState('');
  const [correctChars, setCorrectChars] = useState<boolean[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const correctSoundRef = useRef<HTMLAudioElement>(null);
  const incorrectSoundRef = useRef<HTMLAudioElement>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Load vocabulary data
    if (vocabData.length > 0) {
      const shuffled = [...vocabData].sort(() => Math.random() - 0.5);
      setWords(shuffled);
      setCurrentWord(shuffled[0]);
      setCorrectChars(Array(shuffled[0].word.length).fill(false));
      setIsLoading(false);
    }

    // Focus input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Always focus input when it's available
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentWord]);

  const speakWord = () => {
    if (!currentWord) return;

    const utterance = new SpeechSynthesisUtterance(currentWord.word);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isCorrect !== null) return; // Already answered

    const value = e.target.value;
    setUserInput(value);

    // Check each character
    if (currentWord) {
      const newCorrectChars = currentWord.word.split('').map((char, index) => {
        return (
          index < value.length &&
          char.toLowerCase() === value[index].toLowerCase()
        );
      });
      setCorrectChars(newCorrectChars);
    }

    if (currentWord && value.toLowerCase() === currentWord.word.toLowerCase()) {
      setIsCorrect(true);
      correctSoundRef.current?.play();
      setScore(score + 1);
      setStreak(streak + 1);
      if (streak + 1 > bestStreak) {
        setBestStreak(streak + 1);
      }

      // Move to next word after a short delay
      setTimeout(moveToNextWord, 1000);
      return;
    }

    if (value.length === currentWord?.word.length) {
      incorrectSoundRef.current?.play();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Allow moving to next word with Enter when current word is completed
    if (e.key === 'Enter' && isCorrect) {
      moveToNextWord();
    }

    // Skip word with Escape key
    if (e.key === 'Escape') {
      setIsCorrect(false);
      setStreak(0);
      setTimeout(moveToNextWord, 1000);
    }
  };

  const moveToNextWord = () => {
    const currentIndex = words.findIndex((w) => w.word === currentWord?.word);

    if (currentIndex < words.length - 1) {
      const nextWord = words[currentIndex + 1];
      setCurrentWord(nextWord);
      setUserInput('');
      setCorrectChars(Array(nextWord.word.length).fill(false));
      setIsCorrect(null);
      setShowHint(false);
    } else {
      // End of words - reset with new shuffled list
      const shuffled = [...vocabData].sort(() => Math.random() - 0.5);
      setWords(shuffled);
      setCurrentWord(shuffled[0]);
      setUserInput('');
      setCorrectChars(Array(shuffled[0].word.length).fill(false));
      setIsCorrect(null);
      setShowHint(false);
    }

    // Focus the input field
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  if (isLoading) {
    return (
      <div className='container mx-auto py-12 flex justify-center items-center'>
        <div className='text-center'>
          <div className='w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto'></div>
          <p className='mt-4 text-gray-600'>Đang tải...</p>
        </div>
      </div>
    );
  }

  return (
    <Layout
      title='Luyện Gõ Từ'
      subtitle='Gõ từ vựng tiếng Anh để tăng cường trí nhớ và khả năng đánh máy.'
    >
      <audio ref={correctSoundRef} src='/sounds/correct.mp3' preload='auto' />
      <audio
        ref={incorrectSoundRef}
        src='/sounds/incorrect.mp3'
        preload='auto'
      />
      {currentWord && (
        <div className='bg-white rounded-xl shadow-lg p-8 mb-6'>
          <div className='flex justify-between items-center mb-6'>
            <div className='text-gray-700'>Số từ đúng: {score}</div>
            <div className='flex items-center space-x-4'>
              <div className='text-gray-700'>Chuỗi: {streak}</div>
              <div className='text-gray-700'>Chuỗi cao nhất: {bestStreak}</div>
            </div>
          </div>

          <div className='mb-8'>
            <div className='flex justify-between items-center mb-2'>
              <p className='text-gray-600'>{currentWord.pronunciation}</p>
              <button
                onClick={speakWord}
                className='text-blue-600 hover:text-blue-800 transition flex items-center cursor-pointer'
              >
                <FaVolumeUp className='mr-1' /> Nghe
              </button>
            </div>

            <div className='text-center mb-4'>
              <p className='text-gray-600 mb-2'>Nghĩa:</p>
              <p className='font-medium text-lg text-gray-800'>
                {currentWord.meaning}
              </p>
            </div>

            <div className='relative mb-6'>
              <input
                ref={inputRef}
                type='text'
                value={userInput}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                disabled={isCorrect !== null}
                placeholder='Gõ từ tiếng Anh ở đây...'
                className={`w-full p-4 text-center text-xl border-2 rounded-lg ${
                  isCorrect === true
                    ? 'border-green-500 bg-green-50'
                    : isCorrect === false
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300 focus:border-blue-500'
                } transition outline-none`}
                maxLength={currentWord.word.length}
                autoComplete='off'
                spellCheck='false'
              />

              {isCorrect !== null && (
                <div className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                  {isCorrect ? (
                    <FaCheck className='text-green-500 text-xl' />
                  ) : (
                    <FaTimes className='text-red-500 text-xl' />
                  )}
                </div>
              )}
            </div>

            <div className='flex justify-center space-x-1 mb-4'>
              {currentWord.word.split('').map((char, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 flex items-center justify-center border-b-2 ${
                    index < userInput.length
                      ? correctChars[index]
                        ? 'border-green-500 text-green-600'
                        : 'border-red-500 text-red-600'
                      : 'border-gray-300'
                  }`}
                >
                  {showHint || index < userInput.length ? char : '_'}
                </div>
              ))}
            </div>

            <div className='flex justify-center mt-6 space-x-3'>
              <button
                onClick={toggleHint}
                className='px-4 py-2 bg-yellow-100 text-yellow-700 rounded hover:bg-yellow-200 transition cursor-pointer'
              >
                {showHint ? 'Ẩn gợi ý' : 'Hiện gợi ý'}
              </button>

              <button
                onClick={() => {
                  setIsCorrect(false);
                  setStreak(0);
                  setTimeout(moveToNextWord, 500);
                }}
                className='px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition cursor-pointer'
              >
                Bỏ qua
              </button>
            </div>
          </div>

          <div className='text-center text-sm text-gray-500'>
            <p>Nhấn Enter để chuyển đến từ tiếp theo sau khi gõ đúng</p>
            <p>Nhấn Escape để bỏ qua từ hiện tại</p>
          </div>
        </div>
      )}

      <div className='bg-blue-50 p-6 rounded-lg'>
        <h2 className='text-xl font-semibold text-gray-800 mb-2'>
          Mẹo luyện gõ từ vựng tiếng Anh:
        </h2>
        <ul className='space-y-2 text-gray-700'>
          <li>• Tập trung vào sự chính xác trước khi tập trung vào tốc độ</li>
          <li>• Phát âm từ trong khi gõ để tăng cường trí nhớ</li>
          <li>• Đặt mục tiêu chuỗi từ liên tiếp và cố gắng đạt được</li>
          <li>• Dùng tính năng gợi ý chỉ khi thực sự cần thiết</li>
        </ul>
      </div>
    </Layout>
  );
}
