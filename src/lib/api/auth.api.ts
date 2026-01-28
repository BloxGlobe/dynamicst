import type { LoginCredentials, RegisterCredentials, AuthResponse, User } from '../types';
import { helpers } from '../../utils/helpers';

// Mock API - Replace with real API calls later
export const authAPI = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    // Simulate API delay
    await helpers.sleep(1000);

    // Mock validation
    if (!credentials.email || !credentials.password) {
      return {
        success: false,
        error: 'Invalid credentials'
      };
    }

    // Mock successful login
    const user: User = {
      id: helpers.generateId(),
      username: credentials.email.split('@')[0],
      email: credentials.email,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString()
    };

    return {
      success: true,
      user,
      token: 'mock-jwt-token-' + helpers.generateId()
    };
  },

  register: async (credentials: RegisterCredentials): Promise<AuthResponse> => {
    // Simulate API delay
    await helpers.sleep(1000);

    // Mock validation
    if (!credentials.username || !credentials.email || !credentials.password) {
      return {
        success: false,
        error: 'All fields are required'
      };
    }

    // Mock successful registration
    const user: User = {
      id: helpers.generateId(),
      username: credentials.username,
      email: credentials.email,
      createdAt: new Date().toISOString(),
      lastLogin: new Date().toISOString()
    };

    return {
      success: true,
      user,
      token: 'mock-jwt-token-' + helpers.generateId()
    };
  },

  logout: async (): Promise<void> => {
    // Simulate API call
    await helpers.sleep(500);
  }
};