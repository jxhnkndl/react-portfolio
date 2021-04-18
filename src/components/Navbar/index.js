// Import React and stylesheet
import React from 'react';
import './style.css';

// Create and export navbar component
export default function Navbar() {
  return (
    <nav style={{ height: '50px' }} id="navbar" className="navbar navbar-expand-lg">
      <div className="container d-flex justify-content-center align-items-center py-2">
        <div className="d-flex justify-content-end align-items-center">

          {/* Primary Links */}
          <a href="#header" className="nav-link px-2">HOME</a>
          <a href="#portfolio" className="nav-link px-2">PORTFOLIO</a>
          <a href="#about" className="nav-link px-2">ABOUT</a>
          <a href="#contact" className="nav-link px-2">CONTACT</a>

          {/* Secondary Links */}
          <a href="https://www.github.com/jxhnkndl" className="d-none d-md-inline nav-link px-2">GITHUB</a>
          <a href="https://www.linkedin.com/in/johnkendallroyston" className="d-none d-md-inline nav-link px-2">LINKEDIN</a>

        </div>
      </div>
    </nav>
  );
}