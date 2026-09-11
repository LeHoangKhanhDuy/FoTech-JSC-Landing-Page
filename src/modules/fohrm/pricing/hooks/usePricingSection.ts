import { useState, useCallback } from 'react';

export function usePricingSection() {
  const [isYearly, setIsYearly] = useState(true);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'demo' | 'trial' | 'consulting';
  }>({
    isOpen: false,
    type: 'trial',
  });

  const toggleYearly = useCallback(() => {
    setIsYearly((prev) => !prev);
  }, []);

  const handleOpenModal = useCallback((type: 'demo' | 'trial' | 'consulting' = 'trial') => {
    setModalState({ isOpen: true, type });
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  return {
    isYearly,
    setIsYearly,
    toggleYearly,
    modalState,
    handleOpenModal,
    handleCloseModal,
  };
}
