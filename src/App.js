// Import modules and components
import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Home from './pages/Home';
import About from './pages/About';

// App component
function App() {
  return (

    <div>
      <HashRouter basename="/">
        <Alert variant={'danger'}>
          Hi! I'm an alert!
        </Alert>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
      </HashRouter>
    </div>
  );
}

// Export component
export default App; 