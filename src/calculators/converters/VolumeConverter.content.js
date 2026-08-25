const content = {
  howItWorks: [
    'This converter handles common volume units — from cooking measurements like cups and fluid ounces to larger metric and imperial units — by converting through a common base unit, the liter.',
    'Metric units scale by simple powers of 10 from the liter: a milliliter is 1/1000th of a liter, and a cubic meter is exactly 1,000 liters. US customary volume units used in cooking and everyday measurement follow a fixed nested hierarchy: 1 US gallon = 4 quarts = 16 cups = 128 fluid ounces, each defined by an exact conversion factor to liters.',
    'One important distinction: the US gallon and the Imperial (UK) gallon are different sizes — a US gallon (3.785411784 liters) is smaller than an Imperial gallon (4.54609 liters), by about 20%. This calculator lists them as separate units so you always get the correct one for your region.',
    'As with the other converters in this section, every unit\'s relationship to the liter is stored as an exact multiplicative factor, so converting between any two units — however different their scale — goes through the same reliable base-unit chain.',
  ],
  example: 'Converting 1 US gallon to US cups: 1 US gallon = 3.785411784 liters, and 1 US cup = 0.2365882365 liters, so 3.785411784 ÷ 0.2365882365 = 16 cups exactly — matching the standard "1 gallon = 16 cups" kitchen conversion.',
  faq: [
    {
      q: 'Why are there separate US Gallon and Imperial Gallon units?',
      a: 'They\'re genuinely different sizes: a US gallon is about 3.785 liters, while an Imperial (UK) gallon is about 4.546 liters — roughly 20% larger. Using the wrong one can meaningfully throw off a recipe or fuel calculation, so both are listed explicitly.',
    },
    {
      q: 'Are US cups and fluid ounces the same everywhere?',
      a: 'This calculator uses US customary definitions (1 US cup = 8 US fluid ounces = 0.2365882365 liters). Some countries define a "cup" differently (for example, a metric cup is often defined as exactly 250 mL), so double-check which standard a recipe is using if precision matters.',
    },
    {
      q: 'How many milliliters are in a liter?',
      a: '1,000 — the metric system is based on powers of 10, so converting between milliliters and liters is always a simple factor-of-1,000 shift.',
    },
    {
      q: 'Can I use this for cooking recipe conversions?',
      a: 'Yes, this is one of the most common uses — converting between cups, fluid ounces, milliliters, and liters is exactly the kind of conversion needed when following a recipe written in different units than you\'re used to.',
    },
    {
      q: 'Why can\'t volume be negative?',
      a: 'A physical volume can\'t meaningfully be less than zero, so the calculator only accepts zero or positive input values.',
    },
  ],
};

export default content;
