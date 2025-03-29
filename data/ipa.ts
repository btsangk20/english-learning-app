export interface IIPAExample {
  word: string;
  pronunciation: string;
  meaning: string;
}

export interface IIPASection {
  symbol: string;
  description: string;
  vietnameseDescription: string;
  examples: IIPAExample[];
  audioUrl?: string;
}

// Monophthongs (Single Vowel Sounds)
export const monophthongs: IIPASection[] = [
  {
    symbol: 'iː',
    description: "Long 'ee' sound as in 'see'",
    vietnameseDescription:
      "Âm 'i' dài, giống như âm 'i' trong tiếng Việt nhưng kéo dài hơn. Môi mở rộng sang hai bên, lưỡi nâng cao và đẩy về phía trước.",
    examples: [
      { word: 'see', pronunciation: 'siː', meaning: 'nhìn thấy' },
      { word: 'meet', pronunciation: 'miːt', meaning: 'gặp gỡ' },
      { word: 'sheep', pronunciation: 'ʃiːp', meaning: 'con cừu' },
      { word: 'tree', pronunciation: 'triː', meaning: 'cây' },
      { word: 'green', pronunciation: 'ɡriːn', meaning: 'màu xanh lá' },
      { word: 'sleep', pronunciation: 'sliːp', meaning: 'ngủ' },
      { word: 'deep', pronunciation: 'diːp', meaning: 'sâu' },
      { word: 'keep', pronunciation: 'kiːp', meaning: 'giữ' },
    ],
  },
  {
    symbol: 'ɪ',
    description: "Short 'i' sound as in 'sit'",
    vietnameseDescription:
      "Âm 'i' ngắn, giống như âm 'i' trong tiếng Việt nhưng ngắn hơn. Môi mở rộng sang hai bên, lưỡi nâng cao và đẩy về phía trước.",
    examples: [
      { word: 'sit', pronunciation: 'sɪt', meaning: 'ngồi' },
      { word: 'fish', pronunciation: 'fɪʃ', meaning: 'cá' },
      { word: 'ship', pronunciation: 'ʃɪp', meaning: 'con tàu' },
      { word: 'big', pronunciation: 'bɪɡ', meaning: 'lớn' },
      { word: 'give', pronunciation: 'ɡɪv', meaning: 'cho' },
      { word: 'live', pronunciation: 'lɪv', meaning: 'sống' },
      { word: 'think', pronunciation: 'θɪŋk', meaning: 'nghĩ' },
      { word: 'with', pronunciation: 'wɪð', meaning: 'với' },
    ],
  },
  {
    symbol: 'e',
    description: "Short 'e' sound as in 'bed'",
    vietnameseDescription:
      "Âm 'e' ngắn, giống như âm 'e' trong tiếng Việt. Môi mở rộng sang hai bên, lưỡi nâng cao vừa phải và đẩy về phía trước.",
    examples: [
      { word: 'bed', pronunciation: 'bed', meaning: 'giường' },
      { word: 'head', pronunciation: 'hed', meaning: 'đầu' },
      { word: 'red', pronunciation: 'red', meaning: 'màu đỏ' },
      { word: 'pen', pronunciation: 'pen', meaning: 'bút' },
      { word: 'get', pronunciation: 'ɡet', meaning: 'lấy' },
      { word: 'let', pronunciation: 'let', meaning: 'để' },
      { word: 'men', pronunciation: 'men', meaning: 'đàn ông' },
      { word: 'egg', pronunciation: 'eɡ', meaning: 'trứng' },
    ],
  },
  {
    symbol: 'æ',
    description: "Short 'a' sound as in 'cat'",
    vietnameseDescription:
      "Âm 'a' ngắn, giống như âm 'a' trong tiếng Việt nhưng mở rộng hơn. Môi mở rộng, lưỡi hạ thấp và đẩy về phía trước.",
    examples: [
      { word: 'cat', pronunciation: 'kæt', meaning: 'con mèo' },
      { word: 'hat', pronunciation: 'hæt', meaning: 'mũ' },
      { word: 'map', pronunciation: 'mæp', meaning: 'bản đồ' },
      { word: 'bag', pronunciation: 'bæɡ', meaning: 'túi' },
      { word: 'hand', pronunciation: 'hænd', meaning: 'bàn tay' },
      { word: 'stand', pronunciation: 'stænd', meaning: 'đứng' },
      { word: 'back', pronunciation: 'bæk', meaning: 'lưng' },
      { word: 'black', pronunciation: 'blæk', meaning: 'màu đen' },
    ],
  },
  {
    symbol: 'ɑː',
    description: "Long 'a' sound as in 'car'",
    vietnameseDescription:
      "Âm 'a' dài, giống như âm 'a' trong tiếng Việt nhưng kéo dài hơn. Môi mở rộng, lưỡi hạ thấp và đẩy về phía sau.",
    examples: [
      { word: 'car', pronunciation: 'kɑː', meaning: 'xe hơi' },
      { word: 'star', pronunciation: 'stɑː', meaning: 'ngôi sao' },
      { word: 'heart', pronunciation: 'hɑːt', meaning: 'trái tim' },
      { word: 'dark', pronunciation: 'dɑːk', meaning: 'tối' },
      { word: 'park', pronunciation: 'pɑːk', meaning: 'công viên' },
      { word: 'hard', pronunciation: 'hɑːd', meaning: 'khó' },
      { word: 'start', pronunciation: 'stɑːt', meaning: 'bắt đầu' },
      { word: 'farm', pronunciation: 'fɑːm', meaning: 'nông trại' },
    ],
  },
  {
    symbol: 'ɒ',
    description: "Short 'o' sound as in 'hot'",
    vietnameseDescription:
      "Âm 'o' ngắn, giống như âm 'o' trong tiếng Việt nhưng mở rộng hơn. Môi tròn, lưỡi hạ thấp và đẩy về phía sau.",
    examples: [
      { word: 'hot', pronunciation: 'hɒt', meaning: 'nóng' },
      { word: 'dog', pronunciation: 'dɒɡ', meaning: 'con chó' },
      { word: 'box', pronunciation: 'bɒks', meaning: 'hộp' },
      { word: 'stop', pronunciation: 'stɒp', meaning: 'dừng' },
      { word: 'shop', pronunciation: 'ʃɒp', meaning: 'cửa hàng' },
      { word: 'clock', pronunciation: 'klɒk', meaning: 'đồng hồ' },
      { word: 'rock', pronunciation: 'rɒk', meaning: 'đá' },
      { word: 'top', pronunciation: 'tɒp', meaning: 'đỉnh' },
    ],
  },
  {
    symbol: 'ɔː',
    description: "Long 'o' sound as in 'law'",
    vietnameseDescription:
      "Âm 'o' dài, giống như âm 'o' trong tiếng Việt nhưng kéo dài hơn. Môi tròn, lưỡi hạ thấp và đẩy về phía sau.",
    examples: [
      { word: 'law', pronunciation: 'lɔː', meaning: 'luật' },
      { word: 'saw', pronunciation: 'sɔː', meaning: 'cưa' },
      { word: 'door', pronunciation: 'dɔː', meaning: 'cửa' },
      { word: 'more', pronunciation: 'mɔː', meaning: 'nhiều hơn' },
      { word: 'floor', pronunciation: 'flɔː', meaning: 'sàn nhà' },
      { word: 'store', pronunciation: 'stɔː', meaning: 'cửa hàng' },
      { word: 'four', pronunciation: 'fɔː', meaning: 'bốn' },
      { word: 'sport', pronunciation: 'spɔːt', meaning: 'thể thao' },
    ],
  },
  {
    symbol: 'ʊ',
    description: "Short 'u' sound as in 'put'",
    vietnameseDescription:
      "Âm 'u' ngắn, giống như âm 'u' trong tiếng Việt nhưng ngắn hơn. Môi tròn, lưỡi nâng cao và đẩy về phía sau.",
    examples: [
      { word: 'put', pronunciation: 'pʊt', meaning: 'đặt' },
      { word: 'book', pronunciation: 'bʊk', meaning: 'sách' },
      { word: 'good', pronunciation: 'ɡʊd', meaning: 'tốt' },
      { word: 'look', pronunciation: 'lʊk', meaning: 'nhìn' },
      { word: 'foot', pronunciation: 'fʊt', meaning: 'chân' },
      { word: 'cook', pronunciation: 'kʊk', meaning: 'nấu ăn' },
      { word: 'wood', pronunciation: 'wʊd', meaning: 'gỗ' },
      { word: 'pull', pronunciation: 'pʊl', meaning: 'kéo' },
    ],
  },
  {
    symbol: 'uː',
    description: "Long 'u' sound as in 'too'",
    vietnameseDescription:
      "Âm 'u' dài, giống như âm 'u' trong tiếng Việt nhưng kéo dài hơn. Môi tròn, lưỡi nâng cao và đẩy về phía sau.",
    examples: [
      { word: 'too', pronunciation: 'tuː', meaning: 'cũng' },
      { word: 'food', pronunciation: 'fuːd', meaning: 'thức ăn' },
      { word: 'moon', pronunciation: 'muːn', meaning: 'mặt trăng' },
      { word: 'blue', pronunciation: 'bluː', meaning: 'màu xanh dương' },
      { word: 'room', pronunciation: 'ruːm', meaning: 'phòng' },
      { word: 'school', pronunciation: 'skuːl', meaning: 'trường học' },
      { word: 'tool', pronunciation: 'tuːl', meaning: 'công cụ' },
      { word: 'cool', pronunciation: 'kuːl', meaning: 'mát' },
    ],
  },
  {
    symbol: 'ʌ',
    description: "Short 'u' sound as in 'cup'",
    vietnameseDescription:
      "Âm 'a' ngắn, giống như âm 'a' trong tiếng Việt nhưng ngắn hơn. Môi mở rộng, lưỡi hạ thấp và đẩy về phía sau.",
    examples: [
      { word: 'cup', pronunciation: 'kʌp', meaning: 'cốc' },
      { word: 'love', pronunciation: 'lʌv', meaning: 'yêu' },
      { word: 'sun', pronunciation: 'sʌn', meaning: 'mặt trời' },
      { word: 'up', pronunciation: 'ʌp', meaning: 'lên' },
      { word: 'but', pronunciation: 'bʌt', meaning: 'nhưng' },
      { word: 'run', pronunciation: 'rʌn', meaning: 'chạy' },
      { word: 'fun', pronunciation: 'fʌn', meaning: 'vui vẻ' },
      { word: 'bus', pronunciation: 'bʌs', meaning: 'xe buýt' },
    ],
  },
  {
    symbol: 'ɜː',
    description: "Long 'e' sound as in 'bird'",
    vietnameseDescription:
      "Âm 'ơ' dài, giống như âm 'ơ' trong tiếng Việt nhưng kéo dài hơn. Môi mở rộng, lưỡi nâng cao vừa phải và đẩy về phía sau.",
    examples: [
      { word: 'bird', pronunciation: 'bɜːd', meaning: 'con chim' },
      { word: 'word', pronunciation: 'wɜːd', meaning: 'từ' },
      { word: 'girl', pronunciation: 'ɡɜːl', meaning: 'cô gái' },
      { word: 'work', pronunciation: 'wɜːk', meaning: 'làm việc' },
      { word: 'first', pronunciation: 'fɜːst', meaning: 'đầu tiên' },
      { word: 'turn', pronunciation: 'tɜːn', meaning: 'rẽ' },
      { word: 'learn', pronunciation: 'lɜːn', meaning: 'học' },
      { word: 'world', pronunciation: 'wɜːld', meaning: 'thế giới' },
    ],
  },
  {
    symbol: 'ə',
    description: "Schwa sound as in 'about'",
    vietnameseDescription:
      "Âm 'ơ' ngắn, giống như âm 'ơ' trong tiếng Việt nhưng ngắn hơn. Môi mở rộng, lưỡi hạ thấp và đẩy về phía sau.",
    examples: [
      { word: 'about', pronunciation: 'əˈbaʊt', meaning: 'về' },
      { word: 'cinema', pronunciation: 'ˈsɪnəmə', meaning: 'rạp chiếu phim' },
      { word: 'teacher', pronunciation: 'ˈtiːtʃə', meaning: 'giáo viên' },
      { word: 'computer', pronunciation: 'kəmˈpjuːtə', meaning: 'máy tính' },
      { word: 'banana', pronunciation: 'bəˈnɑːnə', meaning: 'chuối' },
      { word: 'together', pronunciation: 'təˈɡeðə', meaning: 'cùng nhau' },
      { word: 'paper', pronunciation: 'ˈpeɪpə', meaning: 'giấy' },
      { word: 'water', pronunciation: 'ˈwɔːtə', meaning: 'nước' },
    ],
  },
];

