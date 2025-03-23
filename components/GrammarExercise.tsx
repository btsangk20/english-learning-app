'use client';

import { Button } from '@mantine/core';
import { ExerciseQuestion } from './ExerciseQuestion';
import { GrammarExercise as GrammarExerciseType } from '../types/grammar';
import React from 'react';
import { ResultsSummary } from './ResultsSummary';
import { useExercise } from '../hooks/useExercise';

interface GrammarExerciseProps {
  exercise: GrammarExerciseType;
}

export function GrammarExercise({ exercise }: GrammarExerciseProps) {
  const {
    userAnswers,
    showResults,
    showExplanations,
    selectOption,
    submitAnswers,
    resetExercise,
    toggleExplanation,
    calculateScore,
    isComplete,
  } = useExercise(exercise);

  const { correct, total, percentage } = calculateScore();

  return (
    <div className='bg-white rounded-xl shadow-lg p-6'>
      <h2 className='text-xl font-bold text-gray-800 mb-2'>{exercise.title}</h2>
      <p className='text-gray-600 mb-6'>{exercise.description}</p>

      {showResults && (
        <ResultsSummary
          correct={correct}
          total={total}
          percentage={percentage}
        />
      )}

      <div className='space-y-6'>
        {exercise.questions.map((question, questionIndex) => (
          <ExerciseQuestion
            key={question.id}
            question={question}
            index={questionIndex}
            userAnswer={userAnswers[question.id]}
            showResults={showResults}
            showExplanation={!!showExplanations[question.id]}
            onSelectOption={(option) => selectOption(question.id, option)}
            onToggleExplanation={() => toggleExplanation(question.id)}
          />
        ))}
      </div>

      <div className='mt-6 flex justify-center'>
        {showResults ? (
          <Button
            onClick={resetExercise}
            className={`px-6 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ${
              !isComplete() ? 'cursor-not-allowed' : ''
            }`}
            unstyled
          >
            Làm lại
          </Button>
        ) : (
          <Button
            onClick={() => {
              submitAnswers();
            }}
            className={`px-6 py-2 text-white rounded-lg transition  ${
              !isComplete()
                ? 'cursor-not-allowed bg-gray-400 hover:bg-gray-400 opacity-50'
                : 'cursor-pointer bg-blue-600 hover:bg-blue-700 opacity-100'
            }`}
            disabled={!isComplete()}
            unstyled
          >
            Kiểm tra đáp án
          </Button>
        )}
      </div>
    </div>
  );
}

