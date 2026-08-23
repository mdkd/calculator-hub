const content = {
  howItWorks: [
    'A Recurring Deposit (RD) is similar to a Fixed Deposit, but instead of depositing a lump sum once, you deposit a fixed amount every month for a set tenure, and the whole balance earns interest.',
    'Most Indian banks compound RD interest quarterly, even though deposits happen monthly. This calculator simulates that precisely month by month: each month your deposit is added to the running balance, and at the end of every third month (each quarter), interest for that quarter is calculated on the current balance and added to it.',
    'This simulation approach — rather than a single closed-form formula — was chosen because it mirrors exactly how a bank credits interest, making the result transparent and easy to verify month by month, and it naturally handles any tenure length correctly, including tenures that aren\'t an exact number of quarters.',
    'At the end, the calculator reports the final maturity amount, the total you actually deposited (monthly deposit × number of months), and the interest earned as the difference between the two.',
  ],
  example: 'Depositing ₹5,000 per month for 24 months at 6.5% annual interest: the calculator adds ₹5,000 to the balance every month, and every 3rd, 6th, 9th... month it credits one quarter\'s interest (6.5% ÷ 4 = 1.625%) on the balance at that point. Over 24 months this produces a maturity amount of about ₹1,29,116, against ₹1,20,000 deposited — about ₹9,116 in interest.',
  faq: [
    {
      q: 'Why is RD interest compounded quarterly instead of monthly?',
      a: 'This follows standard practice at most Indian banks, which credit RD interest at the end of each quarter rather than every month, even though your deposits are monthly.',
    },
    {
      q: 'What happens if my tenure isn\'t a multiple of 3 months?',
      a: 'The simulation still works correctly — interest is only credited at month 3, 6, 9, and so on, and any remaining partial-quarter months at the end simply don\'t receive an extra interest credit, matching typical bank behavior at maturity.',
    },
    {
      q: 'Is the interest rate the same throughout the tenure?',
      a: 'This calculator assumes a single fixed interest rate for the entire tenure, as is standard for most RD schemes. Some banks may offer different rates for senior citizens or special schemes — use the rate applicable to your account.',
    },
    {
      q: 'Does this include tax on the interest earned?',
      a: 'No, RD interest is taxable as per your income tax slab, and banks may deduct TDS above a threshold. This calculator shows gross interest before any tax deductions.',
    },
    {
      q: 'Can I change my monthly deposit amount partway through?',
      a: 'This calculator assumes a constant monthly deposit for the full tenure, which matches how standard RD accounts work — the deposit amount is fixed when you open the account.',
    },
  ],
};

export default content;
