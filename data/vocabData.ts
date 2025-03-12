// data/vocabData.ts
import { VocabWord } from '../types';

const vocabData: VocabWord[] = [
  {
    word: 'abandon',
    type: 'verb',
    pronunciation: '/əˈbændən/',
    meaning: 'từ bỏ, ruồng bỏ',
    examples: ['He abandoned his family.', 'They abandoned the plan.'],
  },
  {
    word: 'ability',
    type: 'noun',
    pronunciation: '/əˈbɪləti/',
    meaning: 'khả năng',
    examples: [
      'She has the ability to learn fast.',
      'His ability impressed me.',
    ],
  },
  {
    word: 'able',
    type: 'adj',
    pronunciation: '/ˈeɪbl/',
    meaning: 'có thể, có khả năng',
    examples: ["I'm able to swim.", 'He is able to do it.'],
  },
];

export default vocabData;
