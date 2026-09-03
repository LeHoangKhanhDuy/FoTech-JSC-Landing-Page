import { useState, useEffect, useCallback } from 'react';
import ContactModal from '@/modules/contact/components/ContactModal';
import ServicesHeader from '@/modules/pricing/components/ServicesHeader';
import ServiceTabNav from '@/modules/pricing/components/ServiceTabNav';
import ServiceTabCard from '@/modules/pricing/components/ServiceTabCard';
import { servicesTabData } from '@/modules/pricing/data/pricing-data';
import { ServiceId } from '@/modules/pricing/types/pricing-types';

export default function ServicesSection() {
  const [activeTabId, setActiveTabId] = useState<ServiceId>('website');
  const [slideDirection, setSlideDirection] = useState<'right' | 'left'>('right');
  const [isPaused, setIsPaused] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'demo' | 'trial' | 'consulting';
  }>({ isOpen: false, type: 'consulting' });

  const advanceToNextTab = useCallback(() => {
    setActiveTabId((currentId) => {
      const currentIndex = servicesTabData.findIndex((tab) => tab.id === currentId);
      const nextIndex = (currentIndex + 1) % servicesTabData.length;
      setSlideDirection('right');
      return servicesTabData[nextIndex].id;
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      advanceToNextTab();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, advanceToNextTab]);

  const activeTabData =
    servicesTabData.find((tab) => tab.id === activeTabId) || servicesTabData[0];

  const handleSelectTab = (newId: ServiceId) => {
    if (newId === activeTabId) return;
    const currentIndex = servicesTabData.findIndex((tab) => tab.id === activeTabId);
    const newIndex = servicesTabData.findIndex((tab) => tab.id === newId);
    const dir = newIndex >= currentIndex ? 'right' : 'left';
    setSlideDirection(dir);
    setActiveTabId(newId);
  };

  return (
    <section
      id="solutions"
      className="relative py-16 md:py-24 overflow-hidden bg-[#020817] text-white border-t border-slate-800/80 animate-fade-in-up"
    >
      <div
        className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.08),transparent_40%),radial-gradient(circle_at_20%_70%,rgba(79,70,229,0.06),transparent_35%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <ServicesHeader />

        <ServiceTabNav
          tabs={servicesTabData}
          activeTabId={activeTabId}
          onSelectTab={handleSelectTab}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        />

        <ServiceTabCard
          data={activeTabData}
          slideDirection={slideDirection}
          onOpenModal={() => setModalState({ isOpen: true, type: 'consulting' })}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        />
      </div>

      <ContactModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        type={modalState.type}
      />
    </section>
  );
}
