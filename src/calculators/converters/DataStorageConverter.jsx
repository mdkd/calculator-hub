import { useState, useMemo } from 'react';
import ResultCard from '../../components/ResultCard.jsx';

function buildUnits(base) {
  return {
    bit: { label: 'Bit (b)', toBase: 1 / 8 },
    byte: { label: 'Byte (B)', toBase: 1 },
    kilobyte: { label: base === 1024 ? 'Kibibyte (KiB)' : 'Kilobyte (KB)', toBase: base },
    megabyte: { label: base === 1024 ? 'Mebibyte (MiB)' : 'Megabyte (MB)', toBase: base ** 2 },
    gigabyte: { label: base === 1024 ? 'Gibibyte (GiB)' : 'Gigabyte (GB)', toBase: base ** 3 },
    terabyte: { label: base === 1024 ? 'Tebibyte (TiB)' : 'Terabyte (TB)', toBase: base ** 4 },
  };
}

export default function DataStorageConverter() {
  const [base, setBase] = useState(1024);
  const units = useMemo(() => buildUnits(base), [base]);
  const unitKeys = Object.keys(units);
  const [fromUnit, setFromUnit] = useState('gigabyte');
  const [toUnit, setToUnit] = useState('megabyte');
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
    if (isNaN(v) || v < 0) {
      setError('Please enter a valid non-negative number.');
      return;
    }

    const baseValue = v * units[fromUnit].toBase;
    const converted = baseValue / units[toUnit].toBase;
    setResult(converted);
  };

  return (
    <div className="calculator">
      <div className="mode-toggle">
        <button type="button" className={base === 1024 ? 'active' : ''} onClick={() => setBase(1024)}>
          Binary (1024)
        </button>
        <button type="button" className={base === 1000 ? 'active' : ''} onClick={() => setBase(1000)}>
          Decimal (1000)
        </button>
      </div>

      <form onSubmit={handleSubmit} className="calculator-form">
        <label>
          Value
          <input type="number" min="0" step="any" value={value} onChange={(e) => setValue(e.target.value)} placeholder="e.g. 2.5" />
        </label>

        <div className="field-row">
          <label>
            From
            <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
              {unitKeys.map((key) => (
                <option key={key} value={key}>
                  {units[key].label}
                </option>
              ))}
            </select>
          </label>
          <label>
            To
            <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
              {unitKeys.map((key) => (
                <option key={key} value={key}>
                  {units[key].label}
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
