import { brandLogos } from '@/modules/hero/data/trustedCompanies';

export default function TrustedCompanies() {
  const logos = [...brandLogos, ...brandLogos];

  return (
    <div className="w-full">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
          Công nghệ lập trình & Framework hiện đại được ứng dụng
        </p>

        <div className="overflow-hidden py-1">
          <div className="flex w-max items-center gap-12 sm:gap-16 logo-marquee">
            {logos.map((brand, index) => (
              <span
                key={`${brand.name}-${index}`}
                className={`shrink-0 select-none text-slate-400/90 transition-colors duration-300 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-100 ${brand.style}`}
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
