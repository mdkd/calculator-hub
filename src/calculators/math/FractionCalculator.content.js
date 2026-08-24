const content = {
  howItWorks: [
    'This calculator performs addition, subtraction, multiplication, or division on two fractions, and automatically simplifies the result to its lowest terms.',
    'Addition and subtraction use the cross-multiplication method to find a common denominator without needing to compute the least common multiple first: a/b ± c/d = (a×d ± c×b) / (b×d). This always produces a correct common denominator (though not always the smallest one), which is why the result is simplified afterward.',
    'Multiplication simply multiplies numerators together and denominators together: (a/b) × (c/d) = (a×c) / (b×d). Division multiplies the first fraction by the reciprocal (flipped version) of the second: (a/b) ÷ (c/d) = (a/b) × (d/c) = (a×d) / (b×c), which is the standard "keep, change, flip" rule taught for dividing fractions.',
    'After computing the raw result, the calculator finds the greatest common divisor (GCD) of the resulting numerator and denominator and divides both by it, reducing the fraction to its simplest equivalent form — and also shows the decimal equivalent for convenience.',
  ],
  example: 'Adding 1/2 + 1/3: using cross-multiplication, (1×3 + 1×2) / (2×3) = 5/6, which is already in lowest terms (decimal: 0.8333). Multiplying 2/3 × 3/4: (2×3) / (3×4) = 6/12, which simplifies to 1/2 (decimal: 0.5) after dividing both by their GCD of 6.',
  faq: [
    {
      q: 'Why is my result already in simplest form even though I didn\'t simplify my inputs?',
      a: 'The calculator automatically reduces the final result to lowest terms using the greatest common divisor, regardless of whether your original fractions were already simplified — you never need to pre-simplify your inputs.',
    },
    {
      q: 'What happens if I try to divide by a fraction with a numerator of 0?',
      a: 'Dividing by zero (or a fraction equal to zero) is mathematically undefined, so the calculator shows an error instead of attempting the calculation.',
    },
    {
      q: 'Can I enter negative fractions?',
      a: 'Yes, negative numerators and denominators are both supported. The calculator normalizes the sign so the denominator of the result is always shown as positive.',
    },
    {
      q: 'Why do numerators and denominators need to be whole numbers?',
      a: 'A fraction, by definition, is a ratio of two integers. Entering decimals would no longer represent a standard fraction in the way this calculator\'s arithmetic is designed to handle.',
    },
    {
      q: 'Does the calculator show mixed numbers (like 1½) instead of improper fractions?',
      a: 'No, results are always shown as a simple numerator/denominator pair (which may be an "improper" fraction with a numerator larger than the denominator), along with the decimal equivalent for easy reference.',
    },
  ],
};

export default content;
