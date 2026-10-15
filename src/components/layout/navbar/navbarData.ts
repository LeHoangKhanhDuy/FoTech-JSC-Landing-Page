import type { ComponentType } from "react";
import { Users, Stethoscope, ShoppingBag, Home } from "lucide-react";
import FoMedLogo from "@/assets/fomed/FoMed_Logo.png";

export interface EcosystemProduct {
  name: string;
  tagline: string;
  desc: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  color: string;
  link: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface NavbarPageConfig {
  brandName: string;
  tagline: string;
  homePath: string;
  navLinks: NavLinkItem[];
  showProducts: boolean;
  ctaLabel: string;
  logoSrc?: string;
  accentTextClass: string;
  accentHex: string;
  accentHoverHex: string;
  accentSoftHex: string;
  ctaClass: string;
  navLinkClass: string;
  productId?: string;
}

export const FOTECH_NAVBAR_CONFIG: NavbarPageConfig = {
  brandName: "FoTech",
  tagline: "Enterprise Ecosystem",
  homePath: "/",
  navLinks: [
    { label: "Về chúng tôi", href: "/#why-trust" },
    { label: "Bảng giá thiết kế", href: "/?service=website#solutions" },
    { label: "Liên hệ", href: "/#contact" },
  ],
  showProducts: true,
  ctaLabel: "Liên hệ tư vấn",
  accentTextClass: "text-blue-600",
  accentHex: "#2563EB",
  accentHoverHex: "#1D4ED8",
  accentSoftHex: "rgba(37, 99, 235, 0.18)",
  ctaClass: "bg-blue-600 hover:bg-blue-500 shadow-blue-600/30",
  navLinkClass: "text-sm font-semibold transition-colors text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-white",
};

const PRODUCT_NAVBAR_CONFIGS: Record<string, NavbarPageConfig> = {
  "/app/fohrm": {
    brandName: "FoHRM",
    tagline: "Quản trị Nhân sự AI",
    homePath: "/app/fohrm#hero",
    navLinks: [
      { label: "Tổng quan", href: "/app/fohrm#hero" },
      { label: "Tích hợp", href: "/app/fohrm#integrations" },
      { label: "Quy trình", href: "/app/fohrm#features" },
      { label: "Bảng giá", href: "/app/fohrm#pricing" },
      { label: "Câu hỏi thường gặp", href: "/app/fohrm#faq" },
    ],
    showProducts: false,
    ctaLabel: "Dùng thử FoHRM",
    accentTextClass: "text-blue-600",
    accentHex: "#2563EB",
    accentHoverHex: "#1D4ED8",
    accentSoftHex: "rgba(37, 99, 235, 0.18)",
    ctaClass: "bg-blue-600 hover:bg-blue-500 shadow-blue-600/30",
    navLinkClass: "text-sm font-semibold transition-colors text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-white",
    productId: "fohrm",
  },
  "/app/fomed": {
    brandName: "FoMed",
    tagline: "Giải pháp quản lý phòng khám",
    homePath: "/app/fomed#hero",
    navLinks: [
      { label: "Giới thiệu", href: "/app/fomed#hero" },
      { label: "Tính năng", href: "/app/fomed#features" },
      { label: "Giải pháp", href: "/app/fomed#workflow" },
      { label: "Bảng giá", href: "/app/fomed#pricing" },
    ],
    showProducts: false,
    ctaLabel: "Dùng thử miễn phí",
    logoSrc: FoMedLogo,
    accentTextClass: "text-[#0B4F4A]",
    accentHex: "#0B4F4A",
    accentHoverHex: "#047857",
    accentSoftHex: "rgba(20, 184, 166, 0.2)",
    ctaClass: "bg-[#047857] hover:bg-[#059669] shadow-[#047857]/25",
    navLinkClass: "text-sm font-semibold transition-colors text-slate-700 hover:text-[#047857] dark:text-slate-200 dark:hover:text-[#2DD4BF]",
    productId: "fomed",
  },
};

export function getNavbarPageConfig(pathname: string): NavbarPageConfig {
  return (
    Object.entries(PRODUCT_NAVBAR_CONFIGS).find(([path]) =>
      pathname === path || pathname.startsWith(`${path}/`),
    )?.[1] ?? FOTECH_NAVBAR_CONFIG
  );
}

export const ECOSYSTEM_PRODUCTS: EcosystemProduct[] = [
  {
    name: "FoHRM",
    tagline: "Quản trị Nhân sự AI",
    desc: "Tự động hóa chấm công, tính lương & HRM",
    icon: Users,
    color: "bg-blue-600",
    link: "/app/fohrm",
  },
  {
    name: "FoMed",
    tagline: "Quản lý Phòng khám & EMR",
    desc: "Bệnh án điện tử chuẩn y tế, kho dược & khám chữa bệnh",
    icon: Stethoscope,
    color: "bg-[#0B4F4A]",
    link: "/app/fomed",
  },
  {
    name: "FoCode",
    tagline: "Sàn Thương mại Source Code",
    desc: "Chợ mua bán Source Code Web & Ứng dụng",
    icon: ShoppingBag,
    color: "bg-[#F97316]",
    link: "/?service=focode#solutions",
  },
  {
    name: "Troo.vn",
    tagline: "Nền tảng Tìm & Quản lý Trọ",
    desc: "Kết nối phòng trọ chính chủ & hợp đồng điện tử",
    icon: Home,
    color: "bg-amber-500",
    link: "/?service=troovn#solutions",
  },
];

export const NAV_LINK_CLASS =
  "text-sm font-semibold transition-colors text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-white";
