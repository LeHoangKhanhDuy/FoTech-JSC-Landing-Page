import { Sparkles } from 'lucide-react';

export function HowItWorksHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-50/80 px-4 py-1.5 text-xs font-bold text-blue-600 dark:border-blue-500/30 dark:bg-blue-950/50 dark:text-blue-400">
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
        Quy Trình Tự Động Hóa 4 Bước
      </span>

      <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
        Vận Hành Nhân Sự & Tính Lương Tự Động Liền Mạch
      </h2>

      <p className="mt-4 text-base text-slate-600 dark:text-slate-300 sm:text-lg leading-relaxed">
        Khám phá quy trình khép kín tối tân của FoHRM: Từ điểm danh nhận diện khuôn mặt FaceID AI, phân ca linh hoạt, tính lương tự động đến chi trả 1-click qua Bank API.
      </p>
    </div>
  );
}
