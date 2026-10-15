import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  fromX?: number;
};

export default function Reveal({ children, delay = 0, className = '', fromX = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: fromX, y: fromX === 0 ? 26 : 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
