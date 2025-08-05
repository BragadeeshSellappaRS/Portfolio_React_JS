import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-brand-icon">B</div>
        <span>RSBS</span>
      </div>
      
      <ul className={`navbar-nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
        <li><Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link></li>
        <li><Link to="/#about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</Link></li>
        <li><Link to="/#skills" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>SKILLS</Link></li>
        <li><Link to="/#portfolio" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>PORTFOLIO</Link></li>
        <li><Link to="/#blog" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>BLOG</Link></li>
        <li><Link to="/#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</Link></li>
      </ul>
      
      <div className="navbar-contact">
        rsbragadeesh@gmail.com
      </div>

      <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar; 