const content = {
  howItWorks: [
    'A word unscrambler solves anagrams: given a set of jumbled letters, it finds real words hidden within them. By default it finds full anagrams that use exactly all of your letters, but you can also configure it to search for shorter words using only some of your letters, filtered by length or by how the word starts or ends.',
    'When "Use all letters" is checked, the tool compares "letter signatures": it takes your jumbled input, converts it to lowercase, and sorts the letters alphabetically to produce a signature — for example, both "cat" and "act" sort to the signature "act". It then checks every same-length word in its built-in dictionary and returns every word whose sorted signature matches yours, since two words are anagrams of each other exactly when their sorted letters are identical.',
    'When "Use all letters" is unchecked, the tool switches to a subset match: it counts how many of each letter your jumble contains, then checks each dictionary word to confirm every letter it needs is available in at least that quantity. This lets you find shorter words hidden inside a longer jumble — for example, "atrs" contains the 3-letter word "art" — and you can optionally set an exact word length to narrow the results further.',
    'The "Starts With" and "Ends With" filters apply on top of either mode, keeping only results that begin or end with the letters you specify — useful when you already have a partial answer (like in a crossword or word game) and want to narrow down the possibilities.',
  ],
  example: 'With "Use all letters" checked, entering "tca" produces the signature "act" and finds both "act" and "cat" — full anagrams using all three letters. With "Use all letters" unchecked and letters "atrs", the tool also finds shorter words like "art", "rat", and "sat" that use only some of the available letters, alongside the full 4-letter anagram "star". Adding "Starts With: r" on top of that narrows the results down to just "rat".',
  faq: [
    {
      q: 'Why didn\'t it find any words for my letters?',
      a: 'The tool only checks against its built-in dictionary. If no word in that list matches your letters (and any filters you\'ve set), no matches will be shown, even if a valid word technically exists in the full English language.',
    },
    {
      q: 'Do I need to enter letters in a specific order?',
      a: 'No — the order doesn\'t matter at all, since the tool works from your available letters regardless of the order you type them in.',
    },
    {
      q: 'What does "Use all letters" control?',
      a: 'When checked, only full anagrams that use every one of your letters exactly once are shown. When unchecked, the tool also finds shorter words built from a subset of your letters, and you can optionally set an exact word length to filter further.',
    },
    {
      q: 'How do the "Starts With" and "Ends With" filters work?',
      a: 'They\'re applied after the main letter matching, keeping only results that begin or end with the text you enter. They work in both "exact anagram" and "subset" modes, and can be used together or separately.',
    },
    {
      q: 'Can I use numbers or special characters?',
      a: 'No, only letters A–Z are accepted in any field. The calculator will show an error if a field contains anything else.',
    },
  ],
};

export default content;
