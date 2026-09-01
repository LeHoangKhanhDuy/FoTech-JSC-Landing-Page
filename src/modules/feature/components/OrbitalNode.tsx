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

  return (
    <div
      className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer"
      style={{ left: `${node.x}%`, top: `${node.y}%` }}
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
        className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl border transition-all duration-300 backdrop-blur-md shadow-lg ${
          isActive || showTooltip
            ? "border-blue-400 bg-blue-950/80 text-blue-400 shadow-[0_0_25px_rgba(59,130,246,0.5)] scale-110"
            : "border-slate-800/90 bg-slate-900/90 text-slate-300 hover:border-slate-600 hover:text-white hover:scale-105"
        }`}
      >
        <Icon
          className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        />

        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-slate-950" />
        </span>
      </div>

      <span className="mt-2 text-[11px] sm:text-xs font-semibold tracking-wide text-slate-400 group-hover:text-white transition-colors duration-200 text-center whitespace-nowrap">
        {node.label}
      </span>

      {showTooltip && (
        <div className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-48 p-2.5 rounded-xl border border-slate-700 bg-slate-900/95 text-slate-100 text-xs shadow-2xl backdrop-blur-xl z-50 pointer-events-none animate-fade-in">
          <div className="font-bold text-blue-400 mb-0.5">
            {node.sublabel || node.label}
          </div>
          <p className="text-[11px] text-slate-300 leading-tight">
            {node.description}
          </p>
        </div>
      )}
    </div>
  );
}
