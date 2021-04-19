// Import React
import React from 'react';

// Create and export badge component
export default function Badge(props) {
  return (
    <span class="tech-badge rounded mr-1 p-2">{props.tech}</span>
  );
}