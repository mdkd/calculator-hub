const content = {
  howItWorks: [
    'A Fixed Deposit (FD) is a lump-sum investment held with a bank for a fixed tenure at a fixed interest rate. Unlike a savings account, the rate is locked in for the whole term, and the interest compounds at a frequency set by the bank.',
    'The calculator uses the standard compound interest formula: A = P × (1 + r/n)^(n×t), where P is the principal amount deposited, r is the annual interest rate (as a decimal), n is the number of times interest is compounded per year, and t is the tenure in years.',
    'Compounding frequency matters: the more often interest is compounded (monthly vs. annually, for example), the slightly higher your effective return, because each compounding period earns interest on interest already credited, rather than waiting until the end of the year.',
    'The interest earned is simply the maturity amount minus your original principal (A − P). Most Indian banks compound FD interest quarterly by default, which is why quarterly is set as this calculator\'s default option.',
  ],
  example: 'Depositing ₹1,00,000 at 7% annual interest for 5 years, compounded quarterly: n = 4, t = 5, so A = 100000 × (1 + 0.07/4)^(4×5) = 100000 × (1.0175)^20 ≈ ₹1,41,478. The interest earned is about ₹41,478.',
  faq: [
    {
      q: 'Why does compounding frequency change the final amount?',
      a: 'More frequent compounding means interest is credited and starts earning its own interest sooner. Monthly compounding will always produce a slightly higher maturity amount than annual compounding for the same nominal rate and tenure.',
    },
    {
      q: 'Does this calculator account for TDS or taxes on FD interest?',
      a: 'No. FD interest is taxable as per your income tax slab, and banks may deduct TDS if interest exceeds a threshold in a financial year. This calculator shows the gross interest before any tax deductions.',
    },
    {
      q: 'What compounding frequency do banks actually use?',
      a: 'Most banks in India compound FD interest quarterly, though this can vary by bank and product. Check your specific FD scheme\'s terms for the exact frequency used.',
    },
    {
      q: 'Can I withdraw an FD before maturity?',
      a: 'Most FDs allow premature withdrawal, usually with a penalty (a reduced interest rate). This calculator only estimates the maturity value if held for the full tenure, not early-withdrawal scenarios.',
    },
    {
      q: 'Is a higher interest rate always better?',
      a: 'Generally yes for your returns, but also compare compounding frequency, lock-in period, and the bank\'s credit rating, since these all affect the actual value and safety of your investment.',
    },
  ],
};

export default content;
