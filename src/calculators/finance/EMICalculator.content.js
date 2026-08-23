const content = {
  howItWorks: [
    'An EMI (Equated Monthly Installment) is the fixed amount you pay each month to repay a loan, covering both principal and interest, until the loan is fully paid off over its tenure.',
    'The calculator uses the standard reducing-balance EMI formula: EMI = P × r × (1 + r)^n / ((1 + r)^n − 1), where P is the loan principal, r is the monthly interest rate (the annual rate divided by 12 and converted to a decimal), and n is the number of monthly installments (the tenure in months).',
    'Because interest is charged on the reducing balance, a larger share of each early EMI goes toward interest and a larger share of each later EMI goes toward principal, even though the total EMI amount itself stays constant throughout the tenure.',
    'The calculator also reports the total amount you will pay over the life of the loan (EMI × tenure) and the total interest, which is simply that total minus the original principal.',
  ],
  example: 'Suppose you borrow ₹500,000 at an annual interest rate of 8.5% for 60 months (5 years). The monthly rate is 8.5% / 12 / 100 = 0.007083. Plugging P = 500000, r = 0.007083, and n = 60 into the formula gives an EMI of about ₹10,258.27 per month. Over 60 months you would pay a total of about ₹615,495.94, of which about ₹115,495.94 is interest.',
  faq: [
    {
      q: 'What is the difference between flat rate and reducing balance interest?',
      a: 'This calculator uses the reducing balance method, the standard for most bank loans, where interest is calculated only on the outstanding principal each month. A flat rate loan charges interest on the full original principal for the entire tenure, which results in a higher effective interest rate for the same stated rate.',
    },
    {
      q: 'Why does my EMI stay the same every month?',
      a: 'The EMI amount is fixed by design so that repayment is predictable, but the split between principal and interest within each EMI changes over time — early payments are interest-heavy, later payments are principal-heavy.',
    },
    {
      q: 'Does this calculator include processing fees or other charges?',
      a: 'No. It calculates the EMI based purely on principal, interest rate, and tenure. Processing fees, insurance, or other charges your lender may add are not included and should be factored in separately.',
    },
    {
      q: 'What happens if I enter a 0% interest rate?',
      a: 'If the interest rate is 0, the calculator simply divides the principal evenly across the tenure (EMI = P / n), since there is no interest component to add.',
    },
    {
      q: 'Can I use this for any type of loan?',
      a: 'Yes, the reducing-balance EMI formula applies to home loans, car loans, and personal loans as long as the loan uses fixed monthly installments and a fixed annual interest rate.',
    },
  ],
};

export default content;
