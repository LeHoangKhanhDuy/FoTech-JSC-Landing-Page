import { Boxes } from "lucide-react";

interface CentralHubProps {
  hubName: string;
}

export default function CentralHub({ hubName }: CentralHubProps) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center animate-float-card">
      <div className="absolute -inset-4 rounded-3xl bg-blue-600/30 blur-xl animate-pulse-glow" />
      <div className="absolute -inset-8 rounded-full border border-blue-500/30 animate-ping opacity-25 pointer-events-none" />

      <div className="relative flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border border-blue-500/50 bg-slate-900/95 shadow-[0_0_50px_rgba(37,99,235,0.45)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-blue-400">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/25 border border-blue-400/40 text-blue-400 shadow-inner mb-1">
          <Boxes className="h-6 w-6 text-blue-400 animate-pulse" aria-hidden="true" />
        </div>
        <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-blue-300 font-mono">
          {hubName}
        </span>
      </div>
    </div>
  );
}
