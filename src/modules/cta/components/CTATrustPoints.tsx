import { trustPointsData } from '@/modules/cta/data/ctaData';

export default function CTATrustPoints() {
  return (
    <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-slate-800/80">
      <div className="mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-8 md:gap-10 max-w-sm sm:max-w-none">
        {trustPointsData.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={item.id} className="flex items-center gap-3.5 sm:gap-8">
              <div className="flex w-full sm:w-auto items-center gap-3 rounded-xl sm:rounded-none bg-slate-900/80 sm:bg-transparent p-2.5 sm:p-0 border border-slate-800/60 sm:border-none">
                <div
                  className={`flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full shadow-md ${item.iconBg}`}
                >
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </div>

                <span className="text-left text-xs font-semibold leading-tight text-slate-300 sm:text-xs">
                  {item.label}
                </span>
              </div>

              {index < trustPointsData.length - 1 && (
                <div className="hidden h-7 w-px bg-slate-800/90 sm:block" aria-hidden="true" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
