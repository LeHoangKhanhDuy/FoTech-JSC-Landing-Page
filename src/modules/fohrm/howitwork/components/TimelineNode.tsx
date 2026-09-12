import { motion } from 'framer-motion';
import type { TimelineNodeProps } from '@/modules/fohrm/howitwork/types/howItWorkTypes';

export function TimelineNode({
  stepNumber,
  isActive,
  onClick,
}: TimelineNodeProps) {
  return (
    <div
      onClick={onClick}
      className="relative z-10 flex items-center justify-center cursor-pointer select-none group"
      title={`Bước ${stepNumber}`}
    >
      {isActive && (
        <>
          <span
            aria-hidden="true"
            className="absolute -inset-2.5 rounded-full border-2 border-blue-500/70 animate-ping pointer-events-none duration-1000"
          />
          <span
            aria-hidden="true"
            className="absolute -inset-2 rounded-full bg-blue-500/25 dark:bg-cyan-500/30 blur-md pointer-events-none"
          />
        </>
      )}

      <motion.div
        animate={{
          scale: isActive ? 1.12 : 1,
        }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className={`relative flex h-11 w-11 items-center justify-center rounded-full text-sm font-extrabold transition-all duration-500 shadow-md ${
          isActive
            ? 'bg-gradient-to-tr from-blue-600 via-blue-500 to-cyan-400 text-white shadow-blue-500/40 border-2 border-white dark:border-slate-900 ring-4 ring-blue-500/20'
            : 'bg-white text-slate-600 border-2 border-slate-300 hover:border-blue-400 hover:text-blue-600 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-700 dark:hover:border-slate-500'
        }`}
      >
        <span className="leading-none">{`0${stepNumber}`}</span>
      </motion.div>
    </div>
  );
}
