import { Cpu } from 'lucide-react';

export default function EcosystemHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-600 shadow-sm backdrop-blur-md dark:border-blue-500/30 dark:bg-blue-600/10 dark:text-blue-400">
        <Cpu className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
        <span>Hệ Sinh Thái Sản Phẩm B2B</span>
      </div>

      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[46px] lg:leading-[1.12]">
        Các Nền Tảng Chuyển Đổi Số <br className="hidden sm:inline" />
        Hàng Đầu Từ{' '}
        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-cyan-400 bg-clip-text text-transparent">
          FoTech
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
        Hệ sinh thái sản phẩm được thiết kế chuyên biệt cho doanh nghiệp Việt Nam, đồng bộ dữ liệu liền mạch và tích hợp trí tuệ nhân tạo.
      </p>
    </div>
  );
}
