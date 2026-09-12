import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  ECOSYSTEM_PRODUCTS,
  NAV_LINK_CLASS,
} from "@/components/layout/navbar/navbarData";
import { NavbarProductCard } from "@/components/layout/navbar/NavbarProductCard";

export function NavbarDesktopMenu() {
  const [ecosystemOpen, setEcosystemOpen] = useState(false);

  return (
    <div className="hidden md:flex items-center gap-8 relative">
      <a href="#why-trust" className={NAV_LINK_CLASS}>
        Về chúng tôi
      </a>

      <div
        className="relative py-3 -my-3 flex items-center"
        onMouseEnter={() => setEcosystemOpen(true)}
        onMouseLeave={() => setEcosystemOpen(false)}
      >
        <button
          type="button"
          onClick={() => setEcosystemOpen((prev) => !prev)}
          className={`flex items-center gap-1.5 cursor-pointer ${NAV_LINK_CLASS}`}
        >
          <span>Sản phẩm</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              ecosystemOpen
                ? "rotate-180 text-blue-600 dark:text-blue-400"
                : "text-slate-400"
            }`}
            aria-hidden="true"
          />
        </button>

        {ecosystemOpen && (
          <div className="absolute top-full pt-2 -left-28 w-[640px] z-50 animate-fade-in">
            <div className="rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-2xl backdrop-blur-2xl dark:border-white/15 dark:bg-[#071126]/98">
              <div className="grid grid-cols-2 gap-3.5">
                {ECOSYSTEM_PRODUCTS.map((prod) => (
                  <NavbarProductCard
                    key={prod.name}
                    product={prod}
                    onClick={() => setEcosystemOpen(false)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <a href="#solutions" className={NAV_LINK_CLASS}>
        Thiết kế website
      </a>
      <a href="#contact" className={NAV_LINK_CLASS}>
        Liên hệ
      </a>
    </div>
  );
}
