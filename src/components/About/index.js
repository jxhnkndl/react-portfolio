// Import modules, components, and assets
import React from 'react';
import Badge from '../Badge';
import headshot from '../../assets/jkroyston.jpeg';
import { devData } from '../../data';
import './style.css';

// Create and export about page component
export default function About() {
  return (
    <section className="py-4">
      <div className="container position-relative">
        <div className="row">

          <div className="col-12 col-md-3 mb-4">
            <img className="img-fluid rounded mb-4 shadow" src={headshot} alt="Professional headshot" />

            <div className="contact-details d-none d-lg-block p-2 rounded shadow">
              <h6 className="contact-heading">CONTACT DETAILS</h6>
              <p className="bio-text font-weight-light mb-1">J.K. Royston</p>
              <p className="bio-text font-weight-light mb-1">(804) 833-7070</p>
              <a className="bio-link" href="mailto:jkroyston@gmail.com">jkroyston@gmail.com</a>
              <div className="social-icons mt-3">
                <a href="https://github.com/jxhnkndl">
                  <i className="social-icon devicon-github-original mr-2"></i>
                </a>
                <a href="https://www.linkedin.com/in/johnkendallroyston/">
                  <i className="social-icon devicon-linkedin-plain mr-2"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-9">
            <h2 className="bio-heading">HI! I'M J.K.</h2>
            <p className="bio-text font-weight-light">
              I'm a full-stack web developer with entrepreneurial experience leading teams through audio production projects in the music industry. I earned a Full-Stack Web Development Certificate from the University of Richmond (May 2021) where I developed skills working with a broad range of web technologies including HTML/CSS, Bootstrap, JavaScript, jQuery, Git, Node.js, npm, Express, MySQL and Sequelize, MongoDB and Mongoose, and ReactJS.
            </p>
            <p className="bio-text font-weight-light">
              Most recently, I led a team of four developers through planning, building, and deploying a full-stack workout planning application with full CRUD capabilities. Prior to that, I led a team of three developers through designing and developing a front-end application used for finding and saving new meal and cocktail recipes.
            </p>
            <p className="bio-text font-weight-light mb-4">
              I’m an Apple trained technician and facilitator with deep experience teaching and troubleshooting OS X and iOS hardware and software. During my career as an audio producer and small business owner, I learned how to plan and execute large projects involving multiple technologies and how to juggle the competing demands of several projects at once. As both a creative problem solver and an analytical thinker, I’m excited to discover ways to use programming to address challenges in education, wellness, and business.
            </p>

            <hr className="mb-4" />

            <div id="tech-stack" className="mb-3">
              {devData.stackArr.map((language, index) => {
                const { tech, icon } = language;

                return (
                  <Badge 
                    key={index}
                    icon={icon}
                    tech={tech}
                  />
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}