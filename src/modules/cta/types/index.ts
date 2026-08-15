import { LucideIcon } from 'lucide-react';

export interface TrustPointItem {
  id: string;
  label: string;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}

export interface StarItem {
  id: number;
  x: number; // percentage left (0-100)
  y: number; // percentage top (0-100)
  size: number; // px
  delay: number; // seconds
  duration: number; // seconds
  glow?: boolean;
}
