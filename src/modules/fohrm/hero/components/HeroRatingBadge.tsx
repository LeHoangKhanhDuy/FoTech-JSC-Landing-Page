import { memo } from "react";
import { Star, ArrowRight } from "lucide-react";
import { HeroRatingData } from "@/modules/fohrm/hero/types";

interface HeroRatingBadgeProps {
  rating: HeroRatingData;
}

export const HeroRatingBadge = memo(function HeroRatingBadge({ rating }: HeroRatingBadgeProps) {
  return (
    <div className="inline-flex flex-wrap items-center gap-2 sm:gap-3 rounded-full border border-blue-500/20 bg-blue-50 px-3.5 py-1.5 text-xs sm:text-sm text-slate-700 transition-all duration-200 dark:bg-slate-900/80">
      <div className="flex items-center gap-1.5 font-medium">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/10 text-amber-500 dark:bg-amber-400/15 dark:text-amber-400">
          <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
        </span>
        <span className="font-bold text-slate-900 dark:text-white">
          {rating.score}
        </span>
      </div>

      <span
        className="h-3.5 w-px bg-slate-200 dark:bg-slate-700"
        aria-hidden="true"
      />

      <a
        href={rating.linkHref}
        className="group inline-flex items-center gap-1 font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
      >
        <span>{rating.linkText}</span>
        <ArrowRight
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>
    </div>
  );
});

export default HeroRatingBadge;
