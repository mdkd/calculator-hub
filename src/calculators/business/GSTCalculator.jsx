import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';

export default function GSTCalculator() {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('');
  const [mode, setMode] = useState('exclusive'); // exclusive = amount + GST added; inclusive = amount already includes GST
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const amt = parseFloat(amount);
    const r = parseFloat(rate);

    if (amount === '' || rate === '') {
      setError('Please fill in both fields.');
      return;
    }
    if (amt < 0 || r < 0) {
      setError('Amount and rate cannot be negative.');
      return;
    }

    let gstAmount, total, base;
    if (mode === 'exclusive') {
      base = amt;
      gstAmount = (amt * r) / 100;
      total = amt + gstAmount;
    } else {
      total = amt;
      base = amt / (1 + r / 100);
      gstAmount = total - base;
    }

    setResult({
      base: base.toFixed(2),
      gstAmount: gstAmount.toFixed(2),
      total: total.toFixed(2),
    });
  };

  return (
    <div className="calculator">
      <div className="mode-toggle">
        <button type="button" className={mode === 'exclusive' ? 'active' : ''} onClick={() => setMode('exclusive')}>
          GST Exclusive
        </button>
        <button type="button" className={mode === 'inclusive' ? 'active' : ''} onClick={() => setMode('inclusive')}>
          GST Inclusive
        </button>
      </div>

      <form onSubmit={handleSubmit} className="calculator-form">
        <label>
          {mode === 'exclusive' ? 'Amount (before GST)' : 'Amount (GST included)'}
          <input type="number" min="0" step="any" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="e.g. 1000" />
        </label>
        <label>
          GST Rate (%)
          <input type="number" min="0" step="any" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="e.g. 18" />
        </label>
        <button type="submit">Calculate</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>Total: ₹{result.total}</h3>
          <p>Base Amount: ₹{result.base}</p>
          <p>GST Amount: ₹{result.gstAmount}</p>
        </ResultCard>
      )}
    </div>
  );
}
