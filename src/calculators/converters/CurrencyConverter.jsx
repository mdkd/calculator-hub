import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';
import currencyRates, { RATES_AS_OF } from './currencyRates.js';

export default function CurrencyConverter() {
  const currencyKeys = Object.keys(currencyRates);
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (amount === '') {
      setError('Please enter an amount.');
      return;
    }
    const v = parseFloat(amount);
    if (isNaN(v) || v < 0) {
      setError('Please enter a valid non-negative amount.');
      return;
    }

    const usdValue = v / currencyRates[fromCurrency].rate;
    const converted = usdValue * currencyRates[toCurrency].rate;
    setResult(converted);
  };

  return (
    <div className="calculator">
      <div className="currency-disclaimer">
        ⚠️ These are static example rates ({RATES_AS_OF}), <strong>not live market rates</strong>. Do not use this
        for real transactions — check a live source (your bank, a currency site) for current rates.
      </div>

      <form onSubmit={handleSubmit} className="calculator-form">
        <label>
          Amount
          <input type="number" min="0" step="any" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="e.g. 100" />
        </label>

        <div className="field-row">
          <label>
            From
            <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
              {currencyKeys.map((key) => (
                <option key={key} value={key}>
                  {currencyRates[key].label}
                </option>
              ))}
            </select>
          </label>
          <label>
            To
            <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
              {currencyKeys.map((key) => (
                <option key={key} value={key}>
                  {currencyRates[key].label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button type="submit">Convert</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result !== null && !error && (
        <ResultCard>
          <h3>
            {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
          </h3>
          <p>(Using static example rates — not live)</p>
        </ResultCard>
      )}
    </div>
  );
}
