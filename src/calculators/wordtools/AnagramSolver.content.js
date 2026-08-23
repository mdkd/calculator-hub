const content = {
  howItWorks: [
    'Two words are anagrams of each other if they contain exactly the same letters, the same number of times, just rearranged in a different order — for example, "listen" and "silent" are anagrams.',
    'This tool works in two modes. "Find Anagrams" takes one word, sorts its letters alphabetically to create a "signature" (for example, "listen" becomes "eilnst"), and then checks every word of the same length in the built-in dictionary for a matching signature. "Compare Two Words" instead takes two words you provide and directly checks whether their sorted letter signatures match — and are not simply the same word — to confirm whether they are true anagrams of each other.',
    'Sorting letters into a canonical order is a fast and reliable way to detect anagrams because it turns the "same letters, different order" question into a simple equality check: two words are anagrams exactly when their sorted forms are identical.',
    'Because "Find Anagrams" only searches the app\'s built-in dictionary, results are limited to common English words included in that list — it will not surface anagrams that happen to be rare, technical, or proper nouns not present in the dictionary.',
  ],
  example: 'Using "Find Anagrams" with the word "cat": the sorted signature is "act". Scanning the dictionary for other 3-letter words with that same signature finds "act". Using "Compare Two Words" with "listen" and "silent": both sort to "eilnst" and are different words, so the tool confirms they are anagrams of each other.',
  faq: [
    {
      q: 'What\'s the difference between this and the Word Unscrambler?',
      a: 'They use the same underlying letter-matching technique, but this tool is framed around anagram relationships specifically — finding words related to a given word, or directly comparing two words — while the Word Unscrambler is framed around solving a single jumble of letters.',
    },
    {
      q: 'Can I check anagrams for phrases with spaces?',
      a: 'No, both modes currently accept single words made only of letters A-Z. Multi-word phrase anagrams (like "the eyes" and "they see") are a more complex check and aren\'t supported yet.',
    },
    {
      q: 'Why does "Compare Two Words" say two identical words are not anagrams?',
      a: 'By definition, a word is not considered an anagram of itself — anagrams require a genuine rearrangement into a different word. If you enter the same word twice, the tool correctly reports that they are not anagrams.',
    },
    {
      q: 'Is capitalization or spacing considered?',
      a: 'No, input is automatically converted to lowercase and must not contain spaces or punctuation — only the letters themselves are compared.',
    },
    {
      q: 'Why might "Find Anagrams" return no results even for a real word?',
      a: 'The dictionary built into this tool is a curated list of common words, not an exhaustive dictionary. If no other word in that list shares the same letters, no anagrams will be shown even if one exists in the wider English language.',
    },
  ],
};

export default content;
