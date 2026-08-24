const content = {
  howItWorks: [
    'A quadratic equation has the form ax² + bx + c = 0, where a, b, and c are numbers and a is not zero. This calculator solves for x using the quadratic formula: x = (−b ± √(b² − 4ac)) / (2a).',
    'The expression under the square root, b² − 4ac, is called the discriminant, and its sign determines what kind of solutions the equation has. When the discriminant is positive, the equation has two distinct real roots — the graph of the equation crosses the x-axis at two points. When it\'s exactly zero, there\'s exactly one repeated real root — the graph just touches the x-axis at a single point (a vertex on the axis).',
    'When the discriminant is negative, there are no real solutions — instead, the equation has two complex roots that are conjugates of each other (same real part, opposite-signed imaginary parts), of the form x = (−b/2a) ± i√(|discriminant|)/2a, where i is the imaginary unit.',
    'The calculator computes the discriminant once, then branches into whichever of these three cases applies, so you always get the mathematically correct type of answer rather than an error or an approximation when real roots don\'t exist.',
  ],
  example: 'For x² − 3x − 4 = 0 (a=1, b=−3, c=−4): discriminant = (−3)² − 4(1)(−4) = 9 + 16 = 25, which is positive. √25 = 5, so x = (3 ± 5) / 2, giving x = 4 or x = −1. For x² + 1 = 0 (a=1, b=0, c=1): discriminant = 0 − 4 = −4, which is negative, so the roots are complex: x = 0 ± 1i, meaning x = i or x = −i.',
  faq: [
    {
      q: 'Why can\'t "a" be zero?',
      a: 'If a = 0, the x² term disappears and the equation becomes linear (bx + c = 0) rather than quadratic, which has a different (simpler) solving method and only one solution instead of up to two.',
    },
    {
      q: 'What does a negative discriminant mean?',
      a: 'It means the equation has no real number solutions — graphically, the parabola never crosses or touches the x-axis. The solutions still exist mathematically, but as complex numbers involving i (the imaginary unit, where i² = −1).',
    },
    {
      q: 'What does a repeated root mean graphically?',
      a: 'When the discriminant is exactly zero, the parabola\'s vertex sits exactly on the x-axis, touching it at one point rather than crossing it at two separate points — both roots of the equation are the same value.',
    },
    {
      q: 'Can this solve linear equations too?',
      a: 'No, this calculator requires a genuine quadratic equation (a ≠ 0). For a linear equation like bx + c = 0, you\'d solve directly for x = −c/b instead.',
    },
    {
      q: 'How accurate are the results?',
      a: 'Results are rounded to 4 decimal places for readability. For equations with clean integer or simple fractional roots, the exact values will typically display without any rounding artifacts.',
    },
  ],
};

export default content;
