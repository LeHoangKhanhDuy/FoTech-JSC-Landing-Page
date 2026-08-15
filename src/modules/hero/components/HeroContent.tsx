import { ArrowRight, Play } from "lucide-react";
import Button from "@/components/ui/Button";

interface HeroContentProps {
  onOpenDemo: () => void;
}

export default function HeroContent({ onOpenDemo }: HeroContentProps) {
  const handleScrollToEcosystem = () => {
    const elem = document.getElementById("ecosystem");
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="lg:col-span-5 text-left animate-fade-in-up">
      <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-5xl leading-[1.12]">
        Hệ sinh thái Giải pháp số{" "}
        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
          toàn diện
        </span>
      </h1>

      <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg max-w-xl">
        Cung cấp các nền tảng phần mềm mạnh mẽ, tích hợp AI, giúp doanh nghiệp
        tối ưu vận hành, từ quản trị nhân sự đến quản lý y tế.
      </p>

      <div className="mt-8 flex flex-col items-stretch sm:flex-row sm:items-center gap-3.5">
        <Button
          variant="primary"
          size="lg"
          onClick={handleScrollToEcosystem}
          icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl shadow-indigo-500/25 px-7"
        >
          Đăng ký dùng thử
        </Button>

        <Button
          variant="outline"
          size="lg"
          onClick={onOpenDemo}
          icon={
            <Play
              className="h-4 w-4 fill-current text-indigo-600"
              aria-hidden="true"
            />
          }
          className="px-7"
        >
          Xem Demo
        </Button>
      </div>
    </div>
  );
}
