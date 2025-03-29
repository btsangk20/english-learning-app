/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Group, Paper, Select, Stack, Text } from '@mantine/core';
import {
  FaCheck,
  FaMicrophone,
  FaMicrophoneSlash,
  FaTimes,
  FaVolumeUp,
} from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

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

interface IExample {
  word: string;
  pronunciation: string;
  meaning: string;
}

interface IIPAPracticeProps {
  ipaData: Array<{
    symbol: string;
    description: string;
    vietnameseDescription: string;
    examples: Array<IExample>;
  }>;
}

export function IPAPractice({ ipaData }: IIPAPracticeProps) {
  const [selectedSound, setSelectedSound] = useState<string | null>(null);
  const [selectedExample, setSelectedExample] = useState<IExample | null>(null);
  const [selectedSoundIndex, setSelectedSoundIndex] = useState(0);
  const [selectedExampleIndex, setSelectedExampleIndex] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(
    null,
  );
  const [score, setScore] = useState(0);
  // const [attempts, setAttempts] = useState(3);
  const [recognition, setRecognition] =
    useState<SpeechRecognitionInterface | null>(null);
  const correctSoundRef = useRef<HTMLAudioElement | null>(null);
  const incorrectSoundRef = useRef<HTMLAudioElement | null>(null);

  // Initialize with first sound and example when component loads
  useEffect(() => {
    if (ipaData.length > 0 && !selectedSound) {
      const firstSound = ipaData[0];
      setSelectedSound(firstSound.symbol);
      setSelectedSoundIndex(0);

      if (firstSound.examples.length > 0) {
        setSelectedExample(firstSound.examples[0]);
        setSelectedExampleIndex(0);
      }
    }
  }, [ipaData, selectedSound]);

  // When sound changes, set first example of that sound
  useEffect(() => {
    if (selectedSound) {
      const currentSound = ipaData.find(
        (sound) => sound.symbol === selectedSound,
      );
      if (currentSound && currentSound.examples.length > 0) {
        setSelectedExample(currentSound.examples[0]);
        setSelectedExampleIndex(0);
      }
    }

    setTranscript('');
    setFeedback(null);
  }, [selectedSound, ipaData]);

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

      recognitionInstance.onnomatch = (event: SpeechRecognitionEvent) => {
        console.log('onnomatch', event);
      };

      recognitionInstance.onresult = (event: SpeechRecognitionEvent) => {
        const speechResult = event.results[event.resultIndex][0].transcript
          .toLowerCase()
          .trim();

        console.log('speechResult', speechResult);

        if (!speechResult) {
          console.error('⚠️ Không nhận được văn bản từ giọng nói!');
          return;
        }

        setTranscript(speechResult);
        checkPronunciation(speechResult);
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
  }, [selectedSound, selectedExample]);

  const checkPronunciation = (transcript: string) => {
    if (!selectedSound || !selectedExample) return;

    const currentSound = ipaData.find(
      (sound) => sound.symbol === selectedSound,
    );
    if (!currentSound) return;

    // Get the selected example
    const example = currentSound.examples.find(
      (example) => example.word === selectedExample.word,
    );
    if (!example) return;

    // Check if the transcript contains the selected example word
    const isCorrect = transcript.includes(example.word.toLowerCase());

    setFeedback(isCorrect ? 'correct' : 'incorrect');
    if (isCorrect) {
      setScore((prev) => prev + 1);
      correctSoundRef.current?.play();
    } else {
      // setAttempts((prev) => prev - 1);
      incorrectSoundRef.current?.play();
    }
  };

  const startListening = () => {
    if (!recognition) {
      alert(
        'Trình duyệt của bạn không hỗ trợ nhận dạng giọng nói. Vui lòng sử dụng Chrome, Edge hoặc Safari.',
      );
      return;
    }

    if (!selectedExample) {
      alert('Vui lòng chọn một ví dụ trước khi bắt đầu luyện tập.');
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

  const moveToNextExample = () => {
    const currentSound = ipaData.find(
      (sound) => sound.symbol === selectedSound,
    );
    if (!currentSound) return;

    const newExample = currentSound.examples[selectedExampleIndex + 1];

    setSelectedExample(newExample);
    setSelectedExampleIndex(
      currentSound.examples.findIndex((ex) => ex.word === newExample.word),
    );
  };

  const moveToNextSound = () => {
    const newSound = ipaData[selectedSoundIndex + 1];
    setSelectedSound(newSound.symbol);
    setSelectedSoundIndex(
      ipaData.findIndex((sound) => sound.symbol === newSound.symbol),
    );
  };

  const onSoundChange = (value: string | null) => {
    if (!value) return;
    setSelectedSound(value);
    setSelectedSoundIndex(ipaData.findIndex((sound) => sound.symbol === value));
  };

  const onExampleChange = (value: string | null) => {
    if (!value) return;

    const example = currentSoundExamples.find((ex) => ex.word === value);

    setSelectedExample(example || null);
    setSelectedExampleIndex(
      currentSoundExamples.findIndex((ex) => ex.word === value),
    );
  };

  const speakWord = () => {
    if (!selectedExample) return;

    const utterance = new SpeechSynthesisUtterance(selectedExample.word);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
  };

  // Get current sound examples for the select dropdown
  const currentSoundExamples = selectedSound
    ? ipaData.find((sound) => sound.symbol === selectedSound)?.examples || []
    : [];

  // Check if there are more examples available for the current sound
  const hasMoreExamples =
    selectedSound &&
    currentSoundExamples.length > 0 &&
    selectedExampleIndex < currentSoundExamples.length - 1;

  // Check if there are more sounds available
  const hasMoreSounds = selectedSoundIndex < ipaData.length - 1;

  return (
    <Stack gap='md'>
      <audio ref={correctSoundRef} src='/sounds/correct.mp3' preload='auto' />
      <audio
        ref={incorrectSoundRef}
        src='/sounds/incorrect.mp3'
        preload='auto'
      />
      <Paper p='md' withBorder>
        <Stack gap='md'>
          <Group justify='space-between'>
            <Text size='xl' fw={700}>
              Luyện tập phát âm IPA
            </Text>
          </Group>

          <Select
            label='Chọn âm để luyện tập'
            placeholder='Chọn một âm'
            data={ipaData.map((sound) => ({
              value: sound.symbol,
              label: `${sound.symbol} - ${sound.vietnameseDescription}`,
            }))}
            clearable={false}
            value={selectedSound}
            onChange={(value) => {
              onSoundChange(value);
            }}
          />

          {selectedSound && (
            <Stack gap='sm'>
              <Text size='lg' fw={500}>
                Âm hiện tại: {selectedSound}
              </Text>
              <Text size='sm' c='dimmed'>
                {
                  ipaData.find((sound) => sound.symbol === selectedSound)
                    ?.vietnameseDescription
                }
              </Text>

              {/* Example selection dropdown */}
              <Select
                label='Chọn ví dụ để luyện tập'
                placeholder='Chọn một từ ví dụ'
                data={currentSoundExamples.map((example) => ({
                  value: example.word,
                  label: `${example.word} (${example.pronunciation}) - ${example.meaning}`,
                }))}
                value={selectedExample?.word || null}
                clearable={false}
                onChange={(value) => {
                  onExampleChange(value);
                }}
              />

              {selectedExample && (
                <div className='bg-white rounded-xl shadow-lg p-8 mb-6'>
                  <div className='flex justify-between items-center mb-6'>
                    <div className='text-gray-700'>Số từ đã đúng: {score}</div>
                    {/* <div className='text-gray-700'>
                      Lượt thử còn lại: {attempts}
                    </div> */}
                  </div>

                  <div className='text-center mb-8'>
                    <h2 className='text-2xl font-bold text-gray-800 mb-2'>
                      {selectedExample.word}
                    </h2>
                    <p className='text-gray-600 mb-4'>
                      {selectedExample.pronunciation}
                    </p>
                    <p className='text-gray-600 mb-6'>
                      ({selectedExample.meaning})
                    </p>

                    <div className='flex justify-center space-x-4'>
                      <button
                        onClick={speakWord}
                        className='w-16 h-16 cursor-pointer bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition'
                      >
                        <FaVolumeUp className='text-xl' />
                      </button>

                      <button
                        onClick={isListening ? stopListening : startListening}
                        // disabled={feedback === 'correct'}
                        className={`w-16 h-16 rounded-full flex items-center justify-center transition ${
                          isListening
                            ? 'bg-red-100 text-red-600 animate-pulse'
                            : 'bg-green-100 text-green-600 hover:bg-green-200'
                        } ${
                          isListening ? 'cursor-not-allowed' : 'cursor-pointer'
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
                                <FaCheck className='mr-2' /> Tuyệt vời! Phát âm
                                chính xác.
                              </p>
                            ) : (
                              <p className='flex items-center justify-center'>
                                <FaTimes className='mr-2' /> Thử lại! Phát âm
                                chưa chính xác.
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className='flex justify-center gap-4'>
                    <Button
                      onClick={moveToNextSound}
                      variant='outline'
                      disabled={!hasMoreSounds}
                      className={`px-6 py-2 cursor-pointer rounded-lg transition ${
                        hasMoreSounds
                          ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      Âm tiếp theo
                    </Button>
                    <Button
                      onClick={moveToNextExample}
                      variant='outline'
                      disabled={!hasMoreExamples}
                      className={`px-6 py-2 cursor-pointer rounded-lg transition ${
                        hasMoreExamples
                          ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      Từ tiếp theo
                    </Button>
                  </div>
                </div>
              )}
            </Stack>
          )}
        </Stack>
      </Paper>
    </Stack>
  );
}
