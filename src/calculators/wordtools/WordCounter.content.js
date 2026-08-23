const content = {
  howItWorks: [
    'This tool counts words, sentences, and paragraphs in real time as you type or paste text, and estimates how long it would take an average reader to get through it.',
    'The word count works by trimming leading and trailing whitespace, then splitting the text on any run of whitespace characters (spaces, tabs, or line breaks) and counting the resulting chunks. This means multiple spaces between words don\'t inflate the count, and empty input correctly shows zero words.',
    'Sentence count splits the text on sentence-ending punctuation — periods, question marks, and exclamation points — and counts the non-empty segments that result. Paragraph count splits the text on line breaks and counts non-empty lines, so a blank line (or pressing Enter) starts a new paragraph.',
    'Reading time is estimated using a standard assumption of 200 words per minute, a commonly cited average adult silent-reading speed, and is rounded up to the nearest whole minute (or shown as "< 1 min" for very short text).',
  ],
  example: 'Pasting a 400-word article produces a reading time estimate of 400 ÷ 200 = 2 minutes. A short two-sentence note like "Hello there. How are you?" would show 4 words and 2 sentences.',
  faq: [
    {
      q: 'Does the word count update automatically?',
      a: 'Yes, all statistics recalculate instantly as you type or paste text — there\'s no need to click a button.',
    },
    {
      q: 'How accurate is the reading time estimate?',
      a: 'It\'s a rough estimate based on a 200 words-per-minute average reading speed. Actual reading time varies significantly by reader, content complexity, and familiarity with the subject matter.',
    },
    {
      q: 'Why might the sentence count seem off for text with abbreviations?',
      a: 'The sentence counter splits on periods, question marks, and exclamation points. Abbreviations like "e.g." or "Mr." contain periods that aren\'t true sentence endings, which can cause the sentence count to be slightly higher than the actual number of sentences.',
    },
    {
      q: 'Does pasting affect the count differently than typing?',
      a: 'No, the counter processes whatever text is currently in the box the same way regardless of whether it was typed or pasted.',
    },
    {
      q: 'Is there a limit to how much text I can paste?',
      a: 'There\'s no hard limit built into the tool, though extremely large amounts of text may affect browser performance since everything is processed locally as you type.',
    },
  ],
};

export default content;
