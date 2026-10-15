import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { useLocation } from 'react-router-dom';
import { getNavbarPageConfig } from '@/components/layout/navbar/navbarData';
import type { CSSProperties } from 'react';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const pageConfig = getNavbarPageConfig(pathname);
  const accentStyle = {
    '--brand-accent': pageConfig.accentHex,
    '--brand-accent-hover': pageConfig.accentHoverHex,
    '--brand-accent-soft': pageConfig.accentSoftHex,
  } as CSSProperties;
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    if (isClicked) return;
    setIsClicked(true);

    const lenis = (
      window as unknown as {
        __lenis?: {
          scrollTo: (
            target: number,
            options?: {
              duration?: number;
              easing?: (t: number) => number;
            }
          ) => void;
        };
      }
    ).__lenis;

    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 sm:right-8 z-50 flex flex-col items-center gap-3">
      <div
        className={`transition-all duration-500 ease-out ${
          isVisible
            ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
            : 'opacity-0 translate-y-6 pointer-events-none scale-90 h-0 overflow-hidden'
        }`}
      >
        <button
          type="button"
          onClick={handleScrollToTop}
          aria-label="Cuộn lên đầu trang"
          title="Cuộn lên đầu trang"
          style={{
            ...accentStyle,
            ...(isClicked
              ? { backgroundColor: pageConfig.accentHex, borderColor: pageConfig.accentHex }
              : {}),
          }}
          className={`group relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 border border-slate-200/90 shadow-xl shadow-slate-900/10 transition-all duration-300 hover:bg-[color:var(--brand-accent)] hover:text-white hover:border-[color:var(--brand-accent)] hover:shadow-2xl hover:scale-110 active:bg-[color:var(--brand-accent-hover)] active:text-white active:scale-95 focus:outline-none focus:ring-4 focus:ring-[color:var(--brand-accent-soft)] cursor-pointer dark:bg-slate-900 dark:text-white dark:border-slate-800/80 dark:shadow-black/25 ${
            isClicked ? 'scale-90 text-white shadow-inner' : ''
          }`}
        >
          <span className="absolute -inset-1 rounded-full bg-[color:var(--brand-accent-soft)] opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 pointer-events-none" />

          <ArrowUp
            className={`h-5 w-5 transition-transform duration-300 ${
              isClicked
                ? '-translate-y-1 scale-110'
                : 'group-hover:-translate-y-0.5 group-active:translate-y-0'
            }`}
            aria-hidden="true"
          />
        </button>
      </div>

      <ThemeToggle />
    </div>
  );
}
