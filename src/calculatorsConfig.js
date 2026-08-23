import SIPCalculator from './calculators/finance/SIPCalculator.jsx';
import sipContent from './calculators/finance/SIPCalculator.content.js';
import EMICalculator from './calculators/finance/EMICalculator.jsx';
import emiContent from './calculators/finance/EMICalculator.content.js';
import FDCalculator from './calculators/finance/FDCalculator.jsx';
import fdContent from './calculators/finance/FDCalculator.content.js';
import RDCalculator from './calculators/finance/RDCalculator.jsx';
import rdContent from './calculators/finance/RDCalculator.content.js';
import IncomeTaxCalculator from './calculators/finance/IncomeTaxCalculator.jsx';
import incomeTaxContent from './calculators/finance/IncomeTaxCalculator.content.js';
import NPSCalculator from './calculators/finance/NPSCalculator.jsx';
import npsContent from './calculators/finance/NPSCalculator.content.js';
import EPFCalculator from './calculators/finance/EPFCalculator.jsx';
import epfContent from './calculators/finance/EPFCalculator.content.js';
import GratuityCalculator from './calculators/finance/GratuityCalculator.jsx';
import gratuityContent from './calculators/finance/GratuityCalculator.content.js';
import PercentageCalculator from './calculators/math/PercentageCalculator.jsx';
import percentageContent from './calculators/math/PercentageCalculator.content.js';
import AgeCalculator from './calculators/datetime/AgeCalculator.jsx';
import ageContent from './calculators/datetime/AgeCalculator.content.js';
import WordUnscrambler from './calculators/wordtools/WordUnscrambler.jsx';
import wordUnscramblerContent from './calculators/wordtools/WordUnscrambler.content.js';
import AnagramSolver from './calculators/wordtools/AnagramSolver.jsx';
import anagramSolverContent from './calculators/wordtools/AnagramSolver.content.js';
import WordCounter from './calculators/wordtools/WordCounter.jsx';
import wordCounterContent from './calculators/wordtools/WordCounter.content.js';
import CharacterCounter from './calculators/wordtools/CharacterCounter.jsx';
import characterCounterContent from './calculators/wordtools/CharacterCounter.content.js';
import WordFinder from './calculators/wordtools/WordFinder.jsx';
import wordFinderContent from './calculators/wordtools/WordFinder.content.js';
import BMICalculator from './calculators/health/BMICalculator.jsx';
import bmiContent from './calculators/health/BMICalculator.content.js';
import UnitConverter from './calculators/converters/UnitConverter.jsx';
import unitConverterContent from './calculators/converters/UnitConverter.content.js';
import GPACalculator from './calculators/education/GPACalculator.jsx';
import gpaContent from './calculators/education/GPACalculator.content.js';
import GSTCalculator from './calculators/business/GSTCalculator.jsx';
import gstContent from './calculators/business/GSTCalculator.content.js';

