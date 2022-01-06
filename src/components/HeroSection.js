import React from 'react';
import '../App.css';
import './HeroSection.css';
import './Services';
import image4 from './Images/image4.png'
import image3 from './Images/image3.png'


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
        <p className="number9">23</p>
        <p className='proj-louch'>
          PROJECT LAUNCHED
        </p>
      </div>
      <div className="token">
        <h1 className='num'>$ 3.21</h1>
        <p className='mpowa'>MPOWA TOKEN</p>
        <p className='val'>VALUES</p>
      </div>
      <div className="heroes">
        <p className="number2">9</p>
        <h2 className='hero'>HEROES</h2>
        <p className='who'>Who's a hero</p>
      </div>
      <div className="potential-container">
        <p>
          Potetial 3578+ CO2<span className="offset">offset pa</span>
        </p>
        <p className="number3">14</p>
        <p className="projec2">
          PROJECTS <span>IN FUNDING</span>
        </p>
      </div>
      <div className='image3'>
        <img src={image3} alt='' width='679' height='340' />
        <p className='how-it'>HOW IT WORKS</p>
      </div>
      <div className='image4'>
        <img src={image4} alt='' width='674' height='336' />
        <p className='proj-new'>PROJECT NEWS</p>
      </div>
    </div>
  );
}

export default HeroSection;
