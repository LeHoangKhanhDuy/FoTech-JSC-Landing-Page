import { journeyStepsData } from '@/modules/marketing/data/whyTrustData';

export default function PartnershipJourney() {
  return (
    <div className="mt-14 rounded-3xl border border-slate-200/90 bg-white/90 p-7 sm:p-9 shadow-lg backdrop-blur-xl dark:border-slate-800/80 dark:bg-[#081122]/90">
      <h3 className="text-center text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
        Quy Trình Đồng Hành Cùng Doanh Nghiệp
      </h3>

      <div className="relative mt-10">
        <div className="absolute top-7 left-12 right-12 hidden h-0.5 border-t border-dashed border-blue-500/25 dark:border-blue-500/30 lg:block -z-0" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-4">
          {journeyStepsData.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative flex flex-col items-center text-center group">
                <div
                  className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${step.theme.iconBg} ${step.theme.glowColor}`}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <span className={`mt-3 text-xs font-extrabold ${step.theme.numberColor}`}>
                  {step.number}
                </span>

                <h4 className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h4>
                
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400 max-w-[200px]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
