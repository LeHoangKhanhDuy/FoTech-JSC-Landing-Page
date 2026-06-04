import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import Reveal from '@/components/common/Reveal';
import Section from '@/components/common/Section';
import SectionHeading from '@/components/common/SectionHeading';
import { faqs } from '@/data/landing';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq" className="bg-white dark:bg-slate-950">
      <SectionHeading
        eyebrow="FAQ"
        title="10 câu hỏi phổ biến về FoTalent AI"
        description="Những điểm quan trọng trước khi doanh nghiệp đặt lịch demo hoặc bắt đầu dùng thử."
      />
      <Reveal className="mx-auto mt-12 max-w-4xl">
        <div className="divide-y divide-slate-200 overflow-hidden rounded-lg border border-slate-200 bg-slate-50 dark:divide-slate-800 dark:border-slate-800 dark:bg-slate-900">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="text-sm font-bold text-slate-950 dark:text-white md:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-500 transition ${isOpen ? 'rotate-180 text-[#1972F5]' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen ? <p className="px-5 pb-5 text-sm leading-6 text-slate-600 dark:text-slate-300">{faq.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}
