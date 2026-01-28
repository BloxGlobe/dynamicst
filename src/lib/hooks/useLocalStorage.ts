import { useState, useEffect } from 'react';
import { storage } from '../../utils/storage';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = storage.get<T>(key);
    return item ?? initialValue;
  });

  const setValue = (value: T | ((val: T) => T)) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    storage.set(key, valueToStore);
  };

  useEffect(() => {
    const item = storage.get<T>(key);
    if (item) {
      setStoredValue(item);
    }
  }, [key]);

  return [storedValue, setValue] as const;
};