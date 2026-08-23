import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';

const COMPOUNDING_OPTIONS = [
  { label: 'Annually', value: 1 },
  { label: 'Half-yearly', value: 2 },
  { label: 'Quarterly', value: 4 },
  { label: 'Monthly', value: 12 },
];

export default function FDCalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [compounding, setCompounding] = useState(4);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const p = parseFloat(principal);
    const annualRate = parseFloat(rate);
    const t = parseFloat(years);
    const n = parseFloat(compounding);

    if (!principal || !rate || !years) {
      setError('Please fill in all fields.');
      return;
    }
    if (p <= 0 || annualRate < 0 || t <= 0) {
      setError('Principal and tenure must be positive; rate cannot be negative.');
      return;
    }

    const maturity = p * Math.pow(1 + annualRate / 100 / n, n * t);
    const interest = maturity - p;

    setResult({
      maturity: maturity.toFixed(2),
      interest: interest.toFixed(2),
    });
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <label>
          Deposit Amount (Principal)
          <input type="number" min="0" step="any" value={principal} onChange={(e) => setPrincipal(e.target.value)} placeholder="e.g. 100000" />
        </label>
        <label>
          Annual Interest Rate (%)
          <input type="number" min="0" step="any" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="e.g. 7" />
        </label>
        <label>
          Tenure (years)
          <input type="number" min="0" step="any" value={years} onChange={(e) => setYears(e.target.value)} placeholder="e.g. 5" />
        </label>
        <label>
          Compounding Frequency
          <select value={compounding} onChange={(e) => setCompounding(e.target.value)}>
            {COMPOUNDING_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Calculate FD Maturity</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>Maturity Amount: ₹{result.maturity}</h3>
          <p>Interest Earned: ₹{result.interest}</p>
        </ResultCard>
      )}
    </div>
  );
}
