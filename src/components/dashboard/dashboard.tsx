import React, { useState } from 'react';
import { DashboardLayout } from '../layout/DashboardLayout';
import { Home } from '../../site-pages/Home';
import type { PageKey, User } from '../../lib/types';

interface DashboardProps {
  user: User;
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const [currentPage, setCurrentPage] = useState<PageKey>('home');

  const getPageTitle = (page: PageKey): string => {
    const titles: Record<PageKey, string> = {
      home: 'Home',
      creations: 'Creations',
      learn: 'Learn',
      store: 'Store',
      forum: 'Forum',
      finances: 'Finances',
      analytics: 'Analytics',
      ads: 'Ads',
      tools: 'All Tools',
      messages: 'Messages',
      settings: 'Settings',
      profile: 'Profile'
    };
    return titles[page];
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      default:
        return (
          <div className="dashboard-placeholder">
            <h2>{getPageTitle(currentPage)}</h2>
            <p>This page is under construction</p>
          </div>
        );
    }
  };

  return (
    <DashboardLayout
      activePage={currentPage}
      onPageChange={setCurrentPage}
      username={user.username}
      pageTitle={getPageTitle(currentPage)}
      onLogout={onLogout}
    >
      {renderPage()}
    </DashboardLayout>
  );
};