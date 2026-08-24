import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';

export default function PrivacyPolicy() {
  return (
    <div className="page static-page">
      <Seo title="Privacy Policy" description="Calculator Hub's privacy policy covering data collection, cookies, analytics, and advertising." />
      <h1>Privacy Policy</h1>
      <p className="page-subtitle">Last updated: August 24, 2026</p>

      <p>
        This Privacy Policy explains how Calculator Hub ("we", "us", or "our") collects, uses, and protects
        information when you use our website. This is a general-purpose template and should be reviewed and
        customized (including the placeholders below) before the site goes live.
      </p>

      <h2>Information we collect</h2>
      <p>
        Calculator Hub's tools run entirely in your browser — the numbers you enter into a calculator (such as loan
        amounts, dates of birth, or health metrics) are processed locally on your device and are not transmitted to
        or stored on our servers. We may automatically collect standard technical information when you visit the
        site, such as your IP address, browser type, device type, and pages visited, typically through analytics
        and advertising services described below.
      </p>

      <h2>Cookies</h2>
      <p>
        We use cookies and similar tracking technologies (such as local storage) to operate the site, remember your
        preferences, and understand how visitors use Calculator Hub. Cookies are small text files stored on your
        device. You can control or delete cookies through your browser settings; disabling cookies may affect some
        site functionality.
      </p>

      <h2>Analytics</h2>
      <p>
        We may use third-party analytics services (such as Google Analytics) to help us understand site traffic and
        usage patterns. These services may collect information about your visits, including pages viewed, time
        spent on the site, and general location, using cookies or similar technologies. This data is used in
        aggregate to improve our content and user experience.
      </p>

      <h2>Advertising</h2>
      <p>
        We may display advertisements on Calculator Hub through third-party advertising networks, such as Google
        AdSense. These networks may use cookies and similar technologies to serve ads based on your prior visits to
        this and other websites. You can learn more about how Google uses data from sites that use its services at{' '}
        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
          policies.google.com/technologies/partner-sites
        </a>
        , and you can opt out of personalized advertising through{' '}
        <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
          Google Ads Settings
        </a>
        .
      </p>

      <h2>Third-party links</h2>
      <p>
        Our site may contain links to third-party websites. We are not responsible for the privacy practices or
        content of those external sites, and we encourage you to review their privacy policies separately.
      </p>

      <h2>Children's privacy</h2>
      <p>
        Calculator Hub is not directed at children under 13, and we do not knowingly collect personal information
        from children under 13. If you believe a child has provided us with personal information, please contact us
        so we can remove it.
      </p>

      <h2>Your choices</h2>
      <p>
        You can manage cookie preferences through your browser settings and opt out of personalized advertising
        through the links above. If you have questions about your data or wish to make a request regarding it,
        please reach out via our <Link to="/contact">Contact page</Link>.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated
        "Last updated" date. We encourage you to review this page periodically.
      </p>

      <h2>Contact us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at{' '}
        <a href="mailto:dilsekindness@gmail.com">dilsekindness@gmail.com</a>.
      </p>

      <p className="page-subtitle">
        Note: This is a general template provided as a starting point and does not constitute legal advice. Please
        have it reviewed to ensure compliance with applicable laws (such as GDPR or CCPA) before publishing.
      </p>
    </div>
  );
}
