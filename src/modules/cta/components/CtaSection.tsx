import { useState } from 'react';
import { faqData } from '@/modules/cta/data/faqData';
import FAQItem from '@/modules/cta/components/FAQItem';
import ContactModal from '@/modules/contact/components/ContactModal';
import { useCtaAnimation } from '@/modules/cta/hooks/useCtaAnimation';

export default function CtaSection() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'demo' | 'trial' | 'consulting';
  }>({ isOpen: false, type: 'consulting' });

  const [openId, setOpenId] = useState<string | null>(faqData.items[0]?.id || null);
  const { sectionRef, isInView } = useCtaAnimation();

  const handleToggle = (id: string) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative py-18 bg-white dark:bg-[#020817] text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300"
    >
      <div
        className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.06),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(79,70,229,0.04),transparent_45%)] dark:bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.08),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(79,70,229,0.06),transparent_45%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div
          key={isInView ? 'cta-header-in' : 'cta-header-out'}
          className={`text-center mb-10 sm:mb-12 ${isInView ? 'animate-hero-up' : 'opacity-0'}`}
          style={isInView ? { animationDelay: '0.4s' } : undefined}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {faqData.title}
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-400 font-normal">
            <span>{faqData.subtitle} </span>
            <button
              type="button"
              onClick={() => setModalState({ isOpen: true, type: 'consulting' })}
              className="font-bold text-slate-900 dark:text-white underline underline-offset-4 decoration-blue-500/80 hover:text-blue-600 dark:hover:text-blue-400 hover:decoration-blue-600 transition-colors inline-flex items-center gap-1 cursor-pointer"
            >
              <span>{faqData.ctaText}</span>
              <span aria-hidden="true">&rarr;</span>
            </button>
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-3.5">
          {faqData.items.map((item, idx) => (
            <FAQItem
              key={isInView ? `${item.id}-in` : `${item.id}-out`}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
              delayIndex={idx}
              className={isInView ? 'animate-hero-up' : 'opacity-0'}
              style={
                isInView
                  ? { animationDelay: `${0.3 + idx * 0.2}s` }
                  : undefined
              }
            />
          ))}
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
