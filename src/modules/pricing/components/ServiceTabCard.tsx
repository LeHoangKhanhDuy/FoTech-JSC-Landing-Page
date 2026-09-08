import { memo } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { ServiceTabItemData } from '@/modules/pricing/types/pricing-types';
import StarBorder from '@/components/ui/StarBorder';
import ServiceMockPreview from '@/modules/pricing/components/ServiceMockPreview';

interface ServiceTabCardProps {
  data: ServiceTabItemData;
  slideDirection?: 'right' | 'left';
  onOpenModal: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

function ServiceTabCard({
  data,
  slideDirection = 'right',
  onOpenModal,
  onMouseEnter,
  onMouseLeave,
}: ServiceTabCardProps) {
  const slideAnimationClass =
    slideDirection === 'left' ? 'animate-slide-in-left' : 'animate-slide-in-right';

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="rounded-3xl bg-white/95 p-6 sm:p-10 backdrop-blur-md shadow-xl shadow-slate-200/50 dark:border-slate-800/80 dark:bg-slate-900/40 dark:shadow-2xl dark:shadow-blue-950/20 max-w-6xl mx-auto overflow-hidden relative"
    >
      <div
        key={data.id}
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center will-change-transform ${slideAnimationClass}`}
      >
        <div className="lg:col-span-6 relative flex justify-center items-center">
          <div className="absolute -inset-4 rounded-3xl bg-blue-600/10 dark:bg-blue-600/15 blur-2xl pointer-events-none" />

          <div className="relative w-full max-w-md rounded-2xl bg-slate-50/90 dark:border-slate-700/60 dark:bg-[#071225] p-5 shadow-md dark:shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400">
                {data.badge}
              </span>
            </div>

            <ServiceMockPreview previewType={data.previewType} />

            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Sẵn sàng triển khai ngay
                </span>
              </div>
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400">
                FoTech Ecosystem
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-snug">
              {data.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {data.subtitle}
            </p>
          </div>

          <ul className="space-y-3 pt-1">
            {data.bullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200"
              >
                <Sparkles
                  className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2.5">
              Ngôn ngữ & Frameworks:
            </span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {data.brands.map((brand, idx) => (
                <div
                  key={idx}
                  title={brand.name}
                  className="group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-2 shadow-xs hover:border-blue-500/60 hover:shadow-md hover:scale-110 transition-all duration-200 cursor-pointer"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900 px-2 py-0.5 text-[10px] font-semibold text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 dark:bg-slate-100 dark:text-slate-900 z-20">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <StarBorder
              as="button"
              type="button"
              onClick={onOpenModal}
              color="#93c5fd"
              speed="4s"
              backgroundColor="#2563eb"
              textColor="#ffffff"
              borderColor="#3b82f6"
              className="w-full sm:w-auto text-sm sm:text-base cursor-pointer transition-transform hover:scale-[1.02]"
            >
              <div className="inline-flex items-center gap-2.5 text-sm font-bold">
                <span>{data.buttonText}</span>
                <ArrowRight className="h-4 w-4 text-white" aria-hidden="true" />
              </div>
            </StarBorder>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ServiceTabCard);
