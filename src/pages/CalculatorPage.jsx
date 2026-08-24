import { Link, useParams, Navigate } from 'react-router-dom';
import calculatorsConfig from '../calculatorsConfig.js';
import Seo from '../components/Seo.jsx';
import CalculatorContent from '../components/CalculatorContent.jsx';
import AdSlot from '../components/AdSlot.jsx';
import { ADS_ENABLED } from '../adConfig.js';

// The sidebar column only exists to hold an ad. In dev we keep it so the layout
// can be designed around it; in production, hide it entirely until ads are live
// so real visitors don't see an empty reserved column.
const SHOW_SIDEBAR = import.meta.env.DEV || ADS_ENABLED;

export default function CalculatorPage() {
  const { sectionSlug, calculatorSlug } = useParams();
  const section = calculatorsConfig.find((s) => s.slug === sectionSlug);
  const calc = section?.calculators.find((c) => c.slug === calculatorSlug);

  if (!section || !calc) {
    return <Navigate to="/" replace />;
  }

  const CalculatorComponent = calc.component;

  return (
    <div className={`page calculator-page-layout${SHOW_SIDEBAR ? '' : ' calculator-page-layout--no-sidebar'}`}>
      <Seo title={calc.name} description={calc.description} />
      <div className="calculator-page-main">
        <Link to={`/${section.slug}`} className="back-link">
          ← {section.section}
        </Link>
        <h1>{calc.name}</h1>
        <p className="page-subtitle">{calc.description}</p>

        <CalculatorComponent />

        <AdSlot position="after-calculator" />

        <CalculatorContent content={calc.content} />
      </div>

      {SHOW_SIDEBAR && (
        <aside className="calculator-page-sidebar">
          <AdSlot position="sidebar" slot="8649808878" />
        </aside>
      )}
    </div>
  );
}
