export const validators = {
  // Email validation
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Password validation (min 8 chars, 1 uppercase, 1 lowercase, 1 number)
  password: (password: string): boolean => {
    return password.length >= 8;
  },

  // Strong password validation
  strongPassword: (password: string): boolean => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    return password.length >= 8 && hasUpperCase && hasLowerCase && hasNumber;
  },

  // Username validation (3-20 chars, alphanumeric and underscore)
  username: (username: string): boolean => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
    return usernameRegex.test(username);
  },

  // Check if passwords match
  passwordsMatch: (password: string, confirmPassword: string): boolean => {
    return password === confirmPassword && password.length > 0;
  },

  // Required field validation
  required: (value: string): boolean => {
    return value.trim().length > 0;
  }
};

// Validation error messages
export const validationMessages = {
  email: 'Please enter a valid email address',
  password: 'Password must be at least 8 characters',
  strongPassword: 'Password must contain uppercase, lowercase, and number',
  username: 'Username must be 3-20 characters (letters, numbers, underscore)',
  passwordsMatch: 'Passwords do not match',
  required: 'This field is required'
};