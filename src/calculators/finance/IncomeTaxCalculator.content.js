const content = {
  howItWorks: [
    'This calculator estimates income tax under India\'s New Tax Regime for FY 2024-25 (Assessment Year 2025-26), which applies slab-based rates directly to your income with fewer deductions than the Old Regime.',
    'The slabs used are: nil tax up to ₹3,00,000; 5% on income from ₹3,00,001 to ₹7,00,000; 10% from ₹7,00,001 to ₹10,00,000; 15% from ₹10,00,001 to ₹12,00,000; 20% from ₹12,00,001 to ₹15,00,000; and 30% above ₹15,00,000. Each slab\'s rate only applies to the portion of income that falls within it, not your entire income.',
    'If you\'re salaried, a standard deduction of ₹75,000 is subtracted from your gross income before slab rates are applied, since the New Regime allows this deduction for salaried taxpayers. Under Section 87A, if your taxable income (after the standard deduction) is ₹7,00,000 or less, a full rebate makes your tax payable zero.',
    'After computing slab-wise tax and applying any rebate, a 4% Health and Education Cess is added on top of the tax amount to arrive at the final tax payable, which is then subtracted from your gross income to estimate your take-home amount.',
  ],
  example: 'For a salaried individual with an annual gross income of ₹12,00,000: taxable income = 12,00,000 − 75,000 (standard deduction) = ₹11,25,000. Working through each slab: ₹0 on the first ₹3,00,000, 5% × ₹4,00,000 (₹3L–₹7L) = ₹20,000, 10% × ₹3,00,000 (₹7L–₹10L) = ₹30,000, and 15% × ₹1,25,000 (₹10L–₹11.25L) = ₹18,750 — a total slab tax of ₹68,750. Since taxable income exceeds the ₹7,00,000 rebate threshold, no rebate applies. Adding 4% cess (₹2,750) gives a total tax payable of about ₹71,500.',
  faq: [
    {
      q: 'Does this calculator cover the Old Tax Regime?',
      a: 'No, this calculator only computes tax under the New Tax Regime, which has become the default regime in India. The Old Regime involves many possible deductions (80C, HRA, etc.) that this simplified tool does not model.',
    },
    {
      q: 'Who gets the ₹75,000 standard deduction?',
      a: 'The standard deduction under the New Regime for FY 2024-25 applies to salaried individuals and pensioners. Uncheck the "Salaried" box if you are computing tax on non-salary income that isn\'t eligible for it.',
    },
    {
      q: 'What is the Section 87A rebate?',
      a: 'It\'s a rebate that reduces tax liability to zero for taxpayers under the New Regime whose taxable income does not exceed ₹7,00,000, effectively making income up to that level tax-free.',
    },
    {
      q: 'Is this calculator a substitute for professional tax advice?',
      a: 'No. Tax laws, slabs, and deduction limits change frequently and can depend on your specific circumstances. Use this as a rough estimate only, and consult a qualified tax professional or the official Income Tax Department resources for filing purposes.',
    },
    {
      q: 'Does this include TDS already deducted by my employer?',
      a: 'No, this calculator estimates your total annual tax liability, not what has already been withheld. Compare this figure against your Form 16 or payslips to see if additional tax is due or a refund is expected.',
    },
  ],
};

export default content;
