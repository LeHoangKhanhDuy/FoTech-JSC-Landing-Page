import { HowItWorksStepItem } from "@/modules/marketing/types";

interface HowItWorksCardProps {
  step: HowItWorksStepItem;
  className?: string;
  style?: React.CSSProperties;
}

export function HowItWorksCard({ step, className = "", style }: HowItWorksCardProps) {
  return (
    <div
      style={style}
      className={`group relative rounded-[28px] p-7 sm:p-8 bg-white border border-slate-100/80 text-slate-900 shadow-sm hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 dark:bg-slate-900/70 dark:border-slate-800/90 dark:text-white backdrop-blur-md transition-all duration-300 ${className}`}
    >
      <div className="flex items-start justify-between mb-6">
        <span className="font-serif italic text-4xl sm:text-5xl font-light tracking-tight select-none text-slate-300/90 group-hover:text-blue-600 dark:text-slate-500 dark:group-hover:text-blue-400 transition-colors">
          {step.number}
        </span>
        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:text-blue-600 group-hover:bg-blue-50 border border-transparent group-hover:border-blue-200 dark:bg-slate-800 dark:text-slate-300 dark:group-hover:text-blue-400 dark:group-hover:bg-blue-950/40 dark:group-hover:border-blue-500/30 transition-colors">
          {step.tag}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-3 tracking-tight text-slate-900 dark:text-white transition-colors">
        {step.title}
      </h3>

      <p className="text-xs sm:text-sm leading-relaxed text-slate-500 group-hover:text-slate-700 dark:text-slate-300 dark:group-hover:text-slate-100 transition-colors">
        {step.description}
      </p>
    </div>
  );
}
