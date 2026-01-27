import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <svg 
                className="footer-logo-icon" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                style={{ color: '#3b82f6' }}
              >
                <path d="M18.926 23.998 12.003.008l-6.951 23.99h13.874zM15.93 22H8.004l3.941-13.56L15.93 22zM.008 18.102l6.72-1.956-4.527 5.88-.193-3.924zm17.236-1.956 6.72 1.956-.193 3.924-4.527-5.88-2.027-5.88z"/>
              </svg>
              <span className="footer-logo-text">DynamicNet</span>
            </div>
            <p className="footer-tagline">
              Reimagine the way people collaborate
            </p>
          </div>

          {/* Product */}
          <div className="footer-section">
            <h3>Product</h3>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#roadmap">Roadmap</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h3>Company</h3>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li><a href="#docs">Documentation</a></li>
              <li><a href="#api">API Reference</a></li>
              <li><a href="#support">Support</a></li>
              <li><a href="#community">Community</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} DynamicNet. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};