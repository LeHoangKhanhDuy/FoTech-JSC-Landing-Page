import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeContext, type Theme } from '@/contexts/theme-context';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isFoHRM = location.pathname.startsWith('/fohrm');
  const [fotechTheme, setFoTechTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored =
        localStorage.getItem('fotech-theme') || localStorage.getItem('fotalent-theme');
      return stored === 'dark' ? 'dark' : 'light';
    }
    return 'light';
  });

  const [fohrmTheme, setFoHRMTheme] = useState<Theme>('dark');

  useEffect(() => {
    try {
      localStorage.removeItem('fohrm-theme');
    } catch {
      // Ignore storage errors
    }
  }, []);

  const theme = isFoHRM ? fohrmTheme : fotechTheme;

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    if (!isFoHRM) {
      localStorage.setItem('fotech-theme', theme);
      localStorage.setItem('fotalent-theme', theme);
    }
  }, [theme, isFoHRM]);

  const toggleTheme = useCallback(() => {
    if (isFoHRM) {
      setFoHRMTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    } else {
      setFoTechTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }
  }, [isFoHRM]);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      if (isFoHRM) {
        setFoHRMTheme(newTheme);
      } else {
        setFoTechTheme(newTheme);
      }
    },
    [isFoHRM]
  );

  const contextValue = useMemo(
    () => ({ theme, toggleTheme, setTheme }),
    [theme, toggleTheme, setTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
