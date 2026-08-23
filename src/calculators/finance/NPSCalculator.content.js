const content = {
  howItWorks: [
    'The National Pension System (NPS) is a government-backed retirement savings scheme in India where you contribute regularly until age 60, after which the accumulated corpus is used partly as a lump-sum withdrawal and partly to purchase an annuity that pays you a monthly pension.',
    'This calculator first estimates your total corpus at age 60 using the same future-value formula used for SIP investments: FV = P × [((1 + i)^n − 1) / i] × (1 + i), where P is your monthly contribution, i is the monthly rate of return, and n is the number of months remaining until age 60.',
    'Per current NPS rules, up to 60% of the accumulated corpus can be withdrawn as a tax-free lump sum at retirement, while at least 40% must be used to purchase an annuity — a financial product that pays a regular pension for the rest of your life.',
    'The estimated monthly pension is calculated by applying your expected annuity rate to the annuity portion of the corpus (annuity corpus × annuity rate ÷ 12). The actual pension you receive will depend on the annuity provider and plan you choose at retirement, so this is only an estimate.',
  ],
  example: 'A 30-year-old contributing ₹5,000 per month, expecting a 10% annual return until age 60 (30 years, 360 months): the corpus formula gives an estimated retirement corpus of roughly ₹1.14 crore. Of this, 60% (about ₹68.4 lakh) could be withdrawn as a lump sum, and 40% (about ₹45.6 lakh) would go toward an annuity. At an assumed 6% annuity rate, that would provide an estimated monthly pension of about ₹22,790.',
  faq: [
    {
      q: 'Why is the retirement age fixed at 60?',
      a: 'NPS is designed around retirement at age 60 for most subscribers, so this calculator uses that as the standard target age. Early or deferred exit options exist under NPS rules but are not modeled here.',
    },
    {
      q: 'Are the 60% lump sum and 40% annuity split fixed?',
      a: 'Yes, this reflects the current regulatory requirement: at least 40% of the NPS corpus must be annuitized at retirement, while up to 60% can be withdrawn as a lump sum (which is currently tax-free).',
    },
    {
      q: 'What is an "annuity rate" and where do I get one?',
      a: 'The annuity rate is the annual percentage return an annuity provider (typically an insurance company) offers on the amount used to purchase your pension plan. This varies by provider and market conditions — check current annuity rates when you\'re closer to retirement for a more accurate estimate.',
    },
    {
      q: 'Does the calculator account for NPS charges or taxes?',
      a: 'No, this is a simplified projection that does not include fund management charges, taxes on the annuity income (pension is taxable), or contribution limits. Treat the result as a rough estimate for planning purposes.',
    },
    {
      q: 'Can the expected rate of return change over time?',
      a: 'This calculator assumes one constant rate of return for the entire contribution period. In reality, NPS returns vary depending on your chosen asset allocation (equity, corporate bonds, government securities) and market performance.',
    },
  ],
};

export default content;
