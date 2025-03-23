'use client';

import { useEffect } from 'react';

interface WordData {
  word: string;
  type: string;
  wordIndex: number;
  pronunciation: string;
  pronunciationUs: string;
  meaning: string;
  examples: string[];
}

export default function ReadWordsFile() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/words_indexed.json');
        const data: WordData[] = await response.json();

        const enrichedData = [];
        for (const wordObj of data) {
          const formattedWord = formatForURL(wordObj.word);
          const formattedType = formatForURL(wordObj.type);
          try {
            const response = await getVietnameseMeaning(
              formattedWord,
              formattedType,
            );

            const meaning = response?.map((item) => item.meaning).join(', ');
            const examples = response?.flatMap((item) => item.examples) || [];

            const oxfordData = await fetchOxfordData(
              formattedWord,
              wordObj.wordIndex,
            );

            const oxfordExamples = oxfordData?.examples || [];

            const word = {
              ...wordObj,
              pronunciation: oxfordData?.ipa || '',
              pronunciationUs: oxfordData?.ipaUs || '',
              meaning,
              examples: [...oxfordExamples, ...examples],
            };

            enrichedData.push(word);
          } catch (innerError) {
            console.error(`Lỗi khi xử lý từ "${wordObj.word}":`, innerError);
          }
        }

        downloadJSON(enrichedData);
      } catch (error) {
        console.error('Lỗi khi đọc file JSON:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Dữ liệu JSON đã xử lý:</h2>
    </div>
  );
}

function formatForURL(text: string): string {
  return text.includes(' ') ? text.replace(/\s+/g, '-') : text;
}

async function getVietnameseMeaning(
  word: string,
  type: string,
): Promise<
  {
    meaning: string;
    examples: string[];
  }[]
> {
  try {
    const response = await fetch(`/api/cambridge/${word}/${type}`);
    const data = await response.json();
    return data.meanings || [];
  } catch (error) {
    console.error(`Lỗi khi lấy nghĩa từ Cambridge cho từ ${word}:`, error);
    return [{ meaning: 'Không có nghĩa.', examples: [] }];
  }
}

// Hàm lấy dữ liệu từ Oxford API
const fetchOxfordData = async (word: string, index: number) => {
  try {
    const res = await fetch(`/api/oxford/${word}/${index}`);
    return await res.json();
  } catch (error) {
    console.error(`Lỗi khi gọi API Oxford cho từ ${word}_${index}:`, error);
    return null;
  }
};

// Hàm tải xuống file JSON
function downloadJSON(data: WordData[]) {
  const jsonData = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonData], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'words_processed.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

