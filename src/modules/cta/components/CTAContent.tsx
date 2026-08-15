import { Sparkles } from 'lucide-react';
import CosmicOrbitBackground from './CosmicOrbitBackground';
import CTAActions from './CTAActions';
import CTATrustPoints from './CTATrustPoints';

interface CTAContentProps {
  onOpenTrial: () => void;
  onOpenConsulting: () => void;
}

export default function CTAContent({ onOpenTrial, onOpenConsulting }: CTAContentProps) {
  return (
    <div className="relative mx-auto max-w-[980px] overflow-hidden rounded-[30px] border border-[#2563EB]/60 bg-[#060E28] p-8 sm:p-12 md:p-14 text-center shadow-[0_0_80px_rgba(37,99,235,0.35)]">
      
      {/* Inside-Card Cosmic Orbit & Star Background */}
      <CosmicOrbitBackground />

      {/* Card Foreground Content */}
      <div className="relative z-10">
        {/* Top Sparkles Icon Badge */}
        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#1E50FF] to-[#00A3FF] text-white shadow-[0_0_25px_rgba(0,163,255,0.7)] border border-blue-400/50">
          <Sparkles className="h-6 w-6" aria-hidden="true" />
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.12]">
          Bắt đầu Số hóa Quản trị Nhân sự <br className="hidden sm:inline" />
          cùng{' '}
          <span className="bg-gradient-to-r from-[#00A3FF] via-[#2979FF] to-[#A855F7] bg-clip-text text-transparent">
            FoHRM
          </span>{' '}
          Ngay Hôm Nay
        </h2>

        {/* Subtitle Description */}
        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-300">
          Gia nhập 500+ doanh nghiệp tại Việt Nam tối ưu hóa quy trình chấm công, tính lương và nâng tầm trải nghiệm nhân sự với AI thông minh.
        </p>

        {/* Action Buttons */}
        <CTAActions onOpenTrial={onOpenTrial} onOpenConsulting={onOpenConsulting} />

        {/* Trust Micro Points */}
        <CTATrustPoints />
      </div>
    </div>
  );
}
