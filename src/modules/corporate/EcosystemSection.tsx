import { useState } from 'react';
import { Users, Stethoscope, Cloud, ArrowRight, CheckCircle2, Sparkles, ShieldCheck, Database, Bot, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import LeadModal from '@/components/ui/LeadModal';

export default function EcosystemSection() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'demo' | 'trial' | 'consulting';
  }>({ isOpen: false, type: 'consulting' });

  return (
    <section id="ecosystem" className="relative py-24 bg-slate-50/70 dark:bg-slate-900/60">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
            <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
            Hệ Sinh Thái Sản Phẩm B2B
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Các Nền Tảng Chuyển Đổi Số Hàng Đầu Từ FoTech
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            Hệ sinh thái sản phẩm được thiết kế chuyên biệt cho doanh nghiệp Việt Nam, đồng bộ dữ liệu liên thông và tích hợp trí tuệ nhân tạo.
          </p>
        </div>

        {/* Bento Grid Product Layout */}
        <div className="mt-14 grid gap-6 md:grid-cols-12">
          
          {/* Product 1: FoHRM (Quản trị Nhân sự AI) - Large 7 Cols Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-blue-500/40 dark:border-slate-800 dark:bg-slate-900 md:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/30">
                    <Users className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">FoHRM</h3>
                      <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-[11px] font-extrabold text-blue-700 dark:bg-blue-950/70 dark:text-blue-300">
                        AI-Powered HRM
                      </span>
                    </div>
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                      Quản trị Nhân sự & Trợ lý AI Thông minh
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-400">
                  Tuân thủ 100% Luật LĐ
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Tự động hóa chấm công, tính lương và nâng tầm trải nghiệm nhân viên với Trợ lý AI FINA. Xử lý ca kíp phức tạp, tích hợp Bank API và xuất phiếu lương mật khẩu bảo mật.
              </p>

              {/* Product Feature Pills */}
              <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800/80 dark:bg-slate-800/60">
                <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700 dark:text-slate-200">
                  <div className="flex items-center gap-2">
                    <Bot className="h-4 w-4 text-blue-600" aria-hidden="true" />
                    <span>Trợ lý AI FINA Tiếng Việt 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                    <span>FaceID, GPS & QR Code Checkin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                    <span>Tính lương & Khấu trừ BHXH tự động</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                    <span>Kết nối 1-click Ngân hàng Bank API</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5 dark:border-slate-800">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Dành cho Doanh nghiệp từ 20 đến 5,000+ Nhân sự
              </span>
              <Link to="/fohrm">
                <Button
                  variant="primary"
                  size="sm"
                  icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                  className="shadow-md shadow-blue-500/20"
                >
                  Khám phá FoHRM
                </Button>
              </Link>
            </div>
          </div>

          {/* Product 2: FoMed (Quản lý Phòng khám) - 5 Cols Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-emerald-500/40 dark:border-slate-800 dark:bg-slate-900 md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-500/30">
                  <Stethoscope className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">FoMed</h3>
                    <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-extrabold text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300">
                      Medical SaaS
                    </span>
                  </div>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                    Quản lý Phòng khám & Y tế Số
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Nền tảng quản lý phòng khám toàn diện, tối ưu luồng bệnh nhân, hồ sơ bệnh án điện tử (EMR), kê đơn thuốc chuẩn Bộ Y Tế và quản lý kho dược thông minh.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800/80 dark:bg-slate-800/60">
                <ul className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                    <span>Hồ sơ bệnh án điện tử EMR chuẩn y tế</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                    <span>Đặt lịch khám online & Nhắc lịch Zalo ZNS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                    <span>Quản lý kho thuốc & Doanh thu phòng khám</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-5 dark:border-slate-800">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setModalState({ isOpen: true, type: 'demo' })}
                icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                className="w-full text-emerald-700 hover:text-emerald-800 hover:border-emerald-500 dark:text-emerald-400"
              >
                Tìm hiểu FoMed
              </Button>
            </div>
          </div>

          {/* Product 3: FoTech Cloud (Hạ tầng & Dữ liệu) - 6 Cols Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-indigo-500/40 dark:border-slate-800 dark:bg-slate-900 md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-md shadow-indigo-500/30">
                  <Cloud className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">FoTech Cloud</h3>
                    <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-[11px] font-extrabold text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300">
                      Infrastructure & AI Gateway
                    </span>
                  </div>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
                    Hạ tầng Đám mây & Tích hợp Dữ liệu
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Nền tảng hạ tầng đám mây cho phép doanh nghiệp lưu trữ dữ liệu tập trung an toàn, kết nối API Gateway và xây dựng các mô hình Trí tuệ Nhân tạo riêng.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800/80 dark:bg-slate-800/60">
                <ul className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                  <li className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-indigo-600" aria-hidden="true" />
                    <span>Lưu trữ Đám mây AWS Đa vùng SLA 99.99%</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                    <span>Mã hóa AES-256 bit & Bảo mật ISO 27001</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-5 dark:border-slate-800">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setModalState({ isOpen: true, type: 'consulting' })}
                icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                className="w-full"
              >
                Truy cập FoTech Cloud
              </Button>
            </div>
          </div>

          {/* Product 4: FoAnalytics (Trung tâm Báo cáo Điều hành) - 6 Cols Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-amber-500/40 dark:border-slate-800 dark:bg-slate-900 md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-md shadow-amber-500/30">
                  <Sparkles className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">FoAnalytics</h3>
                    <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-extrabold text-amber-700 dark:bg-amber-950/70 dark:text-amber-300">
                      Realtime Intelligence
                    </span>
                  </div>
                  <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold">
                    Trung tâm Báo cáo Điều hành Doanh nghiệp
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Dashboard phân tích dữ liệu tổng quan cho Ban Quản Trị. Tổng hợp báo cáo chi phí nhân sự, doanh thu phòng khám và hiệu suất vận hành theo thời gian thực.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800/80 dark:bg-slate-800/60">
                <ul className="space-y-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                    <span>Dữ liệu báo cáo liên thông tự động</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
                    <span>Dự báo xu hướng & Cảnh báo rủi ro bằng AI</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-5 dark:border-slate-800">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setModalState({ isOpen: true, type: 'demo' })}
                icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                className="w-full"
              >
                Đặt lịch Demo FoAnalytics
              </Button>
            </div>
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
