import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';

// New Tax Regime slabs (India, FY 2024-25 / AY 2025-26).
const SLABS = [
  { upTo: 300000, rate: 0 },
  { upTo: 700000, rate: 0.05 },
  { upTo: 1000000, rate: 0.1 },
  { upTo: 1200000, rate: 0.15 },
  { upTo: 1500000, rate: 0.2 },
  { upTo: Infinity, rate: 0.3 },
];

const STANDARD_DEDUCTION = 75000;
const REBATE_THRESHOLD = 700000;
const CESS_RATE = 0.04;

function calculateSlabTax(taxableIncome) {
  let tax = 0;
  let lastLimit = 0;
  for (const slab of SLABS) {
    if (taxableIncome <= lastLimit) break;
    const slabAmount = Math.min(taxableIncome, slab.upTo) - lastLimit;
    tax += slabAmount * slab.rate;
    lastLimit = slab.upTo;
  }
  return tax;
}

export default function IncomeTaxCalculator() {
  const [income, setIncome] = useState('');
  const [isSalaried, setIsSalaried] = useState(true);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const gross = parseFloat(income);
    if (!income) {
      setError('Please enter your annual income.');
      return;
    }
    if (gross < 0) {
      setError('Income cannot be negative.');
      return;
    }

    const deduction = isSalaried ? STANDARD_DEDUCTION : 0;
    const taxableIncome = Math.max(0, gross - deduction);

    let slabTax = calculateSlabTax(taxableIncome);

    // Section 87A rebate: if taxable income is within the threshold, tax is nil.
    const rebateApplied = taxableIncome <= REBATE_THRESHOLD;
    if (rebateApplied) {
      slabTax = 0;
    }

    const cess = slabTax * CESS_RATE;
    const totalTax = slabTax + cess;
    const takeHome = gross - totalTax;

    setResult({
      taxableIncome: taxableIncome.toFixed(2),
      slabTax: slabTax.toFixed(2),
      cess: cess.toFixed(2),
      totalTax: totalTax.toFixed(2),
      takeHome: takeHome.toFixed(2),
      rebateApplied,
    });
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <label>
          Annual Gross Income
          <input type="number" min="0" step="any" value={income} onChange={(e) => setIncome(e.target.value)} placeholder="e.g. 1200000" />
        </label>
        <label className="checkbox-label">
          <input type="checkbox" checked={isSalaried} onChange={(e) => setIsSalaried(e.target.checked)} />
          Salaried (apply ₹75,000 standard deduction)
        </label>
        <button type="submit">Calculate Tax</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>Total Tax Payable: ₹{result.totalTax}</h3>
          <p>Taxable Income: ₹{result.taxableIncome}</p>
          <p>Tax before Cess: ₹{result.slabTax}</p>
          <p>Health &amp; Education Cess (4%): ₹{result.cess}</p>
          <p>Estimated Take-Home: ₹{result.takeHome}</p>
          {result.rebateApplied && <p>Section 87A rebate applied — no tax payable.</p>}
        </ResultCard>
      )}
    </div>
  );
}
