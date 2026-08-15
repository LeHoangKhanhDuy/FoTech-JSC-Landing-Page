import { LucideIcon } from 'lucide-react';

export interface CoreValueItem {
  icon: LucideIcon;
  tone: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface MarketingStatItem {
  value: string;
  label: string;
  colorClass: string;
}
