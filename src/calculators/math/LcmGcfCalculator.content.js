const content = {
  howItWorks: [
    'The Greatest Common Factor (GCF, also called GCD) is the largest whole number that divides evenly into every number in your list. The Least Common Multiple (LCM) is the smallest whole number that every number in your list divides evenly into. Both are computed here for two or more whole numbers at once.',
    'GCF is calculated using the Euclidean algorithm: for two numbers, repeatedly replace the larger number with the remainder of dividing it by the smaller number, until the remainder is zero — the last non-zero value is the GCF. For more than two numbers, the calculator finds the GCF of the first two, then finds the GCF of that result with the next number, and so on, since GCF(a, b, c) = GCF(GCF(a, b), c).',
    'LCM is calculated using its relationship to GCF: LCM(a, b) = (a × b) / GCF(a, b). This works because multiplying two numbers together counts their shared factors twice, and dividing by the GCF removes that duplication. As with GCF, the LCM of more than two numbers is found by combining them pairwise: LCM(a, b, c) = LCM(LCM(a, b), c).',
    'Both concepts are widely used in fraction arithmetic — GCF simplifies fractions to lowest terms, while LCM finds the smallest common denominator needed to add or subtract fractions with different denominators.',
  ],
  example: 'For the numbers 12, 18, and 30: GCF(12, 18) = 6, then GCF(6, 30) = 6, so the overall GCF is 6. For LCM: LCM(12, 18) = (12 × 18) / 6 = 36, then LCM(36, 30) = (36 × 30) / GCF(36, 30) = 1080 / 6 = 180, so the overall LCM is 180.',
  faq: [
    {
      q: 'What\'s the difference between GCF and LCM?',
      a: 'GCF is the largest number that divides into all your numbers (useful for simplifying), while LCM is the smallest number that all your numbers divide into evenly (useful for finding common denominators or syncing repeating events).',
    },
    {
      q: 'Why do I need at least two numbers?',
      a: 'GCF and LCM are both comparisons between multiple numbers — a single number doesn\'t have a meaningful "common" factor or multiple relative to nothing else, so at least two values are required.',
    },
    {
      q: 'Can I use negative numbers or decimals?',
      a: 'No, GCF and LCM are defined for positive whole numbers only. Enter positive integers — decimals and negative numbers aren\'t supported since the concept doesn\'t apply cleanly to them.',
    },
    {
      q: 'What are GCF and LCM used for in real life?',
      a: 'GCF is commonly used to simplify fractions or divide items into equal groups with no leftovers. LCM is used to find common denominators when adding fractions, or to figure out when repeating events (like two different schedules) will next coincide.',
    },
    {
      q: 'Is GCF the same as GCD?',
      a: 'Yes — "Greatest Common Factor" (GCF) and "Greatest Common Divisor" (GCD) refer to exactly the same concept and are used interchangeably.',
    },
  ],
};

export default content;
