import { Sparkles } from "lucide-react";
import { ContactModalType } from "@/modules/contact/types";

interface ContactHeaderProps {
  type: ContactModalType;
  title?: string;
  subtitle?: string;
}

export function ContactHeader({ type, title, subtitle }: ContactHeaderProps) {
  const modalTitle =
    title ||
    (type === "demo"
      ? "Đặt lịch trải nghiệm sản phẩm FoTech"
      : type === "trial"
        ? "Bắt đầu dùng thử miễn phí 14 ngày"
        : "Đăng ký tư vấn giải pháp doanh nghiệp");

  const modalSubtitle =
    subtitle ||
    (type === "demo"
      ? "Trực tiếp trải nghiệm tính năng của các sản phẩm FoTech cùng đội ngũ chuyên gia."
      : type === "trial"
        ? "Khởi tạo không gian làm việc thử nghiệm cho doanh nghiệp bạn chỉ trong 5 phút."
        : "");

  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          FoTech Enterprise Platform
        </span>
      </div>

      <h3 className="mt-3 text-2xl font-extrabold text-slate-900 dark:text-white">
        {modalTitle}
      </h3>
      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
        {modalSubtitle}
      </p>
    </div>
  );
}
