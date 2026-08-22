import { ChevronRight } from "lucide-react";
import { ServiceItemData, ServiceAccent } from "@/modules/pricing/types/pricing-types";

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

  const accentStyles: Record<
    ServiceAccent,
    {
      iconBox: string;
      activeContainer: string;
      activeText: string;
      activeChevron: string;
      activeIndicator: string;
      hoverBorder: string;
    }
  > = {
    rose: {
      iconBox: "bg-rose-500/20 text-rose-400 border-rose-500/40",
      activeContainer:
        "bg-gradient-to-br from-rose-600/20 via-pink-900/10 to-rose-950/20 border border-rose-500/60 shadow-[0_10px_30px_rgba(244,63,94,0.18)]",
      activeText: "text-rose-400",
      activeChevron: "text-rose-400",
      activeIndicator: "bg-rose-500 shadow-[0_0_12px_#f43f5e]",
      hoverBorder: "hover:border-rose-500/30",
    },
    emerald: {
      iconBox: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
      activeContainer:
        "bg-gradient-to-br from-emerald-600/20 via-emerald-900/10 to-teal-950/20 border border-emerald-500/60 shadow-[0_10px_30px_rgba(16,185,129,0.18)]",
      activeText: "text-emerald-400",
      activeChevron: "text-emerald-400",
      activeIndicator: "bg-emerald-500 shadow-[0_0_12px_#10b981]",
      hoverBorder: "hover:border-emerald-500/30",
    },
    silver: {
      iconBox:
        "bg-slate-100/20 text-slate-100 border-slate-300/40 shadow-sm shadow-slate-200/20",
      activeContainer:
        "bg-gradient-to-br from-slate-200/20 via-slate-400/10 to-zinc-900/40 border border-slate-300/60 shadow-[0_10px_30px_rgba(226,232,240,0.18)]",
      activeText: "text-slate-100",
      activeChevron: "text-slate-100",
      activeIndicator: "bg-slate-200 shadow-[0_0_12px_#e2e8f0]",
      hoverBorder: "hover:border-slate-300/30",
    },
    blue: {
      iconBox: "bg-blue-600/20 text-blue-400 border-blue-500/40",
      activeContainer:
        "bg-gradient-to-br from-blue-600/20 via-blue-900/10 to-indigo-950/20 border border-blue-500/60 shadow-[0_10px_30px_rgba(37,99,235,0.18)]",
      activeText: "text-blue-400",
      activeChevron: "text-blue-400",
      activeIndicator: "bg-blue-500 shadow-[0_0_12px_#3b82f6]",
      hoverBorder: "hover:border-blue-500/30",
    },
    amber: {
      iconBox: "bg-amber-600/20 text-amber-400 border-amber-500/40",
      activeContainer:
        "bg-gradient-to-br from-amber-600/20 via-amber-900/10 to-orange-950/20 border border-amber-500/60 shadow-[0_10px_30px_rgba(245,158,11,0.18)]",
      activeText: "text-amber-400",
      activeChevron: "text-amber-400",
      activeIndicator: "bg-amber-500 shadow-[0_0_12px_#f59e0b]",
      hoverBorder: "hover:border-amber-500/30",
    },
    purple: {
      iconBox: "bg-purple-600/20 text-purple-400 border-purple-500/40",
      activeContainer:
        "bg-gradient-to-br from-purple-600/20 via-purple-900/10 to-indigo-950/20 border border-purple-500/60 shadow-[0_10px_30px_rgba(168,85,247,0.18)]",
      activeText: "text-purple-400",
      activeChevron: "text-purple-400",
      activeIndicator: "bg-purple-500 shadow-[0_0_12px_#a855f7]",
      hoverBorder: "hover:border-purple-500/30",
    },
  };

  const style = accentStyles[service.accent] || accentStyles.blue;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={onSelect}
      className={`group relative flex w-full items-center gap-4 rounded-[18px] p-4 text-left transition-all duration-250 ${
        isActive
          ? style.activeContainer
          : `border border-slate-800/40 bg-slate-900/40 bg-[#071225] ${style.hoverBorder} hover:bg-slate-800/50 hover:translate-x-[2px]`
      }`}
    >
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border transition-transform duration-200 group-hover:scale-105 ${style.iconBox}`}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span
            className={`text-base font-bold transition-colors ${
              isActive
                ? style.activeText
                : "text-white group-hover:" + style.activeText
            }`}
          >
            {service.name}
          </span>
        </div>
        <p className="mt-0.5 text-xs text-slate-400 truncate leading-relaxed">
          {service.description}
        </p>
      </div>

      <ChevronRight
        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
          isActive
            ? `${style.activeChevron} translate-x-1`
            : "text-slate-500 group-hover:text-slate-300 group-hover:translate-x-1"
        }`}
        aria-hidden="true"
      />

      {isActive && (
        <div
          className={`absolute right-0 top-1/2 h-9 w-[3px] -translate-y-1/2 rounded-full ${style.activeIndicator}`}
          aria-hidden="true"
        />
      )}
    </button>
  );
}
