import { memo } from "react";
import { ArrowRight, CheckCircle2, Mail, AlertCircle } from "lucide-react";
import { HeroTrustItem } from "@/modules/fohrm/hero/types";

interface HeroEmailCtaProps {
  email: string;
  emailError: string;
  trustItems: HeroTrustItem[];
  onEmailChange: (val: string) => void;
  onSubmit: (e?: React.FormEvent) => void;
}

export const HeroEmailCta = memo(function HeroEmailCta({
  email,
  emailError,
  trustItems,
  onEmailChange,
  onSubmit,
}: HeroEmailCtaProps) {
  return (
    <div className="w-full max-w-xl">
      <form onSubmit={onSubmit} className="w-full">
        <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-1.5 p-1.5 sm:p-2 rounded-2xl sm:rounded-full bg-slate-100/90 dark:bg-slate-900/90 shadow-lg shadow-slate-900/10 dark:shadow-black/40 backdrop-blur-md transition-all duration-200">
          <div className="relative flex-1 flex items-center min-w-0 pl-3 sm:pl-4">
            <Mail className="h-5 w-5 text-slate-400 dark:text-slate-500 shrink-0 mr-2.5" aria-hidden="true" />
            <input
              type="email"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              placeholder="Nhập email làm việc của bạn..."
              aria-label="Email doanh nghiệp"
              className="w-full bg-transparent py-2.5 sm:py-2 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500 outline-none focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-xl sm:rounded-full bg-blue-600 px-6 py-3 sm:py-2.5 text-sm sm:text-base font-semibold text-white shadow-md shadow-blue-500/25 transition-all duration-200 hover:bg-blue-500 active:scale-[0.98] shrink-0"
          >
            <span>Dùng thử miễn phí</span>
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </button>
        </div>

        {emailError && (
          <div className="mt-2 flex items-center gap-1.5 text-xs text-rose-500 dark:text-rose-400 pl-3">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            <span>{emailError}</span>
          </div>
        )}
      </form>

      <div className="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 sm:gap-x-5 gap-y-2 text-xs font-medium text-slate-500 dark:text-slate-400">
        {trustItems.map((item) => (
          <div key={item.id} className="inline-flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 dark:text-emerald-400 shrink-0" aria-hidden="true" />
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
});

export default HeroEmailCta;
