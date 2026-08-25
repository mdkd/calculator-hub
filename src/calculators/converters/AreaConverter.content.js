const content = {
  howItWorks: [
    'This converter handles common units of area — the amount of two-dimensional space something covers — by converting your value into a common base unit (the square meter) and then into your target unit.',
    'Metric area units scale predictably from the meter: a square kilometer is 1,000² = 1,000,000 times larger than a square meter, and a square centimeter is 100² = 10,000 times smaller, since area scales with the square of the linear conversion factor, not the factor itself.',
    'Imperial and other common units use their standard fixed definitions: a square foot equals 0.09290304 square meters (based on 1 foot = 0.3048 meters, squared), an acre equals exactly 4,046.8564224 square meters (the historical definition of 1 chain × 1 furlong), and a hectare is simply defined as exactly 10,000 square meters.',
    'Because every unit\'s relationship to the base unit is stored precisely, chaining a conversion through the base unit (rather than trying to convert directly between every possible pair of units) keeps the calculator accurate and easy to extend with new units later.',
  ],
  example: 'Converting 1 acre to square feet: 1 acre = 4,046.8564224 m², and 1 square foot = 0.09290304 m², so 4,046.8564224 ÷ 0.09290304 = 43,560 square feet — the well-known standard figure for how many square feet are in an acre.',
  faq: [
    {
      q: 'What\'s the difference between a hectare and an acre?',
      a: 'A hectare is a metric unit equal to exactly 10,000 square meters. An acre is an imperial/US customary unit equal to about 4,046.86 square meters. One hectare is roughly 2.47 acres.',
    },
    {
      q: 'Why does area scale by the square of the length conversion?',
      a: 'Area is a two-dimensional measurement (length × width), so when you convert a length unit that\'s, say, 3 times larger, the corresponding area unit becomes 3 × 3 = 9 times larger — not just 3 times. This is why square kilometer to square meter is a factor of 1,000,000, not 1,000.',
    },
    {
      q: 'Which units are commonly used for land measurement?',
      a: 'Acres and hectares are the most common units for land area, while square feet, square meters, and square yards are more typical for smaller spaces like rooms or building plots.',
    },
    {
      q: 'Can I convert between metric and imperial units directly?',
      a: 'Yes — since every unit is converted through the same base unit (square meters), you can convert between any two units in the list, regardless of whether they\'re metric or imperial.',
    },
    {
      q: 'Can area values be negative?',
      a: 'No, physical area cannot be negative, so the calculator only accepts zero or positive values.',
    },
  ],
};

export default content;
