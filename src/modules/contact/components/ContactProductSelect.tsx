import { ChevronDown } from "lucide-react";
import { Dropdown, DropdownItem } from "@/components/ui/dropdown";
import { contactProductOptions } from "@/modules/contact/data/productOptions";

interface ContactProductSelectProps {
  selectedProductId: string;
  onSelectProduct: (id: string) => void;
}

export function ContactProductSelect({
  selectedProductId,
  onSelectProduct,
}: ContactProductSelectProps) {
  const selectedProduct =
    contactProductOptions.find((p) => p.id === selectedProductId) ||
    contactProductOptions[0];

  return (
    <div>
      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
        Sản phẩm quan tâm
      </label>

      <Dropdown
        align="start"
        side="bottom"
        width="100%"
        trigger={
          <button
            type="button"
            className="flex w-full items-center justify-between rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm text-slate-900 transition hover:bg-slate-100 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/25 dark:border-slate-700 dark:bg-slate-800/90 dark:text-white dark:hover:bg-slate-800"
          >
            <div className="flex items-center gap-2.5 min-w-0">            
              <span className="truncate font-medium">
                {selectedProduct.name}
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
              icon={opt.icon}
              label={opt.name}
              description={opt.desc}
              active={opt.id === selectedProductId}
              onClick={() => onSelectProduct(opt.id)}
            />
          ))}
        </div>
      </Dropdown>
    </div>
  );
}
