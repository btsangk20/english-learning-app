'use client';

import { useState, useEffect } from 'react';
import { VocabWord } from '../../types';
import vocabData from '../../data/vocabData';
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaVolumeUp,
  FaTrophy,
  FaUndo,
} from 'react-icons/fa';

// Define different challenge types
type ChallengeType =
  | 'multipleChoice'
  | 'fillBlank'
  | 'matchPairs'
  | 'correction';

interface Challenge {
  type: ChallengeType;
  word: VocabWord;
  options?: string[];
  sentence?: string;
  correctAnswer: string;
}

export default function DailyChallengeComponent() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [streakDays, setStreakDays] = useState(0);
  // const [lastCompletedDate, setLastCompletedDate] = useState<string | null>(
  //   null,
  // );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load user progress from localStorage
    if (typeof window !== 'undefined') {
      const savedStreak = localStorage.getItem('dailyChallengeStreak');
      const lastCompleted = localStorage.getItem('lastCompletedChallenge');

      if (savedStreak) {
        setStreakDays(parseInt(savedStreak, 10));
      }

      if (lastCompleted) {
        // setLastCompletedDate(lastCompleted);

        // Check if the challenge was already completed today
        const today = new Date().toDateString();
        if (lastCompleted === today) {
          setIsComplete(true);
        }
      }
    }

    // Generate daily challenges
    generateDailyChallenges();
  }, []);

  const generateDailyChallenges = () => {
    if (vocabData.length < 5) {
      console.error('Not enough vocabulary data to create challenges');
      return;
    }

    // Use a seed based on the current date to ensure the same challenges are generated on the same day
    const today = new Date();
    const dateSeed =
      today.getFullYear() * 10000 +
      (today.getMonth() + 1) * 100 +
      today.getDate();

    // Simple deterministic shuffle using the date seed
    const shuffledWords = [...vocabData].sort((a, b) => {
      const seedA = (dateSeed * a.word.length) % 100;
      const seedB = (dateSeed * b.word.length) % 100;
      return seedA - seedB;
    });

    // Take the first 5 words for today's challenges
    const selectedWords = shuffledWords.slice(0, 5);

    // Create different types of challenges
    const newChallenges: Challenge[] = [];

    // Challenge 1: Multiple choice
    newChallenges.push({
      type: 'multipleChoice',
      word: selectedWords[0],
      options: [
        selectedWords[0].meaning,
        ...shuffledWords
          .filter((w) => w.word !== selectedWords[0].word)
          .slice(0, 3)
          .map((w) => w.meaning),
      ].sort(() => 0.5 - Math.random()),
      correctAnswer: selectedWords[0].meaning,
    });

    // Challenge 2: Fill in the blank
    const word = selectedWords[1];
    const example = word.examples[0].replace(
      new RegExp(word.word, 'gi'),
      '_____',
    );
    newChallenges.push({
      type: 'fillBlank',
      word: word,
      sentence: example,
      correctAnswer: word.word,
    });

    // Challenge 3: Multiple choice for word
    newChallenges.push({
      type: 'multipleChoice',
      word: selectedWords[2],
      options: [
        selectedWords[2].word,
        ...shuffledWords
          .filter((w) => w.word !== selectedWords[2].word)
          .slice(0, 3)
          .map((w) => w.word),
      ].sort(() => 0.5 - Math.random()),
      correctAnswer: selectedWords[2].word,
    });

    // Challenge 4: Correction
    const incorrectSentence = selectedWords[3].examples[0].replace(
      new RegExp(selectedWords[3].word, 'gi'),
      shuffledWords.find((w) => w.word !== selectedWords[3].word)?.word ||
        'wrong',
    );
    newChallenges.push({
      type: 'correction',
      word: selectedWords[3],
      sentence: incorrectSentence,
      correctAnswer: selectedWords[3].word,
    });

    // Challenge 5: Fill in the blank
    const word2 = selectedWords[4];
    const example2 = word2.examples[0].replace(
      new RegExp(word2.word, 'gi'),
      '_____',
    );
    newChallenges.push({
      type: 'fillBlank',
      word: word2,
      sentence: example2,
      correctAnswer: word2.word,
    });

    setChallenges(newChallenges);
    setIsLoading(false);
  };

  const handleAnswer = (answer: string) => {
    setUserAnswer(answer);
    const currentChallenge = challenges[currentChallengeIndex];

    const correct =
      answer.toLowerCase() === currentChallenge.correctAnswer.toLowerCase();
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
    }

    // Move to next challenge after a delay
    setTimeout(() => {
      if (currentChallengeIndex < challenges.length - 1) {
        setCurrentChallengeIndex(currentChallengeIndex + 1);
        setUserAnswer('');
        setIsCorrect(null);
      } else {
        completeChallenge();
      }
    }, 1500);
  };

  const completeChallenge = () => {
    setIsComplete(true);

    // Save completion date
    const today = new Date().toDateString();
    localStorage.setItem('lastCompletedChallenge', today);
    // setLastCompletedDate(today);

    // Update streak
    const previousDate = localStorage.getItem('lastCompletedChallenge');
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toDateString();

    let newStreak = streakDays;

    // If completed yesterday, increment streak
    if (previousDate === yesterdayString) {
      newStreak += 1;
    }
    // If didn't complete yesterday and it's not the same day, reset streak
    else if (previousDate !== today) {
      newStreak = 1;
    }

    setStreakDays(newStreak);
    localStorage.setItem('dailyChallengeStreak', newStreak.toString());
  };

  const resetChallenge = () => {
    setCurrentChallengeIndex(0);
    setUserAnswer('');
    setIsCorrect(null);
    setScore(0);
    setIsComplete(false);
    generateDailyChallenges();
  };

  const speakWord = (word: string) => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  };

  const renderChallenge = () => {
    if (challenges.length === 0) return null;

    const challenge = challenges[currentChallengeIndex];

    switch (challenge.type) {
      case 'multipleChoice':
        return (
          <div className='mb-6'>
            <div className='flex justify-between items-center mb-4'>
              <h3 className='text-lg font-medium text-gray-700'>
                {challenge.options?.includes(challenge.word.meaning)
                  ? 'Chọn nghĩa đúng:'
                  : 'Chọn từ đúng:'}
              </h3>
              <button
                onClick={() => speakWord(challenge.word.word)}
                className='p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition'
              >
                <FaVolumeUp />
              </button>
            </div>

            <div className='bg-gray-50 p-4 rounded-lg mb-4'>
              <p className='text-xl font-medium text-center'>
                {challenge.word.word}
              </p>
              <p className='text-center text-gray-500'>
                {challenge.word.pronunciation}
              </p>
              {challenge.options?.includes(challenge.word.meaning) && (
                <p className='text-center text-gray-600 mt-2'>
                  ({challenge.word.type})
                </p>
              )}
            </div>

            <div className='grid grid-cols-1 gap-3'>
              {challenge.options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  disabled={isCorrect !== null}
                  className={`p-3 border-2 rounded-lg text-left transition ${
                    userAnswer === option
                      ? isCorrect
                        ? 'bg-green-100 border-green-500'
                        : 'bg-red-100 border-red-500'
                      : 'border-gray-200 hover:border-blue-500'
                  }`}
                >
                  {option}
                  {userAnswer === option && isCorrect !== null && (
                    <span className='float-right'>
                      {isCorrect ? (
                        <FaCheckCircle className='text-green-500' />
                      ) : (
                        <FaTimesCircle className='text-red-500' />
                      )}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        );

      case 'fillBlank':
        return (
          <div className='mb-6'>
            <h3 className='text-lg font-medium text-gray-700 mb-4'>
              Điền từ vào chỗ trống:
            </h3>

            <div className='bg-gray-50 p-4 rounded-lg mb-6'>
              <p className='text-lg'>{challenge.sentence}</p>
              <p className='text-gray-600 mt-2 italic'>
                Gợi ý: {challenge.word.meaning}
              </p>
            </div>

            <div className='flex'>
              <input
                type='text'
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                disabled={isCorrect !== null}
                placeholder='Nhập từ cần điền...'
                className={`flex-1 p-3 border-2 rounded-l-lg ${
                  isCorrect === true
                    ? 'border-green-500 bg-green-50'
                    : isCorrect === false
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300 focus:border-blue-500'
                } focus:outline-none`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && userAnswer && isCorrect === null) {
                    handleAnswer(userAnswer);
                  }
                }}
              />
              <button
                onClick={() => handleAnswer(userAnswer)}
                disabled={!userAnswer || isCorrect !== null}
                className='p-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition disabled:bg-gray-400'
              >
                Kiểm tra
              </button>
            </div>

            {isCorrect !== null && (
              <div
                className={`mt-3 p-2 rounded ${
                  isCorrect
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {isCorrect ? (
                  <div className='flex items-center'>
                    <FaCheckCircle className='mr-2' /> Chính xác!
                  </div>
                ) : (
                  <div className='flex items-center'>
                    <FaTimesCircle className='mr-2' />
                    Đáp án đúng:{' '}
                    <span className='font-bold ml-1'>
                      {challenge.correctAnswer}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        );

      case 'correction':
        return (
          <div className='mb-6'>
            <h3 className='text-lg font-medium text-gray-700 mb-4'>
              Sửa lỗi trong câu:
            </h3>

            <div className='bg-gray-50 p-4 rounded-lg mb-6'>
              <p className='text-lg'>{challenge.sentence}</p>
              <p className='text-gray-600 mt-2 italic'>
                Một từ trong câu đã bị thay thế bằng từ khác. Hãy tìm từ đúng.
              </p>
            </div>

            <div className='flex'>
              <input
                type='text'
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                disabled={isCorrect !== null}
                placeholder='Nhập từ đúng...'
                className={`flex-1 p-3 border-2 rounded-l-lg ${
                  isCorrect === true
                    ? 'border-green-500 bg-green-50'
                    : isCorrect === false
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-300 focus:border-blue-500'
                } focus:outline-none`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && userAnswer && isCorrect === null) {
                    handleAnswer(userAnswer);
                  }
                }}
              />
              <button
                onClick={() => handleAnswer(userAnswer)}
                disabled={!userAnswer || isCorrect !== null}
                className='p-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition disabled:bg-gray-400'
              >
                Kiểm tra
              </button>
            </div>

            {isCorrect !== null && (
              <div
                className={`mt-3 p-2 rounded ${
                  isCorrect
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {isCorrect ? (
                  <div className='flex items-center'>
                    <FaCheckCircle className='mr-2' /> Chính xác!
                  </div>
                ) : (
                  <div className='flex items-center'>
                    <FaTimesCircle className='mr-2' />
                    Đáp án đúng:{' '}
                    <span className='font-bold ml-1'>
                      {challenge.correctAnswer}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        );

      default:
        return <p>Loại thử thách không được hỗ trợ</p>;
    }
  };

  if (isLoading) {
    return (
      <div className='container mx-auto py-12 flex justify-center items-center'>
        <div className='text-center'>
          <div className='w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto'></div>
          <p className='mt-4 text-gray-600'>Đang tải bài tập hàng ngày...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='container mx-auto py-8 px-4'>
      <div className='max-w-2xl mx-auto'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-800'>
            Thử Thách Hàng Ngày
          </h1>
          <p className='text-gray-600 mt-2'>
            Hoàn thành các bài tập hàng ngày để duy trì thói quen học tập.
          </p>
        </div>

        <div className='bg-white rounded-xl shadow-lg p-6 mb-6'>
          <div className='flex justify-between items-center mb-6'>
            <div className='flex items-center'>
              <FaCalendarAlt className='text-blue-600 mr-2' />
              <span className='text-gray-700'>
                {new Date().toLocaleDateString('vi-VN', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <div className='flex items-center bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full'>
              <FaTrophy className='text-yellow-500 mr-2' />
              <span>Chuỗi ngày: {streakDays}</span>
            </div>
          </div>

          {isComplete ? (
            <div className='text-center py-8'>
              <div className='w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                <FaCheckCircle className='text-green-600 text-4xl' />
              </div>

              <h2 className='text-2xl font-bold text-gray-800 mb-2'>
                Thử thách hoàn thành!
              </h2>

              <p className='text-gray-600 mb-6'>
                Bạn đã hoàn thành thử thách ngày hôm nay với số điểm: {score}/
                {challenges.length}
              </p>

              <div className='flex justify-center'>
                <button
                  onClick={resetChallenge}
                  className='px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition flex items-center'
                >
                  <FaUndo className='mr-2' /> Luyện tập lại
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className='flex justify-between items-center mb-4'>
                <div className='text-gray-600'>
                  Thử thách {currentChallengeIndex + 1}/{challenges.length}
                </div>
                <div className='text-gray-600'>Điểm: {score}</div>
              </div>

              {renderChallenge()}

              <div className='w-full bg-gray-200 h-2 rounded-full overflow-hidden'>
                <div
                  className='bg-blue-600 h-full'
                  style={{
                    width: `${
                      ((currentChallengeIndex + 1) / challenges.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </>
          )}
        </div>

        <div className='bg-blue-50 p-6 rounded-lg'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            Lợi ích của việc luyện tập mỗi ngày:
          </h2>
          <ul className='space-y-2 text-gray-700'>
            <li>• Xây dựng thói quen học tập đều đặn</li>
            <li>• Nâng cao hiệu quả ghi nhớ dài hạn</li>
            <li>• Củng cố kiến thức từ vựng đã học</li>
            <li>• Tạo động lực học tập thông qua chuỗi ngày liên tiếp</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
