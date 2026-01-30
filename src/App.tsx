import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './components/landing/Landing';
import { Dashboard } from './components/dashboard/dashboard';
import { AuthModal } from './components/auth/AuthModal';
import { useAuth } from './lib/hooks/useAuth';
import type { User } from './lib/types';

// Import all CSS
import './assets/styles/global.css';
import './assets/styles/dashboard.css';
import './assets/styles/sidebar.css';

function App() {
  const { isAuthenticated, user, loading, login, logout } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleAuthSuccess = (authenticatedUser: User) => {
    login(authenticatedUser, `token-${authenticatedUser.id}`);
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    logout();
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#000', color: '#fff', fontSize: '16px' }}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Landing onAuthClick={() => setShowAuthModal(true)} />}
        />
        <Route
          path="/dashboard/*"
          element={
            isAuthenticated && user ? (
              <Dashboard user={user} onLogout={handleLogout} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} onSuccess={handleAuthSuccess} />
      )}
    </>
  );
}

export default App;