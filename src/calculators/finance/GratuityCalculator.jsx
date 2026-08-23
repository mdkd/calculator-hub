import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';

const GRATUITY_CAP = 2000000; // Statutory ceiling under the Payment of Gratuity Act, 1972

export default function GratuityCalculator() {
  const [salary, setSalary] = useState('');
  const [years, setYears] = useState('');
  const [months, setMonths] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const s = parseFloat(salary);
    const y = parseFloat(years || 0);
    const m = parseFloat(months || 0);

    if (!salary || (!years && !months)) {
      setError('Please enter your salary and years of service.');
      return;
    }
    if (s <= 0 || y < 0 || m < 0 || m >= 12) {
      setError('Salary must be positive; months of service must be between 0 and 11.');
      return;
    }

    // Round to the nearest year: 6 or more extra months rounds up.
    const roundedYears = m >= 6 ? y + 1 : y;

    const rawGratuity = (s * 15 * roundedYears) / 26;
    const gratuity = Math.min(rawGratuity, GRATUITY_CAP);
    const eligible = y + m / 12 >= 5;

    setResult({
      roundedYears,
      gratuity: gratuity.toFixed(2),
      capped: rawGratuity > GRATUITY_CAP,
      eligible,
    });
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <label>
          Last Drawn Monthly Salary (Basic + DA)
          <input type="number" min="0" step="any" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="e.g. 50000" />
        </label>
        <div className="field-row">
          <label>
            Years of Service
            <input type="number" min="0" step="1" value={years} onChange={(e) => setYears(e.target.value)} placeholder="e.g. 12" />
          </label>
          <label>
            Extra Months
            <input type="number" min="0" max="11" step="1" value={months} onChange={(e) => setMonths(e.target.value)} placeholder="e.g. 7" />
          </label>
        </div>
        <button type="submit">Calculate Gratuity</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>Gratuity Payable: ₹{result.gratuity}</h3>
          <p>Rounded Years of Service Used: {result.roundedYears}</p>
          {result.capped && <p>Statutory ceiling of ₹20,00,000 applied.</p>}
          {!result.eligible && <p>Note: Under the Payment of Gratuity Act, a minimum of 5 years of continuous service is usually required for eligibility.</p>}
        </ResultCard>
      )}
    </div>
  );
}
