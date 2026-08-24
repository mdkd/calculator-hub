import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';
import { parseLocalDate, formatIsoLocal } from './dateUtils.js';

const UNITS = ['Days', 'Weeks', 'Months', 'Years'];

export default function DateAddSubtractCalculator() {
  const [startDate, setStartDate] = useState('');
  const [amount, setAmount] = useState('');
  const [unit, setUnit] = useState('Days');
  const [operation, setOperation] = useState('add');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (!startDate) {
      setError('Please select a date.');
      return;
    }
    const n = parseInt(amount, 10);
    if (amount === '' || isNaN(n) || n < 0 || !Number.isInteger(Number(amount))) {
      setError('Please enter a non-negative whole number.');
      return;
    }

    const signedN = operation === 'add' ? n : -n;
    const date = parseLocalDate(startDate);

    switch (unit) {
      case 'Days':
        date.setDate(date.getDate() + signedN);
        break;
      case 'Weeks':
        date.setDate(date.getDate() + signedN * 7);
        break;
      case 'Months':
        date.setMonth(date.getMonth() + signedN);
        break;
      case 'Years':
        date.setFullYear(date.getFullYear() + signedN);
        break;
      default:
        break;
    }

    const formatted = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    setResult({ formatted, iso: formatIsoLocal(date) });
  };

  return (
    <div className="calculator">
      <div className="mode-toggle">
        <button type="button" className={operation === 'add' ? 'active' : ''} onClick={() => setOperation('add')}>
          Add
        </button>
        <button type="button" className={operation === 'subtract' ? 'active' : ''} onClick={() => setOperation('subtract')}>
          Subtract
        </button>
      </div>

      <form onSubmit={handleSubmit} className="calculator-form">
        <label>
          Start Date
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        </label>
        <div className="field-row">
          <label>
            Amount
            <input type="number" min="0" step="1" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="e.g. 90" />
          </label>
          <label>
            Unit
            <select value={unit} onChange={(e) => setUnit(e.target.value)}>
              {UNITS.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button type="submit">Calculate</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>{result.formatted}</h3>
          <p>{result.iso}</p>
        </ResultCard>
      )}
    </div>
  );
}
