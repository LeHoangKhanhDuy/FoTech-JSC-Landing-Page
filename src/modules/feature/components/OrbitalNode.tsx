import { useState } from "react";
import { IntegrationNode } from "@/modules/feature/types/feature-type";

interface OrbitalNodeProps {
  node: IntegrationNode;
  isActive: boolean;
  onHover: (id: string | null) => void;
}

export default function OrbitalNode({
  node,
  isActive,
  onHover,
}: OrbitalNodeProps) {
  const Icon = node.icon;
  const [showTooltip, setShowTooltip] = useState(false);
  const floatDelay = `${(node.angle / 360) * 3}s`;

  return (
    <div
      className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer animate-float-card"
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
        animationDelay: floatDelay,
      }}
      onMouseEnter={() => {
        setShowTooltip(true);
        onHover(node.id);
      }}
      onMouseLeave={() => {
        setShowTooltip(false);
        onHover(null);
      }}
    >
      <div
        className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl border transition-all duration-300 backdrop-blur-md shadow-md ${
          isActive || showTooltip
            ? "border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-110 dark:border-blue-400 dark:bg-blue-950/80 dark:text-blue-400 dark:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
            : "border-slate-200/90 bg-white text-slate-700 shadow-sm hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50/50 hover:scale-110 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900/40 dark:text-slate-300 dark:hover:border-blue-500/50 dark:hover:text-white dark:hover:bg-slate-900/70 dark:hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
        }`}
      >
        <Icon
          className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        />

        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white dark:border-slate-950" />
        </span>
      </div>

      <span className="mt-2 text-[11px] sm:text-xs font-semibold tracking-wide text-slate-600 group-hover:text-blue-600 dark:text-slate-400 dark:group-hover:text-white transition-colors duration-200 text-center whitespace-nowrap">
        {node.label}
      </span>

      {showTooltip && (
        <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-48 p-2.5 rounded-xl border border-slate-200 bg-white/95 text-slate-800 shadow-xl backdrop-blur-xl z-50 pointer-events-none animate-fade-in dark:border-blue-500/40 dark:bg-slate-900/95 dark:text-slate-100">
          <div className="font-bold text-blue-600 dark:text-blue-400 mb-0.5">
            {node.sublabel || node.label}
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-tight">
            {node.description}
          </p>
        </div>
      )}
    </div>
  );
}
