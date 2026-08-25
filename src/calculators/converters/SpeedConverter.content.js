const content = {
  howItWorks: [
    'This converter handles common speed units — used for everything from road signs to weather reports to nautical and aviation navigation — by converting through a common base unit, meters per second.',
    'Kilometers per hour converts to meters per second by dividing by 3.6, since there are 3,600 seconds in an hour and 1,000 meters in a kilometer (1000 ÷ 3600 = 1 ÷ 3.6). Miles per hour uses the fixed relationship that 1 mile equals exactly 1,609.344 meters, giving a conversion factor of 0.44704 meters per second per mph.',
    'Knots (nautical miles per hour) are common in maritime and aviation contexts, where 1 knot equals exactly 1 nautical mile (1,852 meters) per hour, giving a conversion factor of about 0.514444 meters per second.',
    'As with the other converters here, every unit is defined by one precise factor relative to the base unit, so any pair of units — however different their typical use case — converts accurately through that shared reference point.',
  ],
  example: 'Converting 100 km/h to mph: 100 km/h = 100 ÷ 3.6 ≈ 27.778 m/s, and dividing by the mph factor of 0.44704 gives 27.778 ÷ 0.44704 ≈ 62.14 mph — the commonly cited equivalent of a 100 km/h speed limit.',
  faq: [
    {
      q: 'Why does dividing by 3.6 convert km/h to m/s?',
      a: 'There are 1,000 meters in a kilometer and 3,600 seconds in an hour, so km/h to m/s requires multiplying by 1,000 and dividing by 3,600 — which simplifies to dividing by 3.6 overall.',
    },
    {
      q: 'What is a knot, and why is it different from mph?',
      a: 'A knot is 1 nautical mile per hour, where a nautical mile (1,852 meters) is based on the Earth\'s circumference rather than the standard land mile (1,609.344 meters) used for mph — so knots and mph are similar but not identical units, commonly used in maritime and aviation contexts respectively.',
    },
    {
      q: 'What speed units do most countries use on road signs?',
      a: 'Most countries use km/h, while the US, UK, and a few others primarily use mph. This calculator handles the conversion between them precisely so you can quickly interpret an unfamiliar speed limit.',
    },
    {
      q: 'Can I use this for wind speed or aircraft speed?',
      a: 'Yes — knots and mph/km/h are all commonly used for wind speed and aircraft speed reporting, and this converter handles all of those units the same way as any other speed conversion.',
    },
    {
      q: 'Why must the speed value be zero or positive?',
      a: 'This calculator treats speed as a magnitude (how fast something is moving), not a signed velocity with direction, so negative values aren\'t accepted.',
    },
  ],
};

export default content;
