import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';

export default function EPFCalculator() {
  const [basicSalary, setBasicSalary] = useState('');
  const [employeeContribution, setEmployeeContribution] = useState('12');
  const [employerContribution, setEmployerContribution] = useState('3.67');
  const [rate, setRate] = useState('8.25');
  const [years, setYears] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const salary = parseFloat(basicSalary);
    const empPct = parseFloat(employeeContribution);
    const erPct = parseFloat(employerContribution);
    const annualRate = parseFloat(rate);
    const y = parseFloat(years);

    if (!basicSalary || !employeeContribution || !employerContribution || !rate || !years) {
      setError('Please fill in all fields.');
      return;
    }
    if (salary <= 0 || empPct < 0 || erPct < 0 || annualRate < 0 || y <= 0) {
      setError('Salary and tenure must be positive; contributions and rate cannot be negative.');
      return;
    }

    const monthlyContribution = salary * ((empPct + erPct) / 100);
    const n = y * 12;
    const i = annualRate / 12 / 100;
    const corpus = i === 0 ? monthlyContribution * n : monthlyContribution * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const invested = monthlyContribution * n;
    const interest = corpus - invested;

    setResult({
      monthlyContribution: monthlyContribution.toFixed(2),
      corpus: corpus.toFixed(2),
      invested: invested.toFixed(2),
      interest: interest.toFixed(2),
    });
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <label>
          Basic Salary + DA (monthly)
          <input type="number" min="0" step="any" value={basicSalary} onChange={(e) => setBasicSalary(e.target.value)} placeholder="e.g. 40000" />
        </label>
        <div className="field-row">
          <label>
            Employee Contribution (%)
            <input type="number" min="0" step="any" value={employeeContribution} onChange={(e) => setEmployeeContribution(e.target.value)} />
          </label>
          <label>
            Employer Contribution to EPF (%)
            <input type="number" min="0" step="any" value={employerContribution} onChange={(e) => setEmployerContribution(e.target.value)} />
          </label>
        </div>
        <label>
          Annual EPF Interest Rate (%)
          <input type="number" min="0" step="any" value={rate} onChange={(e) => setRate(e.target.value)} />
        </label>
        <label>
          Years of Service
          <input type="number" min="0" step="any" value={years} onChange={(e) => setYears(e.target.value)} placeholder="e.g. 25" />
        </label>
        <button type="submit">Calculate EPF Corpus</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>Estimated EPF Corpus: ₹{result.corpus}</h3>
          <p>Combined Monthly Contribution: ₹{result.monthlyContribution}</p>
          <p>Total Contributed: ₹{result.invested}</p>
          <p>Estimated Interest Earned: ₹{result.interest}</p>
        </ResultCard>
      )}
    </div>
  );
}
