import * as cheerio from 'cheerio';

import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { word: string; index: string } },
) {
  try {
    const { word, index } = params;
    const url = `https://www.oxfordlearnersdictionaries.com/definition/english/${word}_${index}`;

    const res = await fetch(url);
    if (!res.ok) {
      return NextResponse.json({ error: 'Không tìm thấy từ' }, { status: 404 });
    }

    const html = await res.text();
    const $ = cheerio.load(html);

    // Lấy IPA (Anh - Anh)
    const ipa = $('.phonetics .phons_br .phon').first().text().trim();

    // Lấy IPA (Anh - Mỹ)
    const ipaUs = $('.phonetics .phons_n_am .phon').first().text().trim();

    // Lấy hết ví dụ
    const examples: string[] = [];
    $('.examples .x').each((i, el) => {
      examples.push($(el).text().trim());
    });

    $('.collapse .unbox .examples li .unx').each((i, el) => {
      examples.push($(el).text().trim());
    });

    return NextResponse.json({ word, ipa, ipaUs, examples }, { status: 200 });
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu từ Oxford:', error);
    return NextResponse.json({ error: 'Lỗi server' }, { status: 500 });
  }
}
