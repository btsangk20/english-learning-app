/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState, useEffect, useRef } from 'react';
import { VocabWord } from '../../types';
import vocabData from '../../data/vocabData';
import {
  FaVolumeUp,
  FaMicrophone,
  FaMicrophoneSlash,
  FaCheck,
  FaTimes,
} from 'react-icons/fa';

// Proper type definitions for Speech Recognition
interface SpeechRecognitionResultList {
  readonly length: number;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  readonly isFinal: boolean;
  readonly length: number;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  readonly transcript: string;
  readonly confidence: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  readonly error: string;
  readonly message: string;
}

interface SpeechRecognitionEvent extends Event {
  readonly resultIndex: number;
  readonly results: SpeechRecognitionResultList;
}

interface SpeechRecognitionInterface extends EventTarget {
  continuous: boolean;
  grammars: unknown;
  interimResults: boolean;
  lang: string;
  maxAlternatives: number;
  onaudioend: ((this: SpeechRecognitionInterface, ev: Event) => any) | null;
  onaudiostart: ((this: SpeechRecognitionInterface, ev: Event) => any) | null;
  onend: ((this: SpeechRecognitionInterface, ev: Event) => any) | null;
  onerror:
    | ((
        this: SpeechRecognitionInterface,
        ev: SpeechRecognitionErrorEvent,
      ) => any)
    | null;
  onnomatch:
    | ((this: SpeechRecognitionInterface, ev: SpeechRecognitionEvent) => any)
    | null;
  onresult:
    | ((this: SpeechRecognitionInterface, ev: SpeechRecognitionEvent) => any)
    | null;
  onsoundend: ((this: SpeechRecognitionInterface, ev: Event) => any) | null;
  onsoundstart: ((this: SpeechRecognitionInterface, ev: Event) => any) | null;
  onspeechend: ((this: SpeechRecognitionInterface, ev: Event) => any) | null;
  onspeechstart: ((this: SpeechRecognitionInterface, ev: Event) => any) | null;
  onstart: ((this: SpeechRecognitionInterface, ev: Event) => any) | null;
  start(): void;
  stop(): void;
  abort(): void;
}

// Add proper SpeechRecognition constructor
declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognitionInterface;
    webkitSpeechRecognition: new () => SpeechRecognitionInterface;
  }
}

