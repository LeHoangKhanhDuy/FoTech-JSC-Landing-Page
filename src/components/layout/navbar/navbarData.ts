import type { ComponentType } from "react";
import { Users, Stethoscope, ShoppingBag, Home } from "lucide-react";

export interface EcosystemProduct {
  name: string;
  tagline: string;
  desc: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  color: string;
  link: string;
  isRoute: boolean;
}

export interface NavLinkItem {
  label: string;
  href: string;
}

export const ECOSYSTEM_PRODUCTS: EcosystemProduct[] = [
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

export const NAV_LINKS: NavLinkItem[] = [
  { label: "Về chúng tôi", href: "#why-trust" },
  { label: "Thiết kế website", href: "#solutions" },
  { label: "Liên hệ", href: "#contact" },
];

export const NAV_LINK_CLASS =
  "text-sm font-semibold transition-colors text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-white";
