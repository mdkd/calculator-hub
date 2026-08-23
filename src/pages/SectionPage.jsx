import { Link, useParams, Navigate } from 'react-router-dom';
import calculatorsConfig from '../calculatorsConfig.js';
import Seo from '../components/Seo.jsx';

export default function SectionPage() {
  const { sectionSlug } = useParams();
  const section = calculatorsConfig.find((s) => s.slug === sectionSlug);

  if (!section) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="page">
      <Seo title={section.section} description={section.description} />
      <Link to="/" className="back-link">
        ← All sections
      </Link>
      <h1>
        {section.icon} {section.section}
      </h1>
      <p className="page-subtitle">{section.description}</p>

      <div className="card-grid">
        {section.calculators.map((calc) => (
          <Link to={`/${section.slug}/${calc.slug}`} key={calc.slug} className="card">
            <h2>{calc.name}</h2>
            <p>{calc.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
