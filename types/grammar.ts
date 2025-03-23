export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface GrammarExercise {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

export interface GrammarTopic {
  id: number;
  title: string;
  slug: string;
  description: string;
  exercises: GrammarExercise[];
}
