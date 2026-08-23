import { useState, useMemo } from 'react';
import ResultCard from '../../components/ResultCard.jsx';
import { unitCategories, convertTemperature } from './unitData.js';

export default function UnitConverter() {
  const [category, setCategory] = useState('length');
  const unitKeys = useMemo(() => Object.keys(unitCategories[category].units), [category]);
  const [fromUnit, setFromUnit] = useState(unitKeys[0]);
  const [toUnit, setToUnit] = useState(unitKeys[1] || unitKeys[0]);
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    const keys = Object.keys(unitCategories[newCategory].units);
    setFromUnit(keys[0]);
    setToUnit(keys[1] || keys[0]);
    setResult(null);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (value === '') {
      setError('Please enter a value to convert.');
      return;
    }
    const v = parseFloat(value);

    if (category === 'length' || category === 'weight') {
      if (v < 0) {
        setError('Value cannot be negative for this category.');
        return;
      }
      const units = unitCategories[category].units;
      const baseValue = v * units[fromUnit].toBase;
      const converted = baseValue / units[toUnit].toBase;
      setResult(converted);
    } else if (category === 'temperature') {
      if (fromUnit === 'kelvin' && v < 0) {
        setError('Kelvin cannot be negative.');
        return;
      }
      const converted = convertTemperature(v, fromUnit, toUnit);
      if (toUnit === 'kelvin' && converted < 0) {
        setError('Resulting Kelvin value would be below absolute zero.');
        return;
      }
      setResult(converted);
    }
  };

  const units = unitCategories[category].units;

  return (
    <div className="calculator">
      <div className="mode-toggle">
        {Object.entries(unitCategories).map(([key, cat]) => (
          <button
            key={key}
            type="button"
            className={category === key ? 'active' : ''}
            onClick={() => handleCategoryChange(key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="calculator-form">
        <label>
          Value
          <input type="number" step="any" value={value} onChange={(e) => setValue(e.target.value)} placeholder="e.g. 100" />
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
            {value} {units[fromUnit].label} = {result.toFixed(4)} {units[toUnit].label}
          </h3>
        </ResultCard>
      )}
    </div>
  );
}
