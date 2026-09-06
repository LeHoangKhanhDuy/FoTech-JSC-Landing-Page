import { Sparkles } from "lucide-react";

export function HowItWorksHeader() {
  return (
    <div className="flex flex-col items-center gap-6 mb-12 sm:mb-16">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-950/40 px-3.5 py-1 text-xs font-semibold text-blue-400 mb-3.5 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
          <span>Quy trình triển khai 4 bước</span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[44px] leading-[1.12]">
          Từ định hình giải pháp đến{" "}
          <span className="text-blue-500">sẵn sàng vận hành thực tế.</span>
        </h2>
      </div>
    </div>
  );
}
