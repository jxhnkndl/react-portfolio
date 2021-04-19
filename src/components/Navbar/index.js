// Import React and stylesheet
import React from 'react';
import './style.css';

// Import resume PDF
import resume from '../../assets/jk-royston-full-resume.pdf';

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
            <a className="nav-link text-link rounded" href="#home">HOME <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-link rounded" href="#portfolio">PORTFOLIO</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-link rounded" href="#about">ABOUT</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <a href={resume} className="btn btn-resume my-2 my-sm-0 shadow" type="button">Download Resume</a>
        </form>
      </div>
    </nav>
  );
}
