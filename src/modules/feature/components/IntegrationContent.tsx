import { Share2, ArrowRight } from "lucide-react";
import StarBorder from "@/components/ui/StarBorder";
import { IntegrationFeatureData } from "@/modules/feature/types/feature-type";

interface IntegrationContentProps {
  data: IntegrationFeatureData;
  onConnect?: () => void;
}

export default function IntegrationContent({
  data,
  onConnect,
}: IntegrationContentProps) {
  return (
    <div className="flex flex-col items-start text-left space-y-6 max-w-xl animate-fade-in-up">
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/60 px-3.5 py-1.5 text-xs font-bold text-blue-400 backdrop-blur-md hover:border-blue-400 transition-colors">
        <Share2 className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
        <span className="uppercase tracking-wider">{data.badge}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
        {data.title}{" "}
        <span className="text-blue-500">{data.titleHighlight}</span>
      </h2>

      <p className="text-sm sm:text-base leading-relaxed text-slate-300">
        {data.subtitle}
      </p>

      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
        <StarBorder
          as="button"
          onClick={onConnect}
          color="white"
          speed="6s"
          backgroundColor="#2563eb"
          textColor="#ffffff"
          borderColor="#3b82f6"
          className="w-full sm:w-auto text-sm font-bold cursor-pointer transition-transform hover:scale-[1.03]"
        >
          <span className="flex items-center justify-center gap-2">
            <span>{data.ctaText}</span>
            <ArrowRight className="h-4 w-4 text-white" aria-hidden="true" />
          </span>
        </StarBorder>

        <div className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-slate-800/80 bg-slate-900/40 px-4 py-3 text-xs font-semibold text-slate-200 backdrop-blur-md hover:border-blue-500/40 hover:bg-slate-900/70 transition-all duration-300">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span>{data.statusBadge}</span>
        </div>
      </div>
    </div>
  );
}
