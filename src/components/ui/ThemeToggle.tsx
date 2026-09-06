import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
      title={isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
      className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-800 shadow-xl shadow-slate-900/10 transition-all duration-300 hover:scale-110 hover:border-blue-500 hover:text-blue-600 hover:shadow-2xl hover:shadow-blue-500/20 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-500/30 dark:border-slate-800/80 dark:bg-slate-900 dark:text-amber-400 dark:shadow-blue-950/40 dark:hover:border-amber-400/50 dark:hover:text-amber-300 cursor-pointer"
    >
      <span className="absolute -inset-1 rounded-full bg-blue-500/10 dark:bg-amber-400/10 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 pointer-events-none" />

      {isDark ? (
        <Sun className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" aria-hidden="true" />
      )}
    </button>
  );
}
