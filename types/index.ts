// types/index.ts
export interface VocabWord {
  word: string;
  type: string;
  pronunciation: string;
  pronunciationUs?: string;
  wordIndex?: number;
  meaning: string;
  examples: string[];
  mastered?: boolean;
  lastReviewed?: Date;
}

export interface QuizQuestion {
  questionType: 'meaning' | 'word' | 'example';
  correctAnswer: string;
  options: string[];
  word: VocabWord;
}

export interface QuizResult {
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: VocabWord[];
  timeSpent: number;
}

export interface QuizScore {
  date: string;
  score: number;
  total: number;
}
