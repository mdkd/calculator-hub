const content = {
  howItWorks: [
    'A Systematic Investment Plan (SIP) lets you invest a fixed amount regularly (usually monthly) into a mutual fund or similar instrument, rather than investing a lump sum all at once. This calculator estimates the maturity value of such a plan assuming a constant expected rate of return.',
    'It uses the standard SIP future value formula: FV = P × [((1 + i)^n − 1) / i] × (1 + i), where P is the amount invested each month, i is the monthly rate of return (the expected annual return divided by 12 and converted to a decimal), and n is the total number of monthly installments (years × 12).',
    'The extra (1 + i) factor at the end accounts for the fact that each monthly installment earns one additional month of compounding, since deposits are typically assumed to happen at the start of each month in this formula.',
    'The calculator also separates the result into two parts: the total amount you actually invested (P × n) and the estimated returns (the maturity value minus the amount invested), so you can see how much of your final corpus came from your own contributions versus compounding growth.',
  ],
  example: 'Investing ₹5,000 per month for 10 years at an expected annual return of 12%: n = 120 months, i = 12/12/100 = 0.01. FV = 5000 × [((1.01)^120 − 1) / 0.01] × 1.01 ≈ ₹11,61,695. You would have invested a total of ₹6,00,000, meaning roughly ₹5,61,695 came from investment growth.',
  faq: [
    {
      q: 'Is the SIP return guaranteed?',
      a: 'No. This calculator assumes a constant, user-entered annual return rate for illustration purposes. Actual mutual fund or market-linked returns fluctuate and are never guaranteed — treat this as an estimate, not a promise.',
    },
    {
      q: 'Does this account for inflation?',
      a: 'No, the calculated maturity value is in nominal (today\'s) rupees. If you want to estimate real purchasing power, you would need to separately adjust the result for expected inflation over the investment period.',
    },
    {
      q: 'What if the expected return rate is 0%?',
      a: 'If you enter 0% as the expected return, the calculator simply returns the sum of all your monthly investments (P × n), since there is no growth to compound.',
    },
    {
      q: 'Are SIP investments taxed?',
      a: 'Returns from SIPs into mutual funds are generally subject to capital gains tax depending on the fund type and holding period. This calculator does not account for taxes — consult a tax advisor for your specific situation.',
    },
    {
      q: 'Can I use this for a lump sum investment instead?',
      a: 'No, this formula is specifically for periodic monthly investments. A one-time lump sum investment would use simple or compound interest formulas instead, since there\'s only a single contribution to grow.',
    },
  ],
};

export default content;
