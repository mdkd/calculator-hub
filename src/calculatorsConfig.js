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
import AverageCalculator from './calculators/math/AverageCalculator.jsx';
import averageContent from './calculators/math/AverageCalculator.content.js';
import RatioCalculator from './calculators/math/RatioCalculator.jsx';
import ratioContent from './calculators/math/RatioCalculator.content.js';
import FractionCalculator from './calculators/math/FractionCalculator.jsx';
import fractionContent from './calculators/math/FractionCalculator.content.js';
import LcmGcfCalculator from './calculators/math/LcmGcfCalculator.jsx';
import lcmGcfContent from './calculators/math/LcmGcfCalculator.content.js';
import PrimeCheckerCalculator from './calculators/math/PrimeCheckerCalculator.jsx';
import primeCheckerContent from './calculators/math/PrimeCheckerCalculator.content.js';
import QuadraticSolverCalculator from './calculators/math/QuadraticSolverCalculator.jsx';
import quadraticSolverContent from './calculators/math/QuadraticSolverCalculator.content.js';
import StandardDeviationCalculator from './calculators/math/StandardDeviationCalculator.jsx';
import standardDeviationContent from './calculators/math/StandardDeviationCalculator.content.js';
import AgeCalculator from './calculators/datetime/AgeCalculator.jsx';
import ageContent from './calculators/datetime/AgeCalculator.content.js';
import DateDifferenceCalculator from './calculators/datetime/DateDifferenceCalculator.jsx';
import dateDifferenceContent from './calculators/datetime/DateDifferenceCalculator.content.js';
import DateAddSubtractCalculator from './calculators/datetime/DateAddSubtractCalculator.jsx';
import dateAddSubtractContent from './calculators/datetime/DateAddSubtractCalculator.content.js';
import CountdownCalculator from './calculators/datetime/CountdownCalculator.jsx';
import countdownContent from './calculators/datetime/CountdownCalculator.content.js';
import DayOfWeekCalculator from './calculators/datetime/DayOfWeekCalculator.jsx';
import dayOfWeekContent from './calculators/datetime/DayOfWeekCalculator.content.js';
import BusinessDaysCalculator from './calculators/datetime/BusinessDaysCalculator.jsx';
import businessDaysContent from './calculators/datetime/BusinessDaysCalculator.content.js';
import TimeDurationCalculator from './calculators/datetime/TimeDurationCalculator.jsx';
import timeDurationContent from './calculators/datetime/TimeDurationCalculator.content.js';
import TimeZoneConverter from './calculators/datetime/TimeZoneConverter.jsx';
import timeZoneConverterContent from './calculators/datetime/TimeZoneConverter.content.js';
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
      {
        name: 'Average Calculator',
        slug: 'average-calculator',
        description: 'Find the mean, median, mode, and range of a list of numbers.',
        component: AverageCalculator,
        content: averageContent,
      },
      {
        name: 'Ratio Calculator',
        slug: 'ratio-calculator',
        description: 'Simplify a ratio or solve a proportion for a missing value.',
        component: RatioCalculator,
        content: ratioContent,
      },
      {
        name: 'Fraction Calculator',
        slug: 'fraction-calculator',
        description: 'Add, subtract, multiply, or divide fractions with automatic simplification.',
        component: FractionCalculator,
        content: fractionContent,
      },
      {
        name: 'LCM & GCF Calculator',
        slug: 'lcm-gcf-calculator',
        description: 'Find the least common multiple and greatest common factor of a set of numbers.',
        component: LcmGcfCalculator,
        content: lcmGcfContent,
      },
      {
        name: 'Prime Number Checker',
        slug: 'prime-checker',
        description: 'Check if a number is prime and see its prime factorization.',
        component: PrimeCheckerCalculator,
        content: primeCheckerContent,
      },
      {
        name: 'Quadratic Equation Solver',
        slug: 'quadratic-solver',
        description: 'Solve ax² + bx + c = 0 for real or complex roots.',
        component: QuadraticSolverCalculator,
        content: quadraticSolverContent,
      },
      {
        name: 'Standard Deviation Calculator',
        slug: 'standard-deviation-calculator',
        description: 'Calculate the mean, variance, and standard deviation of a data set.',
        component: StandardDeviationCalculator,
        content: standardDeviationContent,
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
      {
        name: 'Date Difference Calculator',
        slug: 'date-difference-calculator',
        description: 'Find the exact number of days, or years/months/days, between two dates.',
        component: DateDifferenceCalculator,
        content: dateDifferenceContent,
      },
      {
        name: 'Date Add/Subtract Calculator',
        slug: 'date-add-subtract-calculator',
        description: 'Add or subtract days, weeks, months, or years from a date.',
        component: DateAddSubtractCalculator,
        content: dateAddSubtractContent,
      },
      {
        name: 'Countdown Calculator',
        slug: 'countdown-calculator',
        description: 'Live countdown to a future date and time.',
        component: CountdownCalculator,
        content: countdownContent,
      },
      {
        name: 'Day of the Week Finder',
        slug: 'day-of-week-finder',
        description: 'Find out what day of the week any date falls on.',
        component: DayOfWeekCalculator,
        content: dayOfWeekContent,
      },
      {
        name: 'Business Days Calculator',
        slug: 'business-days-calculator',
        description: 'Count the working days (excluding weekends) between two dates.',
        component: BusinessDaysCalculator,
        content: businessDaysContent,
      },
      {
        name: 'Time Duration Calculator',
        slug: 'time-duration-calculator',
        description: 'Find the elapsed time between a start time and an end time.',
        component: TimeDurationCalculator,
        content: timeDurationContent,
      },
      {
        name: 'Time Zone Converter',
        slug: 'time-zone-converter',
        description: 'Convert a date and time between time zones, accounting for daylight saving time.',
        component: TimeZoneConverter,
        content: timeZoneConverterContent,
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
