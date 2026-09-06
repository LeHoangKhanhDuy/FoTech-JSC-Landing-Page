import { useTheme } from '@/hooks/useTheme';

export { useTheme };

export function useDarkMode() {
  const { theme, toggleTheme } = useTheme();
  return {
    isDark: theme === 'dark',
    toggleDarkMode: toggleTheme,
  };
}

