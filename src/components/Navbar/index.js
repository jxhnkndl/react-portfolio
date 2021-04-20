// Import React and stylesheet
import React from 'react';
import './style.css';

// Create and export navbar component
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mb-4">
      <a className="navbar-brand initials" href="#home">
        JKR
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsedNavbar" aria-controls="collapsedNavbar" aria-expanded="false" aria-label="Toggle navigation">
        {/* <span className="navbar-toggler-icon"></span> */}
        <i className="icon-toggler fas fa-bars"></i>
      </button>

      <div className="collapse navbar-collapse" id="collapsedNavbar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link text-link" href="#home">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-link" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-link" href="#about">About</a>
          </li>
        </ul>
        <div className="d-inline-block my-2 my-lg-0">
          <a href="https://github.com/jxhnkndl">
            <i class="social-icon devicon-github-original mr-2"></i>
          </a>
          <a href="https://www.linkedin.com/in/johnkendallroyston/">
            <i class="social-icon devicon-linkedin-plain mr-2"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}
