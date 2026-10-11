import { useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";
import { ContactFormData, ContactModalType } from "@/modules/contact/types";
import { validateContactForm } from "@/modules/contact/utils/validation";
import { contactProductOptions } from "@/modules/contact/data/productOptions";
import { acquireScrollLock } from "@/utils/scrollLock";

export const initialContactFormData: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  selectedProductId: "",
};

interface UseContactModalOptions {
  isOpen: boolean;
  onClose: () => void;
  initialEmail?: string;
  defaultProductId?: string;
  intent: ContactModalType;
}

export function useContactModal({
  isOpen,
  onClose,
  initialEmail,
  defaultProductId,
  intent,
}: UseContactModalOptions) {
  const [formData, setFormData] = useState<ContactFormData>(() => ({
    ...initialContactFormData,
    email: initialEmail || "",
    selectedProductId: defaultProductId || "",
  }));
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const releaseScrollLock = acquireScrollLock();
    if (initialEmail !== undefined || defaultProductId !== undefined) {
      setFormData((prev) => ({
        ...prev,
        ...(initialEmail !== undefined ? { email: initialEmail } : {}),
        ...(defaultProductId !== undefined ? { selectedProductId: defaultProductId } : {}),
      }));
    }

    return releaseScrollLock;
  }, [isOpen, initialEmail, defaultProductId]);

  const handleFieldChange = useCallback(
    (field: keyof ContactFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => (prev[field] ? { ...prev, [field]: "" } : prev));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const validationErrors = validateContactForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setErrors({});
      setIsSubmitting(true);
      try {
        const productName = contactProductOptions.find(
          (product) => product.id === formData.selectedProductId,
        )?.name;
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            productName,
            intent,
          }),
        });
        const result = await response.json().catch(() => null);

        if (!response.ok) {
          throw new Error(result?.error || "Không thể gửi đăng ký lúc này.");
        }

        setIsSuccess(true);
        toast.success("Đăng ký thành công! Đội ngũ FoTech sẽ hỗ trợ bạn ngay.");
      } catch (error) {
        const message = error instanceof Error
          ? error.message
          : "Không thể gửi đăng ký lúc này. Vui lòng thử lại.";
        toast.error(message);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, intent]
  );

  const handleReset = useCallback(() => {
    setIsSuccess(false);
    setErrors({});
    setFormData(initialContactFormData);
    onClose();
  }, [onClose]);

  return {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    handleFieldChange,
    handleSubmit,
    handleReset,
  };
}
