import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const classes = [
    'input',
    error ? 'input-error' : '',
    fullWidth ? 'input-full' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={`input-wrapper ${fullWidth ? 'input-wrapper-full' : ''}`}>
      {label && (
        <label className="input-label">
          {label}
        </label>
      )}
      <input className={classes} {...props} />
      {error && (
        <span className="input-error-text">{error}</span>
      )}
    </div>
  );
};

