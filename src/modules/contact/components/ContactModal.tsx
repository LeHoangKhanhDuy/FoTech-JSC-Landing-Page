import { memo } from "react";
import { X } from "lucide-react";
import Button from "@/components/ui/Button";
import { ContactModalProps } from "@/modules/contact/types";
import { ContactHeader } from "@/modules/contact/components/ContactHeader";
import { ContactFormFields } from "@/modules/contact/components/ContactFormFields";
import { ContactProductSelect } from "@/modules/contact/components/ContactProductSelect";
import { ContactSuccessView } from "@/modules/contact/components/ContactSuccessView";
import { useContactModal } from "@/modules/contact/hooks/useContactModal";

export const ContactModal = memo(function ContactModal({
  isOpen,
  onClose,
  title,
  subtitle,
  type = "consulting",
}: ContactModalProps) {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleFieldChange,
    handleSubmit,
    handleReset,
  } = useContactModal({ isOpen, onClose });

  if (!isOpen) return null;

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
