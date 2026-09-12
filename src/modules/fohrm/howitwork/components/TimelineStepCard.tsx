import { CheckCircle2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import type { TimelineStepCardProps } from '@/modules/fohrm/howitwork/types/howItWorkTypes';

export function TimelineStepCard({
  step,
  isActive,
  isReversed = false,
}: TimelineStepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isReversed ? 25 : -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`relative flex flex-col justify-center ${
        isReversed ? 'md:text-left' : 'md:text-left'
      }`}
    >
      <div className="inline-flex items-center gap-2 self-start rounded-full border border-blue-500/20 bg-blue-50/90 px-3.5 py-1 text-xs font-bold text-blue-600 dark:border-blue-500/30 dark:bg-blue-950/60 dark:text-blue-400">
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
        <span>{step.badge}</span>
      </div>

      <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
        {step.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
        {step.description}
      </p>

      <ul className="mt-5 space-y-2.5">
        {step.highlights.map((highlight, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 sm:text-sm"
          >
            <CheckCircle2
              className={`h-4 w-4 shrink-0 mt-0.5 transition-colors duration-300 ${
                isActive ? 'text-blue-600 dark:text-cyan-400' : 'text-emerald-500'
              }`}
              aria-hidden="true"
            />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      {step.metrics && step.metrics.length > 0 && (
        <div className="mt-6 grid grid-cols-3 gap-2.5 pt-4 border-t border-slate-200/70 dark:border-slate-800">
          {step.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200/70 bg-white/70 p-2.5 text-center shadow-xs dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="text-base font-extrabold text-blue-600 dark:text-cyan-400 sm:text-lg">
                {metric.value}
              </div>
              <div className="mt-0.5 text-[11px] font-medium text-slate-500 dark:text-slate-400 truncate">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
