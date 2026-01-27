import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Features } from './Features';
import { CTA } from './CTA';
import { Footer } from '../layout/Footer';
import { LandingLayout } from '../layout/LandingLayout';
import '../assets/styles/landing.css';

const Landing: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleGetStarted = () => {
    setShowAuthModal(true);
    console.log('Show auth modal - create account');
  };

  const handleAuthClick = () => {
    setShowAuthModal(true);
    console.log('Show login/register modal');
  };

  return (
    <LandingLayout>
      <Navbar onAuthClick={handleAuthClick} />
      <Hero onGetStarted={handleGetStarted} />
      <Features />
      <CTA onGetStarted={handleGetStarted} />
      <Footer />

      {showAuthModal && (
        <div className="auth-modal-overlay">
          <div className="auth-modal">
            <h2 className="auth-modal-title">Create Account</h2>
            <p className="auth-modal-text">
              Auth form will go here. After successful registration, you'll be redirected to the dashboard.
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