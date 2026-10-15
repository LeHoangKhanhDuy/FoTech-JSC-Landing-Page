import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useLocation } from 'react-router-dom';
import { getNavbarPageConfig } from '@/components/layout/navbar/navbarData';
import type { CSSProperties } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const pageConfig = getNavbarPageConfig(pathname);
  const accentStyle = {
    '--brand-accent': pageConfig.accentHex,
    '--brand-accent-hover': pageConfig.accentHoverHex,
    '--brand-accent-soft': pageConfig.accentSoftHex,
  } as CSSProperties;
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      style={accentStyle}
      aria-label={isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
      title={isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
      className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-800 shadow-xl shadow-slate-900/10 transition-all duration-300 hover:scale-110 hover:border-[color:var(--brand-accent)] hover:text-[color:var(--brand-accent)] hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-[color:var(--brand-accent-soft)] dark:border-slate-800/80 dark:bg-slate-900 dark:text-[color:var(--brand-accent)] dark:shadow-black/40 dark:hover:border-[color:var(--brand-accent)] dark:hover:text-[color:var(--brand-accent)] cursor-pointer"
    >
      <span className="absolute -inset-1 rounded-full bg-[color:var(--brand-accent-soft)] opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 pointer-events-none" />

      {isDark ? (
        <Sun className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" aria-hidden="true" />
      )}
    </button>
  );
}
