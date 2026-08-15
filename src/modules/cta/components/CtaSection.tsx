import { useState } from 'react';
import LeadModal from '@/components/ui/LeadModal';
import CTAContent from '@/modules/cta/components/CTAContent';

export default function CtaSection() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'demo' | 'trial' | 'consulting';
  }>({ isOpen: false, type: 'trial' });

  const handleOpenTrial = () => {
    setModalState({ isOpen: true, type: 'trial' });
  };

  const handleOpenConsulting = () => {
    setModalState({ isOpen: true, type: 'consulting' });
  };

  return (
    <section id="cta" className="relative py-20 md:py-28 overflow-hidden bg-slate-50 text-slate-900 dark:bg-[#030712] dark:text-white transition-colors duration-300">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.18),transparent_70%)]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <CTAContent onOpenTrial={handleOpenTrial} onOpenConsulting={handleOpenConsulting} />
      </div>

      <LeadModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        type={modalState.type}
      />
    </section>
  );
}
