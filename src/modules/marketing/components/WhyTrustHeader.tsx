import { Award } from 'lucide-react';

export default function WhyTrustHeader() {
  return (
    <div className="relative mx-auto max-w-3xl text-center">
      {/* Decorative Subtle Network Lines Behind Heading */}
      <div className="pointer-events-none absolute -top-16 left-1/2 -z-10 h-64 w-[600px] -translate-x-1/2 opacity-20 dark:opacity-30 hidden sm:block">
        <svg viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
          <path
            d="M 50 150 Q 200 30 300 100 T 550 50"
            stroke="url(#header-line-grad)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <circle cx="200" cy="55" r="4" fill="#3B82F6" />
          <circle cx="420" cy="75" r="4" fill="#8B5CF6" />
          <defs>
            <linearGradient id="header-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Eyebrow Badge */}
      <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 shadow-xs backdrop-blur-md dark:border-blue-500/30 dark:bg-blue-600/10 dark:text-blue-300">
        <Award className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" aria-hidden="true" />
        <span>Năng Lực & Triết Lý Sản Phẩm</span>
      </div>

      {/* Main Heading */}
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[48px] lg:leading-[1.08]">
        Tại Sao Các Doanh Nghiệp Hàng Đầu <br className="hidden sm:inline" />
        Lựa Chọn{' '}
        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400">
          FoTech
        </span>
        ?
      </h2>

      {/* Subtitle */}
      <p className="mx-auto mt-4 max-w-[680px] text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
        Nền tảng công nghệ đáng tin cậy được thiết kế để đồng hành cùng tốc độ tăng trưởng của doanh nghiệp bạn.
      </p>
    </div>
  );
}
