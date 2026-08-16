import { ServiceHighlight } from "@/modules/pricing/types/pricing-types";

interface ServiceHighlightsProps {
  highlights: ServiceHighlight[];
}

export default function ServiceHighlights({
  highlights,
}: ServiceHighlightsProps) {
  if (!highlights || highlights.length === 0) return null;

  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {highlights.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="group rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 transition-all duration-200 hover:border-blue-500/30 hover:bg-slate-900/80"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/25 bg-blue-600/10 text-blue-400">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                {item.title}
              </h4>
            </div>

            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
