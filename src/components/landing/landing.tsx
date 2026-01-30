import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Features } from './Features';
import { Footer } from '../layout/Footer';
import { LandingLayout } from '../layout/LandingLayout';
import { LuauShowcase } from './LuauShowcase';


interface LandingProps {
  onAuthClick: () => void;
}

const Landing: React.FC<LandingProps> = ({ onAuthClick }) => {
  return (
    <LandingLayout>
      <Navbar onAuthClick={onAuthClick} />
      <Hero />
      <Features />

      {/* Use Cases (Luau-focused small features grid) */}
      <section id="use-cases" className="features-section">
        <div className="features-container">
          <div className="features-header">
            <div className="features-badge"><span>🧩 Use cases</span></div>
            <h2 className="features-title">Built with <span className="features-title-gradient">Luau</span></h2>
            <p className="features-description">Key workflows powered by Luau across DynamicNet.</p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 7h18M5 7v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7"/>
                  <path d="M8 7V5a4 4 0 0 1 8 0v2"/>
                </svg>
              </div>
              <h3 className="feature-title">Moderation</h3>
              <p className="feature-description">Scriptable policies and ML-assisted classifiers through a brokered API layer.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 1v4"/><path d="M12 19v4"/>
                  <rect x="5" y="7" width="14" height="10" rx="2"/>
                  <path d="M9 12h6" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="feature-title">Authentication</h3>
              <p className="feature-description">Flow orchestration with OTP and session policy—no direct secret access in scripts.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 17V7a2 2 0 0 1 2-2h6l4 4v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/>
                  <path d="M14 5v4h4"/>
                </svg>
              </div>
              <h3 className="feature-title">Video pipeline</h3>
              <p className="feature-description">Validate jobs in Luau, then enqueue secure transcode/thumbnail tasks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Docs anchor section */}
      <section id="docs" className="features-section">
        <div className="features-container">
          <div className="features-header">
            <div className="features-badge"><span>📚 Docs</span></div>
            <h2 className="features-title">Documentation</h2>
            <p className="features-description">Learn how to build with DynamicNet. Quickstart, API, and examples.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5V6a2 2 0 0 1 2-2h10"/>
                  <path d="M4 19.5c1-.5 2-.5 3-.5s2 .5 3 .5 2-.5 3-.5 2 .5 3 .5 2-.5 3-.5"/>
                </svg>
              </div>
              <h3 className="feature-title">Quickstart</h3>
              <p className="feature-description">Install, run, and deploy in minutes using Vite + React + TS.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="16" rx="2"/>
                  <path d="M7 8h10M7 12h10M7 16h6"/>
                </svg>
              </div>
              <h3 className="feature-title">API Reference</h3>
              <p className="feature-description">Client and server interfaces, policies, and event contracts.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 6h13M8 12h13M8 18h13"/>
                  <path d="M3 6h.01M3 12h.01M3 18h.01"/>
                </svg>
              </div>
              <h3 className="feature-title">Examples</h3>
              <p className="feature-description">Moderation checks, auth flows, and video job validation scripts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About anchor section */}
      <section id="about" className="features-section">
        <div className="features-container">
          <div className="features-header">
            <div className="features-badge"><span>🏢 About</span></div>
            <h2 className="features-title">About DynamicNet</h2>
            <p className="features-description">Secure communication, collaboration, and creation—built with performance and privacy at the core.</p>
          </div>
        </div>
      </section>

      {/* Pricing anchor section */}
      <section id="pricing" className="features-section">
        <div className="features-container">
          <div className="features-header">
            <div className="features-badge"><span>💸 Pricing</span></div>
            <h2 className="features-title">Pricing</h2>
            <p className="features-description">Transparent tiers for creators and teams. Details coming soon.</p>
          </div>
        </div>
      </section>

      {/* Resources anchor section */}
      <section id="resources" className="features-section">
        <div className="features-container">
          <div className="features-header">
            <div className="features-badge"><span>🧰 Resources</span></div>
            <h2 className="features-title">Resources</h2>
            <p className="features-description">SDKs, CLI tools, and templates to accelerate your build—coming soon.</p>
          </div>
        </div>
      </section>

      <LuauShowcase />
      <Footer />
    </LandingLayout>
  );
};

export default Landing;