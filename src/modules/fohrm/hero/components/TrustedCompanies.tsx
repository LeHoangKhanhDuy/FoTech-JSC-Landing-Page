import { memo } from "react";
import { HeroPartnerLogo } from "@/modules/fohrm/hero/types";
import { HERO_PARTNER_LOGOS } from "@/modules/fohrm/hero/data/heroData";

export interface TrustedCompaniesProps {
  heading?: string;
  partners?: HeroPartnerLogo[];
  className?: string;
}

export const TrustedCompanies = memo(function TrustedCompanies({
  heading = "Hơn 20+ doanh nghiệp đã tin dùng FoHRM",
  partners = HERO_PARTNER_LOGOS,
  className = "",
}: TrustedCompaniesProps) {
  const displayList = [...partners, ...partners];

  return (
    <div className={`w-full pt-4 ${className}`}>
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-6">
          {heading}
        </p>

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max items-center gap-8 sm:gap-12 lg:gap-16 logo-marquee hover:[animation-play-state:paused] py-2">
            {displayList.map((partner, idx) => (
              <div
                key={`${partner.id}-${idx}`}
                className="flex items-center gap-2 text-slate-400 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-200 transition-colors duration-300 select-none cursor-default shrink-0"
              >
                <span
                  className={`text-lg sm:text-xl font-bold tracking-tight ${
                    partner.highlight
                      ? "font-extrabold text-slate-600 dark:text-slate-300"
                      : "font-semibold opacity-85"
                  }`}
                >
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default TrustedCompanies;
