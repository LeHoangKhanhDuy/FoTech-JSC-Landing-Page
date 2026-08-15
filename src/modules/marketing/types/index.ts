import { LucideIcon } from 'lucide-react';

export type CapabilityAccent = 'blue' | 'purple' | 'emerald';

export interface CapabilityItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  action: string;
  icon: LucideIcon;
  accent: CapabilityAccent;
  theme: {
    iconBg: string;
    badgeText: string;
    badgeBg: string;
    checkColor: string;
    actionBg: string;
    borderHover: string;
  };
}

export type StepAccent = 'blue' | 'purple' | 'emerald' | 'cyan' | 'orange';

export interface JourneyStepItem {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  accent: StepAccent;
  theme: {
    iconBg: string;
    iconText: string;
    numberColor: string;
    glowColor: string;
  };
}
