import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';
import timezones from './timezoneData.js';

// Returns the given IANA zone's offset from UTC (in minutes) at the instant `date` represents.
function getOffsetMinutes(date, timeZone) {
  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  const parts = dtf.formatToParts(date).reduce((acc, p) => {
    acc[p.type] = p.value;
    return acc;
  }, {});
  const asUTC = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second);
  return (asUTC - date.getTime()) / 60000;
}

// Converts a wall-clock date/time as observed in `timeZone` into the true UTC instant.
function zonedWallTimeToUtc(year, month, day, hour, minute, timeZone) {
  const guess = Date.UTC(year, month - 1, day, hour, minute);
  const offset = getOffsetMinutes(new Date(guess), timeZone);
  return new Date(guess - offset * 60000);
}

export default function TimeZoneConverter() {
  const [dateValue, setDateValue] = useState('');
  const [timeValue, setTimeValue] = useState('');
  const [fromZone, setFromZone] = useState('Asia/Kolkata');
  const [toZone, setToZone] = useState('America/New_York');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (!dateValue || !timeValue) {
      setError('Please fill in the date and time.');
      return;
    }

    const [year, month, day] = dateValue.split('-').map(Number);
    const [hour, minute] = timeValue.split(':').map(Number);

    const utcInstant = zonedWallTimeToUtc(year, month, day, hour, minute, fromZone);

    const formatted = utcInstant.toLocaleString('en-US', {
      timeZone: toZone,
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    setResult({ formatted });
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <div className="field-row">
          <label>
            Date
            <input type="date" value={dateValue} onChange={(e) => setDateValue(e.target.value)} />
          </label>
          <label>
            Time
            <input type="time" value={timeValue} onChange={(e) => setTimeValue(e.target.value)} />
          </label>
        </div>

        <div className="field-row">
          <label>
            From
            <select value={fromZone} onChange={(e) => setFromZone(e.target.value)}>
              {timezones.map((tz) => (
                <option key={tz.id} value={tz.id}>
                  {tz.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            To
            <select value={toZone} onChange={(e) => setToZone(e.target.value)}>
              {timezones.map((tz) => (
                <option key={tz.id} value={tz.id}>
                  {tz.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button type="submit">Convert</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>{result.formatted}</h3>
        </ResultCard>
      )}
    </div>
  );
}
