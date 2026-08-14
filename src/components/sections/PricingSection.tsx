import { useState } from 'react';
import { CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import Button from '@/components/common/Button';
import LeadModal from '@/components/common/LeadModal';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const plans = [
    {
      name: 'Starter',
      badge: 'Cho đội nhóm nhỏ',
      monthlyPrice: '15,000đ',
      annualPrice: '12,000đ',
      period: '/nhân viên/tháng',
      description: 'Phù hợp doanh nghiệp dưới 30 nhân sự bắt đầu số hóa chấm công & nghỉ phép.',
      features: [
        'Chấm công GPS, QR & Wifi',
        'Quản lý đơn xin nghỉ & Quỹ phép',
        'Cổng Nhân viên Self-Service Web & App',
        'Xuất bảng công Excel tự động',
        'Bảo mật dữ liệu tiêu chuẩn',
      ],
      highlighted: false,
    },
    {
      name: 'Growth',
      badge: 'Phổ biến nhất 🔥',
      monthlyPrice: '35,000đ',
      annualPrice: '28,000đ',
      period: '/nhân viên/tháng',
      description: 'Tối ưu cho doanh nghiệp tăng trưởng cần tự động hóa Payroll & Trợ lý AI.',
      features: [
        'Tất cả tính năng của gói Starter',
        'Tính lương Payroll tự động 100%',
        'Trợ lý AI FINA hỗ trợ HR 24/7',
        'Tích hợp Ngân hàng chi trả Bank API',
        'Khấu trừ BHXH & Thuế TNCN lũy tiến',
        'Dashboard Phân tích Vận hành Realtime',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      badge: 'Tập đoàn & Chuỗi',
      monthlyPrice: 'Liên hệ',
      annualPrice: 'Tùy chỉnh',
      period: '',
      description: 'Dành cho tập đoàn đa chi nhánh, nhiều nhà máy cần hạ tầng riêng & cam kết SLA.',
      features: [
        'Tất cả tính năng của gói Growth',
        'Phân quyền RBAC Multi-level chi tiết',
        'Tích hợp FaceID máy chấm công sẵn có',
        'Tùy biến quy trình & API riêng',
        'Cam kết Uptime SLA 99.99%',
        'Quản trị viên CSM riêng hỗ trợ 24/7',
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-20 bg-slate-50/70 dark:bg-slate-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
            <Zap className="h-3.5 w-3.5" aria-hidden="true" />
            Bảng Giá Minh Bạch
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Linh Hoạt Theo Quy Mô Doanh Nghiệp
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            Không chi phí ẩn. Chọn gói giải pháp phù hợp hôm nay và mở rộng theo tốc độ phát triển.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className={`text-sm font-bold ${!isAnnual ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500'}`}>
              Thanh toán Hàng tháng
            </span>
            <button
              type="button"
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-blue-600 transition-colors duration-200 ease-in-out focus:outline-none"
            >
              <span
                className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="flex items-center gap-1.5">
              <span className={`text-sm font-bold ${isAnnual ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500'}`}>
                Thanh toán Hàng năm
              </span>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-extrabold text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-400">
                Tiết kiệm 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? 'border-2 border-blue-600 bg-white shadow-2xl shadow-blue-500/15 dark:bg-slate-900 scale-[1.03] z-10'
                  : 'border border-slate-200 bg-white shadow-sm hover:shadow-lg dark:border-slate-800 dark:bg-slate-900'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-extrabold text-white shadow-md shadow-blue-500/40">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {plan.name}
                  </h3>
                  {!plan.highlighted && (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900 dark:text-white">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-xs font-semibold text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Button
                  variant={plan.highlighted ? 'primary' : 'outline'}
                  size="lg"
                  onClick={() => setModalOpen(true)}
                  className="w-full"
                  icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                >
                  {plan.name === 'Enterprise' ? 'Liên Hệ Báo Giá' : `Dùng Thử Gói ${plan.name}`}
                </Button>
              </div>
            </div>
          ))}
        </div>

      </div>

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type="trial"
      />
    </section>
  );
}
