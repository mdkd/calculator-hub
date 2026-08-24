import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import AdSlot from './components/AdSlot.jsx';
import { ADS_ENABLED } from './adConfig.js';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import SectionPage from './pages/SectionPage.jsx';
import CalculatorPage from './pages/CalculatorPage.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      {(import.meta.env.DEV || ADS_ENABLED) && (
        <div className="top-ad-wrapper">
          <AdSlot
            position="top"
            slot="8411075071"
            responsive={false}
            style={{ display: 'inline-block', width: '728px', height: '90px' }}
          />
        </div>
      )}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/:sectionSlug" element={<SectionPage />} />
          <Route path="/:sectionSlug/:calculatorSlug" element={<CalculatorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
