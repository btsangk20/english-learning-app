const articleQuestions = {
  id: 1301,
  title: 'Mạo từ trong tiếng Anh (Articles)',
  description:
    'Mạo từ đứng trước danh từ để xác định danh từ đó. Tiếng Anh có mạo từ không xác định (a, an) và mạo từ xác định (the).',
  questions: [
    {
      id: 13001,
      question: 'Choose the correct article: "I saw ___ bird in ___ tree."',
      options: ['a, a', 'a, the', 'the, a', 'the, the'],
      correctAnswer: 'a, the',
      explanation:
        'Dùng "a" khi đề cập đến một con chim chưa xác định lần đầu, sau đó dùng "the" cho cái cây vì nó được xác định là cái cây có con chim.',
      examples: [
        'I bought a book. The book was interesting.',
        'She has a cat and a dog. The cat is black.',
      ],
    },
    {
      id: 13002,
      question: 'When do we use "an" instead of "a"?',
      options: [
        'Before any noun',
        'Before vowel sounds',
        'Before plural nouns',
        'Before consonant sounds',
      ],
      correctAnswer: 'Before vowel sounds',
      explanation:
        'Dùng "an" trước danh từ bắt đầu bằng âm nguyên âm, không phải chữ cái nguyên âm.',
      examples: [
        'An apple, an hour (silent h), an umbrella',
        'A university (sounds like "yu"), a European (sounds like "yu")',
      ],
    },
    {
      id: 13003,
      question: 'Which sentence correctly uses articles?',
      options: [
        'She is the best student in a class.',
        'She is a best student in the class.',
        'She is the best student in the class.',
        'She is a best student in a class.',
      ],
      correctAnswer: 'She is the best student in the class.',
      explanation:
        'Dùng "the" với tính từ ở mức độ so sánh nhất và khi nói về một lớp học cụ thể ("the class").',
      examples: [
        'He is the tallest boy in the school.',
        'This is the most interesting book I have read.',
      ],
    },
    {
      id: 13004,
      question: 'Which group of nouns typically does NOT use articles?',
      options: [
        'Specific things (the sun, the moon)',
        'Proper nouns (Paris, John)',
        'Countable nouns (book, car)',
        'Unique items (the Eiffel Tower)',
      ],
      correctAnswer: 'Proper nouns (Paris, John)',
      explanation:
        'Danh từ riêng thường không dùng mạo từ, trừ một số trường hợp đặc biệt.',
      examples: ['London is the capital of England.', 'Mary went to school.'],
    },
    {
      id: 13005,
      question:
        'Choose the correct option: "_____ Mount Everest is _____ highest mountain in _____ world."',
      options: ['The, a, the', 'The, the, the', '-, the, the', '-, a, the'],
      correctAnswer: '-, the, the',
      explanation:
        'Không dùng mạo từ trước tên núi, dùng "the" với tính từ ở mức độ so sánh nhất, và dùng "the" với "world".',
      examples: [
        'Kilimanjaro is in Tanzania.',
        'The Amazon is the longest river in the world.',
      ],
    },
    {
      id: 13006,
      question: 'When should we use "the" with geographical features?',
      options: [
        'With all geographical names',
        'With mountains and lakes',
        'With oceans, seas, rivers, and mountain ranges',
        'With countries and cities',
      ],
      correctAnswer: 'With oceans, seas, rivers, and mountain ranges',
      explanation:
        'Dùng "the" với đại dương, biển, sông và dãy núi, nhưng không dùng với hồ và núi đơn lẻ.',
      examples: [
        'The Atlantic Ocean, the Mediterranean Sea, the Nile, the Alps',
        'Lake Michigan, Mount Fuji (no article)',
      ],
    },
    {
      id: 13007,
      question: 'Which sentence uses articles correctly?',
      options: [
        'I have a experience in teaching.',
        'I have an experience in teaching.',
        'I have the experience in teaching.',
        'I have experience in teaching.',
      ],
      correctAnswer: 'I have experience in teaching.',
      explanation:
        '"Experience" khi dùng như danh từ không đếm được có nghĩa chung là "kinh nghiệm" thì không dùng mạo từ.',
      examples: [
        'She has knowledge of French.',
        'They need information about the course.',
      ],
    },
    {
      id: 13008,
      question:
        'Choose the correct articles: "Let\'s have ___ lunch at ___ restaurant on ___ Main Street."',
      options: ['a, a, the', '-, a, -', '-, the, -', '-, a, the'],
      correctAnswer: '-, a, -',
      explanation:
        'Không dùng mạo từ với bữa ăn, dùng "a" với nhà hàng chưa xác định, và không dùng mạo từ với tên đường cụ thể.',
      examples: [
        'We had dinner at a new restaurant.',
        'They live on Oxford Street.',
      ],
    },
    {
      id: 13009,
      question: 'Which sentence uses "the" correctly?',
      options: [
        'I go to the school every day.',
        'The gold is a precious metal.',
        'The history is my favorite subject.',
        'She plays the piano very well.',
      ],
      correctAnswer: 'She plays the piano very well.',
      explanation:
        'Dùng "the" trước tên nhạc cụ khi nói về việc chơi nhạc cụ đó.',
      examples: [
        'He plays the guitar.',
        'They are learning to play the violin.',
      ],
    },
    {
      id: 13010,
      question: 'When do we use "the" with uncountable nouns?',
      options: [
        'We always use "the" with uncountable nouns',
        'We never use "the" with uncountable nouns',
        'When referring to a specific instance or aspect of the uncountable noun',
        'When the uncountable noun starts with a vowel',
      ],
      correctAnswer:
        'When referring to a specific instance or aspect of the uncountable noun',
      explanation:
        'Dùng "the" với danh từ không đếm được khi đề cập đến một khía cạnh cụ thể.',
      examples: [
        'I like music (general). The music at the party was too loud (specific).',
        'Water is essential for life (general). The water in this lake is clean (specific).',
      ],
    },
  ],
};

export default articleQuestions;
