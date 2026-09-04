import { useState, useEffect, useCallback, memo } from "react";
import { X } from "lucide-react";
import Button from "@/components/ui/Button";
import toast from "react-hot-toast";
import { ContactModalProps, ContactFormData } from "@/modules/contact/types";
import { ContactHeader } from "@/modules/contact/components/ContactHeader";
import { ContactFormFields } from "@/modules/contact/components/ContactFormFields";
import { ContactProductSelect } from "@/modules/contact/components/ContactProductSelect";
import { ContactSuccessView } from "@/modules/contact/components/ContactSuccessView";

const initialFormData: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  selectedProductId: "",
};

export const ContactModal = memo(function ContactModal({
  isOpen,
  onClose,
  title,
  subtitle,
  type = "consulting",
}: ContactModalProps) {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleFieldChange = useCallback(
    (field: keyof ContactFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => (prev[field] ? { ...prev, [field]: "" } : prev));
    },
    []
  );

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Vui lòng nhập họ và tên người đại diện";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Họ và tên phải có ít nhất 2 ký tự";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email làm việc";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Email không hợp lệ (Ví dụ: name@company.com)";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại liên hệ";
    } else if (!/^[0-9+\s-]{9,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Vui lòng nhập tên doanh nghiệp";
    } else if (formData.company.trim().length < 2) {
      newErrors.company = "Tên doanh nghiệp phải có ít nhất 2 ký tự";
    }

    if (!formData.selectedProductId || !formData.selectedProductId.trim()) {
      newErrors.selectedProductId = "Vui lòng chọn sản phẩm / giải pháp quan tâm";
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
    }, 400);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrors({});
    setFormData(initialFormData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="fixed inset-0 bg-slate-950/75 transition-opacity duration-200 transform-gpu"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl transition-transform duration-200 transform-gpu dark:border-slate-800 dark:bg-slate-900 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        {isSuccess ? (
          <ContactSuccessView email={formData.email} onReset={handleReset} />
        ) : (
          <div>
            <ContactHeader type={type} title={title} subtitle={subtitle} />

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <ContactFormFields
                formData={formData}
                errors={errors}
                onChange={handleFieldChange}
              />

              <ContactProductSelect
                selectedProductId={formData.selectedProductId}
                error={errors.selectedProductId}
                onSelectProduct={(id) => handleFieldChange("selectedProductId", id)}
              />

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Đang xử lý..."
                    : type === "demo"
                    ? "Đặt Lịch Xem Demo 1:1"
                    : type === "trial"
                    ? "Bắt Đầu Dùng Thử Miễn Phí"
                    : "Gửi Yêu Cầu"}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
});

export default ContactModal;
