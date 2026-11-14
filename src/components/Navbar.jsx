
import { useState } from 'react';
import '../styles/Navbar.css';
import brandIcon from '../assets/c-emblem.png';

const links = [
  ['Projects', '#projects'],
  ['Experience', '#experience'],
  ['Skills', '#toolkit'],
  ['Certifications', '#certifications'],
  ['About', '#about']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="site-header">
      <a
        className="wordmark"
        href="#home"
        onClick={closeMenu}
      >
        <img
          className="wordmark-mark"
          src={brandIcon}
          alt=""
          aria-hidden="true"
          draggable="false"
        />

        <span className="wordmark-name">
          CARL PATRICK CAGUBCUB
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen((previous) => !previous)}
      >
        <span />
        <span />
      </button>

      <nav
        id="main-navigation"
        className={open ? 'nav-links is-open' : 'nav-links'}
        aria-label="Main navigation"
      >
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}

        <a
          className="nav-contact"
          href="#contact"
          onClick={closeMenu}
        >
          Get in touch

          <span aria-hidden="true">
            ↗
          </span>
        </a>
      </nav>
    </header>
  );
}
