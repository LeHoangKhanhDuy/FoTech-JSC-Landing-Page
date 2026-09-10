import { memo } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItemData } from '@/modules/cta/types/faqTypes';

interface FAQItemProps {
  item: FAQItemData;
  isOpen: boolean;
  onToggle: () => void;
  delayIndex?: number;
}

function FAQItem({ item, isOpen, onToggle, delayIndex = 0 }: FAQItemProps) {
  return (
    <div
      className={`group rounded-2xl border transition-all duration-300 overflow-hidden animate-fade-in-up ${
        isOpen
          ? 'border-blue-500/40 bg-white shadow-md shadow-blue-500/5 dark:border-white/20 dark:bg-white/[0.06] dark:shadow-xl dark:shadow-blue-950/20'
          : 'border-slate-200/90 bg-slate-50/70 hover:border-slate-300 hover:bg-slate-100/70 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 dark:hover:bg-white/[0.05]'
      }`}
      style={{ animationDelay: `${delayIndex * 0.05}s` }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer select-none transition-colors"
      >
        <span
          className={`text-sm sm:text-base font-semibold leading-snug transition-colors duration-200 ${
            isOpen
              ? 'text-slate-900 dark:text-white font-bold'
              : 'text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-white'
          }`}
        >
          {item.question}
        </span>

        <span className="flex h-6 w-6 shrink-0 items-center justify-center transition-colors">
          {isOpen ? (
            <Minus
              className="h-4 w-4 text-slate-500 dark:text-slate-300 transition-transform duration-200"
              aria-hidden="true"
            />
          ) : (
            <Plus
              className="h-4 w-4 text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-transform duration-200"
              aria-hidden="true"
            />
          )}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(FAQItem);
