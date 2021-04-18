// Import React and stylesheet
import React from 'react';
import './style.css';

// Create and export navbar component
export default function Navbar() {
  return (
    <nav
      style={{ height: '60px' }}
      id="navbar"
      className="navbar navbar-expand-lg"
    >
      <div>
        {/* Primary Links */}
        <a href="#home" className="nav-link px-2 rounded">
          HOME
        </a>
        <a href="#portfolio" className="nav-link px-2 rounded">
          PORTFOLIO
        </a>
        <a href="#about" className="nav-link px-2 rounded">
          ABOUT
        </a>
        <a href="#contact" className="nav-link px-2 rounded">
          CONTACT
        </a>

        {/* Secondary Links */}
        <a
          href="https://www.github.com/jxhnkndl"
          className="d-none d-md-inline nav-link px-2 rounded"
        >
          GITHUB
        </a>
        <a
          href="https://www.linkedin.com/in/johnkendallroyston"
          className="d-none d-md-inline nav-link px-2 rounded"
        >
          LINKEDIN
        </a>
      </div>
    </nav>
  );
}
