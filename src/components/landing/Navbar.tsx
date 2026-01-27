import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onAuthClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onAuthClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <svg 
            className="navbar-logo-icon" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            style={{ color: '#3b82f6' }}
          >
            <path d="M18.926 23.998 12.003.008l-6.951 23.99h13.874zM15.93 22H8.004l3.941-13.56L15.93 22zM.008 18.102l6.72-1.956-4.527 5.88-.193-3.924zm17.236-1.956 6.72 1.956-.193 3.924-4.527-5.88-2.027-5.88z"/>
          </svg>
          <span className="navbar-logo-text">DynamicNet</span>
        </div>

        {/* Navigation Links */}
        <div className="navbar-links">
          <a href="#features" className="navbar-link">Features</a>
          <a href="#about" className="navbar-link">About</a>
          <a href="#pricing" className="navbar-link">Pricing</a>
          <a href="#docs" className="navbar-link">Docs</a>
        </div>

        {/* Auth Button */}
        <button onClick={onAuthClick} className="navbar-auth-btn">
          Login / Register
        </button>
      </div>
    </nav>
  );
};