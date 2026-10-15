import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  fromX?: number;
  duration?: number;
};

export default function Reveal({ children, delay = 0, className = '', fromX = 0, duration = 0.65 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasEnteredView = useInView(ref, { once: true, amount: 0.2 });
  const hiddenState = { opacity: 0, x: fromX, y: fromX === 0 ? 26 : 0 };

  return (
    <motion.div
      ref={ref}
      initial={hiddenState}
      animate={hasEnteredView ? { opacity: 1, x: 0, y: 0 } : hiddenState}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
