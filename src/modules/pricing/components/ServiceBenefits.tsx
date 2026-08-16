import { ServiceBenefit } from "@/modules/pricing/types/pricing-types";

interface ServiceBenefitsProps {
  benefits: ServiceBenefit[];
}

export default function ServiceBenefits({ benefits }: ServiceBenefitsProps) {
  if (!benefits || benefits.length === 0) return null;

  return (
    <div className="mt-10 pt-6 border-t border-slate-800/80">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.id} className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-500/25 bg-blue-600/10 text-blue-400">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </div>

              <div>
                <h5 className="text-xs font-bold text-white">{item.title}</h5>
                <p className="mt-0.5 text-[11px] leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
