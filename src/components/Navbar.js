import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import image2 from './Images/image2.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={image2} alt='' background-color='none'/>
            <p className="dec"> DECARBONIZER</p>
            <p className="by">BY MPOWA</p>
          </Link>
          <div className="menu-icon" onClick={handleClick}></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
