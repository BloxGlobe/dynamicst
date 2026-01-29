import { useState } from 'react';
import type { User, AuthState } from '../types';
import { storage, STORAGE_KEYS } from '../../utils/storage';

export const useAuth = () => {
  const [authState, setAuthState] = useState<AuthState>(() => {
    const user = storage.get<User>(STORAGE_KEYS.USER);
    const token = storage.get<string>(STORAGE_KEYS.TOKEN);

    if (user && token) {
      return {
        isAuthenticated: true,
        user,
        token,
        loading: false,
      };
    }

    return {
      isAuthenticated: false,
      user: null,
      token: null,
      loading: false,
    };
  });

  const login = (user: User, token: string) => {
    storage.set(STORAGE_KEYS.USER, user);
    storage.set(STORAGE_KEYS.TOKEN, token);

    setAuthState({
      isAuthenticated: true,
      user,
      token,
      loading: false,
    });
  };

  const logout = () => {
    storage.remove(STORAGE_KEYS.USER);
    storage.remove(STORAGE_KEYS.TOKEN);

    setAuthState({
      isAuthenticated: false,
      user: null,
      token: null,
      loading: false,
    });
  };

  return { ...authState, login, logout };
};
