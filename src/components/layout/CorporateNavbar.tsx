import { useState, useEffect, lazy, Suspense } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import CorporateLogoMark from "@/components/layout/CorporateLogoMark";
import { NavbarDesktopMenu } from "@/components/layout/navbar/NavbarDesktopMenu";
import { NavbarMobileDrawer } from "@/components/layout/navbar/NavbarMobileDrawer";

const ContactModal = lazy(
  () => import("@/modules/contact/components/ContactModal"),
);

export default function CorporateNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "demo" | "trial" | "consulting";
  }>({ isOpen: false, type: "consulting" });

  const openModal = (type: "demo" | "trial" | "consulting") => {
    setModalState({ isOpen: true, type });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-3 sm:top-4 z-50 px-4 sm:px-6 lg:px-8 pointer-events-none">
        <nav
          className={`pointer-events-auto mx-auto flex h-16 sm:h-20 max-w-[1380px] items-center justify-between px-6 sm:px-8 rounded-2xl transition-all duration-300 ${
            scrolled
              ? "border border-slate-200/90 bg-white/90 text-slate-900 shadow-xl shadow-slate-900/5 backdrop-blur-2xl dark:border-white/15 dark:bg-[#061129]/95 dark:text-white dark:shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
              : "border border-transparent bg-transparent shadow-none backdrop-blur-none"
          }`}
        >
          <CorporateLogoMark />

          <NavbarDesktopMenu />

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => openModal("consulting")}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-600/30 flex items-center gap-2 text-sm transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Liên hệ tư vấn</span>
              <ArrowUpRight className="h-4 w-4 text-white" aria-hidden="true" />
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-label="Mở menu"
              onClick={() => setIsOpen(true)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border shadow-md cursor-pointer transition-colors ${
                scrolled
                  ? "border-slate-200 bg-white text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                  : "border-slate-200/80 bg-white dark:bg-slate-900 text-slate-800 dark:text-white shadow-sm"
              }`}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <NavbarMobileDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onOpenConsulting={() => openModal("consulting")}
      />

      {modalState.isOpen && (
        <Suspense fallback={null}>
          <ContactModal
            isOpen={modalState.isOpen}
            onClose={() => setModalState({ ...modalState, isOpen: false })}
            type={modalState.type}
          />
        </Suspense>
      )}
    </>
  );
}
