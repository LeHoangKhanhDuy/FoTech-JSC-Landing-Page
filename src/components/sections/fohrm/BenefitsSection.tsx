import { ShieldCheck, Lock, SunMoon, Scale, CheckCircle2 } from 'lucide-react';

const trustPillars = [
  {
    icon: Lock,
    tone: 'blue',
    title: 'Phân quyền Đa lớp (Multi-level RBAC)',
    description: 'Phân quyền chi tiết theo vai trò (Super Admin, HR Manager, Trưởng phòng, Nhân viên). Đảm bảo mỗi nhân sự chỉ truy cập đúng phạm vi dữ liệu được phép.',
    highlights: ['Phân quyền theo phòng ban & chi nhánh', 'Ma trận quyền truy cập chi tiết', 'Bảo mật bảng lương tuyệt đối'],
  },
  {
    icon: ShieldCheck,
    tone: 'emerald',
    title: 'Bảo mật Dữ liệu Doanh nghiệp',
    description: 'Mã hóa đầu cuối chuẩn AES-256. Đạt tiêu chuẩn ISO 27001 & GDPR. Tự động sao lưu dữ liệu liên tục 24/7 với nhật ký hoạt động (Audit Logs) minh bạch.',
    highlights: ['Mã hóa dữ liệu AES-256 bit', 'Sao lưu đám mây liên tục', 'Nhật ký truy cập chi tiết'],
  },
  {
    icon: SunMoon,
    tone: 'indigo',
    title: 'Giao diện Tối ưu (Dark/Light Mode)',
    description: 'Thiết kế UX/UI hiện đại theo chuẩn Shadcn UI. Tốc độ tải trang dưới 100ms, tự động tương thích thiết bị di động và hỗ trợ chuyển đổi chế độ Tối/Sáng thông minh.',
    highlights: ['Chế độ Tối (Dark mode) bảo vệ mắt', 'Đáp ứng 100% trên Smartphone & Tablet', 'Trải nghiệm mượt mà, không giật lag'],
  },
  {
    icon: Scale,
    tone: 'amber',
    title: 'Tuân thủ 100% Luật Lao động Việt Nam',
    description: 'Tự động cập nhật các Nghị định mới nhất về lương cơ sở, tỷ lệ đóng BHXH, BHYT, BHTN và biểu thuế TNCN lũy tiến. Loại bỏ hoàn toàn rủi ro pháp lý cho doanh nghiệp.',
    highlights: ['Cập nhật biểu thuế TNCN tự động', 'Tỷ lệ trích đóng BHXH chuẩn xác', 'Mẫu hợp đồng LĐ theo quy định'],
  },
];

export default function BenefitsSection() {
  return (
    <section id="why-fohrm" className="relative py-20 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-50 px-3.5 py-1 text-xs font-bold text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
            <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
            An Toàn & Tin Cậy
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Tại Sao Chọn FoHRM Cho Doanh Nghiệp Của Bạn?
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            Nền tảng được xây dựng trên hạ tầng an toàn bảo mật cấp doanh nghiệp, đáp ứng các tiêu chuẩn khắt khe nhất của thị trường Việt Nam.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {trustPillars.map((pillar) => {
            const Icon = pillar.icon;
            
            return (
              <div
                key={pillar.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 shadow-sm transition-transform group-hover:scale-110 dark:bg-blue-950/70 dark:text-blue-400">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {pillar.title}
                      </h3>
                      <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        Enterprise Grade Security
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
                  <ul className="space-y-2">
                    {pillar.highlights.map((point) => (
                      <li key={point} className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Metric Banner */}
        <div className="mt-12 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/80 via-white to-blue-50/80 p-6 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            <div>
              <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 md:text-3xl">99.99%</p>
              <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">Uptime Đảm Bảo (SLA)</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400 md:text-3xl">256-bit</p>
              <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">Mã Hóa Dữ Liệu AES</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 md:text-3xl">100%</p>
              <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">Tuân Thủ Luật LĐ Việt Nam</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 md:text-3xl">24/7</p>
              <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">Hỗ Trợ Kỹ Thuật Chuyên Nghiệp</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
