import { X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import CorporateLogoMark from "@/components/layout/CorporateLogoMark";
import {
  ECOSYSTEM_PRODUCTS,
  type NavbarPageConfig,
} from "@/components/layout/navbar/navbarData";

interface NavbarMobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPrimaryAction: () => void;
  config: NavbarPageConfig;
}

export function NavbarMobileDrawer({
  isOpen,
  onClose,
  onOpenPrimaryAction,
  config,
}: NavbarMobileDrawerProps) {
  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`absolute inset-0 bg-slate-950/60 dark:bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      <div
        className={`absolute top-0 right-0 bottom-0 h-full w-[80vw] max-w-xs bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 p-6 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col justify-between overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
            <CorporateLogoMark config={config} />
            <button
              type="button"
              aria-label="Đóng menu"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 cursor-pointer"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 space-y-1.5">
            {config.showProducts && <>
              <div className="px-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Sản phẩm FoTech
              </div>
              {ECOSYSTEM_PRODUCTS.map((prod) => {
              return (
                <Link
                  key={prod.name}
                  to={prod.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <span className={`h-2 w-2 rounded-full ${prod.color}`} />
                  <span>{prod.name}</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">
                    ({prod.tagline})
                  </span>
                </Link>
              );
            })}
            </>}

            {config.showProducts && <div className="pt-4 px-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Điều hướng
            </div>}
            {config.navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={onClose}
                className="block rounded-xl px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenPrimaryAction();
            }}
            className={`w-full ${config.ctaClass} text-white font-bold py-3 px-5 rounded-xl shadow-lg flex items-center justify-center gap-2 text-xs cursor-pointer`}
          >
            <span>{config.ctaLabel}</span>
            <ArrowUpRight className="h-4 w-4 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
