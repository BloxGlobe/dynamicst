import React from 'react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M9 10h.01M12 10h.01M15 10h.01" strokeLinecap="round" />
        </svg>
      ),
      title: 'Encrypted Messaging',
      description: 'End-to-end encryption ensures your conversations remain completely private and secure.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="4" />
          <circle cx="20" cy="14" r="3" />
          <circle cx="4" cy="14" r="3" />
          <path d="M12 12v3M16 14l-2-1M8 14l2-1" strokeLinecap="round" />
        </svg>
      ),
      title: 'Real-time Collaboration',
      description: 'Work together seamlessly with instant synchronization and live updates across all devices.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Enterprise Security',
      description: 'Military-grade security protocols with advanced compliance standards for your peace of mind.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Lightning Fast',
      description: 'Optimized performance and infrastructure ensures blazing-fast speeds even with large teams.',
    }
  ];

  return (
    <section id="features" className="features-section">
      {/* Background Elements */}
      <div className="features-glow features-glow-left"></div>
      <div className="features-glow features-glow-right"></div>

      <div className="features-container">
        <div className="features-header">
          <div className="features-badge">
            <span>✨ Powerful Features</span>
          </div>
          <h2 className="features-title">
            Everything you need to{' '}
            <span className="features-title-gradient">succeed</span>
          </h2>
          <p className="features-description">
            Built by a studio dedicated to secure communication and collaboration
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

