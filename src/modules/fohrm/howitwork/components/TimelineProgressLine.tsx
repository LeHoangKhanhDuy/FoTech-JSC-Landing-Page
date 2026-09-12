import { motion, type MotionValue } from 'framer-motion';

interface TimelineProgressLineProps {
  progress: MotionValue<number>;
}

export function TimelineProgressLine({ progress }: TimelineProgressLineProps) {
  return (
    <div
      aria-hidden="true"
      className="absolute top-8 bottom-8 left-6 md:left-1/2 -translate-x-1/2 w-0.75 pointer-events-none z-0"
    >
      <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800/80 rounded-full" />

      <motion.div
        className="absolute top-0 left-0 right-0 w-full rounded-full bg-gradient-to-b from-blue-600 via-cyan-500 to-indigo-600 shadow-[0_0_16px_rgba(37,99,235,0.7)] dark:shadow-[0_0_20px_rgba(6,182,212,0.8)]"
        style={{
          scaleY: progress,
          transformOrigin: 'top',
          height: '100%',
        }}
      />
    </div>
  );
}
