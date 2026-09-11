interface PricingToggleProps {
  isYearly: boolean;
  onToggle: () => void;
  label?: string;
  className?: string;
}

export default function PricingToggle({
  isYearly,
  onToggle,
  label = "Hằng năm",
  className = "",
}: PricingToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isYearly}
      onClick={onToggle}
      className={`inline-flex items-center gap-2 cursor-pointer select-none group ${className}`}
      title={
        isYearly
          ? "Đang bật thanh toán hàng năm (Tiết kiệm 20%)"
          : "Chuyển sang thanh toán hàng năm"
      }
    >
      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
        {label}
      </span>

      <div
        className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full p-0.5 transition-colors duration-200 ease-in-out ${
          isYearly
            ? "bg-blue-600 dark:bg-white"
            : "bg-slate-300 dark:bg-slate-700"
        }`}
      >
        <span
          className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white dark:bg-slate-950 shadow-sm transition-transform duration-200 ease-in-out ${
            isYearly ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </div>
    </button>
  );
}
