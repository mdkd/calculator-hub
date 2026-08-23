import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const p = parseFloat(monthlyInvestment);
    const annualRate = parseFloat(rate);
    const y = parseFloat(years);

    if (!monthlyInvestment || !rate || !years) {
      setError('Please fill in all fields.');
      return;
    }
    if (p <= 0 || annualRate < 0 || y <= 0) {
      setError('Monthly investment and tenure must be positive; rate cannot be negative.');
      return;
    }

    const n = y * 12;
    const i = annualRate / 12 / 100;
    let futureValue;
    if (i === 0) {
      futureValue = p * n;
    } else {
      futureValue = p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    }
    const invested = p * n;
    const returns = futureValue - invested;

    setResult({
      futureValue: futureValue.toFixed(2),
      invested: invested.toFixed(2),
      returns: returns.toFixed(2),
    });
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <label>
          Monthly Investment
          <input type="number" min="0" step="any" value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(e.target.value)} placeholder="e.g. 5000" />
        </label>
        <label>
          Expected Annual Return (%)
          <input type="number" min="0" step="any" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="e.g. 12" />
        </label>
        <label>
          Investment Duration (years)
          <input type="number" min="0" step="any" value={years} onChange={(e) => setYears(e.target.value)} placeholder="e.g. 10" />
        </label>
        <button type="submit">Calculate SIP Returns</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>Maturity Value: ₹{result.futureValue}</h3>
          <p>Total Invested: ₹{result.invested}</p>
          <p>Estimated Returns: ₹{result.returns}</p>
        </ResultCard>
      )}
    </div>
  );
}