export default function PronunciationPage() {
  const [currentWord, setCurrentWord] = useState<VocabWord | null>(null);
  const [words, setWords] = useState<VocabWord[]>([]);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(
    null,
  );
  const [score, setScore] = useState(0);
  const [attemptsRemaining, setAttemptsRemaining] = useState(2);
  const [isLoading, setIsLoading] = useState(true);
  const [recognition, setRecognition] =
    useState<SpeechRecognitionInterface | null>(null);

  // Thêm ref cho audio element
  const correctSoundRef = useRef<HTMLAudioElement | null>(null);
  const incorrectSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize speech recognition
    if (
      typeof window !== 'undefined' &&
      ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)
    ) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.lang = 'en-US';
      recognitionInstance.interimResults = false;
      recognitionInstance.maxAlternatives = 1;

      recognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
        const speechResult = event.results[event.resultIndex][0].transcript
          .toLowerCase()
          .trim();

        if (!speechResult) {
          console.error('⚠️ Không nhận được văn bản từ giọng nói!');
          return;
        }

        setTranscript(speechResult);
        // Use the ref function directly to ensure latest state values
        checkPronunciationRef.current(speechResult);
        setIsListening(false);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      recognitionInstance.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error('Speech recognition error', event.error);
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    }

    // Load vocabulary data
    if (vocabData && vocabData.length > 0) {
      const shuffled = [...vocabData].sort(() => Math.random() - 0.5);
      setWords(shuffled);
      setCurrentWord(shuffled[0]);
      setIsLoading(false);
    } else {
      console.error('vocabData is empty or invalid');
    }
  }, []);

  const speakWord = () => {
    if (!currentWord) return;

    const utterance = new SpeechSynthesisUtterance(currentWord.word);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  };

  const startListening = () => {
    if (!recognition) {
      alert(
        'Trình duyệt của bạn không hỗ trợ nhận dạng giọng nói. Vui lòng sử dụng Chrome, Edge hoặc Safari.',
      );
      return;
    }

    setTranscript('');
    setFeedback(null);
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    if (recognition && isListening) {
      recognition.stop();
      setIsListening(false);
    }
  };

  const playCorrectSound = () => {
    if (correctSoundRef.current) {
      correctSoundRef.current.currentTime = 0;
      correctSoundRef.current
        .play()
        .then(() => {})
        .catch((err) => {
          console.error('Lỗi khi phát âm thanh:', err.message);
        });
    } else {
      console.error('Không tìm thấy audio element');
    }
  };

  const playIncorrectSound = () => {
    if (incorrectSoundRef.current) {
      incorrectSoundRef.current.currentTime = 0;
      incorrectSoundRef.current
        .play()
        .then(() => {})
        .catch((err) => {
          console.error('Lỗi khi phát âm thanh:', err.message);
        });
    } else {
    }
  };

  // Add a separate useEffect to handle checkPronunciation correctly
  const checkPronunciationRef = useRef((spoken: string) => {
    if (!currentWord) {
      return;
    }

    // Simple check - just see if the word is in the transcript
    // In a real app, you would use a more sophisticated pronunciation evaluation API
    const isCorrect = spoken
      .toLowerCase()
      .includes(currentWord.word.toLowerCase());

    if (isCorrect) {
      setFeedback('correct');
      setScore((prev) => prev + 1);
      // Phát âm thanh khi đúng

      playCorrectSound();
      setTimeout(moveToNextWord, 1500);
    } else {
      setFeedback('incorrect');
      setAttemptsRemaining((prev) => prev - 1);
      playIncorrectSound();

      if (attemptsRemaining <= 1) {
        setTimeout(moveToNextWord, 1500);
      }
    }
  });

  // Update the ref whenever related state changes
  useEffect(() => {
    checkPronunciationRef.current = (spoken: string) => {
      if (!currentWord) {
        return;
      }

      // Simple check - just see if the word is in the transcript
      const isCorrect = spoken
        .toLowerCase()
        .includes(currentWord.word.toLowerCase());

      if (isCorrect) {
        setFeedback('correct');
        setScore((prev) => prev + 1);
        playCorrectSound();
        setTimeout(moveToNextWord, 1500);
      } else {
        setFeedback('incorrect');
        setAttemptsRemaining((prev) => prev - 1);
        playIncorrectSound();

        if (attemptsRemaining <= 1) {
          setTimeout(moveToNextWord, 1500);
        }
      }
    };
  }, [currentWord, attemptsRemaining]);

  const moveToNextWord = () => {
    const currentIndex = words.findIndex((w) => w.word === currentWord?.word);

    if (currentIndex < words.length - 1) {
      setCurrentWord(words[currentIndex + 1]);
      setTranscript('');
      setFeedback(null);
      setAttemptsRemaining(2);
    } else {
      // End of words - could implement completion screen here
      alert('Bạn đã hoàn thành tất cả các từ! Điểm của bạn: ' + score);
      // Reset to first word
      const shuffled = [...vocabData].sort(() => Math.random() - 0.5);
      setWords(shuffled);
      setCurrentWord(shuffled[0]);
      setTranscript('');
      setFeedback(null);
      setAttemptsRemaining(2);
      setScore(0);
    }
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
    <div className='container mx-auto py-8 px-4'>
      {/* Audio element cho âm thanh đúng */}
      <audio ref={correctSoundRef} src='/sounds/correct.mp3' preload='auto' />
      <audio
        ref={incorrectSoundRef}
        src='/sounds/incorrect.mp3'
        preload='auto'
      />

      <div className='max-w-2xl mx-auto'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-800'>Luyện Phát Âm</h1>
          <p className='text-gray-600 mt-2'>
            Nghe và phát âm từ tiếng Anh. Cải thiện kỹ năng phát âm của bạn.
          </p>
        </div>

        {currentWord && (
          <div className='bg-white rounded-xl shadow-lg p-8 mb-6'>
            <div className='flex justify-between items-center mb-6'>
              <div className='text-gray-700'>Số từ đã đúng: {score}</div>
              <div className='text-gray-700'>
                Lượt thử còn lại: {attemptsRemaining}
              </div>
            </div>

            <div className='text-center mb-8'>
              <h2 className='text-2xl font-bold text-gray-800 mb-2'>
                {currentWord.word}
              </h2>
              <p className='text-gray-600 mb-4'>{currentWord.pronunciation}</p>
              <p className='text-gray-600 mb-6'>({currentWord.meaning})</p>

              <div className='flex justify-center space-x-4'>
                <button
                  onClick={speakWord}
                  className='w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition'
                >
                  <FaVolumeUp className='text-xl' />
                </button>

                <button
                  onClick={isListening ? stopListening : startListening}
                  disabled={feedback === 'correct'}
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition ${
                    isListening
                      ? 'bg-red-100 text-red-600 animate-pulse'
                      : feedback === 'correct'
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-green-100 text-green-600 hover:bg-green-200'
                  }`}
                >
                  {isListening ? (
                    <FaMicrophoneSlash className='text-xl' />
                  ) : (
                    <FaMicrophone className='text-xl' />
                  )}
                </button>
              </div>

              {isListening && (
                <p className='mt-4 text-blue-600 animate-pulse'>
                  Đang lắng nghe...
                </p>
              )}

              {transcript && (
                <div className='mt-6 p-4 bg-gray-50 rounded-lg'>
                  <p className='text-gray-700'>Bạn đã nói:</p>
                  <p className='font-medium'>{transcript}</p>

                  {feedback && (
                    <div
                      className={`mt-3 ${
                        feedback === 'correct'
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {feedback === 'correct' ? (
                        <p className='flex items-center justify-center'>
                          <FaCheck className='mr-2' /> Tuyệt vời! Phát âm chính
                          xác.
                        </p>
                      ) : (
                        <p className='flex items-center justify-center'>
                          <FaTimes className='mr-2' /> Thử lại! Phát âm chưa
                          chính xác.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className='flex justify-center'>
              <button
                onClick={moveToNextWord}
                className='px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition'
              >
                Từ tiếp theo
              </button>
            </div>
          </div>
        )}

        <div className='bg-blue-50 p-6 rounded-lg'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            Mẹo luyện phát âm tiếng Anh:
          </h2>
          <ul className='space-y-2 text-gray-700'>
            <li>• Nghe và bắt chước người bản xứ</li>
            <li>• Chú ý đến vị trí của lưỡi và môi khi phát âm</li>
            <li>• Tập trung vào nhịp điệu và ngữ điệu của từng từ</li>
            <li>• Ghi âm và so sánh với phát âm chuẩn</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
