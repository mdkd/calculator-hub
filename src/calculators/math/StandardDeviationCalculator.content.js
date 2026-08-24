const content = {
  howItWorks: [
    'Standard deviation measures how spread out a set of numbers is from their average. A small standard deviation means the values cluster tightly around the mean; a large one means they\'re spread far apart.',
    'The calculation starts with the mean (average) of all values, then finds how far each value is from that mean, squares each of those differences (so negative and positive differences don\'t cancel out), and averages the squared differences — this average is called the variance. The standard deviation is simply the square root of the variance, which brings the units back to match the original data (variance is in squared units, standard deviation is not).',
    'This calculator supports two versions of the calculation. "Population" mode divides by the total count of numbers (n) and is used when your data represents an entire group you care about. "Sample" mode divides by one less than the count (n − 1) instead — a correction (called Bessel\'s correction) that produces a better estimate of the true population standard deviation when your data is only a sample drawn from a larger group, which is the more common real-world scenario.',
    'Because sample standard deviation divides by a smaller number (n − 1 instead of n), it always produces a slightly larger result than population standard deviation for the same data — this is intentional, correcting for the fact that a sample tends to underestimate the true variability of the full population.',
  ],
  example: 'For the values 2, 4, 4, 4, 5, 5, 7, 9 (a classic textbook example): the mean is 5. In population mode, the variance is 4, and the standard deviation is 2. In sample mode, the variance is 32/7 ≈ 4.5714, and the standard deviation is √4.5714 ≈ 2.1381.',
  faq: [
    {
      q: 'Should I use "Sample" or "Population" mode?',
      a: 'Use Sample mode if your numbers are a subset drawn from a larger group you\'re trying to describe (the most common case — like a survey of some customers, not all of them). Use Population mode only if your numbers represent every member of the group you care about, with nothing left out.',
    },
    {
      q: 'Why does sample standard deviation need at least two numbers?',
      a: 'The sample formula divides by (n − 1). With only one number, that would mean dividing by zero, which is undefined — you need at least two data points to estimate variability from a sample.',
    },
    {
      q: 'What\'s the difference between variance and standard deviation?',
      a: 'Variance is the average of the squared differences from the mean, expressed in squared units (which can be hard to interpret). Standard deviation is the square root of variance, bringing it back to the same units as your original data, which makes it much easier to interpret directly.',
    },
    {
      q: 'What does a standard deviation of 0 mean?',
      a: 'It means every number in your list is identical — there\'s no variation at all, so the spread from the mean is zero.',
    },
    {
      q: 'Can I use negative numbers or decimals?',
      a: 'Yes, standard deviation works with any real numbers, including negatives and decimals — it only cares about how far each value is from the mean, not the sign of the values themselves.',
    },
  ],
};

export default content;
