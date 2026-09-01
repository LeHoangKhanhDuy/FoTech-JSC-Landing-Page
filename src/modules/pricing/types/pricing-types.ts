import { LucideIcon } from 'lucide-react';

export type ServiceId = 'fohrm' | 'focode' | 'fomed' | 'website' | 'troovn';

export type ServiceAccent = 'blue' | 'purple' | 'emerald' | 'amber' | 'rose' | 'silver';

export interface ServiceHighlight {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceCTA {
  iconBadge: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
}

export interface ServiceItemData {
  id: ServiceId;
  name: string;
  description: string;
  icon: LucideIcon;
  accent: ServiceAccent;
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  highlights: ServiceHighlight[];
  features: string[];
  cta: ServiceCTA;
}

export interface WebsitePricingPackage {
  id: string;
  name: string;
  target: string;
  price: string;
  period?: string;
  popular?: boolean;
  description: string;
  features: string[];
  ctaText: string;
}
