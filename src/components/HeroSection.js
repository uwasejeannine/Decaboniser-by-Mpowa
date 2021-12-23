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
          <p>
            Combined 5722+ <span className="offset">CO2 offset</span>
          </p>
          <p className="number">37</p>
          <p className="projec">
            PROJECTS <span>all categorie</span>
          </p>
        </div>
      </div>
      <div className="launched">
        {/* <h1>
          Auctual 2143+ CO2 <span>offset p</span>
        </h1>
        <p>23</p>
        <h1>
          PROJECT <span>LAUNCHED</span>
        </h1> */}
      </div>
    </div>
  );
}

export default HeroSection;
