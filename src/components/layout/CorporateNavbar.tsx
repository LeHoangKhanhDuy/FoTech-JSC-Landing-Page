import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Users,
  Stethoscope,
  ShoppingBag,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";
import CorporateLogoMark from "@/components/layout/CorporateLogoMark";
import ContactModal from "@/modules/contact/components/ContactModal";
import StarBorder from "@/components/ui/StarBorder";

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
    tagline: "Quản lý Phòng khám & EMR",
    desc: "Bệnh án điện tử chuẩn y tế, kho dược & lịch khám.",
    icon: Stethoscope,
    color: "bg-rose-500",
    link: "/#solutions",
    isRoute: false,
  },
  {
    name: "FoCode",
    tagline: "Sàn Thương mại Source Code",
    desc: "Chợ mua bán Source Code Web & Mobile App.",
    icon: ShoppingBag,
    color: "bg-emerald-500",
    link: "/#solutions",
    isRoute: false,
  },
  {
    name: "Troo.vn",
    tagline: "Nền tảng Tìm & Quản lý Trọ",
    desc: "Kết nối phòng trọ chính chủ & hợp đồng điện tử.",
    icon: Home,
    color: "bg-amber-500",
    link: "/#solutions",
    isRoute: false,
  },
];

export default function CorporateNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);

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
            ? "border-b border-slate-800/80 bg-slate-950/90 shadow-xl backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <CorporateLogoMark />

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            <div
              className="relative py-2"
              onMouseEnter={() => setEcosystemOpen(true)}
              onMouseLeave={() => setEcosystemOpen(false)}
            >
              <button
                type="button"
                onClick={() => setEcosystemOpen(!ecosystemOpen)}
                className="flex items-center gap-1.5 text-sm font-semibold text-slate-200 hover:text-white transition-colors py-1"
              >
                <span>Sản phẩm</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    ecosystemOpen ? "rotate-180 text-blue-500" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {ecosystemOpen && (
                <div className="absolute top-full -left-4 pt-2 w-96 z-50">
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-3 shadow-2xl backdrop-blur-xl animate-fade-in">
                    <div className="mb-2 px-3 pt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Danh mục Sản phẩm FoTech
                    </div>
                    <div className="space-y-1">
                      {ecosystemProducts.map((prod) => {
                        const Icon = prod.icon;

                        const content = (
                          <div className="group flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-slate-800/80">
                            <div
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${prod.color} text-white shadow-md`}
                            >
                              <Icon className="h-4 w-4" aria-hidden="true" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-white group-hover:text-blue-400">
                                  {prod.name}
                                </span>
                                <span className="text-[10px] font-medium text-slate-400">
                                  {prod.tagline}
                                </span>
                              </div>
                              <p className="mt-0.5 text-xs text-slate-400 line-clamp-1">
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
                </div>
              )}
            </div>

            <a
              href="#solutions"
              className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Dịch vụ
            </a>
            <a
              href="#why-trust"
              className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Về chúng tôi
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Liên hệ
            </a>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <StarBorder
              as="button"
              onClick={() => openModal("consulting")}
              color="white"
              speed="6s"
              backgroundColor="#2563eb"
              textColor="#ffffff"
              borderColor="#3b82f6"
              className="font-bold text-xs cursor-pointer transition-transform hover:scale-[1.02]"
            >
              Liên hệ tư vấn
            </StarBorder>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-label="Mở menu"
              onClick={() => setIsOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-white"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Slide-over Drawer & Backdrop */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 bottom-0 h-full w-[80vw] max-w-xs bg-slate-900 p-6 shadow-2xl transition-transform duration-300 ease-in-out flex flex-col justify-between overflow-y-auto ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <CorporateLogoMark />
              <button
                type="button"
                aria-label="Đóng menu"
                onClick={() => setIsOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-800 text-slate-200 hover:bg-slate-700"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 space-y-1.5">
              <div className="px-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Sản phẩm FoTech
              </div>
              {ecosystemProducts.map((prod) => {
                if (prod.isRoute) {
                  return (
                    <Link
                      key={prod.name}
                      to={prod.link}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold text-slate-200 hover:bg-slate-800"
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${prod.color}`}
                      />
                      <span>{prod.name}</span>
                      <span className="text-[10px] text-slate-400 font-normal">
                        ({prod.tagline})
                      </span>
                    </Link>
                  );
                }
                return (
                  <a
                    key={prod.name}
                    href={prod.link}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold text-slate-200 hover:bg-slate-800"
                  >
                    <span className={`h-2 w-2 rounded-full ${prod.color}`} />
                    <span>{prod.name}</span>
                    <span className="text-[10px] text-slate-400 font-normal">
                      ({prod.tagline})
                    </span>
                  </a>
                );
              })}

              <div className="pt-4 px-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Điều hướng
              </div>
              <a
                href="#solutions"
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-3 py-2 text-xs font-bold text-slate-200 hover:bg-slate-800"
              >
                Dịch vụ
              </a>
              <a
                href="#why-trust"
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-3 py-2 text-xs font-bold text-slate-200 hover:bg-slate-800"
              >
                Về chúng tôi
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block rounded-xl px-3 py-2 text-xs font-bold text-slate-200 hover:bg-slate-800"
              >
                Liên hệ
              </a>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800 space-y-3">
            <StarBorder
              as="button"
              onClick={() => {
                setIsOpen(false);
                openModal("consulting");
              }}
              color="white"
              speed="6s"
              backgroundColor="#2563eb"
              textColor="#ffffff"
              borderColor="#3b82f6"
              className="w-full font-bold text-xs cursor-pointer"
            >
              Liên hệ tư vấn
            </StarBorder>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        type={modalState.type}
      />
    </>
  );
}
