// ==========================================
// FILE: src/components/auth/AuthModal.tsx
// Updated with logo instead of image
// ==========================================
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
              viewBox="0 0 100 100" 
              fill="none"
            >
              {/* Custom DynamicNet Logo */}
              <circle cx="50" cy="50" r="45" fill="url(#gradient1)" />
              <path 
                d="M 30 50 L 50 30 L 70 50 L 50 70 Z" 
                fill="white" 
                opacity="0.9"
              />
              <circle cx="50" cy="50" r="8" fill="white" />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
              </defs>
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