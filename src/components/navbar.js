import React from 'react';
import logoImage from '../images/logo.png';

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul>
        <li className='logo-container'>
          <a href="/">
            <img className='logo' src={logoImage} alt="Logo" />
          </a>
        </li>
        <li><a href="/"><span>Home</span></a></li>
        <li><a href="/about"><span>About</span></a></li>
        <li><a href="/contact"><span>Contact</span></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
