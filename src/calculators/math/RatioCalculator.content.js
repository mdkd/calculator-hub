const content = {
  howItWorks: [
    'This calculator handles two common ratio problems: simplifying a ratio to its lowest terms, and solving a proportion (an equation stating that two ratios are equal) for an unknown value.',
    '"Simplify a Ratio" reduces A:B to its smallest equivalent whole-number form by dividing both A and B by their greatest common divisor (GCD) — the largest number that divides evenly into both. For example, 8:12 has a GCD of 4, so dividing both sides by 4 gives the simplified ratio 2:3.',
    '"Solve a Proportion" finds the missing value X in an equation of the form A:B = C:X, using the cross-multiplication rule: A × X = B × C, so X = (B × C) / A. This is the standard method for solving "if A is to B, what is C to X" style problems, such as scaling a recipe or converting between similar quantities.',
    'Both modes require positive numbers, since ratios comparing negative or zero quantities aren\'t meaningful in most everyday contexts this calculator is designed for.',
  ],
  example: 'Simplifying 8:12 — GCD(8, 12) = 4, so 8÷4 : 12÷4 = 2:3. Solving a proportion 2:3 = 10:X — using X = (B × C) / A = (3 × 10) / 2 = 15, so 2:3 = 10:15 (which simplifies back to 2:3, confirming the proportion holds).',
  faq: [
    {
      q: 'What does it mean for a ratio to be "simplified"?',
      a: 'A simplified ratio has no common factor left between its two numbers other than 1 — it\'s the smallest whole-number form that represents the same relationship, similar to reducing a fraction to lowest terms.',
    },
    {
      q: 'What is a proportion?',
      a: 'A proportion is a statement that two ratios are equal, written as A:B = C:D. Solving a proportion means finding one missing value when the other three are known, assuming the same relationship holds on both sides.',
    },
    {
      q: 'Does this work with decimal numbers?',
      a: 'The "Solve a Proportion" mode works correctly with decimals. The "Simplify a Ratio" mode is designed for whole numbers — decimal inputs may not reduce to a clean simplified form, since the greatest-common-divisor method is built for integers.',
    },
    {
      q: 'Can I use this for recipe scaling?',
      a: 'Yes — "Solve a Proportion" is exactly the tool for that. If a recipe ratio of flour to sugar is 2:3 and you want to scale up to 10 cups of flour, entering A=2, B=3, C=10 tells you how much sugar (X) you need.',
    },
    {
      q: 'Why must all values be positive?',
      a: 'Ratios and proportions in most practical contexts (recipes, maps, mixing ratios, unit comparisons) compare positive quantities, so this calculator restricts inputs to positive numbers to keep results meaningful.',
    },
  ],
};

export default content;
