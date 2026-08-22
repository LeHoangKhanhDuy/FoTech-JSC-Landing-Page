import { useState } from "react";
import {
  X,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Users,
  Stethoscope,
  ShoppingBag,
  Home,
  ShoppingCart,
  AlertCircle,
  LucideIcon,
} from "lucide-react";
import Button from "@/components/ui/Button";
import toast from "react-hot-toast";
import { Dropdown, DropdownItem } from "@/components/ui/dropdown";

type LeadModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  type?: "demo" | "trial" | "login" | "consulting";
};

interface ProductOption {
  id: string;
  name: string;
  desc: string;
  icon: LucideIcon;
}

const productOptions: ProductOption[] = [
  {
    id: "all",
    name: "Tất cả sản phẩm / Giải pháp tổng thể",
    desc: "Tư vấn toàn bộ hệ sinh thái B2B FoTech",
    icon: Sparkles,
  },
  {
    id: "fohrm",
    name: "FoHRM – Quản trị nhân sự AI",
    desc: "Tự động chấm công, tính lương & trợ lý AI FINA",
    icon: Users,
  },
  {
    id: "fomed",
    name: "FoMed – Quản lý phòng khám",
    desc: "Bệnh án điện tử EMR chuẩn y tế & kho dược",
    icon: Stethoscope,
  },
  {
    id: "focode",
    name: "FoCode – Sàn Source Code",
    desc: "Chợ mua bán Source Code Web & Mobile App",
    icon: ShoppingBag,
  },
  {
    id: "troovn",
    name: "Troo.vn – Tìm kiếm & Quản lý trọ",
    desc: "kết nối phòng trọ chính chủ & hợp đồng điện tử",
    icon: Home,
  },
  {
    id: "website",
    name: "Thiết kế Website & Phần mềm theo yêu cầu",
    desc: "Thiết kế UI/UX độc quyền & Web App nâng cao",
    icon: ShoppingCart,
  },
];

