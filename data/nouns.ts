const nounQuestions = {
  id: 201,
  title: 'Danh từ trong tiếng Anh (Nouns)',
  description:
    'Danh từ là từ dùng để chỉ người, vật, địa điểm, hoặc khái niệm. Chúng có thể là danh từ đếm được, không đếm được, số ít, số nhiều, hoặc danh từ ghép.',
  questions: [
    {
      id: 2001,
      question: 'What is the plural form of "man"?',
      options: ['mans', 'men', 'mens', 'manes'],
      correctAnswer: 'men',
      explanation:
        '"Man" là danh từ có dạng số nhiều bất quy tắc, chuyển thành "men".',
    },
    {
      id: 2002,
      question: 'Which of the following is an uncountable noun?',
      options: ['Water', 'Apple', 'Chair', 'Car'],
      correctAnswer: 'Water',
      explanation:
        '"Water" là danh từ không đếm được vì không thể dùng số lượng cụ thể.',
    },
    {
      id: 2003,
      question: 'Choose the correct possessive form: "The book of my sister".',
      options: [
        'The book of my sister',
        'My sister book',
        "My sister's book",
        'My sisters book',
      ],
      correctAnswer: "My sister's book",
      explanation:
        'Danh từ sở hữu của "sister" được viết bằng cách thêm \'-s\'.',
    },
    {
      id: 2004,
      question: 'Which of the following is a collective noun?',
      options: ['Dog', 'Team', 'Chair', 'Computer'],
      correctAnswer: 'Team',
      explanation:
        '"Team" là danh từ tập hợp chỉ một nhóm người làm việc cùng nhau.',
    },
    {
      id: 2005,
      question: 'What is the correct plural form of "toothbrush"?',
      options: ['Toothbrushes', 'Toothbrushs', 'Teethbrushes', 'Teethbrushs'],
      correctAnswer: 'Toothbrushes',
      explanation:
        'Danh từ ghép "toothbrush" tạo số nhiều bằng cách thêm \'-es\'.',
    },
    {
      id: 2006,
      question: 'Which sentence is correct?',
      options: [
        'The audience is enjoying the show.',
        'The audiences is enjoying the show.',
        'The audience are enjoying the show.',
        'The audiences enjoying the show.',
      ],
      correctAnswer: 'The audience is enjoying the show.',
      explanation: '"Audience" là danh từ tập hợp, thường được coi là số ít.',
    },
    {
      id: 2007,
      question: 'What is the correct plural form of "child"?',
      options: ['Childs', 'Childes', 'Children', 'Childrens'],
      correctAnswer: 'Children',
      explanation:
        '"Child" là danh từ có dạng số nhiều bất quy tắc là "children".',
    },
    {
      id: 2008,
      question: 'Choose the correct sentence.',
      options: [
        "The dogs's food is in the bowl.",
        "The dog's food is in the bowl.",
        "The dogs' food is in the bowl.",
        "The dog food's is in the bowl.",
      ],
      correctAnswer: "The dog's food is in the bowl.",
      explanation: 'Với danh từ số ít "dog", thêm \'-s\' để tạo dạng sở hữu.',
    },
    {
      id: 2009,
      question: 'Which of the following is a compound noun?',
      options: ['Table', 'Car', 'Toothbrush', 'Happy'],
      correctAnswer: 'Toothbrush',
      explanation:
        '"Toothbrush" là danh từ ghép được tạo từ "tooth" và "brush".',
    },
    {
      id: 2010,
      question: 'What is the correct plural form of "mother-in-law"?',
      options: [
        'Mothers-in-law',
        'Mother-in-laws',
        'Mothers-in-laws',
        "Mother-in-law's",
      ],
      correctAnswer: 'Mothers-in-law',
      explanation:
        'Trong danh từ ghép, chỉ từ chính "mother" biến đổi thành số nhiều.',
    },
    {
      id: 2011,
      question: 'Which of the following is a countable noun?',
      options: ['Water', 'Information', 'Table', 'Happiness'],
      correctAnswer: 'Table',
      explanation:
        "Danh từ đếm được có thể có dạng số ít và số nhiều. 'Table' là một danh từ đếm được.",
    },
    {
      id: 2012,
      question: 'Which noun is uncountable?',
      options: ['Apple', 'Milk', 'Book', 'Dog'],
      correctAnswer: 'Milk',
      explanation:
        "'Milk' là danh từ không đếm được, vì không thể nói 'one milk' mà phải dùng 'a glass of milk'.",
    },
    {
      id: 2013,
      question: "What is the plural form of 'child'?",
      options: ['Childs', 'Childes', 'Children', 'Childen'],
      correctAnswer: 'Children',
      explanation:
        "'Child' có dạng số nhiều đặc biệt là 'children', không thêm 's' thông thường.",
    },
    {
      id: 2014,
      question: 'Which sentence uses the correct possessive form?',
      options: ['The book of Tom', "Tom's book", 'Toms book', "The book's Tom"],
      correctAnswer: "Tom's book",
      explanation:
        "Hình thức sở hữu của danh từ số ít được tạo bằng cách thêm 's, như 'Tom's book'.",
    },
    {
      id: 2015,
      question: 'Which of the following is a compound noun?',
      options: ['Sunlight', 'Bright', 'Strong', 'Quick'],
      correctAnswer: 'Sunlight',
      explanation:
        "'Sunlight' là danh từ ghép được tạo thành từ 'sun' + 'light'.",
    },
    {
      id: 2016,
      question: 'Which noun is an abstract noun?',
      options: ['Happiness', 'Chair', 'Pencil', 'Car'],
      correctAnswer: 'Happiness',
      explanation:
        'Danh từ trừu tượng (abstract noun) chỉ cảm xúc, ý tưởng, không thể nhìn thấy hoặc chạm vào.',
    },
    {
      id: 2017,
      question: 'Which of the following is a collective noun?',
      options: ['Team', 'Chair', 'Table', 'Computer'],
      correctAnswer: 'Team',
      explanation:
        "Danh từ tập hợp (collective noun) chỉ một nhóm gồm nhiều cá thể, ví dụ 'team' chỉ một nhóm người.",
    },
    {
      id: 2018,
      question: "What is the plural of 'tooth'?",
      options: ['Tooths', 'Toothes', 'Teeth', 'Teeths'],
      correctAnswer: 'Teeth',
      explanation: "'Tooth' có dạng số nhiều đặc biệt là 'teeth'.",
    },
    {
      id: 2019,
      question: 'Which word is a proper noun?',
      options: ['City', 'Paris', 'Mountain', 'River'],
      correctAnswer: 'Paris',
      explanation:
        "Danh từ riêng (proper noun) là tên riêng của người, địa điểm, hoặc tổ chức, như 'Paris'.",
    },
    {
      id: 2020,
      question: 'Which noun is an example of a material noun?',
      options: ['Gold', 'Book', 'Car', 'Phone'],
      correctAnswer: 'Gold',
      explanation:
        "Danh từ vật chất (material noun) là danh từ chỉ vật liệu hoặc chất, như 'gold'.",
    },
    {
      id: 2021,
      question: 'Which of the following nouns is always singular?',
      options: ['News', 'Apples', 'Shoes', 'Cups'],
      correctAnswer: 'News',
      explanation: "'News' là danh từ không đếm được và luôn ở dạng số ít.",
    },
    {
      id: 2022,
      question: 'Which sentence uses a possessive noun correctly?',
      options: [
        'The books pages are torn.',
        "The book's pages are torn.",
        "The books' pages are torn.",
        'The book pages are torn.',
      ],
      correctAnswer: "The book's pages are torn.",
      explanation:
        "Danh từ số ít thể hiện sở hữu bằng cách thêm 's, như 'book's'.",
    },
    {
      id: 2023,
      question: 'Which of the following nouns is a countable noun?',
      options: ['Water', 'Furniture', 'Car', 'Music'],
      correctAnswer: 'Car',
      explanation:
        "'Car' là danh từ đếm được vì có thể nói 'one car', 'two cars'.",
    },
    {
      id: 2024,
      question: 'Which of the following nouns is plural?',
      options: ['Child', 'Children', 'Woman', 'Man'],
      correctAnswer: 'Children',
      explanation: "'Children' là dạng số nhiều của 'child'.",
    },
    {
      id: 2025,
      question: 'Which sentence contains a collective noun?',
      options: [
        'A school of fish swam past.',
        'I saw many fishes in the sea.',
        'The fish was very big.',
        'There were two fish in the tank.',
      ],
      correctAnswer: 'A school of fish swam past.',
      explanation: "'School of fish' là danh từ tập hợp chỉ nhóm cá.",
    },
    {
      id: 2026,
      question: 'Which noun is always uncountable?',
      options: ['Chair', 'Table', 'Money', 'Apple'],
      correctAnswer: 'Money',
      explanation: "'Money' là danh từ không đếm được, không có dạng số nhiều.",
    },
    {
      id: 2027,
      question: 'Which of the following nouns is NOT a proper noun?',
      options: ['Amazon', 'Teacher', 'Google', 'Japan'],
      correctAnswer: 'Teacher',
      explanation:
        "Danh từ 'teacher' là danh từ chung, không phải danh từ riêng.",
    },
    {
      id: 2028,
      question: "What is the plural form of 'mouse'?",
      options: ['Mouses', 'Mice', 'Mousees', 'Mousen'],
      correctAnswer: 'Mice',
      explanation: "'Mouse' có dạng số nhiều đặc biệt là 'mice'.",
    },
    {
      id: 2029,
      question: 'Which of the following is an example of a concrete noun?',
      options: ['Love', 'Justice', 'Table', 'Happiness'],
      correctAnswer: 'Table',
      explanation:
        'Danh từ cụ thể (concrete noun) là danh từ chỉ những thứ có thể nhìn thấy và chạm vào, như "table".',
      examples: ['The table is made of wood.', 'I put my laptop on the table.'],
    },
    {
      id: 2030,
      question: 'What is the plural form of "goose"?',
      options: ['Gooses', 'Geese', 'Goosies', 'Goos'],
      correctAnswer: 'Geese',
      explanation: '"Goose" có dạng số nhiều bất quy tắc là "geese".',
      examples: [
        'A flock of geese flew over the lake.',
        'We saw geese at the farm.',
      ],
    },
    {
      id: 2031,
      question: 'Which of the following nouns is a proper noun?',
      options: ['Teacher', 'London', 'Dog', 'Car'],
      correctAnswer: 'London',
      explanation:
        'Danh từ riêng (proper noun) là tên riêng của một người, địa điểm hoặc tổ chức, như "London".',
      examples: [
        'London is the capital of England.',
        'I will visit London next year.',
      ],
    },
    {
      id: 2032,
      question: 'Which noun is a material noun?',
      options: ['Iron', 'Table', 'City', 'Dog'],
      correctAnswer: 'Iron',
      explanation:
        'Danh từ vật chất (material noun) là danh từ chỉ nguyên liệu hoặc chất liệu, như "iron".',
      examples: ['The bridge is made of iron.', 'Iron is a strong metal.'],
    },
    {
      id: 2033,
      question: 'Which sentence uses a collective noun?',
      options: [
        'The book is on the table.',
        'A flock of birds flew overhead.',
        'I have three pens.',
        'The teacher is in the classroom.',
      ],
      correctAnswer: 'A flock of birds flew overhead.',
      explanation:
        'Danh từ tập hợp (collective noun) chỉ một nhóm người, động vật hoặc vật, như "flock" (bầy chim).',
      examples: [
        'A herd of cows is grazing in the field.',
        'The team is working on a new project.',
      ],
    },
    {
      id: 2034,
      question: 'Which noun is an abstract noun?',
      options: ['Kindness', 'Chair', 'Pencil', 'Car'],
      correctAnswer: 'Kindness',
      explanation:
        'Danh từ trừu tượng (abstract noun) chỉ những khái niệm, cảm xúc hoặc ý tưởng không thể nhìn thấy hoặc chạm vào.',
      examples: [
        'Kindness is important in life.',
        'His kindness touched my heart.',
      ],
    },
    {
      id: 2035,
      question: 'What is the correct plural form of "ox"?',
      options: ['Oxes', 'Oxen', 'Oxens', 'Oxs'],
      correctAnswer: 'Oxen',
      explanation: 'Danh từ "ox" có dạng số nhiều bất quy tắc là "oxen".',
      examples: [
        'The farmer owns two oxen.',
        'Oxen are used for plowing fields.',
      ],
    },
    {
      id: 2036,
      question: 'Which sentence uses a possessive noun correctly?',
      options: [
        'The cars wheels are broken.',
        "The car's wheels are broken.",
        "The cars' wheels are broken.",
        'The car wheel are broken.',
      ],
      correctAnswer: "The car's wheels are broken.",
      explanation:
        'Danh từ số ít thể hiện sở hữu bằng cách thêm "s, như "car\'s".',
      examples: ['The dog’s tail is wagging.', 'My brother’s house is big.'],
    },
  ],
};

export default nounQuestions;
