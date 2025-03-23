'use client';

import React from 'react';

interface TipsListProps {
  topicTitle?: string;
}

export function TipsList({ topicTitle }: TipsListProps) {
  const generalTips = [
    'Học quy tắc cơ bản trước rồi đến các trường hợp ngoại lệ',
    'Áp dụng ngữ pháp vào việc nói và viết hàng ngày',
    'Đọc nhiều văn bản tiếng Anh để thấy ngữ pháp trong ngữ cảnh thực tế',
    'Làm nhiều bài tập để củng cố kiến thức',
    'Tìm người bản xứ hoặc giáo viên để sửa lỗi ngữ pháp của bạn',
    'Chia nhỏ nội dung học thành các phiên ngắn, học đều đặn tốt hơn học dồn',
    'Ghi chú và tổng hợp lại quy tắc ngữ pháp theo cách dễ hiểu với bạn',
    'Tạo các câu ví dụ của riêng bạn với quy tắc vừa học',
  ];

  return (
    <div className='mt-8 bg-blue-50 p-6 rounded-lg'>
      <h2 className='text-xl font-semibold text-gray-800 mb-2'>
        {topicTitle
          ? `Mẹo học hiệu quả: ${topicTitle}`
          : 'Mẹo học ngữ pháp hiệu quả:'}
      </h2>
      <ul className='space-y-2 text-gray-700'>
        {generalTips.map((tip, index) => (
          <li key={index}>• {tip}</li>
        ))}
      </ul>
    </div>
  );
}

