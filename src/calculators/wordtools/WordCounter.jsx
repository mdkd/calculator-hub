import { useMemo, useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';

const WORDS_PER_MINUTE = 200;

export default function WordCounter() {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/\s+/) : [];
    const sentences = trimmed ? trimmed.split(/[.!?]+/).filter((s) => s.trim().length > 0) : [];
    const paragraphs = trimmed ? trimmed.split(/\n+/).filter((p) => p.trim().length > 0) : [];
    const readingMinutes = words.length / WORDS_PER_MINUTE;

    return {
      words: words.length,
      sentences: sentences.length,
      paragraphs: paragraphs.length,
      readingTime: readingMinutes < 1 ? '< 1 min' : `${Math.ceil(readingMinutes)} min`,
    };
  }, [text]);

  return (
    <div className="calculator">
      <div className="calculator-form">
        <label>
          Your Text
          <textarea
            className="text-area-input"
            rows={10}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste or type your text here..."
          />
        </label>
      </div>

      <ResultCard>
        <h3>{stats.words} words</h3>
        <p>Sentences: {stats.sentences}</p>
        <p>Paragraphs: {stats.paragraphs}</p>
        <p>Estimated Reading Time: {stats.readingTime}</p>
      </ResultCard>
    </div>
  );
}
