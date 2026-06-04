import Section from '@/components/common/Section';
import SectionHeading from '@/components/common/SectionHeading';
import Reveal from '@/components/common/Reveal';
import { solutionSteps } from '@/data/landing';

export default function SolutionSection() {
  return (
    <Section id="solution" className="bg-slate-50 dark:bg-slate-900/50">
      <SectionHeading
        eyebrow="Giải pháp"
        title="FoTalent AI giải quyết như thế nào?"
        description="Một luồng dữ liệu xuyên suốt từ chấm công đến phân tích giúp HR vận hành nhanh, rõ và ít lỗi hơn."
      />
      <div className="mt-14 grid gap-4 lg:grid-cols-5">
        {solutionSteps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.08} className="relative">
            <article className="h-full rounded-lg border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1972F5] text-sm font-black text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{step.description}</p>
            </article>
            {index < solutionSteps.length - 1 ? (
              <span className="absolute -right-4 top-1/2 hidden h-px w-8 bg-[#1972F5]/40 lg:block" aria-hidden="true" />
            ) : null}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
