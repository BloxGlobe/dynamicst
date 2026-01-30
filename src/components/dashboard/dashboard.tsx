import React from 'react';
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../layout/DashboardLayout';
import '../common/index';
import { Home } from '../../site-pages/Home';
import Creations from '../../site-pages/Creations';
import Learn from '../../site-pages/Learn';
import Store from '../../site-pages/Store';
import Forum from '../../site-pages/Forum';
import Finances from '../../site-pages/Finances';
import Messages from '../../site-pages/Messages';
import Settings from '../../site-pages/Settings';
import Profile from '../../site-pages/Profile';
import Tools from '../../site-pages/Tools';
import type { PageKey, User } from '../../lib/types';

interface DashboardProps {
  user: User;
  onLogout: () => void;
}

const PAGE_TITLES: Record<PageKey, string> = {
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
  profile: 'Profile',
};

function pathToPageKey(pathname: string): PageKey {
  // Expect formats: /dashboard, /dashboard/ or /dashboard/<key>
  const parts = pathname.split('/').filter(Boolean);
  const key = parts[1] as PageKey | undefined;
  // default to 'home' if no subpath
  return (key && PAGE_TITLES[key] ? key : 'home');
}

export const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const activePage = pathToPageKey(location.pathname);
  const pageTitle = PAGE_TITLES[activePage];

  const handlePageChange = (page: PageKey) => {
    navigate(`/dashboard/${page}`);
  };

  return (
    <DashboardLayout
      activePage={activePage}
      onPageChange={handlePageChange}
      username={user.username}
      pageTitle={pageTitle}
      onLogout={onLogout}
    >
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="creations" element={<Creations />} />
        <Route path="learn" element={<Learn />} />
        <Route path="store" element={<Store />} />
        <Route path="forum" element={<Forum />} />
        <Route path="finances" element={<Finances />} />
        <Route path="tools" element={<Tools />} />
        <Route path="messages" element={<Messages />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
        {/* Fallback to home for unsupported or missing pages */}
        <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
      </Routes>
    </DashboardLayout>
  );
};
