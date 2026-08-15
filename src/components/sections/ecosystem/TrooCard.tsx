import { Home, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

interface TrooCardProps {
  onOpenDemo: () => void;
}

export default function TrooCard({ onOpenDemo }: TrooCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-[#E3D9BC]/45 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-[#E3D9BC]/80 hover:shadow-xl hover:shadow-[#E3D9BC]/10 dark:border-[#E3D9BC]/30 dark:bg-slate-900/75 dark:shadow-2xl dark:hover:bg-slate-900/90">
      <div>
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

        <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
          Nền tảng kết nối chủ nhà trọ và người tìm phòng, xác thực thông tin chính chủ, hỗ trợ tìm phòng trọ ưng ý theo vị trí, ngân sách và ký hợp đồng điện tử.
        </p>

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
          onClick={onOpenDemo}
          icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
          className="border-[#E3D9BC]/50 text-[#8a794b] hover:bg-[#E3D9BC]/15 dark:border-[#E3D9BC]/40 dark:text-[#E3D9BC] dark:hover:bg-[#E3D9BC]/10 text-xs px-4 py-2"
        >
          Trải nghiệm Troo.vn
        </Button>
      </div>
    </div>
  );
}
