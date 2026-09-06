import { LucideIcon } from 'lucide-react';

export interface IntegrationNode {
  id: string;
  label: string;
  sublabel?: string;
  icon: LucideIcon;
  angle: number; 
  x: number;
  y: number; 
  status?: 'active' | 'synced' | 'pending';
  description: string;
}

export interface IntegrationFeatureData {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  ctaText: string;
  hubName: string;
  nodes: IntegrationNode[];
}
