import { Link } from 'react-router-dom';
import { Users, CheckCircle2, Building2, ShieldCheck, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function FoHRMCard() {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-blue-500/20 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 dark:border-blue-500/20 dark:bg-slate-900/75 dark:shadow-2xl dark:hover:bg-slate-900/90">
      <div>
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

        <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
          Tự động hóa chấm công, tính lương và nâng tầm trải nghiệm nhân viên với Trợ lý AI FINA. Xử lý ca kíp phức tạp, tích hợp Bank API và xuất phiếu lương mật khẩu bảo mật.
        </p>

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
            variant="primary"
            size="sm"
            icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
            className="bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/20 text-xs px-4 py-2"
          >
            Khám phá FoHRM
          </Button>
        </Link>
      </div>
    </div>
  );
}
