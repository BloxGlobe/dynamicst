import React from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import type { PageKey } from '../../lib/types';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activePage: PageKey;
  onPageChange: (page: PageKey) => void;
  username: string;
  pageTitle: string;
  onLogout: () => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  activePage,
  onPageChange,
  username,
  pageTitle,
  onLogout
}) => {
  return (
    <div className="dashboard-layout">
      <Sidebar 
        activePage={activePage}
        onPageChange={onPageChange}
        username={username}
      />
      <div className="dashboard-main">
        <TopBar pageTitle={pageTitle} onLogout={onLogout} />
        <main className="dashboard-content">
          {children}
        </main>
      </div>
    </div>
  );
};

