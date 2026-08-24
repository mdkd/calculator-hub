import { useEffect, useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';

function getRemaining(target) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function CountdownCalculator() {
  const [targetDate, setTargetDate] = useState('');
  const [targetTime, setTargetTime] = useState('');
  const [error, setError] = useState('');
  const [target, setTarget] = useState(null);
  const [remaining, setRemaining] = useState(null);

  useEffect(() => {
    if (!target) return undefined;

    setRemaining(getRemaining(target));
    const interval = setInterval(() => {
      setRemaining(getRemaining(target));
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setTarget(null);
    setRemaining(null);

    if (!targetDate) {
      setError('Please select a target date.');
      return;
    }

    const dateTimeString = `${targetDate}T${targetTime || '00:00'}:00`;
    const targetDateTime = new Date(dateTimeString);

    if (targetDateTime.getTime() <= Date.now()) {
      setError('Please choose a date and time in the future.');
      return;
    }

    setTarget(targetDateTime);
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <div className="field-row">
          <label>
            Target Date
            <input type="date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} />
          </label>
          <label>
            Target Time (optional)
            <input type="time" value={targetTime} onChange={(e) => setTargetTime(e.target.value)} />
          </label>
        </div>
        <button type="submit">Start Countdown</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {remaining && (
        <ResultCard>
          <h3>
            {remaining.days}d {remaining.hours}h {remaining.minutes}m {remaining.seconds}s remaining
          </h3>
        </ResultCard>
      )}

      {target && !remaining && (
        <ResultCard>
          <h3>The target date and time has arrived!</h3>
        </ResultCard>
      )}
    </div>
  );
}
