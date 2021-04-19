// Import React and stylesheet
import React from 'react';
import './style.css';

// Create and export badge component
export default function Badge(props) {
  return (
    <div className="skill-badge rounded mb-2 mr-2 p-2 shadow">
      <i className={`skill-icon ${props.icon} mb-2`}></i>
      <p className="d-block mb-0">{props.tech}</p>
    </div>
  );
}