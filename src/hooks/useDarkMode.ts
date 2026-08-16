import { useEffect } from 'react';

const storageKey = 'fotalent-theme';

export function useDarkMode() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    window.localStorage.setItem(storageKey, 'dark');
  }, []);

  return { isDark: true, toggleDarkMode: () => {} };
}
