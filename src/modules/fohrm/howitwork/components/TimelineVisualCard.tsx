import { motion } from 'framer-motion';
import type { TimelineVisualCardProps } from '@/modules/fohrm/howitwork/types/howItWorkTypes';

export function TimelineVisualCard({
  step,
  isActive,
  onActionClick,
}: TimelineVisualCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      onClick={onActionClick}
      className={`group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer ${
        isActive
          ? 'shadow-[0_0_40px_-5px_rgba(37,99,235,0.4)] dark:shadow-[0_0_45px_-5px_rgba(0,50,139)] scale-[1.02]'
          : 'shadow-md hover:shadow-xl'
      }`}
    >
      {isActive && (
        <div
          aria-hidden="true"
          className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 blur-2xl pointer-events-none animate-pulse"
        />
      )}

      <div className="relative overflow-hidden rounded-3xl aspect-[1391/1131] flex items-center justify-center">
        <img
          src={step.image}
          alt={step.imageAlt || step.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        />
      </div>
    </motion.div>
  );
}

export default TimelineVisualCard;
