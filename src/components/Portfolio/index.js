// Import React and project card component
import React from 'react';
import Project from '../Project';

// Import stylesheet
import './style.css';

// Create and export Portfolio page component
export default function Portfolio() {
  return (
    <section>
      <h1>PORTFOLIO</h1>
      <Project />
      <Project />
      <Project />
    </section>
  );
}