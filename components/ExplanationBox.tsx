'use client';

import { FaLightbulb } from 'react-icons/fa';
import React from 'react';

interface ExplanationBoxProps {
  explanation: string;
  isVisible: boolean;
  onToggle: () => void;
}

export const ExplanationBox = React.memo(function ExplanationBox({
  explanation,
  isVisible,
  onToggle,
}: ExplanationBoxProps) {
  return (
    <div>
      <button
        onClick={onToggle}
        className='text-blue-600 text-sm flex items-center mb-2 cursor-pointer'
      >
        <FaLightbulb className='mr-1' />
        {isVisible ? 'Ẩn giải thích' : 'Xem giải thích'}
      </button>

      {isVisible && (
        <div className='p-3 bg-blue-50 rounded text-sm text-gray-700 explanation-box'>
          {explanation}
        </div>
      )}
    </div>
  );
});
