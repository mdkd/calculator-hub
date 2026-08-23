import { useMemo, useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';

export default function CharacterCounter() {
  const [text, setText] = useState('');
  const [limit, setLimit] = useState('280');

  const stats = useMemo(() => {
    const withSpaces = text.length;
    const withoutSpaces = text.replace(/\s/g, '').length;
    const limitNum = parseFloat(limit);
    const hasLimit = limit !== '' && !isNaN(limitNum) && limitNum >= 0;
    const remaining = hasLimit ? limitNum - withSpaces : null;

    return { withSpaces, withoutSpaces, hasLimit, remaining };
  }, [text, limit]);

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
        <label>
          Character Limit (optional)
          <input
            type="number"
            min="0"
            step="1"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            placeholder="e.g. 280"
          />
        </label>
      </div>

      <ResultCard>
        <h3>{stats.withSpaces} characters (with spaces)</h3>
        <p>Without spaces: {stats.withoutSpaces}</p>
        {stats.hasLimit && (
          <p className={stats.remaining < 0 ? 'limit-exceeded' : ''}>
            {stats.remaining >= 0
              ? `${stats.remaining} characters remaining`
              : `${Math.abs(stats.remaining)} characters over limit`}
          </p>
        )}
      </ResultCard>
    </div>
  );
}
