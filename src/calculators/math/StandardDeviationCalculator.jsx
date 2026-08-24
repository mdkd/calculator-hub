import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';
import { parseNumberList } from './mathUtils.js';

export default function StandardDeviationCalculator() {
  const [numbersText, setNumbersText] = useState('');
  const [isSample, setIsSample] = useState(true);
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
    if (isSample && numbers.length < 2) {
      setError('Sample standard deviation requires at least two numbers.');
      return;
    }

    const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    const squaredDiffs = numbers.map((n) => (n - mean) ** 2);
    const sumSquaredDiffs = squaredDiffs.reduce((a, b) => a + b, 0);
    const divisor = isSample ? numbers.length - 1 : numbers.length;
    const variance = sumSquaredDiffs / divisor;
    const stdDev = Math.sqrt(variance);

    setResult({
      mean: mean.toFixed(4),
      variance: variance.toFixed(4),
      stdDev: stdDev.toFixed(4),
      count: numbers.length,
    });
  };

  return (
    <div className="calculator">
      <div className="mode-toggle">
        <button type="button" className={isSample ? 'active' : ''} onClick={() => setIsSample(true)}>
          Sample
        </button>
        <button type="button" className={!isSample ? 'active' : ''} onClick={() => setIsSample(false)}>
          Population
        </button>
      </div>

      <form onSubmit={handleSubmit} className="calculator-form">
        <label>
          Numbers (comma or space separated)
          <input
            type="text"
            value={numbersText}
            onChange={(e) => setNumbersText(e.target.value)}
            placeholder="e.g. 2, 4, 4, 4, 5, 5, 7, 9"
          />
        </label>
        <button type="submit">Calculate</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>Standard Deviation: {result.stdDev}</h3>
          <p>Variance: {result.variance}</p>
          <p>Mean: {result.mean}</p>
          <p>Count: {result.count}</p>
        </ResultCard>
      )}
    </div>
  );
}
