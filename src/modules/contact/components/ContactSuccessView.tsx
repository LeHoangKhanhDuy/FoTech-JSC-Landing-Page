import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

interface ContactSuccessViewProps {
  email: string;
  onReset: () => void;
}

export function ContactSuccessView({
  email,
  onReset,
}: ContactSuccessViewProps) {
  return (
    <div className="py-6 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
        <CheckCircle2 className="h-10 w-10" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-2xl font-extrabold text-slate-900 dark:text-white">
        Đăng Ký Thành Công!
      </h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        Cảm ơn bạn đã quan tâm đến giải pháp của <strong>FoTech JSC</strong>.
        Chuyên viên tư vấn sẽ liên hệ tới email{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">
          {email || "của bạn"}
        </span>{" "}
        trong vòng 15 phút.
      </p>
      <div className="mt-6 flex justify-center">
        <Button onClick={onReset} variant="primary">
          Hoàn tất & Đóng
        </Button>
      </div>
    </div>
  );
}
