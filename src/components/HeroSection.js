import React from 'react';
import '../App.css';
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
        <p>
          Auctual 2143+ CO2 <span>offset p</span>
        </p>
        <p className="number">23</p>
        <p>
          PROJECT <span>LAUNCHED</span>
        </p>
      </div>
      <div className="founded">
        <p>You</p>
        <p>Have</p>
        <p>Founded</p>
        <p>PROJECTS</p>
        <p className="number1">4</p>
      </div>
    </div>
  );
}

export default HeroSection;
