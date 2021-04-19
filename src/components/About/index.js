// Import modules, components, and assets
import React from 'react';
import Badge from '../Badge';
import headshot from '../../assets/jkroyston.jpeg';
import { devData } from '../../data';
import './style.css';

// Create and export about page component
export default function About() {
  return (
    <section class="py-4">
      <div class="container position-relative">
        <div class="row">

          <div class="col-12 col-md-3">
            <img class="img-fluid rounded mb-3 shadow" src={headshot} alt="Professional headshot" />
            
            
          </div>

          <div class="col-12 col-md-9">
            <p class="font-weight-light">
              Hi! My name is J.K. Royston. I'm a full-stack web developer with entrepreneurial experience leading teams through audio production projects in the music industry. I earned a Full-Stack Web Development Certificate from the University of Richmond (May 2021) where I developed skills working with a broad range of web technologies including HTML/CSS, Bootstrap, JavaScript, jQuery, Git, Node.js, npm, Express, MySQL and Sequelize, MongoDB and Mongoose, and ReactJS.
            </p>
            <p class="font-weight-light">
              Most recently, I led a team of four developers through planning, building, and deploying a full-stack workout planning application with full CRUD capabilities. Prior to that, I led a team of three developers through designing and developing a front-end application used for finding and saving new meal and cocktail recipes.
            </p>
            <p class="font-weight-light">
              I’m an Apple trained technician and facilitator with deep experience teaching and troubleshooting OS X and iOS hardware and software. During my career as an audio producer and small business owner, I learned how to plan and execute large projects involving multiple technologies and how to juggle the competing demands of several projects at once. As both a creative problem solver and an analytical thinker, I’m excited to discover ways to use programming to address challenges in education, wellness, and business.
            </p>

            <div id="tech-stack" class="mb-3">
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