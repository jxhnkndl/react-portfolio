// Import modules
import React from 'react';
import Animation from '../../assets/jkroyston.gif';

// Import stylesheet
import './style.css';

// Landing page component
function Home() {
  return (
    <div id="header" className="container d-flex justify-content-center">
      <div id="header-text" className="text-center">

        <div id="img-wrapper" className="mx-auto mb-3 d-flex justify-content-center align-items-center">
          <img src={Animation} alt="Animated memoji portrait" />
        </div>

        <h1 className="heading font-weight-bold">
          <i id="header-icon" className="mb-0 mr-1 fas fa-code"></i>
          HELLO!
        </h1>

        <p className="h5 font-weight-light">My name is J.K. Royston and I'm a front-end web developer and designer from Richmond, Virgina.</p>

        <hr />

        <a href="./assets/docs/jk-royston-full-resume.pdf" className="btn cta shadow">View My Portfolio</a>

      </div>
    </div>
  );
}

// Export component
export default Home;