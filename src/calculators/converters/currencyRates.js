// Currency labels for the converter's dropdowns, plus a fallback rate used
// ONLY if the live exchange rate API (see CurrencyConverter.jsx) can't be
// reached. The fallback is a static snapshot and will drift out of date —
// it exists purely so the tool still works offline or on API failure, not
// as the primary data source.
export const FALLBACK_RATES_AS_OF = 'August 2026 (static fallback snapshot)';

const currencyRates = {
  USD: { label: 'US Dollar (USD)', fallbackRate: 1 },
  EUR: { label: 'Euro (EUR)', fallbackRate: 0.92 },
  GBP: { label: 'British Pound (GBP)', fallbackRate: 0.79 },
  INR: { label: 'Indian Rupee (INR)', fallbackRate: 83.5 },
  JPY: { label: 'Japanese Yen (JPY)', fallbackRate: 149 },
  AUD: { label: 'Australian Dollar (AUD)', fallbackRate: 1.52 },
  CAD: { label: 'Canadian Dollar (CAD)', fallbackRate: 1.36 },
  CNY: { label: 'Chinese Yuan (CNY)', fallbackRate: 7.1 },
  AED: { label: 'UAE Dirham (AED)', fallbackRate: 3.6725 },
  SGD: { label: 'Singapore Dollar (SGD)', fallbackRate: 1.34 },
};

export default currencyRates;
