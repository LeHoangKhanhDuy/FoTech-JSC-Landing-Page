import { useState } from 'react';
import { ArrowRight, Sparkles, PhoneCall, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Button from '@/components/common/Button';
import LeadModal from '@/components/common/LeadModal';

export default function CtaSection() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'demo' | 'trial' | 'consulting';
  }>({ isOpen: false, type: 'trial' });

  return (
    <section className="relative py-20 overflow-hidden bg-slate-900 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.25),transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Centered Box */}
        <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-b from-blue-900/40 to-slate-900/90 p-8 text-center shadow-2xl backdrop-blur-xl sm:p-12 md:p-14">
          
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-500/40">
            <Sparkles className="h-6 w-6" aria-hidden="true" />
          </div>

          <h2 className="mt-6 text-balance text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Bắt đầu Số hóa Quản trị Nhân sự cùng FoHRM Ngay Hôm Nay
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 sm:text-lg">
            Gia nhập 500+ doanh nghiệp tại Việt Nam tối ưu hóa quy trình chấm công, tính lương và nâng tầm trải nghiệm nhân sự với AI thông minh.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setModalState({ isOpen: true, type: 'trial' })}
              icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}
              className="w-full sm:w-auto shadow-xl shadow-blue-600/30"
            >
              Bắt đầu miễn phí 14 ngày
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setModalState({ isOpen: true, type: 'consulting' })}
              icon={<PhoneCall className="h-4 w-4" aria-hidden="true" />}
              className="w-full sm:w-auto text-white border-slate-700 bg-slate-800/80 hover:bg-slate-700 hover:border-slate-600"
            >
              Đặt lịch Tư vấn 1:1
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              Cấu hình hoàn tất trong 5 phút
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              Không cần thẻ tín dụng
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-blue-400" aria-hidden="true" />
              Hỗ trợ kỹ thuật 24/7
            </span>
          </div>

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
