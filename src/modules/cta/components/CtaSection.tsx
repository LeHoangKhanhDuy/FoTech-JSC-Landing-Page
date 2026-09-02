import { useState } from 'react';
import { faqData } from '@/modules/cta/data/faqData';
import FAQContactPanel from '@/modules/cta/components/FAQContactPanel';
import FAQGrid from '@/modules/cta/components/FAQGrid';
import ContactModal from '@/modules/contact/components/ContactModal';

export default function CtaSection() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'demo' | 'trial' | 'consulting';
  }>({ isOpen: false, type: 'consulting' });

  return (
    <section
      id="faq"
      className="relative py-20 md:py-28 bg-[#020817] text-slate-100 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_30%_50%,rgba(37,99,235,0.08),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(79,70,229,0.06),transparent_35%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-4">
            <FAQContactPanel
              data={faqData}
              onContactClick={() => setModalState({ isOpen: true, type: 'consulting' })}
            />
          </div>

          <div className="lg:col-span-8">
            <FAQGrid column1={faqData.column1} column2={faqData.column2} />
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        type={modalState.type}
      />
    </section>
  );
}
