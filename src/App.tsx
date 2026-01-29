import { useState } from 'react';
import Landing from './components/landing/Landing';
import { Dashboard } from './components/dashboard/dashboard';
import { AuthModal } from './components/auth/AuthModal';
import { useAuth } from './lib/hooks/useAuth';
import type { User } from './lib/types';

// Import all CSS
import './assets/styles/global.css';

function App() {
  const { isAuthenticated, user, loading, login, logout } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleAuthSuccess = (authenticatedUser: User) => {
    login(authenticatedUser, 'mock-token');
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    logout();
  };

  // Show loading state while checking auth
  if (loading) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: '#0a0a0a',
        color: '#fff'
      }}>
        <p>Loading...</p>
      </div>
    );
  }

  // Show dashboard if authenticated
  if (isAuthenticated && user) {
    return <Dashboard user={user} onLogout={handleLogout} />;
  }

  // Show landing page if not authenticated
  return (
    <>
      <Landing onAuthClick={() => setShowAuthModal(true)} />
      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onSuccess={handleAuthSuccess}
        />
      )}
    </>
  );
}

export default App;