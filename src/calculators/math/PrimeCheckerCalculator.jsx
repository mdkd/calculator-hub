import { useState } from 'react';
import ResultCard from '../../components/ResultCard.jsx';

function isPrime(n) {
  if (n < 2) return false;
  if (n % 2 === 0) return n === 2;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function primeFactors(n) {
  const factors = [];
  let remaining = n;
  for (let divisor = 2; divisor * divisor <= remaining; divisor++) {
    while (remaining % divisor === 0) {
      factors.push(divisor);
      remaining /= divisor;
    }
  }
  if (remaining > 1) factors.push(remaining);
  return factors;
}

export default function PrimeCheckerCalculator() {
  const [numberText, setNumberText] = useState('');
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const n = parseInt(numberText, 10);

    if (!numberText) {
      setError('Please enter a number.');
      return;
    }
    if (isNaN(n) || !Number.isInteger(Number(numberText)) || n <= 0) {
      setError('Please enter a positive whole number.');
      return;
    }

    setResult({
      n,
      prime: isPrime(n),
      factors: primeFactors(n),
    });
  };

  return (
    <div className="calculator">
      <form onSubmit={handleSubmit} className="calculator-form">
        <label>
          Number
          <input
            type="number"
            min="1"
            step="1"
            value={numberText}
            onChange={(e) => setNumberText(e.target.value)}
            placeholder="e.g. 97"
          />
        </label>
        <button type="submit">Check</button>
      </form>

      {error && <p className="error-text">{error}</p>}

      {result && (
        <ResultCard>
          <h3>
            {result.n} is {result.prime ? '' : 'NOT '}a prime number
          </h3>
          {!result.prime && result.n > 1 && <p>Prime factorization: {result.factors.join(' × ')}</p>}
        </ResultCard>
      )}
    </div>
  );
}