// Diphthongs (Vowel Combinations)
export const diphthongs: IIPASection[] = [
  {
    symbol: 'eɪ',
    description: "Long 'a' sound as in 'face'",
    vietnameseDescription:
      "Âm 'ây', là sự kết hợp của âm 'e' và 'i'. Bắt đầu với âm 'e' và kết thúc với âm 'i'.",
    examples: [
      { word: 'face', pronunciation: 'feɪs', meaning: 'khuôn mặt' },
      { word: 'make', pronunciation: 'meɪk', meaning: 'làm' },
      { word: 'day', pronunciation: 'deɪ', meaning: 'ngày' },
      { word: 'rain', pronunciation: 'reɪn', meaning: 'mưa' },
      { word: 'play', pronunciation: 'pleɪ', meaning: 'chơi' },
      { word: 'way', pronunciation: 'weɪ', meaning: 'đường' },
      { word: 'stay', pronunciation: 'steɪ', meaning: 'ở lại' },
      { word: 'game', pronunciation: 'ɡeɪm', meaning: 'trò chơi' },
    ],
  },
  {
    symbol: 'aɪ',
    description: "Long 'i' sound as in 'price'",
    vietnameseDescription:
      "Âm 'ai', là sự kết hợp của âm 'a' và 'i'. Bắt đầu với âm 'a' và kết thúc với âm 'i'.",
    examples: [
      { word: 'price', pronunciation: 'praɪs', meaning: 'giá' },
      { word: 'high', pronunciation: 'haɪ', meaning: 'cao' },
      { word: 'try', pronunciation: 'traɪ', meaning: 'thử' },
      { word: 'time', pronunciation: 'taɪm', meaning: 'thời gian' },
      { word: 'life', pronunciation: 'laɪf', meaning: 'cuộc sống' },
      { word: 'like', pronunciation: 'laɪk', meaning: 'thích' },
      { word: 'right', pronunciation: 'raɪt', meaning: 'đúng' },
      { word: 'night', pronunciation: 'naɪt', meaning: 'đêm' },
    ],
  },
  {
    symbol: 'ɔɪ',
    description: "Long 'oi' sound as in 'boy'",
    vietnameseDescription:
      "Âm 'oi', là sự kết hợp của âm 'o' và 'i'. Bắt đầu với âm 'o' và kết thúc với âm 'i'.",
    examples: [
      { word: 'boy', pronunciation: 'bɔɪ', meaning: 'cậu bé' },
      { word: 'join', pronunciation: 'dʒɔɪn', meaning: 'tham gia' },
      { word: 'coin', pronunciation: 'kɔɪn', meaning: 'đồng xu' },
      { word: 'oil', pronunciation: 'ɔɪl', meaning: 'dầu' },
      { word: 'point', pronunciation: 'pɔɪnt', meaning: 'điểm' },
      { word: 'voice', pronunciation: 'vɔɪs', meaning: 'giọng nói' },
      { word: 'noise', pronunciation: 'nɔɪz', meaning: 'tiếng ồn' },
      { word: 'choice', pronunciation: 'tʃɔɪs', meaning: 'lựa chọn' },
    ],
  },
  {
    symbol: 'aʊ',
    description: "Long 'ou' sound as in 'mouth'",
    vietnameseDescription:
      "Âm 'ao', là sự kết hợp của âm 'a' và 'u'. Bắt đầu với âm 'a' và kết thúc với âm 'u'.",
    examples: [
      { word: 'mouth', pronunciation: 'maʊθ', meaning: 'miệng' },
      { word: 'now', pronunciation: 'naʊ', meaning: 'bây giờ' },
      { word: 'house', pronunciation: 'haʊs', meaning: 'ngôi nhà' },
      { word: 'out', pronunciation: 'aʊt', meaning: 'ra ngoài' },
      { word: 'cloud', pronunciation: 'klaʊd', meaning: 'mây' },
      { word: 'loud', pronunciation: 'laʊd', meaning: 'to' },
      { word: 'round', pronunciation: 'raʊnd', meaning: 'tròn' },
      { word: 'found', pronunciation: 'faʊnd', meaning: 'tìm thấy' },
    ],
  },
  {
    symbol: 'əʊ',
    description: "Long 'o' sound as in 'goat'",
    vietnameseDescription:
      "Âm 'âu', là sự kết hợp của âm 'ơ' và 'u'. Bắt đầu với âm 'ơ' và kết thúc với âm 'u'.",
    examples: [
      { word: 'goat', pronunciation: 'ɡəʊt', meaning: 'con dê' },
      { word: 'show', pronunciation: 'ʃəʊ', meaning: 'chương trình' },
      { word: 'know', pronunciation: 'nəʊ', meaning: 'biết' },
      { word: 'home', pronunciation: 'həʊm', meaning: 'nhà' },
      { word: 'road', pronunciation: 'rəʊd', meaning: 'đường' },
      { word: 'boat', pronunciation: 'bəʊt', meaning: 'thuyền' },
      { word: 'coat', pronunciation: 'kəʊt', meaning: 'áo khoác' },
      { word: 'snow', pronunciation: 'snəʊ', meaning: 'tuyết' },
    ],
  },
  {
    symbol: 'ɪə',
    description: "Long 'ear' sound as in 'near'",
    vietnameseDescription:
      "Âm 'iơ', là sự kết hợp của âm 'i' và 'ơ'. Bắt đầu với âm 'i' và kết thúc với âm 'ơ'.",
    examples: [
      { word: 'near', pronunciation: 'nɪə', meaning: 'gần' },
      { word: 'hear', pronunciation: 'hɪə', meaning: 'nghe' },
      { word: 'beer', pronunciation: 'bɪə', meaning: 'bia' },
      { word: 'ear', pronunciation: 'ɪə', meaning: 'tai' },
      { word: 'clear', pronunciation: 'klɪə', meaning: 'rõ ràng' },
      { word: 'fear', pronunciation: 'fɪə', meaning: 'sợ hãi' },
      { word: 'year', pronunciation: 'jɪə', meaning: 'năm' },
      { word: 'tear', pronunciation: 'tɪə', meaning: 'nước mắt' },
    ],
  },
  {
    symbol: 'eə',
    description: "Long 'air' sound as in 'square'",
    vietnameseDescription:
      "Âm 'eơ', là sự kết hợp của âm 'e' và 'ơ'. Bắt đầu với âm 'e' và kết thúc với âm 'ơ'.",
    examples: [
      { word: 'square', pronunciation: 'skweə', meaning: 'hình vuông' },
      { word: 'fair', pronunciation: 'feə', meaning: 'công bằng' },
      { word: 'care', pronunciation: 'keə', meaning: 'quan tâm' },
      { word: 'air', pronunciation: 'eə', meaning: 'không khí' },
      { word: 'chair', pronunciation: 'tʃeə', meaning: 'ghế' },
      { word: 'bear', pronunciation: 'beə', meaning: 'con gấu' },
      { word: 'wear', pronunciation: 'weə', meaning: 'mặc' },
      { word: 'share', pronunciation: 'ʃeə', meaning: 'chia sẻ' },
    ],
  },
  {
    symbol: 'ʊə',
    description: "Long 'ure' sound as in 'poor'",
    vietnameseDescription:
      "Âm 'uơ', là sự kết hợp của âm 'u' và 'ơ'. Bắt đầu với âm 'u' và kết thúc với âm 'ơ'.",
    examples: [
      { word: 'poor', pronunciation: 'pʊə', meaning: 'nghèo' },
      { word: 'sure', pronunciation: 'ʃʊə', meaning: 'chắc chắn' },
      { word: 'tour', pronunciation: 'tʊə', meaning: 'du lịch' },
      { word: 'pure', pronunciation: 'pjʊə', meaning: 'tinh khiết' },
      { word: 'cure', pronunciation: 'kjʊə', meaning: 'chữa trị' },
      { word: 'mature', pronunciation: 'məˈtʃʊə', meaning: 'trưởng thành' },
      { word: 'secure', pronunciation: 'sɪˈkjʊə', meaning: 'an toàn' },
      { word: 'endure', pronunciation: 'ɪnˈdjʊə', meaning: 'chịu đựng' },
    ],
  },
];

