// app/flashcards/page.tsx
import FlashcardDeck from '../../components/FlashcardDeck';
import vocabData from '../../data/vocabData';

export default function FlashcardsPage() {
  return (
    <div className='container mx-auto py-8 px-4'>
      <div className='max-w-4xl mx-auto'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-800'>Flashcards</h1>
          <p className='text-gray-600 mt-2'>
            Lật thẻ để xem nghĩa và ví dụ. Đánh dấu các từ bạn đã thuộc.
          </p>
        </div>

        <FlashcardDeck initialWords={vocabData} />

        <div className='mt-12 bg-blue-50 p-6 rounded-lg'>
          <h2 className='text-xl font-semibold text-gray-800 mb-2'>
            Mẹo học từ vựng hiệu quả:
          </h2>
          <ul className='space-y-2 text-gray-700'>
            <li>
              • Ôn tập ngắt quãng: Học và ôn lại nhiều lần trong khoảng thời
              gian dài.
            </li>
            <li>
              • Phát âm: Đọc to mỗi từ và cố gắng luyện phát âm chính xác.
            </li>
            <li>• Sử dụng trong câu: Tạo câu của riêng bạn với từ vựng mới.</li>
            <li>
              • Liên kết: Kết nối từ mới với từ bạn đã biết hoặc hình ảnh cụ
              thể.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
