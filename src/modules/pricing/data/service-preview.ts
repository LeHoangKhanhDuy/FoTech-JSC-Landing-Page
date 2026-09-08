import { ComponentType } from 'react';
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
} from 'lucide-react';
import { ServiceId } from '@/modules/pricing/types/pricing-types';

export interface ServicePreviewStat {
  label: string;
  value: string;
  colorClass: string;
}

export interface ServicePreviewIndicator {
  type: 'bars' | 'detail';
  detailTitle?: string;
  detailValue?: string;
  detailIcon?: ComponentType<{ className?: string }>;
}

export interface ServicePreviewConfigItem {
  gradient: string;
  icon: ComponentType<{ className?: string }>;
  iconColor: string;
  title: string;
  badge: string;
  badgeClass: string;
  indicator: ServicePreviewIndicator;
  stats: ServicePreviewStat[];
}

export const SERVICE_PREVIEW_CONFIGS: Record<ServiceId, ServicePreviewConfigItem> = {
  website: {
    gradient:
      'from-blue-50 to-indigo-50/80 dark:from-blue-900/40 dark:to-slate-900/80 border-blue-100',
    icon: Globe,
    iconColor: 'text-blue-600 dark:text-blue-400',
    title: 'FoTech Web Builder',
    badge: 'SEO 100/100',
    badgeClass:
      'text-emerald-700 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-950/80 border-emerald-300/80 dark:border-emerald-500/30',
    indicator: {
      type: 'bars',
    },
    stats: [
      {
        label: 'Tốc độ tải trang',
        value: '0.8s',
        colorClass: 'text-blue-600 dark:text-blue-400',
      },
      {
        label: 'Tỷ lệ chuyển đổi',
        value: '+345%',
        colorClass: 'text-emerald-600 dark:text-emerald-400',
      },
    ],
  },
  fohrm: {
    gradient:
      'from-indigo-50 to-blue-50/80 dark:from-indigo-900/40 dark:to-slate-900/80 border-indigo-100',
    icon: Users,
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    title: 'FoHRM AI Dashboard',
    badge: 'FaceID Active',
    badgeClass:
      'text-blue-700 bg-blue-100 dark:text-blue-400 dark:bg-blue-950/80 border-blue-300/80 dark:border-blue-500/30',
    indicator: {
      type: 'detail',
      detailTitle: 'Chấm công hôm nay',
      detailValue: '99.2% Nhân sự',
      detailIcon: CheckCircle2,
    },
    stats: [
      {
        label: 'Tự động hóa Payroll',
        value: '100% AI',
        colorClass: 'text-indigo-600 dark:text-indigo-400',
      },
      {
        label: 'Thời gian xử lý',
        value: '< 3 phút',
        colorClass: 'text-emerald-600 dark:text-emerald-400',
      },
    ],
  },
  troovn: {
    gradient:
      'from-amber-50 to-orange-50/80 dark:from-amber-900/40 dark:to-slate-900/80 border-amber-100',
    icon: Home,
    iconColor: 'text-amber-600 dark:text-amber-400',
    title: 'Troo.vn PropTech Platform',
    badge: 'Chính chủ 100%',
    badgeClass:
      'text-amber-700 bg-amber-100 dark:text-amber-400 dark:bg-amber-950/80 border-amber-300/80 dark:border-amber-500/30',
    indicator: {
      type: 'detail',
      detailTitle: 'Tự động chốt điện nước',
      detailValue: 'Xuất hóa đơn Zalo/App',
      detailIcon: Calculator,
    },
    stats: [
      {
        label: 'Tỷ lệ lấp đầy phòng',
        value: '98.5%',
        colorClass: 'text-amber-600 dark:text-amber-400',
      },
      {
        label: 'Hợp đồng điện tử',
        value: '100% Digital',
        colorClass: 'text-emerald-600 dark:text-emerald-400',
      },
    ],
  },
  fomed: {
    gradient:
      'from-rose-50 to-pink-50/80 dark:from-rose-900/40 dark:to-slate-900/80 border-rose-100',
    icon: Stethoscope,
    iconColor: 'text-rose-600 dark:text-rose-400',
    title: 'FoMed EMR System',
    badge: 'Chuẩn Bộ Y Tế',
    badgeClass:
      'text-rose-700 bg-rose-100 dark:text-rose-400 dark:bg-rose-950/80 border-rose-300/80 dark:border-rose-500/30',
    indicator: {
      type: 'detail',
      detailTitle: 'Số bệnh án EMR',
      detailValue: '50.000+ Hồ sơ',
      detailIcon: ShieldCheck,
    },
    stats: [
      {
        label: 'Giảm thời gian chờ',
        value: '-90%',
        colorClass: 'text-rose-600 dark:text-rose-400',
      },
      {
        label: 'Kho dược tự động',
        value: 'Chính xác 100%',
        colorClass: 'text-emerald-600 dark:text-emerald-400',
      },
    ],
  },
  focode: {
    gradient:
      'from-emerald-50 to-teal-50/80 dark:from-emerald-900/40 dark:to-slate-900/80 border-emerald-100',
    icon: ShoppingBag,
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    title: 'FoCode Marketplace',
    badge: '1.000+ Repos',
    badgeClass:
      'text-emerald-700 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-950/80 border-emerald-300/80 dark:border-emerald-500/30',
    indicator: {
      type: 'detail',
      detailTitle: 'Bàn giao mã nguồn',
      detailValue: 'Tự động 1-Click',
      detailIcon: Code2,
    },
    stats: [
      {
        label: 'Tiết kiệm thời gian',
        value: '80% Dev',
        colorClass: 'text-emerald-600 dark:text-emerald-400',
      },
      {
        label: 'Kiểm duyệt Clean Code',
        value: '100% Clean',
        colorClass: 'text-blue-600 dark:text-blue-400',
      },
    ],
  },
  custom: {
    gradient:
      'from-amber-50 to-yellow-50/80 dark:from-amber-900/40 dark:to-slate-900/80 border-amber-100',
    icon: Layers,
    iconColor: 'text-amber-600 dark:text-amber-400',
    title: 'Enterprise Custom System',
    badge: 'Cloud Native',
    badgeClass:
      'text-amber-700 bg-amber-100 dark:text-amber-400 dark:bg-amber-950/80 border-amber-300/80 dark:border-amber-500/30',
    indicator: {
      type: 'detail',
      detailTitle: 'Kiến trúc hệ thống',
      detailValue: 'Microservices / ERP',
      detailIcon: Zap,
    },
    stats: [
      {
        label: 'Khả năng mở rộng',
        value: 'Unlimited',
        colorClass: 'text-amber-600 dark:text-amber-400',
      },
      {
        label: 'Đồng hành chuyển giao',
        value: '24/7 SLA',
        colorClass: 'text-emerald-600 dark:text-emerald-400',
      },
    ],
  },
};
