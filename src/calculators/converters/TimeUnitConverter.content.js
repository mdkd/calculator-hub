const content = {
  howItWorks: [
    'This converter handles common time units — from seconds up to years — by converting through a common base unit, the second, using each unit\'s fixed relationship to it.',
    'Seconds, minutes, hours, days, and weeks all have exact, unambiguous definitions: 60 seconds per minute, 60 minutes per hour, 24 hours per day, and 7 days per week — so those conversions are always precise, with no approximation involved.',
    'Months and years are different, because calendar months vary from 28 to 31 days and years vary between 365 and 366 days (leap years) — there\'s no single "exact" length for either. This calculator uses standard average values: a year is treated as 365.25 days (accounting for the extra leap day roughly every 4 years), and a month is treated as exactly 1/12th of that average year, about 30.4375 days.',
    'Because of this averaging, converting a precise number of seconds into "months" or "years" gives a good estimate for everyday purposes, but won\'t exactly match counting actual calendar months or years from a specific start date — for that kind of exact calendar-based calculation, the Date Difference Calculator is the right tool instead.',
  ],
  example: 'Converting 1 hour to seconds: 1 × 3,600 = 3,600 seconds. Converting 1 year to days: 1 year is treated as 365.25 days in this calculator (the average length accounting for leap years), so 1 year = 365.25 days.',
  faq: [
    {
      q: 'Why isn\'t a "month" always exactly 30 days?',
      a: 'Calendar months genuinely vary in length — from 28 days (February) to 31 days (January, March, etc.). This calculator uses an average month length (about 30.4375 days) for a reasonable general-purpose conversion, since there\'s no single correct fixed value.',
    },
    {
      q: 'Why is a year defined as 365.25 days here instead of 365?',
      a: 'This accounts for leap years, which add an extra day roughly every 4 years. Averaging over a 4-year cycle gives 365.25 days per year, which is more accurate over time than assuming every year has exactly 365 days.',
    },
    {
      q: 'Should I use this or the Date Difference Calculator for exact date math?',
      a: 'Use the Date Difference Calculator when you need the exact elapsed time between two specific calendar dates. Use this Time Unit Converter for general-purpose conversions between fixed time units, like converting a duration in seconds into hours, or estimating years from a large day count.',
    },
    {
      q: 'Are seconds, minutes, hours, days, and weeks always exact?',
      a: 'Yes — unlike months and years, these units have fixed, universally agreed-upon lengths (60 seconds/minute, 60 minutes/hour, 24 hours/day, 7 days/week) with no ambiguity or averaging involved.',
    },
    {
      q: 'Can I use this to convert age in seconds into years?',
      a: 'Yes, though for a precise age (accounting for your actual birth date and today\'s date), the Age Calculator will give a more exact years/months/days breakdown — this converter is better suited for rough estimates or converting a known duration.',
    },
  ],
};

export default content;
