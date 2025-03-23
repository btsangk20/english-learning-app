'use client';

import { GrammarTopic as GrammarTopicType } from '../types/grammar';
import Link from 'next/link';
import React from 'react';

interface GrammarTopicProps {
  topics: GrammarTopicType[];
  activeTopic?: number;
  onSelectTopic?: (topicId: number) => void;
}

export function GrammarTopic({
  topics,
  activeTopic,
  onSelectTopic,
}: GrammarTopicProps) {
  const handleClick = (topicId: number) => {
    if (onSelectTopic) {
      onSelectTopic(topicId);
    }
  };

  return (
    <div className='bg-white rounded-xl shadow-lg p-4'>
      <h2 className='text-lg font-semibold text-gray-800 mb-4 text-center'>
        Chủ đề ngữ pháp
      </h2>
      <div className='space-y-2'>
        {topics.map((topic) =>
          onSelectTopic ? (
            // Used in main page with onClick handler
            <button
              key={topic.id}
              onClick={() => handleClick(topic.id)}
              className={`w-full text-left p-3 rounded-lg transition cursor-pointer ${
                activeTopic === topic.id
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {topic.title}
            </button>
          ) : (
            // Used in topic list page with Link
            <Link
              key={topic.id}
              href={`/topic/${topic.slug}`}
              className='block w-full text-left p-3 rounded-lg transition bg-gray-100 hover:bg-gray-200 text-gray-700'
            >
              {topic.title}
            </Link>
          ),
        )}
      </div>
    </div>
  );
}

