// Import React
import React from 'react';

// Import stylesheet
import './style.css';

// Create and export footer component
export default function Footer() {
  return (
    <footer id="contact" class="container bg-green py-3">
      <div class="row">

        {/* Contact Details */}
        <div class="col-6 text-right border-right border-white">
          <a href="#navbar" class="d-block my-1 px-2 contact-link">J.K. ROYSTON</a>
          <a href="tel:+18048337070" class="d-block my-1 px-2 contact-link">(804) 833-7070</a>
          <a href="mailto:jkroyston@gmail.com" class="d-block my-1 px-2 contact-link">jkroyston@gmail.com</a>
        </div>

        {/* Github + LinkedIn Profile Links */}
        <div class="col-6">
          <a class="contact-link my-1 px-2 d-block" href="https://github.com/jxhnkndl" target="_blank" rel="noreferrer">
            <i class="fab fa-github mb-0 mr-1"></i>
            GITHUB
          </a>
          <a class="contact-link my-1 px-2 d-block" href="https://www.linkedin.com/in/johnkendallroyston/" target="_blank" rel="noreferrer">
            <i class="fab fa-linkedin mb-0 mr-1"></i>
            LINKEDIN
          </a>
          <p class="d-block my-1 px-2 footer-text">
            Copyright &copy; 2021
          </p>
        </div>
      </div>
    
    </footer>
  );
}