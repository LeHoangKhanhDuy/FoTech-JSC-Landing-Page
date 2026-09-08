import { useEffect } from 'react';
import Lenis from 'lenis';

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      syncTouch: false,
      autoRaf: true,
      autoToggle: true,
      allowNestedScroll: true,
      autoResize: true,
      anchors: {
        offset: -80,
        duration: 1.4,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      },
    });

    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

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
              easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          }
        } catch (err) {
          console.debug('Smooth scroll fallback error:', err);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);
}
