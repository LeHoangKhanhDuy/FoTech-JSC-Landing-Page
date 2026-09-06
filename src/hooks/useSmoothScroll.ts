import { useEffect } from 'react';
import type Lenis from 'lenis';

export function useSmoothScroll() {
  useEffect(() => {
    const isMobile =
      typeof window !== 'undefined' &&
      (window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches);

    if (isMobile) {
      document.documentElement.style.scrollBehavior = 'smooth';
      return;
    }

    let lenisInstance: Lenis | null = null;
    let rafId: number;

    const initLenis = async () => {
      const { default: LenisConstructor } = await import('lenis');
      document.documentElement.style.scrollBehavior = 'auto';

      lenisInstance = new LenisConstructor({
        lerp: 0.085,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.5,
        smoothWheel: true,
        syncTouch: false,
        infinite: false,
        autoResize: true,
      });

      (window as unknown as { __lenis?: Lenis }).__lenis = lenisInstance;

      function raf(time: number) {
        if (lenisInstance) {
          lenisInstance.raf(time);
          rafId = requestAnimationFrame(raf);
        }
      }
      rafId = requestAnimationFrame(raf);
    };

    initLenis();

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
            if (lenisInstance) {
              lenisInstance.scrollTo(targetElement as HTMLElement, {
                offset: -80,
                duration: 1.4,
                easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              });
            } else {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          }
        } catch (err) {
          console.debug('Smooth scroll fallback error:', err);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      if (lenisInstance) {
        lenisInstance.destroy();
        delete (window as unknown as { __lenis?: Lenis }).__lenis;
      }
    };
  }, []);
}
