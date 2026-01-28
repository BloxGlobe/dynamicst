import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Features } from './Features';
import { Footer } from '../layout/Footer';
import { LandingLayout } from '../layout/LandingLayout';


const Landing: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleAuthClick = () => {
    setShowAuthModal(true);
  };

  return (
    <LandingLayout>
      <Navbar onAuthClick={handleAuthClick} />
      <Hero />  
      <Features />
      <Footer />

      {showAuthModal && (
        <div className="auth-modal-overlay">
          <div className="auth-modal">
            <h2 className="auth-modal-title">Welcome to DynamicNet!</h2>
            <p className="auth-modal-text">
              Register or log in to access the main site.
            </p>
            <div className="auth-modal-buttons">
              <button
                onClick={() => setShowAuthModal(false)}
                className="auth-modal-btn auth-modal-btn-secondary"
              >
                Close
              </button>
              <button
                onClick={() => {
                  console.log('Authenticate user and load dashboard');
                  setShowAuthModal(false);
                }}
                className="auth-modal-btn auth-modal-btn-primary"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </LandingLayout>
  );
};

export default Landing;