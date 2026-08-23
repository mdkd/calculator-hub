import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

export default function About() {
  return (
    <div className="page static-page">
      <Seo title="About Us" description="Learn about Calculator Hub, a free collection of accurate, easy-to-use online calculators for finance, math, health, education, and more." />
      <h1>About Calculator Hub</h1>

      <p>
        Calculator Hub is a free collection of simple, accurate calculators built for everyday use. Whether you're
        working out a loan repayment, checking your BMI, converting units, or figuring out your GPA, our goal is to
        give you a fast, no-fuss tool that gets you the right answer without clutter or unnecessary sign-ups.
      </p>

      <h2>Our approach</h2>
      <p>
        Every calculator on this site is built around a real, correct formula — not a rough estimate. We organize
        tools into clear sections (Finance, Math, Date & Time, Word Tools, Health, Converters, Education, and
        Business) so you can find what you need quickly, and each calculator page includes a plain-language
        explanation of how the math behind it works, along with a worked example and answers to common questions.
      </p>

      <h2>Why we built this</h2>
      <p>
        We believe useful tools shouldn't require downloads, accounts, or complicated interfaces. Calculator Hub is
        designed to load fast, work well on mobile devices, and stay genuinely free to use. We're actively adding
        new calculators over time, so if there's a tool you'd like to see, we'd love to hear from you on our{' '}
        <Link to="/contact">Contact page</Link>.
      </p>
    </div>
  );
}
