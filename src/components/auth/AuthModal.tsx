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
  const [error, setError] = useState('');

  const handleLogin = async (credentials: LoginCredentials) => {
    setLoading(true);
    setError('');

    try {
      const users = storage.get<User[]>('users') || [];
      const user = users.find(u => u.email === credentials.email);

      if (!user) {
        setError('Account not found. Please register first.');
        setLoading(false);
        return;
      }

      storage.set(STORAGE_KEYS.USER, user);
      storage.set(STORAGE_KEYS.TOKEN, `token-${user.id}`);

      await helpers.sleep(500);
      setLoading(false);
      onSuccess(user);
    } catch {
      setError('Login failed. Please try again.');
      setLoading(false);
    }
  };

  const handleRegister = async (credentials: RegisterCredentials) => {
    setLoading(true);
    setError('');

    try {
      const users = storage.get<User[]>('users') || [];

      if (users.some(u => u.email === credentials.email)) {
        setError('Email already registered. Please login instead.');
        setLoading(false);
        return;
      }

      if (users.some(u => u.username === credentials.username)) {
        setError('Username already taken. Please choose another.');
        setLoading(false);
        return;
      }

      const newUser: User = {
        id: helpers.generateId(),
        username: credentials.username,
        email: credentials.email,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
      };

      users.push(newUser);
      storage.set('users', users);

      storage.set(STORAGE_KEYS.USER, newUser);
      storage.set(STORAGE_KEYS.TOKEN, `token-${newUser.id}`);

      await helpers.sleep(500);
      setLoading(false);
      onSuccess(newUser);
    } catch {
      setError('Registration failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="auth-modal-overlay" onClick={onClose}>
      <div
        className="auth-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="auth-modal-close">×</button>

        {/* Left Side – Form */}
        <div className="auth-modal-form-side">
          {error && (
            <div className="auth-error-banner">{error}</div>
          )}

          {mode === 'login' ? (
            <LoginForm
              onSubmit={handleLogin}
              onSwitchToRegister={() => {
                setMode('register');
                setError('');
              }}
              loading={loading}
            />
          ) : (
            <RegisterForm
              onSubmit={handleRegister}
              onSwitchToLogin={() => {
                setMode('login');
                setError('');
              }}
              loading={loading}
            />
          )}
        </div>

        {/* Right Side – Branding */}
        <div className="auth-modal-brand-side">
          <div className="auth-modal-brand-content">
            <svg
              className="auth-modal-logo"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ color: '#3b82f6' }}
            >
              <path d="M18.926 23.998 12.003.008l-6.951 23.99h13.874zM15.93 22H8.004l3.941-13.56L15.93 22zM.008 18.102l6.72-1.956-4.527 5.88-.193-3.924zm17.236-1.956 6.72 1.956-.193 3.924-4.527-5.88-2.027-5.88z" />
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
