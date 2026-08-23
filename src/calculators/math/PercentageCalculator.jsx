import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';

const MODES = {
  OF: 'X% of Y',
  IS_WHAT_PERCENT: 'X is what % of Y',
};

export default function PercentageCalculator() {
  const [mode, setMode] = useState(MODES.OF);
  const [x, setX] = useState('');
  const [y, setY] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const xVal = parseFloat(x);
    const yVal = parseFloat(y);

    if (x === '' || y === '') {
      setError('Please fill in both fields.');
      return;
    }

    if (mode === MODES.OF) {
      setResult(`${xVal}% of ${yVal} is ${((xVal / 100) * yVal).toFixed(2)}`);
    } else {
      if (yVal === 0) {
        setError('Y cannot be zero when dividing.');
        return;
      }
      setResult(`${xVal} is ${((xVal / yVal) * 100).toFixed(2)}% of ${yVal}`);
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
        <label>
          X
          <input type="number" step="any" value={x} onChange={(e) => setX(e.target.value)} placeholder="e.g. 20" />
        </label>
        <label>
          Y
          <input type="number" step="any" value={y} onChange={(e) => setY(e.target.value)} placeholder="e.g. 150" />
        </label>
        <button type="submit">Calculate</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>{result}</h3>
        </ResultCard>
      )}
    </div>
  );
}
