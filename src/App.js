// Import modules and components
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';

// Import stylesheet
import "./App.css";

// App component
function App() {
  return (
    <HashRouter basename="/">
      <div id="bg-wrapper" style={{ position: "relative"}} >
        <Navbar />
        <Wrapper>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
        </Wrapper>
        <Footer />
      </div>
    </HashRouter>
  );
}

// Export component
export default App; 