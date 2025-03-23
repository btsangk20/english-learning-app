// components/Flashcard.tsx
'use client';

import { FaCheck, FaQuestion } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import { Button } from '@mantine/core';
import { VocabWord } from '../types';
import { motion } from 'framer-motion';

interface FlashcardProps {
  word: VocabWord;
  onMastered: (word: VocabWord, mastered: boolean) => void;
}

export default function Flashcard({ word, onMastered }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMastered, setIsMastered] = useState(word.mastered || false);

  const examples =
    word.examples?.length >= 2 ? word.examples.slice(0, 2) : word.examples;

  // Update isMastered state whenever word changes
  useEffect(() => {
    setIsFlipped(false); // Reset flip state when changing words
    setIsMastered(word.mastered || false);
  }, [word]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleMastered = () => {
    const newMasteredStatus = !isMastered;
    setIsMastered(newMasteredStatus);
    onMastered(word, newMasteredStatus);
  };

  const renderButton = (isMastered: boolean) => {
    return (
      <div className='absolute top-4 right-4'>
        <Button
          variant='outline'
          color={isMastered ? 'green' : 'black'}
          size='xs'
          onClick={(e) => {
            e.stopPropagation();
            handleMastered();
          }}
        >
          {isMastered ? <FaCheck /> : <FaQuestion />}
        </Button>
      </div>
    );
  };

  return (
    <div className='perspective-1000 w-full max-w-sm mx-auto h-64 cursor-pointer'>
      <motion.div
        className={`relative w-full h-full transition-transform duration-500 preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={handleFlip}
      >
        {/* Front of card */}
        <div
          className={`absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center items-center border-2 ${
            isMastered ? 'border-green-500' : 'border-blue-500'
          }`}
        >
          <h2 className='text-3xl font-bold text-gray-800'>{word.word}</h2>
          <p className='text-gray-600 mt-2'>{word.type}</p>
          <p className='text-gray-500 mt-1'>{word.pronunciation}</p>

          {renderButton(isMastered)}
        </div>

        {/* Back of card */}
        <div
          className={`absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-6 rotate-y-180 flex flex-col justify-center items-center border-2 ${
            isMastered ? 'border-green-500' : 'border-blue-500'
          }`}
        >
          <h3 className='text-xl font-semibold text-gray-800 mb-2'>Nghĩa:</h3>
          <p className='text-gray-700 mb-4 text-center'>{word.meaning}</p>

          <h3 className='text-xl font-semibold text-gray-800 mb-2'>Ví dụ:</h3>
          <ul className='text-sm text-gray-600'>
            {examples.map((example, index) => (
              <li key={index} className='mb-1'>
                {example}
              </li>
            ))}
          </ul>

          {renderButton(isMastered)}
        </div>
      </motion.div>
    </div>
  );
}
