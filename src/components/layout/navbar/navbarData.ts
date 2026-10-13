import type { ComponentType } from "react";
import { Users, Stethoscope, ShoppingBag, Home } from "lucide-react";

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
    link: "/?service=fomed#solutions",
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
