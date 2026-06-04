import Section from '@/components/common/Section';
import Reveal from '@/components/common/Reveal';
import { trustedCompanies } from '@/data/landing';

export default function TrustedCompanies() {
  const logos = [...trustedCompanies, ...trustedCompanies];

  return (
    <Section className="py-10">
      <Reveal>
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white py-6 dark:border-slate-800 dark:bg-slate-900">
          <p className="mb-5 text-center text-sm font-semibold text-slate-500 dark:text-slate-400">
            Được tin tưởng bởi các đội ngũ đang tăng trưởng
          </p>
          <div className="flex w-max gap-4 logo-marquee">
            {logos.map((company, index) => (
              <div
                key={`${company}-${index}`}
                className="flex h-14 min-w-44 items-center justify-center rounded-lg border border-slate-100 bg-slate-50 px-6 text-sm font-black text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
