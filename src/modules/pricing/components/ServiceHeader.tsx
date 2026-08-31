import { ServiceItemData, ServiceAccent } from "@/modules/pricing/types/pricing-types";

interface ServiceHeaderProps {
  service: ServiceItemData;
}

export default function ServiceHeader({ service }: ServiceHeaderProps) {
  const badgeStyles: Record<ServiceAccent, string> = {
    rose: "border-rose-500/30 bg-rose-950/60 text-rose-400",
    emerald: "border-emerald-500/30 bg-emerald-950/60 text-emerald-400",
    silver: "border-slate-300/40 bg-slate-800/60 text-slate-100",
    blue: "border-blue-500/30 bg-blue-950/60 text-blue-400",
    amber: "border-amber-500/30 bg-amber-950/60 text-amber-400",
    purple: "border-purple-500/30 bg-purple-950/60 text-purple-400",
  };

  const highlightStyles: Record<ServiceAccent, string> = {
    rose: "bg-gradient-to-r from-rose-400 via-pink-400 to-rose-300 bg-clip-text text-transparent",
    emerald: "bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent",
    silver: "bg-gradient-to-r from-slate-100 via-zinc-200 to-slate-300 bg-clip-text text-transparent",
    blue: "text-blue-500",
    amber: "bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent",
    purple: "bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-300 bg-clip-text text-transparent",
  };

  const badgeClass = badgeStyles[service.accent] || badgeStyles.blue;
  const highlightClass = highlightStyles[service.accent] || highlightStyles.blue;

  return (
    <div>
      <div
        className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1 text-xs font-bold backdrop-blur-md ${badgeClass}`}
      >
        <span>{service.badge}</span>
      </div>

      <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[44px] lg:leading-[1.12]">
        {service.title}{" "}
        <span className={highlightClass}>
          {service.titleHighlight}
        </span>
      </h3>

      <p className="mt-4 max-w-[720px] text-sm leading-relaxed text-slate-300 sm:text-base">
        {service.subtitle}
      </p>
    </div>
  );
}
