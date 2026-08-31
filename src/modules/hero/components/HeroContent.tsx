import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

interface HeroContentProps {
  onOpenTrial?: () => void;
  onOpenConsulting?: () => void;
}

export default function HeroContent({
  onOpenTrial,
  onOpenConsulting,
}: HeroContentProps) {
  const handleTrial = () => {
    if (onOpenTrial) {
      onOpenTrial();
    } else {
      const elem = document.getElementById("ecosystem");
      elem?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleConsulting = () => {
    if (onOpenConsulting) {
      onOpenConsulting();
    } else {
      const elem = document.getElementById("contact");
      elem?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mx-auto max-w-4xl text-center animate-fade-in-up flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl leading-[1.12]">
        Hệ sinh thái giải pháp số{" "}
        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
          toàn diện
        </span>
      </h1>

      <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
        Cung cấp các nền tảng phần mềm mạnh mẽ, tích hợp AI, giúp doanh nghiệp
        tối ưu vận hành, từ quản trị nhân sự đến quản lý y tế.
      </p>

      <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center sm:flex-row gap-3.5 w-full sm:w-auto">
        <Button
          variant="primary"
          size="lg"
          onClick={handleTrial}
          icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}
          className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl shadow-indigo-500/25 px-7 h-[48px] font-bold rounded-xl text-sm sm:text-base"
        >
          Đăng ký dùng thử
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={handleConsulting}        
          className="w-full sm:w-auto px-7 h-[48px] font-bold rounded-xl border border-slate-700/90 bg-[#06122E]/90 hover:bg-slate-800 text-white shadow-sm text-sm sm:text-base"
        >
          Nhận báo giá
        </Button>
      </div>
    </div>
  );
}
