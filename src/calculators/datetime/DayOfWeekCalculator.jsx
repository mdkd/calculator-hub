import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';
import { parseLocalDate } from './dateUtils.js';

export default function DayOfWeekCalculator() {
  const [dateValue, setDateValue] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (!dateValue) {
      setError('Please select a date.');
      return;
    }

    const date = parseLocalDate(dateValue);
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    const formatted = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    setResult({ dayName, formatted });
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <label>
          Date
          <input type="date" value={dateValue} onChange={(e) => setDateValue(e.target.value)} />
        </label>
        <button type="submit">Find Day</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>{result.formatted} was/is a {result.dayName}</h3>
        </ResultCard>
      )}
    </div>
  );
}
