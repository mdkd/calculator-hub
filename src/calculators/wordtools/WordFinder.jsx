import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';
import dictionary from './dictionary.js';

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

export default function WordFinder() {
  const [letters, setLetters] = useState('');
  const [exactLength, setExactLength] = useState('');
  const [error, setError] = useState('');
  const [matches, setMatches] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setMatches(null);

    const cleaned = letters.trim().toLowerCase();
    if (!cleaned) {
      setError('Please enter your available letters.');
      return;
    }
    if (!/^[a-z]+$/.test(cleaned)) {
      setError('Only letters A-Z are allowed.');
      return;
    }

    const lengthFilter = exactLength ? parseInt(exactLength, 10) : null;
    if (exactLength && (isNaN(lengthFilter) || lengthFilter <= 0)) {
      setError('Word length must be a positive whole number.');
      return;
    }

    const rackCounts = letterCounts(cleaned);
    const found = dictionary.filter((word) => {
      if (word.length > cleaned.length) return false;
      if (lengthFilter && word.length !== lengthFilter) return false;
      return canBeFormed(word, rackCounts);
    });

    found.sort((a, b) => b.length - a.length || a.localeCompare(b));

    setMatches(found);
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <label>
          Available Letters
          <input
            type="text"
            value={letters}
            onChange={(e) => setLetters(e.target.value)}
            placeholder="e.g. tarnise"
          />
        </label>
        <label>
          Exact Word Length (optional)
          <input
            type="number"
            min="1"
            step="1"
            value={exactLength}
            onChange={(e) => setExactLength(e.target.value)}
            placeholder="e.g. 5"
          />
        </label>
        <button type="submit">Find Words</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {matches && (
        <ResultCard>
          {matches.length > 0 ? (
            <>
              <h3>Words found ({matches.length}):</h3>
              <p className="word-list">{matches.join(', ')}</p>
            </>
          ) : (
            <h3>No matching words found in the built-in dictionary.</h3>
          )}
        </ResultCard>
      )}
    </div>
  );
}
