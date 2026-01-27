import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Features } from './Features';
import { CTA } from './CTA';
import { Footer } from '../layout/Footer';

const Landing: React.FC = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleGetStarted = () => {
    setShowAuthModal(true);
    // TODO: Show auth modal/form - will redirect to dashboard after auth
    console.log('Show auth modal - create account');
  };

  const handleAuthClick = () => {
    setShowAuthModal(true);
    // TODO: Show login/register modal
    console.log('Show login/register modal');
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f]">
      <Navbar onAuthClick={handleAuthClick} />
      <Hero onGetStarted={handleGetStarted} />
      <Features />
      <CTA onGetStarted={handleGetStarted} />
      <Footer />

      {/* Auth Modal Placeholder - Will be replaced with actual auth form */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-xl p-8 max-w-md w-full mx-4 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Create Account</h2>
            <p className="text-gray-400 mb-6">
              Auth form will go here. After successful registration, you'll be redirected to the dashboard.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowAuthModal(false)}
                className="flex-1 px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium"
              >
                Close
              </button>
              <button
                onClick={() => {
                  // TODO: Handle authentication and redirect to dashboard
                  console.log('Authenticate user and load dashboard');
                  setShowAuthModal(false);
                }}
                className="flex-1 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;