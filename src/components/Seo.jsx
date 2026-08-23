import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Calculator Hub';

export default function Seo({ title, description }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Free Online Calculators`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}
