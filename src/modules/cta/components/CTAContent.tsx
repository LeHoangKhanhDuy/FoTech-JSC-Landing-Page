import { Sparkles } from 'lucide-react';
import CosmicOrbitBackground from '@/modules/cta/components/CosmicOrbitBackground';
import CTAActions from '@/modules/cta/components/CTAActions';
import CTATrustPoints from '@/modules/cta/components/CTATrustPoints';

interface CTAContentProps {
  onOpenTrial: () => void;
  onOpenConsulting: () => void;
}

export default function CTAContent({ onOpenTrial, onOpenConsulting }: CTAContentProps) {
  return (
    <div className="relative mx-auto max-w-[980px] overflow-hidden rounded-[24px] sm:rounded-[30px] border border-slate-200 bg-white p-6 sm:p-12 md:p-14 text-center shadow-xl dark:border-[#2563EB]/60 dark:bg-[#060E28] dark:shadow-[0_0_80px_rgba(37,99,235,0.35)] backdrop-blur-xl">
      <CosmicOrbitBackground />

      <div className="relative z-10">
        <div className="mx-auto mb-5 sm:mb-6 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#1E50FF] to-[#00A3FF] text-white shadow-lg shadow-blue-500/30 border border-blue-400/50">
          <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
        </div>

        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl leading-[1.15] sm:leading-[1.12]">
          Bắt đầu Hành trình Chuyển đổi Số <br className="hidden sm:inline" />
          cùng{' '}
          <span className="text-blue-600 dark:text-blue-500">
            FoTech
          </span>{' '}
          Ngay Hôm Nay
        </h2>

        <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-xs sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
          Gia nhập 500+ doanh nghiệp tại Việt Nam tối ưu hóa quy trình vận hành toàn diện với hệ sinh thái giải pháp phần mềm tích hợp AI thông minh.
        </p>

        <CTAActions onOpenTrial={onOpenTrial} onOpenConsulting={onOpenConsulting} />

        <CTATrustPoints />
      </div>
    </div>
  );
}
