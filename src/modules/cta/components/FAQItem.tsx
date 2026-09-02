import { Plus, X } from 'lucide-react';
import { FAQItemData } from '@/modules/cta/types/faqTypes';

interface FAQItemProps {
  item: FAQItemData;
  isOpen: boolean;
  onToggle: () => void;
  delayIndex?: number;
}

export default function FAQItem({ item, isOpen, onToggle, delayIndex = 0 }: FAQItemProps) {
  return (
    <div
      className={`group rounded-2xl border backdrop-blur-md p-5 sm:p-6 transition-all duration-300 shadow-lg cursor-pointer animate-fade-in-up ${
        isOpen
          ? 'border-blue-500/50 bg-slate-900/80 shadow-blue-950/20'
          : 'border-slate-800/80 bg-slate-900/40 hover:border-blue-500/40 hover:bg-slate-900/70'
      }`}
      style={{ animationDelay: `${delayIndex * 0.08}s` }}
      onClick={onToggle}
    >
      <div className="flex items-start justify-between gap-4">
        <h3
          className={`text-base sm:text-lg font-bold leading-snug transition-colors duration-200 ${
            isOpen ? 'text-blue-400 font-extrabold' : 'text-slate-200 group-hover:text-white'
          }`}
        >
          {item.question}
        </h3>
        <button
          type="button"
          aria-label={isOpen ? 'Thu gọn' : 'Mở rộng'}
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border transition-all duration-300 ${
            isOpen
              ? 'border-blue-500/40 bg-blue-950/80 text-blue-400'
              : 'border-slate-800 bg-slate-900/80 text-slate-400 group-hover:border-slate-700 group-hover:text-white'
          }`}
        >
          {isOpen ? <X className="h-4 w-4" aria-hidden="true" /> : <Plus className="h-4 w-4" aria-hidden="true" />}
        </button>
      </div>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-slate-800/80' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-xs sm:text-sm leading-relaxed text-slate-300">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}
