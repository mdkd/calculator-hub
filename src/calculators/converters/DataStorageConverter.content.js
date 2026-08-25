const content = {
  howItWorks: [
    'This converter handles digital storage units — bits, bytes, kilobytes, megabytes, gigabytes, and terabytes — by converting through a common base unit, the byte (with 8 bits per byte).',
    'There\'s a well-known ambiguity in how "kilobyte," "megabyte," and similar units are defined: computer memory and some software measure them in powers of 1,024 (since binary computing naturally works in powers of 2), while storage manufacturers and most modern operating systems commonly use powers of 1,000 to match the standard metric meaning of "kilo," "mega," and so on. This is exactly why a 1 TB hard drive often shows up as roughly 931 GB in your operating system — the drive is measured in decimal terabytes, but the OS displays it in binary units.',
    'This calculator lets you pick which convention to use. "Binary (1024)" uses powers of 1,024 and labels units with their technically correct binary names (KiB, MiB, GiB, TiB) alongside the more commonly seen KB/MB/GB/TB labels. "Decimal (1000)" uses powers of 1,000, matching how storage manufacturers advertise capacity and how many modern operating systems (like macOS) now report file sizes.',
    'Once you\'ve picked a convention, every unit within that mode is a clean power of the chosen base relative to the byte, so conversions between any two units in the same mode are always exact.',
  ],
  example: 'In Binary (1024) mode, 2.5 GB (GiB) to MB (MiB): 2.5 × 1024 = 2,560 MiB. In Decimal (1000) mode, the same 2.5 GB to MB: 2.5 × 1000 = 2,500 MB — the two modes give different answers for the exact same starting value, which is precisely the ambiguity this toggle exists to make explicit.',
  faq: [
    {
      q: 'Why does my 1 TB hard drive show less than 1 TB of usable space?',
      a: 'Hard drive manufacturers use decimal (1000-based) terabytes, since that matches the standard metric definition. Your operating system, however, often reports storage using binary (1024-based) units while still calling them "GB" or "TB" — so a 1,000,000,000,000-byte drive shows as about 931 GiB rather than 1,000 GB, even though no storage is actually missing.',
    },
    {
      q: 'Which mode should I use?',
      a: 'Use Decimal (1000) mode to match how storage devices are marketed and sized, or to match how some newer operating systems (like macOS) report file sizes. Use Binary (1024) mode to match how Windows, most software, and computer memory (RAM) traditionally measure and report storage.',
    },
    {
      q: 'What\'s the difference between "MB" and "MiB"?',
      a: '"MiB" (mebibyte) is the technically unambiguous binary unit, always exactly 1,024² bytes. "MB" (megabyte) is technically defined as exactly 1,000,000 bytes under the metric standard, but is very commonly used informally to mean either value depending on context — which is the root of the confusion this calculator helps clarify.',
    },
    {
      q: 'How many bits are in a byte?',
      a: '8 bits make up 1 byte, which is a fixed, unambiguous relationship (unlike the kilobyte-and-above units) used consistently across both binary and decimal modes.',
    },
    {
      q: 'Can I convert between binary and decimal modes directly?',
      a: 'Not within a single conversion — pick the mode that matches what you\'re trying to figure out first, then convert within that mode. Switching modes changes what "1 GB" means, so a direct cross-mode conversion wouldn\'t have one unambiguous answer.',
    },
  ],
};

export default content;
