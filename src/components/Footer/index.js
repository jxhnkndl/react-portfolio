// Import React
import React from 'react';

// Import stylesheet
import './style.css';

// Create and export footer component
export default function Footer() {
  return (
    <footer className="py-2">
      <div className="container">
        <div className="row">

          <div className="col-1 col-md-2 col-lg-3"></div>
          
          {/* Contact Details */}
          <div className="col-5 col-md-4 col-lg-3 text-right border-right border-white">
            <a href="#navbar" className="my-1 px-2 contact-link">J.K. ROYSTON</a>
            <a href="tel:+18048337070" className="my-1 px-2 contact-link">(804) 833-7070</a>
            <a href="mailto:jkroyston@gmail.com" className="my-1 px-2 contact-link">jkroyston@gmail.com</a>
          </div>

          {/* Github + LinkedIn Profile Links */}
          <div className="col-5 col-md-4 col-lg-3">
            <a className="contact-link my-1 px-2" href="https://github.com/jxhnkndl" target="_blank" rel="noreferrer">
              <i className="fab fa-github mb-0 mr-1"></i>
              GITHUB
            </a>
            <a className="contact-link my-1 px-2" href="https://www.linkedin.com/in/johnkendallroyston/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin mb-0 mr-1"></i>
              LINKEDIN
            </a>
            <p className="my-1 px-2 footer-text">
              Copyright &copy; 2021
            </p>
          </div>

          <div className="col-1 col-md-2 col-lg-3"></div>

        </div>
      </div>
    </footer>
  );
}