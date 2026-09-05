import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
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

    setTimeout(() => {
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
          duration: 1.6,
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
    }, 150);
  };

  return (
    <div
      className={`fixed bottom-6 right-8 z-50 transition-all duration-500 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
          : 'opacity-0 translate-y-6 pointer-events-none scale-90'
      }`}
    >
      <button
        type="button"
        onClick={handleScrollToTop}
        aria-label="Cuộn lên đầu trang"
        className={`group relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900 border border-slate-200/90 shadow-xl shadow-blue-950/25 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-600/40 hover:scale-110 active:bg-blue-700 active:text-white active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-500/30 cursor-pointer animate-float-bounce ${
          isClicked ? 'scale-90 bg-blue-700 text-white shadow-inner' : ''
        }`}
      >
        <span className="absolute -inset-1 rounded-full bg-blue-500/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 pointer-events-none" />

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
  );
}
