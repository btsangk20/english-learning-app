'use client';

import { useState, useEffect } from 'react';
import {
  FaSearch,
  FaVolumeUp,
  FaBookmark,
  FaRegBookmark,
  FaSpinner,
} from 'react-icons/fa';

interface WordDefinition {
  word: string;
  phonetic?: string;
  phonetics: {
    text?: string;
    audio?: string;
  }[];
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      example?: string;
      synonyms?: string[];
      antonyms?: string[];
    }[];
  }[];
  sourceUrls?: string[];
}

export default function DictionaryPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<WordDefinition[] | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [savedWords, setSavedWords] = useState<string[]>([]);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Load saved words from localStorage on initial render
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedWordsFromStorage = localStorage.getItem(
        'savedDictionaryWords',
      );
      if (savedWordsFromStorage) {
        setSavedWords(JSON.parse(savedWordsFromStorage));
      }

      const recentSearchesFromStorage = localStorage.getItem(
        'recentDictionarySearches',
      );
      if (recentSearchesFromStorage) {
        setRecentSearches(JSON.parse(recentSearchesFromStorage));
      }
    }
  }, []);

  const searchWord = async () => {
    if (!searchTerm.trim()) return;

    setIsLoading(true);
    setError(null);
    setSearchResults(null);

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(
          searchTerm.trim(),
        )}`,
      );

      if (!response.ok) {
        if (response.status === 404) {
          setError(
            `Không tìm thấy từ "${searchTerm}". Vui lòng kiểm tra lại chính tả.`,
          );
        } else {
          setError(`Lỗi: ${response.status}`);
        }
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      setSearchResults(data);

      // Add to recent searches
      if (!recentSearches.includes(searchTerm.trim().toLowerCase())) {
        const newRecentSearches = [
          searchTerm.trim().toLowerCase(),
          ...recentSearches.filter(
            (s) => s !== searchTerm.trim().toLowerCase(),
          ),
        ].slice(0, 10); // Keep only 10 recent searches

        setRecentSearches(newRecentSearches);
        localStorage.setItem(
          'recentDictionarySearches',
          JSON.stringify(newRecentSearches),
        );
      }
    } catch (err) {
      setError('Có lỗi xảy ra khi tìm kiếm. Vui lòng thử lại sau.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchWord();
  };

  const playAudio = (audioUrl: string) => {
    if (!audioUrl) return;
    const audio = new Audio(audioUrl);
    audio.play().catch((err) => console.error('Error playing audio:', err));
  };

  const toggleSaveWord = (word: string) => {
    let newSavedWords;

    if (savedWords.includes(word)) {
      newSavedWords = savedWords.filter((w) => w !== word);
    } else {
      newSavedWords = [...savedWords, word];
    }

    setSavedWords(newSavedWords);
    localStorage.setItem('savedDictionaryWords', JSON.stringify(newSavedWords));
  };

  const handleRecentSearchClick = (term: string) => {
    setSearchTerm(term);
    // Automatically search when a recent term is clicked
    setTimeout(() => {
      searchWord();
    }, 100);
  };

  return (
    <div className='container mx-auto py-8 px-4'>
      <div className='max-w-3xl mx-auto'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold text-gray-800'>Từ Điển</h1>
          <p className='text-gray-600 mt-2'>
            Tra cứu từ vựng, phát âm, nghĩa và ví dụ bằng tiếng Anh.
          </p>
        </div>

        <div className='bg-white rounded-xl shadow-lg p-6 mb-8'>
          <form onSubmit={handleSearch} className='flex mb-6'>
            <input
              type='text'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Nhập từ tiếng Anh cần tra cứu...'
              className='flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button
              type='submit'
              className='bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700 transition flex items-center justify-center'
              disabled={isLoading}
            >
              {isLoading ? (
                <FaSpinner className='animate-spin' />
              ) : (
                <FaSearch />
              )}
            </button>
          </form>

          {recentSearches.length > 0 && (
            <div className='mb-6'>
              <h3 className='text-sm font-medium text-gray-500 mb-2'>
                Tìm kiếm gần đây:
              </h3>
              <div className='flex flex-wrap gap-2'>
                {recentSearches.map((term, index) => (
                  <button
                    key={index}
                    onClick={() => handleRecentSearchClick(term)}
                    className='px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition'
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {isLoading && (
            <div className='text-center py-10'>
              <FaSpinner className='animate-spin text-3xl text-blue-500 mx-auto mb-4' />
              <p>Đang tìm kiếm...</p>
            </div>
          )}

          {error && (
            <div className='text-center py-6 bg-red-50 text-red-600 rounded-lg'>
              {error}
            </div>
          )}

          {searchResults && searchResults.length > 0 && (
            <div>
              {searchResults.map((result, resultIndex) => (
                <div key={resultIndex} className='mb-8'>
                  <div className='flex justify-between items-start'>
                    <div>
                      <h2 className='text-3xl font-bold text-gray-800 mb-1'>
                        {result.word}
                      </h2>
                      {result.phonetic && (
                        <p className='text-gray-600'>{result.phonetic}</p>
                      )}
                    </div>

                    <div className='flex space-x-2'>
                      {result.phonetics &&
                        result.phonetics.find((p) => p.audio) && (
                          <button
                            onClick={() =>
                              playAudio(
                                result.phonetics.find((p) => p.audio)?.audio ||
                                  '',
                              )
                            }
                            className='p-2 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition'
                          >
                            <FaVolumeUp />
                          </button>
                        )}

                      <button
                        onClick={() => toggleSaveWord(result.word)}
                        className={`p-2 rounded-full transition ${
                          savedWords.includes(result.word)
                            ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {savedWords.includes(result.word) ? (
                          <FaBookmark />
                        ) : (
                          <FaRegBookmark />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className='mt-6'>
                    {result.meanings.map((meaning, meaningIndex) => (
                      <div key={meaningIndex} className='mb-6'>
                        <h3 className='text-lg font-semibold text-gray-700 mb-2 italic'>
                          {meaning.partOfSpeech}
                        </h3>

                        <div className='space-y-4'>
                          {meaning.definitions.map((def, defIndex) => (
                            <div
                              key={defIndex}
                              className='pl-4 border-l-2 border-gray-200'
                            >
                              <p className='text-gray-800'>
                                {defIndex + 1}. {def.definition}
                              </p>

                              {def.example && (
                                <p className='text-gray-600 italic mt-1'>
                                  &quot;{def.example}&quot;
                                </p>
                              )}

                              {def.synonyms && def.synonyms.length > 0 && (
                                <div className='mt-2'>
                                  <span className='text-sm text-gray-500'>
                                    Từ đồng nghĩa:{' '}
                                  </span>
                                  <span className='text-blue-600'>
                                    {def.synonyms.slice(0, 5).join(', ')}
                                    {def.synonyms.length > 5 && '...'}
                                  </span>
                                </div>
                              )}

                              {def.antonyms && def.antonyms.length > 0 && (
                                <div className='mt-1'>
                                  <span className='text-sm text-gray-500'>
                                    Từ trái nghĩa:{' '}
                                  </span>
                                  <span className='text-red-600'>
                                    {def.antonyms.slice(0, 5).join(', ')}
                                    {def.antonyms.length > 5 && '...'}
                                  </span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {result.sourceUrls && result.sourceUrls.length > 0 && (
                    <div className='mt-4 text-sm text-gray-500'>
                      <p>Nguồn: {result.sourceUrls[0]}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {savedWords.length > 0 && (
          <div className='bg-white rounded-xl shadow-lg p-6'>
            <h2 className='text-xl font-semibold text-gray-800 mb-4'>
              Từ đã lưu ({savedWords.length})
            </h2>
            <div className='flex flex-wrap gap-2'>
              {savedWords.map((word, index) => (
                <button
                  key={index}
                  onClick={() => handleRecentSearchClick(word)}
                  className='px-4 py-2 bg-yellow-50 text-yellow-700 rounded-lg flex items-center hover:bg-yellow-100 transition'
                >
                  <FaBookmark className='mr-2 text-yellow-600' /> {word}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
