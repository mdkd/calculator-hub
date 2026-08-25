const content = {
  howItWorks: [
    'Important: this converter uses static, hardcoded example exchange rates — it is not connected to a live rate feed. Real currency markets move constantly (often multiple times per second for major currency pairs), so the rates shown here will not match real-world rates and should never be used for actual transactions, budgeting, or financial decisions.',
    'The calculation itself works the standard way currency converters do: every currency\'s rate is expressed relative to one US Dollar. Converting from currency A to currency B goes through USD as an intermediate step — your amount is first divided by currency A\'s rate to find its USD equivalent, then multiplied by currency B\'s rate to get the final converted amount.',
    'This two-step "convert through a common reference currency" approach is exactly how real-world currency conversion works too, and it\'s why exchange rate tables are usually published relative to a major currency like USD rather than listing every possible pair directly.',
    'This tool exists to demonstrate the conversion mechanics and give a rough, illustrative sense of relative currency values — for anything involving real money, always check a live, authoritative source (your bank, a licensed money transfer service, or a live financial data provider) for the actual current rate.',
  ],
  example: 'Using the example rates in this tool (USD to INR at roughly 83.5): converting 100 USD gives approximately 8,350 INR. This is illustrative only — the actual real-time rate at any given moment will differ.',
  faq: [
    {
      q: 'Are these real, current exchange rates?',
      a: 'No. These are static example values that do not update automatically and will not match real-world rates. Do not use this tool for any real financial transaction — always check a live, authoritative source instead.',
    },
    {
      q: 'Why doesn\'t this calculator use live rates like other currency converters?',
      a: 'Live exchange rate data requires a paid or rate-limited third-party data feed, which this tool doesn\'t currently connect to. The conversion logic itself is correct and standard — only the underlying rate data is static rather than live.',
    },
    {
      q: 'Why convert through USD instead of directly between two currencies?',
      a: 'Expressing every currency\'s value relative to one common reference currency (USD) means you only need to store one rate per currency, rather than a rate for every possible pair — the same approach real financial data providers use.',
    },
    {
      q: 'Which currencies are included?',
      a: 'A set of commonly used major currencies: US Dollar, Euro, British Pound, Indian Rupee, Japanese Yen, Australian Dollar, Canadian Dollar, Chinese Yuan, UAE Dirham, and Singapore Dollar.',
    },
    {
      q: 'Where should I check for real exchange rates?',
      a: 'Your bank, a licensed currency exchange or money transfer service, or a live financial data source will have accurate, up-to-the-moment rates — those are the right places to check before making any real currency exchange decision.',
    },
  ],
};

export default content;
