'use client';

import { Layout } from './Layout';
import Link from 'next/link';
import adjectives from '../data/adjectives';
import adverbs from '../data/adverbs';
import articles from '../data/articles';
import conditionals from '../data/conditionals';
import conjunctions from '../data/conjunctions';
import modals from '../data/modals';
import nouns from '../data/nouns';
import passiveVoice from '../data/passiveVoice';
import phrasal from '../data/phrasal';
import prepositions from '../data/prepositions';
import pronouns from '../data/pronouns';
import questionForms from '../data/questionForms';
import reportedSpeech from '../data/reportedSpeech';
import tenses from '@/data/tenses';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const grammarCategories = {
  verb: [
    { id: 'tenses', title: 'Thì' },
    { id: 'modals', title: 'Động từ khiếm khuyết' },
    { id: 'passiveVoice', title: 'Câu bị động' },
    { id: 'phrasal', title: 'Cụm động từ' },
  ],
  noun: [
    { id: 'nouns', title: 'Danh từ' },
    { id: 'articles', title: 'Mạo từ' },
    { id: 'pronouns', title: 'Đại từ' },
  ],
  modifiers: [
    { id: 'adjectives', title: 'Tính từ' },
    { id: 'adverbs', title: 'Trạng từ' },
  ],
  structures: [
    { id: 'prepositions', title: 'Giới từ' },
    { id: 'conjunctions', title: 'Liên từ' },
    { id: 'conditionals', title: 'Câu điều kiện' },
    { id: 'questionForms', title: 'Câu hỏi' },
    { id: 'reportedSpeech', title: 'Câu tường thuật' },
  ],
} as const;

const grammarData: Record<string, { description?: string }> = {
  tenses,
  prepositions,
  conjunctions,
  articles,
  passiveVoice,
  modals,
  reportedSpeech,
  questionForms,
  phrasal,
  conditionals,
  adverbs,
  adjectives,
  pronouns,
  nouns,
};

const Topic = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] =
    useState<keyof typeof grammarCategories>('verb');

  const handleTopicClick = (topicId: string) => {
    router.push(`/grammar?topic=${topicId}`);
  };

  return (
    <Layout
      title='Chủ đề Ngữ pháp Tiếng Anh'
      subtitle='Khám phá các chủ đề ngữ pháp khác nhau để nâng cao kỹ năng tiếng Anh của bạn. Mỗi chủ đề bao gồm giải thích, ví dụ và bài tập thực hành.'
    >
      <div className='container mx-auto px-4 py-4'>
        <div className='flex flex-wrap justify-center mb-6 mt-8'>
          {Object.keys(grammarCategories).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 m-1 rounded-full ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              } ${
                activeCategory === category
                  ? 'cursor-not-allowed'
                  : 'cursor-pointer'
              }`}
              onClick={() =>
                setActiveCategory(category as keyof typeof grammarCategories)
              }
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {grammarCategories[activeCategory].map((topic) => (
            <div
              key={topic.id}
              className='bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer'
              onClick={() => handleTopicClick(topic.id)}
            >
              <h2 className='text-xl font-semibold mb-3'>{topic.title}</h2>
              <p className='text-gray-600 mb-4 text-sm line-clamp-4'>
                {grammarData[topic.id]?.description ||
                  `Tìm hiểu về ${topic.title} trong ngữ pháp tiếng Anh`}
              </p>
              <div className='text-blue-600 font-medium'>Khám phá chủ đề →</div>
            </div>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <Link
            href='/'
            className='text-blue-600 hover:text-blue-800 font-medium'
          >
            ← Quay lại Trang chủ
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Topic;
