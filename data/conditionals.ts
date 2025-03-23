const conditionalQuestions = {
  id: 701,
  title: 'Câu điều kiện trong tiếng Anh (Conditionals)',
  description:
    'Câu điều kiện diễn tả một hành động hoặc sự việc phụ thuộc vào một điều kiện. Tiếng Anh có bốn loại câu điều kiện chính và các dạng hỗn hợp.',
  questions: [
    {
      id: 7001,
      question: 'Which conditional sentence is a Zero Conditional?',
      options: [
        'If it rains tomorrow, I will stay at home.',
        'If it rained, I would stay at home.',
        'If water reaches 100 degrees Celsius, it boils.',
        'If I had studied harder, I would have passed the exam.',
      ],
      correctAnswer: 'If water reaches 100 degrees Celsius, it boils.',
      explanation:
        'Câu điều kiện loại 0 (Zero Conditional) diễn tả một sự thật hiển nhiên, quy luật tự nhiên.',
      examples: [
        'If you heat ice, it melts.',
        "If you don't water plants, they die.",
      ],
    },
    {
      id: 7002,
      question: 'Complete the First Conditional: "If it rains tomorrow, ___."',
      options: [
        'I stay at home',
        'I stayed at home',
        'I will stay at home',
        'I would stay at home',
      ],
      correctAnswer: 'I will stay at home',
      explanation:
        'Câu điều kiện loại 1 (First Conditional) dùng thì hiện tại đơn trong mệnh đề if và thì tương lai đơn trong mệnh đề chính.',
      examples: [
        'If she studies hard, she will pass the exam.',
        'If you call me, I will pick you up.',
      ],
    },
    {
      id: 7003,
      question: 'Which sentence is a Second Conditional?',
      options: [
        'If I win the lottery, I will buy a new house.',
        'If I won the lottery, I would buy a new house.',
        'If I had won the lottery, I would have bought a new house.',
        'If I win the lottery, I buy a new house.',
      ],
      correctAnswer: 'If I won the lottery, I would buy a new house.',
      explanation:
        'Câu điều kiện loại 2 (Second Conditional) dùng thì quá khứ đơn trong mệnh đề if và would + động từ nguyên thể trong mệnh đề chính.',
      examples: [
        'If I had more time, I would learn another language.',
        'If she knew the answer, she would tell you.',
      ],
    },
    {
      id: 7004,
      question: 'Identify the Third Conditional sentence:',
      options: [
        'If it rains, the match will be canceled.',
        'If it rained, the match would be canceled.',
        'If it had rained, the match would have been canceled.',
        'If it rains, the match is canceled.',
      ],
      correctAnswer: 'If it had rained, the match would have been canceled.',
      explanation:
        'Câu điều kiện loại 3 (Third Conditional) dùng thì quá khứ hoàn thành trong mệnh đề if và would have + quá khứ phân từ trong mệnh đề chính.',
      examples: [
        'If I had studied harder, I would have passed the exam.',
        "If we had left earlier, we wouldn't have missed the train.",
      ],
    },
    {
      id: 7005,
      question: 'Which sentence is a Mixed Conditional?',
      options: [
        'If I study, I will pass the exam.',
        'If I studied, I would pass the exam.',
        'If I had studied, I would have passed the exam.',
        'If I had studied harder at school, I would have a better job now.',
      ],
      correctAnswer:
        'If I had studied harder at school, I would have a better job now.',
      explanation:
        'Câu điều kiện hỗn hợp kết hợp các loại câu điều kiện khác nhau, thường là điều kiện loại 3 trong mệnh đề if và loại 2 trong mệnh đề chính.',
      examples: [
        "If I hadn't missed the bus, I wouldn't be late now.",
        'If she had taken the job, she would be in Paris now.',
      ],
    },
    {
      id: 7006,
      question:
        'What is the correct form for this Second Conditional: "If I ___ (be) you, I ___ (not/worry)."',
      options: [
        `am / won't worry`,
        `was / wouldn't worry`,
        `were / wouldn't worry`,
        `had been / wouldn't have worried`,
      ],
      correctAnswer: `were / wouldn't worry`,
      explanation:
        'Trong câu điều kiện loại 2, sau "if I", "were" được ưa dùng hơn "was", đặc biệt trong văn phong trang trọng.',
      examples: [
        'If I were rich, I would travel the world.',
        'If he were here, he would know what to do.',
      ],
    },
    {
      id: 7007,
      question:
        'Which conditional structure should be used to express regret about the past?',
      options: [
        'Zero Conditional',
        'First Conditional',
        'Second Conditional',
        'Third Conditional',
      ],
      correctAnswer: 'Third Conditional',
      explanation:
        'Câu điều kiện loại 3 dùng để diễn tả tiếc nuối về việc đã xảy ra trong quá khứ.',
      examples: [
        'If I had known about the party, I would have gone.',
        "If she had told me, I wouldn't have made that mistake.",
      ],
    },
    {
      id: 7008,
      question:
        'Choose the correct option: "Unless you ___ now, you ___ late."',
      options: [
        'leave / will be',
        'will leave / are',
        'left / would be',
        'had left / would have been',
      ],
      correctAnswer: 'leave / will be',
      explanation:
        '"Unless" tương đương với "if not" và thường được dùng trong câu điều kiện loại 1.',
      examples: [
        'Unless it rains, we will go to the beach.',
        'Unless you study, you will fail the exam.',
      ],
    },
    {
      id: 7009,
      question: 'Which sentence correctly uses "even if" in a conditional?',
      options: [
        'Even if it rained, I would have gone.',
        'Even if it rains, I will go.',
        'Even if it rained, I had gone.',
        'Even if it will rain, I go.',
      ],
      correctAnswer: 'Even if it rains, I will go.',
      explanation:
        '"Even if" được dùng để diễn tả rằng một điều kiện sẽ không ngăn cản hành động xảy ra.',
      examples: [
        "Even if it's expensive, I'll buy it.",
        "Even if she apologizes, I won't forgive her.",
      ],
    },
    {
      id: 7010,
      question:
        'Which of these correctly uses an inverted conditional without "if"?',
      options: [
        'If I were rich, I would buy a yacht.',
        'Were I rich, I would buy a yacht.',
        'If I had been rich, I would have bought a yacht.',
        'I were rich, I would buy a yacht.',
      ],
      correctAnswer: 'Were I rich, I would buy a yacht.',
      explanation:
        'Câu điều kiện đảo ngược (inverted conditional) được tạo bằng cách đặt trợ động từ lên trước chủ ngữ thay vì dùng "if".',
      examples: [
        'Had I known earlier, I would have told you.',
        'Should you need help, please call me.',
      ],
    },
  ],
};

export default conditionalQuestions;
