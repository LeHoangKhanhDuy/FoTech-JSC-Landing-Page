import {
  Globe,
  Users,
  CheckCircle2,
  Home,
  Calculator,
  Stethoscope,
  ShieldCheck,
  ShoppingBag,
  Code2,
  Layers,
  Zap,
} from "lucide-react";
import { ServiceId } from "@/modules/pricing/types/pricing-types";

interface ServiceMockPreviewProps {
  previewType: ServiceId | "custom";
}

const PREVIEW_CONFIG = {
  website: {
    gradient:
      "from-blue-50 to-indigo-50/80 dark:from-blue-900/40 dark:to-slate-900/80 border-blue-100",
    icon: Globe,
    iconColor: "text-blue-600 dark:text-blue-400",
    title: "FoTech Web Builder",
    badge: "SEO 100/100",
    badgeClass:
      "text-emerald-700 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-950/80 border-emerald-300/80 dark:border-emerald-500/30",
    middleContent: (
      <div className="grid grid-cols-3 gap-2 mt-2">
        <div className="h-2 rounded bg-blue-500/40 w-3/4" />
        <div className="h-2 rounded bg-slate-300 dark:bg-slate-700/50 w-full" />
        <div className="h-2 rounded bg-slate-300 dark:bg-slate-700/50 w-2/3" />
      </div>
    ),
    stats: [
      {
        label: "Tốc độ tải trang",
        value: "0.8s",
        colorClass: "text-blue-600 dark:text-blue-400",
      },
      {
        label: "Tỷ lệ chuyển đổi",
        value: "+345%",
        colorClass: "text-emerald-600 dark:text-emerald-400",
      },
    ],
  },
  fohrm: {
    gradient:
      "from-indigo-50 to-blue-50/80 dark:from-indigo-900/40 dark:to-slate-900/80 border-indigo-100",
    icon: Users,
    iconColor: "text-indigo-600 dark:text-indigo-400",
    title: "FoHRM AI Dashboard",
    badge: "FaceID Active",
    badgeClass:
      "text-blue-700 bg-blue-100 dark:text-blue-400 dark:bg-blue-950/80 border-blue-300/80 dark:border-blue-500/30",
    middleContent: (
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-indigo-100 dark:border-slate-800/80">
        <div>
          <span className="text-[10px] text-slate-500 dark:text-slate-400 block">
            Chấm công hôm nay
          </span>
          <span className="text-sm font-bold text-slate-900 dark:text-white">
            99.2% Nhân sự
          </span>
        </div>
        <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
      </div>
    ),
    stats: [
      {
        label: "Tự động hóa Payroll",
        value: "100% AI",
        colorClass: "text-indigo-600 dark:text-indigo-400",
      },
      {
        label: "Thời gian xử lý",
        value: "< 3 phút",
        colorClass: "text-emerald-600 dark:text-emerald-400",
      },
    ],
  },
  troovn: {
    gradient:
      "from-amber-50 to-orange-50/80 dark:from-amber-900/40 dark:to-slate-900/80 border-amber-100",
    icon: Home,
    iconColor: "text-amber-600 dark:text-amber-400",
    title: "Troo.vn PropTech Platform",
    badge: "Chính chủ 100%",
    badgeClass:
      "text-amber-700 bg-amber-100 dark:text-amber-400 dark:bg-amber-950/80 border-amber-300/80 dark:border-amber-500/30",
    middleContent: (
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-amber-100 dark:border-slate-800/80">
        <div>
          <span className="text-[10px] text-slate-500 dark:text-slate-400 block">
            Tự động chốt điện nước
          </span>
          <span className="text-sm font-bold text-slate-900 dark:text-white">
            Xuất hóa đơn Zalo/App
          </span>
        </div>
        <Calculator className="h-5 w-5 text-amber-600 dark:text-amber-400" />
      </div>
    ),
    stats: [
      {
        label: "Tỷ lệ lấp đầy phòng",
        value: "98.5%",
        colorClass: "text-amber-600 dark:text-amber-400",
      },
      {
        label: "Hợp đồng điện tử",
        value: "100% Digital",
        colorClass: "text-emerald-600 dark:text-emerald-400",
      },
    ],
  },
  fomed: {
    gradient:
      "from-rose-50 to-pink-50/80 dark:from-rose-900/40 dark:to-slate-900/80 border-rose-100",
    icon: Stethoscope,
    iconColor: "text-rose-600 dark:text-rose-400",
    title: "FoMed EMR System",
    badge: "Chuẩn Bộ Y Tế",
    badgeClass:
      "text-rose-700 bg-rose-100 dark:text-rose-400 dark:bg-rose-950/80 border-rose-300/80 dark:border-rose-500/30",
    middleContent: (
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-rose-100 dark:border-slate-800/80">
        <div>
          <span className="text-[10px] text-slate-500 dark:text-slate-400 block">
            Số bệnh án EMR
          </span>
          <span className="text-sm font-bold text-slate-900 dark:text-white">
            50.000+ Hồ sơ
          </span>
        </div>
        <ShieldCheck className="h-5 w-5 text-rose-600 dark:text-rose-400" />
      </div>
    ),
    stats: [
      {
        label: "Giảm thời gian chờ",
        value: "-90%",
        colorClass: "text-rose-600 dark:text-rose-400",
      },
      {
        label: "Kho dược tự động",
        value: "Chính xác 100%",
        colorClass: "text-emerald-600 dark:text-emerald-400",
      },
    ],
  },
  focode: {
    gradient:
      "from-emerald-50 to-teal-50/80 dark:from-emerald-900/40 dark:to-slate-900/80 border-emerald-100",
    icon: ShoppingBag,
    iconColor: "text-emerald-600 dark:text-emerald-400",
    title: "FoCode Marketplace",
    badge: "1.000+ Repos",
    badgeClass:
      "text-emerald-700 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-950/80 border-emerald-300/80 dark:border-emerald-500/30",
    middleContent: (
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-emerald-100 dark:border-slate-800/80">
        <div>
          <span className="text-[10px] text-slate-500 dark:text-slate-400 block">
            Bàn giao mã nguồn
          </span>
          <span className="text-sm font-bold text-slate-900 dark:text-white">
            Tự động 1-Click
          </span>
        </div>
        <Code2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
      </div>
    ),
    stats: [
      {
        label: "Tiết kiệm thời gian",
        value: "80% Dev",
        colorClass: "text-emerald-600 dark:text-emerald-400",
      },
      {
        label: "Kiểm duyệt Clean Code",
        value: "100% Clean",
        colorClass: "text-blue-600 dark:text-blue-400",
      },
    ],
  },
  custom: {
    gradient:
      "from-amber-50 to-yellow-50/80 dark:from-amber-900/40 dark:to-slate-900/80 border-amber-100",
    icon: Layers,
    iconColor: "text-amber-600 dark:text-amber-400",
    title: "Enterprise Custom System",
    badge: "Cloud Native",
    badgeClass:
      "text-amber-700 bg-amber-100 dark:text-amber-400 dark:bg-amber-950/80 border-amber-300/80 dark:border-amber-500/30",
    middleContent: (
      <div className="flex items-center justify-between mt-2 pt-2 border-t border-amber-100 dark:border-slate-800/80">
        <div>
          <span className="text-[10px] text-slate-500 dark:text-slate-400 block">
            Kiến trúc hệ thống
          </span>
          <span className="text-sm font-bold text-slate-900 dark:text-white">
            Microservices / ERP
          </span>
        </div>
        <Zap className="h-5 w-5 text-amber-600 dark:text-amber-400" />
      </div>
    ),
    stats: [
      {
        label: "Khả năng mở rộng",
        value: "Unlimited",
        colorClass: "text-amber-600 dark:text-amber-400",
      },
      {
        label: "Đồng hành chuyển giao",
        value: "24/7 SLA",
        colorClass: "text-emerald-600 dark:text-emerald-400",
      },
    ],
  },
};

export default function ServiceMockPreview({
  previewType,
}: ServiceMockPreviewProps) {
  const config = PREVIEW_CONFIG[previewType] || PREVIEW_CONFIG.custom;
  const Icon = config.icon;


  return (
    <div className="space-y-3">
      <div
        className={`h-28 rounded-xl border p-3.5 flex flex-col justify-between dark:border-slate-800/80 bg-gradient-to-br ${config.gradient}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon className={`h-4 w-4 ${config.iconColor}`} />
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              {config.title}
            </span>
          </div>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${config.badgeClass}`}
          >
            {config.badge}
          </span>
        </div>

        {config.middleContent}
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {config.stats.map((stat, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/80 p-3 text-xs shadow-sm"
          >
            <span className="text-slate-500 dark:text-slate-400 block text-[10px]">
              {stat.label}
            </span>
            <span className={`text-base font-extrabold ${stat.colorClass}`}>
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
