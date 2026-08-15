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
  x: number; 
  y: number; 
  size: number; 
  delay: number; 
  duration: number; 
  glow?: boolean;
}
