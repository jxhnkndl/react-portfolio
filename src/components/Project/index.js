// Import React
import React from 'react';

// Import stylesheet
import './style.css';

// Create and export project card component
export default function Project(props) {
  return (
    <div className="col-12 col-md-6 col-lg-4 pb-3 px-0">
      <div
        className="card border-0 m-3 p-1 shadow"
        data-aos="zoom-in"
        data-aos-delay="150"
      >
        <div className="img-overlay">
          <img
            src={props.thumbnail}
            alt="Burger.js application screenshot"
            className="card-img-top"
          />
        </div>
        <div className="card-body">
          <p className="project-title h5">{props.title}</p>
          <div className="stack-badges">
            {props.stack.map((tech, index) => {
              return (
                <span key={index} className="badge tech-badge my-1 mr-1">
                  {tech}
                </span>
              );
            })}
          </div>

          <p className="project-description font-weight-light">
            {props.description}
          </p>
          <div className="row">
            <div className="col-6 pr-1">
              <a
                href={props.app}
                target="_blank"
                className="btn btn-block project-btn"
                rel="noreferrer"
              >
                VIEW APP
              </a>
            </div>
            <div className="col-6 pl-1">
              <a
                href={props.repo}
                target="_blank"
                className="btn btn-block project-btn"
                rel="noreferrer"
              >
                VIEW GITHUB
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
