import React from 'react';

interface TopBarProps {
  pageTitle: string;
  onLogout: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ pageTitle, onLogout }) => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <a href="/" aria-label="Home" title="Home" style={{ color: 'inherit', textDecoration: 'none' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: 8, color: '#3b82f6' }}>
            <path d="M18.926 23.998 12.003.008l-6.951 23.99h13.874z" />
          </svg>
        </a>
        <h1 className="topbar-title">{pageTitle}</h1>
      </div>

      <div className="topbar-right">
        <button className="topbar-notifications" aria-label="Notifications">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="topbar-notifications-badge"></span>
        </button>
        <div className="topbar-user">
          <div className="topbar-avatar" />
          <button onClick={onLogout} className="topbar-logout">Logout</button>
        </div>
      </div>
    </div>
  );
};

