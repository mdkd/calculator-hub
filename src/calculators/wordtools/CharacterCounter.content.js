const content = {
  howItWorks: [
    'This tool counts the total number of characters in your text as you type, both including and excluding whitespace, and can optionally track how many characters remain against a limit you set (useful for tweets, SMS messages, meta descriptions, or form fields with character caps).',
    'The "with spaces" count is simply the length of the text string — every character counts, including spaces, tabs, and line breaks. The "without spaces" count removes every whitespace character (using a regular expression that matches spaces, tabs, and newlines) before measuring the length, giving you the count of visible, non-whitespace characters only.',
    'When you set a character limit, the tool subtracts your current character count (with spaces) from that limit to show how many characters you have left. If your text exceeds the limit, it shows how many characters over you are instead, so you know exactly how much to trim.',
    'All counting happens instantly and locally in your browser as you type — nothing is sent anywhere, and there\'s no need to click a button to see updated results.',
  ],
  example: 'Typing "Hello, world!" gives 13 characters with spaces and 12 without (the single space between "Hello," and "world!" is removed). With a character limit of 10 set, the tool would show "3 characters over limit".',
  faq: [
    {
      q: 'What counts as a "character"?',
      a: 'Every visible symbol, letter, number, and punctuation mark counts as one character, and so does every space, tab, and line break when using the "with spaces" count.',
    },
    {
      q: 'Why would I want to exclude spaces from the count?',
      a: 'Some platforms or use cases (like certain writing prompts or character-based pricing) care only about non-whitespace content, so the "without spaces" figure gives you that more precise measure.',
    },
    {
      q: 'What character limit should I use for social media posts?',
      a: 'Common limits include 280 characters for a standard X (Twitter) post and 160 characters for a single SMS message, but limits vary by platform and change over time — check the current limit for your specific use case.',
    },
    {
      q: 'Is the character limit field required?',
      a: 'No, it\'s optional. Leave it blank if you just want to see the raw character counts without tracking against any specific limit.',
    },
    {
      q: 'Does this count emoji or special characters correctly?',
      a: 'Most simple emoji and special characters are counted as expected, but some complex emoji (like those built from multiple combined characters) may count as more than one character, since the count is based on raw text length rather than visual symbols.',
    },
  ],
};

export default content;
