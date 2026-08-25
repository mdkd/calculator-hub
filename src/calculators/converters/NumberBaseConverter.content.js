const content = {
  howItWorks: [
    'A number base (or radix) determines how many distinct digits are used to represent numbers, and what each digit position is worth. Decimal (base 10) uses digits 0-9, binary (base 2) uses only 0-1, octal (base 8) uses 0-7, and hexadecimal (base 16) uses 0-9 plus A-F to represent values 10 through 15.',
    'The calculator works in two steps. First, it reads your input number in whichever base you specify and converts it into an ordinary decimal (base 10) integer — this is the "universal" intermediate form, computed by multiplying each digit by the base raised to its position\'s power and summing the results. Second, it converts that same decimal value into binary, octal, and hexadecimal representations simultaneously, so you can see all four forms of the same number at once.',
    'Each digit position in any base represents a power of that base — in binary, the rightmost digit is worth 2⁰ (1), the next is 2¹ (2), then 2² (4), and so on; in hexadecimal, positions represent powers of 16 instead. This positional system is what allows any whole number to be represented in any base.',
    'Hexadecimal is especially common in computing (for representing memory addresses, color codes, and byte values) because each hex digit maps cleanly onto exactly 4 binary digits, making it a compact, human-readable stand-in for binary data.',
  ],
  example: 'Converting 255 from decimal: in binary, 255 = 11111111 (eight 1s, since 255 is the largest value representable in 8 bits); in octal, 255 = 377; in hexadecimal, 255 = FF — a value you\'ll often recognize as the maximum value of a single color channel (like the "FF" in the web color #FFFFFF for white).',
  faq: [
    {
      q: 'Why does hexadecimal use letters?',
      a: 'Hexadecimal needs 16 distinct digit symbols (base 16), but our standard number system only has 10 digits (0-9). To represent the remaining six values, hexadecimal borrows the letters A through F, where A=10, B=11, C=12, D=13, E=14, and F=15.',
    },
    {
      q: 'What happens if I enter an invalid digit for the selected base?',
      a: 'The calculator validates your input against the selected base\'s valid digit set before converting — for example, entering "9" while "Binary" is selected will show an error, since binary only allows 0 and 1.',
    },
    {
      q: 'Why is hexadecimal so common in computing?',
      a: 'Each hexadecimal digit represents exactly 4 binary digits (bits), so a byte (8 bits) can be written as exactly 2 hex digits. This makes hex a much more compact and readable way to represent binary data than writing out long strings of 1s and 0s.',
    },
    {
      q: 'Is there a limit to how large a number I can convert?',
      a: 'Yes — this calculator works within JavaScript\'s "safe integer" range (up to about 9 quadrillion). Numbers larger than that can\'t be converted with full precision, and the calculator will show an error rather than risk giving you a wrong answer.',
    },
    {
      q: 'Can I convert negative numbers?',
      a: 'No, this calculator handles non-negative whole numbers only. Negative number representation (like two\'s complement, commonly used in computing) is a more specialized topic beyond simple base conversion.',
    },
  ],
};

export default content;
