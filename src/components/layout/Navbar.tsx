import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import LogoMark from '@/components/layout/LogoMark';
import LeadModal from '@/components/ui/LeadModal';
import { navigationItems } from '@/constants/navigation';
import { useDarkMode } from '@/hooks/useDarkMode';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleDarkMode } = useDarkMode();
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'demo' | 'trial' | 'login' | 'consulting';
  }>({ isOpen: false, type: 'trial' });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openModal = (type: 'demo' | 'trial' | 'login' | 'consulting') => {
    setModalState({ isOpen: true, type });
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/90'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:px-8">
          <LogoMark />

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600 dark:text-slate-300 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              aria-label="Đổi chế độ sáng tối"
              onClick={toggleDarkMode}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-blue-500/40 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-500/40"
            >
              {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
            </button>
            <Button
              variant="ghost"
              icon={null}
              onClick={() => openModal('login')}
            >
              Đăng nhập
            </Button>
            <Button
              variant="primary"
              onClick={() => openModal('trial')}
            >
              Dùng thử miễn phí
            </Button>
          </div>

          {/* Mobile Action Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-label="Đổi chế độ sáng tối"
              onClick={toggleDarkMode}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            >
              {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
            </button>
            <button
              type="button"
              aria-label="Mở menu"
              onClick={() => setIsOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
            >
              {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-xl dark:border-slate-800 dark:bg-slate-900 md:hidden">
            <div className="mx-auto grid max-w-[1440px] gap-2">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                <Button
                  variant="outline"
                  icon={null}
                  onClick={() => openModal('login')}
                  className="w-full"
                >
                  Đăng nhập
                </Button>
                <Button
                  variant="primary"
                  onClick={() => openModal('trial')}
                  className="w-full"
                >
                  Dùng thử miễn phí
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <LeadModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        type={modalState.type}
      />
    </>
  );
}