export const ipaConsonantData: IIPASection[] = [
  {
    symbol: 'p',
    description: "Voiceless bilabial plosive as in 'pen'",
    vietnameseDescription:
      "Âm 'p', phát âm bằng cách khép hai môi lại và bật hơi ra. Tương tự âm 'p' trong tiếng Việt nhưng mạnh hơn.",
    examples: [
      { word: 'pen', pronunciation: 'pen', meaning: 'bút' },
      { word: 'map', pronunciation: 'mæp', meaning: 'bản đồ' },
      { word: 'happy', pronunciation: 'ˈhæpi', meaning: 'hạnh phúc' },
      { word: 'stop', pronunciation: 'stɒp', meaning: 'dừng lại' },
      { word: 'speak', pronunciation: 'spiːk', meaning: 'nói' },
      { word: 'sleep', pronunciation: 'sliːp', meaning: 'ngủ' },
      { word: 'polite', pronunciation: 'pəˈlaɪt', meaning: 'lịch sự' },
      { word: 'paper', pronunciation: 'ˈpeɪpə', meaning: 'giấy' },
    ],
  },
  {
    symbol: 'b',
    description: "Voiced bilabial plosive as in 'bad'",
    vietnameseDescription:
      "Âm 'b', phát âm bằng cách khép hai môi lại và bật hơi ra, có rung dây thanh. Tương tự âm 'b' trong tiếng Việt.",
    examples: [
      { word: 'bad', pronunciation: 'bæd', meaning: 'tồi tệ' },
      { word: 'rob', pronunciation: 'rɒb', meaning: 'cướp' },
      { word: 'baby', pronunciation: 'ˈbeɪbi', meaning: 'em bé' },
      { word: 'table', pronunciation: 'ˈteɪbl', meaning: 'bàn' },
      { word: 'bring', pronunciation: 'brɪŋ', meaning: 'mang đến' },
      { word: 'about', pronunciation: 'əˈbaʊt', meaning: 'về' },
      { word: 'bottle', pronunciation: 'ˈbɒtl', meaning: 'chai' },
      { word: 'bubble', pronunciation: 'ˈbʌbl', meaning: 'bong bóng' },
    ],
  },
  {
    symbol: 't',
    description: "Voiceless alveolar plosive as in 'ten'",
    vietnameseDescription:
      "Âm 't', phát âm bằng cách đặt lưỡi vào sau răng trên và bật hơi ra. Tương tự âm 't' trong tiếng Việt nhưng mạnh hơn.",
    examples: [
      { word: 'ten', pronunciation: 'ten', meaning: 'mười' },
      { word: 'cat', pronunciation: 'kæt', meaning: 'con mèo' },
      { word: 'water', pronunciation: 'ˈwɔːtə', meaning: 'nước' },
      { word: 'time', pronunciation: 'taɪm', meaning: 'thời gian' },
      { word: 'star', pronunciation: 'stɑː', meaning: 'ngôi sao' },
      { word: 'try', pronunciation: 'traɪ', meaning: 'cố gắng' },
      { word: 'hotel', pronunciation: 'həʊˈtel', meaning: 'khách sạn' },
      { word: 'ticket', pronunciation: 'ˈtɪkɪt', meaning: 'vé' },
    ],
  },
  {
    symbol: 'd',
    description: "Voiced alveolar plosive as in 'day'",
    vietnameseDescription:
      "Âm 'd', phát âm bằng cách đặt lưỡi vào sau răng trên và bật hơi ra, có rung dây thanh. Tương tự âm 'đ' trong tiếng Việt.",
    examples: [
      { word: 'day', pronunciation: 'deɪ', meaning: 'ngày' },
      { word: 'bed', pronunciation: 'bed', meaning: 'giường' },
      { word: 'door', pronunciation: 'dɔː', meaning: 'cửa' },
      { word: 'dark', pronunciation: 'dɑːk', meaning: 'tối' },
      { word: 'dream', pronunciation: 'driːm', meaning: 'giấc mơ' },
      { word: 'drink', pronunciation: 'drɪŋk', meaning: 'uống' },
      { word: 'idea', pronunciation: 'aɪˈdɪə', meaning: 'ý tưởng' },
      { word: 'ladder', pronunciation: 'ˈlædə', meaning: 'thang' },
    ],
  },
  {
    symbol: 'k',
    description: "Voiceless velar plosive as in 'key'",
    vietnameseDescription:
      "Âm 'k', phát âm bằng cách đặt lưỡi chạm vào vòm miệng mềm và bật hơi ra. Tương tự âm 'c' hay 'k' trong tiếng Việt.",
    examples: [
      { word: 'key', pronunciation: 'kiː', meaning: 'chìa khóa' },
      { word: 'back', pronunciation: 'bæk', meaning: 'lưng' },
      { word: 'car', pronunciation: 'kɑː', meaning: 'xe hơi' },
      { word: 'school', pronunciation: 'skuːl', meaning: 'trường học' },
      { word: 'clean', pronunciation: 'kliːn', meaning: 'sạch sẽ' },
      { word: 'ticket', pronunciation: 'ˈtɪkɪt', meaning: 'vé' },
      { word: 'character', pronunciation: 'ˈkærəktə', meaning: 'nhân vật' },
      { word: 'like', pronunciation: 'laɪk', meaning: 'thích' },
    ],
  },
  {
    symbol: 'g',
    description: "Voiced velar plosive as in 'get'",
    vietnameseDescription:
      "Âm 'g', phát âm bằng cách đặt lưỡi chạm vào vòm miệng mềm và bật hơi ra, có rung dây thanh. Tương tự âm 'g' trong tiếng Việt.",
    examples: [
      { word: 'get', pronunciation: 'get', meaning: 'lấy' },
      { word: 'big', pronunciation: 'bɪg', meaning: 'to lớn' },
      { word: 'go', pronunciation: 'gəʊ', meaning: 'đi' },
      { word: 'game', pronunciation: 'geɪm', meaning: 'trò chơi' },
      { word: 'green', pronunciation: 'griːn', meaning: 'màu xanh lá' },
      { word: 'again', pronunciation: 'əˈgen', meaning: 'lại' },
      { word: 'target', pronunciation: 'ˈtɑːgɪt', meaning: 'mục tiêu' },
      { word: 'guitar', pronunciation: 'gɪˈtɑː', meaning: 'đàn guitar' },
    ],
  },
  {
    symbol: 'f',
    description: "Voiceless labiodental fricative as in 'food'",
    vietnameseDescription:
      "Âm 'f', phát âm bằng cách chạm răng trên vào môi dưới và thổi hơi ra. Tương tự âm 'ph' trong tiếng Việt.",
    examples: [
      { word: 'food', pronunciation: 'fuːd', meaning: 'thức ăn' },
      { word: 'half', pronunciation: 'hɑːf', meaning: 'một nửa' },
      { word: 'fish', pronunciation: 'fɪʃ', meaning: 'cá' },
      { word: 'fast', pronunciation: 'fɑːst', meaning: 'nhanh' },
      { word: 'friend', pronunciation: 'frend', meaning: 'bạn' },
      { word: 'phone', pronunciation: 'fəʊn', meaning: 'điện thoại' },
      { word: 'office', pronunciation: 'ˈɒfɪs', meaning: 'văn phòng' },
      { word: 'difficult', pronunciation: 'ˈdɪfɪkəlt', meaning: 'khó khăn' },
    ],
  },
  {
    symbol: 'v',
    description: "Voiced labiodental fricative as in 'very'",
    vietnameseDescription:
      "Âm 'v', phát âm bằng cách chạm răng trên vào môi dưới và thổi hơi ra, có rung dây thanh. Không có âm tương đương trong tiếng Việt.",
    examples: [
      { word: 'very', pronunciation: 'ˈveri', meaning: 'rất' },
      { word: 'live', pronunciation: 'lɪv', meaning: 'sống' },
      { word: 'voice', pronunciation: 'vɔɪs', meaning: 'giọng nói' },
      { word: 'love', pronunciation: 'lʌv', meaning: 'tình yêu' },
      { word: 'movie', pronunciation: 'ˈmuːvi', meaning: 'phim' },
      { word: 'never', pronunciation: 'ˈnevə', meaning: 'không bao giờ' },
      { word: 'advantage', pronunciation: 'ədˈvɑːntɪdʒ', meaning: 'lợi thế' },
      { word: 'vitamin', pronunciation: 'ˈvɪtəmɪn', meaning: 'vitamin' },
    ],
  },
  {
    symbol: 'θ',
    description: "Voiceless dental fricative as in 'think'",
    vietnameseDescription:
      "Âm 'th' không rung, phát âm bằng cách đặt đầu lưỡi giữa răng trên và dưới, thổi hơi ra. Không có âm tương đương trong tiếng Việt.",
    examples: [
      { word: 'think', pronunciation: 'θɪŋk', meaning: 'suy nghĩ' },
      { word: 'health', pronunciation: 'helθ', meaning: 'sức khỏe' },
      { word: 'thank', pronunciation: 'θæŋk', meaning: 'cảm ơn' },
      { word: 'mouth', pronunciation: 'maʊθ', meaning: 'miệng' },
      { word: 'theory', pronunciation: 'ˈθɪəri', meaning: 'lý thuyết' },
      { word: 'Thursday', pronunciation: 'ˈθɜːzdeɪ', meaning: 'thứ năm' },
      { word: 'birthday', pronunciation: 'ˈbɜːθdeɪ', meaning: 'sinh nhật' },
      { word: 'bathroom', pronunciation: 'ˈbɑːθruːm', meaning: 'phòng tắm' },
    ],
  },
  {
    symbol: 'ð',
    description: "Voiced dental fricative as in 'this'",
    vietnameseDescription:
      "Âm 'th' rung, phát âm bằng cách đặt đầu lưỡi giữa răng trên và dưới, thổi hơi ra, có rung dây thanh. Không có âm tương đương trong tiếng Việt.",
    examples: [
      { word: 'this', pronunciation: 'ðɪs', meaning: 'này' },
      { word: 'breathe', pronunciation: 'briːð', meaning: 'thở' },
      { word: 'that', pronunciation: 'ðæt', meaning: 'đó' },
      { word: 'brother', pronunciation: 'ˈbrʌðə', meaning: 'anh trai' },
      { word: 'mother', pronunciation: 'ˈmʌðə', meaning: 'mẹ' },
      { word: 'father', pronunciation: 'ˈfɑːðə', meaning: 'cha' },
      { word: 'weather', pronunciation: 'ˈweðə', meaning: 'thời tiết' },
      { word: 'together', pronunciation: 'təˈgeðə', meaning: 'cùng nhau' },
    ],
  },
  {
    symbol: 's',
    description: "Voiceless alveolar fricative as in 'see'",
    vietnameseDescription:
      "Âm 's', phát âm bằng cách đặt lưỡi gần răng và thổi hơi ra. Tương tự âm 'x' trong tiếng Việt.",
    examples: [
      { word: 'see', pronunciation: 'siː', meaning: 'nhìn thấy' },
      { word: 'yes', pronunciation: 'jes', meaning: 'có' },
      { word: 'say', pronunciation: 'seɪ', meaning: 'nói' },
      { word: 'stop', pronunciation: 'stɒp', meaning: 'dừng lại' },
      { word: 'sleep', pronunciation: 'sliːp', meaning: 'ngủ' },
      { word: 'house', pronunciation: 'haʊs', meaning: 'nhà' },
      { word: 'kissing', pronunciation: 'ˈkɪsɪŋ', meaning: 'hôn' },
      { word: 'lesson', pronunciation: 'ˈlesn', meaning: 'bài học' },
    ],
  },
  {
    symbol: 'z',
    description: "Voiced alveolar fricative as in 'zoo'",
    vietnameseDescription:
      "Âm 'z', phát âm bằng cách đặt lưỡi gần răng và thổi hơi ra, có rung dây thanh. Không có âm tương đương trong tiếng Việt.",
    examples: [
      { word: 'zoo', pronunciation: 'zuː', meaning: 'sở thú' },
      { word: 'lazy', pronunciation: 'ˈleɪzi', meaning: 'lười biếng' },
      { word: 'zero', pronunciation: 'ˈzɪərəʊ', meaning: 'số không' },
      { word: 'puzzle', pronunciation: 'ˈpʌzl', meaning: 'câu đố' },
      { word: 'crazy', pronunciation: 'ˈkreɪzi', meaning: 'điên rồ' },
      { word: 'zebra', pronunciation: 'ˈzebrə', meaning: 'ngựa vằn' },
      { word: 'buzzing', pronunciation: 'ˈbʌzɪŋ', meaning: 'vo ve' },
      { word: 'realize', pronunciation: 'ˈrɪəlaɪz', meaning: 'nhận ra' },
    ],
  },
  {
    symbol: 'ʃ',
    description: "Voiceless postalveolar fricative as in 'she'",
    vietnameseDescription:
      "Âm 'sh', phát âm bằng cách đặt lưỡi gần vòm miệng và thổi hơi ra. Tương tự âm 's' trong tiếng Việt.",
    examples: [
      { word: 'she', pronunciation: 'ʃiː', meaning: 'cô ấy' },
      { word: 'fish', pronunciation: 'fɪʃ', meaning: 'cá' },
      { word: 'show', pronunciation: 'ʃəʊ', meaning: 'trình diễn' },
      { word: 'ship', pronunciation: 'ʃɪp', meaning: 'tàu thủy' },
      { word: 'shopping', pronunciation: 'ˈʃɒpɪŋ', meaning: 'mua sắm' },
      { word: 'English', pronunciation: 'ˈɪŋglɪʃ', meaning: 'tiếng Anh' },
      { word: 'fashion', pronunciation: 'ˈfæʃn', meaning: 'thời trang' },
      { word: 'ocean', pronunciation: 'ˈəʊʃn', meaning: 'đại dương' },
    ],
  },
  {
    symbol: 'ʒ',
    description: "Voiced postalveolar fricative as in 'vision'",
    vietnameseDescription:
      "Âm 'zh', phát âm bằng cách đặt lưỡi gần vòm miệng và thổi hơi ra, có rung dây thanh. Không có âm tương đương trong tiếng Việt.",
    examples: [
      { word: 'vision', pronunciation: 'ˈvɪʒn', meaning: 'tầm nhìn' },
      { word: 'measure', pronunciation: 'ˈmeʒə', meaning: 'đo lường' },
      { word: 'pleasure', pronunciation: 'ˈpleʒə', meaning: 'niềm vui' },
      { word: 'decision', pronunciation: 'dɪˈsɪʒn', meaning: 'quyết định' },
      { word: 'television', pronunciation: 'ˈtelɪvɪʒn', meaning: 'ti vi' },
      { word: 'casual', pronunciation: 'ˈkæʒuəl', meaning: 'thường ngày' },
      { word: 'treasure', pronunciation: 'ˈtreʒə', meaning: 'kho báu' },
      { word: 'usual', pronunciation: 'ˈjuːʒuəl', meaning: 'thông thường' },
    ],
  },
  {
    symbol: 'h',
    description: "Voiceless glottal fricative as in 'he'",
    vietnameseDescription:
      "Âm 'h', phát âm bằng cách thổi hơi ra từ cổ họng. Tương tự âm 'h' trong tiếng Việt.",
    examples: [
      { word: 'he', pronunciation: 'hiː', meaning: 'anh ấy' },
      { word: 'happy', pronunciation: 'ˈhæpi', meaning: 'hạnh phúc' },
      { word: 'hello', pronunciation: 'həˈləʊ', meaning: 'xin chào' },
      { word: 'hot', pronunciation: 'hɒt', meaning: 'nóng' },
      { word: 'house', pronunciation: 'haʊs', meaning: 'nhà' },
      { word: 'hope', pronunciation: 'həʊp', meaning: 'hy vọng' },
      { word: 'healthy', pronunciation: 'ˈhelθi', meaning: 'khỏe mạnh' },
      { word: 'behind', pronunciation: 'bɪˈhaɪnd', meaning: 'phía sau' },
    ],
  },
  {
    symbol: 'm',
    description: "Bilabial nasal as in 'me'",
    vietnameseDescription:
      "Âm 'm', phát âm bằng cách khép hai môi lại và thoát hơi qua mũi. Tương tự âm 'm' trong tiếng Việt.",
    examples: [
      { word: 'me', pronunciation: 'miː', meaning: 'tôi' },
      { word: 'home', pronunciation: 'həʊm', meaning: 'nhà' },
      { word: 'money', pronunciation: 'ˈmʌni', meaning: 'tiền' },
      { word: 'make', pronunciation: 'meɪk', meaning: 'làm' },
      { word: 'mother', pronunciation: 'ˈmʌðə', meaning: 'mẹ' },
      { word: 'dream', pronunciation: 'driːm', meaning: 'giấc mơ' },
      { word: 'small', pronunciation: 'smɔːl', meaning: 'nhỏ' },
      { word: 'summer', pronunciation: 'ˈsʌmə', meaning: 'mùa hè' },
    ],
  },
  {
    symbol: 'n',
    description: "Alveolar nasal as in 'no'",
    vietnameseDescription:
      "Âm 'n', phát âm bằng cách đặt lưỡi vào sau răng trên và thoát hơi qua mũi. Tương tự âm 'n' trong tiếng Việt.",
    examples: [
      { word: 'no', pronunciation: 'nəʊ', meaning: 'không' },
      { word: 'thin', pronunciation: 'θɪn', meaning: 'mỏng' },
      { word: 'name', pronunciation: 'neɪm', meaning: 'tên' },
      { word: 'night', pronunciation: 'naɪt', meaning: 'đêm' },
      { word: 'know', pronunciation: 'nəʊ', meaning: 'biết' },
      { word: 'not', pronunciation: 'nɒt', meaning: 'không' },
      { word: 'snow', pronunciation: 'snəʊ', meaning: 'tuyết' },
      { word: 'only', pronunciation: 'ˈəʊnli', meaning: 'chỉ' },
    ],
  },
  {
    symbol: 'ŋ',
    description: "Velar nasal as in 'sing'",
    vietnameseDescription:
      "Âm 'ng', phát âm bằng cách đặt lưỡi chạm vào vòm miệng mềm và thoát hơi qua mũi. Tương tự âm 'ng' trong tiếng Việt.",
    examples: [
      { word: 'sing', pronunciation: 'sɪŋ', meaning: 'hát' },
      { word: 'ring', pronunciation: 'rɪŋ', meaning: 'chiếc nhẫn' },
      { word: 'king', pronunciation: 'kɪŋ', meaning: 'vua' },
      { word: 'thing', pronunciation: 'θɪŋ', meaning: 'vật' },
      { word: 'long', pronunciation: 'lɒŋ', meaning: 'dài' },
      { word: 'young', pronunciation: 'jʌŋ', meaning: 'trẻ' },
      { word: 'wrong', pronunciation: 'rɒŋ', meaning: 'sai' },
      { word: 'English', pronunciation: 'ˈɪŋglɪʃ', meaning: 'tiếng Anh' },
    ],
  },
  {
    symbol: 'l',
    description: "Lateral approximant as in 'let'",
    vietnameseDescription:
      "Âm 'l', phát âm bằng cách đặt đầu lưỡi vào sau răng trên và để hơi thoát ra hai bên lưỡi. Tương tự âm 'l' trong tiếng Việt.",
    examples: [
      { word: 'let', pronunciation: 'let', meaning: 'để' },
      { word: 'cool', pronunciation: 'kuːl', meaning: 'mát mẻ' },
      { word: 'like', pronunciation: 'laɪk', meaning: 'thích' },
      { word: 'love', pronunciation: 'lʌv', meaning: 'yêu' },
      { word: 'feel', pronunciation: 'fiːl', meaning: 'cảm thấy' },
      { word: 'look', pronunciation: 'lʊk', meaning: 'nhìn' },
      { word: 'play', pronunciation: 'pleɪ', meaning: 'chơi' },
      { word: 'low', pronunciation: 'ləʊ', meaning: 'thấp' },
    ],
  },
  {
    symbol: 'r',
    description: "Alveolar approximant as in 'red'",
    vietnameseDescription:
      "Âm 'r', phát âm bằng cách cuộn lưỡi về phía sau, không chạm vào vòm miệng. Không giống âm 'r' trong tiếng Việt.",
    examples: [
      { word: 'red', pronunciation: 'red', meaning: 'màu đỏ' },
      { word: 'car', pronunciation: 'kɑː', meaning: 'xe hơi' },
      { word: 'right', pronunciation: 'raɪt', meaning: 'đúng' },
      { word: 'road', pronunciation: 'rəʊd', meaning: 'đường' },
      { word: 'run', pronunciation: 'rʌn', meaning: 'chạy' },
      { word: 'friend', pronunciation: 'frend', meaning: 'bạn' },
      { word: 'try', pronunciation: 'traɪ', meaning: 'thử' },
      { word: 'around', pronunciation: 'əˈraʊnd', meaning: 'xung quanh' },
    ],
  },
  {
    symbol: 'j',
    description: "Palatal approximant as in 'yes'",
    vietnameseDescription:
      "Âm 'y', phát âm bằng cách đặt lưỡi gần vòm miệng cứng. Tương tự âm 'i' ngắn trong tiếng Việt.",
    examples: [
      { word: 'yes', pronunciation: 'jes', meaning: 'có' },
      { word: 'you', pronunciation: 'juː', meaning: 'bạn' },
      { word: 'yellow', pronunciation: 'ˈjeləʊ', meaning: 'màu vàng' },
      { word: 'year', pronunciation: 'jɪə', meaning: 'năm' },
      { word: 'young', pronunciation: 'jʌŋ', meaning: 'trẻ' },
      { word: 'your', pronunciation: 'jɔː', meaning: 'của bạn' },
      { word: 'yesterday', pronunciation: 'ˈjestədeɪ', meaning: 'hôm qua' },
      { word: 'yogurt', pronunciation: 'ˈjɒgət', meaning: 'sữa chua' },
    ],
  },
  {
    symbol: 'w',
    description: "Labial-velar approximant as in 'we'",
    vietnameseDescription:
      "Âm 'w', phát âm bằng cách tròn môi và đặt lưỡi gần vòm miệng mềm. Tương tự âm 'u' ngắn trong tiếng Việt.",
    examples: [
      { word: 'we', pronunciation: 'wiː', meaning: 'chúng tôi' },
      { word: 'swim', pronunciation: 'swɪm', meaning: 'bơi' },
      { word: 'water', pronunciation: 'ˈwɔːtə', meaning: 'nước' },
      { word: 'web', pronunciation: 'web', meaning: 'mạng' },
      { word: 'will', pronunciation: 'wɪl', meaning: 'sẽ' },
      { word: 'would', pronunciation: 'wʊd', meaning: 'có thể' },
      { word: 'weather', pronunciation: 'ˈweðə', meaning: 'thời tiết' },
      { word: 'twelve', pronunciation: 'twelv', meaning: 'mười hai' },
    ],
  },
  {
    symbol: 'tʃ',
    description: "Voiceless postalveolar affricate as in 'chair'",
    vietnameseDescription:
      "Âm 'ch', phát âm bằng cách đặt lưỡi vào sau răng trên và sau đó thả ra với tiếng 'sh'. Tương tự âm 'ch' trong tiếng Việt.",
    examples: [
      { word: 'chair', pronunciation: 'tʃeə', meaning: 'ghế' },
      { word: 'watch', pronunciation: 'wɒtʃ', meaning: 'đồng hồ đeo tay' },
      { word: 'cheese', pronunciation: 'tʃiːz', meaning: 'phô mai' },
      { word: 'children', pronunciation: 'ˈtʃɪldrən', meaning: 'trẻ em' },
      { word: 'teacher', pronunciation: 'ˈtiːtʃə', meaning: 'giáo viên' },
      { word: 'choose', pronunciation: 'tʃuːz', meaning: 'chọn' },
      { word: 'chocolate', pronunciation: 'ˈtʃɒklət', meaning: 'sô cô la' },
      { word: 'nature', pronunciation: 'ˈneɪtʃə', meaning: 'thiên nhiên' },
    ],
  },
  {
    symbol: 'dʒ',
    description: "Voiced postalveolar affricate as in 'job'",
    vietnameseDescription:
      "Âm 'j', phát âm bằng cách đặt lưỡi vào sau răng trên và sau đó thả ra với tiếng 'zh', có rung dây thanh. Không có âm tương đương trong tiếng Việt.",
    examples: [
      { word: 'job', pronunciation: 'dʒɒb', meaning: 'công việc' },
      { word: 'bridge', pronunciation: 'brɪdʒ', meaning: 'cây cầu' },
      { word: 'judge', pronunciation: 'dʒʌdʒ', meaning: 'thẩm phán' },
      { word: 'age', pronunciation: 'eɪdʒ', meaning: 'tuổi' },
      { word: 'joke', pronunciation: 'dʒəʊk', meaning: 'trò đùa' },
      { word: 'jump', pronunciation: 'dʒʌmp', meaning: 'nhảy' },
      { word: 'orange', pronunciation: 'ˈɒrɪndʒ', meaning: 'màu cam' },
      { word: 'general', pronunciation: 'ˈdʒenrəl', meaning: 'tổng quát' },
    ],
  },

  // Additional consonants commonly included in English IPA charts

  {
    symbol: 'ʔ',
    description: "Glottal stop as in 'uh-oh'",
    vietnameseDescription:
      "Âm thanh tạo ra khi đóng dây thanh lại rồi bật hơi ra đột ngột. Xuất hiện giữa những từ như 'uh-oh' trong tiếng Anh.",
    examples: [
      { word: 'uh-oh', pronunciation: 'ʌʔəʊ', meaning: 'ồ không' },
      { word: 'button', pronunciation: 'bʌʔn', meaning: 'nút' },
      { word: 'mountain', pronunciation: 'maʊnʔn', meaning: 'núi' },
      { word: 'kitten', pronunciation: 'kɪʔn', meaning: 'mèo con' },
      { word: 'important', pronunciation: 'ɪmˈpɔːʔnt', meaning: 'quan trọng' },
      { word: 'cotton', pronunciation: 'kɒʔn', meaning: 'bông' },
      { word: 'beaten', pronunciation: 'biːʔn', meaning: 'đánh bại' },
      { word: 'forgotten', pronunciation: 'fəˈgɒʔn', meaning: 'quên đi' },
    ],
  },

  {
    symbol: 'ɾ',
    description: "Alveolar tap as in American pronunciation of 'better'",
    vietnameseDescription:
      "Âm 'r' nhẹ, phát âm bằng cách chạm nhanh đầu lưỡi vào sau răng trên. Thường xuất hiện trong cách phát âm tiếng Anh Mỹ.",
    examples: [
      { word: 'better', pronunciation: 'beɾər', meaning: 'tốt hơn' },
      { word: 'water', pronunciation: 'wɔːɾər', meaning: 'nước' },
      { word: 'city', pronunciation: 'sɪɾi', meaning: 'thành phố' },
      { word: 'little', pronunciation: 'lɪɾl', meaning: 'nhỏ' },
      { word: 'party', pronunciation: 'pɑːɾi', meaning: 'bữa tiệc' },
      { word: 'matter', pronunciation: 'mæɾər', meaning: 'vấn đề' },
      { word: 'pretty', pronunciation: 'prɪɾi', meaning: 'xinh đẹp' },
      { word: 'waiting', pronunciation: 'weɪɾɪŋ', meaning: 'đang chờ đợi' },
    ],
  },

  {
    symbol: 'x',
    description: "Voiceless velar fricative as in Scottish 'loch'",
    vietnameseDescription:
      "Âm 'kh', phát âm bằng cách đưa lưỡi gần vòm miệng mềm và thổi hơi ra. Tương tự âm 'kh' trong tiếng Việt.",
    examples: [
      { word: 'loch', pronunciation: 'lɒx', meaning: 'hồ (tiếng Scotland)' },
      { word: 'Bach', pronunciation: 'bax', meaning: 'Bach (nhà soạn nhạc)' },
      { word: 'Chanukah', pronunciation: 'ˈxanəkə', meaning: 'Lễ Hanukkah' },
      { word: 'Reich', pronunciation: 'raɪx', meaning: 'Đế chế' },
      { word: 'chutzpah', pronunciation: 'ˈxʊtspə', meaning: 'táo bạo' },
      {
        word: 'technique',
        pronunciation: 'texˈniːk',
        meaning: 'kỹ thuật (trong một số phương ngữ)',
      },
      { word: 'ech', pronunciation: 'ex', meaning: 'ech (tiếng gọi)' },
      {
        word: 'Kharkiv',
        pronunciation: 'ˈxɑːrkɪv',
        meaning: 'Kharkiv (thành phố)',
      },
    ],
  },

  {
    symbol: 'ɬ',
    description: 'Voiceless alveolar lateral fricative, used in Welsh',
    vietnameseDescription:
      'Âm xát không thanh bên lợi, phát âm bằng cách đặt lưỡi vào sau răng trên và để hơi thoát ra hai bên lưỡi, không có rung dây thanh. Không có âm tương đương trong tiếng Việt.',
    examples: [
      {
        word: 'Lloyd',
        pronunciation: 'ɬɔɪd',
        meaning: 'Lloyd (tên riêng Wales)',
      },
      {
        word: 'Llewellyn',
        pronunciation: 'ɬəˈwɛlɪn',
        meaning: 'Llewellyn (tên riêng Wales)',
      },
      {
        word: 'Llanelli',
        pronunciation: 'ɬaˈnɛɬi',
        meaning: 'Llanelli (thành phố tại Wales)',
      },
      {
        word: 'Ffald-y-Brenin',
        pronunciation: 'faɬd ə ˈbrɛnɪn',
        meaning: 'Ffald-y-Brenin (địa danh tại Wales)',
      },
      {
        word: 'clwb',
        pronunciation: 'kɬʊb',
        meaning: 'câu lạc bộ (tiếng Wales)',
      },
      {
        word: 'tlws',
        pronunciation: 'tɬʊs',
        meaning: 'xinh đẹp (tiếng Wales)',
      },
      { word: 'plwm', pronunciation: 'pɬʊm', meaning: 'chì (tiếng Wales)' },
      { word: 'fflach', pronunciation: 'fɬax', meaning: 'flash (tiếng Wales)' },
    ],
  },
];
