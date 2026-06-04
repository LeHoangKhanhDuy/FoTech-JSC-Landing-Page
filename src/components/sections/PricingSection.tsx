import { CheckCircle2 } from 'lucide-react';
import Button from '@/components/common/Button';
import Reveal from '@/components/common/Reveal';
import Section from '@/components/common/Section';
import SectionHeading from '@/components/common/SectionHeading';
import { pricingPlans } from '@/data/landing';
import { submitLead } from '@/services/leadService';

export default function PricingSection() {
  return (
    <Section id="pricing" className="bg-slate-50 dark:bg-slate-900/50">
      <SectionHeading
        eyebrow="Bảng giá"
        title="Linh hoạt theo quy mô và tốc độ tăng trưởng"
        description="Chọn gói phù hợp hôm nay và mở rộng khi doanh nghiệp cần thêm module, AI hoặc tích hợp."
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <Reveal key={plan.name} delay={index * 0.08} className="h-full">
            <article
              className={`relative flex h-full flex-col rounded-lg border p-6 ${
                plan.highlighted
                  ? 'border-[#1972F5] bg-white shadow-2xl shadow-[#1972F5]/15 dark:bg-slate-950'
                  : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950'
              }`}
            >
              {plan.highlighted ? (
                <span className="absolute right-5 top-5 rounded-full bg-[#1972F5]/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-[#1972F5]">
                  Highlight
                </span>
              ) : null}
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{plan.audience}</p>
              <h3 className="mt-3 text-2xl font-black text-slate-950 dark:text-white">{plan.name}</h3>
              <p className="mt-4 text-3xl font-black text-[#1972F5]">{plan.price}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{plan.description}</p>
              <ul className="mt-7 grid gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00C951]" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8 w-full"
                variant={plan.highlighted ? 'primary' : 'secondary'}
                onClick={() => submitLead(plan.highlighted ? 'demo' : 'consulting')}
              >
                Chọn {plan.name}
              </Button>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
