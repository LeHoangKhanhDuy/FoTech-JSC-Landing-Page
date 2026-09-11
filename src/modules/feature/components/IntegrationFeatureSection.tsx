import { useState } from 'react';
import { integrationFeatureData } from '@/modules/feature/data/integrationNodes';
import IntegrationContent from '@/modules/feature/components/IntegrationContent';
import OrbitalMap from '@/modules/feature/components/OrbitalMap';
import ContactModal from '@/modules/contact/components/ContactModal';
import { useIntegrationAnimation } from '@/modules/feature/hooks/useIntegrationAnimation';

export default function IntegrationFeatureSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const { sectionRef, isInView } = useIntegrationAnimation();

  return (
    <section
      ref={sectionRef}
      id="integrations"
      className="relative py-20 md:py-28 bg-slate-50 dark:bg-[#030817] text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300"
    >
      <div
        className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.05),transparent_40%),radial-gradient(circle_at_20%_70%,rgba(79,70,229,0.04),transparent_35%)] dark:bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.08),transparent_40%),radial-gradient(circle_at_20%_70%,rgba(79,70,229,0.06),transparent_35%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <IntegrationContent
              key={isInView ? 'content-in' : 'content-out'}
              data={integrationFeatureData}
              onConnect={() => setModalOpen(true)}
              className={isInView ? 'animate-hero-left' : 'opacity-0'}
              style={isInView ? { animationDelay: '0.5s' } : undefined}
            />
          </div>

          <div className="lg:col-span-6 flex justify-center items-center">
            <OrbitalMap
              key={isInView ? 'orbital-in' : 'orbital-out'}
              hubName={integrationFeatureData.hubName}
              nodes={integrationFeatureData.nodes}
              className={isInView ? 'animate-hero-fade-in' : 'opacity-0'}
              style={isInView ? { animationDelay: '0.6s' } : undefined}
            />
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type="consulting"
      />
    </section>
  );
}
