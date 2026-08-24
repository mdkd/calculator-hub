import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';
import { parseNumberList } from './mathUtils.js';

function computeMedian(sorted) {
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function computeMode(numbers) {
  const counts = new Map();
  for (const n of numbers) {
    counts.set(n, (counts.get(n) || 0) + 1);
  }
  const maxCount = Math.max(...counts.values());
  if (maxCount === 1) return 'None (all values are unique)';
  const modes = [...counts.entries()].filter(([, count]) => count === maxCount).map(([n]) => n);
  return modes.join(', ');
}

export default function AverageCalculator() {
  const [numbersText, setNumbersText] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const numbers = parseNumberList(numbersText);

    if (numbers.length === 0) {
      setError('Please enter at least one number.');
      return;
    }
    if (numbers.some((n) => isNaN(n))) {
      setError('Only numbers, separated by commas or spaces, are allowed.');
      return;
    }

    const sum = numbers.reduce((a, b) => a + b, 0);
    const mean = sum / numbers.length;
    const sorted = [...numbers].sort((a, b) => a - b);
    const median = computeMedian(sorted);
    const mode = computeMode(numbers);
    const range = sorted[sorted.length - 1] - sorted[0];

    setResult({
      count: numbers.length,
      sum: sum.toFixed(4).replace(/\.?0+$/, ''),
      mean: mean.toFixed(4).replace(/\.?0+$/, ''),
      median: median.toFixed(4).replace(/\.?0+$/, ''),
      mode,
      range: range.toFixed(4).replace(/\.?0+$/, ''),
    });
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <label>
          Numbers (comma or space separated)
          <input
            type="text"
            value={numbersText}
            onChange={(e) => setNumbersText(e.target.value)}
            placeholder="e.g. 4, 8, 15, 16, 23, 42"
          />
        </label>
        <button type="submit">Calculate</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>Mean (Average): {result.mean}</h3>
          <p>Median: {result.median}</p>
          <p>Mode: {result.mode}</p>
          <p>Range: {result.range}</p>
          <p>Sum: {result.sum}</p>
          <p>Count: {result.count}</p>
        </ResultCard>
      )}
    </div>
  );
}
