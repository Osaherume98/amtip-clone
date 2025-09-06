
// import React, { useState} from 'react'
// import './Navbar.css';
// import { Link } from 'react-router-dom';
// // import { FaBars, FaTimes } from 'react-icons/fa';
// import logo from '../assets/cropped-Amatip-IT-logo.png';

// function Navbar(){

//    const [isMenuOpen, setIsMenuOpen] = useState(false);

//    const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//    };


//   return (
//     <nav className="navbar">
      
//         <img src={logo} alt="amatip logo" className="logo"/>

//         <ul>
//           <li><Link to="/">HOME</Link></li>
//           <li><Link to="/about">ABOUT US</Link></li>
//           <li><Link to="/partnership">PARTNERSHIP</Link></li>
//           <li><Link to="/recruitment">HIRE IT STAFF</Link></li>
//           <li><Link to="/services">OUR SERVICES</Link></li>
//           <li><Link to="/training">TRAINING</Link></li>
//           <li><Link to="/research">RESEARCH</Link></li>
//           <li><Link to="/contact">CONTACT US</Link></li>
//           <li><Link to="/expertise">EXPERTISE</Link></li>
//           <li><Link to="/signup">Admin Signup</Link></li>
//         </ul>

//       <div className="hamburger" onClick={toggleMenu}>
//         <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
//         <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
//         <div className={`bar ${isMenuOpen ? 'active' : ''}`}></div>
//       </div>
//     </nav>
//   );
// }
// export default Navbar;





// Navbar.jsx
// import React, { useState } from 'react';
// import './Navbar.css';
// import { Link } from 'react-router-dom';
// import logo from '../assets/cropped-Amatip-IT-logo.png';

// function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Navigation items configuration
//   const navItems = [
//     { to: '/', label: 'HOME' },
//     { to: '/about', label: 'ABOUT US' },
//     { to: '/partnership', label: 'PARTNERSHIP' },
//     { to: '/recruitment', label: 'HIRE IT STAFF' },
//     { to: '/services', label: 'OUR SERVICES' },
//     { to: '/training', label: 'TRAINING' },
//     { to: '/research', label: 'RESEARCH' },
//     { to: '/contact', label: 'CONTACT US' },
//     { to: '/expertise', label: 'EXPERTISE' },
//     { to: '/signup', label: 'Admin Signup' }
//   ];

//   const handleLinkClick = () => {
//     setIsMenuOpen(false); // Close menu when link is clicked
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//       <div className="navbar-brand">
//         <img src={logo} alt="Amatip IT Logo" className="logo" />
//       </div>

//       <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
//         {navItems.map((item, index) => (
//           <li key={index}>
//             <Link to={item.to} onClick={handleLinkClick}>
//               {item.label}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <div 
//         className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
//         onClick={toggleMenu}
//         aria-label="Toggle navigation menu"
//         role="button"
//         tabIndex={0}
//         onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
//       >
//         <div className="bar"></div>
//         <div className="bar"></div>
//         <div className="bar"></div>
//       </div>
//     </div>
//     </nav>
//   );
// }

// export default Navbar;


// Navbar.jsx - Exact replica of your image
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