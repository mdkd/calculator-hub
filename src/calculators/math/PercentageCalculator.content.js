const content = {
  howItWorks: [
    'A percentage is simply a way of expressing a number as a fraction of 100. This calculator supports the two most common percentage questions people need answered.',
    '"X% of Y" answers questions like "what is 20% of 150?" It works by converting the percentage to a decimal (dividing by 100) and multiplying by Y: result = (X / 100) × Y.',
    '"X is what % of Y" answers questions like "30 is what percent of 150?" It works by dividing X by Y and multiplying by 100 to express the ratio as a percentage: result = (X / Y) × 100.',
    'Both formulas are algebraic rearrangements of the same underlying relationship — percentage = part / whole × 100 — just solved for a different unknown depending on which values you already know.',
  ],
  example: 'Using "X% of Y" mode with X = 20 and Y = 150: (20 / 100) × 150 = 30, so 20% of 150 is 30. Using "X is what % of Y" mode with X = 30 and Y = 150: (30 / 150) × 100 = 20%, so 30 is 20% of 150 — the two modes are inverses of each other.',
  faq: [
    {
      q: 'What is the formula for "X% of Y"?',
      a: 'Result = (X ÷ 100) × Y. For example, 15% of 200 = (15 ÷ 100) × 200 = 30.',
    },
    {
      q: 'What is the formula for "X is what % of Y"?',
      a: 'Result = (X ÷ Y) × 100. For example, 50 is what percent of 200? (50 ÷ 200) × 100 = 25%.',
    },
    {
      q: 'Can Y be zero?',
      a: 'No — dividing by zero is undefined, so "X is what % of Y" requires Y to be a non-zero number. The calculator will show an error if you try to use zero.',
    },
    {
      q: 'Can I calculate a percentage increase or decrease with this tool?',
      a: 'This tool covers the two basic percentage relationships. For percentage change between two values, you would compute ((new − old) ÷ old) × 100, which is a related but separate calculation.',
    },
    {
      q: 'Does the calculator support negative numbers?',
      a: 'Yes, both X and Y can be negative, and the formulas work the same way — the sign of the result simply follows the signs of the inputs.',
    },
  ],
};

export default content;
