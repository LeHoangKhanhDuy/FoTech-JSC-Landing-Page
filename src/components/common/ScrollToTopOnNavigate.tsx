import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTopOnNavigate() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const resetScroll = () => {
      const lenis = (
        window as unknown as {
          __lenis?: {
            scrollTo: (
              target: number,
              options?: {
                immediate?: boolean;
              }
            ) => void;
          };
        }
      ).__lenis;

      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' as ScrollBehavior,
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    if (hash) {
      let cancelled = false;
      let timeoutId: ReturnType<typeof setTimeout>;
      let attempts = 0;

      const scrollToHash = () => {
        if (cancelled) return;

        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) {
          const lenis = (
            window as unknown as {
              __lenis?: {
                scrollTo: (
                  target: HTMLElement,
                  options?: { offset?: number; duration?: number }
                ) => void;
              };
            }
          ).__lenis;

          if (lenis) {
            lenis.scrollTo(target, { offset: -80, duration: 1.2 });
          } else {
            const top = target.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({ top, behavior: "smooth" });
          }
          return;
        }

        if (attempts >= 40) {
          resetScroll();
          return;
        }
        attempts += 1;
        timeoutId = setTimeout(scrollToHash, 50);
      };

      timeoutId = setTimeout(scrollToHash, 0);
      return () => {
        cancelled = true;
        clearTimeout(timeoutId);
      };
    }

    resetScroll();
    const rafId = requestAnimationFrame(resetScroll);
    const timeoutId = setTimeout(resetScroll, 50);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [pathname, hash]);

  return null;
}
