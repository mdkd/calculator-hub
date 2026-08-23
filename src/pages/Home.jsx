import { Link } from 'react-router-dom';
import calculatorsConfig from '../calculatorsConfig.js';
import Seo from '../components/Seo.jsx';

export default function Home() {
  return (
    <div className="page">
      <Seo description="Free online calculators for finance, math, date & time, word tools, health, unit conversion, education, and business — organized by section, fast and easy to use." />
      <h1>Calculator Hub</h1>
      <p className="page-subtitle">Pick a section to find the tool you need.</p>

      <div className="card-grid">
        {calculatorsConfig.map((section) => (
          <Link to={`/${section.slug}`} key={section.slug} className="card">
            <span className="card-icon">{section.icon}</span>
            <h2>{section.section}</h2>
            <p>{section.description}</p>
            <span className="card-count">{section.calculators.length} calculator{section.calculators.length !== 1 ? 's' : ''}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
