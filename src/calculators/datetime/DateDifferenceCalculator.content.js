const content = {
  howItWorks: [
    'This calculator finds the exact amount of time between any two dates, expressed both as a total day count and as a calendar-aware breakdown of years, months, and days.',
    'The total days figure is calculated by converting both dates to milliseconds since a common reference point, subtracting the earlier from the later, and dividing by the number of milliseconds in a day. Total weeks is simply the total days divided by 7.',
    'The years/months/days breakdown works differently — it uses the same calendar-aware borrowing logic as the Age Calculator, subtracting year, month, and day components separately, then "borrowing" a month or year when a component would otherwise be negative (for example, if the end date\'s day-of-month is earlier than the start date\'s, a month is borrowed and converted into the actual number of days in the preceding calendar month). This produces a result that matches how people naturally describe a span of time — "2 years, 5 months, and 14 days" — rather than just a raw day count.',
    'If you enter the end date before the start date, the calculator automatically swaps them and lets you know, so you always get a positive duration regardless of which date you enter first.',
  ],
  example: 'From January 1, 2023 to June 15, 2025: the total span is 896 days (128.0 weeks). Broken down calendar-style, that\'s 2 years, 5 months, and 14 days.',
  faq: [
    {
      q: 'Why do the total days and the years/months/days breakdown seem to represent the same thing differently?',
      a: 'They\'re two different ways of expressing the same duration. Total days is a precise, unambiguous count, while the years/months/days breakdown is calendar-aware and matches how people typically describe elapsed time in everyday conversation — but because months have different lengths, converting between the two isn\'t a simple fixed ratio.',
    },
    {
      q: 'Does this account for leap years?',
      a: 'Yes. Because the calculation is based on actual calendar dates via JavaScript\'s Date object, leap years and varying month lengths are automatically handled correctly.',
    },
    {
      q: 'What happens if I enter the same date for both fields?',
      a: 'The result will show 0 years, 0 months, 0 days, and a total of 0 days — there\'s no time elapsed between a date and itself.',
    },
    {
      q: 'Can I calculate the difference between a past date and a future date?',
      a: 'Yes, both dates can be in the past, present, or future relative to today — the calculator only cares about the span between the two dates you provide, not their relationship to the current date.',
    },
    {
      q: 'What if I accidentally enter the dates in the wrong order?',
      a: 'The calculator detects this automatically, swaps the two dates internally, and shows a note letting you know — so you\'ll still get the correct positive duration either way.',
    },
  ],
};

export default content;
