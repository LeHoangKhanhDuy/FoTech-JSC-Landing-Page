import { useState, useEffect, useCallback, useRef } from 'react';
import ContactModal from '@/modules/contact/components/ContactModal';
import ServicesHeader from '@/modules/pricing/components/ServicesHeader';
import ServiceTabNav from '@/modules/pricing/components/ServiceTabNav';
import ServiceTabCard from '@/modules/pricing/components/ServiceTabCard';
import { servicesTabData } from '@/modules/pricing/data/pricing-data';
import { ServiceId } from '@/modules/pricing/types/pricing-types';

export default function ServicesSection() {
  const [activeTabId, setActiveTabId] = useState<ServiceId>('website');
  const [slideDirection, setSlideDirection] = useState<'right' | 'left'>('right');
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'demo' | 'trial' | 'consulting';
  }>({ isOpen: false, type: 'consulting' });

  const isHoveredRef = useRef(false);
  const isModalOpenRef = useRef(false);

  useEffect(() => {
    isModalOpenRef.current = modalState.isOpen;
  }, [modalState.isOpen]);

  const advanceToNextTab = useCallback(() => {
    setActiveTabId((currentId) => {
      const currentIndex = servicesTabData.findIndex((tab) => tab.id === currentId);
      const nextIndex = (currentIndex + 1) % servicesTabData.length;
      setSlideDirection('right');
      return servicesTabData[nextIndex].id;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        !isHoveredRef.current &&
        !isModalOpenRef.current &&
        typeof document !== 'undefined' &&
        document.visibilityState === 'visible'
      ) {
        advanceToNextTab();
      }
    }, 5000);

    const handleWindowBlurOrLeave = () => {
      isHoveredRef.current = false;
    };

    window.addEventListener('blur', handleWindowBlurOrLeave);
    document.addEventListener('visibilitychange', handleWindowBlurOrLeave);

    return () => {
      clearInterval(interval);
      window.removeEventListener('blur', handleWindowBlurOrLeave);
      document.removeEventListener('visibilitychange', handleWindowBlurOrLeave);
    };
  }, [advanceToNextTab]);

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
      className="relative py-16 md:py-24 overflow-hidden bg-[#020817] text-white animate-fade-in-up"
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
          onMouseEnter={() => {
            isHoveredRef.current = true;
          }}
          onMouseLeave={() => {
            isHoveredRef.current = false;
          }}
        />

        <ServiceTabCard
          data={activeTabData}
          slideDirection={slideDirection}
          onOpenModal={() => setModalState({ isOpen: true, type: 'consulting' })}
          onMouseEnter={() => {
            isHoveredRef.current = true;
          }}
          onMouseLeave={() => {
            isHoveredRef.current = false;
          }}
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
