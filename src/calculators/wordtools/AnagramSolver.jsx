import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';
import dictionary from './dictionary.js';

const MODES = {
  FIND: 'Find Anagrams',
  COMPARE: 'Compare Two Words',
};

function sortLetters(word) {
  return word.toLowerCase().split('').sort().join('');
}

export default function AnagramSolver() {
  const [mode, setMode] = useState(MODES.FIND);
  const [word, setWord] = useState('');
  const [wordA, setWordA] = useState('');
  const [wordB, setWordB] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (mode === MODES.FIND) {
      const cleaned = word.trim().toLowerCase();
      if (!cleaned) {
        setError('Please enter a word.');
        return;
      }
      if (!/^[a-z]+$/.test(cleaned)) {
        setError('Only letters A-Z are allowed.');
        return;
      }

      const key = sortLetters(cleaned);
      const found = dictionary.filter(
        (w) => w.length === cleaned.length && w !== cleaned && sortLetters(w) === key
      );
      setResult({ type: 'find', matches: found });
    } else {
      const a = wordA.trim().toLowerCase();
      const b = wordB.trim().toLowerCase();
      if (!a || !b) {
        setError('Please enter both words.');
        return;
      }
      if (!/^[a-z]+$/.test(a) || !/^[a-z]+$/.test(b)) {
        setError('Only letters A-Z are allowed.');
        return;
      }

      const areAnagrams = a.length === b.length && sortLetters(a) === sortLetters(b) && a !== b;
      setResult({ type: 'compare', areAnagrams, a, b });
    }
  };

  return (
    <div className="calculator">
      <div className="mode-toggle">
        {Object.values(MODES).map((m) => (
          <button
            key={m}
            type="button"
            className={mode === m ? 'active' : ''}
            onClick={() => {
              setMode(m);
              setResult(null);
              setError('');
            }}
          >
            {m}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="calculator-form">
        {mode === MODES.FIND ? (
          <label>
            Word
            <input type="text" value={word} onChange={(e) => setWord(e.target.value)} placeholder="e.g. listen" />
          </label>
        ) : (
          <div className="field-row">
            <label>
              Word A
              <input type="text" value={wordA} onChange={(e) => setWordA(e.target.value)} placeholder="e.g. listen" />
            </label>
            <label>
              Word B
              <input type="text" value={wordB} onChange={(e) => setWordB(e.target.value)} placeholder="e.g. silent" />
            </label>
          </div>
        )}
        <button type="submit">Solve</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && result.type === 'find' && (
        <ResultCard>
          {result.matches.length > 0 ? (
            <>
              <h3>Anagrams found ({result.matches.length}):</h3>
              <p className="word-list">{result.matches.join(', ')}</p>
            </>
          ) : (
            <h3>No anagrams found in the built-in dictionary.</h3>
          )}
        </ResultCard>
      )}

      {result && result.type === 'compare' && (
        <ResultCard>
          <h3>
            "{result.a}" and "{result.b}" {result.areAnagrams ? 'ARE' : 'are NOT'} anagrams of each other.
          </h3>
        </ResultCard>
      )}
    </div>
  );
}
