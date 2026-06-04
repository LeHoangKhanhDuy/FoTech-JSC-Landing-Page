import { Check } from 'lucide-react';
import Section from '@/components/common/Section';
import SectionHeading from '@/components/common/SectionHeading';
import Reveal from '@/components/common/Reveal';
import { features } from '@/data/landing';

const toneStyles = {
  primary: 'bg-[#1972F5]/10 text-[#1972F5]',
  success: 'bg-[#00C951]/10 text-[#00A943]',
  warning: 'bg-[#FEBA17]/14 text-[#B97800]',
  danger: 'bg-[#FF2056]/10 text-[#E0003B]',
};

export default function FeaturesSection() {
  return (
    <Section id="features">
      <SectionHeading
        eyebrow="Tính năng"
        title="Bộ công cụ HRM AI-First cho doanh nghiệp hiện đại"
        description="FoTalent AI gom các nghiệp vụ cốt lõi của HR vào một trải nghiệm thống nhất, dễ dùng và sẵn sàng mở rộng."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <Reveal key={feature.title} delay={index * 0.05} className="h-full">
              <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${toneStyles[feature.tone]}`}>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950 dark:text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{feature.description}</p>
                <ul className="mt-6 grid gap-3">
                  {feature.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-200">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#00C951]/10 text-[#00A943]">
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