export default function LeadModal({
  isOpen,
  onClose,
  title,
  subtitle,
  type = "consulting",
}: LeadModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    selectedProductId: "all",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (type !== "login") {
      if (!formData.fullName.trim()) {
        newErrors.fullName = "Vui lòng nhập họ và tên người đại diện";
      } else if (formData.fullName.trim().length < 2) {
        newErrors.fullName = "Họ và tên phải có ít nhất 2 ký tự";
      }
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email làm việc";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Email không hợp lệ (Ví dụ: name@company.com)";
    }

    if (type !== "login") {
      if (!formData.phone.trim()) {
        newErrors.phone = "Vui lòng nhập số điện thoại liên hệ";
      } else if (!/^[0-9+\s-]{9,15}$/.test(formData.phone.trim())) {
        newErrors.phone = "Số điện thoại không hợp lệ";
      }
    }

    if (type === "login") {
      if (!formData.password) {
        newErrors.password = "Vui lòng nhập mật khẩu";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success("Đăng ký thành công! Đội ngũ FoTech sẽ hỗ trợ bạn ngay.");
    }, 500);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrors({});
    onClose();
  };

  const selectedProduct =
    productOptions.find((p) => p.id === formData.selectedProductId) ||
    productOptions[0];
  const SelectedIcon = selectedProduct.icon;

  // Determine title and subtitle based on type or explicit props
  const modalTitle =
    title ||
    (type === "login"
      ? "Đăng Nhập Cổng Doanh Nghiệp FoTech"
      : type === "demo"
      ? "Đặt Lịch Trải Nghiệm Demo 1:1"
      : type === "trial"
      ? "Bắt Đầu Dùng Thử Miễn Phí 14 Ngày"
      : "Đăng Ký Tư Vấn Giải Pháp Doanh Nghiệp");

  const modalSubtitle =
    subtitle ||
    (type === "login"
      ? "Truy cập hệ thống quản trị và các nền tảng công nghệ đám mây của doanh nghiệp bạn."
      : type === "demo"
      ? "Trực tiếp trải nghiệm tính năng của các sản phẩm FoTech cùng đội ngũ chuyên gia."
      : type === "trial"
      ? "Khởi tạo không gian làm việc thử nghiệm cho doanh nghiệp bạn chỉ trong 5 phút."
      : "Chuyên viên giải pháp của FoTech sẽ liên hệ tư vấn 1:1 và báo giá chi tiết trong 15 phút.");

  const getInputClasses = (hasError?: boolean) =>
    `mt-1.5 w-full rounded-xl border px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 dark:text-white dark:placeholder-slate-500 [&:-webkit-autofill]:[box-shadow:0_0_0_1000px_#0f172a_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:white] ${
      hasError
        ? "border-rose-500 bg-rose-950/10 focus:border-rose-500 focus:ring-rose-500/20 dark:border-rose-500 dark:bg-rose-950/20"
        : "border-slate-300 bg-slate-50 focus:border-blue-500 focus:bg-white focus:ring-blue-500/25 dark:border-slate-700 dark:bg-slate-800/90 dark:focus:border-blue-500 dark:focus:bg-slate-800"
    }`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Blurred Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl transition-all dark:border-slate-800 dark:bg-slate-900 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        {isSuccess ? (
          <div className="py-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
              <CheckCircle2 className="h-10 w-10" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-2xl font-extrabold text-slate-900 dark:text-white">
              Đăng Ký Thành Công!
            </h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Cảm ơn bạn đã quan tâm đến giải pháp của{" "}
              <strong>FoTech JSC</strong>. Chuyên viên tư vấn sẽ liên hệ tới
              email{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {formData.email || "của bạn"}
              </span>{" "}
              trong vòng 15 phút.
            </p>
            <div className="mt-6 flex justify-center">
              <Button onClick={handleReset} variant="primary">
                Hoàn tất & Đóng
              </Button>
            </div>
          </div>
        ) : (
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

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {type !== "login" && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Họ và tên người đại diện{" "}
                    <span className="text-rose-500 font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: "" });
                    }}
                    className={getInputClasses(!!errors.fullName)}
                  />
                  {errors.fullName && (
                    <p className="mt-1 flex items-center gap-1 text-xs font-medium text-rose-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Email làm việc (Work Email){" "}
                  <span className="text-rose-500 font-bold">*</span>
                </label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  className={getInputClasses(!!errors.email)}
                />
                {errors.email && (
                  <p className="mt-1 flex items-center gap-1 text-xs font-medium text-rose-500">
                    <AlertCircle className="h-3.5 w-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {type !== "login" && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Số điện thoại{" "}
                      <span className="text-rose-500 font-bold">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="0987 654 321"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: "" });
                      }}
                      className={getInputClasses(!!errors.phone)}
                    />
                    {errors.phone && (
                      <p className="mt-1 flex items-center gap-1 text-xs font-medium text-rose-500">
                        <AlertCircle className="h-3.5 w-3.5" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Tên doanh nghiệp
                    </label>
                    <input
                      type="text"
                      placeholder="FoTech JSC"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className={getInputClasses()}
                    />
                  </div>
                </div>
              )}

              {/* Radix UI Dropdown for Product Selection */}
              {type !== "login" && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Sản phẩm quan tâm
                  </label>

                  <Dropdown
                    align="start"
                    side="bottom"
                    width="100%"
                    trigger={
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 transition hover:bg-slate-100 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/25 dark:border-slate-700 dark:bg-slate-800/90 dark:text-white dark:hover:bg-slate-800"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <SelectedIcon className="h-4 w-4 text-blue-500 shrink-0" />
                          <span className="truncate font-medium">
                            {selectedProduct.name}
                          </span>
                        </div>
                        <ChevronDown className="h-4 w-4 text-slate-400 shrink-0 ml-2" />
                      </button>
                    }
                  >
                    <div className="py-1">
                      {productOptions.map((opt) => (
                        <DropdownItem
                          key={opt.id}
                          icon={opt.icon}
                          label={opt.name}
                          description={opt.desc}
                          active={opt.id === formData.selectedProductId}
                          onClick={() =>
                            setFormData({
                              ...formData,
                              selectedProductId: opt.id,
                            })
                          }
                        />
                      ))}
                    </div>
                  </Dropdown>
                </div>
              )}

              {type === "login" && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Mật khẩu <span className="text-rose-500 font-bold">*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => {
                      setFormData({ ...formData, password: e.target.value });
                      if (errors.password) setErrors({ ...errors, password: "" });
                    }}
                    className={getInputClasses(!!errors.password)}
                  />
                  {errors.password && (
                    <p className="mt-1 flex items-center gap-1 text-xs font-medium text-rose-500">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{errors.password}</span>
                    </p>
                  )}
                </div>
              )}

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={isSubmitting}
                  icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                >
                  {isSubmitting
                    ? "Đang xử lý..."
                    : type === "login"
                    ? "Đăng Nhập Ngay"
                    : type === "demo"
                    ? "Đặt Lịch Xem Demo 1:1"
                    : type === "trial"
                    ? "Bắt Đầu Dùng Thử Miễn Phí"
                    : "Gửi Yêu Cầu Tư Vấn"}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
