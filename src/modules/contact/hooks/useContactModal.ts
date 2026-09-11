import { useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";
import { ContactFormData } from "@/modules/contact/types";
import { validateContactForm } from "@/modules/contact/utils/validation";

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
}

export function useContactModal({ isOpen, onClose }: UseContactModalOptions) {
  const [formData, setFormData] = useState<ContactFormData>(initialContactFormData);
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

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const validationErrors = validateContactForm(formData);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setErrors({});
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        toast.success("Đăng ký thành công! Đội ngũ FoTech sẽ hỗ trợ bạn ngay.");
      }, 400);
    },
    [formData]
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
