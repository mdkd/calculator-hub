const content = {
  howItWorks: [
    'This converter fetches live exchange rates from a currency data API each time you load the page, so conversions reflect current market rates rather than a fixed, outdated table.',
    'Every rate is expressed relative to one US Dollar. Converting from currency A to currency B goes through USD as an intermediate step — your amount is first divided by currency A\'s USD rate to find its USD equivalent, then multiplied by currency B\'s USD rate to get the final converted amount. This is the same two-step approach real financial data providers use, since it only requires storing one rate per currency rather than a rate for every possible pair.',
    'If the live rate service can\'t be reached (for example, due to a network issue or the API being temporarily down), the calculator automatically falls back to a built-in static snapshot of approximate rates, and clearly flags on-screen that you\'re seeing fallback data rather than live rates. You can also manually retry fetching live rates at any time using the "Refresh" or "Try again" link shown above the form.',
    'Exchange rates shown reflect the source used by the underlying data provider (typically updated at least once daily) — for large transactions, time-sensitive trades, or anything involving real money, always cross-check against your bank or a dedicated financial platform, since the rate you\'re actually offered can differ from the reference rate shown here (banks and exchange services typically add their own margin).',
  ],
  example: 'If live rates show 1 USD ≈ 83.5 INR, converting 100 USD gives approximately 8,350 INR at that moment. Because these are live rates, the exact figure will shift over time as currency markets move — refreshing the page (or clicking "Refresh") re-fetches the latest available rate.',
  faq: [
    {
      q: 'Are these real, live exchange rates?',
      a: 'Yes — the calculator fetches current rates from a live currency data API when the page loads. If that fetch fails for any reason, it automatically switches to a static fallback and clearly labels it as such, so you always know which kind of data you\'re looking at.',
    },
    {
      q: 'How often do the rates update?',
      a: 'Rates are fetched fresh each time you load the page, and you can manually trigger another fetch at any time using the "Refresh" link. The underlying data source itself typically updates at least once a day, so rates may not reflect second-by-second market movements.',
    },
    {
      q: 'Can I use this for real transactions or financial decisions?',
      a: 'Use it as a helpful reference, but for anything involving real money, confirm the actual rate with your bank, card provider, or exchange service first — the rate you\'re actually offered will typically include a margin or fee on top of the reference rate shown here.',
    },
    {
      q: 'What happens if the live rate service is down?',
      a: 'The calculator automatically falls back to a built-in static snapshot of approximate rates and shows a clear on-page warning that you\'re seeing fallback (not live) data, so you\'re never silently given stale numbers without knowing it.',
    },
    {
      q: 'Why convert through USD instead of directly between two currencies?',
      a: 'Expressing every currency\'s value relative to one common reference currency (USD) means only one rate per currency needs to be tracked, rather than a rate for every possible pair — the same approach real financial data providers use.',
    },
  ],
};

export default content;
