import type { CSSProperties } from 'react';
import { ArrowRight } from 'lucide-react';
import { FreeTrialData } from '@/modules/fohrm/pricing/types/pricingTypes';

interface FreeTrialCardProps {
  data: FreeTrialData;
  onGetStarted: () => void;
  className?: string;
  style?: CSSProperties;
}

export default function FreeTrialCard({
  data,
  onGetStarted,
  className = '',
  style,
}: FreeTrialCardProps) {
  return (
    <div
      style={style}
      className={`mx-auto max-w-xl rounded-2xl bg-white/90 p-4 sm:p-4 sm:px-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-2xl dark:shadow-blue-950/20 ${className}`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight">
              {data.title}
            </h3>
            <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-extrabold text-blue-700 dark:bg-blue-950 dark:text-blue-400">
              {data.badge}
            </span>
          </div>

          <p className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <span>{data.infoText}</span>           
          </p>
        </div>

        <button
          type="button"
          onClick={onGetStarted}
          className="inline-flex items-center justify-center gap-1.5 shrink-0 rounded-full bg-blue-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-600/20 hover:bg-blue-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
        >
          <span>{data.buttonText}</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
