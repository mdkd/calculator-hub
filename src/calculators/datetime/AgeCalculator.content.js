const content = {
  howItWorks: [
    'The age calculator finds the exact difference between your date of birth and today\'s date, expressed in whole years, months, and days.',
    'It starts by subtracting the birth year from the current year, and the birth month from the current month. If today\'s day-of-month is smaller than your birth day-of-month, it means the last "monthiversary" hasn\'t happened yet this month, so the calculator borrows one month\'s worth of days (using the number of days in the previous calendar month) and reduces the month count by one.',
    'Similarly, if the adjusted month count is negative — meaning your birthday hasn\'t occurred yet this year — the calculator borrows a year and adds 12 to the month count. This calendar-aware borrowing is what makes the result match how people naturally state their age ("32 years, 4 months, and 10 days") rather than just returning a raw day count.',
    'Because it accounts for varying month lengths and leap years automatically (by using JavaScript\'s native Date object), the result is accurate regardless of which months or leap years fall between your birth date and today.',
  ],
  example: 'If your date of birth is 15 March 1990 and today is 23 August 2026: years = 2026 − 1990 = 36, months = 8 − 3 = 5, days = 23 − 15 = 8. Since neither days nor months needed borrowing, the result is 36 years, 5 months, and 8 days.',
  faq: [
    {
      q: 'Why does my age show 0 years right after my birthday?',
      a: 'The calculator counts a full year only once your birth month and day have both occurred in the current year. Right after your birthday, the year count increments and the month/day counters reset, which is expected and matches how age is conventionally described.',
    },
    {
      q: 'Does it account for leap years?',
      a: 'Yes. Because the calculation is based on actual calendar dates rather than a fixed 365-day year, leap years are automatically handled correctly.',
    },
    {
      q: 'What happens if I enter a future date of birth?',
      a: 'The calculator will show an error, since a birth date in the future cannot be used to calculate a valid current age.',
    },
    {
      q: 'Can I use this to find the age of something other than a person, like a document or an event?',
      a: 'Yes — the same date-difference logic works for calculating the elapsed time since any date, such as an anniversary, a founding date, or a purchase date.',
    },
    {
      q: 'Why does the day count sometimes look larger than 30?',
      a: 'When borrowing a month, the calculator adds the number of days in the previous calendar month (28-31 depending on the month), so the day count can briefly show up to 31 before the month counter absorbs it correctly.',
    },
  ],
};

export default content;
