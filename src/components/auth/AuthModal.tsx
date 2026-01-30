
import { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import type { LoginCredentials, RegisterCredentials, User } from '../../lib/types';
import { storage, STORAGE_KEYS } from '../../utils/storage';
import { helpers } from '../../utils/helpers';

interface AuthModalProps {
  onClose: () => void;
  onSuccess: (user: User) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onClose, onSuccess }) => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (credentials: LoginCredentials) => {
    setLoading(true);
    
    // Simulate API call
    await helpers.sleep(1000);
    
    // Mock user data (replace with real API call)
    const mockUser: User = {
      id: helpers.generateId(),
      username: credentials.email.split('@')[0],
      email: credentials.email,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString()
    };

    // Save to storage
    storage.set(STORAGE_KEYS.USER, mockUser);
    storage.set(STORAGE_KEYS.TOKEN, 'mock-jwt-token');

    setLoading(false);
    onSuccess(mockUser);
  };

  const handleRegister = async (credentials: RegisterCredentials) => {
    setLoading(true);
    
    // Simulate API call
    await helpers.sleep(1000);
    
    // Mock user data (replace with real API call)
    const mockUser: User = {
      id: helpers.generateId(),
      username: credentials.username,
      email: credentials.email,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString()
    };

    // Save to storage
    storage.set(STORAGE_KEYS.USER, mockUser);
    storage.set(STORAGE_KEYS.TOKEN, 'mock-jwt-token');

    setLoading(false);
    onSuccess(mockUser);
  };

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div className="auth-modal-container" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="auth-modal-close">×</button>
        
        {/* Left Side - Form */}
        <div className="auth-modal-form-side">
          {mode === 'login' ? (
            <LoginForm
              onSubmit={handleLogin}
              onSwitchToRegister={() => setMode('register')}
              loading={loading}
            />
          ) : (
            <RegisterForm
              onSubmit={handleRegister}
              onSwitchToLogin={() => setMode('login')}
              loading={loading}
            />
          )}
        </div>

        {/* Right Side - Image */}
        <div className="auth-modal-image-side">
          <img 
            src="https://imgs.search.brave.com/K4fg3w_HKWHZfbP2ieT1bF-bgGUOtW4rDnqbU9Pz3yc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvcm9i/bG94LWJhY2tncm91/bmQtcm94dzd2Y25i/c3N6ZndkMS5qcGc" 
            alt="DynamicNet Platform" 
            className="auth-modal-image" 
          />
          <div className="auth-modal-image-overlay">
            <h2 className="auth-modal-image-title">Welcome to DynamicNet</h2>
            <p className="auth-modal-image-text">
              The next generation platform for secure collaboration and encrypted communication
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};