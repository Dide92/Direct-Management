import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Change the import
import { Link } from 'react-router-dom'; // Add this import

import Logo from '../images/logo.png'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

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

  return (
    <nav className={`navbar ${showNavbar ? 'show' : ''}`}>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="nav-links">
        <Link to="/" smooth={true} duration={1000}>Home</Link>
        <Link to="about" smooth={true} duration={1000}>About</Link>
        <Link to="services" smooth={true} duration={1000}>Services</Link>
        <Link to="projects" smooth={true} duration={1000}>Projects</Link>
        <Link to="contact" smooth={true} duration={1000}>Contact</Link>
        {/* Use React Router's Link components for navigation */}
        {/* <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/services" className="nav-link">Services</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="nav-link">Contact</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
