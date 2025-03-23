const conjunctionQuestions = {
  id: 1401,
  title: 'Liên từ trong tiếng Anh (Conjunctions)',
  description:
    'Liên từ là từ kết nối các từ, cụm từ hoặc mệnh đề. Có ba loại chính: liên từ kết hợp, liên từ tương quan và liên từ phụ thuộc.',
  questions: [
    {
      id: 14001,
      question: 'Which of the following is a coordinating conjunction?',
      options: ['Although', 'Because', 'But', 'Since'],
      correctAnswer: 'But',
      explanation:
        'Liên từ kết hợp (coordinating conjunction) nối các từ, cụm từ hoặc mệnh đề có giá trị ngang nhau. Nhớ FANBOYS: For, And, Nor, But, Or, Yet, So.',
      examples: [
        'I wanted to go, but I was too tired.',
        'She likes coffee and tea.',
      ],
    },
    {
      id: 14002,
      question:
        'Choose the correct conjunction: "I couldn\'t sleep ___ I was very tired."',
      options: ['but', 'and', 'although', 'so'],
      correctAnswer: 'although',
      explanation: 'Liên từ "although" diễn tả sự tương phản giữa hai mệnh đề.',
      examples: [
        'Although it was raining, we went for a walk.',
        'He went to work although he was sick.',
      ],
    },
    {
      id: 14003,
      question: 'Which sentence uses a subordinating conjunction?',
      options: [
        'I like tea and coffee.',
        'I like neither tea nor coffee.',
        "I like tea, but I don't like coffee.",
        'I like tea because it relaxes me.',
      ],
      correctAnswer: 'I like tea because it relaxes me.',
      explanation:
        'Liên từ phụ thuộc (subordinating conjunction) như "because" kết nối mệnh đề chính và mệnh đề phụ.',
      examples: [
        'She went home early because she felt sick.',
        'When it rains, the garden gets wet.',
      ],
    },
    {
      id: 14004,
      question: 'Which pair are correlative conjunctions?',
      options: ['And, but', 'Either, or', 'Because, since', 'Although, though'],
      correctAnswer: 'Either, or',
      explanation:
        'Liên từ tương quan (correlative conjunctions) luôn đi theo cặp để thể hiện mối quan hệ giữa các thành phần trong câu.',
      examples: [
        'Either we go now or we miss the train.',
        'Both my sister and my brother are teachers.',
      ],
    },
    {
      id: 14005,
      question: 'What type of conjunction is "however"?',
      options: [
        'Coordinating conjunction',
        'Subordinating conjunction',
        'Correlative conjunction',
        'Conjunctive adverb',
      ],
      correctAnswer: 'Conjunctive adverb',
      explanation:
        'Trạng từ liên kết (conjunctive adverb) như "however" kết nối hai câu độc lập và thường được ngăn cách bằng dấu chấm hoặc dấu chấm phẩy.',
      examples: [
        'She was tired; however, she kept working.',
        "He didn't study. However, he passed the exam.",
      ],
    },
    {
      id: 14006,
      question:
        'Choose the correct conjunction: "He didn\'t get the job ___ having all the necessary qualifications."',
      options: ['because of', 'despite', 'although', 'since'],
      correctAnswer: 'despite',
      explanation:
        '"Despite" (dù, mặc dù) được dùng để nối hai ý tương phản, theo sau là danh từ hoặc gerund.',
      examples: [
        'Despite the rain, we enjoyed our holiday.',
        'She went to work despite feeling ill.',
      ],
    },
    {
      id: 14007,
      question: 'Which conjunction shows purpose?',
      options: ['Because', 'Although', 'So that', 'Unless'],
      correctAnswer: 'So that',
      explanation:
        'Liên từ "so that" diễn tả mục đích hoặc ý định của một hành động.',
      examples: [
        'I saved money so that I could buy a car.',
        'She studied hard so that she would pass the exam.',
      ],
    },
    {
      id: 14008,
      question:
        'Choose the correct conjunction: "___ you help me, I won\'t be able to finish on time."',
      options: ['Although', 'Because', 'Unless', 'While'],
      correctAnswer: 'Unless',
      explanation:
        '"Unless" tương đương với "if not" và diễn tả một điều kiện cần để sự việc không xảy ra.',
      examples: [
        "Unless it rains, we'll go to the beach.",
        "You won't pass the exam unless you study.",
      ],
    },
    {
      id: 14009,
      question: 'Which sentence uses a time conjunction?',
      options: [
        'I went to bed because I was tired.',
        "I went to bed although I wasn't tired.",
        'I went to bed after I finished my work.',
        'I went to bed so that I could wake up early.',
      ],
      correctAnswer: 'I went to bed after I finished my work.',
      explanation:
        'Liên từ chỉ thời gian (time conjunction) như "after" chỉ mối quan hệ thời gian giữa hai sự kiện.',
      examples: [
        'Before you leave, please turn off the lights.',
        'While I was cooking, she was setting the table.',
      ],
    },
    {
      id: 14010,
      question: 'What does the conjunction "whereas" express?',
      options: ['Time', 'Reason', 'Contrast', 'Purpose'],
      correctAnswer: 'Contrast',
      explanation:
        '"Whereas" diễn tả sự tương phản giữa hai tình huống hoặc sự kiện.',
      examples: [
        'He likes coffee, whereas I prefer tea.',
        'She works during the day, whereas he works at night.',
      ],
    },
  ],
};

export default conjunctionQuestions;
