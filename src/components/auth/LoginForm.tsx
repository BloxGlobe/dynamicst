
import { useState } from 'react';
import type { LoginCredentials } from '../../lib/types';
import { validators, validationMessages } from '../../utils/validators';

interface LoginFormProps {
  onSubmit: (credentials: LoginCredentials) => void;
  onSwitchToRegister: () => void;
  loading?: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = ({ 
  onSubmit, 
  onSwitchToRegister,
  loading = false 
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!validators.email(email)) {
      newErrors.email = validationMessages.email;
    }
    if (!validators.required(password)) {
      newErrors.password = validationMessages.required;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2 className="auth-form-title">Welcome Back</h2>
      <p className="auth-form-subtitle">Log in to your DynamicNet account</p>

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
          placeholder="Enter your password"
          disabled={loading}
        />
        {errors.password && <span className="auth-form-error">{errors.password}</span>}
      </div>

      <button 
        type="submit" 
        className="auth-form-submit"
        disabled={loading}
      >
        {loading ? 'Logging in...' : 'Log In'}
      </button>

      <div className="auth-form-footer">
        <span>Don't have an account? </span>
        <button 
          type="button" 
          onClick={onSwitchToRegister}
          className="auth-form-link"
          disabled={loading}
        >
          Sign up
        </button>
      </div>
    </form>
  );
};