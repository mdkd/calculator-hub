const content = {
  howItWorks: [
    'The Employees\' Provident Fund (EPF) is a mandatory retirement savings scheme for salaried employees in India. Both the employee and employer contribute a percentage of the employee\'s basic salary plus dearness allowance (DA) every month, and the accumulated balance earns interest declared annually by the EPFO.',
    'By default, employees contribute 12% of basic salary + DA. Employers also contribute 12% in total, but only 3.67% of that typically goes into the EPF account — the remaining 8.33% is usually diverted to the Employees\' Pension Scheme (EPS), which is why the employer\'s EPF contribution field defaults to 3.67% rather than 12%. You can adjust both percentages if your situation differs.',
    'This calculator combines the employee and employer EPF contributions into a single monthly amount and projects its growth using the same future-value formula used for SIP investments: FV = P × [((1 + i)^n − 1) / i] × (1 + i), where P is the combined monthly contribution, i is the monthly interest rate, and n is the number of months over your working years.',
    'In reality, EPF interest is calculated monthly but credited to the account annually, and your basic salary typically increases over your career, which this simplified projection does not model — it assumes a constant monthly contribution throughout, so treat the result as an approximate long-term estimate rather than an exact figure.',
  ],
  example: 'For a basic salary + DA of ₹40,000/month, with 12% employee and 3.67% employer contribution (15.67% combined) at an 8.25% annual interest rate over 25 years: the combined monthly contribution is ₹6,268. Projected over 300 months at 8.25%, this grows to an estimated corpus of roughly ₹62.5 lakh, of which about ₹18.8 lakh was contributed directly and the remaining ₹43.7 lakh is accumulated interest.',
  faq: [
    {
      q: 'Why is the default employer contribution 3.67% instead of 12%?',
      a: 'While employers contribute 12% of basic salary + DA in total, only 3.67% of that (in most cases) is credited to your EPF account — the remaining 8.33% goes toward the Employees\' Pension Scheme (EPS), which is a separate pension benefit not included in this EPF corpus calculation.',
    },
    {
      q: 'Does this account for salary increases over time?',
      a: 'No, this calculator assumes your basic salary (and therefore your monthly contribution) stays constant for the entire period, which understates the corpus for most careers where salary grows over time.',
    },
    {
      q: 'Is EPF interest really compounded monthly like this calculator assumes?',
      a: 'EPF interest is calculated on the monthly running balance but officially credited to the account once a year. Using monthly compounding in this calculator is a simplification that gives a close approximation to the actual EPFO calculation method.',
    },
    {
      q: 'What EPF interest rate should I use?',
      a: 'The EPFO declares a new interest rate for EPF balances each financial year. Use the most recently declared rate, understanding that this rate can change year to year and your actual returns will reflect the rate applicable in each year of your service.',
    },
    {
      q: 'Is EPF withdrawal taxable?',
      a: 'EPF withdrawals are generally tax-free if made after 5 years of continuous service. Withdrawals before that may attract tax and TDS. This calculator does not account for taxation — consult a tax advisor for your specific situation.',
    },
  ],
};

export default content;
