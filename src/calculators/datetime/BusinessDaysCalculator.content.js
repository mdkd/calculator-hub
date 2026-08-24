const content = {
  howItWorks: [
    'This calculator counts the number of business days (Monday through Friday) between two dates, which is useful for estimating shipping times, project deadlines, or work schedules that skip weekends.',
    'It works by stepping through every single calendar day from the start date to the end date, one day at a time, and checking whether each day falls on a weekend. JavaScript\'s Date object assigns each day a number from 0 (Sunday) to 6 (Saturday) via getDay() — the calculator counts a day as a weekend day if that number is 0 or 6, and as a business day otherwise.',
    'Both the start date and end date are included in the count (an "inclusive" range) — so if you select the same Monday for both fields, the result will show 1 business day, not 0.',
    'If you enter the end date before the start date, the calculator automatically swaps them so you still get a correct, positive count, with a note letting you know that happened.',
  ],
  example: 'From Monday, January 1, 2024 to Friday, January 12, 2024 (inclusive, a 12-day span): there are 10 business days and 2 weekend days — the single weekend of Saturday January 6 and Sunday January 7 falls entirely within the range.',
  faq: [
    {
      q: 'Does this account for public holidays?',
      a: 'No, this calculator only excludes Saturdays and Sundays. It doesn\'t know about national, regional, or company-specific holidays, so if your date range includes holidays, the actual number of working days will be lower than what\'s shown.',
    },
    {
      q: 'Are both the start and end dates included in the count?',
      a: 'Yes, the range is inclusive of both endpoints. If your start and end date are the same weekday, the result will correctly show 1 business day rather than 0.',
    },
    {
      q: 'What counts as a "weekend" in this calculator?',
      a: 'Saturday and Sunday, following the standard Monday-to-Friday business week used in most countries. If your work week is structured differently (some countries use a Friday–Saturday or Sunday–Thursday weekend), this calculator\'s results won\'t apply directly.',
    },
    {
      q: 'What if I enter the dates in the wrong order?',
      a: 'The calculator detects this, swaps the two dates internally, and shows a note — so you\'ll still get the correct count regardless of which date you enter first.',
    },
    {
      q: 'Why is this useful for shipping or delivery estimates?',
      a: 'Many shipping carriers quote delivery windows in "business days" rather than calendar days, since they don\'t process or deliver packages on weekends — this calculator helps translate a calendar date range into that business-day figure.',
    },
  ],
};

export default content;
