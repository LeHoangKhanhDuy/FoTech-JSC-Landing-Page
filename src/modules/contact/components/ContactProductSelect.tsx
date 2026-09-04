import { AlertCircle, ChevronDown } from "lucide-react";
import { Dropdown, DropdownItem } from "@/components/ui/dropdown";
import { contactProductOptions } from "@/modules/contact/data/productOptions";

interface ContactProductSelectProps {
  selectedProductId: string;
  error?: string;
  onSelectProduct: (id: string) => void;
}

export function ContactProductSelect({
  selectedProductId,
  error,
  onSelectProduct,
}: ContactProductSelectProps) {
  const selectedProduct = contactProductOptions.find(
    (p) => p.id === selectedProductId
  );

  return (
    <div>
      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
        Sản phẩm quan tâm <span className="text-rose-500 font-bold">*</span>
      </label>

      <Dropdown
        align="start"
        side="bottom"
        width="100%"
        trigger={
          <button
            type="button"
            className={`flex w-full items-center justify-between rounded-xl border px-3.5 py-2.5 text-sm transition focus:outline-none focus:ring-2 ${
              error
                ? "border-rose-500 bg-rose-950/10 text-slate-900 focus:border-rose-500 focus:ring-rose-500/20 dark:border-rose-500 dark:bg-rose-950/20 dark:text-white"
                : "border-slate-300 bg-slate-50 text-slate-900 hover:bg-slate-100 focus:border-blue-500 focus:ring-blue-500/25 dark:border-slate-700 dark:bg-slate-800/90 dark:text-white dark:hover:bg-slate-800"
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span
                className={`truncate font-medium ${
                  selectedProduct
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-400 dark:text-slate-500"
                }`}
              >
                {selectedProduct
                  ? selectedProduct.name
                  : "Chọn sản phẩm / giải pháp quan tâm"}
              </span>
            </div>
            <ChevronDown className="h-4 w-4 text-slate-400 shrink-0 ml-2" />
          </button>
        }
      >
        <div className="py-1">
          {contactProductOptions.map((opt) => (
            <DropdownItem
              key={opt.id}
              label={opt.name}
              description={opt.desc}
              active={opt.id === selectedProductId}
              onClick={() => onSelectProduct(opt.id)}
            />
          ))}
        </div>
      </Dropdown>

      {error && (
        <p className="mt-1 flex items-center gap-1 text-xs font-medium text-rose-500">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
