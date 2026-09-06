import { HowItWorksStepItem } from "@/modules/marketing/types";

interface HowItWorksCardProps {
  step: HowItWorksStepItem;
  isActive: boolean;
  onSelect: () => void;
}

export function HowItWorksCard({ step, isActive, onSelect }: HowItWorksCardProps) {
  return (
    <div
      onClick={onSelect}
      onMouseEnter={onSelect}
      className={`group relative rounded-[28px] p-7 sm:p-8 transition-all duration-300 cursor-pointer ${
        isActive
          ? "bg-white text-slate-900 shadow-2xl shadow-blue-950/30 scale-[1.02] ring-1 ring-slate-200"
          : "bg-slate-900/50 border border-slate-800/80 text-white hover:border-blue-500/40 hover:bg-slate-900/80 backdrop-blur-md"
      }`}
    >
      <div className="flex items-start justify-between mb-6">
        <span
          className={`font-serif italic text-4xl sm:text-5xl font-light tracking-tight select-none transition-colors ${
            isActive ? "text-slate-400" : "text-slate-600 group-hover:text-slate-400"
          }`}
        >
          {step.number}
        </span>
        <span
          className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
            isActive
              ? "bg-slate-100 text-slate-700"
              : "bg-slate-800 text-slate-400 group-hover:text-slate-300"
          }`}
        >
          {step.tag}
        </span>
      </div>

      <h3
        className={`text-xl font-bold mb-3 tracking-tight transition-colors ${
          isActive ? "text-slate-900" : "text-white"
        }`}
      >
        {step.title}
      </h3>

      <p
        className={`text-xs sm:text-sm leading-relaxed transition-colors ${
          isActive ? "text-slate-600" : "text-slate-400"
        }`}
      >
        {step.description}
      </p>
    </div>
  );
}
