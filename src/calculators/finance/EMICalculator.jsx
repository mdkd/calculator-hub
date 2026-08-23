import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';

export default function EMICalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const p = parseFloat(principal);
    const annualRate = parseFloat(rate);
    const n = parseFloat(tenure);

    if (!principal || !rate || !tenure) {
      setError('Please fill in all fields.');
      return;
    }
    if (p <= 0 || annualRate < 0 || n <= 0) {
      setError('Principal and tenure must be positive; rate cannot be negative.');
      return;
    }
    if (!Number.isInteger(n)) {
      setError('Tenure must be a whole number of months.');
      return;
    }

    const monthlyRate = annualRate / 12 / 100;
    let emi;
    if (monthlyRate === 0) {
      emi = p / n;
    } else {
      const factor = Math.pow(1 + monthlyRate, n);
      emi = (p * monthlyRate * factor) / (factor - 1);
    }
    const totalPayment = emi * n;
    const totalInterest = totalPayment - p;

    setResult({
      emi: emi.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    });
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <label>
          Loan Amount (Principal)
          <input
            type="number"
            min="0"
            step="any"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
            placeholder="e.g. 500000"
          />
        </label>
        <label>
          Annual Interest Rate (%)
          <input
            type="number"
            min="0"
            step="any"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="e.g. 8.5"
          />
        </label>
        <label>
          Tenure (months)
          <input
            type="number"
            min="1"
            step="1"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
            placeholder="e.g. 60"
          />
        </label>
        <button type="submit">Calculate EMI</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>Monthly EMI: ₹{result.emi}</h3>
          <p>Total Payment: ₹{result.totalPayment}</p>
          <p>Total Interest: ₹{result.totalInterest}</p>
        </ResultCard>
      )}
    </div>
  );
}
