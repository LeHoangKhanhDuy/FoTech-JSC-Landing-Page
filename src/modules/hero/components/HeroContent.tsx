import { ArrowRight } from "lucide-react";
import StarBorder from "@/components/ui/StarBorder";

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
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
        Hệ sinh thái giải pháp số{" "}
        <span className="text-blue-500">
          toàn diện
        </span>
      </h1>

      <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-slate-300 max-w-2xl mx-auto">
        Cung cấp các nền tảng phần mềm mạnh mẽ, tích hợp AI, giúp doanh nghiệp
        tối ưu vận hành, từ quản trị nhân sự đến quản lý y tế.
      </p>

      <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center sm:flex-row gap-3.5 w-full sm:w-auto">
        <StarBorder
          as="button"
          onClick={handleTrial}
          color="white"
          speed="6s"
          backgroundColor="#2563eb"
          textColor="#ffffff"
          borderColor="#3b82f6"
          className="w-full sm:w-auto text-sm sm:text-base cursor-pointer transition-transform hover:scale-[1.02]"
        >
          <span className="flex items-center justify-center gap-2">
            <span>Dùng thử miễn phí</span>
            <ArrowRight className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
        </StarBorder>

        <button
          type="button"
          onClick={handleConsulting}
          className="w-full sm:w-auto inline-flex items-center justify-center rounded-[20px] bg-[#06122E] hover:bg-slate-900/90 text-white font-bold py-[14px] px-[26px] text-[16px] transition-all hover:scale-[1.02] shadow-sm"
        >
          Nhận báo giá
        </button>
      </div>
    </div>
  );
}
