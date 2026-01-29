import { useState } from 'react';
import type { RegisterCredentials } from '../../lib/types';
import { validators, validationMessages } from '../../utils/validators';

interface RegisterFormProps {
  onSubmit: (credentials: RegisterCredentials) => void;
  onSwitchToLogin: () => void;
  loading?: boolean;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ 
  onSubmit, 
  onSwitchToLogin,
  loading = false 
}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!validators.username(username)) {
      newErrors.username = validationMessages.username;
    }
    if (!validators.email(email)) {
      newErrors.email = validationMessages.email;
    }
    if (!validators.password(password)) {
      newErrors.password = validationMessages.password;
    }
    if (!validators.passwordsMatch(password, confirmPassword)) {
      newErrors.confirmPassword = validationMessages.passwordsMatch;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ username, email, password, confirmPassword });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2 className="auth-form-title">Create Account</h2>
      <p className="auth-form-subtitle">Join DynamicNet today</p>

      <div className="auth-form-field">
        <label htmlFor="username" className="auth-form-label">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={`auth-form-input ${errors.username ? 'error' : ''}`}
          placeholder="johndoe"
          disabled={loading}
        />
        {errors.username && <span className="auth-form-error">{errors.username}</span>}
      </div>

      <div className="auth-form-field">
        <label htmlFor="email" className="auth-form-label">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`auth-form-input ${errors.email ? 'error' : ''}`}
          placeholder="you@example.com"
          disabled={loading}
        />
        {errors.email && <span className="auth-form-error">{errors.email}</span>}
      </div>

      <div className="auth-form-field">
        <label htmlFor="password" className="auth-form-label">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`auth-form-input ${errors.password ? 'error' : ''}`}
          placeholder="At least 8 characters"
          disabled={loading}
        />
        {errors.password && <span className="auth-form-error">{errors.password}</span>}
      </div>

      <div className="auth-form-field">
        <label htmlFor="confirmPassword" className="auth-form-label">Confirm Password</label>
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={`auth-form-input ${errors.confirmPassword ? 'error' : ''}`}
          placeholder="Re-enter your password"
          disabled={loading}
        />
        {errors.confirmPassword && <span className="auth-form-error">{errors.confirmPassword}</span>}
      </div>

      <button 
        type="submit" 
        className="auth-form-submit"
        disabled={loading}
      >
        {loading ? 'Creating account...' : 'Sign Up'}
      </button>

      <div className="auth-form-footer">
        <span>Already have an account? </span>
        <button 
          type="button" 
          onClick={onSwitchToLogin}
          className="auth-form-link"
          disabled={loading}
        >
          Log in
        </button>
      </div>
    </form>
  );
};

