import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';
import dictionary from './dictionary.js';

function sortLetters(word) {
  return word.toLowerCase().split('').sort().join('');
}

function letterCounts(str) {
  const counts = {};
  for (const ch of str) {
    counts[ch] = (counts[ch] || 0) + 1;
  }
  return counts;
}

function canBeFormed(word, rackCounts) {
  const wordCounts = letterCounts(word);
  for (const letter in wordCounts) {
    if ((rackCounts[letter] || 0) < wordCounts[letter]) {
      return false;
    }
  }
  return true;
}

export default function WordUnscrambler() {
  const [jumble, setJumble] = useState('');
  const [useAllLetters, setUseAllLetters] = useState(true);
  const [length, setLength] = useState('');
  const [startsWith, setStartsWith] = useState('');
  const [endsWith, setEndsWith] = useState('');
  const [error, setError] = useState('');
  const [matches, setMatches] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMatches(null);

    const cleaned = jumble.trim().toLowerCase();
    const prefix = startsWith.trim().toLowerCase();
    const suffix = endsWith.trim().toLowerCase();

    if (!cleaned) {
      setError('Please enter some letters.');
      return;
    }
    if (!/^[a-z]+$/.test(cleaned)) {
      setError('Letters must contain only A-Z.');
      return;
    }
    if (prefix && !/^[a-z]+$/.test(prefix)) {
      setError('"Starts with" must contain only A-Z.');
      return;
    }
    if (suffix && !/^[a-z]+$/.test(suffix)) {
      setError('"Ends with" must contain only A-Z.');
      return;
    }

    let lengthFilter = null;
    if (!useAllLetters && length) {
      lengthFilter = parseInt(length, 10);
      if (isNaN(lengthFilter) || lengthFilter <= 0) {
        setError('Word length must be a positive whole number.');
        return;
      }
      if (lengthFilter > cleaned.length) {
        setError('Word length cannot be greater than the number of letters entered.');
        return;
      }
    }

    let candidates;
    if (useAllLetters) {
      const key = sortLetters(cleaned);
      candidates = dictionary.filter((word) => word.length === cleaned.length && sortLetters(word) === key);
    } else {
      const rackCounts = letterCounts(cleaned);
      candidates = dictionary.filter((word) => {
        if (word.length > cleaned.length) return false;
        if (lengthFilter && word.length !== lengthFilter) return false;
        return canBeFormed(word, rackCounts);
      });
    }

    if (prefix) {
      candidates = candidates.filter((word) => word.startsWith(prefix));
    }
    if (suffix) {
      candidates = candidates.filter((word) => word.endsWith(suffix));
    }

    setMatches(candidates);
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <label>
          Jumbled Letters
          <input
            type="text"
            value={jumble}
            onChange={(e) => setJumble(e.target.value)}
            placeholder="e.g. tca"
          />
        </label>

        <label className="checkbox-label">
          <input type="checkbox" checked={useAllLetters} onChange={(e) => setUseAllLetters(e.target.checked)} />
          Use all letters (exact anagram)
        </label>

        {!useAllLetters && (
          <label>
            Word Length (optional)
            <input
              type="number"
              min="1"
              step="1"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              placeholder="e.g. 3"
            />
          </label>
        )}

        <div className="field-row">
          <label>
            Starts With (optional)
            <input type="text" value={startsWith} onChange={(e) => setStartsWith(e.target.value)} placeholder="e.g. c" />
          </label>
          <label>
            Ends With (optional)
            <input type="text" value={endsWith} onChange={(e) => setEndsWith(e.target.value)} placeholder="e.g. t" />
          </label>
        </div>

        <button type="submit">Unscramble</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {matches && (
        <ResultCard>
          {matches.length > 0 ? (
            <>
              <h3>Possible words ({matches.length}):</h3>
              <p className="word-list">{matches.join(', ')}</p>
            </>
          ) : (
            <h3>No matches found in the built-in dictionary.</h3>
          )}
        </ResultCard>
      )}
    </div>
  );
}
