import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';
import { parseLocalDate } from './dateUtils.js';

export default function DateDifferenceCalculator() {
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

    const totalDays = Math.round((to - from) / (1000 * 60 * 60 * 24));

    let years = to.getFullYear() - from.getFullYear();
    let months = to.getMonth() - from.getMonth();
    let days = to.getDate() - from.getDate();

    if (days < 0) {
      months -= 1;
      const daysInPrevMonth = new Date(to.getFullYear(), to.getMonth(), 0).getDate();
      days += daysInPrevMonth;
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setResult({
      totalDays,
      totalWeeks: (totalDays / 7).toFixed(1),
      years,
      months,
      days,
      swapped,
    });
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
        <button type="submit">Calculate Difference</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>
            {result.years} years, {result.months} months, {result.days} days
          </h3>
          <p>Total: {result.totalDays} days ({result.totalWeeks} weeks)</p>
          {result.swapped && <p>Note: end date was before start date, so the dates were swapped for this calculation.</p>}
        </ResultCard>
      )}
    </div>
  );
}
