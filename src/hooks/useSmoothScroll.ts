import { useEffect } from 'react';
import Lenis from 'lenis';

export function useSmoothScroll() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';

    const lenis = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      smoothWheel: true,
      syncTouch: false,
      infinite: false,
      autoResize: true,
    });

    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (
        anchor &&
        anchor.hash &&
        anchor.hash.length > 1 &&
        anchor.origin === window.location.origin &&
        anchor.pathname === window.location.pathname
      ) {
        try {
          const targetElement = document.querySelector(anchor.hash);
          if (targetElement) {
            e.preventDefault();
            lenis.scrollTo(targetElement as HTMLElement, {
              offset: -80,
              duration: 1.4,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          }
        } catch {
          // fallback
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);
}
