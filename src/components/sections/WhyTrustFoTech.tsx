import { ShieldCheck, Layers, Database, CheckCircle2, Award } from 'lucide-react';

const coreValues = [
  {
    icon: Layers,
    tone: 'blue',
    title: 'Tích Hợp Liền Mạch (Seamless Integration)',
    description: 'Đồng bộ dữ liệu thông suốt giữa tất cả ứng dụng trong hệ sinh thái FoTech (FoHRM, FoMed, FoAnalytics). Người dùng chỉ cần 1 tài khoản duy nhất (Single Sign-On - SSO) để truy cập toàn bộ hệ thống.',
    bullets: ['Đăng nhập 1 lần SSO cho mọi ứng dụng', 'Đồng bộ danh mục phòng ban & nhân sự', 'Tích hợp API Webhook linh hoạt'],
  },
  {
    icon: ShieldCheck,
    tone: 'emerald',
    title: 'Bảo Mật Cấp Doanh Nghiệp (Enterprise Security trên AWS)',
    description: 'Vận hành trên hạ tầng đám mây Amazon Web Services (AWS) đạt chứng chỉ an toàn ISO 27001 và GDPR. Mã hóa dữ liệu đầu cuối chuẩn AES-256 bit và tự động sao lưu 24/7.',
    bullets: ['Hạ tầng AWS Cloud đa vùng SLA 99.99%', 'Mã hóa dữ liệu 256-bit cao nhất', 'Nhật ký truy cập Audit Log minh bạch'],
  },
  {
    icon: Database,
    tone: 'indigo',
    title: 'Dữ Liệu Tập Trung (Centralized Data & Realtime Intelligence)',
    description: 'Xóa bỏ các "ốc đảo dữ liệu" (Data Silos) trong doanh nghiệp. Ban quản trị có một trung tâm thông tin duy nhất để theo dõi biến động chi phí, hiệu suất và doanh thu theo thời gian thực.',
    bullets: ['Dashboard báo cáo tổng quan realtime', 'Trích xuất báo cáo thông minh 1-click', 'Dự báo xu hướng vận hành bằng AI'],
  },
];

export default function WhyTrustFoTech() {
  return (
    <section id="why-trust" className="relative py-24 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
            <Award className="h-3.5 w-3.5" aria-hidden="true" />
            Năng Lực & Triết Lý Sản Phẩm
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Tại Sao Các Doanh Nghiệp Hàng Đầu Lựa Chọn FoTech?
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            Nền tảng công nghệ đáng tin cậy được thiết kế để đồng hành cùng tốc độ tăng trưởng của doanh nghiệp bạn.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {coreValues.map((val) => {
            const Icon = val.icon;

            return (
              <div
                key={val.title}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-300 hover:border-indigo-500/40 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 shadow-sm transition-transform group-hover:scale-110 dark:bg-indigo-950/70 dark:text-indigo-400">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>

                  <h3 className="mt-6 text-xl font-extrabold text-slate-900 dark:text-white">
                    {val.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {val.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5 dark:border-slate-800">
                  <ul className="space-y-2.5">
                    {val.bullets.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
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

        {/* Bottom Banner Stats */}
        <div className="mt-14 rounded-3xl border border-indigo-100 bg-gradient-to-r from-blue-50/70 via-indigo-50/70 to-blue-50/70 p-8 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            <div>
              <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 md:text-4xl">500+</p>
              <p className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-400">Doanh nghiệp Tin Dùng</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 md:text-4xl">99.99%</p>
              <p className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-400">Cam kết Uptime SLA</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 md:text-4xl">100,000+</p>
              <p className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-400">Người Dùng Hàng Ngày</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-amber-500 md:text-4xl">24/7</p>
              <p className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-400">Hỗ trợ Kỹ thuật Chuyên sâu</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
