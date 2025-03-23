const reportedSpeechQuestions = {
  id: 1001,
  title: 'Câu tường thuật trong tiếng Anh (Reported Speech)',
  description:
    'Câu tường thuật là cách chuyển đổi lời nói trực tiếp sang lời nói gián tiếp. Khi chuyển đổi, thì, đại từ, từ chỉ thời gian và nơi chốn thường thay đổi.',
  questions: [
    {
      id: 10001,
      question: 'Change to reported speech: "I am tired," she said.',
      options: [
        'She said she is tired.',
        'She said she was tired.',
        'She said I am tired.',
        'She said I was tired.',
      ],
      correctAnswer: 'She said she was tired.',
      explanation:
        'Khi chuyển từ trực tiếp sang gián tiếp, thì hiện tại đơn "am" chuyển thành quá khứ đơn "was".',
      examples: ['"I am happy," he said. → He said (that) he was happy.'],
    },
    {
      id: 10002,
      question:
        'Which is the correct reported form of: "I will call you tomorrow," he promised.',
      options: [
        'He promised he will call me tomorrow.',
        'He promised he would call me tomorrow.',
        'He promised he would call me the next day.',
        'He promised he will call me the next day.',
      ],
      correctAnswer: 'He promised he would call me the next day.',
      explanation:
        'Trong câu tường thuật, "will" chuyển thành "would" và "tomorrow" thành "the next day".',
      examples: [
        '"I will visit you next week," she said. → She said she would visit me the following week.',
      ],
    },
    {
      id: 10003,
      question: 'Change to reported speech: "Where do you live?" he asked me.',
      options: [
        'He asked me where do I live.',
        'He asked me where I lived.',
        'He asked me where did I live.',
        'He asked me where I live.',
      ],
      correctAnswer: 'He asked me where I lived.',
      explanation:
        'Trong câu hỏi tường thuật, ta đảo ngược trật tự chủ ngữ-động từ và chuyển thì hiện tại thành quá khứ.',
      examples: [
        '"What are you doing?" she asked. → She asked what I was doing.',
      ],
    },
    {
      id: 10004,
      question:
        'Choose the correct reported speech for: "Don\'t touch that!" the teacher warned.',
      options: [
        "The teacher warned don't touch that.",
        "The teacher warned I don't touch that.",
        'The teacher warned me not to touch that.',
        "The teacher warned that don't touch that.",
      ],
      correctAnswer: 'The teacher warned me not to touch that.',
      explanation:
        'Câu mệnh lệnh phủ định chuyển thành "not to + động từ nguyên thể".',
      examples: [
        '"Don\'t be late," my mother told me. → My mother told me not to be late.',
      ],
    },
    {
      id: 10005,
      question:
        'Change to reported speech: "I have finished my homework," Tom said.',
      options: [
        'Tom said he has finished his homework.',
        'Tom said he had finished his homework.',
        'Tom said he finished his homework.',
        'Tom said he has finished my homework.',
      ],
      correctAnswer: 'Tom said he had finished his homework.',
      explanation:
        'Thì hiện tại hoàn thành "have finished" chuyển thành quá khứ hoàn thành "had finished" trong câu tường thuật.',
      examples: [
        '"I have been to Paris," she said. → She said she had been to Paris.',
      ],
    },
    {
      id: 10006,
      question:
        'Which is the correct reported form of: "I visited London last year," she told me.',
      options: [
        'She told me she visited London last year.',
        'She told me she had visited London last year.',
        'She told me she had visited London the previous year.',
        'She told me she visited London the previous year.',
      ],
      correctAnswer: 'She told me she had visited London the previous year.',
      explanation:
        'Thì quá khứ đơn "visited" chuyển thành quá khứ hoàn thành "had visited" và "last year" thành "the previous year".',
      examples: [
        '"I bought a new car last month," he said. → He said he had bought a new car the previous month.',
      ],
    },
    {
      id: 10007,
      question:
        'Change to reported speech: "Are you coming to the party?" Sam asked me.',
      options: [
        'Sam asked me if I am coming to the party.',
        'Sam asked me if I was coming to the party.',
        'Sam asked me am I coming to the party.',
        'Sam asked me was I coming to the party.',
      ],
      correctAnswer: 'Sam asked me if I was coming to the party.',
      explanation:
        'Câu hỏi Yes/No chuyển thành câu tường thuật bằng cách thêm "if" hoặc "whether" và chuyển đổi thì.',
      examples: [
        '"Do you like chocolate?" she asked. → She asked if I liked chocolate.',
      ],
    },
    {
      id: 10008,
      question:
        'Which time expression would change to "the previous day" in reported speech?',
      options: ['Today', 'Tomorrow', 'Next week', 'Yesterday'],
      correctAnswer: 'Yesterday',
      explanation:
        'Trong câu tường thuật, "yesterday" chuyển thành "the previous day" hoặc "the day before".',
      examples: [
        '"I saw him yesterday," she said. → She said she had seen him the previous day.',
      ],
    },
    {
      id: 10009,
      question:
        'Change to reported speech: "We can solve this problem," they said.',
      options: [
        'They said they can solve this problem.',
        'They said they can solve that problem.',
        'They said they could solve this problem.',
        'They said they could solve that problem.',
      ],
      correctAnswer: 'They said they could solve that problem.',
      explanation:
        'Trợ động từ "can" chuyển thành "could" và "this" chuyển thành "that" trong câu tường thuật.',
      examples: [
        '"We can help you," they offered. → They offered that they could help me.',
      ],
    },
    {
      id: 10010,
      question:
        'Which is the correct reported speech for: "I am going to buy a new car," he said.',
      options: [
        'He said he is going to buy a new car.',
        'He said he was going to buy a new car.',
        'He said I am going to buy a new car.',
        'He said I was going to buy a new car.',
      ],
      correctAnswer: 'He said he was going to buy a new car.',
      explanation:
        'Cấu trúc "be going to" chuyển từ "am/is/are going to" thành "was/were going to" trong câu tường thuật.',
      examples: [
        '"I am going to study medicine," she said. → She said she was going to study medicine.',
      ],
    },
  ],
};

export default reportedSpeechQuestions;
