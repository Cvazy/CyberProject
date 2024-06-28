import { useState } from "react";

export const useLocalStorage = (key: string, initialValue: object) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const removeValue = (id: number) => {
    try {
      const newStoredValue = storedValue.filter((item: any) => item.id !== id);
      setStoredValue(newStoredValue);
      window.localStorage.setItem(key, JSON.stringify(newStoredValue));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, removeValue];
};
