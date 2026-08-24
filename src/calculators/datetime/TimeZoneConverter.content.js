const content = {
  howItWorks: [
    'This tool converts a date and time from one time zone to another, correctly accounting for each zone\'s current UTC offset — including daylight saving time, which shifts many zones\' offsets by an hour for part of the year.',
    'Rather than using fixed offset numbers (which would be wrong for roughly half the year in any zone that observes daylight saving), this calculator uses real IANA time zone identifiers (like "America/New_York" or "Asia/Kolkata") together with the browser\'s built-in Intl API, which maintains an accurate, regularly updated database of every time zone\'s rules, including historical changes.',
    'Converting works in two steps. First, your entered date and time (as a "wall clock" reading in the source zone) is translated into the single, unambiguous point in time it represents — this requires figuring out what UTC offset that source zone was actually observing at that specific moment, since the same zone can have different offsets at different times of year. Second, that underlying point in time is reformatted into the wall-clock time it corresponds to in the destination zone, using that zone\'s offset at the same instant.',
    'Because both steps work from the same real underlying instant in time, the conversion is accurate even across DST transitions, leap years, and zones with unusual offsets (like 30- or 45-minute offsets used by some countries).',
  ],
  example: 'Converting 2:30 PM on July 15, 2026 in India (Asia/Kolkata, UTC+5:30 year-round) to New York (America/New_York, which observes Eastern Daylight Time in July, UTC−4): the result is 5:00 AM on the same day in New York — a 9.5-hour difference, reflecting India\'s +5:30 offset combined with New York\'s −4:00 summer offset.',
  faq: [
    {
      q: 'Why does this need daylight saving time information at all?',
      a: 'Many time zones shift their UTC offset by an hour for part of the year (for example, New York is UTC−5 in winter but UTC−4 in summer). A conversion tool using fixed offsets would be wrong for roughly half the year in any such zone — using real IANA time zone rules keeps the conversion correct year-round.',
    },
    {
      q: 'What does "IST" mean if I select India?',
      a: 'IST here refers to Indian Standard Time (UTC+5:30), which India uses year-round with no daylight saving adjustment — not to be confused with other regions that use the same IST abbreviation for different time zones (like Israel Standard Time or Irish Standard Time).',
    },
    {
      q: 'Can the converted date be different from the original date?',
      a: 'Yes — depending on the time and the offset difference between the two zones, the converted result can fall on the day before or the day after your original date. The result always shows the full date so you can see this clearly.',
    },
    {
      q: 'Does this list include every time zone in the world?',
      a: 'No, it includes a curated list of commonly used zones covering most major regions and cities. If you need a zone that isn\'t listed, choose the nearest major city that shares the same time zone rules.',
    },
    {
      q: 'Is the conversion affected by my own device\'s time zone?',
      a: 'No — both the source and destination zones are explicitly selected from the dropdowns, so the result doesn\'t depend on your device\'s local time zone settings at all.',
    },
  ],
};

export default content;
