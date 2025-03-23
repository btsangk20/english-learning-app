'use client';

import { FaCheck, FaHeart, FaTimes, FaVolumeUp } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

import { Layout } from '@/components/Layout';
import { VocabWord } from '../../types';
import vocabData from '../../data/vocabData';

export default function ListeningPage() {
  const [currentWord, setCurrentWord] = useState<VocabWord | null>(null);
  const [words, setWords] = useState<VocabWord[]>([]);
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [gameOver, setGameOver] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const correctSoundRef = useRef<HTMLAudioElement>(null);
  const incorrectSoundRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (vocabData.length >= 4) {
      // Shuffle and select words for the exercise
      const shuffled = [...vocabData].sort(() => Math.random() - 0.5);
      setWords(shuffled);
      setCurrentWord(shuffled[0]);
      generateOptions(shuffled[0]);
      setIsLoading(false);
    }
  }, []);

  const generateOptions = (word: VocabWord) => {
    // Get the correct answer and 3 other random words
    const correctAnswer = word.word;
    const otherWords = vocabData
      .filter((w) => w.word !== correctAnswer)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((w) => w.word);

    // Combine and shuffle all options
    const allOptions = [correctAnswer, ...otherWords].sort(
      () => Math.random() - 0.5,
    );
    setOptions(allOptions);
  };

  const speakWord = () => {
    if (!currentWord) return;

    // Use browser's TTS for now - in a real app, you might use a better TTS API
    const utterance = new SpeechSynthesisUtterance(currentWord.word);
    utterance.lang = 'en-US';
    utterance.rate = 0.8; // Slightly slower speed
    speechSynthesis.speak(utterance);
  };

  const handleOptionSelect = (option: string) => {
    if (isCorrect !== null || !currentWord) return; // Already answered or no word

    setSelectedOption(option);
    const correct = option === currentWord.word;
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
      correctSoundRef.current?.play();
    } else {
      setLives(lives - 1);
      if (lives - 1 <= 0) {
        setGameOver(true);
      }
      incorrectSoundRef.current?.play();
    }

    // Move to next word after a short delay
    setTimeout(() => {
      if (lives - 1 <= 0 && !correct) return; // Game over

      const currentIndex = words.findIndex((w) => w.word === currentWord.word);
      if (currentIndex < words.length - 1) {
        const nextWord = words[currentIndex + 1];
        setCurrentWord(nextWord);
        generateOptions(nextWord);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        // Finished all words
        setGameOver(true);
      }
    }, 1500);
  };

  const restartGame = () => {
    // Shuffle and select words for a new game
    const shuffled = [...vocabData].sort(() => Math.random() - 0.5);
    setWords(shuffled);
    setCurrentWord(shuffled[0]);
    generateOptions(shuffled[0]);
    setSelectedOption(null);
    setIsCorrect(null);
    setScore(0);
    setLives(3);
    setGameOver(false);
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

  if (gameOver) {
    return (
      <div className='container mx-auto py-8 px-4'>
        <div className='max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center'>
          <h1 className='text-2xl font-bold text-gray-800 mb-4'>
            Kết thúc luyện nghe!
          </h1>
          <p className='text-lg mb-6'>
            Điểm của bạn: <span className='font-bold'>{score}</span>
          </p>
          <button
            onClick={restartGame}
            className='px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition '
          >
            Chơi lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <Layout
      title='Luyện Nghe'
      subtitle='Nghe và chọn từ bạn đã nghe. Tập trung vào phát âm và nhận diện từ.'
    >
      <audio ref={correctSoundRef} src='/sounds/correct.mp3' preload='auto' />
      <audio
        ref={incorrectSoundRef}
        src='/sounds/incorrect.mp3'
        preload='auto'
      />
      <div className='bg-white rounded-xl shadow-lg p-8 mb-6'>
        <div className='flex justify-between items-center mb-6'>
          <div className='flex items-center'>
            {[...Array(lives)].map((_, i) => (
              <FaHeart key={i} className='text-red-500 mr-1' />
            ))}
            <span className='ml-2 text-gray-700'>Mạng: {lives}</span>
          </div>
          <div className='text-gray-700'>Điểm: {score}</div>
        </div>

        <div className='text-center mb-8'>
          <button
            onClick={speakWord}
            className='w-24 h-24 cursor-pointer bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto hover:bg-blue-200 transition focus:outline-none'
          >
            <FaVolumeUp className='text-3xl' />
          </button>
          <p className='mt-3 text-gray-600'>Nhấn vào icon để nghe lại từ</p>
        </div>

        <div className='grid grid-cols-2 gap-3'>
          {options.map((option, index) => (
            <button
              key={index}
              className={`p-4 rounded-lg border-2 text-center transition ${
                selectedOption === option
                  ? isCorrect
                    ? 'bg-green-100 border-green-500'
                    : 'bg-red-100 border-red-500'
                  : 'bg-white border-gray-200 hover:border-blue-500'
              } ${
                isCorrect !== null ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
              onClick={() => handleOptionSelect(option)}
              disabled={isCorrect !== null}
            >
              {option}
              {selectedOption === option && isCorrect !== null && (
                <span className='ml-2'>
                  {isCorrect ? (
                    <FaCheck className='inline text-green-500' />
                  ) : (
                    <FaTimes className='inline text-red-500' />
                  )}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className='bg-blue-50 p-6 rounded-lg'>
        <h2 className='text-xl font-semibold text-gray-800 mb-2'>
          Mẹo luyện nghe tiếng Anh:
        </h2>
        <ul className='space-y-2 text-gray-700'>
          <li>• Tập trung vào việc phân biệt các âm tương tự nhau</li>
          <li>• Lắng nghe một cách chủ động, đoán trước thông tin</li>
          <li>• Thường xuyên nghe và lặp lại để quen với âm thanh</li>
          <li>• Học từ vựng mới thông qua ngữ cảnh nghe</li>
        </ul>
      </div>
    </Layout>
  );
}
