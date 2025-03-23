'use client';

import { ExerciseOption } from './ExerciseOption';
import { ExplanationBox } from './ExplanationBox';
import { Question } from '../types/grammar';
import React from 'react';

interface ExerciseQuestionProps {
  question: Question;
  index: number;
  userAnswer: string | undefined;
  showResults: boolean;
  showExplanation: boolean;
  onSelectOption: (option: string) => void;
  onToggleExplanation: () => void;
}

export const ExerciseQuestion = React.memo(function ExerciseQuestion({
  question,
  index,
  userAnswer,
  showResults,
  showExplanation,
  onSelectOption,
  onToggleExplanation,
}: ExerciseQuestionProps) {
  return (
    <div className='p-4 border border-gray-200 rounded-lg question-container'>
      <p className='text-lg mb-3'>
        {index + 1}. {question.question}
      </p>

      <div className='space-y-2 mb-4'>
        {question.options.map((option, optionIndex) => (
          <ExerciseOption
            key={optionIndex}
            option={option}
            index={optionIndex}
            isSelected={userAnswer === option}
            isCorrect={option === question.correctAnswer}
            showResults={showResults}
            onClick={() => onSelectOption(option)}
          />
        ))}
      </div>

      {showResults && (
        <ExplanationBox
          explanation={question.explanation}
          isVisible={showExplanation}
          onToggle={onToggleExplanation}
        />
      )}
    </div>
  );
});

