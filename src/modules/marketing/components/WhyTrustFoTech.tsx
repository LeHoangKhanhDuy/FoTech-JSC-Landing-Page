import { howItWorksSteps } from "@/modules/marketing/data/howItWorksData";
import { HowItWorksHeader } from "@/modules/marketing/components/HowItWorksHeader";
import { HowItWorksCard } from "@/modules/marketing/components/HowItWorksCard";
import { HowItWorksCenterArch } from "@/modules/marketing/components/HowItWorksCenterArch";

export default function WhyTrustFoTech() {
  return (
    <section
      id="why-trust"
      className="relative py-20 md:py-28 bg-slate-50 dark:bg-[#020817] text-slate-900 dark:text-slate-100 border-t border-slate-200/80 dark:border-slate-800/80 overflow-hidden transition-colors duration-300"
    >
      <div
        className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_20%,rgba(37,99,235,0.06),transparent_60%)] dark:bg-[radial-gradient(ellipse_70%_50%_at_50%_20%,rgba(37,99,235,0.08),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <HowItWorksHeader />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-4 flex flex-col gap-6">
            {[0, 2].map((idx) => (
              <HowItWorksCard
                key={howItWorksSteps[idx].number}
                step={howItWorksSteps[idx]}
              />
            ))}
          </div>

          <HowItWorksCenterArch />

          <div className="lg:col-span-4 flex flex-col gap-6">
            {[1, 3].map((idx) => (
              <HowItWorksCard
                key={howItWorksSteps[idx].number}
                step={howItWorksSteps[idx]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
