import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';
import { gcd, lcm, parseNumberList } from './mathUtils.js';

export default function LcmGcfCalculator() {
  const [numbersText, setNumbersText] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const numbers = parseNumberList(numbersText);

    if (numbers.length < 2) {
      setError('Please enter at least two numbers.');
      return;
    }
    if (numbers.some((n) => isNaN(n) || !Number.isInteger(n) || n <= 0)) {
      setError('Only positive whole numbers are allowed.');
      return;
    }

    const overallGcf = numbers.reduce((acc, n) => gcd(acc, n));
    const overallLcm = numbers.reduce((acc, n) => lcm(acc, n));

    setResult({ gcf: overallGcf, lcm: overallLcm });
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
            placeholder="e.g. 12, 18, 30"
          />
        </label>
        <button type="submit">Calculate</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>GCF: {result.gcf}</h3>
          <p>LCM: {result.lcm}</p>
        </ResultCard>
      )}
    </div>
  );
}
