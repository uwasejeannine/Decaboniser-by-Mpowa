import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Route>
          <Navbar />
          <Switch>
            <HeroSection />
          </Switch>
        </Route>
      </Router>
    </>
  );
}

export default App;
