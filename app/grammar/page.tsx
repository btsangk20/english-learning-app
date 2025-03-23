'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { FaArrowLeft } from 'react-icons/fa';
import { GrammarExercise } from '@/components/GrammarExercise';
import { Layout } from '@/components/Layout';
import adjectives from '@/data/adjectives';
import adverbs from '@/data/adverbs';
import articles from '@/data/articles';
import conditionals from '@/data/conditionals';
import conjunctions from '@/data/conjunctions';
import modals from '@/data/modals';
import nouns from '@/data/nouns';
import passiveVoice from '@/data/passiveVoice';
import phrasal from '@/data/phrasal';
import prepositions from '@/data/prepositions';
import pronouns from '@/data/pronouns';
import questionForms from '@/data/questionForms';
import reportedSpeech from '@/data/reportedSpeech';
import tenses from '@/data/tenses';

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

export default function GrammarPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const topic = searchParams.get('topic');

  const [selectedExercise, setSelectedExercise] =
    useState<GrammarExercise | null>(null);

  useEffect(() => {
    const grammarData = {
      tenses,
      adjectives,
      adverbs,
      articles,
      conditionals,
      conjunctions,
      modals,
      nouns,
      passiveVoice,
      phrasal,
      prepositions,
      pronouns,
      questionForms,
      reportedSpeech,
    };

    if (topic === 'tenses') {
      setSelectedExercise(null);
    } else {
      const data = grammarData[topic as keyof typeof grammarData];
      setSelectedExercise(data as GrammarExercise);
    }
  }, [topic]);

  const handleSelectTense = (id: number) => {
    const selected = tenses.exercises.find((exercise) => exercise.id === id);
    setSelectedExercise(selected || null);
  };

  const handleClickBack = () => {
    if (topic === 'tenses') {
      setSelectedExercise(null);
    } else {
      router.back();
    }
  };

  const onBack = () => {
    router.back();
  };

  return (
    <Layout
      title='Bài Tập Ngữ Pháp'
      subtitle='Luyện tập các quy tắc ngữ pháp tiếng Anh qua các bài tập đa dạng.'
    >
      {topic === 'tenses' && !selectedExercise ? (
        <div className='bg-white rounded-xl shadow-lg p-6'>
          <button
            onClick={onBack}
            className='text-blue-600 flex items-center mb-4 cursor-pointer'
          >
            <FaArrowLeft className='mr-2' />
            Quay lại trang chủ đề
          </button>
          <h2 className='text-xl font-bold text-gray-800 mb-4'>
            Chọn thì để làm bài tập
          </h2>
          <div className='grid grid-cols-2 gap-4'>
            {tenses.exercises.map((exercise) => (
              <button
                key={exercise.id}
                onClick={() => handleSelectTense(exercise.id)}
                className='p-4 border rounded-lg bg-gray-100 hover:bg-gray-200 transition cursor-pointer'
              >
                {exercise.title}
              </button>
            ))}
          </div>
        </div>
      ) : selectedExercise ? (
        <div className='bg-white rounded-xl shadow-lg p-6'>
          <button
            onClick={handleClickBack}
            className='text-blue-600 flex items-center mb-4 cursor-pointer'
          >
            <FaArrowLeft className='mr-2' />
            {topic === 'tenses'
              ? 'Quay lại danh sách thì'
              : 'Quay lại trang chủ đề'}
          </button>

          <GrammarExercise exercise={selectedExercise} />
        </div>
      ) : (
        <div className='bg-white rounded-xl shadow-lg p-8 text-center'>
          <p className='text-gray-600'>
            Vui lòng chọn một bài tập ngữ pháp từ danh sách để bắt đầu.
          </p>
        </div>
      )}
    </Layout>
  );
}
