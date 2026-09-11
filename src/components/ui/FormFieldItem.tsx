import { memo, InputHTMLAttributes } from "react";
import { AlertCircle } from "lucide-react";

export interface FormFieldItemProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  onChange?: (value: string) => void;
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const getInputClasses = (hasError?: boolean, className?: string) =>
  `mt-1.5 w-full rounded-xl border px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 dark:text-white dark:placeholder-slate-500 [&:-webkit-autofill]:[box-shadow:0_0_0_1000px_#0f172a_inset] [&:-webkit-autofill]:[-webkit-text-fill-color:white] ${
    hasError
      ? "border-rose-500 bg-rose-950/10 focus:border-rose-500 focus:ring-rose-500/20 dark:border-rose-500 dark:bg-rose-950/20"
      : "border-slate-300 bg-slate-50 focus:border-blue-500 focus:bg-white focus:ring-blue-500/25 dark:border-slate-700 dark:bg-slate-800/90 dark:focus:border-blue-500 dark:focus:bg-slate-800"
  } ${className || ""}`.trim();

export const FormFieldItem = memo(function FormFieldItem({
  id,
  label,
  required = true,
  error,
  type = "text",
  placeholder,
  value,
  autoComplete,
  className,
  onChange,
  onInputChange,
  ...props
}: FormFieldItemProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    onInputChange?.(e);
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-semibold text-slate-700 dark:text-slate-300"
      >
        {label} {required && <span className="text-rose-500 font-bold">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={handleChange}
        className={getInputClasses(!!error, className)}
        {...props}
      />
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1 flex items-center gap-1 text-xs font-medium text-rose-500"
        >
          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
});

export default FormFieldItem;
