import { memo, type CSSProperties } from 'react';
import { Check } from 'lucide-react';
import { PricingPlan } from '@/modules/fohrm/pricing/types/pricingTypes';
import PricingToggle from '@/modules/fohrm/pricing/components/PricingToggle';

interface PricingCardProps {
  plan: PricingPlan;
  isYearly: boolean;
  onToggleYearly: () => void;
  onSelectPlan: (modalType: 'demo' | 'trial' | 'consulting') => void;
  className?: string;
  style?: CSSProperties;
}

function PricingCard({
  plan,
  isYearly,
  onToggleYearly,
  onSelectPlan,
  className = '',
  style,
}: PricingCardProps) {
  const currentDetails = isYearly ? plan.annual : plan.monthly;
  const isContact = currentDetails.price === 'Liên hệ';

  return (
    <div
      style={style}
      className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 ${
        plan.highlighted
          ? 'border-2 border-blue-600/80 bg-white shadow-2xl shadow-blue-600/10 dark:border-blue-500/50 dark:bg-[radial-gradient(ellipse_at_bottom,rgba(37,99,235,0.22)_0%,rgba(7,18,37,0.95)_70%)] dark:shadow-2xl dark:shadow-blue-950/40 lg:scale-[1.03] z-10'
          : 'border border-slate-100/90 bg-white/90 shadow-sm hover:shadow-md hover:border-slate-300 dark:border-white/10 dark:bg-slate-900/60 dark:shadow-xl dark:shadow-black/20 dark:hover:border-white/20'
      } ${className}`}
    >
      {plan.highlighted && plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-4 py-1 text-xs font-extrabold text-white shadow-md shadow-blue-500/40 tracking-wide whitespace-nowrap">
            {plan.badge}
          </span>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {plan.name}
            </h3>
            {!plan.highlighted && plan.hasToggle && plan.badge && (
              <span className="rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60 px-2.5 py-0.5 text-[11px] font-bold">
                {plan.badge}
              </span>
            )}
          </div>

          {plan.hasToggle ? (
            <PricingToggle isYearly={isYearly} onToggle={onToggleYearly} label="Hằng năm" />
          ) : (
            plan.badge && (
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-300">
                {plan.badge}
              </span>
            )
          )}
        </div>

        <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-justify min-h-[38px]">
          {plan.description}
        </p>

        <div className="mt-6 space-y-1.5 min-h-[92px] flex flex-col justify-start">
          <div className="flex items-baseline gap-1.5">
            <span
              className={`font-black tracking-tight text-slate-900 dark:text-white ${
                isContact ? 'text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl'
              }`}
            >
              {currentDetails.price}
            </span>
            {currentDetails.period && (
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                {currentDetails.period}
              </span>
            )}
          </div>

          {currentDetails.billingNote && (
            <p className="text-xs font-medium text-slate-600 dark:text-slate-300 leading-snug">
              {currentDetails.billingNote}
            </p>
          )}
        </div>

        {plan.subfeaturesHeading && (
          <div className="mt-6 pt-5 border-t border-slate-200/80 dark:border-white/10">
            <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {plan.subfeaturesHeading}
            </p>
          </div>
        )}

        <ul className="mt-2 space-y-3">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
              <Check
                className={`h-4 w-4 shrink-0 mt-0.5 ${
                  plan.highlighted
                    ? 'text-blue-600 dark:text-white'
                    : 'text-slate-700 dark:text-slate-200'
                }`}
                aria-hidden="true"
              />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-2">
        <button
          type="button"
          onClick={() => onSelectPlan(plan.modalType)}
          className={`w-full rounded-full py-3 px-5 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
            plan.highlighted
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100'
              : 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 border border-slate-200/80 dark:border-white/10'
          }`}
        >
          {plan.buttonText}
        </button>
      </div>
    </div>
  );
}

export default memo(PricingCard);
