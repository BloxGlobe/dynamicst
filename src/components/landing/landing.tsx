import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Features } from './Features';
import { CTA } from './CTA';
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
      <CTA />
      <Footer />

      {showAuthModal && (
        <div className="auth-modal-overlay">
          <div className="auth-modal">
            <h2 className="auth-modal-title">Welcome to DynamicNet</h2>
            <p className="auth-modal-text">
              Sign up or log in to start collaborating with your team.
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