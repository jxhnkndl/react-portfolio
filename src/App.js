// Import modules and components
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import MainNav from './components/MainNav';
import Home from './components/Home';
import About from './components/About';

// App component
function App() {
  return (
    <HashRouter basename="/">
      <MainNav />
      <Route exact path={["/", "/home"]} component={Home} />
      <Route exact path="/about" component={About} />
    </HashRouter>
  );
}

// Export component
export default App; 