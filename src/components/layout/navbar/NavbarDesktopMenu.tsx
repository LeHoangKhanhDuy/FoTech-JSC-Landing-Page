import { Fragment, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  ECOSYSTEM_PRODUCTS,
  NAV_LINK_CLASS,
  type NavbarPageConfig,
} from "@/components/layout/navbar/navbarData";
import { NavbarProductCard } from "@/components/layout/navbar/NavbarProductCard";

export function NavbarDesktopMenu({ config }: { config: NavbarPageConfig }) {
  const [ecosystemOpen, setEcosystemOpen] = useState(false);

  return (
    <div className="relative hidden items-center gap-5 lg:gap-8 md:flex">
      {config.navLinks.map((link, index) => (
        <Fragment key={link.href}>
          <Link to={link.href} className={NAV_LINK_CLASS}>
            {link.label}
          </Link>
          {config.showProducts && index === 0 && (
            <div
              className="relative -my-3 flex items-center py-3"
              onMouseEnter={() => setEcosystemOpen(true)}
              onMouseLeave={() => setEcosystemOpen(false)}
            >
              <button
                type="button"
                onClick={() => setEcosystemOpen((prev) => !prev)}
                className={`flex cursor-pointer items-center gap-1.5 ${NAV_LINK_CLASS}`}
              >
                <span>Sản phẩm</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${ecosystemOpen ? "rotate-180 text-blue-600 dark:text-blue-400" : "text-slate-400"}`}
                  aria-hidden="true"
                />
              </button>
              {ecosystemOpen && (
                <div className="absolute left-[-7rem] top-full z-50 w-[640px] animate-fade-in pt-2">
                  <div className="rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-2xl backdrop-blur-2xl dark:border-white/15 dark:bg-[#071126]/98">
                    <div className="grid grid-cols-2 gap-3.5">
                      {ECOSYSTEM_PRODUCTS.map((product) => (
                        <NavbarProductCard
                          key={product.name}
                          product={product}
                          onClick={() => setEcosystemOpen(false)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
