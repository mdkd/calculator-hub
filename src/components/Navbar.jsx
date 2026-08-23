import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          🧮 Calculator Hub
        </Link>
        <Link to="/" className="navbar-home-link">
          Home
        </Link>
      </div>
    </header>
  );
}
