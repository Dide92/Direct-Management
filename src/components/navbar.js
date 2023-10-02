import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false); // State for burger menu

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle burger menu
  const toggleBurgerMenu = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };
  const closeBurgerMenu = () => {
    setBurgerMenuOpen(false);
  };

  return (
    <nav className={`navbar ${showNavbar ? 'show' : ''}`}>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>

      <div className={`burger-icon ${burgerMenuOpen ? 'open' : ''}`} onClick={toggleBurgerMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`nav-links ${burgerMenuOpen ? 'open' : ''}`}>
        <Link to="/" smooth={true} duration={1000} onClick={closeBurgerMenu}>Home</Link>
        <Link to="about" smooth={true} duration={1000} onClick={closeBurgerMenu}>About</Link>
        <Link to="services" smooth={true} duration={1000} onClick={closeBurgerMenu}>Services</Link>
        <Link to="projects" smooth={true} duration={1000} onClick={closeBurgerMenu}>Projects</Link>
        <Link to="testimonials" smooth={true} duration={1000} onClick={closeBurgerMenu}>Testimonials</Link>
        <Link to="contact" smooth={true} duration={1000} onClick={closeBurgerMenu}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;