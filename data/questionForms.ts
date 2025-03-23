const questionFormQuestions = {
  id: 901,
  title: 'Dạng câu hỏi trong tiếng Anh (Question Forms)',
  description:
    'Tiếng Anh có nhiều dạng câu hỏi như câu hỏi Yes/No, câu hỏi Wh-, câu hỏi đuôi, câu hỏi gián tiếp và câu hỏi lựa chọn. Mỗi loại có cấu trúc và mục đích khác nhau.',
  questions: [
    {
      id: 9001,
      question: 'Which of the following is a Yes/No question?',
      options: [
        'Where do you live?',
        'Do you live in London?',
        'Why do you live in London?',
        'Who lives in London?',
      ],
      correctAnswer: 'Do you live in London?',
      explanation:
        'Câu hỏi Yes/No bắt đầu bằng trợ động từ và có thể trả lời bằng "yes" hoặc "no".',
      examples: ['Is it raining?', 'Have you finished your homework?'],
    },
    {
      id: 9002,
      question: 'Which question word is used to ask about time?',
      options: ['What', 'Where', 'When', 'Who'],
      correctAnswer: 'When',
      explanation: 'Từ để hỏi "When" được dùng để hỏi về thời gian.',
      examples: ['When does the movie start?', 'When were you born?'],
    },
    {
      id: 9003,
      question:
        'Identify the correct question tag: "You are coming to the party, ___?"',
      options: ["aren't you", 'are you', "don't you", "isn't it"],
      correctAnswer: "aren't you",
      explanation:
        'Câu hỏi đuôi sử dụng trợ động từ giống với mệnh đề chính nhưng ngược lại về tính khẳng định/phủ định.',
      examples: [
        "She likes chocolate, doesn't she?",
        "They haven't arrived, have they?",
      ],
    },
    {
      id: 9004,
      question: 'Which is a correct indirect question?',
      options: [
        'Where is the nearest bank?',
        'Do you know where is the nearest bank?',
        'Do you know where the nearest bank is?',
        'Where the nearest bank is?',
      ],
      correctAnswer: 'Do you know where the nearest bank is?',
      explanation:
        'Câu hỏi gián tiếp thay đổi trật tự từ, đặt động từ sau chủ ngữ như trong câu trần thuật.',
      examples: [
        'Could you tell me what time it is?',
        'I wonder if they have arrived.',
      ],
    },
    {
      id: 9005,
      question: 'Which question asks about possession?',
      options: [
        'What is this?',
        'Where is your book?',
        'When did you arrive?',
        'Whose car is this?',
      ],
      correctAnswer: 'Whose car is this?',
      explanation: 'Câu hỏi về sở hữu đặt từ "Whose" trước danh từ.',
      examples: ['Whose car is this?', 'Whose book is this?'],
    },
  ],
};

export default questionFormQuestions;
