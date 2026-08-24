const content = {
  howItWorks: [
    'This calculator computes four common measures of central tendency and spread for a list of numbers: the mean (average), median, mode, and range.',
    'The mean is the sum of all numbers divided by how many there are: mean = (sum of values) / (count of values). The median is the middle value when the numbers are sorted from smallest to largest — if there\'s an even count, it\'s the average of the two middle values instead of a single middle value.',
    'The mode is the value (or values) that appear most frequently in the list. If every value appears exactly once, there is no meaningful mode, and the calculator reports that explicitly rather than showing a misleading result. If multiple values are tied for the most frequent, all of them are listed.',
    'The range is simply the difference between the largest and smallest values in the list (maximum − minimum), giving a quick sense of how spread out the data is.',
  ],
  example: 'For the list 4, 8, 15, 16, 23, 42: the mean is (4+8+15+16+23+42) / 6 = 108 / 6 = 18. Sorted, the list is 4, 8, 15, 16, 23, 42 — with 6 values (even), the median is the average of the 3rd and 4th values: (15 + 16) / 2 = 15.5. Every value appears once, so there is no mode. The range is 42 − 4 = 38.',
  faq: [
    {
      q: 'What\'s the difference between mean, median, and mode?',
      a: 'The mean is the arithmetic average of all values. The median is the middle value when sorted, which is less affected by extreme outliers than the mean. The mode is the most frequently occurring value, useful for categorical or repeated data.',
    },
    {
      q: 'Why might the mean and median be very different?',
      a: 'This usually happens when the data has outliers or is skewed. A few very large or very small values can pull the mean away from where most of the data actually sits, while the median stays closer to the "typical" value.',
    },
    {
      q: 'Can I enter negative numbers or decimals?',
      a: 'Yes, both are fully supported — the calculator works with any real numbers, not just positive integers.',
    },
    {
      q: 'What if my list has more than one mode?',
      a: 'If two or more values tie for the highest frequency, the calculator lists all of them — this is often called a "multimodal" dataset.',
    },
    {
      q: 'How should I separate my numbers?',
      a: 'Use commas, spaces, or a mix of both — the calculator splits on any combination of whitespace and commas, so "4, 8 15,16" would still be read correctly as four separate numbers.',
    },
  ],
};

export default content;
