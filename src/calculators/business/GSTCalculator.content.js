const content = {
  howItWorks: [
    'GST (Goods and Services Tax) is a percentage-based tax added to the price of goods and services. This calculator supports both directions of the calculation, depending on whether your starting amount already includes GST or not.',
    'In "GST Exclusive" mode, your entered amount is treated as the price before tax. The GST amount is calculated as (amount × rate) / 100, and the total is the original amount plus that GST amount: total = amount × (1 + rate / 100).',
    'In "GST Inclusive" mode, your entered amount is treated as the final price that already has GST built in. To find the original pre-tax amount, the calculator divides by (1 + rate/100): base = total / (1 + rate / 100). The GST amount is then simply the difference between the inclusive total and that recovered base amount.',
    'This distinction matters because you cannot just apply the tax rate directly to an inclusive amount — doing so would overstate the tax, since part of that amount is already tax, not just pre-tax value.',
  ],
  example: 'Exclusive mode: an amount of ₹1,000 with 18% GST gives GST amount = (1000 × 18) / 100 = ₹180, and total = ₹1,180. Inclusive mode: if ₹1,180 already includes 18% GST, the base amount = 1180 / 1.18 = ₹1,000, and the GST amount = 1180 − 1000 = ₹180 — the same numbers, worked in reverse.',
  faq: [
    {
      q: 'What is the difference between GST inclusive and exclusive?',
      a: 'Exclusive means the amount you enter does not yet include GST, and the tax is added on top. Inclusive means the amount you enter already has GST built into it, and the calculator works backward to separate the base price from the tax.',
    },
    {
      q: 'Why does dividing by (1 + rate/100) recover the correct base amount?',
      a: 'If total = base × (1 + rate/100), then rearranging algebraically gives base = total ÷ (1 + rate/100). This is the inverse operation of adding GST, so it correctly "removes" the tax that was already folded into the total.',
    },
    {
      q: 'Can the GST rate or amount be negative?',
      a: 'No, both must be zero or positive, since tax rates and prices cannot be negative in practice. The calculator will show an error if a negative value is entered.',
    },
    {
      q: 'Does this work for tax systems other than GST, like VAT or sales tax?',
      a: 'Yes, the same inclusive/exclusive math applies to any flat-percentage tax system, such as VAT, so you can use this calculator for those with the appropriate rate.',
    },
    {
      q: 'What currency does this calculator use?',
      a: 'Results are shown with a ₹ symbol for convenience, but the underlying math is currency-agnostic — you can treat the numbers as any currency you\'re working in.',
    },
  ],
};

export default content;
