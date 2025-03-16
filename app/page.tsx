'use client';

// app/page.tsx
import Link from 'next/link';
import {
  FaBook,
  FaQuestionCircle,
  FaHeadphones,
  FaMicrophone,
  FaKeyboard,
  FaSearch,
  FaCalendarDay,
  FaGraduationCap,
  FaChartLine,
} from 'react-icons/fa';
export default function Home() {
  const features = [
    {
      title: 'Flashcards',
      description:
        'Học từ vựng bằng phương pháp thẻ ghi nhớ hai mặt. Lật thẻ, xem nghĩa và ví dụ, đánh dấu từ đã thuộc.',
      icon: <FaBook className='text-blue-600 text-2xl' />,
      link: '/flashcards',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      title: 'Quiz',
      description:
        'Kiểm tra kiến thức của bạn với các câu hỏi đa dạng. Xem kết quả và ôn tập những từ chưa thuộc.',
      icon: <FaQuestionCircle className='text-green-600 text-2xl' />,
      link: '/quiz',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
      buttonColor: 'bg-green-600 hover:bg-green-700',
    },
    {
      title: 'Luyện Nghe',
      description:
        'Cải thiện kỹ năng nghe tiếng Anh thông qua các bài tập nhận biết và phân biệt từ vựng.',
      icon: <FaHeadphones className='text-purple-600 text-2xl' />,
      link: '/listening',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
    },
    {
      title: 'Phát Âm',
      description:
        'Phát âm từ vựng tiếng Anh và nhận phản hồi ngay lập tức, giúp bạn cải thiện phát âm.',
      icon: <FaMicrophone className='text-red-600 text-2xl' />,
      link: '/pronunciation',
      bgColor: 'bg-red-100',
      textColor: 'text-red-600',
      buttonColor: 'bg-red-600 hover:bg-red-700',
    },
    {
      title: 'Gõ Từ',
      description:
        'Luyện gõ từ vựng tiếng Anh để củng cố trí nhớ và cải thiện kỹ năng đánh máy.',
      icon: <FaKeyboard className='text-yellow-600 text-2xl' />,
      link: '/typing',
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-600',
      buttonColor: 'bg-yellow-600 hover:bg-yellow-700',
    },
    {
      title: 'Từ Điển',
      description:
        'Tra cứu nhanh chóng nghĩa, phát âm, và ví dụ của từ vựng tiếng Anh.',
      icon: <FaSearch className='text-indigo-600 text-2xl' />,
      link: '/dictionary',
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-600',
      buttonColor: 'bg-indigo-600 hover:bg-indigo-700',
    },
    {
      title: 'Thử Thách Hàng Ngày',
      description:
        'Rèn luyện thói quen học tập đều đặn với các bài tập mới mỗi ngày.',
      icon: <FaCalendarDay className='text-orange-600 text-2xl' />,
      link: '/daily-challenge',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
      buttonColor: 'bg-orange-600 hover:bg-orange-700',
    },
    {
      title: 'Ngữ Pháp',
      description:
        'Học và luyện tập các quy tắc ngữ pháp tiếng Anh qua bài tập tương tác.',
      icon: <FaGraduationCap className='text-teal-600 text-2xl' />,
      link: '/grammar',
      bgColor: 'bg-teal-100',
      textColor: 'text-teal-600',
      buttonColor: 'bg-teal-600 hover:bg-teal-700',
    },
    {
      title: 'Tiến Độ',
      description:
        'Theo dõi quá trình học tập của bạn với biểu đồ và thống kê cá nhân.',
      icon: <FaChartLine className='text-gray-600 text-2xl' />,
      link: '/progress',
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-600',
      buttonColor: 'bg-gray-600 hover:bg-gray-700',
    },
  ];

  return (
    <main className='container mx-auto py-12 px-4'>
      <section className='text-center mb-16'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
          EnglishGenius
        </h1>
        <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
          Học tiếng Anh hiệu quả với hệ thống đa phương pháp - luyện nghe, nói,
          đọc, viết và từ vựng trong một ứng dụng toàn diện.
        </p>
      </section>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${feature.bgColor} rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition flex flex-col h-full`}
          >
            <div
              className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}
            >
              {feature.icon}
            </div>
            <h2 className='text-2xl font-bold mb-4'>{feature.title}</h2>
            <p className='text-gray-600 mb-6 flex-grow'>
              {feature.description}
            </p>
            <Link
              href={feature.link}
              className={`px-6 py-2 ${feature.buttonColor} text-white rounded-lg transition inline-block`}
            >
              Bắt đầu
            </Link>
          </div>
        ))}
      </div>

      <section className='mt-20 text-center max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10'>
        <h2 className='text-3xl font-bold mb-6 text-gray-800'>
          Tại sao chọn EnglishGenius?
        </h2>
        <div className='grid md:grid-cols-2 gap-6 text-left'>
          <div className='space-y-4'>
            <div className='flex items-start'>
              <span className='mr-2 text-green-600 text-xl'>✓</span>
              <p>
                <span className='font-semibold'>Đa dạng phương pháp:</span> Học
                từ vựng với flashcards, luyện nghe, luyện nói và gõ từ
              </p>
            </div>
            <div className='flex items-start'>
              <span className='mr-2 text-green-600 text-xl'>✓</span>
              <p>
                <span className='font-semibold'>Rèn luyện đồng bộ:</span> Phát
                triển tất cả kỹ năng ngôn ngữ cùng lúc
              </p>
            </div>
            <div className='flex items-start'>
              <span className='mr-2 text-green-600 text-xl'>✓</span>
              <p>
                <span className='font-semibold'>Thử thách hàng ngày:</span> Duy
                trì động lực học tập với mục tiêu ngắn hạn
              </p>
            </div>
          </div>
          <div className='space-y-4'>
            <div className='flex items-start'>
              <span className='mr-2 text-green-600 text-xl'>✓</span>
              <p>
                <span className='font-semibold'>Cá nhân hóa:</span> Theo dõi
                tiến độ và tập trung vào các điểm yếu
              </p>
            </div>
            <div className='flex items-start'>
              <span className='mr-2 text-green-600 text-xl'>✓</span>
              <p>
                <span className='font-semibold'>Tra cứu tức thì:</span> Tìm kiếm
                từ điển tích hợp ngay trong ứng dụng
              </p>
            </div>
            <div className='flex items-start'>
              <span className='mr-2 text-green-600 text-xl'>✓</span>
              <p>
                <span className='font-semibold'>Ngữ pháp tương tác:</span> Học
                quy tắc ngữ pháp thông qua bài tập thực hành
              </p>
            </div>
          </div>
        </div>

        <div className='mt-8'>
          <Link
            href='/flashcards'
            className='px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition inline-block font-medium'
          >
            Bắt đầu học ngay
          </Link>
        </div>
      </section>
    </main>
  );
}

