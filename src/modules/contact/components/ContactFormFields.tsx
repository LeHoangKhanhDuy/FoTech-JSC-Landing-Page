import { AlertCircle } from "lucide-react";
import { ContactFormData } from "@/modules/contact/types";

interface ContactFormFieldsProps {
  formData: ContactFormData;
  errors: Record<string, string>;
  onChange: (field: keyof ContactFormData, value: string) => void;
}

export function ContactFormFields({
  formData,
  errors,
  onChange,
}: ContactFormFieldsProps) {
  const getInputClasses = (hasError?: boolean) =>
    `mt-1.5 w-full rounded-xl border px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 dark:text-white dark:placeholder-slate-500 [&:-webkit-autofill]:[box-shadow:0_0_0_1000px_#0f172a_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:white] ${
      hasError
        ? "border-rose-500 bg-rose-950/10 focus:border-rose-500 focus:ring-rose-500/20 dark:border-rose-500 dark:bg-rose-950/20"
        : "border-slate-300 bg-slate-50 focus:border-blue-500 focus:bg-white focus:ring-blue-500/25 dark:border-slate-700 dark:bg-slate-800/90 dark:focus:border-blue-500 dark:focus:bg-slate-800"
    }`;

  return (
    <>
      <div>
        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
          Họ và tên người đại diện{" "}
          <span className="text-rose-500 font-bold">*</span>
        </label>
        <input
          type="text"
          placeholder="Nguyễn Văn A"
          value={formData.fullName}
          onChange={(e) => onChange("fullName", e.target.value)}
          className={getInputClasses(!!errors.fullName)}
        />
        {errors.fullName && (
          <p className="mt-1 flex items-center gap-1 text-xs font-medium text-rose-500">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            <span>{errors.fullName}</span>
          </p>
        )}
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
          Email làm việc (Work Email){" "}
          <span className="text-rose-500 font-bold">*</span>
        </label>
        <input
          type="email"
          placeholder="name@company.com"
          value={formData.email}
          onChange={(e) => onChange("email", e.target.value)}
          className={getInputClasses(!!errors.email)}
        />
        {errors.email && (
          <p className="mt-1 flex items-center gap-1 text-xs font-medium text-rose-500">
            <AlertCircle className="h-3.5 w-3.5 shrink-0" />
            <span>{errors.email}</span>
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
            Số điện thoại <span className="text-rose-500 font-bold">*</span>
          </label>
          <input
            type="tel"
            placeholder="0987 654 321"
            value={formData.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            className={getInputClasses(!!errors.phone)}
          />
          {errors.phone && (
            <p className="mt-1 flex items-center gap-1 text-xs font-medium text-rose-500">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
            Tên doanh nghiệp <span className="text-rose-500 font-bold">*</span>
          </label>
          <input
            type="text"
            placeholder="FoTech JSC"
            value={formData.company}
            onChange={(e) => onChange("company", e.target.value)}
            className={getInputClasses(!!errors.company)}
          />
          {errors.company && (
            <p className="mt-1 flex items-center gap-1 text-xs font-medium text-rose-500">
              <AlertCircle className="h-3.5 w-3.5 shrink-0" />
              <span>{errors.company}</span>
            </p>
          )}
        </div>
      </div>
    </>
  );
}
