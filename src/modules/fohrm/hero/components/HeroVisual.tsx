import { memo } from "react";
import mktDashboardImg from "@/assets/MKTFoHRM.png";

export const HeroVisual = memo(function HeroVisual() {
  return (
    <div className="relative w-full max-w-2xl lg:max-w-none mx-auto">
      <div
        className="absolute -inset-4 sm:-inset-8 rounded-3xl bg-gradient-to-tr from-blue-600/50 via-indigo-500/20 to-cyan-400/20 blur-2xl sm:blur-3xl opacity-70 dark:opacity-80 -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/90 shadow-2xl shadow-blue-900/10 transition-all duration-300 dark:border-slate-800/90 dark:bg-slate-900/90 dark:shadow-black/70">
        <div className="flex items-center justify-between border-b border-slate-200/80 bg-slate-100/80 px-4 py-2.5 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/80">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#FF5F56]" />
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#27C93F]" />
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 rounded-md border border-slate-200/80 bg-white/90 px-3 py-0.5 text-[11px] font-medium text-slate-500 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              fohrm.vn/dashboard
            </span>
          </div>
        </div>

        <div className="relative aspect-[16/10.5] w-full overflow-hidden bg-slate-950/5 dark:bg-slate-950">
          <img
            src={mktDashboardImg}
            alt="Giao diện bảng điều khiển quản trị nhân sự FoHRM"
            width={1200}
            height={788}
            loading="eager"
            fetchPriority="high"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
          />
        </div>
      </div>
    </div>
  );
});

export default HeroVisual;
