import { GrammarTopic } from '../types/grammar';

const tenses: GrammarTopic = {
  id: 1,
  title: 'Các thì trong tiếng Anh',
  slug: 'tenses',
  description:
    'Các thì là nền tảng cơ bản nhất trong ngữ pháp tiếng Anh, giúp xác định thời gian diễn ra hành động hoặc sự việc.',
  exercises: [
    {
      id: 101,
      title: 'Thì hiện tại đơn (Present Simple)',
      description:
        'Thì hiện tại đơn được sử dụng để diễn tả một hành động thường xuyên hoặc một sự thật hiển nhiên.',
      questions: [
        {
          id: 1001,
          question: 'She _____ to work every day.',
          options: ['go', 'goes', 'going', 'is going'],
          correctAnswer: 'goes',
          explanation:
            'Với chủ ngữ ngôi thứ 3 số ít (she, he, it), động từ trong thì hiện tại đơn thêm -s/es.',
        },
        {
          id: 1002,
          question: 'We _____ breakfast at 7 AM.',
          options: ['have', 'has', 'having', 'are having'],
          correctAnswer: 'have',
          explanation:
            'Với chủ ngữ số nhiều (we, you, they), động từ trong thì hiện tại đơn giữ nguyên dạng gốc.',
        },
        {
          id: 1003,
          question: 'The Earth _____ around the Sun.',
          options: ['revolve', 'revolves', 'revolving', 'is revolving'],
          correctAnswer: 'revolves',
          explanation:
            'Thì hiện tại đơn được dùng để diễn tả sự thật hiển nhiên hoặc khoa học. Chủ ngữ "Earth" là ngôi thứ 3 số ít.',
        },
        {
          id: 1004,
          question: 'I _____ coffee every morning.',
          options: ['drink', 'drinks', 'drinking', 'am drinking'],
          correctAnswer: 'drink',
          explanation:
            'Với chủ ngữ ngôi thứ nhất số ít (I), động từ trong thì hiện tại đơn giữ nguyên dạng gốc.',
        },
        {
          id: 1005,
          question: 'The train _____ at 8:00 PM.',
          options: ['arrive', 'arrives', 'arriving', 'is arriving'],
          correctAnswer: 'arrives',
          explanation:
            'Thì hiện tại đơn được dùng cho lịch trình, thời gian biểu. Chủ ngữ "train" là ngôi thứ 3 số ít.',
        },
        {
          id: 1006,
          question: 'My parents _____ in London.',
          options: ['live', 'lives', 'living', 'are living'],
          correctAnswer: 'live',
          explanation:
            'Với chủ ngữ số nhiều (parents), động từ trong thì hiện tại đơn giữ nguyên dạng gốc.',
        },
        {
          id: 1007,
          question: 'The movie _____ at 7:30 PM.',
          options: ['start', 'starts', 'starting', 'is starting'],
          correctAnswer: 'starts',
          explanation:
            'Thì hiện tại đơn được dùng cho lịch trình. Chủ ngữ "movie" là ngôi thứ 3 số ít.',
        },
        {
          id: 1008,
          question: 'You _____ to school by bus.',
          options: ['go', 'goes', 'going', 'are going'],
          correctAnswer: 'go',
          explanation:
            'Với chủ ngữ "you", động từ trong thì hiện tại đơn giữ nguyên dạng gốc.',
        },
        {
          id: 1009,
          question: 'He _____ English and Spanish.',
          options: ['speak', 'speaks', 'speaking', 'is speaking'],
          correctAnswer: 'speaks',
          explanation:
            'Với chủ ngữ ngôi thứ 3 số ít (he), động từ trong thì hiện tại đơn thêm -s/es.',
        },
        {
          id: 1010,
          question: 'Water _____ at 100 degrees Celsius.',
          options: ['boil', 'boils', 'boiling', 'is boiling'],
          correctAnswer: 'boils',
          explanation:
            'Thì hiện tại đơn được dùng để diễn tả sự thật khoa học. Chủ ngữ "water" là ngôi thứ 3 số ít.',
        },
        {
          id: 1011,
          question: 'They _____ football every weekend.',
          options: ['play', 'plays', 'playing', 'are playing'],
          correctAnswer: 'play',
          explanation:
            'Với chủ ngữ số nhiều (they), động từ trong thì hiện tại đơn giữ nguyên dạng gốc.',
        },
        {
          id: 1012,
          question: 'The shop _____ at 9:00 AM.',
          options: ['open', 'opens', 'opening', 'is opening'],
          correctAnswer: 'opens',
          explanation:
            'Thì hiện tại đơn được dùng cho thói quen hoặc lịch trình. Chủ ngữ "shop" là ngôi thứ 3 số ít.',
        },
        {
          id: 1013,
          question: 'I never _____ to work on Sundays.',
          options: ['go', 'goes', 'going', 'am going'],
          correctAnswer: 'go',
          explanation:
            'Với chủ ngữ ngôi thứ nhất số ít (I), động từ trong thì hiện tại đơn giữ nguyên dạng gốc.',
        },
        {
          id: 1014,
          question: 'She always _____ her teeth before bed.',
          options: ['brush', 'brushes', 'brushing', 'is brushing'],
          correctAnswer: 'brushes',
          explanation:
            'Với chủ ngữ ngôi thứ 3 số ít (she), động từ trong thì hiện tại đơn thêm -s/es.',
        },
        {
          id: 1015,
          question: 'My brother _____ to the gym twice a week.',
          options: ['go', 'goes', 'going', 'is going'],
          correctAnswer: 'goes',
          explanation:
            'Với chủ ngữ ngôi thứ 3 số ít (brother), động từ trong thì hiện tại đơn thêm -s/es.',
        },
        {
          id: 1016,
          question: 'What time _____ the bank open?',
          options: ['do', 'does', 'is', 'are'],
          correctAnswer: 'does',
          explanation:
            'Với câu hỏi ở thì hiện tại đơn và chủ ngữ ngôi thứ 3 số ít (the bank), ta dùng trợ động từ "does".',
        },
        {
          id: 1017,
          question: 'Dogs _____ four legs.',
          options: ['have', 'has', 'having', 'are having'],
          correctAnswer: 'have',
          explanation:
            'Với chủ ngữ số nhiều (dogs), động từ trong thì hiện tại đơn giữ nguyên dạng gốc.',
        },
        {
          id: 1018,
          question: 'She _____ tennis very well.',
          options: ['play', 'plays', 'playing', 'is playing'],
          correctAnswer: 'plays',
          explanation:
            'Với chủ ngữ ngôi thứ 3 số ít (she), động từ trong thì hiện tại đơn thêm -s/es.',
        },
        {
          id: 1019,
          question: 'I _____ what you mean.',
          options: [
            'understand',
            'understands',
            'understanding',
            'am understanding',
          ],
          correctAnswer: 'understand',
          explanation:
            'Với chủ ngữ ngôi thứ nhất số ít (I), động từ trong thì hiện tại đơn giữ nguyên dạng gốc.',
        },
        {
          id: 1020,
          question: 'The concert _____ at 8 PM sharp.',
          options: ['begin', 'begins', 'beginning', 'is beginning'],
          correctAnswer: 'begins',
          explanation:
            'Thì hiện tại đơn được dùng cho lịch trình, thời gian biểu. Chủ ngữ "concert" là ngôi thứ 3 số ít.',
        },
        {
          id: 1021,
          question: 'He _____ (not) like spicy food.',
          options: ['do', 'does', 'don’t', 'doesn’t'],
          correctAnswer: 'doesn’t',
          explanation:
            "Với chủ ngữ ngôi thứ 3 số ít (he), ta dùng trợ động từ 'does' và phủ định là 'doesn’t'.",
        },
        {
          id: 1022,
          question: 'They _____ (not) play basketball on Sundays.',
          options: ['don’t', 'doesn’t', 'isn’t', 'aren’t'],
          correctAnswer: 'don’t',
          explanation:
            "Với chủ ngữ số nhiều (they), ta dùng trợ động từ 'do' và phủ định là 'don’t'.",
        },
        {
          id: 1023,
          question: '_____ she work in a hospital?',
          options: ['Do', 'Does', 'Is', 'Are'],
          correctAnswer: 'Does',
          explanation:
            "Câu hỏi Yes/No với chủ ngữ ngôi thứ 3 số ít (she), ta dùng trợ động từ 'does'.",
        },
        {
          id: 1024,
          question: '_____ they live near the park?',
          options: ['Do', 'Does', 'Is', 'Are'],
          correctAnswer: 'Do',
          explanation:
            "Với chủ ngữ số nhiều (they), ta dùng trợ động từ 'do' cho câu hỏi Yes/No.",
        },
        {
          id: 1025,
          question: 'Where _____ she work?',
          options: ['do', 'does', 'is', 'are'],
          correctAnswer: 'does',
          explanation:
            "Với câu hỏi bắt đầu bằng 'where' và chủ ngữ ngôi thứ 3 số ít (she), ta dùng 'does'.",
        },
        {
          id: 1026,
          question: 'What time _____ the train arrive?',
          options: ['do', 'does', 'is', 'are'],
          correctAnswer: 'does',
          explanation:
            "Thì hiện tại đơn dùng để nói về lịch trình, nên dùng 'does' với chủ ngữ số ít 'train'.",
        },
        {
          id: 1027,
          question: 'She _____ always gets up early.',
          options: ['never', 'usually', 'often', 'always'],
          correctAnswer: 'always',
          explanation:
            'Trạng từ tần suất (always, usually, often) đứng trước động từ chính.',
        },
        {
          id: 1028,
          question: 'I _____ go to the gym twice a week.',
          options: ['never', 'sometimes', 'always', 'rarely'],
          correctAnswer: 'sometimes',
          explanation:
            "Trạng từ tần suất 'sometimes' diễn tả hành động xảy ra không thường xuyên.",
        },
      ],
    },
    {
      id: 102,
      title: 'Thì hiện tại tiếp diễn (Present Continuous)',
      description:
        'Thì hiện tại tiếp diễn được sử dụng để diễn tả một hành động đang diễn ra tại thời điểm nói.',
      questions: [
        {
          id: 2001,
          question: 'Look! The baby _____ to walk.',
          options: ['try', 'tries', 'trying', 'is trying'],
          correctAnswer: 'is trying',
          explanation:
            'Thì hiện tại tiếp diễn: be (am/is/are) + V-ing. Chủ ngữ "baby" là ngôi thứ 3 số ít nên dùng "is".',
        },
        {
          id: 2002,
          question: 'They _____ a new house at the moment.',
          options: ['build', 'builds', 'building', 'are building'],
          correctAnswer: 'are building',
          explanation:
            'Thì hiện tại tiếp diễn: be (am/is/are) + V-ing. Chủ ngữ "they" số nhiều nên dùng "are".',
        },
        {
          id: 2003,
          question: 'I _____ for my exam right now.',
          options: ['study', 'studies', 'studying', 'am studying'],
          correctAnswer: 'am studying',
          explanation:
            'Thì hiện tại tiếp diễn: be (am/is/are) + V-ing. Chủ ngữ "I" ngôi thứ nhất số ít nên dùng "am".',
        },
        {
          id: 2004,
          question: 'Listen! Someone _____ at the door.',
          options: ['knock', 'knocks', 'knocking', 'is knocking'],
          correctAnswer: 'is knocking',
          explanation:
            'Dùng hiện tại tiếp diễn cho hành động đang diễn ra. Chủ ngữ "someone" là ngôi thứ 3 số ít nên dùng "is".',
        },
        {
          id: 2005,
          question: 'The children _____ in the garden.',
          options: ['play', 'plays', 'playing', 'are playing'],
          correctAnswer: 'are playing',
          explanation:
            'Thì hiện tại tiếp diễn: be (am/is/are) + V-ing. Chủ ngữ "children" số nhiều nên dùng "are".',
        },
        {
          id: 2006,
          question: 'He _____ breakfast right now.',
          options: ['have', 'has', 'having', 'is having'],
          correctAnswer: 'is having',
          explanation:
            'Thì hiện tại tiếp diễn: be (am/is/are) + V-ing. Chủ ngữ "he" là ngôi thứ 3 số ít nên dùng "is".',
        },
        {
          id: 2007,
          question: 'What _____ you _____ now?',
          options: ['are, doing', 'is, doing', 'are, do', 'do, do'],
          correctAnswer: 'are, doing',
          explanation:
            'Câu hỏi ở thì hiện tại tiếp diễn với chủ ngữ "you" có cấu trúc: be + chủ ngữ + V-ing.',
        },
        {
          id: 2008,
          question: 'She _____ not _____ TV at the moment.',
          options: [
            'is, watching',
            'is, watch',
            'does, watching',
            'does, watch',
          ],
          correctAnswer: 'is, watching',
          explanation:
            'Câu phủ định ở thì hiện tại tiếp diễn có cấu trúc: be + not + V-ing. Chủ ngữ "she" ngôi thứ 3 số ít nên dùng "is".',
        },
        {
          id: 2009,
          question: 'We _____ dinner with friends tonight.',
          options: ['have', 'has', 'having', 'are having'],
          correctAnswer: 'are having',
          explanation:
            'Hiện tại tiếp diễn có thể dùng cho kế hoạch cụ thể trong tương lai gần. Chủ ngữ "we" số nhiều nên dùng "are".',
        },
        {
          id: 2010,
          question: 'Why _____ you _____ so fast?',
          options: ['are, driving', 'do, drive', 'are, drive', 'is, driving'],
          correctAnswer: 'are, driving',
          explanation:
            'Câu hỏi ở thì hiện tại tiếp diễn với chủ ngữ "you" có cấu trúc: Từ để hỏi + be + chủ ngữ + V-ing.',
        },
        {
          id: 2011,
          question: 'John _____ in the university library this semester.',
          options: ['studies', 'study', 'studying', 'is studying'],
          correctAnswer: 'is studying',
          explanation:
            'Hiện tại tiếp diễn có thể dùng cho hành động tạm thời trong một khoảng thời gian. Chủ ngữ "John" ngôi thứ 3 số ít nên dùng "is".',
        },

        {
          id: 2012,
          question: 'I _____ (not) listening to music right now.',
          options: ['am not', 'is not', 'are not', 'do not'],
          correctAnswer: 'am not',
          explanation:
            "Thì hiện tại tiếp diễn: be (am/is/are) + not + V-ing. Với chủ ngữ 'I' ta dùng 'am not'.",
        },
        {
          id: 2013,
          question: 'They _____ (not) watching TV at the moment.',
          options: ['am not', 'is not', 'are not', 'do not'],
          correctAnswer: 'are not',
          explanation:
            "Với chủ ngữ số nhiều 'they', ta dùng 'are not' trong thì hiện tại tiếp diễn.",
        },
        {
          id: 2014,
          question: '_____ she studying for the exam now?',
          options: ['Do', 'Does', 'Is', 'Are'],
          correctAnswer: 'Is',
          explanation:
            "Câu hỏi Yes/No với thì hiện tại tiếp diễn có cấu trúc: be + chủ ngữ + V-ing. Với 'she', ta dùng 'is'.",
        },
        {
          id: 2015,
          question: '_____ they coming to the party tonight?',
          options: ['Do', 'Does', 'Is', 'Are'],
          correctAnswer: 'Are',
          explanation:
            "Câu hỏi Yes/No với thì hiện tại tiếp diễn, chủ ngữ số nhiều 'they' đi với 'are'.",
        },
        {
          id: 2016,
          question: 'What _____ you doing right now?',
          options: ['do', 'does', 'is', 'are'],
          correctAnswer: 'are',
          explanation:
            'Câu hỏi Wh- với thì hiện tại tiếp diễn có cấu trúc: Wh- + be + chủ ngữ + V-ing.',
        },
        {
          id: 2017,
          question: 'Where _____ she going?',
          options: ['is', 'are', 'does', 'do'],
          correctAnswer: 'is',
          explanation:
            "Với chủ ngữ 'she', động từ to be phù hợp trong thì hiện tại tiếp diễn là 'is'.",
        },
        {
          id: 2018,
          question:
            'This week, my father _____ in New York for a business trip.',
          options: ['stays', 'stay', 'staying', 'is staying'],
          correctAnswer: 'is staying',
          explanation:
            "Thì hiện tại tiếp diễn có thể dùng để diễn tả hành động tạm thời, chủ ngữ 'my father' đi với 'is'.",
        },
        {
          id: 2019,
          question: 'I _____ a new diet plan these days.',
          options: ['follow', 'follows', 'following', 'am following'],
          correctAnswer: 'am following',
          explanation:
            "Hành động đang diễn ra trong một khoảng thời gian tạm thời, chủ ngữ 'I' đi với 'am'.",
        },
        {
          id: 2020,
          question: 'We _____ to Paris next weekend.',
          options: ['go', 'goes', 'going', 'are going'],
          correctAnswer: 'are going',
          explanation:
            "Thì hiện tại tiếp diễn có thể dùng để diễn tả kế hoạch có sẵn trong tương lai gần. 'We' đi với 'are'.",
        },
        {
          id: 2021,
          question: 'She _____ her friends tomorrow evening.',
          options: ['meet', 'meets', 'meeting', 'is meeting'],
          correctAnswer: 'is meeting',
          explanation:
            "Thì hiện tại tiếp diễn được dùng cho kế hoạch chắc chắn trong tương lai. 'She' đi với 'is'.",
        },
      ],
    },
    {
      id: 103,
      title: 'Thì hiện tại hoàn thành (Present Perfect)',
      description:
        'Thì hiện tại hoàn thành được sử dụng để diễn tả một hành động đã xảy ra trong quá khứ nhưng kết quả vẫn còn liên quan đến hiện tại.',
      questions: [
        {
          id: 3001,
          question: 'I _____ to Paris three times.',
          options: ['go', 'went', 'gone', 'have gone'],
          correctAnswer: 'have gone',
          explanation:
            'Thì hiện tại hoàn thành: have/has + V3 (past participle). Chủ ngữ "I" ngôi thứ nhất nên dùng "have".',
        },
        {
          id: 3002,
          question: 'She _____ her homework yet.',
          options: [
            "doesn't finish",
            "didn't finish",
            "hasn't finished",
            "isn't finishing",
          ],
          correctAnswer: "hasn't finished",
          explanation:
            'Hiện tại hoàn thành phủ định: have/has + not + V3. Chủ ngữ "she" ngôi thứ 3 số ít nên dùng "hasn\'t".',
        },
        {
          id: 3003,
          question: '_____ you ever _____ to Japan?',
          options: ['Have, been', 'Has, been', 'Have, went', 'Has, went'],
          correctAnswer: 'Have, been',
          explanation:
            'Câu hỏi ở thì hiện tại hoàn thành: Have/Has + chủ ngữ + V3. Chủ ngữ "you" dùng với "have".',
        },
        {
          id: 3004,
          question: 'They _____ in London since 2010.',
          options: ['live', 'lived', 'have lived', 'are living'],
          correctAnswer: 'have lived',
          explanation:
            'Hiện tại hoàn thành với "since" (chỉ thời điểm bắt đầu): have/has + V3. Chủ ngữ "they" dùng "have".',
        },
        {
          id: 3005,
          question: 'He _____ that movie twice already.',
          options: ['sees', 'saw', 'has seen', 'is seeing'],
          correctAnswer: 'has seen',
          explanation:
            'Hiện tại hoàn thành với "already" (đã rồi): have/has + V3. Chủ ngữ "he" ngôi thứ 3 số ít nên dùng "has".',
        },
        {
          id: 3006,
          question: 'We _____ each other for ten years.',
          options: ['know', 'knew', 'have known', 'are knowing'],
          correctAnswer: 'have known',
          explanation:
            'Hiện tại hoàn thành với "for" (trong khoảng thời gian): have/has + V3. Chủ ngữ "we" dùng "have".',
        },
        {
          id: 3007,
          question: 'The teacher _____ not _____ our tests yet.',
          options: ['has, marked', 'have, marked', 'has, mark', 'have, mark'],
          correctAnswer: 'has, marked',
          explanation:
            'Hiện tại hoàn thành phủ định: have/has + not + V3. Chủ ngữ "teacher" ngôi thứ 3 số ít nên dùng "has".',
        },
        {
          id: 3008,
          question: 'I _____ never _____ such a beautiful sunset before.',
          options: ['have, seen', 'has, seen', 'have, saw', 'has, saw'],
          correctAnswer: 'have, seen',
          explanation:
            'Hiện tại hoàn thành với "never" (chưa từng): have/has + never + V3. Chủ ngữ "I" dùng "have".',
        },
        {
          id: 3009,
          question: '_____ she _____ her keys?',
          options: ['Has, found', 'Have, found', 'Has, find', 'Have, find'],
          correctAnswer: 'Has, found',
          explanation:
            'Câu hỏi ở thì hiện tại hoàn thành: Have/Has + chủ ngữ + V3. Chủ ngữ "she" ngôi thứ 3 số ít nên dùng "has".',
        },
        {
          id: 3010,
          question: 'They _____ just _____ from their vacation.',
          options: [
            'have, returned',
            'has, returned',
            'have, return',
            'has, return',
          ],
          correctAnswer: 'have, returned',
          explanation:
            'Hiện tại hoàn thành với "just" (vừa mới): have/has + just + V3. Chủ ngữ "they" dùng "have".',
        },
        {
          id: 3011,
          question: 'How long _____ you _____ in this company?',
          options: ['have, worked', 'has, worked', 'did, work', 'do, work'],
          correctAnswer: 'have, worked',
          explanation:
            'Câu hỏi với "how long" ở hiện tại hoàn thành: How long + have/has + chủ ngữ + V3. Chủ ngữ "you" dùng "have".',
        },
        {
          id: 3012,
          question: 'My parents _____ in this house for 20 years.',
          options: ['live', 'lived', 'have lived', 'are living'],
          correctAnswer: 'have lived',
          explanation:
            "Thì hiện tại hoàn thành với 'for' để chỉ khoảng thời gian. Chủ ngữ 'my parents' số nhiều nên dùng 'have'.",
        },
        {
          id: 3013,
          question: 'She _____ many new friends since she moved here.',
          options: ['makes', 'made', 'has made', 'is making'],
          correctAnswer: 'has made',
          explanation:
            "Hiện tại hoàn thành với 'since' (chỉ thời điểm bắt đầu). Chủ ngữ 'she' dùng 'has'.",
        },
        {
          id: 3014,
          question: 'I _____ a lot of interesting books recently.',
          options: ['read', 'reads', 'have read', 'am reading'],
          correctAnswer: 'have read',
          explanation:
            "Thì hiện tại hoàn thành với 'recently'. Chủ ngữ 'I' dùng 'have'.",
        },
        {
          id: 3015,
          question: 'They _____ (not) finished their project yet.',
          options: ["haven't", "hasn't", "didn't", "aren't"],
          correctAnswer: "haven't",
          explanation:
            "Thì hiện tại hoàn thành phủ định có cấu trúc: have/has + not + V3. Chủ ngữ 'they' dùng 'haven't'.",
        },
        {
          id: 3016,
          question: 'He _____ (not) called me for weeks.',
          options: ["hasn't", "haven't", "didn't", "doesn't"],
          correctAnswer: "hasn't",
          explanation:
            "Thì hiện tại hoàn thành với 'for' để chỉ khoảng thời gian. Chủ ngữ 'he' dùng 'hasn't'.",
        },
        {
          id: 3017,
          question: 'I _____ (not) seen that movie before.',
          options: ["haven't", "hasn't", "don't", "didn't"],
          correctAnswer: "haven't",
          explanation:
            "Thì hiện tại hoàn thành với 'before' để chỉ một trải nghiệm chưa từng có. Chủ ngữ 'I' dùng 'haven't'.",
        },
        {
          id: 3018,
          question: '_____ she ever traveled abroad?',
          options: ['Has', 'Have', 'Did', 'Does'],
          correctAnswer: 'Has',
          explanation:
            "Câu hỏi Yes/No với thì hiện tại hoàn thành có cấu trúc: Have/Has + chủ ngữ + V3. Chủ ngữ 'she' dùng 'has'.",
        },
        {
          id: 3019,
          question: '_____ you finished your homework?',
          options: ['Has', 'Have', 'Did', 'Do'],
          correctAnswer: 'Have',
          explanation:
            "Câu hỏi Yes/No với thì hiện tại hoàn thành. Chủ ngữ 'you' dùng 'have'.",
        },
        {
          id: 3020,
          question: '_____ they met the new manager yet?',
          options: ['Has', 'Have', 'Did', 'Do'],
          correctAnswer: 'Have',
          explanation:
            "Câu hỏi Yes/No với thì hiện tại hoàn thành có từ 'yet'. Chủ ngữ 'they' dùng 'have'.",
        },
        {
          id: 3021,
          question: 'Where _____ you been?',
          options: ['have', 'has', 'do', 'did'],
          correctAnswer: 'have',
          explanation:
            "Câu hỏi Wh- với thì hiện tại hoàn thành có cấu trúc: Wh- + have/has + chủ ngữ + V3. Chủ ngữ 'you' dùng 'have'.",
        },
        {
          id: 3022,
          question: 'How many times _____ she visited Italy?',
          options: ['have', 'has', 'do', 'did'],
          correctAnswer: 'has',
          explanation:
            "Câu hỏi Wh- với 'how many times' trong thì hiện tại hoàn thành. Chủ ngữ 'she' dùng 'has'.",
        },
        {
          id: 3023,
          question: 'Why _____ you not completed the report?',
          options: ['have', 'has', 'did', 'do'],
          correctAnswer: 'have',
          explanation:
            "Câu hỏi Wh- với 'why' trong thì hiện tại hoàn thành. Chủ ngữ 'you' dùng 'have'.",
        },
        {
          id: 3024,
          question: 'He _____ here since last year.',
          options: ['works', 'worked', 'has worked', 'is working'],
          correctAnswer: 'has worked',
          explanation:
            "Thì hiện tại hoàn thành với 'since' chỉ thời điểm bắt đầu. Chủ ngữ 'he' dùng 'has'.",
        },
        {
          id: 3025,
          question: 'They _____ in this city for five years.',
          options: ['live', 'lived', 'have lived', 'are living'],
          correctAnswer: 'have lived',
          explanation:
            "Thì hiện tại hoàn thành với 'for' chỉ khoảng thời gian. Chủ ngữ 'they' dùng 'have'.",
        },
        {
          id: 3026,
          question: 'I _____ in this company since 2020.',
          options: ['work', 'worked', 'have worked', 'am working'],
          correctAnswer: 'have worked',
          explanation:
            "Thì hiện tại hoàn thành với 'since' chỉ thời điểm bắt đầu. Chủ ngữ 'I' dùng 'have'.",
        },
        {
          id: 3027,
          question: 'Have you _____ seen a shooting star?',
          options: ['ever', 'never', 'yet', 'already'],
          correctAnswer: 'ever',
          explanation:
            "Thì hiện tại hoàn thành với 'ever' dùng trong câu hỏi để hỏi về kinh nghiệm sống.",
        },
        {
          id: 3028,
          question: 'She has _____ visited that museum.',
          options: ['ever', 'never', 'yet', 'already'],
          correctAnswer: 'never',
          explanation:
            "Thì hiện tại hoàn thành với 'never' để diễn tả một trải nghiệm chưa từng xảy ra.",
        },
        {
          id: 3029,
          question: 'I have _____ been to London before.',
          options: ['never', 'ever', 'already', 'yet'],
          correctAnswer: 'never',
          explanation:
            "Thì hiện tại hoàn thành với 'never' mang ý nghĩa 'chưa bao giờ'.",
        },
        {
          id: 3030,
          question: 'She has _____ finished her work.',
          options: ['just', 'already', 'ever', 'never'],
          correctAnswer: 'just',
          explanation:
            "Thì hiện tại hoàn thành với 'just' dùng để chỉ một hành động vừa mới xảy ra.",
        },
        {
          id: 3031,
          question: 'We have _____ eaten dinner.',
          options: ['just', 'never', 'ever', 'yet'],
          correctAnswer: 'just',
          explanation:
            "Thì hiện tại hoàn thành với 'just' để diễn tả hành động vừa xảy ra.",
        },
        {
          id: 3032,
          question: 'I have _____ arrived at the airport.',
          options: ['just', 'already', 'yet', 'ever'],
          correctAnswer: 'just',
          explanation:
            "Thì hiện tại hoàn thành với 'just' để diễn tả hành động vừa mới kết thúc.",
        },
        {
          id: 3033,
          question: 'He has _____ told me the news.',
          options: ['already', 'just', 'yet', 'never'],
          correctAnswer: 'already',
          explanation:
            "Thì hiện tại hoàn thành với 'already' để diễn tả hành động đã xảy ra sớm hơn mong đợi.",
        },
        {
          id: 3034,
          question: 'They have _____ finished the project ahead of schedule.',
          options: ['already', 'just', 'never', 'yet'],
          correctAnswer: 'already',
          explanation:
            "Thì hiện tại hoàn thành với 'already' để diễn tả một việc đã hoàn thành.",
        },
        {
          id: 3035,
          question: 'I have _____ visited that place twice.',
          options: ['already', 'just', 'ever', 'yet'],
          correctAnswer: 'already',
          explanation:
            "Thì hiện tại hoàn thành với 'already' để diễn tả một hành động đã thực hiện trước đó.",
        },
        {
          id: 3036,
          question: 'Have they finished their homework _____?',
          options: ['yet', 'just', 'already', 'never'],
          correctAnswer: 'yet',
          explanation:
            "Thì hiện tại hoàn thành với 'yet' thường dùng trong câu hỏi để hỏi về một hành động chưa xảy ra.",
        },
        {
          id: 3037,
          question: 'She hasn’t replied to my email _____.',
          options: ['yet', 'already', 'just', 'ever'],
          correctAnswer: 'yet',
          explanation:
            "Thì hiện tại hoàn thành phủ định với 'yet' để chỉ một hành động chưa xảy ra.",
        },
        {
          id: 3038,
          question: 'Has he called you _____?',
          options: ['yet', 'already', 'just', 'never'],
          correctAnswer: 'yet',
          explanation:
            "Thì hiện tại hoàn thành với 'yet' thường dùng trong câu hỏi về hành động chưa hoàn thành.",
        },
        {
          id: 3039,
          question: 'I _____ known him since childhood.',
          options: ['have', 'has', 'am', 'was'],
          correctAnswer: 'have',
          explanation:
            "Động từ 'know' là state verb, không dùng ở thì tiếp diễn. Cấu trúc: have/has + V3.",
        },
        {
          id: 3040,
          question: 'She _____ always loved chocolate.',
          options: ['has', 'have', 'is', 'was'],
          correctAnswer: 'has',
          explanation:
            "Động từ trạng thái (state verb) như 'love' luôn dùng với thì hiện tại hoàn thành để diễn tả một trạng thái kéo dài.",
        },
        {
          id: 3041,
          question: 'They _____ had this car for five years.',
          options: ['have', 'has', 'are', 'were'],
          correctAnswer: 'have',
          explanation:
            "Động từ 'have' (sở hữu) là state verb, dùng trong thì hiện tại hoàn thành để diễn tả sự sở hữu kéo dài.",
        },
        {
          id: 3042,
          question: 'How long _____ you lived here?',
          options: ['have', 'has', 'do', 'did'],
          correctAnswer: 'have',
          explanation:
            "Câu hỏi với 'how long' trong thì hiện tại hoàn thành: How long + have/has + chủ ngữ + V3.",
        },
        {
          id: 3043,
          question: 'How long _____ she worked at this company?',
          options: ['has', 'have', 'do', 'did'],
          correctAnswer: 'has',
          explanation:
            "Câu hỏi 'how long' trong thì hiện tại hoàn thành. Chủ ngữ 'she' dùng 'has'.",
        },
        {
          id: 3044,
          question: 'How long _____ they known each other?',
          options: ['have', 'has', 'do', 'did'],
          correctAnswer: 'have',
          explanation:
            "Câu hỏi với 'how long' trong thì hiện tại hoàn thành. Chủ ngữ 'they' dùng 'have'",
        },
        {
          id: 3045,
          question: 'This is the first time I _____ sushi.',
          options: ['have eaten', 'ate', 'eat', 'am eating'],
          correctAnswer: 'have eaten',
          explanation:
            "Thì hiện tại hoàn thành được dùng với 'This is the first time...' để diễn tả trải nghiệm lần đầu tiên.",
        },
        {
          id: 3046,
          question: 'This is the second time she _____ that mistake.',
          options: ['has made', 'made', 'makes', 'is making'],
          correctAnswer: 'has made',
          explanation:
            "Cấu trúc 'This is the second time + S + have/has + V3' dùng để diễn tả một trải nghiệm đã lặp lại.",
        },
        {
          id: 3047,
          question: 'This is the third time they _____ to that restaurant.',
          options: ['have gone', 'went', 'go', 'are going'],
          correctAnswer: 'have gone',
          explanation:
            "Thì hiện tại hoàn thành được dùng với 'This is the third time...' để diễn tả một sự kiện đã xảy ra nhiều lần.",
        },
      ],
    },
    {
      id: 104,
      title: 'Thì hiện tại hoàn thành tiếp diễn (Present Perfect Continuous)',
      description:
        'Thì hiện tại hoàn thành tiếp diễn được sử dụng để diễn tả một hành động bắt đầu từ quá khứ, kéo dài đến hiện tại và có thể tiếp tục trong tương lai.',
      questions: [
        {
          id: 4001,
          question: 'I _____ English for five years.',
          options: [
            'study',
            'am studying',
            'have studied',
            'have been studying',
          ],
          correctAnswer: 'have been studying',
          explanation:
            'Thì hiện tại hoàn thành tiếp diễn: have/has + been + V-ing. Chủ ngữ "I" ngôi thứ nhất nên dùng "have".',
        },
        {
          id: 4002,
          question: 'She _____ for three hours.',
          options: ['sleeps', 'is sleeping', 'has slept', 'has been sleeping'],
          correctAnswer: 'has been sleeping',
          explanation:
            'Hiện tại hoàn thành tiếp diễn: have/has + been + V-ing. Chủ ngữ "she" ngôi thứ 3 số ít nên dùng "has".',
        },
        {
          id: 4003,
          question: 'How long _____ you _____ for this company?',
          options: [
            'have, worked',
            'have, been working',
            'has, worked',
            'has, been working',
          ],
          correctAnswer: 'have, been working',
          explanation:
            'Câu hỏi với "how long" ở hiện tại hoàn thành tiếp diễn: How long + have/has + chủ ngữ + been + V-ing.',
        },
        {
          id: 4004,
          question: 'They _____ in the garden since morning.',
          options: ['work', 'are working', 'have worked', 'have been working'],
          correctAnswer: 'have been working',
          explanation:
            'Hiện tại hoàn thành tiếp diễn với "since" (từ khi): have/has + been + V-ing. Chủ ngữ "they" dùng "have".',
        },
        {
          id: 4005,
          question: 'It _____ all day.',
          options: ['rains', 'is raining', 'has rained', 'has been raining'],
          correctAnswer: 'has been raining',
          explanation:
            'Hiện tại hoàn thành tiếp diễn được dùng cho hành động kéo dài từ quá khứ đến hiện tại. Chủ ngữ "it" ngôi thứ 3 số ít nên dùng "has".',
        },
        {
          id: 4006,
          question: 'We _____ television for two hours.',
          options: [
            'watch',
            'are watching',
            'have watched',
            'have been watching',
          ],
          correctAnswer: 'have been watching',
          explanation:
            'Hiện tại hoàn thành tiếp diễn với "for" (trong khoảng thời gian): have/has + been + V-ing. Chủ ngữ "we" dùng "have".',
        },
        {
          id: 4007,
          question: 'He _____ a headache all day.',
          options: ['has', 'is having', 'has had', 'has been having'],
          correctAnswer: 'has been having',
          explanation:
            'Hiện tại hoàn thành tiếp diễn: have/has + been + V-ing. Chủ ngữ "he" ngôi thứ 3 số ít nên dùng "has".',
        },
        {
          id: 4008,
          question: '_____ you _____ for a long time?',
          options: [
            'Have, waited',
            'Have, been waiting',
            'Has, waited',
            'Has, been waiting',
          ],
          correctAnswer: 'Have, been waiting',
          explanation:
            'Câu hỏi ở thì hiện tại hoàn thành tiếp diễn: Have/Has + chủ ngữ + been + V-ing. Chủ ngữ "you" dùng "have".',
        },
        {
          id: 4009,
          question: 'His eyes are red because he _____ all night.',
          options: ['cries', 'is crying', 'has cried', 'has been crying'],
          correctAnswer: 'has been crying',
          explanation:
            'Hiện tại hoàn thành tiếp diễn thường dùng khi có kết quả hữu hình ở hiện tại. Chủ ngữ "he" ngôi thứ 3 số ít nên dùng "has".',
        },
        {
          id: 4010,
          question: "I'm tired because I _____ all day.",
          options: ['work', 'am working', 'have worked', 'have been working'],
          correctAnswer: 'have been working',
          explanation:
            'Hiện tại hoàn thành tiếp diễn thích hợp khi nói về nguyên nhân của trạng thái hiện tại. Chủ ngữ "I" dùng "have".',
        },
        {
          id: 4011,
          question: 'She _____ for the company for ten years.',
          options: ['works', 'is working', 'has worked', 'has been working'],
          correctAnswer: 'has been working',
          explanation:
            "Thì hiện tại hoàn thành tiếp diễn với 'for' để diễn tả một hành động đã kéo dài trong một khoảng thời gian.",
        },
        {
          id: 4012,
          question: 'They _____ in the same house for 20 years.',
          options: ['live', 'are living', 'have lived', 'have been living'],
          correctAnswer: 'have been living',
          explanation:
            "Hiện tại hoàn thành tiếp diễn với 'for' diễn tả một hành động tiếp tục trong một khoảng thời gian dài.",
        },
        {
          id: 4013,
          question:
            "I _____ this book for two hours, but I still haven't finished.",
          options: ['read', 'am reading', 'have read', 'have been reading'],
          correctAnswer: 'have been reading',
          explanation:
            "Dùng thì hiện tại hoàn thành tiếp diễn với 'for' để nhấn mạnh hành động đang diễn ra.",
        },
        {
          id: 4014,
          question: 'He _____ here since 2015.',
          options: ['works', 'is working', 'has worked', 'has been working'],
          correctAnswer: 'has been working',
          explanation:
            "Thì hiện tại hoàn thành tiếp diễn với 'since' dùng để chỉ một hành động bắt đầu từ một thời điểm cụ thể.",
        },
        {
          id: 4015,
          question: 'We _____ each other since high school.',
          options: ['know', 'are knowing', 'have known', 'have been knowing'],
          correctAnswer: 'have known',
          explanation:
            "Động từ 'know' là động từ trạng thái nên không dùng ở thì tiếp diễn. Thay vào đó, dùng 'have known' ở hiện tại hoàn thành.",
        },
        {
          id: 4016,
          question: 'She _____ the piano since she was six.',
          options: ['plays', 'is playing', 'has played', 'has been playing'],
          correctAnswer: 'has been playing',
          explanation:
            "Dùng thì hiện tại hoàn thành tiếp diễn với 'since' để nhấn mạnh hành động đã xảy ra từ một thời điểm cụ thể.",
        },

        {
          id: 4017,
          question: 'How long _____ you _____ English?',
          options: [
            'have, learned',
            'have, been learning',
            'has, learned',
            'has, been learning',
          ],
          correctAnswer: 'have, been learning',
          explanation:
            "Câu hỏi với 'how long' trong thì hiện tại hoàn thành tiếp diễn: How long + have/has + chủ ngữ + been + V-ing.",
        },
        {
          id: 4018,
          question: 'How long _____ she _____ at this job?',
          options: [
            'has, worked',
            'has, been working',
            'have, worked',
            'have, been working',
          ],
          correctAnswer: 'has, been working',
          explanation:
            "Dùng thì hiện tại hoàn thành tiếp diễn với 'how long' để hỏi về thời gian hành động đang diễn ra.",
        },
        {
          id: 4019,
          question: 'How long _____ they _____ in this neighborhood?',
          options: [
            'have, lived',
            'have, been living',
            'has, lived',
            'has, been living',
          ],
          correctAnswer: 'have, been living',
          explanation:
            "Thì hiện tại hoàn thành tiếp diễn với 'how long' dùng để hỏi về một hành động đang tiếp diễn trong thời gian dài.",
        },

        {
          id: 4020,
          question: 'She is tired because she _____ all day.',
          options: ['works', 'is working', 'has worked', 'has been working'],
          correctAnswer: 'has been working',
          explanation:
            'Dùng thì hiện tại hoàn thành tiếp diễn khi hành động kéo dài gây ảnh hưởng đến hiện tại.',
        },
        {
          id: 4021,
          question: 'His hands are dirty because he _____ in the garden.',
          options: ['works', 'is working', 'has worked', 'has been working'],
          correctAnswer: 'has been working',
          explanation:
            'Thì hiện tại hoàn thành tiếp diễn nhấn mạnh ảnh hưởng của hành động tới hiện tại (bàn tay bị bẩn).',
        },
        {
          id: 4022,
          question: 'The roads are wet because it _____ for hours.',
          options: ['rains', 'is raining', 'has rained', 'has been raining'],
          correctAnswer: 'has been raining',
          explanation:
            'Dùng thì hiện tại hoàn thành tiếp diễn khi mô tả hành động liên tục có ảnh hưởng đến hiện tại.',
        },

        {
          id: 4023,
          question: 'I _____ this car for five years.',
          options: ['have', 'am having', 'have had', 'have been having'],
          correctAnswer: 'have had',
          explanation:
            "Động từ 'have' (sở hữu) là động từ trạng thái, không dùng với thì tiếp diễn, nên dùng 'have had'.",
        },
        {
          id: 4024,
          question: 'She _____ a lot of problems recently.',
          options: ['has', 'is having', 'has had', 'has been having'],
          correctAnswer: 'has had',
          explanation:
            "Động từ trạng thái 'have' không dùng ở tiếp diễn, nên dùng 'has had'.",
        },
        {
          id: 4025,
          question: 'They _____ each other for a long time.',
          options: ['have known', 'are knowing', 'have been knowing', 'know'],
          correctAnswer: 'have known',
          explanation:
            "Động từ 'know' là động từ trạng thái nên không dùng ở thì tiếp diễn, phải dùng hiện tại hoàn thành.",
        },
        {
          id: 4026,
          question: 'She _____ to the gym lately.',
          options: [
            "hasn't been going",
            "hasn't gone",
            "doesn't go",
            "didn't go",
          ],
          correctAnswer: "hasn't been going",
          explanation:
            'Phủ định của thì hiện tại hoàn thành tiếp diễn: have/has + not + been + V-ing.',
        },
        {
          id: 4027,
          question: 'I _____ much water these days.',
          options: [
            "haven't been drinking",
            "haven't drunk",
            "don't drink",
            "didn't drink",
          ],
          correctAnswer: "haven't been drinking",
          explanation:
            'Dùng phủ định của hiện tại hoàn thành tiếp diễn để nói về thói quen gần đây.',
        },
        {
          id: 4028,
          question: 'They _____ their work properly.',
          options: [
            "haven't been doing",
            "haven't done",
            "don't do",
            "didn't do",
          ],
          correctAnswer: "haven't been doing",
          explanation:
            'Dùng phủ định của hiện tại hoàn thành tiếp diễn khi hành động chưa hoàn thành.',
        },
        {
          id: 4026,
          question: 'She _____ to the gym lately.',
          options: [
            "hasn't been going",
            "hasn't gone",
            "doesn't go",
            "didn't go",
          ],
          correctAnswer: "hasn't been going",
          explanation:
            'Phủ định của thì hiện tại hoàn thành tiếp diễn: have/has + not + been + V-ing.',
        },
        {
          id: 4027,
          question: 'I _____ much water these days.',
          options: [
            "haven't been drinking",
            "haven't drunk",
            "don't drink",
            "didn't drink",
          ],
          correctAnswer: "haven't been drinking",
          explanation:
            'Dùng phủ định của hiện tại hoàn thành tiếp diễn để nói về thói quen gần đây.',
        },
        {
          id: 4028,
          question: 'They _____ their work properly.',
          options: [
            "haven't been doing",
            "haven't done",
            "don't do",
            "didn't do",
          ],
          correctAnswer: "haven't been doing",
          explanation:
            'Dùng phủ định của hiện tại hoàn thành tiếp diễn khi hành động chưa hoàn thành.',
        },
        {
          id: 4029,
          question: 'I _____ this song since I first heard it.',
          options: ['have been liking', 'have liked', 'like', 'am liking'],
          correctAnswer: 'have liked',
          explanation:
            "Động từ 'like' là động từ trạng thái (stative verb), không dùng ở thì tiếp diễn.",
        },
        {
          id: 4030,
          question: 'She _____ in this house since she was a child.',
          options: ['has been owning', 'has owned', 'owns', 'is owning'],
          correctAnswer: 'has owned',
          explanation:
            "Động từ 'own' không dùng ở thì tiếp diễn, nên dùng thì hiện tại hoàn thành.",
        },
        {
          id: 4031,
          question: 'They _____ each other for many years.',
          options: ['have been knowing', 'have known', 'know', 'are knowing'],
          correctAnswer: 'have known',
          explanation:
            "Động từ 'know' là động từ trạng thái, không dùng ở thì tiếp diễn.",
        },
        {
          id: 4032,
          question: 'She _____ to call him all morning.',
          options: ['tries', 'is trying', 'has tried', 'has been trying'],
          correctAnswer: 'has been trying',
          explanation:
            'Dùng hiện tại hoàn thành tiếp diễn để diễn tả hành động lặp đi lặp lại nhiều lần.',
        },
        {
          id: 4033,
          question: 'He _____ emails to different companies for months.',
          options: ['sends', 'is sending', 'has sent', 'has been sending'],
          correctAnswer: 'has been sending',
          explanation:
            'Nhấn mạnh sự lặp đi lặp lại của hành động trong một khoảng thời gian dài.',
        },
        {
          id: 4034,
          question: 'They _____ about this issue for weeks.',
          options: [
            'discuss',
            'are discussing',
            'have discussed',
            'have been discussing',
          ],
          correctAnswer: 'have been discussing',
          explanation:
            'Nhấn mạnh hành động lặp đi lặp lại trong một khoảng thời gian.',
        },
        {
          id: 4035,
          question: 'The population of the city _____ rapidly.',
          options: [
            'increases',
            'is increasing',
            'has increased',
            'has been increasing',
          ],
          correctAnswer: 'has been increasing',
          explanation:
            'Dùng hiện tại hoàn thành tiếp diễn để mô tả sự thay đổi liên tục.',
        },
        {
          id: 4036,
          question: 'The price of oil _____ over the past few months.',
          options: ['rises', 'is rising', 'has risen', 'has been rising'],
          correctAnswer: 'has been rising',
          explanation:
            'Dùng hiện tại hoàn thành tiếp diễn khi nói về sự thay đổi liên tục của giá cả.',
        },
        {
          id: 4037,
          question: 'His English _____ a lot since he moved to London.',
          options: [
            'improves',
            'is improving',
            'has improved',
            'has been improving',
          ],
          correctAnswer: 'has been improving',
          explanation:
            'Dùng hiện tại hoàn thành tiếp diễn để nhấn mạnh sự thay đổi dần dần.',
        },
        {
          id: 4038,
          question: 'I _____ to finish this project since last week.',
          options: ['try', 'am trying', 'have tried', 'have been trying'],
          correctAnswer: 'have been trying',
          explanation:
            'Hành động bắt đầu trong quá khứ và vẫn đang tiếp tục nên dùng hiện tại hoàn thành tiếp diễn.',
        },
        {
          id: 4039,
          question: 'They _____ on the new building for months.',
          options: ['work', 'are working', 'have worked', 'have been working'],
          correctAnswer: 'have been working',
          explanation:
            'Hành động chưa hoàn thành và vẫn tiếp tục diễn ra nên dùng hiện tại hoàn thành tiếp diễn.',
        },
        {
          id: 4040,
          question: 'She _____ hard to improve her skills.',
          options: [
            'studies',
            'is studying',
            'has studied',
            'has been studying',
          ],
          correctAnswer: 'has been studying',
          explanation:
            'Nhấn mạnh quá trình đang diễn ra từ quá khứ đến hiện tại.',
        },
      ],
    },
    {
      id: 105,
      title: 'Thì quá khứ đơn (Past Simple)',
      description:
        'Thì quá khứ đơn được sử dụng để diễn tả một hành động đã xảy ra và kết thúc trong quá khứ.',
      questions: [
        {
          id: 5001,
          question: 'She _____ to the cinema last night.',
          options: ['go', 'goes', 'went', 'has gone'],
          correctAnswer: 'went',
          explanation:
            'Thì quá khứ đơn sử dụng động từ ở dạng quá khứ (V2). "Go" → "went".',
        },
        {
          id: 5002,
          question: 'I _____ breakfast at 8 AM this morning.',
          options: ['have', 'has', 'had', 'having'],
          correctAnswer: 'had',
          explanation:
            'Thì quá khứ đơn sử dụng động từ ở dạng quá khứ (V2). "Have" → "had".',
        },
        {
          id: 5003,
          question: 'They _____ their homework yesterday.',
          options: ['do', 'did', 'done', 'have done'],
          correctAnswer: 'did',
          explanation:
            'Thì quá khứ đơn sử dụng động từ ở dạng quá khứ (V2). "Do" → "did".',
        },
        {
          id: 5004,
          question: 'We _____ to the beach last summer.',
          options: ['go', 'went', 'gone', 'have gone'],
          correctAnswer: 'went',
          explanation:
            'Thì quá khứ đơn thường đi với các từ chỉ thời gian trong quá khứ như "last summer". "Go" → "went".',
        },
        {
          id: 5005,
          question: 'When _____ you _____ home?',
          options: [
            'do, arrive',
            'did, arrive',
            'have, arrived',
            'had, arrived',
          ],
          correctAnswer: 'did, arrive',
          explanation:
            'Câu hỏi ở thì quá khứ đơn: Did + chủ ngữ + V (nguyên thể).',
        },
        {
          id: 5006,
          question: 'She _____ not _____ the meeting last week.',
          options: [
            'do, attend',
            'did, attend',
            'does, attend',
            'has, attended',
          ],
          correctAnswer: 'did, attend',
          explanation:
            'Câu phủ định ở thì quá khứ đơn: Did + not + V (nguyên thể).',
        },
        {
          id: 5007,
          question: 'The movie _____ at 7 PM and _____ at 9 PM.',
          options: [
            'starts, ends',
            'started, ended',
            'has started, has ended',
            'had started, had ended',
          ],
          correctAnswer: 'started, ended',
          explanation:
            'Thì quá khứ đơn sử dụng động từ ở dạng quá khứ (V2) cho hành động đã xảy ra và kết thúc.',
        },
        {
          id: 5008,
          question: 'I _____ my keys in the office.',
          options: ['lose', 'loses', 'lost', 'have lost'],
          correctAnswer: 'lost',
          explanation:
            'Thì quá khứ đơn sử dụng động từ ở dạng quá khứ (V2). "Lose" → "lost".',
        },
        {
          id: 5009,
          question: '_____ it _____ yesterday?',
          options: ['Do, rain', 'Does, rain', 'Did, rain', 'Has, rained'],
          correctAnswer: 'Did, rain',
          explanation:
            'Câu hỏi ở thì quá khứ đơn: Did + chủ ngữ + V (nguyên thể).',
        },
        {
          id: 5010,
          question: 'I _____ to the gym every day last week.',
          options: ['go', 'went', 'gone', 'have gone'],
          correctAnswer: 'went',
          explanation:
            'Thì quá khứ đơn thường đi với các từ chỉ thời gian trong quá khứ như "last week". "Go" → "went".',
        },
        {
          id: 5011,
          question: 'She _____ her keys in the office.',
          options: ['lose', 'loses', 'lost', 'have lost'],
          correctAnswer: 'lost',
          explanation:
            'Thì quá khứ đơn sử dụng động từ ở dạng quá khứ (V2). "Lose" → "lost".',
        },
        {
          id: 5012,
          question: '_____ it _____ yesterday?',
          options: ['Do, rain', 'Does, rain', 'Did, rain', 'Has, rained'],
          correctAnswer: 'Did, rain',
          explanation:
            'Câu hỏi ở thì quá khứ đơn: Did + chủ ngữ + V (nguyên thể).',
        },
      ],
    },
    {
      id: 106,
      title: 'Thì quá khứ tiếp diễn (Past Continuous)',
      description:
        'Thì quá khứ tiếp diễn được sử dụng để diễn tả một hành động đang diễn ra tại một thời điểm cụ thể trong quá khứ.',
      questions: [
        {
          id: 6001,
          question: 'I _____ TV when the phone rang.',
          options: ['watched', 'was watching', 'watch', 'am watching'],
          correctAnswer: 'was watching',
          explanation:
            'Thì quá khứ tiếp diễn: was/were + V-ing. Chủ ngữ "I" dùng "was".',
        },
        {
          id: 6002,
          question: 'They _____ dinner at 8 PM last night.',
          options: ['ate', 'were eating', 'eat', 'are eating'],
          correctAnswer: 'were eating',
          explanation:
            'Thì quá khứ tiếp diễn: was/were + V-ing. Chủ ngữ "they" số nhiều nên dùng "were".',
        },
        {
          id: 6003,
          question: 'She _____ when I called her.',
          options: ['sleeps', 'slept', 'was sleeping', 'is sleeping'],
          correctAnswer: 'was sleeping',
          explanation:
            'Thì quá khứ tiếp diễn: was/were + V-ing. Chủ ngữ "she" ngôi thứ 3 số ít nên dùng "was".',
        },
        {
          id: 6004,
          question: 'What _____ you _____ at this time yesterday?',
          options: ['were, doing', 'was, doing', 'did, do', 'are, doing'],
          correctAnswer: 'were, doing',
          explanation:
            'Câu hỏi ở thì quá khứ tiếp diễn với chủ ngữ "you" có cấu trúc: Từ để hỏi + were + chủ ngữ + V-ing.',
        },
        {
          id: 6005,
          question: 'The children _____ in the garden while it _____ raining.',
          options: [
            'played, was',
            'were playing, was',
            'were playing, were',
            'played, were',
          ],
          correctAnswer: 'were playing, was',
          explanation:
            'Thì quá khứ tiếp diễn (were playing) đi với thì quá khứ đơn (was). Chủ ngữ "children" số nhiều dùng "were", "it" số ít dùng "was".',
        },
        {
          id: 6006,
          question:
            'I _____ not _____ attention when the teacher explained the lesson.',
          options: ['did, pay', 'was, paying', 'were, paying', 'did, paying'],
          correctAnswer: 'was, paying',
          explanation:
            'Câu phủ định ở thì quá khứ tiếp diễn: was/were + not + V-ing. Chủ ngữ "I" dùng "was".',
        },
        {
          id: 6007,
          question: '_____ it _____ when you left the house?',
          options: ['Was, raining', 'Were, raining', 'Did, rain', 'Does, rain'],
          correctAnswer: 'Was, raining',
          explanation:
            'Câu hỏi ở thì quá khứ tiếp diễn với chủ ngữ "it" có cấu trúc: Was/Were + chủ ngữ + V-ing. Chủ ngữ "it" dùng "was".',
        },
        {
          id: 6008,
          question: 'The sun _____ when we reached the beach.',
          options: ['shines', 'shined', 'was shining', 'is shining'],
          correctAnswer: 'was shining',
          explanation:
            'Thì quá khứ tiếp diễn: was/were + V-ing. Chủ ngữ "sun" ngôi thứ 3 số ít nên dùng "was".',
        },
        {
          id: 6009,
          question: 'We _____ for the bus when it started to rain.',
          options: ['wait', 'waited', 'were waiting', 'are waiting'],
          correctAnswer: 'were waiting',
          explanation:
            'Thì quá khứ tiếp diễn được dùng để diễn tả hành động đang diễn ra khi có một hành động khác xảy ra. Chủ ngữ "we" dùng "were".',
        },
        {
          id: 6010,
          question: 'He _____ a book while she _____ dinner.',
          options: [
            'read, cooked',
            'was reading, cooked',
            'was reading, was cooking',
            'read, was cooking',
          ],
          correctAnswer: 'was reading, was cooking',
          explanation:
            'Hai hành động xảy ra đồng thời trong quá khứ đều dùng thì quá khứ tiếp diễn: was/were + V-ing.',
        },
      ],
    },
    {
      id: 107,
      title: 'Thì quá khứ hoàn thành (Past Perfect)',
      description:
        'Thì quá khứ hoàn thành được sử dụng để diễn tả một hành động xảy ra và hoàn thành trước một hành động khác trong quá khứ.',
      questions: [
        {
          id: 7001,
          question: 'They _____ already _____ dinner when we arrived.',
          options: [
            'have, finished',
            'had, finished',
            'were, finishing',
            'did, finish',
          ],
          correctAnswer: 'had, finished',
          explanation:
            'Thì quá khứ hoàn thành: had + V3 (past participle). Hành động "finish dinner" xảy ra trước hành động "arrive".',
        },
        {
          id: 7002,
          question:
            'I _____ never _____ such a beautiful place before I visited Paris.',
          options: ['have, seen', 'had, seen', 'was, seeing', 'did, see'],
          correctAnswer: 'had, seen',
          explanation:
            'Thì quá khứ hoàn thành với "never": had + never + V3. Hành động "see" xảy ra (hoặc không xảy ra) trước hành động "visit".',
        },
        {
          id: 7003,
          question:
            'She _____ not _____ her homework before the class started.',
          options: [
            'did, finish',
            'had, finished',
            'has, finished',
            'was, finishing',
          ],
          correctAnswer: 'had, finished',
          explanation:
            'Câu phủ định ở thì quá khứ hoàn thành: had + not + V3. Đúng ra là "had not finished".',
        },
        {
          id: 7004,
          question: 'After she _____ all the documents, she went home.',
          options: ['read', 'reads', 'had read', 'was reading'],
          correctAnswer: 'had read',
          explanation:
            'Thì quá khứ hoàn thành được dùng với "after" để chỉ hành động xảy ra trước một hành động khác trong quá khứ.',
        },
        {
          id: 7005,
          question: '_____ you _____ the movie before you read the book?',
          options: [
            'Did, watch',
            'Had, watched',
            'Have, watched',
            'Were, watching',
          ],
          correctAnswer: 'Had, watched',
          explanation: 'Câu hỏi ở thì quá khứ hoàn thành: Had + chủ ngữ + V3.',
        },
        {
          id: 7006,
          question: 'By the time we reached the station, the train _____.',
          options: ['leaves', 'left', 'had left', 'was leaving'],
          correctAnswer: 'had left',
          explanation:
            'Thì quá khứ hoàn thành với "by the time" để chỉ hành động đã hoàn thành trước một mốc thời gian trong quá khứ.',
        },
        {
          id: 7007,
          question: 'The thief _____ by the time the police arrived.',
          options: ['escapes', 'escaped', 'had escaped', 'was escaping'],
          correctAnswer: 'had escaped',
          explanation:
            'Thì quá khứ hoàn thành: had + V3. Hành động "escape" xảy ra trước hành động "arrive".',
        },
        {
          id: 7008,
          question: 'He realized that he _____ his wallet at home.',
          options: ['forgets', 'forgot', 'had forgotten', 'was forgetting'],
          correctAnswer: 'had forgotten',
          explanation:
            'Thì quá khứ hoàn thành được dùng khi nhìn lại một hành động đã xảy ra trước một điểm thời gian trong quá khứ.',
        },
        {
          id: 7009,
          question: 'She was sad because she _____ the competition.',
          options: ['loses', 'lost', 'had lost', 'was losing'],
          correctAnswer: 'had lost',
          explanation:
            'Thì quá khứ hoàn thành được dùng để giải thích lý do của một tình huống trong quá khứ.',
        },
        {
          id: 7010,
          question: 'When I arrived, my friends _____ without me.',
          options: ['leave', 'left', 'had left', 'were leaving'],
          correctAnswer: 'had left',
          explanation:
            'Thì quá khứ hoàn thành: had + V3. Hành động "leave" xảy ra trước hành động "arrive".',
        },
      ],
    },
    {
      id: 108,
      title: 'Thì quá khứ hoàn thành tiếp diễn (Past Perfect Continuous)',
      description:
        'Thì quá khứ hoàn thành tiếp diễn được sử dụng để diễn tả một hành động đã bắt đầu trong quá khứ và tiếp tục cho đến một thời điểm nhất định cũng trong quá khứ.',
      questions: [
        {
          id: 8001,
          question: 'I was tired because I _____ for 5 hours.',
          options: ['worked', 'was working', 'had worked', 'had been working'],
          correctAnswer: 'had been working',
          explanation:
            'Thì quá khứ hoàn thành tiếp diễn: had + been + V-ing. Diễn tả hành động kéo dài và là nguyên nhân của một tình trạng trong quá khứ.',
        },
        {
          id: 8002,
          question: 'By the time I met her, she _____ English for 10 years.',
          options: [
            'studied',
            'was studying',
            'had studied',
            'had been studying',
          ],
          correctAnswer: 'had been studying',
          explanation:
            'Thì quá khứ hoàn thành tiếp diễn với "by the time": had + been + V-ing. Diễn tả hành động kéo dài cho đến một thời điểm trong quá khứ.',
        },
        {
          id: 8003,
          question: 'How long _____ you _____ before you found a job?',
          options: [
            'were, looking',
            'had, looked',
            'had, been looking',
            'did, look',
          ],
          correctAnswer: 'had, been looking',
          explanation:
            'Câu hỏi với "how long" ở thì quá khứ hoàn thành tiếp diễn: How long + had + chủ ngữ + been + V-ing.',
        },
        {
          id: 8004,
          question: 'They _____ for three hours when the bus finally arrived.',
          options: ['waited', 'were waiting', 'had waited', 'had been waiting'],
          correctAnswer: 'had been waiting',
          explanation:
            'Thì quá khứ hoàn thành tiếp diễn: had + been + V-ing. Diễn tả hành động kéo dài cho đến một thời điểm trong quá khứ.',
        },
        {
          id: 8005,
          question: 'She _____ not _____ there for long when I arrived.',
          options: [
            'had, stayed',
            'was, staying',
            'had, been staying',
            'did, stay',
          ],
          correctAnswer: 'had, been staying',
          explanation:
            'Câu phủ định ở thì quá khứ hoàn thành tiếp diễn: had + not + been + V-ing. Đúng ra là "had not been staying".',
        },
        {
          id: 8006,
          question: 'His clothes were wet because he _____ in the rain.',
          options: ['walked', 'was walking', 'had walked', 'had been walking'],
          correctAnswer: 'had been walking',
          explanation:
            'Thì quá khứ hoàn thành tiếp diễn thường dùng khi có kết quả hữu hình trong quá khứ.',
        },
        {
          id: 8007,
          question:
            'He _____ the project for weeks before he finally completed it.',
          options: [
            'worked on',
            'was working on',
            'had worked on',
            'had been working on',
          ],
          correctAnswer: 'had been working on',
          explanation:
            'Thì quá khứ hoàn thành tiếp diễn: had + been + V-ing. Diễn tả hành động kéo dài cho đến một thời điểm trong quá khứ.',
        },
        {
          id: 8008,
          question: 'The ground was wet. It _____ all night.',
          options: ['rained', 'was raining', 'had rained', 'had been raining'],
          correctAnswer: 'had been raining',
          explanation:
            'Thì quá khứ hoàn thành tiếp diễn thích hợp khi nói về nguyên nhân của trạng thái trong quá khứ.',
        },
        {
          id: 8009,
          question: '_____ he _____ at that company before he changed his job?',
          options: [
            'Was, working',
            'Did, work',
            'Had, worked',
            'Had, been working',
          ],
          correctAnswer: 'Had, been working',
          explanation:
            'Câu hỏi ở thì quá khứ hoàn thành tiếp diễn: Had + chủ ngữ + been + V-ing.',
        },
        {
          id: 8010,
          question:
            'After she _____ for two hours, she decided to take a break.',
          options: [
            'studied',
            'was studying',
            'had studied',
            'had been studying',
          ],
          correctAnswer: 'had been studying',
          explanation:
            'Thì quá khứ hoàn thành tiếp diễn: had + been + V-ing. Diễn tả hành động kéo dài cho đến một thời điểm trong quá khứ.',
        },
      ],
    },
    {
      id: 109,
      title: 'Thì tương lai đơn (Future Simple)',
      description:
        'Thì tương lai đơn được sử dụng để diễn tả một hành động sẽ xảy ra trong tương lai hoặc một dự đoán, quyết định tức thì.',
      questions: [
        {
          id: 9001,
          question: 'I _____ you tomorrow.',
          options: ['call', 'am calling', 'will call', 'would call'],
          correctAnswer: 'will call',
          explanation:
            'Thì tương lai đơn: will + V (nguyên thể). Dùng để diễn tả kế hoạch trong tương lai.',
        },
        {
          id: 9002,
          question: 'She _____ 30 next month.',
          options: ['is', 'is being', 'will be', 'would be'],
          correctAnswer: 'will be',
          explanation:
            'Thì tương lai đơn: will + V (nguyên thể). Dùng để diễn tả sự thật trong tương lai.',
        },
        {
          id: 9003,
          question: '_____ you _____ to the party next weekend?',
          options: ['Do, come', 'Are, coming', 'Will, come', 'Would, come'],
          correctAnswer: 'Will, come',
          explanation:
            'Câu hỏi ở thì tương lai đơn: Will + chủ ngữ + V (nguyên thể).',
        },
        {
          id: 9004,
          question: 'I think it _____ rain tomorrow.',
          options: ['is', 'is going to', 'will', 'would'],
          correctAnswer: 'will',
          explanation:
            'Thì tương lai đơn: will + V (nguyên thể). Dùng để diễn tả dự đoán trong tương lai.',
        },
        {
          id: 9005,
          question: 'The train _____ at 10:00 PM.',
          options: ['leaves', 'is leaving', 'will leave', 'would leave'],
          correctAnswer: 'will leave',
          explanation:
            'Thì tương lai đơn: will + V (nguyên thể). Dùng để diễn tả lịch trình, thời gian biểu trong tương lai.',
        },
        {
          id: 9006,
          question: 'They _____ not _____ with us to the beach.',
          options: ['are, going', 'do, go', 'will, go', 'would, go'],
          correctAnswer: 'will, go',
          explanation:
            'Câu phủ định ở thì tương lai đơn: will + not + V (nguyên thể). Đúng ra là "will not go".',
        },
        {
          id: 9007,
          question: "I'm sure she _____ the exam.",
          options: ['passes', 'is passing', 'will pass', 'would pass'],
          correctAnswer: 'will pass',
          explanation:
            'Thì tương lai đơn: will + V (nguyên thể). Dùng để diễn tả niềm tin về tương lai.',
        },
        {
          id: 9008,
          question: "I don't have any money. Don't worry, I _____ you some.",
          options: ['give', 'am giving', 'will give', 'would give'],
          correctAnswer: 'will give',
          explanation:
            'Thì tương lai đơn: will + V (nguyên thể). Dùng để diễn tả quyết định tức thì.',
        },
        {
          id: 9009,
          question: '_____ it _____ cold tomorrow?',
          options: ['Is, being', 'Does, get', 'Will, be', 'Would, be'],
          correctAnswer: 'Will, be',
          explanation:
            'Câu hỏi ở thì tương lai đơn: Will + chủ ngữ + V (nguyên thể).',
        },
        {
          id: 9010,
          question: 'We _____ dinner together after the meeting.',
          options: ['have', 'are having', 'will have', 'would have'],
          correctAnswer: 'will have',
          explanation:
            'Thì tương lai đơn: will + V (nguyên thể). Dùng để diễn tả kế hoạch trong tương lai.',
        },
      ],
    },
    {
      id: 110,
      title: 'Thì tương lai tiếp diễn (Future Continuous)',
      description:
        'Thì tương lai tiếp diễn được sử dụng để diễn tả một hành động sẽ đang diễn ra tại một thời điểm cụ thể trong tương lai.',
      questions: [
        {
          id: 10001,
          question: 'This time tomorrow, I _____ on the beach.',
          options: ['lie', 'am lying', 'will lie', 'will be lying'],
          correctAnswer: 'will be lying',
          explanation:
            'Thì tương lai tiếp diễn: will + be + V-ing. Dùng khi nói về hành động đang diễn ra ở một thời điểm cụ thể trong tương lai.',
        },
        {
          id: 10002,
          question: 'At 8 PM tomorrow, they _____ dinner.',
          options: ['have', 'are having', 'will have', 'will be having'],
          correctAnswer: 'will be having',
          explanation:
            'Thì tương lai tiếp diễn: will + be + V-ing. Dùng khi nói về hành động đang diễn ra ở một thời điểm cụ thể trong tương lai.',
        },
        {
          id: 10003,
          question: 'She _____ all day tomorrow.',
          options: ['works', 'is working', 'will work', 'will be working'],
          correctAnswer: 'will be working',
          explanation:
            'Thì tương lai tiếp diễn: will + be + V-ing. Dùng khi nói về hành động kéo dài trong một khoảng thời gian trong tương lai.',
        },
        {
          id: 10004,
          question: '_____ you _____ your new job this time next month?',
          options: ['Are, doing', 'Will, do', 'Will, be doing', 'Do, do'],
          correctAnswer: 'Will, be doing',
          explanation:
            'Câu hỏi ở thì tương lai tiếp diễn: Will + chủ ngữ + be + V-ing.',
        },
        {
          id: 10005,
          question:
            'I _____ not _____ to the meeting tonight because I have other plans.',
          options: ['am, going', 'will, go', 'will, be going', 'do, go'],
          correctAnswer: 'will, be going',
          explanation:
            'Câu phủ định ở thì tương lai tiếp diễn: will + not + be + V-ing. Đúng ra là "will not be going".',
        },
        {
          id: 10006,
          question: "Don't call me at 7 PM. I _____ dinner then.",
          options: ['cook', 'am cooking', 'will cook', 'will be cooking'],
          correctAnswer: 'will be cooking',
          explanation:
            'Thì tương lai tiếp diễn: will + be + V-ing. Dùng khi nói về hành động đang diễn ra ở một thời điểm cụ thể trong tương lai.',
        },
        {
          id: 10007,
          question: 'This time next week, we _____ on our vacation.',
          options: ['are', 'are being', 'will be', 'will be being'],
          correctAnswer: 'will be',
          explanation:
            'Thì tương lai tiếp diễn với động từ "be": will + be. "Will be being" thường không được sử dụng.',
        },
        {
          id: 10008,
          question:
            'By the end of the month, I _____ in this company for 5 years.',
          options: ['work', 'am working', 'will work', 'will be working'],
          correctAnswer: 'will be working',
          explanation:
            'Thì tương lai tiếp diễn: will + be + V-ing. Dùng khi nói về hành động kéo dài đến một thời điểm trong tương lai.',
        },
        {
          id: 10009,
          question: 'While you _____ the dishes, I _____ the laundry.',
          options: [
            'are washing, will do',
            'will wash, will do',
            'will be washing, will be doing',
            'wash, will do',
          ],
          correctAnswer: 'will be washing, will be doing',
          explanation:
            'Hai hành động xảy ra đồng thời trong tương lai đều dùng thì tương lai tiếp diễn: will + be + V-ing.',
        },
        {
          id: 10010,
          question: 'The baby _____ when we get home.',
          options: ['sleeps', 'is sleeping', 'will sleep', 'will be sleeping'],
          correctAnswer: 'will be sleeping',
          explanation:
            'Thì tương lai tiếp diễn: will + be + V-ing. Dùng khi nói về hành động đang diễn ra ở một thời điểm cụ thể trong tương lai.',
        },
      ],
    },
    {
      id: 111,
      title: 'Thì tương lai hoàn thành (Future Perfect)',
      description:
        'Thì tương lai hoàn thành được sử dụng để diễn tả một hành động sẽ hoàn thành trước một thời điểm cụ thể trong tương lai.',
      questions: [
        {
          id: 11001,
          question: 'By next month, I _____ in this city for five years.',
          options: ['live', 'am living', 'will live', 'will have lived'],
          correctAnswer: 'will have lived',
          explanation:
            'Thì tương lai hoàn thành: will + have + V3 (past participle). Dùng với "by + thời gian" để chỉ hành động sẽ hoàn thành trước một thời điểm trong tương lai.',
        },
        {
          id: 11002,
          question: 'She _____ her work by 5 PM tomorrow.',
          options: [
            'finishes',
            'will finish',
            'will have finished',
            'is finishing',
          ],
          correctAnswer: 'will have finished',
          explanation:
            'Thì tương lai hoàn thành: will + have + V3 (past participle). Dùng với "by + thời gian" để chỉ hành động sẽ hoàn thành trước một thời điểm trong tương lai.',
        },
        {
          id: 11003,
          question: 'By the time you arrive, I _____ dinner.',
          options: ['cook', 'will cook', 'will have cooked', 'am cooking'],
          correctAnswer: 'will have cooked',
          explanation:
            'Thì tương lai hoàn thành: will + have + V3 (past participle). Dùng với "by the time" để chỉ hành động sẽ hoàn thành trước một hành động khác trong tương lai.',
        },
        {
          id: 11004,
          question: '_____ you _____ your essay before the deadline?',
          options: [
            'Have, finished',
            'Will, finish',
            'Will, have finished',
            'Are, finishing',
          ],
          correctAnswer: 'Will, have finished',
          explanation:
            'Câu hỏi ở thì tương lai hoàn thành: Will + chủ ngữ + have + V3.',
        },
        {
          id: 11005,
          question:
            'They _____ not _____ the project by the end of this month.',
          options: [
            'have, completed',
            'will, complete',
            'will, have completed',
            'are, completing',
          ],
          correctAnswer: 'will, have completed',
          explanation:
            'Câu phủ định ở thì tương lai hoàn thành: will + not + have + V3. Đúng ra là "will not have completed".',
        },
        {
          id: 11006,
          question: 'The train _____ by the time we reach the station.',
          options: ['leaves', 'will leave', 'will have left', 'is leaving'],
          correctAnswer: 'will have left',
          explanation:
            'Thì tương lai hoàn thành: will + have + V3 (past participle). Dùng khi hành động sẽ hoàn thành trước một hành động khác trong tương lai.',
        },
        {
          id: 11007,
          question: 'By the end of this year, I _____ all my debts.',
          options: ['pay', 'will pay', 'will have paid', 'am paying'],
          correctAnswer: 'will have paid',
          explanation:
            'Thì tương lai hoàn thành: will + have + V3 (past participle). Dùng với "by the end of" để chỉ hành động sẽ hoàn thành trước một thời điểm trong tương lai.',
        },
        {
          id: 11008,
          question: 'By 2025, scientists _____ a cure for this disease.',
          options: ['find', 'will find', 'will have found', 'are finding'],
          correctAnswer: 'will have found',
          explanation:
            'Thì tương lai hoàn thành: will + have + V3 (past participle). Dùng với "by + thời gian" để chỉ hành động sẽ hoàn thành trước một thời điểm trong tương lai.',
        },
        {
          id: 11009,
          question:
            'How many books _____ you _____ by the end of this semester?',
          options: ['do, read', 'will, read', 'will, have read', 'have, read'],
          correctAnswer: 'will, have read',
          explanation:
            'Câu hỏi ở thì tương lai hoàn thành: will + chủ ngữ + have + V3.',
        },
        {
          id: 11010,
          question: 'I _____ this course by June.',
          options: [
            'complete',
            'will complete',
            'will have completed',
            'am completing',
          ],
          correctAnswer: 'will have completed',
          explanation:
            'Thì tương lai hoàn thành: will + have + V3 (past participle). Dùng với "by + thời gian" để chỉ hành động sẽ hoàn thành trước một thời điểm trong tương lai.',
        },
      ],
    },
    {
      id: 112,
      title: 'Thì tương lai hoàn thành tiếp diễn (Future Perfect Continuous)',
      description:
        'Thì tương lai hoàn thành tiếp diễn được sử dụng để diễn tả một hành động sẽ tiếp diễn trong một khoảng thời gian cho đến một thời điểm cụ thể trong tương lai.',
      questions: [
        {
          id: 12001,
          question: 'By next month, I _____ at this company for five years.',
          options: [
            'work',
            'will be working',
            'will have worked',
            'will have been working',
          ],
          correctAnswer: 'will have been working',
          explanation:
            'Thì tương lai hoàn thành tiếp diễn: will + have + been + V-ing. Dùng với "by + thời gian" để chỉ hành động kéo dài đến một thời điểm trong tương lai.',
        },
        {
          id: 12002,
          question: 'By the time I finish my degree, I _____ for 7 years.',
          options: [
            'study',
            'will study',
            'will have studied',
            'will have been studying',
          ],
          correctAnswer: 'will have been studying',
          explanation:
            'Thì tương lai hoàn thành tiếp diễn với "by the time": will + have + been + V-ing. Diễn tả hành động kéo dài cho đến một thời điểm trong tương lai.',
        },
        {
          id: 12003,
          question: 'Next week, we _____ our new house for exactly one year.',
          options: [
            'live in',
            'will live in',
            'will have lived in',
            'will have been living in',
          ],
          correctAnswer: 'will have been living in',
          explanation:
            'Thì tương lai hoàn thành tiếp diễn: will + have + been + V-ing. Nhấn mạnh khoảng thời gian của hành động đến một thời điểm trong tương lai.',
        },
        {
          id: 12004,
          question: 'By the end of the day, I _____ for 12 hours.',
          options: [
            'work',
            'will work',
            'will have worked',
            'will have been working',
          ],
          correctAnswer: 'will have been working',
          explanation:
            'Thì tương lai hoàn thành tiếp diễn: will + have + been + V-ing. Nhấn mạnh khoảng thời gian của hành động đến một thời điểm trong tương lai.',
        },
        {
          id: 12005,
          question:
            '_____ she _____ in that position for three years next April?',
          options: [
            'Will, work',
            'Will, be working',
            'Will, have worked',
            'Will, have been working',
          ],
          correctAnswer: 'Will, have been working',
          explanation:
            'Câu hỏi ở thì tương lai hoàn thành tiếp diễn: Will + chủ ngữ + have + been + V-ing.',
        },
        {
          id: 12006,
          question: 'They _____ not _____ together for 10 years next summer.',
          options: [
            'will, be living',
            'will, have lived',
            'will, have been living',
            'are, living',
          ],
          correctAnswer: 'will, have been living',
          explanation:
            'Câu phủ định ở thì tương lai hoàn thành tiếp diễn: will + not + have + been + V-ing. Đúng ra là "will not have been living".',
        },
        {
          id: 12007,
          question: 'By 2025, I _____ in this field for over a decade.',
          options: [
            'work',
            'will work',
            'will have worked',
            'will have been working',
          ],
          correctAnswer: 'will have been working',
          explanation:
            'Thì tương lai hoàn thành tiếp diễn: will + have + been + V-ing. Nhấn mạnh khoảng thời gian của hành động đến một thời điểm trong tương lai.',
        },
        {
          id: 12008,
          question: 'Next Saturday, they _____ for exactly one month.',
          options: [
            'date',
            'will date',
            'will have dated',
            'will have been dating',
          ],
          correctAnswer: 'will have been dating',
          explanation:
            'Thì tương lai hoàn thành tiếp diễn: will + have + been + V-ing. Nhấn mạnh khoảng thời gian của hành động đến một thời điểm trong tương lai.',
        },
        {
          id: 12009,
          question: 'How long _____ you _____ English by the end of this year?',
          options: [
            'will, learn',
            'will, have learned',
            'will, have been learning',
            'have, been learning',
          ],
          correctAnswer: 'will, have been learning',
          explanation:
            'Câu hỏi với "how long" ở thì tương lai hoàn thành tiếp diễn: How long + will + chủ ngữ + have + been + V-ing.',
        },
        {
          id: 12010,
          question:
            'By the time I retire, I _____ at this company for over 30 years.',
          options: [
            'work',
            'will work',
            'will have worked',
            'will have been working',
          ],
          correctAnswer: 'will have been working',
          explanation:
            'Thì tương lai hoàn thành tiếp diễn: will + have + been + V-ing. Nhấn mạnh khoảng thời gian của hành động đến một thời điểm trong tương lai.',
        },
      ],
    },
    {
      id: 113,
      title: 'Thì tương lai gần (Going to Future)',
      description:
        'Thì tương lai gần được sử dụng để diễn tả kế hoạch hoặc dự định trong tương lai, hoặc một dự đoán dựa trên bằng chứng hiện tại.',
      questions: [
        {
          id: 13001,
          question: 'I _____ a doctor when I grow up.',
          options: ['will be', 'am going to be', 'am being', 'would be'],
          correctAnswer: 'am going to be',
          explanation:
            'Thì tương lai gần: be (am/is/are) + going to + V (nguyên thể). Dùng để diễn tả kế hoạch hoặc dự định trong tương lai.',
        },
        {
          id: 13002,
          question: 'Look at those dark clouds. It _____ rain.',
          options: ['will', 'is going to', 'would', 'must'],
          correctAnswer: 'is going to',
          explanation:
            'Thì tương lai gần: be (am/is/are) + going to + V (nguyên thể). Dùng để diễn tả dự đoán dựa trên bằng chứng hiện tại.',
        },
        {
          id: 13003,
          question: 'They _____ move to a new house next month.',
          options: ['will', 'are going to', 'would', 'must'],
          correctAnswer: 'are going to',
          explanation:
            'Thì tương lai gần: be (am/is/are) + going to + V (nguyên thể). Dùng để diễn tả kế hoạch đã được quyết định trước.',
        },
        {
          id: 13004,
          question: '_____ you _____ the party tomorrow?',
          options: [
            'Will, attend',
            'Are, going to attend',
            'Do, attend',
            'Are, attending',
          ],
          correctAnswer: 'Are, going to attend',
          explanation:
            'Câu hỏi ở thì tương lai gần: be (am/is/are) + chủ ngữ + going to + V (nguyên thể).',
        },
        {
          id: 13005,
          question: 'She _____ not _____ to the meeting tonight.',
          options: [
            'will, come',
            'is, going to come',
            'does, come',
            'is, coming',
          ],
          correctAnswer: 'is, going to come',
          explanation:
            'Câu phủ định ở thì tương lai gần: be (am/is/are) + not + going to + V (nguyên thể). Đúng ra là "is not going to come".',
        },
        {
          id: 13006,
          question: 'Be careful! That vase _____ fall.',
          options: ['will', 'is going to', 'would', 'must'],
          correctAnswer: 'is going to',
          explanation:
            'Thì tương lai gần: be (am/is/are) + going to + V (nguyên thể). Dùng để diễn tả dự đoán dựa trên bằng chứng hiện tại.',
        },
        {
          id: 13007,
          question: "I've bought some paint. I _____ my bedroom.",
          options: ['will paint', 'am going to paint', 'paint', 'would paint'],
          correctAnswer: 'am going to paint',
          explanation:
            'Thì tương lai gần: be (am/is/are) + going to + V (nguyên thể). Dùng để diễn tả kế hoạch đã được quyết định trước.',
        },
        {
          id: 13008,
          question: 'What _____ you _____ after graduation?',
          options: ['will, do', 'are, going to do', 'do, do', 'are, doing'],
          correctAnswer: 'are, going to do',
          explanation:
            'Câu hỏi ở thì tương lai gần: be (am/is/are) + chủ ngữ + going to + V (nguyên thể).',
        },
        {
          id: 13009,
          question: 'We _____ lunch together next week.',
          options: ['have', 'will have', 'are going to have', 'would have'],
          correctAnswer: 'are going to have',
          explanation:
            'Thì tương lai gần: be (am/is/are) + going to + V (nguyên thể). Dùng để diễn tả kế hoạch đã được quyết định trước.',
        },
        {
          id: 13010,
          question: 'The sky is very dark. There _____ a storm.',
          options: ['will be', 'is going to be', 'would be', 'must be'],
          correctAnswer: 'is going to be',
          explanation:
            'Thì tương lai gần: be (am/is/are) + going to + V (nguyên thể). Dùng để diễn tả dự đoán dựa trên bằng chứng hiện tại.',
        },
      ],
    },
    {
      id: 114,
      title: 'Các cấu trúc thì tương lai khác',
      description:
        'Ngoài "will" và "going to", còn có các cách khác để diễn tả tương lai như thì hiện tại đơn, hiện tại tiếp diễn, hoặc cấu trúc "be about to".',
      questions: [
        {
          id: 14001,
          question: 'The train _____ at 5 PM tomorrow.',
          options: ['leaves', 'is leaving', 'will leave', 'is about to leave'],
          correctAnswer: 'leaves',
          explanation:
            'Thì hiện tại đơn có thể được dùng để diễn tả tương lai với lịch trình, thời gian biểu cố định.',
        },
        {
          id: 14002,
          question: 'We _____ to Spain for our holiday next month.',
          options: ['go', 'are going', 'will go', 'are about to go'],
          correctAnswer: 'are going',
          explanation:
            'Thì hiện tại tiếp diễn có thể được dùng để diễn tả kế hoạch đã sắp xếp trong tương lai.',
        },
        {
          id: 14003,
          question: 'Be quiet! The movie _____.',
          options: ['starts', 'is starting', 'will start', 'is about to start'],
          correctAnswer: 'is about to start',
          explanation:
            'Cấu trúc "be about to + V" dùng để diễn tả một hành động sắp xảy ra ngay lập tức.',
        },
        {
          id: 14004,
          question: 'What time _____ your flight _____ tomorrow?',
          options: [
            'does, leave',
            'is, leaving',
            'will, leave',
            'is, about to leave',
          ],
          correctAnswer: 'does, leave',
          explanation:
            'Thì hiện tại đơn có thể được dùng để diễn tả tương lai với lịch trình, thời gian biểu cố định.',
        },
        {
          id: 14005,
          question: "Don't call me at 8 PM. I _____ my favorite TV show then.",
          options: ['watch', 'am watching', 'will watch', 'will be watching'],
          correctAnswer: 'am watching',
          explanation:
            'Thì hiện tại tiếp diễn có thể được dùng để diễn tả kế hoạch đã sắp xếp trong tương lai.',
        },
        {
          id: 14006,
          question: 'Look! The bus _____. Hurry up!',
          options: ['comes', 'is coming', 'will come', 'is about to come'],
          correctAnswer: 'is about to come',
          explanation:
            'Cấu trúc "be about to + V" dùng để diễn tả một hành động sắp xảy ra ngay lập tức.',
        },
        {
          id: 14007,
          question: 'The concert _____ at 7:30 PM this evening.',
          options: ['starts', 'is starting', 'will start', 'is about to start'],
          correctAnswer: 'starts',
          explanation:
            'Thì hiện tại đơn có thể được dùng để diễn tả tương lai với lịch trình, thời gian biểu cố định.',
        },
        {
          id: 14008,
          question: 'We _____ dinner with David and Sarah on Friday.',
          options: ['have', 'will have', 'are going to have', 'would have'],
          correctAnswer: 'are going to have',
          explanation:
            'Thì hiện tại tiếp diễn có thể được dùng để diễn tả kế hoạch đã sắp xếp trong tương lai gần.',
        },
        {
          id: 14009,
          question:
            "She _____ her job. She's already written her resignation letter.",
          options: ['leaves', 'is leaving', 'will leave', 'is about to leave'],
          correctAnswer: 'is about to leave',
          explanation:
            'Cấu trúc "be about to + V" dùng để diễn tả một hành động sắp xảy ra ngay lập tức.',
        },
        {
          id: 14010,
          question: 'The semester _____ next Monday.',
          options: [
            'begins',
            'is beginning',
            'will begin',
            'is about to begin',
          ],
          correctAnswer: 'begins',
          explanation:
            'Thì hiện tại đơn có thể được dùng để diễn tả tương lai với lịch trình, thời gian biểu cố định.',
        },
      ],
    },
    {
      id: 115,
      title: 'Thì điều kiện (Conditional Tenses)',
      description:
        'Thì điều kiện được sử dụng để diễn tả một hành động hoặc tình huống có điều kiện, với kết quả phụ thuộc vào điều kiện được đưa ra.',
      questions: [
        {
          id: 15001,
          question: 'If it rains tomorrow, I _____ at home.',
          options: ['stay', 'stays', 'will stay', 'would stay'],
          correctAnswer: 'will stay',
          explanation:
            'Câu điều kiện loại 1 (có thật ở hiện tại/tương lai): If + hiện tại đơn, will + V (nguyên thể).',
        },
        {
          id: 15002,
          question: 'If I _____ rich, I would buy a big house.',
          options: ['am', 'was', 'were', 'will be'],
          correctAnswer: 'were',
          explanation:
            'Câu điều kiện loại 2 (không có thật ở hiện tại): If + quá khứ đơn (were), would + V (nguyên thể).',
        },
        {
          id: 15003,
          question: 'If he had studied harder, he _____ the exam.',
          options: ['passes', 'passed', 'will pass', 'would have passed'],
          correctAnswer: 'would have passed',
          explanation:
            'Câu điều kiện loại 3 (không có thật ở quá khứ): If + quá khứ hoàn thành, would have + V3.',
        },
        {
          id: 15004,
          question:
            "If you _____ more careful, you wouldn't make so many mistakes.",
          options: ['are', 'was', 'were', 'will be'],
          correctAnswer: 'were',
          explanation:
            'Câu điều kiện loại 2 (không có thật ở hiện tại): If + quá khứ đơn (were), would + V (nguyên thể).',
        },
        {
          id: 15005,
          question: "If I _____ you, I wouldn't do that.",
          options: ['am', 'was', 'were', 'will be'],
          correctAnswer: 'were',
          explanation:
            'Câu điều kiện loại 2 (không có thật ở hiện tại): If + quá khứ đơn (were), would + V (nguyên thể).',
        },
        {
          id: 15006,
          question: 'She _____ the job if she had more experience.',
          options: ['gets', 'got', 'will get', 'would get'],
          correctAnswer: 'would get',
          explanation:
            'Câu điều kiện loại 2 (không có thật ở hiện tại): If + quá khứ đơn, would + V (nguyên thể).',
        },
        {
          id: 15007,
          question: "If you _____ earlier, you wouldn't have missed the train.",
          options: ['leave', 'left', 'will leave', 'had left'],
          correctAnswer: 'had left',
          explanation:
            'Câu điều kiện loại 3 (không có thật ở quá khứ): If + quá khứ hoàn thành, would have + V3.',
        },
        {
          id: 15008,
          question: 'If she _____ me, I will tell her the news.',
          options: ['calls', 'called', 'will call', 'would call'],
          correctAnswer: 'calls',
          explanation:
            'Câu điều kiện loại 1 (có thật ở hiện tại/tương lai): If + hiện tại đơn, will + V (nguyên thể).',
        },
        {
          id: 15009,
          question: 'I _____ surprised if he passed the exam.',
          options: ['am', 'was', 'will be', 'would be'],
          correctAnswer: 'would be',
          explanation:
            'Câu điều kiện loại 2 (không có thật ở hiện tại): If + quá khứ đơn, would + V (nguyên thể).',
        },
        {
          id: 15010,
          question: 'If I had known about the party, I _____ it.',
          options: ['attend', 'attended', 'will attend', 'would have attended'],
          correctAnswer: 'would have attended',
          explanation:
            'Câu điều kiện loại 3 (không có thật ở quá khứ): If + quá khứ hoàn thành, would have + V3.',
        },
        {
          id: 15011,
          question: "If it _____ tomorrow, we'll cancel the picnic.",
          options: ['rains', 'rained', 'will rain', 'would rain'],
          correctAnswer: 'rains',
          explanation:
            'Câu điều kiện loại 1 (có thật ở hiện tại/tương lai): If + hiện tại đơn, will + V (nguyên thể).',
        },
        {
          id: 15012,
          question: 'If I _____ you, I would apologize.',
          options: ['am', 'was', 'were', 'will be'],
          correctAnswer: 'were',
          explanation:
            'Câu điều kiện loại 2 (không có thật ở hiện tại): If + quá khứ đơn (were), would + V (nguyên thể).',
        },
      ],
    },
  ],
};

export default tenses;
