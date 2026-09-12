import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { BENTO_CONTENT } from '@/modules/fohrm/bento/data/bentoData';
import { IntegrationsHubGraphic } from '@/modules/fohrm/bento/components/IntegrationsHubGraphic';
import { useBentoHub } from '@/modules/fohrm/bento/hooks/useBentoHub';

interface BentoIntegrationsCardProps {
  isInView?: boolean;
}

export const BentoIntegrationsCard: React.FC<BentoIntegrationsCardProps> = ({
  isInView = true,
}) => {
  const {
    activeNodeId,
    handleNodeMouseEnter,
    handleNodeMouseLeave,
    handleNodeClick,
  } = useBentoHub(isInView);

  return (
    <div className="group relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-white dark:bg-[#070a12] border border-slate-200/80 dark:border-white/10 p-4 sm:p-7 lg:p-8 shadow-xl shadow-slate-900/5 dark:shadow-2xl dark:shadow-blue-950/25 transition-all duration-300">
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-500/10 dark:bg-blue-600/15 blur-[80px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative">
        <IntegrationsHubGraphic
          activeNodeId={activeNodeId}
          onNodeMouseEnter={handleNodeMouseEnter}
          onNodeMouseLeave={handleNodeMouseLeave}
          onNodeClick={handleNodeClick}
        />
      </div>

      <div
        className={`mt-6 sm:mt-8 flex flex-col items-start text-left transition-all duration-700 ${
          isInView ? 'animate-hero-up' : 'opacity-0'
        }`}
        style={isInView ? { animationDelay: '0.45s' } : undefined}
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
          {BENTO_CONTENT.headline}
        </h3>

        <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          {BENTO_CONTENT.description}
        </p>

        <div
          className={`mt-4 w-full rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/[0.08] p-3 sm:p-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5 transition-all duration-700 ${
            isInView ? 'animate-hero-up' : 'opacity-0'
          }`}
          style={isInView ? { animationDelay: '0.55s' } : undefined}
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 text-xs font-bold mt-0.5">
            ✓
          </span>
          <p className="leading-relaxed">
            <span className="font-semibold text-slate-900 dark:text-white">Chấm dứt nỗi đau lớn nhất của HR & Kế toán:</span>{' '}
            Không còn phải xuất/nhập file Excel thủ công rời rạc giữa các phần mềm. Bảng công, phiếu lương, lệnh chi ngân hàng và bút toán sổ sách đều được tự động hóa đồng bộ trên một nền tảng duy nhất.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
          {BENTO_CONTENT.features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 transition-all duration-500 ${
                isInView ? 'animate-hero-up' : 'opacity-0'
              }`}
              style={
                isInView ? { animationDelay: `${0.65 + idx * 0.08}s` } : undefined
              }
            >
              <CheckCircle2 className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0" aria-hidden="true" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
