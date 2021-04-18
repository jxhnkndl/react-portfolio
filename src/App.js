// Import modules and components
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

// Import stylesheet
import "./App.css";

// App component
function App() {
  return (
    <HashRouter basename="/">
      <Navbar />
      <Route exact path={["/", "/home"]} component={Home} />
      <Route exact path="/about" component={About} />
    </HashRouter>
  );
}

// Export component
export default App; 