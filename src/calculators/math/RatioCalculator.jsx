import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';
import { gcd } from './mathUtils.js';

const MODES = {
  SIMPLIFY: 'Simplify a Ratio',
  SOLVE: 'Solve a Proportion',
};

export default function RatioCalculator() {
  const [mode, setMode] = useState(MODES.SIMPLIFY);
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const aVal = parseFloat(a);
    const bVal = parseFloat(b);

    if (a === '' || b === '') {
      setError('Please fill in all fields.');
      return;
    }
    if (aVal <= 0 || bVal <= 0) {
      setError('Ratio values must be positive numbers.');
      return;
    }

    if (mode === MODES.SIMPLIFY) {
      const divisor = gcd(aVal, bVal);
      setResult({ type: 'simplify', a: aVal / divisor, b: bVal / divisor });
    } else {
      const cVal = parseFloat(c);
      if (c === '') {
        setError('Please fill in all fields.');
        return;
      }
      if (cVal <= 0) {
        setError('Ratio values must be positive numbers.');
        return;
      }
      const x = (bVal * cVal) / aVal;
      setResult({ type: 'solve', a: aVal, b: bVal, c: cVal, x });
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
        {mode === MODES.SIMPLIFY ? (
          <div className="field-row">
            <label>
              A
              <input type="number" min="0" step="any" value={a} onChange={(e) => setA(e.target.value)} placeholder="e.g. 8" />
            </label>
            <label>
              B
              <input type="number" min="0" step="any" value={b} onChange={(e) => setB(e.target.value)} placeholder="e.g. 12" />
            </label>
          </div>
        ) : (
          <div className="field-row">
            <label>
              A
              <input type="number" min="0" step="any" value={a} onChange={(e) => setA(e.target.value)} placeholder="e.g. 2" />
            </label>
            <label>
              B
              <input type="number" min="0" step="any" value={b} onChange={(e) => setB(e.target.value)} placeholder="e.g. 3" />
            </label>
            <label>
              C
              <input type="number" min="0" step="any" value={c} onChange={(e) => setC(e.target.value)} placeholder="e.g. 10" />
            </label>
          </div>
        )}
        <button type="submit">Calculate</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && result.type === 'simplify' && (
        <ResultCard>
          <h3>
            Simplified Ratio: {result.a} : {result.b}
          </h3>
        </ResultCard>
      )}

      {result && result.type === 'solve' && (
        <ResultCard>
          <h3>
            {result.a} : {result.b} = {result.c} : {result.x}
          </h3>
          <p>X = {result.x}</p>
        </ResultCard>
      )}
    </div>
  );
}
