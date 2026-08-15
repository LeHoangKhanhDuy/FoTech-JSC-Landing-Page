import { ShoppingBag, CheckCircle2, Layers, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

interface FoCodeCardProps {
  onOpenConsulting: () => void;
}

export default function FoCodeCard({ onOpenConsulting }: FoCodeCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl border border-indigo-500/20 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-indigo-500/20 dark:bg-slate-900/75 dark:shadow-2xl dark:hover:bg-slate-900/90">
      <div>
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

        <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
          Giải pháp thương mại điện tử toàn diện giúp doanh nghiệp xây dựng cửa hàng online, quản lý đơn hàng tập trung, tích hợp cổng thanh toán và vận chuyển tự động.
        </p>

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
          onClick={onOpenConsulting}
          icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
          className="border-indigo-500/40 text-indigo-700 hover:bg-indigo-50 dark:border-indigo-500/40 dark:text-indigo-300 dark:hover:bg-indigo-500/10 text-xs px-4 py-2"
        >
          Khám phá FoCode
        </Button>
      </div>
    </div>
  );
}
