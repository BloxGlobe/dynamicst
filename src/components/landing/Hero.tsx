import React from "react";

interface HeroProps {
  onGetStarted?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onGetStarted = () => {
    console.log("Get Started clicked");
  },
}) => {
  return (
    <section className="hero-section">
      {/* Background Glow Effects */}
      <div className="hero-glow hero-glow-left"></div>
      <div className="hero-glow hero-glow-right"></div>

      <div className="hero-container">
        {/* Left: Text Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span>✨ Welcome to DynamicNet</span>
          </div>

          <h1 className="hero-title">
            Reimagine the way people{" "}
            <span className="hero-title-gradient">collaborate</span>
          </h1>

          <p className="hero-description">
            A next-generation studio providing end-to-end encrypted communication
            and real-time collaboration tools. Build secure connections that
            matter.
          </p>

          <div className="hero-buttons">
            <button
              onClick={onGetStarted}
              className="hero-btn hero-btn-primary"
            >
              Start Building →
            </button>
            <button className="hero-btn hero-btn-secondary">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">15+</div>
              <div className="hero-stat-label">Active Users</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">78%</div>
              <div className="hero-stat-label">Uptime</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">24/7</div>
              <div className="hero-stat-label">Support</div>
            </div>
          </div>
        </div>

        {/* Right: Visual Element */}
        <div className="hero-visual">
          <div className="hero-visual-glow"></div>
          <div className="hero-visual-card">
            <div className="hero-visual-items">
              <div className="hero-visual-item">
                <div className="hero-visual-avatar hero-visual-avatar-1"></div>
                <div className="hero-visual-content">
                  <div className="hero-visual-bar hero-visual-bar-long"></div>
                  <div className="hero-visual-bar hero-visual-bar-short"></div>
                </div>
              </div>

              <div className="hero-visual-item">
                <div className="hero-visual-avatar hero-visual-avatar-2"></div>
                <div className="hero-visual-content">
                  <div className="hero-visual-bar hero-visual-bar-medium"></div>
                  <div className="hero-visual-bar hero-visual-bar-tiny"></div>
                </div>
              </div>

              <div className="hero-visual-item">
                <div className="hero-visual-avatar hero-visual-avatar-3"></div>
                <div className="hero-visual-content">
                  <div className="hero-visual-bar hero-visual-bar-extra-long"></div>
                  <div className="hero-visual-bar hero-visual-bar-medium-short"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
