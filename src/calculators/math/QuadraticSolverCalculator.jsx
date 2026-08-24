import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';

function formatNum(n) {
  return Number(n.toFixed(4)).toString();
}

export default function QuadraticSolverCalculator() {
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
    const cVal = parseFloat(c);

    if (a === '' || b === '' || c === '') {
      setError('Please fill in all three coefficients.');
      return;
    }
    if (aVal === 0) {
      setError('Coefficient "a" cannot be zero (this would no longer be a quadratic equation).');
      return;
    }

    const discriminant = bVal * bVal - 4 * aVal * cVal;

    if (discriminant > 0) {
      const sqrtD = Math.sqrt(discriminant);
      const x1 = (-bVal + sqrtD) / (2 * aVal);
      const x2 = (-bVal - sqrtD) / (2 * aVal);
      setResult({ type: 'two-real', x1: formatNum(x1), x2: formatNum(x2), discriminant });
    } else if (discriminant === 0) {
      const x = -bVal / (2 * aVal);
      setResult({ type: 'one-real', x: formatNum(x), discriminant });
    } else {
      const realPart = -bVal / (2 * aVal);
      const imagPart = Math.sqrt(-discriminant) / (2 * aVal);
      setResult({
        type: 'complex',
        realPart: formatNum(realPart),
        imagPart: formatNum(Math.abs(imagPart)),
        sign: imagPart >= 0 ? '+' : '-',
        discriminant,
      });
    }
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <div className="field-row">
          <label>
            a
            <input type="number" step="any" value={a} onChange={(e) => setA(e.target.value)} placeholder="e.g. 1" />
          </label>
          <label>
            b
            <input type="number" step="any" value={b} onChange={(e) => setB(e.target.value)} placeholder="e.g. -3" />
          </label>
          <label>
            c
            <input type="number" step="any" value={c} onChange={(e) => setC(e.target.value)} placeholder="e.g. -4" />
          </label>
        </div>
        <button type="submit">Solve</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && result.type === 'two-real' && (
        <ResultCard>
          <h3>
            x = {result.x1} or x = {result.x2}
          </h3>
          <p>Discriminant: {result.discriminant} (positive → two real roots)</p>
        </ResultCard>
      )}

      {result && result.type === 'one-real' && (
        <ResultCard>
          <h3>x = {result.x} (repeated root)</h3>
          <p>Discriminant: {result.discriminant} (zero → one repeated real root)</p>
        </ResultCard>
      )}

      {result && result.type === 'complex' && (
        <ResultCard>
          <h3>
            x = {result.realPart} {result.sign} {result.imagPart}i (and its conjugate)
          </h3>
          <p>Discriminant: {result.discriminant} (negative → two complex roots)</p>
        </ResultCard>
      )}
    </div>
  );
}
