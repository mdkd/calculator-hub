import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';
import { gcd } from './mathUtils.js';

const OPERATIONS = ['+', '−', '×', '÷'];

export default function FractionCalculator() {
  const [num1, setNum1] = useState('');
  const [den1, setDen1] = useState('');
  const [operation, setOperation] = useState('+');
  const [num2, setNum2] = useState('');
  const [den2, setDen2] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const a = parseInt(num1, 10);
    const b = parseInt(den1, 10);
    const c = parseInt(num2, 10);
    const d = parseInt(den2, 10);

    if (num1 === '' || den1 === '' || num2 === '' || den2 === '') {
      setError('Please fill in both fractions.');
      return;
    }
    if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c) || !Number.isInteger(d)) {
      setError('Numerators and denominators must be whole numbers.');
      return;
    }
    if (b === 0 || d === 0) {
      setError('A denominator cannot be zero.');
      return;
    }

    let resultNum, resultDen;
    switch (operation) {
      case '+':
        resultNum = a * d + c * b;
        resultDen = b * d;
        break;
      case '−':
        resultNum = a * d - c * b;
        resultDen = b * d;
        break;
      case '×':
        resultNum = a * c;
        resultDen = b * d;
        break;
      case '÷':
        if (c === 0) {
          setError('Cannot divide by a fraction with a numerator of zero.');
          return;
        }
        resultNum = a * d;
        resultDen = b * c;
        break;
      default:
        return;
    }

    if (resultDen < 0) {
      resultNum = -resultNum;
      resultDen = -resultDen;
    }

    const divisor = gcd(resultNum, resultDen) || 1;
    const simplifiedNum = resultNum / divisor;
    const simplifiedDen = resultDen / divisor;

    setResult({
      num: simplifiedNum,
      den: simplifiedDen,
      decimal: (simplifiedNum / simplifiedDen).toFixed(4).replace(/\.?0+$/, ''),
    });
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <div className="field-row">
          <label>
            Numerator 1
            <input type="number" step="1" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="e.g. 1" />
          </label>
          <label>
            Denominator 1
            <input type="number" step="1" value={den1} onChange={(e) => setDen1(e.target.value)} placeholder="e.g. 2" />
          </label>
        </div>

        <label>
          Operation
          <select value={operation} onChange={(e) => setOperation(e.target.value)}>
            {OPERATIONS.map((op) => (
              <option key={op} value={op}>
                {op}
              </option>
            ))}
          </select>
        </label>

        <div className="field-row">
          <label>
            Numerator 2
            <input type="number" step="1" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="e.g. 1" />
          </label>
          <label>
            Denominator 2
            <input type="number" step="1" value={den2} onChange={(e) => setDen2(e.target.value)} placeholder="e.g. 3" />
          </label>
        </div>

        <button type="submit">Calculate</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>
            Result: {result.num} / {result.den}
          </h3>
          <p>Decimal: {result.decimal}</p>
        </ResultCard>
      )}
    </div>
  );
}
