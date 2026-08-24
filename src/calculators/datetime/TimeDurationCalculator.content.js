const content = {
  howItWorks: [
    'This calculator finds the elapsed time between a start time and an end time, expressed in hours and minutes, and also as a total minute count.',
    'It works by converting both times into a single number of minutes since midnight (hours × 60 + minutes), then subtracting the start from the end. That raw minute total is then converted back into hours and minutes for display — the hours are the total minutes divided by 60 (rounded down), and the remaining minutes are what\'s left over (the remainder after dividing by 60).',
    'If the end time is earlier than the start time — for example, a start time of 10:30 PM and an end time of 6:15 AM — the calculator assumes the end time falls on the following day, adding 24 hours (1440 minutes) before subtracting, so overnight shifts and durations are handled correctly instead of producing a negative result.',
    'This tool works with times only, not full dates, so it\'s best suited for durations within a single day or overnight (up to 24 hours) — for spans across multiple full days, the Date Difference Calculator is a better fit.',
  ],
  example: 'From 10:30 PM (22:30) to 6:15 AM (06:15) the next morning: since the end time is earlier in the clock than the start time, the calculator treats it as being on the next day. The duration works out to 7 hours 45 minutes (465 total minutes).',
  faq: [
    {
      q: 'What happens if the end time is earlier than the start time?',
      a: 'The calculator assumes you mean an overnight span — the end time is treated as occurring on the following day, and a note confirms this assumption so you know the result reflects a duration crossing midnight.',
    },
    {
      q: 'Can I calculate a duration longer than 24 hours?',
      a: 'No, this calculator only works with clock times (not dates), so it can\'t distinguish between "tomorrow" and "the day after tomorrow." For durations spanning more than one day, use the Date Difference Calculator instead, which works with full calendar dates.',
    },
    {
      q: 'Does this account for time zones?',
      a: 'No, both times are treated as being in the same time zone (whatever time zone you intend) — there\'s no conversion happening. For cross-timezone calculations, use the Time Zone Converter instead.',
    },
    {
      q: 'What if I enter the same time for both fields?',
      a: 'The result will show 0 hours and 0 minutes — no time has elapsed between a time and itself.',
    },
    {
      q: 'Is this useful for calculating work shift lengths?',
      a: 'Yes — entering a shift\'s start and end time (including overnight shifts) gives you the exact worked duration, which is one of the most common uses for this kind of calculator.',
    },
  ],
};

export default content;
