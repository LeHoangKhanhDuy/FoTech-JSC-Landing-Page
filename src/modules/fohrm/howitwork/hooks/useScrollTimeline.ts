import { useRef, useState, useEffect } from 'react';
import { useScroll, useSpring, type MotionValue } from 'framer-motion';

interface UseScrollTimelineReturn {
  containerRef: React.RefObject<HTMLDivElement | null>;
  scrollYProgress: MotionValue<number>;
  smoothProgress: MotionValue<number>;
  activeStepIndex: number;
  setActiveStepIndex: (index: number) => void;
  stepRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

export function useScrollTimeline(totalSteps: number): UseScrollTimelineReturn {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 65%', 'end 55%'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveStepIndex((prev) => Math.max(prev, index));
            }
          });
        },
        {
          root: null,
          rootMargin: '-20% 0px -25% 0px',
          threshold: [0.1, 0.4, 0.7],
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [totalSteps]);

  useEffect(() => {
    const unsubscribe = smoothProgress.on('change', (latest) => {
      const calculatedIndex = Math.min(
        totalSteps - 1,
        Math.max(0, Math.floor(latest * totalSteps))
      );
      setActiveStepIndex((prev) => Math.max(prev, calculatedIndex));
    });

    return () => unsubscribe();
  }, [smoothProgress, totalSteps]);

  return {
    containerRef,
    scrollYProgress,
    smoothProgress,
    activeStepIndex,
    setActiveStepIndex,
    stepRefs,
  };
}
