import { LucideIcon } from 'lucide-react';

export interface EcosystemProduct {
  id: string;
  name: string;
  badge: string;
  topRightBadge?: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  theme: {
    iconBg: string;
    badgeStyle: string;
    cardBorderHover: string;
    subtitleColor: string;
    checkIconColor: string;
    statIconColor: string;
    btnStyle: string;
    featureBgStyle?: string;
  };
  features: string[];
  stats: {
    label1: string;
    value1: string;
    stat1Icon: LucideIcon;
    label2: string;
    value2: string;
    stat2Icon: LucideIcon;
  };
  cta: {
    label: string;
    link?: string;
    modalType?: 'demo' | 'consulting' | 'trial';
  };
}
