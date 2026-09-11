import { memo } from "react";
import { ContactFormData } from "@/modules/contact/types";
import FormFieldItem from "@/components/ui/FormFieldItem";

interface ContactFormFieldsProps {
  formData: ContactFormData;
  errors: Record<string, string>;
  onChange: (field: keyof ContactFormData, value: string) => void;
}

export const ContactFormFields = memo(function ContactFormFields({
  formData,
  errors,
  onChange,
}: ContactFormFieldsProps) {
  return (
    <>
      <FormFieldItem
        id="contact-fullName"
        name="fullName"
        label="Họ và tên người đại diện"
        placeholder="Nguyễn Văn A"
        value={formData.fullName}
        error={errors.fullName}
        autoComplete="name"
        onChange={(val) => onChange("fullName", val)}
      />

      <FormFieldItem
        id="contact-email"
        name="email"
        type="email"
        label="Email làm việc (Work Email)"
        placeholder="name@company.com"
        value={formData.email}
        error={errors.email}
        autoComplete="email"
        onChange={(val) => onChange("email", val)}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormFieldItem
          id="contact-phone"
          name="phone"
          type="tel"
          label="Số điện thoại"
          placeholder="0987 654 321"
          value={formData.phone}
          error={errors.phone}
          autoComplete="tel"
          onChange={(val) => onChange("phone", val)}
        />

        <FormFieldItem
          id="contact-company"
          name="company"
          label="Tên doanh nghiệp"
          placeholder="FoTech JSC"
          value={formData.company}
          error={errors.company}
          autoComplete="organization"
          onChange={(val) => onChange("company", val)}
        />
      </div>
    </>
  );
});

export default ContactFormFields;
