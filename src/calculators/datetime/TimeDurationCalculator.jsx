import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';

export default function TimeDurationCalculator() {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (!startTime || !endTime) {
      setError('Please fill in both times.');
      return;
    }

    const [startH, startM] = startTime.split(':').map(Number);
    const [endH, endM] = endTime.split(':').map(Number);

    let startTotalMinutes = startH * 60 + startM;
    let endTotalMinutes = endH * 60 + endM;
    let crossesMidnight = false;

    if (endTotalMinutes < startTotalMinutes) {
      endTotalMinutes += 24 * 60;
      crossesMidnight = true;
    }

    const totalMinutes = endTotalMinutes - startTotalMinutes;
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    setResult({ hours, minutes, totalMinutes, crossesMidnight });
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <div className="field-row">
          <label>
            Start Time
            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          </label>
          <label>
            End Time
            <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
          </label>
        </div>
        <button type="submit">Calculate Duration</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>
            {result.hours}h {result.minutes}m
          </h3>
          <p>Total: {result.totalMinutes} minutes</p>
          {result.crossesMidnight && <p>Note: end time is earlier than start time, so it was treated as being on the next day.</p>}
        </ResultCard>
      )}
    </div>
  );
}
