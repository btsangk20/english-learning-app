import * as cheerio from 'cheerio';

import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { word: string; type: string } },
) {
  const { word, type } = await params;
  const revertType = type.replace(/-/g, ' ');
  const url = `https://dictionary.cambridge.org/dictionary/english-vietnamese/${word}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      return NextResponse.json({ error: 'Không tìm thấy từ' }, { status: 404 });
    }

    const html = await res.text();
    const $ = cheerio.load(html);

    const meanings: { meaning: string; examples: string[] }[] = [];

    // Duyệt qua từng khối nghĩa
    $('.dictionary').each((_, el) => {
      const foundTypes = $(el)
        .find('.dpos')
        .map((i, elem) => $(elem).text().trim())
        .get(); // Lấy tất cả loại từ

      console.log('foundTypes', word, revertType, foundTypes);

      if (
        foundTypes.some((ft) =>
          ft.toLowerCase().includes(revertType.toLowerCase()),
        )
      ) {
        // Nếu có loại từ trùng, lấy tất cả nghĩa
        $(el)
          .find('.dsense')
          .each((_, sense) => {
            const meaning = $(sense).find('.trans').first().text().trim();
            console.log('meaning', meaning);

            const examples: string[] = [];
            $(sense)
              .find('.dexamp .eg')
              .each((_, ex) => {
                examples.push($(ex).text().trim());
              });

            if (meaning && !meanings.some((m) => m.meaning === meaning)) {
              meanings.push({ meaning, examples });
            }
          });
      }
    });

    // Nếu không tìm thấy nghĩa phù hợp
    if (meanings.length === 0) {
      return NextResponse.json(
        { error: 'Không tìm thấy nghĩa' },
        { status: 404 },
      );
    }

    return NextResponse.json({ word, type, meanings }, { status: 200 });
  } catch (error) {
    console.error(`Lỗi khi lấy nghĩa từ Cambridge cho từ "${word}":`, error);
    return NextResponse.json({ error: 'Lỗi server' }, { status: 500 });
  }
}
