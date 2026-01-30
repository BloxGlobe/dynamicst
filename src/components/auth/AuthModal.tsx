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

        {/* Right Side - Logo & Branding */}
        <div className="auth-modal-brand-side">
          <div className="auth-modal-brand-content">
            <svg 
              className="auth-modal-logo" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              style={{ color: '#3b82f6' }}
            >
              <path d="M18.926 23.998 12.003.008l-6.951 23.99h13.874zM15.93 22H8.004l3.941-13.56L15.93 22zM.008 18.102l6.72-1.956-4.527 5.88-.193-3.924zm17.236-1.956 6.72 1.956-.193 3.924-4.527-5.88-2.027-5.88z"/>
            </svg>
            
            <h1 className="auth-modal-brand-name">DynamicNet</h1>
            <p className="auth-modal-brand-tagline">
              Secure collaboration for modern teams
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};