// Central registry of sections and calculators.
// To add a new calculator: build the component under src/calculators/<section>/,
// import it above, and add an entry to that section's `calculators` array below.
const calculatorsConfig = [
  {
    section: 'Finance',
    slug: 'finance',
    description: 'Loans, interest, and money math.',
    icon: '💰',
    calculators: [
      {
        name: 'SIP Calculator',
        slug: 'sip-calculator',
        description: 'Estimate the maturity value of your monthly mutual fund SIP investments.',
        component: SIPCalculator,
        content: sipContent,
      },
      {
        name: 'EMI Calculator',
        slug: 'emi-calculator',
        description: 'Calculate your monthly loan installment (EMI).',
        component: EMICalculator,
        content: emiContent,
      },
      {
        name: 'FD Calculator',
        slug: 'fd-calculator',
        description: 'Calculate the maturity value of a fixed deposit.',
        component: FDCalculator,
        content: fdContent,
      },
      {
        name: 'RD Calculator',
        slug: 'rd-calculator',
        description: 'Calculate the maturity value of a recurring deposit.',
        component: RDCalculator,
        content: rdContent,
      },
      {
        name: 'GST Calculator',
        slug: 'gst-calculator',
        description: 'Calculate GST amount and total, inclusive or exclusive.',
        component: GSTCalculator,
        content: gstContent,
      },
      {
        name: 'Income Tax Calculator',
        slug: 'income-tax-calculator',
        description: 'Estimate your income tax under India\'s New Tax Regime.',
        component: IncomeTaxCalculator,
        content: incomeTaxContent,
      },
      {
        name: 'NPS Calculator',
        slug: 'nps-calculator',
        description: 'Project your National Pension System corpus and estimated monthly pension.',
        component: NPSCalculator,
        content: npsContent,
      },
      {
        name: 'EPF Calculator',
        slug: 'epf-calculator',
        description: 'Estimate your Employees\' Provident Fund corpus at retirement.',
        component: EPFCalculator,
        content: epfContent,
      },
      {
        name: 'Gratuity Calculator',
        slug: 'gratuity-calculator',
        description: 'Calculate the gratuity payable based on salary and years of service.',
        component: GratuityCalculator,
        content: gratuityContent,
      },
    ],
  },
  {
    section: 'Math',
    slug: 'math',
    description: 'Everyday math made simple.',
    icon: '📐',
    calculators: [
      {
        name: 'Percentage Calculator',
        slug: 'percentage-calculator',
        description: 'Find percentages of numbers, or what percent one is of another.',
        component: PercentageCalculator,
        content: percentageContent,
      },
    ],
  },
  {
    section: 'Date & Time',
    slug: 'date-time',
    description: 'Ages, durations, and dates.',
    icon: '🗓️',
    calculators: [
      {
        name: 'Age Calculator',
        slug: 'age-calculator',
        description: 'Find your exact age in years, months, and days.',
        component: AgeCalculator,
        content: ageContent,
      },
    ],
  },
  {
    section: 'Word Tools',
    slug: 'word-tools',
    description: 'Play with letters and words.',
    icon: '🔤',
    calculators: [
      {
        name: 'Word Unscrambler',
        slug: 'word-unscrambler',
        description: 'Unscramble jumbled letters into real words.',
        component: WordUnscrambler,
        content: wordUnscramblerContent,
      },
      {
        name: 'Anagram Solver',
        slug: 'anagram-solver',
        description: 'Find anagrams of a word, or check if two words are anagrams of each other.',
        component: AnagramSolver,
        content: anagramSolverContent,
      },
      {
        name: 'Word Counter',
        slug: 'word-counter',
        description: 'Count words, sentences, paragraphs, and estimated reading time.',
        component: WordCounter,
        content: wordCounterContent,
      },
      {
        name: 'Character Counter',
        slug: 'character-counter',
        description: 'Count characters with and without spaces, with an optional limit tracker.',
        component: CharacterCounter,
        content: characterCounterContent,
      },
      {
        name: 'Word Finder',
        slug: 'word-finder',
        description: 'Find valid words that can be built from a set of available letters.',
        component: WordFinder,
        content: wordFinderContent,
      },
    ],
  },
  {
    section: 'Health',
    slug: 'health',
    description: 'Track your health metrics.',
    icon: '🩺',
    calculators: [
      {
        name: 'BMI Calculator',
        slug: 'bmi-calculator',
        description: 'Calculate your Body Mass Index and category.',
        component: BMICalculator,
        content: bmiContent,
      },
    ],
  },
  {
    section: 'Converters',
    slug: 'converters',
    description: 'Convert between units instantly.',
    icon: '🔁',
    calculators: [
      {
        name: 'Unit Converter',
        slug: 'unit-converter',
        description: 'Convert length, weight, and temperature units.',
        component: UnitConverter,
        content: unitConverterContent,
      },
    ],
  },
  {
    section: 'Education',
    slug: 'education',
    description: 'Tools for students and teachers.',
    icon: '🎓',
    calculators: [
      {
        name: 'GPA Calculator',
        slug: 'gpa-calculator',
        description: 'Compute your weighted GPA from courses and credits.',
        component: GPACalculator,
        content: gpaContent,
      },
    ],
  },
  {
    section: 'Business',
    slug: 'business',
    description: 'Tools for taxes and business math.',
    icon: '📊',
    calculators: [
      {
        name: 'GST Calculator',
        slug: 'gst-calculator',
        description: 'Calculate GST amount and total, inclusive or exclusive.',
        component: GSTCalculator,
        content: gstContent,
      },
    ],
  },
];

export default calculatorsConfig;
