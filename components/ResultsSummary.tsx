'use client';

import React from 'react';

interface ResultsSummaryProps {
  correct: number;
  total: number;
  percentage: number;
}

export const ResultsSummary = React.memo(function ResultsSummary({
  correct,
  total,
  percentage,
}: ResultsSummaryProps) {
  // Determine feedback based on score
  let feedback = '';
  let colorClass = '';

  if (percentage >= 90) {
    feedback = 'Xuất sắc! Bạn đã nắm vững chủ đề này.';
    colorClass = 'text-green-700';
  } else if (percentage >= 70) {
    feedback = 'Tốt! Bạn đã hiểu phần lớn chủ đề này.';
    colorClass = 'text-green-600';
  } else if (percentage >= 50) {
    feedback = 'Khá tốt. Hãy xem lại những điểm còn thiếu.';
    colorClass = 'text-yellow-600';
  } else {
    feedback = 'Hãy ôn tập thêm về chủ đề này.';
    colorClass = 'text-red-600';
  }

  return (
    <div className='mb-6 p-4 bg-blue-50 rounded-lg'>
      <p className='text-lg font-medium text-center'>
        Kết quả: {correct}/{total} câu đúng ({percentage}%)
      </p>
      <p className={`text-center mt-2 ${colorClass}`}>{feedback}</p>
    </div>
  );
});

