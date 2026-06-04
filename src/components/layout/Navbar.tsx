import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from '@/components/common/Button';
import LogoMark from '@/components/common/LogoMark';
import { navigationItems } from '@/constants/navigation';
import { submitLead } from '@/services/leadService';
import { useDarkMode } from '@/hooks/useDarkMode';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled ? 'border-b border-slate-200/70 bg-white/78 shadow-sm backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/72' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <LogoMark />

        <div className="hidden items-center gap-8 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-[#1972F5] dark:text-slate-300 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            aria-label="Đổi chế độ sáng tối"
            onClick={toggleDarkMode}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-[#1972F5]/40 hover:text-[#1972F5] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          >
            {isDark ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
          </button>
          <Button variant="ghost" icon={null} onClick={() => submitLead('trial')}>
            Đăng nhập
          </Button>
          <Button onClick={() => submitLead('demo')}>Đăng ký Demo</Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            aria-label="Đổi chế độ sáng tối"
            onClick={toggleDarkMode}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
          >
            {isDark ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
          </button>
          <button
            type="button"
            aria-label="Mở menu"
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
          >
            {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-xl dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <Button variant="secondary" icon={null} onClick={() => submitLead('trial')}>
                Đăng nhập
              </Button>
              <Button onClick={() => submitLead('demo')}>Đăng ký Demo</Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
