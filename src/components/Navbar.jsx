import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/cropped-Amatip-IT-logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { to: '/', label: 'HOME' },
    { to: '/about', label: 'ABOUT US' },
    { to: '/partnership', label: 'PARTNERSHIP' },
    { to: '/recruitment', label: 'HIRE IT STAFF' },
    { to: '/services', label: 'OUR SERVICES' },
    { to: '/training', label: 'TRAINING' },
    { to: '/research', label: 'RESEARCH' },
    { to: '/contact', label: 'CONTACT US' },
    { to: '/signup', label: 'Admin Signup' }
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo Section */}
        <div className="navbar-brand">
            <img src={logo} alt="Amatip IT" className="logo" />
        </div>

        {/* Desktop Menu */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link 
                to={item.to} 
                onClick={handleLinkClick}
                className={item.to === '/' ? 'active-link' : ''}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;