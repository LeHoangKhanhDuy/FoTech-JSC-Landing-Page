import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { BENTO_CONTENT } from '@/modules/fohrm/bento/data/bentoData';
import { IntegrationsHubGraphic } from '@/modules/fohrm/bento/components/IntegrationsHubGraphic';

export const BentoIntegrationsCard: React.FC = () => {
  return (
    <div className="group relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-[#0c1018] dark:bg-[#070a12] border border-white/10 p-4 sm:p-7 lg:p-8 shadow-2xl shadow-blue-950/25 transition-all duration-300 hover:border-blue-500/30">
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-600/15 blur-[80px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative">
        <IntegrationsHubGraphic />
      </div>

      <div className="mt-6 sm:mt-8 flex flex-col items-start text-left">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-snug">
          {BENTO_CONTENT.headline}
        </h3>

        <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-slate-300 dark:text-slate-300 leading-relaxed max-w-3xl">
          {BENTO_CONTENT.description}
        </p>

        <div className="mt-4 w-full rounded-xl bg-slate-900/80 border border-white/[0.08] p-3 sm:p-4 text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mt-0.5">
            ✓
          </span>
          <p className="leading-relaxed">
            <span className="font-semibold text-white">Chấm dứt nỗi đau lớn nhất của HR & Kế toán:</span>{' '}
            Không còn phải xuất/nhập file Excel thủ công rời rạc giữa các phần mềm. Bảng công, phiếu lương, lệnh chi ngân hàng và bút toán sổ sách đều được tự động hóa đồng bộ trên một nền tảng duy nhất.
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full">
          {BENTO_CONTENT.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" aria-hidden="true" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
