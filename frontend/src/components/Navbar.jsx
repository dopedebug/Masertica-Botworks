import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Bot Agency Logo" />
        </Link>
        <ul className="nav-menu">
          {isHome ? (
            <>
              <li><a href="#home" onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}>Home</a></li>
              <li><a href="#services" onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}>Services</a></li>
              <li><a href="#contact" onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}>Contact</a></li>
            </>
          ) : (
            <>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/" state={{ scrollToServices: true }}>Services</Link></li>
              <li><Link to="/" state={{ scrollToContact: true }}>Contact</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; 