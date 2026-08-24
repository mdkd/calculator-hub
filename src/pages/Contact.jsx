import Seo from '../components/Seo.jsx';

export default function Contact() {
  return (
    <div className="page static-page">
      <Seo title="Contact Us" description="Get in touch with the Calculator Hub team — send feedback, report an issue, or suggest a new calculator." />
      <h1>Contact Us</h1>

      <p>
        Have feedback, found a bug, or want to suggest a new calculator? We'd love to hear from you. Reach out using
        the email address below and we'll get back to you as soon as we can.
      </p>

      <div className="content-block">
        <h2>Email</h2>
        <p>
          <a href="mailto:dilsekindness@gmail.com">dilsekindness@gmail.com</a>
        </p>
      </div>

      <div className="content-block">
        <h2>What to include</h2>
        <p>
          If you're reporting an issue with a calculator, please let us know which tool you were using, what inputs
          you entered, and what result you expected versus what you saw — that helps us track down and fix problems
          much faster.
        </p>
      </div>
    </div>
  );
}
