const content = {
  howItWorks: [
    'A prime number is a whole number greater than 1 that has no positive divisors other than 1 and itself. This tool checks whether a number you enter is prime, and if it isn\'t, breaks it down into its prime factors.',
    'The primality check works by trial division: it tries dividing your number by every integer from 2 up to its square root. If none of them divide evenly, the number is prime. Only checking up to the square root (rather than all the way up to the number itself) is a well-known optimization — if a number n has a factor larger than its square root, it must also have a corresponding factor smaller than the square root, so any factor would already have been found by that point.',
    'For numbers that aren\'t prime, the calculator finds their prime factorization: the unique set of prime numbers that multiply together to produce the original number. It does this by repeatedly dividing out the smallest possible prime factor until only 1 remains, collecting each factor along the way.',
    'Every whole number greater than 1 is either prime itself, or can be expressed as a product of primes in exactly one way (ignoring order) — this is known as the Fundamental Theorem of Arithmetic, and it\'s what guarantees the factorization shown is unique.',
  ],
  example: 'Checking 97: trial division tests 2 through 9 (since √97 ≈ 9.85), and none divide evenly, so 97 is prime. Checking 60: dividing out the smallest factors gives 60 = 2 × 2 × 3 × 5, so 60 is not prime and its prime factorization is 2 × 2 × 3 × 5.',
  faq: [
    {
      q: 'Is 1 a prime number?',
      a: 'No. By definition, prime numbers must be greater than 1. The number 1 has only one positive divisor (itself), which doesn\'t fit the standard definition of a prime, so this tool correctly reports 1 as not prime.',
    },
    {
      q: 'Is 2 the only even prime number?',
      a: 'Yes — every other even number is divisible by 2, which means it always has at least three divisors (1, 2, and itself), so 2 is the only even number that\'s prime.',
    },
    {
      q: 'Why does the checker only test up to the square root?',
      a: 'It\'s a mathematical shortcut: if a number has a factor greater than its square root, that factor must pair with a smaller factor below the square root, which would already have been caught. This makes the check much faster for large numbers without missing any factors.',
    },
    {
      q: 'What does "prime factorization" mean?',
      a: 'It\'s the unique way of writing a number as a product of prime numbers — for example, 60 = 2 × 2 × 3 × 5. Every whole number greater than 1 has exactly one such factorization.',
    },
    {
      q: 'Can I check very large numbers?',
      a: 'Trial division works correctly for any positive whole number your browser can represent precisely, but it gets noticeably slower for very large numbers (in the billions or beyond), since it has to test many more potential divisors.',
    },
  ],
};

export default content;
