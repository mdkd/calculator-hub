import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';

function getCategory(bmi) {
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal weight';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
}

export default function BMICalculator() {
  const [heightUnit, setHeightUnit] = useState('cm');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [heightCm, setHeightCm] = useState('');
  const [heightFt, setHeightFt] = useState('');
  const [heightIn, setHeightIn] = useState('');
  const [weight, setWeight] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    let heightInMeters;
    if (heightUnit === 'cm') {
      const cm = parseFloat(heightCm);
      if (!heightCm || cm <= 0) {
        setError('Please enter a valid positive height.');
        return;
      }
      heightInMeters = cm / 100;
    } else {
      const ft = parseFloat(heightFt || 0);
      const inch = parseFloat(heightIn || 0);
      if ((!heightFt && !heightIn) || ft < 0 || inch < 0 || (ft === 0 && inch === 0)) {
        setError('Please enter a valid positive height.');
        return;
      }
      const totalInches = ft * 12 + inch;
      heightInMeters = totalInches * 0.0254;
    }

    const w = parseFloat(weight);
    if (!weight || w <= 0) {
      setError('Please enter a valid positive weight.');
      return;
    }
    const weightInKg = weightUnit === 'kg' ? w : w * 0.453592;

    const bmi = weightInKg / (heightInMeters * heightInMeters);

    setResult({ bmi: bmi.toFixed(1), category: getCategory(bmi) });
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <div className="mode-toggle">
          <button type="button" className={heightUnit === 'cm' ? 'active' : ''} onClick={() => setHeightUnit('cm')}>
            cm
          </button>
          <button type="button" className={heightUnit === 'ft' ? 'active' : ''} onClick={() => setHeightUnit('ft')}>
            ft/in
          </button>
        </div>

        {heightUnit === 'cm' ? (
          <label>
            Height (cm)
            <input type="number" min="0" step="any" value={heightCm} onChange={(e) => setHeightCm(e.target.value)} placeholder="e.g. 170" />
          </label>
        ) : (
          <div className="field-row">
            <label>
              Feet
              <input type="number" min="0" step="any" value={heightFt} onChange={(e) => setHeightFt(e.target.value)} placeholder="5" />
            </label>
            <label>
              Inches
              <input type="number" min="0" step="any" value={heightIn} onChange={(e) => setHeightIn(e.target.value)} placeholder="7" />
            </label>
          </div>
        )}

        <div className="mode-toggle">
          <button type="button" className={weightUnit === 'kg' ? 'active' : ''} onClick={() => setWeightUnit('kg')}>
            kg
          </button>
          <button type="button" className={weightUnit === 'lb' ? 'active' : ''} onClick={() => setWeightUnit('lb')}>
            lb
          </button>
        </div>

        <label>
          Weight ({weightUnit})
          <input type="number" min="0" step="any" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder={weightUnit === 'kg' ? 'e.g. 65' : 'e.g. 143'} />
        </label>

        <button type="submit">Calculate BMI</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>BMI: {result.bmi}</h3>
          <p>Category: {result.category}</p>
        </ResultCard>
      )}
    </div>
  );
}
