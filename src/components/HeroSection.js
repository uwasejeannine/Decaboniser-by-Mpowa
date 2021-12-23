import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import './Services';

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="dec-container">
        <p>We ARE</p>
        <p>DEMOCRATIZING</p>
        <p>
          THE <span className="clean">CLEAN TECH</span>{' '}
        </p>
        <p>REVOLUTION</p>
        <a href="">
          Our mission
          <i class="fas fa-chevron-right"></i>
        </a>
      </div>
      <div className="hero-btns">
        <div className="comb-container">
          <p>Combined 5722+</p>
          <p>CO2 offset</p>
          <p>37</p>
          <p>PROJECTS</p>
          <p>all categories</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
