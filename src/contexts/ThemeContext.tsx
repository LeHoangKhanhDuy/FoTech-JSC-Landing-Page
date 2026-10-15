import React, { useEffect, useLayoutEffect, useState, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeContext, type Theme } from '@/contexts/theme-context';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isFoHRM = location.pathname.startsWith('/app/fohrm');
  const isFoMed = location.pathname.startsWith('/app/fomed');
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
      localStorage.removeItem('fomed-theme');
    } catch {
      // Ignore storage errors
    }
  }, []);

  const theme = isFoHRM ? fohrmTheme : isFoMed ? 'light' : fotechTheme;

  useLayoutEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    root.style.colorScheme = theme;

    if (!isFoHRM && !isFoMed) {
      localStorage.setItem('fotech-theme', theme);
      localStorage.setItem('fotalent-theme', theme);
    }
  }, [theme, isFoHRM, isFoMed]);

  const toggleTheme = useCallback(() => {
    if (isFoHRM) {
      setFoHRMTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    } else if (isFoMed) {
      return;
    } else {
      setFoTechTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }
  }, [isFoHRM, isFoMed]);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      if (isFoHRM) {
        setFoHRMTheme(newTheme);
      } else if (isFoMed) {
        return;
      } else {
        setFoTechTheme(newTheme);
      }
    },
    [isFoHRM, isFoMed]
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
