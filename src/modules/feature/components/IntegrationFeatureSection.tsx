import { useState } from 'react';
import { integrationFeatureData } from '@/modules/feature/data/integrationNodes';
import IntegrationContent from '@/modules/feature/components/IntegrationContent';
import OrbitalMap from '@/modules/feature/components/OrbitalMap';
import ContactModal from '@/modules/contact/components/ContactModal';

export default function IntegrationFeatureSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="integrations"
      className="relative py-20 md:py-28 bg-slate-950 text-slate-100 overflow-hidden border-t border-slate-900/80"
    >
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.12),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <IntegrationContent
              data={integrationFeatureData}
              onConnect={() => setModalOpen(true)}
            />
          </div>

          <div className="lg:col-span-6 flex justify-center items-center">
            <OrbitalMap
              hubName={integrationFeatureData.hubName}
              nodes={integrationFeatureData.nodes}
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
