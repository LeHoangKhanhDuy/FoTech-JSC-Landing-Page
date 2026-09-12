import React, { useEffect, useState } from 'react';
import { BENTO_SYNC_STATS } from '@/modules/fohrm/bento/data/bentoData';

interface SyncProgressBarProps {
  recordsText?: string;
}

export const SyncProgressBar: React.FC<SyncProgressBarProps> = ({
  recordsText = BENTO_SYNC_STATS.records,
}) => {
  const [progress, setProgress] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 92) return 38;
        return prev + 6;
      });
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[92%] sm:w-[86%] max-w-[420px] rounded-2xl bg-white/95 border border-slate-200/90 shadow-xl shadow-slate-900/5 dark:bg-[#080b12]/95 dark:border-white/10 dark:shadow-2xl dark:shadow-black/60 p-3 sm:p-3.5 backdrop-blur-md transition-colors duration-300">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-sm shadow-emerald-500/50" />
          </span>
          <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 tracking-wide select-none transition-colors">
            {BENTO_SYNC_STATS.status}
          </span>
        </div>

        <span className="text-[11px] sm:text-xs font-mono font-medium text-slate-500 dark:text-slate-400 select-none transition-colors">
          {recordsText}
        </span>
      </div>

      <div className="h-1.5 sm:h-2 w-full bg-slate-200/80 dark:bg-white/[0.08] rounded-full overflow-hidden mt-2.5 sm:mt-3 relative transition-colors">
        <div
          className="h-full bg-blue-600 dark:bg-white rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(37,99,235,0.4)] dark:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
