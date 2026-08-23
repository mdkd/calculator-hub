const content = {
  howItWorks: [
    'This converter handles three categories of units: length, weight, and temperature. Length and weight conversions work by converting your input into a common base unit, then converting from that base unit into your target unit.',
    'For length, the base unit is the meter; for weight, the base unit is the kilogram. Every supported unit has a fixed "toBase" conversion factor — for example, 1 inch = 0.0254 meters, and 1 pound = 0.453592 kilograms. To convert from unit A to unit B, the calculator multiplies your value by A\'s factor to get the base-unit value, then divides by B\'s factor to get the final result.',
    'Temperature cannot use this same multiply-by-a-factor approach because the Celsius, Fahrenheit, and Kelvin scales have different zero points, not just different step sizes. Instead, the calculator converts your input to Celsius first using scale-specific formulas — Fahrenheit to Celsius is (F − 32) × 5/9, and Kelvin to Celsius is K − 273.15 — and then converts from Celsius to your target scale using the reverse formulas.',
    'This two-step "convert to a common reference, then convert to the target" approach keeps the logic simple and makes it easy to add new units later without having to write a separate formula for every possible pair.',
  ],
  example: 'Converting 1000 millimeters to centimeters: millimeter\'s factor is 0.001, so the base value is 1000 × 0.001 = 1 meter. Centimeter\'s factor is 0.01, so the result is 1 ÷ 0.01 = 100. Therefore 1000 mm = 100 cm. For temperature, converting 100°C to Fahrenheit: (100 × 9/5) + 32 = 212°F, the boiling point of water at sea level.',
  faq: [
    {
      q: 'Which length units are supported?',
      a: 'Millimeter, centimeter, meter, kilometer, inch, foot, yard, and mile.',
    },
    {
      q: 'Which weight units are supported?',
      a: 'Milligram, gram, kilogram, tonne, ounce, and pound.',
    },
    {
      q: 'Why can\'t Kelvin be negative?',
      a: 'Kelvin is an absolute temperature scale where 0 K represents absolute zero, the theoretical lowest possible temperature. A negative Kelvin value is physically impossible, so the calculator validates against it.',
    },
    {
      q: 'Can length or weight values be negative?',
      a: 'No — physical lengths and weights cannot be negative in the real world, so the calculator rejects negative inputs for those two categories. Temperature is the exception, since Celsius and Fahrenheit can go below zero.',
    },
    {
      q: 'How precise are the results?',
      a: 'Results are shown rounded to four decimal places, which is precise enough for everyday conversions. The underlying calculation itself uses full floating-point precision.',
    },
  ],
};

export default content;
