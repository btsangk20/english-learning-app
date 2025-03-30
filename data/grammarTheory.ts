interface GrammarTheoryData {
  [key: string]: {
    title: string;
    description: string;
    rules: {
      pattern: string;
      explanation: string;
      examples: {
        sentence: string;
        translation: string;
      }[];
    }[];
  };
}

const grammarTheory: GrammarTheoryData = {
  nouns: {
    title: 'Danh từ (Nouns)',
    description:
      'Danh từ là từ dùng để chỉ người, vật, địa điểm, khái niệm hoặc ý tưởng.',
    rules: [
      {
        pattern: 'Danh từ đếm được (Countable Nouns)',
        explanation:
          'Là những danh từ có thể đếm được, có dạng số ít và số nhiều.',
        examples: [
          {
            sentence: 'I have two books.',
            translation: 'Tôi có hai quyển sách.',
          },
          {
            sentence: 'There are five students in the room.',
            translation: 'Có năm học sinh trong phòng.',
          },
        ],
      },
      {
        pattern: 'Danh từ không đếm được (Uncountable Nouns)',
        explanation: 'Là những danh từ không thể đếm được, chỉ có dạng số ít.',
        examples: [
          {
            sentence: 'I need some water.',
            translation: 'Tôi cần một ít nước.',
          },
          {
            sentence: 'She has a lot of knowledge.',
            translation: 'Cô ấy có nhiều kiến thức.',
          },
        ],
      },
    ],
  },
  tenses: {
    title: 'Thì trong tiếng Anh (Tenses)',
    description:
      'Thì trong tiếng Anh thể hiện thời gian và trạng thái của hành động.',
    rules: [
      {
        pattern: 'S + V(s/es) [Hiện tại đơn]',
        explanation:
          'Dùng để diễn tả thói quen, sự thật hiển nhiên hoặc hành động lặp đi lặp lại.',
        examples: [
          {
            sentence: 'He plays football every weekend.',
            translation: 'Anh ấy chơi bóng đá mỗi cuối tuần.',
          },
          {
            sentence: 'The sun rises in the east.',
            translation: 'Mặt trời mọc ở phía đông.',
          },
        ],
      },
      {
        pattern: 'S + am/is/are + V-ing [Hiện tại tiếp diễn]',
        explanation:
          'Dùng để diễn tả hành động đang diễn ra tại thời điểm nói.',
        examples: [
          {
            sentence: 'I am studying English now.',
            translation: 'Tôi đang học tiếng Anh.',
          },
          {
            sentence: 'They are playing in the garden.',
            translation: 'Họ đang chơi trong vườn.',
          },
        ],
      },
    ],
  },
  adjectives: {
    title: 'Tính từ (Adjectives)',
    description: 'Tính từ là từ dùng để mô tả hoặc bổ nghĩa cho danh từ.',
    rules: [
      {
        pattern: 'Adjective + Noun',
        explanation:
          'Tính từ đứng trước danh từ để mô tả đặc điểm của danh từ đó.',
        examples: [
          {
            sentence: 'She has a beautiful house.',
            translation: 'Cô ấy có một ngôi nhà đẹp.',
          },
          {
            sentence: 'I bought a new car.',
            translation: 'Tôi đã mua một chiếc xe mới.',
          },
        ],
      },
      {
        pattern: 'be + Adjective',
        explanation: 'Tính từ đứng sau động từ "be" để mô tả trạng thái.',
        examples: [
          {
            sentence: 'The weather is cold today.',
            translation: 'Thời tiết hôm nay lạnh.',
          },
          {
            sentence: 'These exercises are easy.',
            translation: 'Những bài tập này dễ.',
          },
        ],
      },
    ],
  },
};

export default grammarTheory;
