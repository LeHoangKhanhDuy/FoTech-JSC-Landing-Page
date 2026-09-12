import { X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import CorporateLogoMark from "@/components/layout/CorporateLogoMark";
import {
  ECOSYSTEM_PRODUCTS,
  NAV_LINKS,
} from "@/components/layout/navbar/navbarData";

interface NavbarMobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsulting: () => void;
}

export function NavbarMobileDrawer({
  isOpen,
  onClose,
  onOpenConsulting,
}: NavbarMobileDrawerProps) {
  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
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
            <CorporateLogoMark />
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
            <div className="px-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Sản phẩm FoTech
            </div>
            {ECOSYSTEM_PRODUCTS.map((prod) => {
              if (prod.isRoute) {
                return (
                  <Link
                    key={prod.name}
                    to={prod.link}
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
              }
              return (
                <a
                  key={prod.name}
                  href={prod.link}
                  onClick={onClose}
                  className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <span className={`h-2 w-2 rounded-full ${prod.color}`} />
                  <span>{prod.name}</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-normal">
                    ({prod.tagline})
                  </span>
                </a>
              );
            })}

            <div className="pt-4 px-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Điều hướng
            </div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="block rounded-xl px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenConsulting();
            }}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-5 rounded-xl shadow-lg flex items-center justify-center gap-2 text-xs cursor-pointer"
          >
            <span>Liên hệ tư vấn</span>
            <ArrowUpRight className="h-4 w-4 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
