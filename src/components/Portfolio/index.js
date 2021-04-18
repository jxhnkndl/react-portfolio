// Import React and project card component
import React from 'react';
import Project from '../Project';

// Import stylesheet
import './style.css';

// Import data (TEMP)
import { data } from '../../data';

// Create and export Portfolio page component
export default function Portfolio() {
  return (
    <section>
      <h1>PORTFOLIO</h1>
      <h1>{data[0].title}</h1>
      <img style={{ width: '300px' }} src={data[0].thumbnail} alt="Screenshot of Burger.js" />
      <Project />
      <Project />
      <Project />
    </section>
  );
}