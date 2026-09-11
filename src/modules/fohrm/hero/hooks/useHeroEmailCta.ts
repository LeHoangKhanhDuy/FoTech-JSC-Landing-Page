import { useState, useCallback } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface UseHeroEmailCtaOptions {
  defaultEmail?: string;
}

export function useHeroEmailCta({ defaultEmail = "" }: UseHeroEmailCtaOptions = {}) {
  const [email, setEmail] = useState(defaultEmail);
  const [emailError, setEmailError] = useState("");
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "demo" | "trial";
  }>({
    isOpen: false,
    type: "trial",
  });

  const handleEmailChange = useCallback((value: string) => {
    setEmail(value);
    setEmailError("");
  }, []);

  const handleEmailSubmit = useCallback(
    (e?: React.FormEvent) => {
      if (e) {
        e.preventDefault();
      }

      const trimmedEmail = email.trim();
      if (trimmedEmail && !EMAIL_REGEX.test(trimmedEmail)) {
        setEmailError("Vui lòng nhập địa chỉ email hợp lệ");
        return;
      }

      setEmailError("");
      setModalState({
        isOpen: true,
        type: "trial",
      });
    },
    [email]
  );

  const openDemoModal = useCallback(() => {
    setModalState({
      isOpen: true,
      type: "demo",
    });
  }, []);

  const closeModal = useCallback(() => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  return {
    email,
    emailError,
    modalState,
    handleEmailChange,
    handleEmailSubmit,
    openDemoModal,
    closeModal,
  };
}
