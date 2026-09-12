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
      className={`group relative overflow-hidden rounded-3xl border p-2.5 sm:p-3.5 transition-all duration-500 backdrop-blur-xl cursor-pointer ${
        isActive
          ? 'border-blue-500/90 bg-white/95 shadow-[0_0_40px_-5px_rgba(37,99,235,0.35)] ring-2 ring-blue-500/25 dark:border-cyan-400/90 dark:bg-slate-900/90 dark:shadow-[0_0_45px_-5px_rgba(6,182,212,0.45)] dark:ring-cyan-400/25 scale-[1.02]'
          : 'border-slate-200/80 bg-white/80 shadow-md hover:border-blue-400 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-slate-700'
      }`}
    >
      {isActive && (
        <div
          aria-hidden="true"
          className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 blur-2xl pointer-events-none animate-pulse"
        />
      )}

      <div className="relative overflow-hidden rounded-2xl bg-slate-950 aspect-[1391/1131] flex items-center justify-center shadow-inner">
        <img
          src={step.image}
          alt={step.imageAlt || step.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300"
        />

        <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-slate-950/75 px-3 py-1 backdrop-blur-md border border-white/15 text-[11px] font-bold shadow-lg">
          <span className="relative flex h-2 w-2">
            <span
              className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isActive ? 'animate-ping bg-emerald-400' : 'bg-slate-400'
              }`}
            />
            <span
              className={`relative inline-flex h-2 w-2 rounded-full ${
                isActive ? 'bg-emerald-500' : 'bg-slate-400'
              }`}
            />
          </span>
          <span className={isActive ? 'text-emerald-400' : 'text-slate-300'}>
            {isActive ? 'Đang kích hoạt' : 'Xem trước'}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default TimelineVisualCard;
