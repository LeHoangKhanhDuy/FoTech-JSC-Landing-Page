import { ShieldCheck, Headphones } from 'lucide-react';

export default function CTATrustPoints() {
  return (
    <div className="mt-10 pt-8 border-t border-slate-800/80">
      <div className="mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10">
        
        {/* Item 1 */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#022A27] border border-[#00E5A3]/40 text-[#00E5A3] shadow-lg shadow-[#00E5A3]/10">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="text-left text-xs font-semibold leading-tight text-slate-300">
            Cấu hình hoàn tất <br className="hidden sm:inline" /> trong 5 phút
          </span>
        </div>

        {/* Divider 1 */}
        <div className="hidden h-7 w-px bg-slate-800/90 sm:block" aria-hidden="true" />

        {/* Item 2 */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#051C47] border border-[#2979FF]/40 text-[#2979FF] shadow-lg shadow-[#2979FF]/10">
            <ShieldCheck className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="text-left text-xs font-semibold leading-tight text-slate-300">
            Không cần <br className="hidden sm:inline" /> thẻ tín dụng
          </span>
        </div>

        {/* Divider 2 */}
        <div className="hidden h-7 w-px bg-slate-800/90 sm:block" aria-hidden="true" />

        {/* Item 3 */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#200052] border border-[#9D4EDD]/40 text-[#9D4EDD] shadow-lg shadow-[#9D4EDD]/10">
            <Headphones className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="text-left text-xs font-semibold leading-tight text-slate-300">
            Hỗ trợ kỹ thuật <br className="hidden sm:inline" /> 24/7
          </span>
        </div>

      </div>
    </div>
  );
}
