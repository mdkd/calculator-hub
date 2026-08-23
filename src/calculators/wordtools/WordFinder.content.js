const content = {
  howItWorks: [
    'Word Finder helps you discover valid words that can be built from a set of available letters — like the tiles in your Scrabble or Words With Friends rack — without needing to use every letter, and without the letters needing to appear in any particular order.',
    'This is different from an anagram or unscrambler tool, which requires using all of the given letters exactly once. Word Finder instead checks each dictionary word to see if it can be "built" from your available letters: every letter in the candidate word must appear in your available letters at least as many times as it\'s used in that word. For example, if your letters are "tarnise", the word "rat" can be formed (using one r, one a, one t), and so can "train" or "stain", even though neither uses all seven letters.',
    'To check this efficiently, the tool counts how many of each letter you have available, then counts how many of each letter a candidate word needs, and confirms that your available count is never less than the word\'s required count for any letter.',
    'You can optionally set an exact word length to narrow results down to only words of that specific length, which is useful when you need to fill a specific number of tiles or boxes.',
  ],
  example: 'Entering the letters "tarnise" (7 letters, no length filter) finds every dictionary word of 7 letters or fewer that can be built from that letter set, including 3-letter words like "rat", "ant", and "sit", up through longer words. Setting the exact length to 5 would narrow the results down to only 5-letter matches, such as "stain" or "satin".',
  faq: [
    {
      q: 'Do I need to use all the letters I enter?',
      a: 'No — that\'s the key difference from an anagram tool. Word Finder returns any word that can be built using a subset of your available letters, not just words that use every letter.',
    },
    {
      q: 'Can a letter be used more than once in a word?',
      a: 'Only as many times as it appears in your available letters. For example, if you only enter one "s", no result will use "s" twice, since the tool checks per-letter counts, not just which unique letters are present.',
    },
    {
      q: 'Why does the exact length field matter for games like Scrabble?',
      a: 'When you have a specific number of empty tiles or a specific rack size to fill, filtering to an exact word length quickly narrows a long list of possible words down to only the ones that fit your situation.',
    },
    {
      q: 'Why didn\'t it find a word I know is valid?',
      a: 'This tool only searches its built-in dictionary of common English words, so obscure, technical, or very short/uncommon words may not be included even if they are valid Scrabble words in official word lists.',
    },
    {
      q: 'Are results sorted in any particular order?',
      a: 'Yes, results are sorted from longest word to shortest, and alphabetically within each length, so the most letter-efficient (usually highest-value) words tend to appear first.',
    },
  ],
};

export default content;
