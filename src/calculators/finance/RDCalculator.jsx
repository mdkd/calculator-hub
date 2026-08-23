import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';

export default function RDCalculator() {
  const [monthlyDeposit, setMonthlyDeposit] = useState('');
  const [rate, setRate] = useState('');
  const [months, setMonths] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const deposit = parseFloat(monthlyDeposit);
    const annualRate = parseFloat(rate);
    const n = parseFloat(months);

    if (!monthlyDeposit || !rate || !months) {
      setError('Please fill in all fields.');
      return;
    }
    if (deposit <= 0 || annualRate < 0 || n <= 0) {
      setError('Monthly deposit and tenure must be positive; rate cannot be negative.');
      return;
    }
    if (!Number.isInteger(n)) {
      setError('Tenure must be a whole number of months.');
      return;
    }

    // Simulate month by month: a deposit is added at the start of each month,
    // and interest is credited on the running balance at the end of every quarter,
    // matching how most Indian banks compound RD interest.
    const quarterlyRate = annualRate / 4 / 100;
    let balance = 0;
    for (let month = 1; month <= n; month++) {
      balance += deposit;
      if (month % 3 === 0) {
        balance += balance * quarterlyRate;
      }
    }

    const invested = deposit * n;
    const interest = balance - invested;

    setResult({
      maturity: balance.toFixed(2),
      invested: invested.toFixed(2),
      interest: interest.toFixed(2),
    });
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <label>
          Monthly Deposit
          <input type="number" min="0" step="any" value={monthlyDeposit} onChange={(e) => setMonthlyDeposit(e.target.value)} placeholder="e.g. 5000" />
        </label>
        <label>
          Annual Interest Rate (%)
          <input type="number" min="0" step="any" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="e.g. 6.5" />
        </label>
        <label>
          Tenure (months)
          <input type="number" min="1" step="1" value={months} onChange={(e) => setMonths(e.target.value)} placeholder="e.g. 24" />
        </label>
        <button type="submit">Calculate RD Maturity</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>Maturity Amount: ₹{result.maturity}</h3>
          <p>Total Deposited: ₹{result.invested}</p>
          <p>Interest Earned: ₹{result.interest}</p>
        </ResultCard>
      )}
    </div>
  );
}
