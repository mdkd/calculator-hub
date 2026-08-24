import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';
import { parseLocalDate } from './dateUtils.js';

export default function BusinessDaysCalculator() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (!startDate || !endDate) {
      setError('Please select both dates.');
      return;
    }

    let from = parseLocalDate(startDate);
    let to = parseLocalDate(endDate);
    const swapped = from > to;
    if (swapped) {
      [from, to] = [to, from];
    }

    let businessDays = 0;
    let weekendDays = 0;
    const cursor = new Date(from);
    while (cursor <= to) {
      const day = cursor.getDay();
      if (day === 0 || day === 6) {
        weekendDays += 1;
      } else {
        businessDays += 1;
      }
      cursor.setDate(cursor.getDate() + 1);
    }

    setResult({ businessDays, weekendDays, swapped });
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <div className="field-row">
          <label>
            Start Date
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </label>
          <label>
            End Date
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </label>
        </div>
        <button type="submit">Calculate</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>{result.businessDays} business days</h3>
          <p>Weekend days: {result.weekendDays}</p>
          {result.swapped && <p>Note: end date was before start date, so the dates were swapped for this calculation.</p>}
        </ResultCard>
      )}
    </div>
  );
}
