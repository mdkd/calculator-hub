// Static, illustrative exchange rates (expressed as units per 1 USD).
//
// THESE ARE NOT LIVE RATES. Currency markets move constantly, and there is no
// live rate feed wired into this app — these numbers are a fixed snapshot for
// demonstration purposes only. Before using this for any real transaction,
// check a live source (a bank, XE.com, Google, etc.).
//
// To wire up real rates later: replace this file's export with a fetch to a
// live exchange-rate API, and update RATES_AS_OF below.
export const RATES_AS_OF = 'August 2026 (static snapshot, not live)';

const currencyRates = {
  USD: { label: 'US Dollar (USD)', rate: 1 },
  EUR: { label: 'Euro (EUR)', rate: 0.92 },
  GBP: { label: 'British Pound (GBP)', rate: 0.79 },
  INR: { label: 'Indian Rupee (INR)', rate: 83.5 },
  JPY: { label: 'Japanese Yen (JPY)', rate: 149 },
  AUD: { label: 'Australian Dollar (AUD)', rate: 1.52 },
  CAD: { label: 'Canadian Dollar (CAD)', rate: 1.36 },
  CNY: { label: 'Chinese Yuan (CNY)', rate: 7.1 },
  AED: { label: 'UAE Dirham (AED)', rate: 3.6725 },
  SGD: { label: 'Singapore Dollar (SGD)', rate: 1.34 },
};

export default currencyRates;
