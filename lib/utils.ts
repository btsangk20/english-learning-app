// lib/utils.ts
import { VocabWord, QuizQuestion } from '../types';

// Trộn mảng (shuffle array)
export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Tạo câu hỏi quiz từ mảng từ vựng
export function generateQuizQuestions(
  vocabWords: VocabWord[],
  questionCount: number = 10,
): QuizQuestion[] {
  if (vocabWords.length < 4) {
    throw new Error('Cần ít nhất 4 từ để tạo quiz');
  }

  const shuffledWords = shuffleArray(vocabWords);
  const selectedWords = shuffledWords.slice(0, questionCount);

  return selectedWords.map((word) => {
    // Chọn ngẫu nhiên loại câu hỏi
    const questionTypes: ('meaning' | 'word' | 'example')[] = [
      'meaning',
      'word',
      'example',
    ];
    const questionType =
      questionTypes[Math.floor(Math.random() * questionTypes.length)];

    let correctAnswer = '';
    let options: string[] = [];

    if (questionType === 'meaning') {
      correctAnswer = word.meaning;
      // Lấy ngẫu nhiên 3 từ khác để làm đáp án nhiễu
      const otherWords = shuffledWords
        .filter((w) => w.word !== word.word)
        .slice(0, 3);
      options = [word.meaning, ...otherWords.map((w) => w.meaning)];
    } else if (questionType === 'word') {
      correctAnswer = word.word;
      const otherWords = shuffledWords
        .filter((w) => w.word !== word.word)
        .slice(0, 3);
      options = [word.word, ...otherWords.map((w) => w.word)];
    } else {
      // example
      correctAnswer = word.examples[0];
      options = [word.examples[0]];

      // Tạo các ví dụ sai bằng cách thay thế từ bằng từ khác
      const otherWords = shuffledWords
        .filter((w) => w.word !== word.word)
        .slice(0, 3);
      for (const otherWord of otherWords) {
        const fakeExample = word.examples[0].replace(
          new RegExp(word.word, 'gi'),
          otherWord.word,
        );
        options.push(fakeExample);
      }
    }

    return {
      questionType,
      correctAnswer,
      options: shuffleArray(options),
      word,
    };
  });
}

// Lưu trữ trạng thái học tập
export function saveProgress(words: VocabWord[]): void {
  console.log('words', words);
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem('vocabProgress', JSON.stringify(words));
    }
  } catch (error) {
    console.error('Error saving progress:', error);
  }
}

// Lấy trạng thái học tập đã lưu
export function getProgress(): VocabWord[] | null {
  try {
    if (typeof window !== 'undefined') {
      const savedProgress = localStorage.getItem('vocabProgress');
      return savedProgress ? JSON.parse(savedProgress) : null;
    }
  } catch (error) {
    console.error('Error getting progress:', error);
  }
  return null;
}

export const saveWordStatus = (word: string, mastered: boolean): void => {
  try {
    if (typeof window === 'undefined') return;

    // Lấy danh sách ID từ đã mastered
    const masteredWordsJson = localStorage.getItem('masteredWords');
    let masteredWords: string[] = masteredWordsJson
      ? JSON.parse(masteredWordsJson)
      : [];

    if (mastered) {
      // Thêm từ vào danh sách nếu chưa có
      if (!masteredWords.includes(word)) {
        masteredWords.push(word);
      }
    } else {
      // Xóa từ khỏi danh sách nếu có
      masteredWords = masteredWords.filter((w) => w !== word);
    }

    // Lưu lại danh sách đã cập nhật
    localStorage.setItem('masteredWords', JSON.stringify(masteredWords));
  } catch (error) {
    console.error('Lỗi khi lưu trạng thái từ vựng:', error);
  }
};

// Hàm lấy trạng thái đã học của tất cả các từ
export const getWordStatuses = (): Record<string, boolean> => {
  try {
    if (typeof window === 'undefined') return {};

    const masteredWordsJson = localStorage.getItem('masteredWords');
    const masteredWords: string[] = masteredWordsJson
      ? JSON.parse(masteredWordsJson)
      : [];

    // Tạo object với key là từ, value là trạng thái mastered
    const statuses: Record<string, boolean> = {};
    for (const word of masteredWords) {
      statuses[word] = true;
    }

    return statuses;
  } catch (error) {
    console.error('Lỗi khi lấy trạng thái từ vựng:', error);
    return {};
  }
};
