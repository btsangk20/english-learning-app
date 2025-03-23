const adjectiveQuestions = {
  id: 501,
  title: 'Tính từ trong tiếng Anh (Adjectives)',
  description:
    'Tính từ là từ dùng để mô tả hoặc bổ nghĩa cho danh từ. Chúng có thể chỉ tính chất, màu sắc, kích thước, nguồn gốc và các đặc điểm khác.',
  questions: [
    {
      id: 5001,
      question: 'What is the correct comparative form of "good"?',
      options: ['Gooder', 'Better', 'More good', 'Goodest'],
      correctAnswer: 'Better',
      explanation:
        'Tính từ "good" có dạng so sánh hơn bất quy tắc là "better".',
      examples: [
        'She is better at math than I am.',
        'His new car is better than his old one.',
      ],
    },
    {
      id: 5002,
      question:
        'Choose the correct superlative form: "This is the ___ building in the city."',
      options: ['tall', 'taller', 'tallest', 'most tall'],
      correctAnswer: 'tallest',
      explanation:
        'Với tính từ ngắn như "tall", dạng so sánh nhất được tạo bằng cách thêm "est".',
      examples: [
        'Mount Everest is the tallest mountain in the world.',
        'This is the tallest tree I have ever seen.',
      ],
    },
    {
      id: 5003,
      question: 'Which sentence uses an adjective in the correct position?',
      options: [
        'I have a car red.',
        'I have a red car.',
        'I have red a car.',
        'I have car a red.',
      ],
      correctAnswer: 'I have a red car.',
      explanation:
        'Trong tiếng Anh, tính từ thường đứng trước danh từ mà nó bổ nghĩa.',
      examples: ['He bought a new house.', 'She wore a beautiful dress.'],
    },
    {
      id: 5004,
      question:
        'What is the correct order of adjectives: "She has a ___ dress."',
      options: [
        'red beautiful silk',
        'silk red beautiful',
        'beautiful red silk',
        'beautiful silk red',
      ],
      correctAnswer: 'beautiful red silk',
      explanation:
        'Thứ tự tính từ thường là: ý kiến (beautiful) -> màu sắc (red) -> chất liệu (silk).',
      examples: [
        'He has a small black leather wallet.',
        'They bought a lovely old wooden table.',
      ],
    },
    {
      id: 5005,
      question: 'Which of the following is a proper comparative form?',
      options: ['More happier', 'More happy', 'Happyer', 'Happier'],
      correctAnswer: 'Happier',
      explanation:
        'Với tính từ ngắn kết thúc bằng "y", thay "y" bằng "ier" để tạo dạng so sánh hơn.',
      examples: [
        'She is happier now than before.',
        'This exercise is easier than the last one.',
      ],
    },
    {
      id: 5006,
      question:
        'Choose the correct form: "That was the ___ movie I have ever seen."',
      options: [
        'more interesting',
        'interestingest',
        'most interesting',
        'very interesting',
      ],
      correctAnswer: 'most interesting',
      explanation:
        'Với tính từ dài như "interesting", dạng so sánh nhất được tạo bằng cách thêm "most" phía trước.',
      examples: [
        'This is the most difficult problem in the test.',
        'She is the most intelligent student in the class.',
      ],
    },
    {
      id: 5007,
      question: 'Identify the sentence with a predicative adjective:',
      options: [
        'The happy child played in the garden.',
        'The child is happy.',
        'The child happily played in the garden.',
        'The happy playing child was in the garden.',
      ],
      correctAnswer: 'The child is happy.',
      explanation:
        'Tính từ vị ngữ (predicative adjective) đứng sau động từ liên kết như "be".',
      examples: ['The soup tastes delicious.', 'She feels tired after work.'],
    },
    {
      id: 5008,
      question:
        'Which is the correct form for the blank: "The weather is ___ today than it was yesterday."',
      options: ['more cold', 'colder', 'coldest', 'most cold'],
      correctAnswer: 'colder',
      explanation:
        'Tính từ ngắn như "cold" tạo dạng so sánh hơn bằng cách thêm "er".',
      examples: [
        'The water is warmer in summer.',
        'This book is shorter than the other one.',
      ],
    },
    {
      id: 5009,
      question:
        'Select the sentence with the correct use of an extreme adjective:',
      options: [
        'The film was very amazing.',
        'The film was absolutely amazing.',
        'The film was more amazing.',
        'The film was amazinger.',
      ],
      correctAnswer: 'The film was absolutely amazing.',
      explanation:
        'Tính từ mức độ cao (extreme adjective) như "amazing" nên đi với "absolutely", không dùng "very".',
      examples: [
        'I was absolutely exhausted after the marathon.',
        'The view was absolutely breathtaking.',
      ],
    },
    {
      id: 5010,
      question: 'Which sentence contains a compound adjective?',
      options: [
        'She is a very smart girl.',
        'She has a five-year-old daughter.',
        'The tall tree is in our garden.',
        'The book is interesting and educational.',
      ],
      correctAnswer: 'She has a five-year-old daughter.',
      explanation:
        'Tính từ ghép (compound adjective) gồm hai hoặc nhiều từ nối với nhau bằng gạch ngang khi đứng trước danh từ.',
      examples: [
        'He is a well-known author.',
        'They live in a three-bedroom apartment.',
      ],
    },
  ],
};

export default adjectiveQuestions;
