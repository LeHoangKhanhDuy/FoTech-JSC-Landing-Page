import { useEffect, useState } from 'react';

const storageKey = 'fotalent-theme';

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') {
      return true;
    }

    const stored = window.localStorage.getItem(storageKey);
    if (stored) {
      return stored === 'dark';
    }

    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    window.localStorage.setItem(storageKey, isDark ? 'dark' : 'light');
  }, [isDark]);

  return { isDark, toggleDarkMode: () => setIsDark((value) => !value) };
}
