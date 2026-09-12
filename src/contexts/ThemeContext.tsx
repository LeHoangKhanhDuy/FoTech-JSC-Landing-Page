import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeContext, type Theme } from '@/contexts/theme-context';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const getThemeForPath = useCallback((pathname: string): Theme => {
    if (pathname.startsWith('/fohrm')) {
      const fohrmStored =
        localStorage.getItem('fohrm-theme') || localStorage.getItem('fotech-theme');
      if (fohrmStored === 'light' || fohrmStored === 'dark') {
        return fohrmStored;
      }
      return 'dark';
    }
    const stored =
      localStorage.getItem('fotech-theme') || localStorage.getItem('fotalent-theme');
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
    return 'light';
  }, []);

  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return getThemeForPath(window.location.pathname);
    }
    return 'light';
  });

  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    const prevPath = prevPathRef.current;
    const currentPath = location.pathname;
    prevPathRef.current = currentPath;

    const wasFoHRM = prevPath.startsWith('/fohrm');
    const nowFoHRM = currentPath.startsWith('/fohrm');

    if (wasFoHRM !== nowFoHRM) {
      setThemeState(getThemeForPath(currentPath));
    }
  }, [location.pathname, getThemeForPath]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    if (location.pathname.startsWith('/fohrm')) {
      localStorage.setItem('fohrm-theme', theme);
      localStorage.setItem('fotech-theme', theme);
    } else {
      localStorage.setItem('fotech-theme', theme);
      localStorage.setItem('fotalent-theme', theme);
    }
  }, [theme, location.pathname]);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

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
