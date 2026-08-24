const content = {
  howItWorks: [
    'This countdown timer shows exactly how much time remains until a date and time you choose, updating live every second for as long as you keep the page open.',
    'It works by taking the target date and time you enter and converting it into a single point in time, then repeatedly subtracting the current moment from that target to get the remaining milliseconds. That difference is then broken down into whole days, hours, minutes, and seconds using division and modulo arithmetic — for example, the hours remaining is found by taking the total remaining hours and finding the remainder after dividing by 24, so it always shows a value between 0 and 23 rather than an ever-growing hour count.',
    'If you don\'t specify a time, the countdown defaults to midnight (00:00) at the start of your target date. The countdown is validated to ensure the target is genuinely in the future — if you pick a date/time that has already passed, you\'ll be asked to choose a future one instead.',
    'Once the countdown reaches zero, it stops decrementing and shows a message that the target date and time has arrived, rather than continuing into negative numbers.',
  ],
  example: 'If you set a countdown for a target that is exactly 5 days, 3 hours, and 20 minutes away, the display will read "5d 3h 20m 0s remaining" and then continue counting down second by second from there — updating automatically without needing to refresh the page.',
  faq: [
    {
      q: 'Does the countdown keep running if I switch to another browser tab?',
      a: 'The countdown timer will typically pause or slow down while the tab is in the background, since browsers throttle timers on inactive tabs to save resources — it will catch up and show the correct remaining time as soon as you return to the tab.',
    },
    {
      q: 'What timezone is the countdown based on?',
      a: 'The target date and time you enter, and the countdown itself, are both based on your device\'s local timezone — there\'s no manual timezone conversion involved.',
    },
    {
      q: 'What happens when the countdown reaches zero?',
      a: 'The timer stops and displays a message that the target date and time has arrived, instead of continuing to count into negative time.',
    },
    {
      q: 'Can I set a countdown to a date without specifying a time?',
      a: 'Yes, the time field is optional — if left blank, the countdown targets midnight (00:00) at the start of the date you selected.',
    },
    {
      q: 'Why won\'t it let me start a countdown to a date in the past?',
      a: 'A countdown to a time that has already passed wouldn\'t make sense — the calculator checks that your target is in the future before starting, and asks you to pick a valid future date/time otherwise.',
    },
  ],
};

export default content;
