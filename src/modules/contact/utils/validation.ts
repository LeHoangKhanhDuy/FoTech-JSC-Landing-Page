import { ContactFormData } from "@/modules/contact/types";

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_REGEX = /^[0-9+\s-]{9,15}$/;

export function validateContactForm(formData: ContactFormData): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!formData.fullName.trim()) {
    errors.fullName = "Vui lòng nhập họ và tên người đại diện";
  } else if (formData.fullName.trim().length < 2) {
    errors.fullName = "Họ và tên phải có ít nhất 2 ký tự";
  }

  if (!formData.email.trim()) {
    errors.email = "Vui lòng nhập email làm việc";
  } else if (!EMAIL_REGEX.test(formData.email.trim())) {
    errors.email = "Email không hợp lệ (Ví dụ: name@company.com)";
  }

  if (!formData.phone.trim()) {
    errors.phone = "Vui lòng nhập số điện thoại liên hệ";
  } else if (!PHONE_REGEX.test(formData.phone.trim())) {
    errors.phone = "Số điện thoại không hợp lệ";
  }

  if (!formData.company.trim()) {
    errors.company = "Vui lòng nhập tên doanh nghiệp";
  } else if (formData.company.trim().length < 2) {
    errors.company = "Tên doanh nghiệp phải có ít nhất 2 ký tự";
  }

  if (!formData.selectedProductId || !formData.selectedProductId.trim()) {
    errors.selectedProductId = "Vui lòng chọn sản phẩm / giải pháp quan tâm";
  }

  return errors;
}
