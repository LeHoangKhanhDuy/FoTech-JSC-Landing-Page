import { HowItWorksStepItem } from "@/modules/marketing/types";

interface HowItWorksCardProps {
  step: HowItWorksStepItem;
}

export function HowItWorksCard({ step }: HowItWorksCardProps) {
  return (
    <div className="group relative rounded-[28px] p-7 sm:p-8 bg-slate-900/50 border border-slate-800/80 text-white hover:border-blue-500/80 backdrop-blur-md transition-all duration-300">
      <div className="flex items-start justify-between mb-6">
        <span className="font-serif italic text-4xl sm:text-5xl font-light tracking-tight select-none text-slate-600 group-hover:text-blue-400 transition-colors">
          {step.number}
        </span>
        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-950/40 border border-transparent group-hover:border-blue-500/30 transition-colors">
          {step.tag}
        </span>
      </div>

      <h3 className="text-xl font-bold mb-3 tracking-tight text-white transition-colors">
        {step.title}
      </h3>

      <p className="text-xs sm:text-sm leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
        {step.description}
      </p>
    </div>
  );
}
