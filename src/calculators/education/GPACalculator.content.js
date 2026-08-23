const content = {
  howItWorks: [
    'GPA (Grade Point Average) summarizes your academic performance across multiple courses into a single number, typically on a 4.0 scale, weighted by how many credit hours each course is worth.',
    'Each letter grade is first converted to a grade point value using a standard scale (A+ and A = 4.0, A- = 3.7, B+ = 3.3, B = 3.0, and so on down to F = 0.0). This calculator uses the common "plus/minus" 4.0 scale used by most US colleges and universities.',
    'For each course, the grade points are multiplied by that course\'s credit hours to get "quality points." The GPA is then the sum of all quality points divided by the sum of all credit hours: GPA = Σ(grade points × credits) / Σ(credits). This weighting ensures a 4-credit course affects your GPA more than a 1-credit course.',
    'Because heavier courses count more, simply averaging your letter grades without weighting by credits would give a misleading result — the weighted approach reflects the actual academic workload behind each grade.',
  ],
  example: 'Suppose you took two courses: an A (4.0) worth 4 credits, and a B (3.0) worth 3 credits. Quality points = (4.0 × 4) + (3.0 × 3) = 16 + 9 = 25. Total credits = 4 + 3 = 7. GPA = 25 ÷ 7 ≈ 3.57.',
  faq: [
    {
      q: 'What grading scale does this calculator use?',
      a: 'It uses the standard US 4.0 plus/minus scale: A+/A = 4.0, A- = 3.7, B+ = 3.3, B = 3.0, B- = 2.7, C+ = 2.3, C = 2.0, C- = 1.7, D+ = 1.3, D = 1.0, and F = 0.0.',
    },
    {
      q: 'Why do I need to enter credit hours for each course?',
      a: 'GPA is a credit-weighted average, not a simple average of grades. A course worth more credits has a proportionally larger effect on your overall GPA, so credit hours are required for an accurate calculation.',
    },
    {
      q: 'Can I add more than two courses?',
      a: 'Yes, use the "+ Add Course" button to add as many courses as you need; the calculator sums quality points and credits across all of them.',
    },
    {
      q: 'Does this match my school\'s official GPA calculation?',
      a: 'Most US institutions use this same weighted 4.0 scale, but some use different scales (like a straight 4.0 without plus/minus, or a different scale entirely) or exclude certain courses (like pass/fail). Check your school\'s policy if you need an exact official match.',
    },
    {
      q: 'What happens if I leave a course\'s credit hours blank?',
      a: 'The calculator requires every course to have a positive number of credit hours before it will compute a GPA, since a missing or zero value would make the weighted average undefined.',
    },
  ],
};

export default content;
