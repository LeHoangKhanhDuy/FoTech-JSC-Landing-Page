import { ChevronRight } from "lucide-react";
import { ServiceItemData } from "../types/types";

interface ServiceNavItemProps {
  service: ServiceItemData;
  isActive: boolean;
  onSelect: () => void;
}

export default function ServiceNavItem({
  service,
  isActive,
  onSelect,
}: ServiceNavItemProps) {
  const Icon = service.icon;

  const accentColorMap = {
    blue: "bg-blue-600/20 text-blue-400 border-blue-500/30",
    purple: "bg-purple-600/20 text-purple-400 border-purple-500/30",
    emerald: "bg-emerald-600/20 text-emerald-400 border-emerald-500/30",
    amber: "bg-amber-600/20 text-amber-400 border-amber-500/30",
  };

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={onSelect}
      className={`group relative flex w-full items-center gap-4 rounded-[18px] p-4 text-left transition-all duration-250 ${
        isActive
          ? "bg-gradient-to-br from-blue-600/20 via-blue-900/10 to-indigo-950/20 border border-blue-500/55 shadow-[0_10px_30px_rgba(37,99,235,0.14)]"
          : "border border-slate-800/40 bg-slate-900/40 hover:border-blue-500/20 hover:bg-slate-800/50 hover:translate-x-[2px]"
      }`}
    >
      {/* Icon Container 48x48 */}
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border transition-transform duration-200 group-hover:scale-105 ${
          accentColorMap[service.accent]
        }`}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>

      {/* Title & Description */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
            {service.name}
          </span>
        </div>
        <p className="mt-0.5 text-xs text-slate-400 truncate leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Right Chevron Arrow */}
      <ChevronRight
        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
          isActive
            ? "text-blue-400 translate-x-1"
            : "text-slate-500 group-hover:text-slate-300 group-hover:translate-x-1"
        }`}
        aria-hidden="true"
      />

      {/* Active Indicator Line (3px x 36px) */}
      {isActive && (
        <div
          className="absolute right-0 top-1/2 h-9 w-[3px] -translate-y-1/2 rounded-full bg-blue-500 shadow-[0_0_12px_#3b82f6]"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
