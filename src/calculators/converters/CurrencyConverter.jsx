import { useEffect, useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';
import currencyRates, { FALLBACK_RATES_AS_OF } from './currencyRates.js';

const RATES_API_URL = 'https://open.er-api.com/v6/latest/USD';
const CURRENCY_KEYS = Object.keys(currencyRates);

function buildFallbackRateMap() {
  return CURRENCY_KEYS.reduce((acc, key) => {
    acc[key] = currencyRates[key].fallbackRate;
    return acc;
  }, {});
}

export default function CurrencyConverter() {
  const [rateMap, setRateMap] = useState(buildFallbackRateMap);
  const [rateStatus, setRateStatus] = useState('loading'); // 'loading' | 'live' | 'fallback'
  const [lastUpdated, setLastUpdated] = useState(null);

  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const fetchLiveRates = () => {
    setRateStatus('loading');
    const controller = new AbortController();

    fetch(RATES_API_URL, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error('Request failed');
        return res.json();
      })
      .then((data) => {
        if (data.result !== 'success' || !data.rates) throw new Error('Unexpected response');

        const liveMap = {};
        for (const key of CURRENCY_KEYS) {
          liveMap[key] = data.rates[key] ?? currencyRates[key].fallbackRate;
        }
        setRateMap(liveMap);
        setLastUpdated(data.time_last_update_utc);
        setRateStatus('live');
      })
      .catch(() => {
        setRateMap(buildFallbackRateMap());
        setRateStatus('fallback');
      });

    return controller;
  };

  useEffect(() => {
    const controller = fetchLiveRates();
    return () => controller.abort();
  }, []);

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

    const usdValue = v / rateMap[fromCurrency];
    const converted = usdValue * rateMap[toCurrency];
    setResult(converted);
  };

  return (
    <div className="calculator">
      {rateStatus === 'live' && (
        <div className="currency-status currency-status--live">
          ✓ Live exchange rates as of {lastUpdated} ·{' '}
          <button type="button" className="link-button" onClick={fetchLiveRates}>
            Refresh
          </button>
        </div>
      )}
      {rateStatus === 'loading' && <div className="currency-status">Fetching live exchange rates…</div>}
      {rateStatus === 'fallback' && (
        <div className="currency-status currency-status--warning">
          ⚠️ Couldn't reach the live rate service — showing fallback rates ({FALLBACK_RATES_AS_OF}), which may be
          out of date. Do not use these for real transactions.{' '}
          <button type="button" className="link-button" onClick={fetchLiveRates}>
            Try again
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="calculator-form">
        <label>
          Amount
          <input type="number" min="0" step="any" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="e.g. 100" />
        </label>

        <div className="field-row">
          <label>
            From
            <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
              {CURRENCY_KEYS.map((key) => (
                <option key={key} value={key}>
                  {currencyRates[key].label}
                </option>
              ))}
            </select>
          </label>
          <label>
            To
            <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
              {CURRENCY_KEYS.map((key) => (
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
          {rateStatus !== 'live' && <p>(Using fallback rates — not live)</p>}
        </ResultCard>
      )}
    </div>
  );
}
