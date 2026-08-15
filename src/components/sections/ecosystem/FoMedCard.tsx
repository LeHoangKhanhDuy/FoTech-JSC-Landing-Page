import { Stethoscope, CheckCircle2, Building2, Activity, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

interface FoMedCardProps {
  onOpenDemo: () => void;
}

export default function FoMedCard({ onOpenDemo }: FoMedCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-emerald-500/20 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 dark:border-emerald-500/20 dark:bg-slate-900/75 dark:shadow-2xl dark:hover:bg-slate-900/90">
      <div>
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

        <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
          Nền tảng quản lý phòng khám toàn diện, tối ưu luồng bệnh nhân, hồ sơ bệnh án điện tử (EMR), kê đơn thuốc chuẩn Bộ Y Tế và quản lý kho dược thông minh.
        </p>

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
          onClick={onOpenDemo}
          icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
          className="border-emerald-500/40 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-500/40 dark:text-emerald-400 dark:hover:bg-emerald-500/10 text-xs px-4 py-2"
        >
          Tìm hiểu FoMed
        </Button>
      </div>
    </div>
  );
}
