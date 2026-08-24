const content = {
  howItWorks: [
    'This tool tells you which day of the week any date falls on — past, present, or future — using the same proleptic Gregorian calendar system that JavaScript, and most modern software, use internally.',
    'Every date can be converted into a single count of days since a fixed reference point, and the day of the week follows directly from that count using modular arithmetic (dividing by 7 and looking at the remainder), since the 7-day week cycle repeats in a completely predictable pattern. The browser\'s built-in date engine handles this calculation, including correctly accounting for leap years — years divisible by 4, except centuries not divisible by 400 — since leap days shift the day-of-week pattern for every date that follows them.',
    'For dates in the future, this shows what day of the week that date will fall on, assuming the modern Gregorian calendar continues unchanged (which it will, for any date you\'re likely to plan around). For dates in the past, it shows what day of the week that date fell on according to the same Gregorian rules.',
    'One caveat: for dates before October 15, 1582, this won\'t match historical records, since the world used the Julian calendar before that point, and different countries switched to the Gregorian calendar at different times (some not until the 20th century). This calculator applies the modern Gregorian system uniformly, which is standard for software but doesn\'t reflect the calendar actually in use at the time in older historical records.',
  ],
  example: 'July 4, 1776 (US Independence Day) falls on a Thursday. January 1, 2000 falls on a Saturday.',
  faq: [
    {
      q: 'Can I check a date far in the future, like 100 years from now?',
      a: 'Yes, the calculation works for any date within the range JavaScript\'s Date object supports (roughly ±273,000 years from year 0), so any realistic future date works fine.',
    },
    {
      q: 'Why might this not match a history book for a very old date?',
      a: 'Before October 15, 1582, most of the world used the Julian calendar, which drifts from the Gregorian calendar by a growing number of days the further back you go. This tool always uses the modern Gregorian system, so very old dates won\'t align with the calendar actually in use at the time.',
    },
    {
      q: 'Does it account for leap years correctly?',
      a: 'Yes — leap years (and the special century-year exception, where years divisible by 100 are not leap years unless also divisible by 400) are handled automatically since the calculation relies on the browser\'s standard date engine.',
    },
    {
      q: 'What\'s a practical use for this tool?',
      a: 'It\'s handy for quickly checking what day of the week a future event, deadline, or anniversary falls on, or for confirming what day of the week you were born, without needing to count manually on a calendar.',
    },
    {
      q: 'Does the result depend on my timezone?',
      a: 'No — since this tool works with whole calendar dates (not specific times), the day-of-week result is the same regardless of what timezone you\'re in.',
    },
  ],
};

export default content;
