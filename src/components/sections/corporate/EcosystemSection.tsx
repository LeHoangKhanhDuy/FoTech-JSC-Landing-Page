import { useState } from 'react';
import { Users, Stethoscope, ShoppingBag, Home, ArrowRight, CheckCircle2, Building2, ShieldCheck, Activity, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/ui/Button';
import LeadModal from '@/components/ui/LeadModal';

export default function EcosystemSection() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'demo' | 'trial' | 'consulting';
  }>({ isOpen: false, type: 'consulting' });

  return (
    <section id="ecosystem" className="relative py-24 bg-slate-50 text-slate-900 overflow-hidden dark:bg-[#030817] dark:text-slate-100 transition-colors duration-300">
      {/* Background Radial Glow & Subtle Network Lines */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.06),transparent_45%)] dark:bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.12),transparent_45%)]" />
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-10 dark:opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_100%)]" />

      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Main Heading */}
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[46px] lg:leading-[1.12]">
            Các Nền Tảng Chuyển Đổi Số <br className="hidden sm:inline" />
            Hàng Đầu Từ{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-cyan-400 bg-clip-text text-transparent">
              FoTech
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
            Hệ sinh thái sản phẩm được thiết kế chuyên biệt cho doanh nghiệp Việt Nam, đồng bộ dữ liệu liền mạch và tích hợp trí tuệ nhân tạo.
          </p>
        </div>

        {/* Product Ecosystem Grid (2x2) */}
        <div className="mt-14 grid gap-5 grid-cols-1 lg:grid-cols-2">
          
          {/* CARD 1 — FoHRM (Electric Blue) */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-blue-500/20 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 dark:border-blue-500/20 dark:bg-slate-900/75 dark:shadow-2xl dark:hover:bg-slate-900/90">
            <div>
              {/* Header: Icon + Name + Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/25">
                    <Users className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">FoHRM</h3>
                      <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-[11px] font-semibold text-blue-700 border border-blue-200 dark:bg-blue-500/15 dark:text-blue-400 dark:border-blue-500/20">
                        AI-Powered HRM
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
                      Quản trị Nhân sự & Trợ lý AI Thông minh
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 border border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-400 dark:border-emerald-500/20">
                  Tuân thủ 100% Luật LĐ
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
                Tự động hóa chấm công, tính lương và nâng tầm trải nghiệm nhân viên với Trợ lý AI FINA. Xử lý ca kíp phức tạp, tích hợp Bank API và xuất phiếu lương mật khẩu bảo mật.
              </p>

              {/* Feature Panel Box */}
              <div className="mt-5 rounded-xl border border-slate-200/70 bg-slate-50 p-4 dark:border-slate-800/80 dark:bg-slate-950/60">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    <span>Trợ lý AI FINA Tiếng Việt 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    <span>FaceID, GPS & QR Code Checkin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    <span>Tính lương & Khấu trừ BHXH tự động</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    <span>Kết nối 1-click Ngân hàng Bank API</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer Divider + Stats & CTA */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4 dark:border-slate-800/80">
              <div className="flex items-center gap-5 text-xs">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white leading-none">5,000+</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Doanh nghiệp tin dùng</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white leading-none">20+</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Năm kinh nghiệm</p>
                  </div>
                </div>
              </div>

              <Link to="/fohrm">
                <Button
                  variant="outline"
                  size="sm"
                  icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                  className="text-xs px-4 py-2"
                >
                  Khám phá FoHRM
                </Button>
              </Link>
            </div>
          </div>

          {/* CARD 2 — FoMed (Emerald Green) */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-emerald-500/20 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 dark:border-emerald-500/20 dark:bg-slate-900/75 dark:shadow-2xl dark:hover:bg-slate-900/90">
            <div>
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-500/25">
                    <Stethoscope className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">FoMed</h3>
                      <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 border border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-400 dark:border-emerald-500/20">
                        Medical SaaS
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      Quản lý Phòng khám & Y tế Số
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
                Nền tảng quản lý phòng khám toàn diện, tối ưu luồng bệnh nhân, hồ sơ bệnh án điện tử (EMR), kê đơn thuốc chuẩn Bộ Y Tế và quản lý kho dược thông minh.
              </p>

              {/* Feature Panel Box */}
              <div className="mt-5 rounded-xl border border-slate-200/70 bg-slate-50 p-4 dark:border-slate-800/80 dark:bg-slate-950/60">
                <div className="space-y-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    <span>Hồ sơ bệnh án điện tử EMR chuẩn y tế</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    <span>Đặt lịch khám online & Nhắc lịch Zalo ZNS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                    <span>Quản lý kho thuốc & Doanh thu phòng khám</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4 dark:border-slate-800/80">
              <div className="flex items-center gap-5 text-xs">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white leading-none">1,000+</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Phòng khám sử dụng</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white leading-none">99.9%</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Uptime hệ thống</p>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setModalState({ isOpen: true, type: 'demo' })}
                icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                className="text-xs px-4 py-2"
              >
                Tìm hiểu FoMed
              </Button>
            </div>
          </div>

          {/* CARD 3 — FoCode (E-Commerce SaaS) */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-indigo-500/20 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-indigo-500/20 dark:bg-slate-900/75 dark:shadow-2xl dark:hover:bg-slate-900/90">
            <div>
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/25">
                    <ShoppingBag className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">FoCode</h3>
                      <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-[11px] font-semibold text-indigo-700 border border-indigo-200 dark:bg-indigo-500/15 dark:text-indigo-300 dark:border-indigo-500/20">
                        E-Commerce SaaS
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                      Nền tảng Thương mại Điện tử & Bán hàng Đa kênh
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
                Giải pháp thương mại điện tử toàn diện giúp doanh nghiệp xây dựng cửa hàng online, quản lý đơn hàng tập trung, tích hợp cổng thanh toán và vận chuyển tự động.
              </p>

              {/* Feature Panel Box */}
              <div className="mt-5 rounded-xl border border-slate-200/70 bg-slate-50 p-4 dark:border-slate-800/80 dark:bg-slate-950/60">
                <div className="space-y-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                    <span>Xây dựng Website & App bán hàng chuẩn SEO</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                    <span>Tích hợp 10+ Cổng thanh toán & Đơn vị vận chuyển</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                    <span>Quản lý kho hàng & Đơn hàng đa kênh (Omnichannel)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4 dark:border-slate-800/80">
              <div className="flex items-center gap-5 text-xs">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white leading-none">100K+</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Đơn hàng/ngày</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white leading-none">Omnichannel</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Bán hàng đa kênh</p>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setModalState({ isOpen: true, type: 'consulting' })}
                icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                className="text-xs px-4 py-2"
              >
                Khám phá FoCode
              </Button>
            </div>
          </div>

          {/* CARD 4 — Troo.vn (PropTech & Housing - Color #E3D9BC) */}
          <div className="group relative flex flex-col justify-between rounded-2xl border border-[#E3D9BC]/40 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-[#E3D9BC]/80 hover:shadow-xl hover:shadow-[#E3D9BC]/10 dark:border-[#E3D9BC]/30 dark:bg-slate-900/75 dark:shadow-2xl dark:hover:bg-slate-900/90">
            <div>
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#c5b487] text-slate-950 font-bold shadow-lg shadow-[#E3D9BC]/30 dark:bg-[#E3D9BC] dark:text-slate-950">
                    <Home className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Troo.vn</h3>
                      <span className="rounded-full bg-[#E3D9BC]/20 px-2.5 py-0.5 text-[11px] font-semibold text-[#8a794b] border border-[#E3D9BC]/40 dark:bg-[#E3D9BC]/15 dark:text-[#E3D9BC] dark:border-[#E3D9BC]/30">
                        PropTech & Housing
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs font-semibold text-[#a89564] dark:text-[#E3D9BC]">
                      Hệ thống Tìm kiếm & Quản lý Thuê Trọ Thông minh
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
                Nền tảng kết nối chủ nhà trọ và người tìm phòng, xác thực thông tin chính chủ, hỗ trợ tìm phòng trọ ưng ý theo vị trí, ngân sách và ký hợp đồng điện tử.
              </p>

              {/* Feature Panel Box */}
              <div className="mt-5 rounded-xl border border-[#E3D9BC]/30 bg-[#E3D9BC]/10 p-4 dark:border-slate-800/80 dark:bg-slate-950/60">
                <div className="space-y-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#a89564] dark:text-[#E3D9BC]" aria-hidden="true" />
                    <span>Tìm kiếm phòng trọ chính chủ xác thực AI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#a89564] dark:text-[#E3D9BC]" aria-hidden="true" />
                    <span>Đặt lịch xem phòng & Ký hợp đồng điện tử</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#a89564] dark:text-[#E3D9BC]" aria-hidden="true" />
                    <span>Quản lý điện nước, phòng trọ & Thu hộ tiền nhà</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4 dark:border-slate-800/80">
              <div className="flex items-center gap-5 text-xs">
                <div className="flex items-center gap-2">
                  <Home className="h-4 w-4 text-[#a89564] dark:text-[#E3D9BC]" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white leading-none">50,000+</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Phòng trọ khả dụng</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#a89564] dark:text-[#E3D9BC]" aria-hidden="true" />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white leading-none">100%</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Phòng xác thực</p>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setModalState({ isOpen: true, type: 'demo' })}
                icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                className="text-xs px-4 py-2"
              >
                Trải nghiệm Troo.vn
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
