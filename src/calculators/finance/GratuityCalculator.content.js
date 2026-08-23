const content = {
  howItWorks: [
    'Gratuity is a lump-sum benefit paid by an employer to an employee as a token of appreciation for continuous service, typically at retirement, resignation, or termination after a minimum qualifying period.',
    'This calculator uses the formula prescribed under the Payment of Gratuity Act, 1972, which covers most employees in India: Gratuity = (Last drawn monthly salary × 15 × number of years of service) / 26. Here, "salary" means basic pay plus dearness allowance, 15 represents 15 days\' wages for each year of service, and 26 represents the number of working days assumed in a month under the Act.',
    'Years of service are rounded to the nearest full year: if the extra period beyond completed years is 6 months or more, it is rounded up to the next full year; if it is less than 6 months, it is rounded down and ignored. For example, 12 years and 7 months of service is treated as 13 years, while 12 years and 4 months is treated as 12 years.',
    'The Act also sets a statutory ceiling on the tax-exempt gratuity amount payable, currently ₹20,00,000. This calculator applies that cap to the computed amount and flags when the raw calculation exceeds it, though employers may choose to pay more than the statutory cap voluntarily as an ex-gratia amount.',
  ],
  example: 'For an employee with a last drawn salary (basic + DA) of ₹50,000 and 12 years and 7 months of service: since 7 months is 6 or more, the service is rounded up to 13 years. Gratuity = (50,000 × 15 × 13) / 26 = ₹3,75,000. Since this is well below the ₹20,00,000 statutory cap, the full amount is payable.',
  faq: [
    {
      q: 'Who is eligible for gratuity?',
      a: 'Under the Payment of Gratuity Act, 1972, an employee generally becomes eligible after completing 5 years of continuous service with the same employer, except in cases of death or disablement, where the 5-year requirement is waived.',
    },
    {
      q: 'Why does the formula divide by 26 instead of 30?',
      a: 'The Act assumes 26 working days in a month (excluding weekly offs) when calculating the 15-days-per-year wage component, rather than the full calendar month of roughly 30 days.',
    },
    {
      q: 'Why do 6 months round up but 5 months round down?',
      a: 'This is a specific rule under the Payment of Gratuity Act: any period of service exceeding six months beyond a completed year is treated as a full additional year, while anything six months or less is dropped from the calculation.',
    },
    {
      q: 'What is the current statutory ceiling on gratuity?',
      a: 'As of the current rules, the tax-exempt gratuity ceiling under the Act is ₹20,00,000. This limit is set by the government and has been revised upward over time, so check for the latest figure if using this for official purposes.',
    },
    {
      q: 'Does this formula apply to all types of employees?',
      a: 'This calculator uses the formula for employees covered under the Payment of Gratuity Act (most private-sector and many public-sector employees). Employees not covered under the Act (a smaller category) may have their gratuity calculated differently by their employer, typically using a 30-day divisor instead of 26.',
    },
  ],
};

export default content;
