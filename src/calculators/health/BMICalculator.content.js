const content = {
  howItWorks: [
    'Body Mass Index (BMI) is a simple screening measure that estimates whether your weight is healthy relative to your height. It is widely used because it only requires two easy-to-measure values: height and weight.',
    'The formula is BMI = weight (kg) / height (m)². The calculator first converts any imperial inputs to metric — feet and inches to meters, and pounds to kilograms — so the same formula can be applied regardless of which units you choose.',
    'Once the BMI value is calculated, it is placed into one of four standard World Health Organization categories: below 18.5 is Underweight, 18.5 to 24.9 is Normal weight, 25 to 29.9 is Overweight, and 30 and above is Obese.',
    'BMI is a useful general indicator at a population level, but it does not directly measure body fat percentage and does not account for factors like muscle mass, bone density, age, or sex, so it should be treated as a starting point rather than a complete health assessment.',
  ],
  example: 'For a person who is 170 cm tall and weighs 65 kg: height in meters = 1.70, so BMI = 65 / (1.70 × 1.70) = 65 / 2.89 ≈ 22.5. A BMI of 22.5 falls within the 18.5–24.9 range, so this person would be classified as Normal weight.',
  faq: [
    {
      q: 'What do the BMI categories mean?',
      a: 'Under 18.5 is classified as underweight, 18.5–24.9 as normal weight, 25–29.9 as overweight, and 30 or above as obese. These thresholds come from World Health Organization guidelines for adults.',
    },
    {
      q: 'Is BMI accurate for everyone?',
      a: 'BMI is a general screening tool, not a diagnosis. It can be less accurate for athletes with high muscle mass, older adults, pregnant people, and children, since it doesn\'t distinguish between muscle and fat. Consult a healthcare provider for a personalized assessment.',
    },
    {
      q: 'Can I enter my height in feet and inches instead of centimeters?',
      a: 'Yes, use the ft/in toggle to switch the height input, and the calculator will convert it to meters internally before computing BMI.',
    },
    {
      q: 'Can I use pounds instead of kilograms for weight?',
      a: 'Yes, use the kg/lb toggle. Pounds are converted to kilograms (1 lb = 0.453592 kg) before the BMI formula is applied.',
    },
    {
      q: 'Why does the calculator reject zero or negative values?',
      a: 'Height and weight must be positive real-world measurements — a zero or negative value would produce a meaningless or undefined BMI, so the calculator validates against that.',
    },
  ],
};

export default content;
