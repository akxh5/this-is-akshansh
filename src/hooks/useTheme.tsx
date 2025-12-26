import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      console.log('Initial theme from localStorage:', saved);
      return saved ? saved === 'dark' : false; // Default to light mode
    }
    return false;
  });

  useEffect(() => {
    console.log('useEffect triggered with isDark:', isDark);
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    console.log('toggleTheme called');
    setIsDark(!isDark);
  };

  return { isDark, toggleTheme };
};