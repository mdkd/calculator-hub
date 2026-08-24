const content = {
  howItWorks: [
    'This calculator adds or subtracts a chosen amount of time — days, weeks, months, or years — from a starting date, and tells you exactly what date results.',
    'For days and weeks, the calculator simply shifts the date forward or backward by that many actual calendar days (a week being treated as exactly 7 days), which always produces an unambiguous result.',
    'For months and years, it changes the month or year component of the date directly rather than approximating with a fixed number of days — this correctly handles varying month lengths automatically. If adding months would land on a day that doesn\'t exist in the target month (for example, adding one month to January 31st, since February doesn\'t have 31 days), JavaScript\'s date handling rolls the date forward into the following month rather than silently producing an invalid date — worth double-checking if you\'re working near the end of a month.',
    'Subtracting is handled as adding a negative amount, so the same date math applies in both directions — the "Subtract" option doesn\'t use separate logic, just a flipped sign.',
  ],
  example: 'Adding 90 days to January 15, 2026 gives Wednesday, April 15, 2026.',
  faq: [
    {
      q: 'What happens if I add a month to a date near the end of the month?',
      a: 'If the resulting month is shorter than the day-of-month you started with (like adding a month to January 31st, since February usually has 28 or 29 days), the date will roll over into the following month rather than clamp to the last valid day — so it\'s worth checking the result carefully for month-end dates.',
    },
    {
      q: 'Is a "month" always treated as 30 days?',
      a: 'No — adding a month moves the calendar month forward by one, using each month\'s actual real-world length, not a fixed 30-day approximation. This is more accurate than day-based approximations for month or year calculations.',
    },
    {
      q: 'Does this account for leap years when adding years?',
      a: 'Yes. If you add a year to February 29th of a leap year and land on a non-leap year, standard date-handling rules apply (which may shift the date to March 1st) — this follows the same well-defined logic browsers use for all date arithmetic.',
    },
    {
      q: 'Can I subtract time to find a past date instead of adding?',
      a: 'Yes, use the "Subtract" toggle at the top — it works exactly the same way as "Add" but moves backward in time instead of forward.',
    },
    {
      q: 'Why does the amount need to be a whole number?',
      a: 'Fractional days, weeks, months, or years don\'t map cleanly onto calendar dates (what would "2.5 months" from a given date even mean exactly?), so the calculator requires a whole number to keep results unambiguous.',
    },
  ],
};

export default content;
