import { useState, useMemo } from 'react';
import ResultCard from '../../components/ResultCard.jsx';

// Reusable converter for any category whose units relate to each other by a
// simple multiplicative factor against a common base unit (area, volume,
// speed, time, etc.) — each specific calculator just supplies its own `units`
// map, keeping this file the single place that logic lives.
export default function GenericUnitConverter({ units, placeholder = 'e.g. 100' }) {
  const unitKeys = useMemo(() => Object.keys(units), [units]);
  const [fromUnit, setFromUnit] = useState(unitKeys[0]);
  const [toUnit, setToUnit] = useState(unitKeys[1] || unitKeys[0]);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (value === '') {
      setError('Please enter a value to convert.');
      return;
    }
    const v = parseFloat(value);
    if (isNaN(v)) {
      setError('Please enter a valid number.');
      return;
    }
    if (v < 0) {
      setError('Value cannot be negative.');
      return;
    }

    const baseValue = v * units[fromUnit].toBase;
    const converted = baseValue / units[toUnit].toBase;
    setResult(converted);
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <label>
          Value
          <input type="number" min="0" step="any" value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} />
        </label>

        <div className="field-row">
          <label>
            From
            <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
              {Object.entries(units).map(([key, u]) => (
                <option key={key} value={key}>
                  {u.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            To
            <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
              {Object.entries(units).map(([key, u]) => (
                <option key={key} value={key}>
                  {u.label}
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
            {value} {units[fromUnit].label} = {result.toFixed(6).replace(/\.?0+$/, '')} {units[toUnit].label}
          </h3>
        </ResultCard>
      )}
    </div>
  );
}
