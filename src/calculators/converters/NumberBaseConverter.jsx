import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';

const BASES = [
  { value: 2, label: 'Binary (Base 2)' },
  { value: 8, label: 'Octal (Base 8)' },
  { value: 10, label: 'Decimal (Base 10)' },
  { value: 16, label: 'Hexadecimal (Base 16)' },
];

const VALID_CHARS = {
  2: /^[01]+$/,
  8: /^[0-7]+$/,
  10: /^[0-9]+$/,
  16: /^[0-9a-fA-F]+$/,
};

export default function NumberBaseConverter() {
  const [inputValue, setInputValue] = useState('');
  const [fromBase, setFromBase] = useState(10);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const cleaned = inputValue.trim();

    if (!cleaned) {
      setError('Please enter a number.');
      return;
    }
    if (!VALID_CHARS[fromBase].test(cleaned)) {
      setError(`"${cleaned}" contains digits that are not valid in base ${fromBase}.`);
      return;
    }

    const decimalValue = parseInt(cleaned, fromBase);
    if (!Number.isSafeInteger(decimalValue)) {
      setError('Number is too large to convert precisely.');
      return;
    }

    setResult({
      binary: decimalValue.toString(2),
      octal: decimalValue.toString(8),
      decimal: decimalValue.toString(10),
      hex: decimalValue.toString(16).toUpperCase(),
    });
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <label>
          Number
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="e.g. 255"
          />
        </label>
        <label>
          From Base
          <select value={fromBase} onChange={(e) => setFromBase(Number(e.target.value))}>
            {BASES.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Convert</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>Decimal: {result.decimal}</h3>
          <p>Binary: {result.binary}</p>
          <p>Octal: {result.octal}</p>
          <p>Hexadecimal: {result.hex}</p>
        </ResultCard>
      )}
    </div>
  );
}
