import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { servicesTabData } from '@/modules/pricing/data/pricing-data';
import { ServiceId } from '@/modules/pricing/types/pricing-types';

export function useServicesSection() {
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

  const activeTabData = useMemo(() => {
    return servicesTabData.find((tab) => tab.id === activeTabId) || servicesTabData[0];
  }, [activeTabId]);

  const handleSelectTab = useCallback((newId: ServiceId) => {
    setActiveTabId((currentId) => {
      if (newId === currentId) return currentId;

      const currentIndex = servicesTabData.findIndex((tab) => tab.id === currentId);
      const newIndex = servicesTabData.findIndex((tab) => tab.id === newId);

      const dir = newIndex >= currentIndex ? 'right' : 'left';
      setSlideDirection(dir);
      return newId;
    });
  }, []);

  const handleOpenModal = useCallback((type: 'demo' | 'trial' | 'consulting' = 'consulting') => {
    setModalState({ isOpen: true, type });
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  const handleMouseEnter = useCallback(() => {
    isHoveredRef.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false;
  }, []);

  return {
    activeTabId,
    activeTabData,
    slideDirection,
    modalState,
    handleSelectTab,
    handleOpenModal,
    handleCloseModal,
    handleMouseEnter,
    handleMouseLeave,
  };
}
