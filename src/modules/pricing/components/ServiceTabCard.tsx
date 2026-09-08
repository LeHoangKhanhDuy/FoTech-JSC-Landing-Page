import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe, Layers, Users, Stethoscope, ShoppingBag, Code2, Home, Calculator } from 'lucide-react';
import { ServiceTabItemData } from '@/modules/pricing/types/pricing-types';
import StarBorder from '@/components/ui/StarBorder';

interface ServiceTabCardProps {
  data: ServiceTabItemData;
  slideDirection?: 'right' | 'left';
  onOpenModal: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function ServiceTabCard({
  data,
  slideDirection = 'right',
  onOpenModal,
  onMouseEnter,
  onMouseLeave,
}: ServiceTabCardProps) {
  const slideAnimationClass =
    slideDirection === 'left' ? 'animate-slide-in-left' : 'animate-slide-in-right';

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="rounded-3xl bg-white/95 p-6 sm:p-10 backdrop-blur-md shadow-xl shadow-slate-200/50 dark:border-slate-800/80 dark:bg-slate-900/40 dark:shadow-2xl dark:shadow-blue-950/20 max-w-6xl mx-auto overflow-hidden relative"
    >
      <div
        key={data.id}
        className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center will-change-transform ${slideAnimationClass}`}
      >
        <div className="lg:col-span-6 relative flex justify-center items-center">
          <div className="absolute -inset-4 rounded-3xl bg-blue-600/10 dark:bg-blue-600/15 blur-2xl pointer-events-none" />

          <div className="relative w-full max-w-md rounded-2xl bg-slate-50/90 dark:border-slate-700/60 dark:bg-[#071225] p-5 shadow-md dark:shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400">
                {data.badge}
              </span>
            </div>

            {data.previewType === "website" && (
              <div className="space-y-3">
                <div className="h-28 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50/80 dark:from-blue-900/40 dark:to-slate-900/80 border border-blue-100 dark:border-slate-800/80 p-3.5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        FoTech Web Builder
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-300/80 dark:border-emerald-500/30">
                      SEO 100/100
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <div className="h-2 rounded bg-blue-500/40 w-3/4" />
                    <div className="h-2 rounded bg-slate-300 dark:bg-slate-700/50 w-full" />
                    <div className="h-2 rounded bg-slate-300 dark:bg-slate-700/50 w-2/3" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/80 p-3 text-xs shadow-sm">
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">
                      Tốc độ tải trang
                    </span>
                    <span className="text-base font-extrabold text-blue-600 dark:text-blue-400">
                      0.8s
                    </span>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/80 p-3 text-xs shadow-sm">
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">
                      Tỷ lệ chuyển đổi
                    </span>
                    <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                      +345%
                    </span>
                  </div>
                </div>
              </div>
            )}

            {data.previewType === "fohrm" && (
              <div className="space-y-3">
                <div className="h-28 rounded-xl bg-gradient-to-br from-indigo-50 to-blue-50/80 dark:from-indigo-900/40 dark:to-slate-900/80 border border-indigo-100 dark:border-slate-800/80 p-3.5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        FoHRM AI Dashboard
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-100 dark:text-blue-400 dark:bg-blue-950/80 px-2 py-0.5 rounded-full border border-blue-300/80 dark:border-blue-500/30">
                      FaceID Active
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-indigo-100 dark:border-slate-800/80">
                    <div>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block">
                        Chấm công hôm nay
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        99.2% Nhân sự
                      </span>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/80 p-3 text-xs shadow-sm">
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">
                      Tự động hóa Payroll
                    </span>
                    <span className="text-base font-extrabold text-indigo-600 dark:text-indigo-400">
                      100% AI
                    </span>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/80 p-3 text-xs shadow-sm">
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">
                      Thời gian xử lý
                    </span>
                    <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                      &lt; 3 phút
                    </span>
                  </div>
                </div>
              </div>
            )}

            {data.previewType === "troovn" && (
              <div className="space-y-3">
                <div className="h-28 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50/80 dark:from-amber-900/40 dark:to-slate-900/80 border border-amber-100 dark:border-slate-800/80 p-3.5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Home className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        Troo.vn PropTech Platform
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-100 dark:text-amber-400 dark:bg-amber-950/80 px-2 py-0.5 rounded-full border border-amber-300/80 dark:border-amber-500/30">
                      Chính chủ 100%
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-amber-100 dark:border-slate-800/80">
                    <div>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block">
                        Tự động chốt điện nước
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        Xuất hóa đơn Zalo/App
                      </span>
                    </div>
                    <Calculator className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/80 p-3 text-xs shadow-sm">
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">
                      Tỷ lệ lấp đầy phòng
                    </span>
                    <span className="text-base font-extrabold text-amber-600 dark:text-amber-400">
                      98.5%
                    </span>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/80 p-3 text-xs shadow-sm">
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">
                      Hợp đồng điện tử
                    </span>
                    <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                      100% Digital
                    </span>
                  </div>
                </div>
              </div>
            )}

            {data.previewType === "fomed" && (
              <div className="space-y-3">
                <div className="h-28 rounded-xl bg-gradient-to-br from-rose-50 to-pink-50/80 dark:from-rose-900/40 dark:to-slate-900/80 border border-rose-100 dark:border-slate-800/80 p-3.5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Stethoscope className="h-4 w-4 text-rose-600 dark:text-rose-400" />
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        FoMed EMR System
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-rose-700 bg-rose-100 dark:text-rose-400 dark:bg-rose-950/80 px-2 py-0.5 rounded-full border border-rose-300/80 dark:border-rose-500/30">
                      Chuẩn Bộ Y Tế
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-rose-100 dark:border-slate-800/80">
                    <div>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block">
                        Số bệnh án EMR
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        50.000+ Hồ sơ
                      </span>
                    </div>
                    <ShieldCheck className="h-5 w-5 text-rose-600 dark:text-rose-400" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/80 p-3 text-xs shadow-sm">
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">
                      Giảm thời gian chờ
                    </span>
                    <span className="text-base font-extrabold text-rose-600 dark:text-rose-400">
                      -90%
                    </span>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/80 p-3 text-xs shadow-sm">
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">
                      Kho dược tự động
                    </span>
                    <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                      Chính xác 100%
                    </span>
                  </div>
                </div>
              </div>
            )}

            {data.previewType === "focode" && (
              <div className="space-y-3">
                <div className="h-28 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50/80 dark:from-emerald-900/40 dark:to-slate-900/80 border border-emerald-100 dark:border-slate-800/80 p-3.5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        FoCode Marketplace
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-300/80 dark:border-emerald-500/30">
                      1.000+ Repos
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-emerald-100 dark:border-slate-800/80">
                    <div>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block">
                        Bàn giao mã nguồn
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        Tự động 1-Click
                      </span>
                    </div>
                    <Code2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/80 p-3 text-xs shadow-sm">
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">
                      Tiết kiệm thời gian
                    </span>
                    <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                      80% Dev
                    </span>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/80 p-3 text-xs shadow-sm">
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">
                      Kiểm duyệt Clean Code
                    </span>
                    <span className="text-base font-extrabold text-blue-600 dark:text-blue-400">
                      100% Clean
                    </span>
                  </div>
                </div>
              </div>
            )}

            {data.previewType === "custom" && (
              <div className="space-y-3">
                <div className="h-28 rounded-xl bg-gradient-to-br from-amber-50 to-yellow-50/80 dark:from-amber-900/40 dark:to-slate-900/80 border border-amber-100 dark:border-slate-800/80 p-3.5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Layers className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        Enterprise Custom System
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-100 dark:text-amber-400 dark:bg-amber-950/80 px-2 py-0.5 rounded-full border border-amber-300/80 dark:border-amber-500/30">
                      Cloud Native
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-amber-100 dark:border-slate-800/80">
                    <div>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 block">
                        Kiến trúc hệ thống
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        Microservices / ERP
                      </span>
                    </div>
                    <Zap className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/80 p-3 text-xs shadow-sm">
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">
                      Khả năng mở rộng
                    </span>
                    <span className="text-base font-extrabold text-amber-600 dark:text-amber-400">
                      Unlimited
                    </span>
                  </div>
                  <div className="rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/80 p-3 text-xs shadow-sm">
                    <span className="text-slate-500 dark:text-slate-400 block text-[10px]">
                      Đồng hành chuyển giao
                    </span>
                    <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                      24/7 SLA
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Sẵn sàng triển khai ngay
                </span>
              </div>
              <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400">
                FoTech Ecosystem
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-snug">
              {data.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {data.subtitle}
            </p>
          </div>

          <ul className="space-y-3 pt-1">
            {data.bullets.map((bullet, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200"
              >
                <Sparkles
                  className="h-4 w-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2.5">
              Ngôn ngữ & Frameworks:
            </span>
            <div className="flex flex-wrap items-center gap-2.5">
              {data.brands.map((brand, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-extrabold tracking-wide ${brand.bgColor} ${brand.textColor}`}
                >
                  {brand.name}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <StarBorder
              as="button"
              type="button"
              onClick={onOpenModal}
              color="#93c5fd"
              speed="4s"
              backgroundColor="#2563eb"
              textColor="#ffffff"
              borderColor="#3b82f6"
              className="w-full sm:w-auto text-sm sm:text-base cursor-pointer transition-transform hover:scale-[1.02]"
            >
              <div className="inline-flex items-center gap-2.5 text-sm font-bold">
                <span>{data.buttonText}</span>
                <ArrowRight className="h-4 w-4 text-white" aria-hidden="true" />
              </div>
            </StarBorder>
          </div>
        </div>
      </div>
    </div>
  );
}
