import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { ServiceCTA as ServiceCTAType } from "../types/types";

interface ServiceCTAProps {
  ctaData: ServiceCTAType;
  onAction: () => void;
}

export default function ServiceCTA({ ctaData, onAction }: ServiceCTAProps) {
  const Icon = ctaData.iconBadge;

  return (
    <div className="flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/60 p-6 backdrop-blur-xl">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-600/20 text-blue-400 shadow-md">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>

        <div>
          <h4 className="text-base font-bold leading-snug text-white">
            {ctaData.title}
          </h4>
          <p className="mt-1 text-xs text-slate-400 leading-relaxed">
            {ctaData.description}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <Button
          variant="primary"
          size="lg"
          onClick={onAction}
          icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
          className="w-full h-12 justify-center font-bold text-xs sm:text-sm rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 border-0"
        >
          {ctaData.buttonText}
        </Button>
      </div>
    </div>
  );
}
