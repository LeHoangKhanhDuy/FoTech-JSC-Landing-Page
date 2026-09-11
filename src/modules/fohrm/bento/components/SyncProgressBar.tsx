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
    <div className="w-[92%] sm:w-[86%] max-w-[420px] rounded-2xl bg-[#080b12]/95 border border-white/10 p-3 sm:p-3.5 shadow-2xl shadow-black/60 backdrop-blur-md">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-sm shadow-emerald-500/50" />
          </span>
          <span className="text-xs sm:text-sm font-medium text-slate-200 tracking-wide select-none">
            {BENTO_SYNC_STATS.status}
          </span>
        </div>

        <span className="text-[11px] sm:text-xs font-mono font-medium text-slate-400 select-none">
          {recordsText}
        </span>
      </div>

      <div className="h-1.5 sm:h-2 w-full bg-white/[0.08] rounded-full overflow-hidden mt-2.5 sm:mt-3 relative">
        <div
          className="h-full bg-white rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(255,255,255,0.7)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
