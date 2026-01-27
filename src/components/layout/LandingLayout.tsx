import React from 'react';

interface LandingLayoutProps {
  children: React.ReactNode;
}

export const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  return (
    <div className="landing-layout">
      {children}
    </div>
  );
};