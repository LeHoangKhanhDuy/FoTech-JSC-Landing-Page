import { useState } from 'react';
import {
  Bot,
  CalendarCheck,
  Wallet,
  Smartphone,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import Button from '@/components/ui/Button';
import LeadModal from '@/components/ui/LeadModal';

export default function FeaturesSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="features" className="relative py-20 bg-slate-50/70 dark:bg-slate-900/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Tính Năng Cốt Lõi
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Giải pháp Quản trị Nhân sự 4.0 Tích hợp Trí tuệ Nhân tạo
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            Bộ công cụ mạnh mẽ được thiết kế dành riêng cho doanh nghiệp Việt Nam, giúp tự động hóa 90% tác vụ thủ công.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="mt-14 grid gap-6 md:grid-cols-12">
          
          {/* Card 1: Trợ lý AI Nhân sự (Featured Large Card - 7 cols) */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-500/40 dark:border-slate-800 dark:bg-slate-900 md:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/30">
                  <Bot className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Trợ lý AI Nhân sự (FINA AI)
                  </h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    Giải đáp thắc mắc & Tự động hóa quy trình 24/7
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">
                AI Tiếng Việt
              </span>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Trợ lý thông minh hiểu rõ Luật Lao động Việt Nam và quy chế riêng của công ty. Nhân viên hỏi đáp tự nhiên, hệ thống tự xử lý đơn từ và nhắc nhở lịch làm việc.
            </p>

            {/* Visual Interactive Preview */}
            <div className="mt-6 rounded-xl border border-slate-200/80 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/60">
              <div className="space-y-3">
                <div className="flex items-start gap-2.5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-700 dark:bg-slate-700 dark:text-slate-200">
                    NV
                  </div>
                  <div className="rounded-2xl rounded-tl-none bg-white px-3.5 py-2 text-xs font-medium text-slate-800 shadow-sm dark:bg-slate-900 dark:text-slate-200">
                    "Tháng này tôi còn bao nhiêu ngày phép năm và quy trình đăng ký nghỉ mát thế nào?"
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    <Bot className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                  <div className="rounded-2xl rounded-tl-none bg-blue-600/10 border border-blue-200/50 p-3 text-xs text-slate-900 dark:bg-blue-950/40 dark:border-blue-800/40 dark:text-slate-100">
                    <p className="font-semibold text-blue-700 dark:text-blue-300">
                      Chào bạn! Quỹ phép năm 2026 của bạn hiện còn 4.5 ngày.
                    </p>
                    <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-300">
                      Đơn nghỉ mát theo chính sách công ty cần gửi trước 3 ngày. Bạn có muốn FINA tự động tạo đơn đăng ký nghỉ ngay bây giờ không?
                    </p>
                    <div className="mt-2.5 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setModalOpen(true)}
                        className="rounded-lg bg-blue-600 px-3 py-1 text-[11px] font-bold text-white shadow-sm hover:bg-blue-700"
                      >
                        ⚡ Tạo đơn ngay (1-Click)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                Tra cứu Luật LĐ & BHXH tức thời
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                Tự động gửi thông báo qua Zalo/Email
              </li>
            </ul>
          </div>

          {/* Card 2: Quản lý Công & Nghỉ phép (5 cols) */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-500/40 dark:border-slate-800 dark:bg-slate-900 md:col-span-5">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/30">
                  <CalendarCheck className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Quản lý Công & Nghỉ phép
                  </h3>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    Đối soát giờ làm & Ca kíp linh hoạt
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Xử lý đa dạng ca làm việc (ca gãy, ca đêm, ca xoay). Tự động đối soát giờ làm qua FaceID, GPS, Wifi và duyệt phép thông minh.
              </p>

              {/* Attendance Shift Matrix Pill Preview */}
              <div className="mt-5 rounded-xl border border-slate-200/80 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-800/60 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700 dark:text-slate-200">Phương thức Check-in</span>
                  <span className="text-[10px] font-bold text-blue-600">Realtime GPS & FaceID</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[11px] font-bold">
                  <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-900">
                    <p className="text-[10px] text-slate-500">Ca Sáng</p>
                    <p className="text-emerald-600">08:00 - 12:00</p>
                  </div>
                  <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-900">
                    <p className="text-[10px] text-slate-500">Ca Chiều</p>
                    <p className="text-blue-600">13:00 - 17:00</p>
                  </div>
                  <div className="rounded-lg bg-white p-2 shadow-sm dark:bg-slate-900">
                    <p className="text-[10px] text-slate-500">Tăng ca OT</p>
                    <p className="text-amber-600">1.5x / 2.0x</p>
                  </div>
                </div>
              </div>
            </div>

            <ul className="mt-6 space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                Hỗ trợ Wifi doanh nghiệp, QR Code & GPS định vị
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                Duyệt phép đa cấp theo quản lý trực tiếp
              </li>
            </ul>
          </div>

          {/* Card 3: Lương & Phúc lợi (Payroll) (6 cols) */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-500/40 dark:border-slate-800 dark:bg-slate-900 md:col-span-6">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-white shadow-md shadow-amber-500/30">
                  <Wallet className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Lương & Phúc lợi (Payroll)
                  </h3>
                  <p className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                    Tự động hóa tính lương & Bank API Integration
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Tính lương linh hoạt theo công chuẩn, phụ cấp, tăng ca và thuế TNCN lũy tiến. Kết nối trực tiếp API các ngân hàng lớn (Vietcombank, MB, Techcombank, VPBank) để thanh toán lương 1-click.
              </p>

              {/* Payroll & Bank Badge Preview */}
              <div className="mt-5 rounded-xl border border-slate-200/80 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-800/60">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800 dark:text-slate-200">Bảng lương Tháng 8/2026</span>
                  <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-extrabold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">
                    Đã chuyển khoản
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-slate-500">Tổng ngân sách chi trả</p>
                    <p className="text-lg font-extrabold text-slate-900 dark:text-white">1,420,000,000 VNĐ</p>
                  </div>
                  <div className="flex -space-x-1">
                    {['VCB', 'MB', 'TCB', 'VPB'].map((bank) => (
                      <span
                        key={bank}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-blue-600 text-[9px] font-extrabold text-white shadow-sm dark:border-slate-800"
                      >
                        {bank}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <ul className="mt-6 space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                Tự động khấu trừ BHXH, BHYT, BHTN & Thuế TNCN
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                Xuất phiếu lương mật khẩu mã hóa gửi thẳng tới nhân viên
              </li>
            </ul>
          </div>

          {/* Card 4: Cổng Nhân viên (Self-Service) (6 cols) */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-500/40 dark:border-slate-800 dark:bg-slate-900 md:col-span-6">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-500/30">
                  <Smartphone className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Cổng Nhân viên (Self-Service Portal)
                  </h3>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    Mobile App & Web trải nghiệm vượt trội
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Cho phép nhân viên tự tra cứu hồ sơ cá nhân, xem phiếu lương điện tử bảo mật, nộp đơn từ xin nghỉ/tăng ca và theo dõi tiến độ phê duyệt trên điện thoại hoặc máy tính.
              </p>

              {/* Mobile Screen Mockup Preview */}
              <div className="mt-5 rounded-xl border border-slate-200/80 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-800/60">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="font-bold text-slate-800 dark:text-slate-200">FoHRM Mobile App</span>
                  </div>
                  <span className="text-[10px] text-slate-500">iOS & Android</span>
                </div>
                <div className="mt-2.5 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg bg-white p-2.5 shadow-sm dark:bg-slate-900">
                    <p className="text-[10px] text-slate-500">Phiếu lương Tháng 8</p>
                    <p className="font-bold text-blue-600">Xem ngay 🔒</p>
                  </div>
                  <div className="rounded-lg bg-white p-2.5 shadow-sm dark:bg-slate-900">
                    <p className="text-[10px] text-slate-500">Gửi Đơn Từ</p>
                    <p className="font-bold text-emerald-600">Duyệt trong 5s ⚡</p>
                  </div>
                </div>
              </div>
            </div>

            <ul className="mt-6 space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                Giao diện thân thiện, dễ dùng cho mọi thế hệ nhân sự
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                Thông báo tức thì qua Push Notification & Mobile App
              </li>
            </ul>
          </div>

        </div>

        {/* Section Bottom Action */}
        <div className="mt-12 text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => setModalOpen(true)}
            icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}
          >
            Trải nghiệm trọn bộ tính năng FoHRM
          </Button>
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
