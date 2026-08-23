import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';

export default function NPSCalculator() {
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [currentAge, setCurrentAge] = useState('');
  const [rate, setRate] = useState('');
  const [annuityRate, setAnnuityRate] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const RETIREMENT_AGE = 60;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const p = parseFloat(monthlyContribution);
    const age = parseFloat(currentAge);
    const annualRate = parseFloat(rate);
    const annuityPct = parseFloat(annuityRate);

    if (!monthlyContribution || !currentAge || !rate || !annuityRate) {
      setError('Please fill in all fields.');
      return;
    }
    if (p <= 0 || annualRate < 0 || annuityPct < 0) {
      setError('Contribution must be positive; rates cannot be negative.');
      return;
    }
    if (age <= 0 || age >= RETIREMENT_AGE) {
      setError(`Current age must be a positive number less than the retirement age of ${RETIREMENT_AGE}.`);
      return;
    }

    const years = RETIREMENT_AGE - age;
    const n = years * 12;
    const i = annualRate / 12 / 100;
    const corpus = i === 0 ? p * n : p * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);

    const lumpSum = corpus * 0.6;
    const annuityCorpus = corpus * 0.4;
    const monthlyPension = (annuityCorpus * (annuityPct / 100)) / 12;

    setResult({
      years,
      corpus: corpus.toFixed(2),
      lumpSum: lumpSum.toFixed(2),
      annuityCorpus: annuityCorpus.toFixed(2),
      monthlyPension: monthlyPension.toFixed(2),
    });
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <label>
          Monthly Contribution
          <input type="number" min="0" step="any" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} placeholder="e.g. 5000" />
        </label>
        <label>
          Current Age
          <input type="number" min="0" step="1" value={currentAge} onChange={(e) => setCurrentAge(e.target.value)} placeholder="e.g. 30" />
        </label>
        <label>
          Expected Annual Return (%)
          <input type="number" min="0" step="any" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="e.g. 10" />
        </label>
        <label>
          Expected Annuity Rate (%)
          <input type="number" min="0" step="any" value={annuityRate} onChange={(e) => setAnnuityRate(e.target.value)} placeholder="e.g. 6" />
        </label>
        <button type="submit">Calculate NPS Corpus</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>Corpus at Retirement (age {RETIREMENT_AGE}): ₹{result.corpus}</h3>
          <p>Lump Sum Withdrawal (60%): ₹{result.lumpSum}</p>
          <p>Annuity Purchase (40%): ₹{result.annuityCorpus}</p>
          <p>Estimated Monthly Pension: ₹{result.monthlyPension}</p>
        </ResultCard>
      )}
    </div>
  );
}
