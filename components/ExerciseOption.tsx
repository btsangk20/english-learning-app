'use client';

import { FaCheck, FaTimes } from 'react-icons/fa';

import React from 'react';

interface ExerciseOptionProps {
  option: string;
  index: number;
  isSelected: boolean;
  isCorrect: boolean | null; // null when results not shown
  showResults: boolean;
  onClick: () => void;
}

// Memoized for performance optimization - options won't re-render unnecessarily
export const ExerciseOption = React.memo(function ExerciseOption({
  option,
  index,
  isSelected,
  isCorrect,
  showResults,
  onClick,
}: ExerciseOptionProps) {
  // Determine styling based on state
  let className = 'w-full text-left p-3 border rounded-lg transition';

  if (isSelected) {
    if (showResults) {
      className += isCorrect
        ? 'bg-green-100 border-green-500'
        : 'bg-red-100 border-red-500';
    } else {
      className += 'bg-blue-100 border-blue-500';
    }
  } else if (showResults && isCorrect) {
    className += 'bg-green-100 border-green-500';
  } else {
    className += 'border-gray-200 hover:border-gray-300';
  }

  return (
    <button
      onClick={onClick}
      className={`${className} ${
        showResults ? 'cursor-default' : 'cursor-pointer'
      }`}
      disabled={showResults}
    >
      {String.fromCharCode(65 + index)}. {option}
      {showResults && isSelected && (
        <span className='float-right'>
          {isCorrect ? (
            <FaCheck className='text-green-500' />
          ) : (
            <FaTimes className='text-red-500' />
          )}
        </span>
      )}
    </button>
  );
});

