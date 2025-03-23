'use client';

import { useCallback, useState } from 'react';

import { GrammarExercise } from '../types/grammar';

export function useExercise(initialExercise: GrammarExercise | null = null) {
  const [exercise, setExercise] = useState<GrammarExercise | null>(
    initialExercise,
  );
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanations, setShowExplanations] = useState<
    Record<number, boolean>
  >({});

  // Reset all state when selecting a new exercise
  const selectExercise = useCallback((newExercise: GrammarExercise) => {
    setExercise(newExercise);
    setUserAnswers({});
    setShowResults(false);
    setShowExplanations({});
  }, []);

  // Save user's selected answer
  const selectOption = useCallback(
    (questionId: number, option: string) => {
      if (showResults) return; // Prevent changing answers after submission

      setUserAnswers((prev) => ({
        ...prev,
        [questionId]: option,
      }));
    },
    [showResults],
  );

  // Submit answers and show results
  const submitAnswers = useCallback(() => {
    setShowResults(true);
  }, []);

  // Reset to try again
  const resetExercise = useCallback(() => {
    setUserAnswers({});
    setShowResults(false);
    setShowExplanations({});
  }, []);

  // Toggle explanation visibility
  const toggleExplanation = useCallback((questionId: number) => {
    setShowExplanations((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  }, []);

  // Calculate score
  const calculateScore = useCallback(() => {
    if (!exercise) return { correct: 0, total: 0, percentage: 0 };

    let correctCount = 0;
    exercise.questions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        correctCount++;
      }
    });

    const total = exercise.questions.length;
    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;

    return { correct: correctCount, total, percentage };
  }, [exercise, userAnswers]);

  // Check if all questions have been answered
  const isComplete = useCallback(() => {
    if (!exercise) return false;
    return Object.keys(userAnswers).length >= exercise.questions.length;
  }, [exercise, userAnswers]);

  return {
    exercise,
    userAnswers,
    showResults,
    showExplanations,
    selectExercise,
    selectOption,
    submitAnswers,
    resetExercise,
    toggleExplanation,
    calculateScore,
    isComplete,
  };
}
