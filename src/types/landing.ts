import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
};

export type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: 'primary' | 'success' | 'warning' | 'danger';
};

export type Feature = IconCard & {
  points: string[];
};

export type PricingPlan = {
  name: string;
  audience: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};
