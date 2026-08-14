import { useState } from 'react';
import { ArrowRight, Play, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Button from '@/components/common/Button';
import DashboardMockup from '@/components/sections/DashboardMockup';
import LeadModal from '@/components/common/LeadModal';

export default function Hero() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'demo' | 'trial' | 'login' | 'consulting';
  }>({ isOpen: false, type: 'trial' });

  const openModal = (type: 'demo' | 'trial') => {
    setModalState({ isOpen: true, type });
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Background Subtle Gradients & Grid Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.15),rgba(255,255,255,0))]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Content Header */}
        <div className="mx-auto max-w-3xl text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50/80 px-4 py-1.5 text-xs font-bold text-blue-600 shadow-sm backdrop-blur-md dark:border-blue-500/30 dark:bg-blue-950/50 dark:text-blue-400">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400 animate-spin-slow" aria-hidden="true" />
            <span>Nền tảng HR Tech Tích hợp AI Hàng đầu Việt Nam</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-balance mt-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl md:leading-[1.12]">
            Nền tảng Quản trị Nhân sự <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Tích hợp AI toàn diện
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-balance mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg md:text-xl">
            Tự động hóa chấm công, tính lương, và nâng tầm trải nghiệm nhân viên với trợ lý AI thông minh. Tuân thủ 100% Luật Lao động Việt Nam.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              onClick={() => openModal('trial')}
              icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}
              className="w-full sm:w-auto shadow-lg shadow-blue-500/25"
            >
              Bắt đầu miễn phí
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => openModal('demo')}
              icon={<Play className="h-4 w-4 fill-current" aria-hidden="true" />}
              className="w-full sm:w-auto"
            >
              Xem Demo
            </Button>
          </div>

          {/* Trust Highlights under Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
              14 ngày dùng thử đầy đủ
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
              Không cần thẻ tín dụng
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-blue-600" aria-hidden="true" />
              Triển khai trong 5 phút
            </span>
          </div>

        </div>

        {/* Visual Floating Dashboard Mockup */}
        <div className="mt-12 md:mt-16">
          <DashboardMockup />
        </div>

      </div>

      <LeadModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        type={modalState.type}
      />
    </section>
  );
}
