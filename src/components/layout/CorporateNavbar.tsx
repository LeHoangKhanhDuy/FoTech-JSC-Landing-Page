import { useState, useEffect } from "react";
import {
  Menu,
  Moon,
  Sun,
  X,
  ChevronDown,
  Users,
  Stethoscope,
  ShoppingBag,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import CorporateLogoMark from "@/components/layout/CorporateLogoMark";
import LeadModal from "@/components/ui/LeadModal";
import { useDarkMode } from "@/hooks/useDarkMode";

const ecosystemProducts = [
  {
    name: "FoHRM",
    tagline: "Quản trị Nhân sự AI",
    desc: "Tự động hóa chấm công, tính lương và trợ lý AI FINA.",
    icon: Users,
    color: "bg-blue-600",
    link: "/fohrm",
    isRoute: true,
  },
  {
    name: "FoMed",
    tagline: "Quản lý Phòng khám",
    desc: "Hồ sơ bệnh án điện tử, lịch khám & doanh thu.",
    icon: Stethoscope,
    color: "bg-emerald-600",
    link: "#fomed",
    isRoute: false,
  },
  {
    name: "FoCode",
    tagline: "Thương mại Điện tử",
    desc: "Website, app bán hàng & bán hàng đa kênh.",
    icon: ShoppingBag,
    color: "bg-indigo-600",
    link: "#focode",
    isRoute: false,
  },
  {
    name: "Troo.vn",
    tagline: "Tìm kiếm & Quản lý Trọ",
    desc: "Kết nối phòng trọ chính chủ & hợp đồng điện tử.",
    icon: Home,
    color: "bg-[#c5b487]",
    link: "#troovn",
    isRoute: false,
  },
];

export default function CorporateNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const { isDark, toggleDarkMode } = useDarkMode();

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "demo" | "trial" | "login" | "consulting";
  }>({ isOpen: false, type: "consulting" });

  const openModal = (type: "demo" | "trial" | "login" | "consulting") => {
    setModalState({ isOpen: true, type });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
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
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/90"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <CorporateLogoMark />

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            {/* Dropdown Menu for Ecosystem */}
            <div
              className="relative"
              onMouseEnter={() => setEcosystemOpen(true)}
              onMouseLeave={() => setEcosystemOpen(false)}
            >
              <button
                type="button"
                onClick={() => setEcosystemOpen(!ecosystemOpen)}
                className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition hover:text-blue-600 dark:text-slate-200 dark:hover:text-white"
              >
                <span>Hệ sinh thái</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    ecosystemOpen ? "rotate-180 text-blue-600" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Dropdown Panel */}
              {ecosystemOpen && (
                <div className="absolute top-full -left-4 mt-2 w-96 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900 animate-fade-in">
                  <div className="mb-2 px-3 pt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Sản phẩm B2B Digital Transformation
                  </div>
                  <div className="space-y-1">
                    {ecosystemProducts.map((prod) => {
                      const Icon = prod.icon;

                      const content = (
                        <div className="group flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-slate-50 dark:hover:bg-slate-800/80">
                          <div
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${prod.color} text-white shadow-md`}
                          >
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                                {prod.name}
                              </span>
                              <span className="text-[10px] font-medium text-slate-500">
                                {prod.tagline}
                              </span>
                            </div>
                            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                              {prod.desc}
                            </p>
                          </div>
                        </div>
                      );

                      if (prod.isRoute) {
                        return (
                          <Link
                            key={prod.name}
                            to={prod.link}
                            onClick={() => setEcosystemOpen(false)}
                          >
                            {content}
                          </Link>
                        );
                      }

                      return (
                        <a
                          key={prod.name}
                          href={prod.link}
                          onClick={() => setEcosystemOpen(false)}
                        >
                          {content}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#solutions"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-white"
            >
              Giải pháp
            </a>
            <a
              href="#why-trust"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-white"
            >
              Về chúng tôi
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-white"
            >
              Liên hệ
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              aria-label="Đổi chế độ sáng tối"
              onClick={toggleDarkMode}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-blue-500/40 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            >
              {isDark ? (
                <Sun className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
            </button>

            <Button
              variant="primary"
              icon={null}
              onClick={() => openModal("consulting")}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              Liên hệ tư vấn
            </Button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-label="Mở menu"
              onClick={() => setIsOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Slide-over Drawer & Backdrop (3/4 width slide from right + blurred backdrop) */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Blurred Backdrop for the remaining 1/4 area */}
        <div
          className={`absolute inset-0 bg-slate-950/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Right Drawer Panel (3/4 screen width) */}
        <div
          className={`absolute top-0 right-0 bottom-0 h-full w-[75vw] max-w-xs sm:w-80 bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out dark:bg-slate-900 flex flex-col justify-between overflow-y-auto ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            {/* Drawer Top Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <CorporateLogoMark />
              <button
                type="button"
                aria-label="Đóng menu"
                onClick={() => setIsOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Ecosystem Products List */}
            <div className="mt-6 space-y-4">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Sản phẩm Hệ sinh thái
              </div>
              <div className="space-y-1">
                {ecosystemProducts.map((prod) => {
                  const Icon = prod.icon;
                  const content = (
                    <div className="flex items-center gap-3 rounded-xl p-2.5 transition hover:bg-slate-50 dark:hover:bg-slate-800/80">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${prod.color} text-white shadow-sm`}
                      >
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">
                          {prod.name}
                        </span>
                        <span className="text-[10px] text-slate-500 line-clamp-1">
                          {prod.tagline}
                        </span>
                      </div>
                    </div>
                  );

                  if (prod.isRoute) {
                    return (
                      <Link
                        key={prod.name}
                        to={prod.link}
                        onClick={() => setIsOpen(false)}
                      >
                        {content}
                      </Link>
                    );
                  }

                  return (
                    <a
                      key={prod.name}
                      href={prod.link}
                      onClick={() => setIsOpen(false)}
                    >
                      {content}
                    </a>
                  );
                })}
              </div>

              {/* General Nav Links */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                <a
                  href="#solutions"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  Giải pháp
                </a>
                <a
                  href="#why-trust"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  Về chúng tôi
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  Liên hệ
                </a>
              </div>
            </div>
          </div>

          {/* Drawer Bottom Actions & Dark Mode */}
          <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs font-semibold text-slate-500">Giao diện</span>
              <button
                type="button"
                aria-label="Đổi chế độ sáng tối"
                onClick={toggleDarkMode}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-200"
              >
                {isDark ? (
                  <Sun className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Moon className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
            </div>

            <Button
              variant="primary"
              icon={null}
              onClick={() => {
                setIsOpen(false);
                openModal("consulting");
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600"
            >
              Liên hệ tư vấn
            </Button>
          </div>
        </div>
      </div>

      <LeadModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        type={modalState.type}
      />
    </>
  );
}
