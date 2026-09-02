import { ArrowUpRight, HelpCircle } from 'lucide-react';
import StarBorder from '@/components/ui/StarBorder';
import { FAQSectionData } from '@/modules/cta/types/faqTypes';

interface FAQContactPanelProps {
  data: FAQSectionData;
  onContactClick: () => void;
}

export default function FAQContactPanel({ data, onContactClick }: FAQContactPanelProps) {
  return (
    <div className="lg:sticky lg:top-28 rounded-3xl border border-slate-800/80 bg-slate-900/40 p-7 sm:p-9 shadow-xl shadow-blue-950/20 backdrop-blur-md transition-all duration-500 hover:border-blue-500/40 animate-fade-in-up">
      <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/60 px-3.5 py-1.5 text-xs font-bold text-blue-400 backdrop-blur-md mb-6">
        <HelpCircle className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
        <span className="uppercase tracking-wider">{data.badge}</span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-[1.12]">
        Questions that need a <span className="text-blue-500">human?</span>
      </h2>

      <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-300">{data.description}</p>

      <div className="my-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-4 divide-x divide-slate-800/80">
        {data.stats.map((stat, index) => (
          <div key={index} className={index > 0 ? 'pl-4' : ''}>
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">{stat.value}</span>
            <span className="mt-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <StarBorder
        as="button"
        onClick={onContactClick}
        color="white"
        speed="6s"
        backgroundColor="#2563eb"
        textColor="#ffffff"
        borderColor="#3b82f6"
        className="w-full text-sm font-bold cursor-pointer transition-transform hover:scale-[1.02]"
      >
        <span className="flex items-center justify-between w-full px-2 gap-3">
          <span>{data.buttonText}</span>
          <ArrowUpRight className="h-5 w-5 text-white shrink-0" aria-hidden="true" />
        </span>
      </StarBorder>

      <p className="mt-4 text-[11px] font-medium text-slate-400 text-center sm:text-left">
        {data.availabilityNote}
      </p>
    </div>
  );
}
