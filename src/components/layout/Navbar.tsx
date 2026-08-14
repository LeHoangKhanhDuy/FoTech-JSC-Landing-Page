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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-label="Mở menu"
              onClick={() => setIsOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Slide-over Drawer & Backdrop (3/4 width slide from right + blurred backdrop) */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Blurred Backdrop for remaining 1/4 area */}
        <div
          className={`absolute inset-0 bg-slate-950/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Right Drawer Panel (3/4 screen width) */}
        <div
          className={`absolute top-0 right-0 bottom-0 h-full w-[75vw] max-w-xs sm:w-80 bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out dark:bg-slate-900 flex flex-col justify-between overflow-y-auto ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            {/* Drawer Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <LogoMark />
              <button
                type="button"
                aria-label="Đóng menu"
                onClick={() => setIsOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="mt-6 space-y-1.5">
              <div className="px-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Điều hướng
              </div>
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Drawer Bottom Actions & Dark Mode */}
          <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-semibold text-slate-500">Giao diện</span>
              <button
                type="button"
                aria-label="Đổi chế độ sáng tối"
                onClick={toggleDarkMode}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200"
              >
                {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
              </button>
            </div>

            <div className="grid gap-2">
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
      </div>

      <LeadModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        type={modalState.type}
      />
    </>
  );
}
