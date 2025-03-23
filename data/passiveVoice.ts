const passiveVoiceQuestions = {
  id: 1201,
  title: 'Câu bị động trong tiếng Anh (Passive Voice)',
  description:
    'Câu bị động được dùng khi muốn nhấn mạnh hành động hoặc đối tượng bị tác động, thay vì người hoặc vật thực hiện hành động. Cấu trúc là: be + past participle.',
  questions: [
    {
      id: 12001,
      question: 'Convert to passive voice: "They build houses."',
      options: [
        'Houses build they.',
        'Houses are built by them.',
        'Houses built by them.',
        'Houses were build by them.',
      ],
      correctAnswer: 'Houses are built by them.',
      explanation:
        'Câu chủ động ở thì hiện tại đơn chuyển thành bị động bằng cách dùng "are + past participle (built)".',
      examples: [
        'They speak English. → English is spoken by them.',
        'We clean the room. → The room is cleaned by us.',
      ],
    },
    {
      id: 12002,
      question: 'Which sentence is in the passive voice?',
      options: [
        'The boy broke the window.',
        'The window broke.',
        'The window was broken by the boy.',
        'The boy was breaking the window.',
      ],
      correctAnswer: 'The window was broken by the boy.',
      explanation:
        'Câu bị động có cấu trúc "be + past participle" và chủ ngữ là đối tượng bị tác động.',
      examples: [
        'The cake was eaten by the children.',
        'This book was written by Mark Twain.',
      ],
    },
    {
      id: 12003,
      question:
        'Change to passive voice: "The manager will announce the results tomorrow."',
      options: [
        'The results will announce by the manager tomorrow.',
        'The results will be announced by the manager tomorrow.',
        'The results are going to be announced by the manager tomorrow.',
        'The results will be announce by the manager tomorrow.',
      ],
      correctAnswer: 'The results will be announced by the manager tomorrow.',
      explanation:
        'Thì tương lai đơn ở bị động có dạng "will be + past participle".',
      examples: [
        'They will build a new bridge. → A new bridge will be built (by them).',
      ],
    },
    {
      id: 12004,
      question: 'Convert to passive voice: "She has written a novel."',
      options: [
        'A novel has written by her.',
        'A novel has been written by her.',
        'A novel had been written by her.',
        'A novel was written by her.',
      ],
      correctAnswer: 'A novel has been written by her.',
      explanation:
        'Thì hiện tại hoàn thành ở bị động có dạng "has/have been + past participle".',
      examples: [
        'They have solved the problem. → The problem has been solved (by them).',
      ],
    },
    {
      id: 12005,
      question:
        'Which tense is used in this passive sentence: "The house was being painted when I arrived."',
      options: [
        'Past Simple',
        'Past Continuous',
        'Past Perfect',
        'Past Perfect Continuous',
      ],
      correctAnswer: 'Past Continuous',
      explanation:
        'Câu này ở thì quá khứ tiếp diễn (Past Continuous) dạng bị động, có cấu trúc "was/were being + past participle".',
      examples: [
        'They were watching the game. → The game was being watched (by them).',
      ],
    },
    {
      id: 12006,
      question:
        'Change to passive voice: "People speak English all over the world."',
      options: [
        'English speaks all over the world.',
        'English is spoken all over the world.',
        'English was spoken all over the world.',
        'English has been spoken all over the world.',
      ],
      correctAnswer: 'English is spoken all over the world.',
      explanation:
        'Câu chủ động ở thì hiện tại đơn chuyển thành bị động bằng "is/are + past participle".',
      examples: [
        'They play soccer in many countries. → Soccer is played in many countries.',
      ],
    },
    {
      id: 12007,
      question:
        'Convert to passive voice: "Someone had stolen my wallet before I noticed."',
      options: [
        'My wallet had been stolen before I noticed.',
        'My wallet has been stolen before I noticed.',
        'My wallet was stolen before I noticed.',
        'My wallet had stolen before I noticed.',
      ],
      correctAnswer: 'My wallet had been stolen before I noticed.',
      explanation:
        'Thì quá khứ hoàn thành ở bị động có dạng "had been + past participle".',
      examples: [
        'They had finished the work. → The work had been finished (by them).',
      ],
    },
    {
      id: 12008,
      question: 'When is it appropriate to use the passive voice?',
      options: [
        'When the action is more important than the doer',
        'When we want to emphasize who did the action',
        'When we want to make sentences shorter',
        'When we are telling a story',
      ],
      correctAnswer: 'When the action is more important than the doer',
      explanation:
        'Câu bị động thường được dùng khi hành động quan trọng hơn người thực hiện, hoặc khi không biết/không cần đề cập người thực hiện.',
      examples: [
        "The painting was stolen last night. (We don't know who stole it or it's not important)",
      ],
    },
    {
      id: 12009,
      question: 'Which sentence cannot be changed to passive voice?',
      options: [
        'They built this house in 1990.',
        'She loves him very much.',
        'The book costs ten dollars.',
        'He wrote a letter to his friend.',
      ],
      correctAnswer: 'The book costs ten dollars.',
      explanation:
        'Một số động từ như "be", "seem", "cost", "weigh" là động từ thể hiện trạng thái, không thể dùng ở dạng bị động.',
      examples: ['This box contains six eggs. (Cannot be passive)'],
    },
    {
      id: 12010,
      question:
        'Change to passive voice: "You should submit the report by Friday."',
      options: [
        'The report should submit by Friday.',
        'The report should be submitted by Friday.',
        'The report should have been submitted by Friday.',
        'The report should been submitted by Friday.',
      ],
      correctAnswer: 'The report should be submitted by Friday.',
      explanation:
        'Với động từ khiếm khuyết, cấu trúc bị động là "modal + be + past participle".',
      examples: [
        'You must complete this task. → This task must be completed.',
        'We can solve this problem. → This problem can be solved.',
      ],
    },
  ],
};

export default passiveVoiceQuestions;
