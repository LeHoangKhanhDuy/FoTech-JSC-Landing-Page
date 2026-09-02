import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Users,
  Stethoscope,
  ShoppingBag,
  Home,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import CorporateLogoMark from "@/components/layout/CorporateLogoMark";
import ContactModal from "@/modules/contact/components/ContactModal";

const ecosystemProducts = [
  {
    name: "FoHRM",
    tagline: "Quản trị Nhân sự AI",
    desc: "Tự động hóa chấm công, tính lương & HRM",
    icon: Users,
    color: "bg-blue-600",
    link: "/fohrm",
    isRoute: true,
  },
  {
    name: "FoMed",
    tagline: "Quản lý Phòng khám & EMR",
    desc: "Bệnh án điện tử chuẩn y tế, kho dược & khám chữa bệnh",
    icon: Stethoscope,
    color: "bg-rose-500",
    link: "/#solutions",
    isRoute: false,
  },
  {
    name: "FoCode",
    tagline: "Sàn Thương mại Source Code",
    desc: "Chợ mua bán Source Code Web & Ứng dụng",
    icon: ShoppingBag,
    color: "bg-emerald-500",
    link: "/#solutions",
    isRoute: false,
  },
  {
    name: "Troo.vn",
    tagline: "Nền tảng Tìm & Quản lý Trọ",
    desc: "Kết nối phòng trọ chính chủ & hợp đồng điện tử",
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
      <header className="fixed inset-x-0 top-3 sm:top-4 z-50 px-4 sm:px-6 lg:px-8 pointer-events-none">
        <nav
          className={`pointer-events-auto mx-auto flex h-16 sm:h-20 max-w-[1380px] items-center justify-between px-6 sm:px-8 rounded-2xl transition-all duration-300 ${
            scrolled
              ? "border border-white/15 bg-[#061129]/95 shadow-[0_10px_40px_rgba(0,0,0,0.8)] backdrop-blur-2xl"
              : "border border-transparent bg-transparent shadow-none backdrop-blur-none"
          }`}
        >
          <CorporateLogoMark />

          <div className="hidden md:flex items-center gap-8 relative">
            <a
              href="#why-trust"
              className="text-sm font-semibold text-slate-200 hover:text-white transition-colors"
            >
              Về chúng tôi
            </a>

            <div
              className="relative py-3 -my-3 flex items-center"
              onMouseEnter={() => setEcosystemOpen(true)}
              onMouseLeave={() => setEcosystemOpen(false)}
            >
              <button
                type="button"
                onClick={() => setEcosystemOpen(!ecosystemOpen)}
                className="flex items-center gap-1.5 text-sm font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer"
              >
                <span>Sản phẩm</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    ecosystemOpen
                      ? "rotate-180 text-blue-400"
                      : "text-slate-400"
                  }`}
                  aria-hidden="true"
                />
              </button>

              {ecosystemOpen && (
                <div className="absolute top-full pt-2 -left-28 w-[640px] z-50 animate-fade-in">
                  <div className="rounded-2xl border border-white/15 bg-[#071126]/98 p-5 shadow-2xl backdrop-blur-2xl">
                    <div className="grid grid-cols-2 gap-3.5">
                      {ecosystemProducts.map((prod) => {
                        const Icon = prod.icon;

                        const content = (
                          <div className="group relative flex items-center gap-3.5 rounded-xl border border-transparent bg-slate-900/40 p-3 hover:border-white/20 hover:bg-slate-800/90 transition-all duration-300 cursor-pointer shadow-sm">
                            <div
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${prod.color} text-white shadow-md group-hover:scale-105 transition-transform duration-300`}
                            >
                              <Icon className="h-5 w-5" aria-hidden="true" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-sm font-extrabold text-white group-hover:text-slate-100 transition-colors block">
                                {prod.name}
                              </span>
                              <p className="text-xs font-semibold text-slate-300 mt-0.5">
                                {prod.tagline}
                              </p>
                              <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
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
              className="text-sm font-semibold text-slate-200 hover:text-white transition-colors"
            >
              Thiết kế website
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-slate-200 hover:text-white transition-colors"
            >
              Liên hệ
            </a>
          </div>

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
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-white shadow-lg"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

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
                      <span className={`h-2 w-2 rounded-full ${prod.color}`} />
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
                Thiết kế website
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
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                openModal("consulting");
              }}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-5 rounded-xl shadow-lg flex items-center justify-center gap-2 text-xs"
            >
              <span>Liên hệ tư vấn</span>
              <ArrowUpRight className="h-4 w-4 text-white" aria-hidden="true" />
            </button>
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
