import React from 'react';
import type { PageKey } from '../../lib/types';
import { NAVIGATION_ITEMS } from '../../lib/constants';

interface SidebarProps {
  activePage: PageKey;
  onPageChange: (page: PageKey) => void;
  username: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ activePage, onPageChange, username }) => {
  return (
    <div className="sidebar">
      {/* Header */}
      <div className="sidebar-header">
        <svg 
          className="sidebar-logo" 
          viewBox="0 0 24 24" 
          fill="currentColor"
          style={{ color: '#3b82f6' }}
        >
          <path d="M18.926 23.998 12.003.008l-6.951 23.99h13.874zM15.93 22H8.004l3.941-13.56L15.93 22zM.008 18.102l6.72-1.956-4.527 5.88-.193-3.924zm17.236-1.956 6.72 1.956-.193 3.924-4.527-5.88-2.027-5.88z"/>
        </svg>
        <span className="sidebar-title">CREATOR</span>
      </div>

      {/* User */}
      <div className="sidebar-user">
        <div className="sidebar-user-info">
          <div className="sidebar-user-avatar"></div>
          <span className="sidebar-user-name">{username}</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {NAVIGATION_ITEMS.map((item) => (
          <button
            key={item.key}
            onClick={() => onPageChange(item.key)}
            className={`sidebar-nav-item ${activePage === item.key ? 'active' : ''}`}
          >
            <span className="sidebar-nav-label">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <button className="sidebar-footer-item">
          <div className="sidebar-footer-icon"></div>
          <span className="sidebar-footer-label">Roblox.com</span>
        </button>
        <button className="sidebar-footer-item">
          <div className="sidebar-footer-icon"></div>
          <span className="sidebar-footer-label">Studio</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;