import { LucideIcon } from 'lucide-react';

export interface IntegrationNode {
  id: string;
  label: string;
  sublabel?: string;
  icon: LucideIcon;
  angle: number; // in degrees (0 = top, 60, 120, 180, 240, 300)
  x: number; // percentage (0 - 100)
  y: number; // percentage (0 - 100)
  status?: 'active' | 'synced' | 'pending';
  description: string;
}

export interface IntegrationFeatureData {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  ctaText: string;
  statusBadge: string;
  hubName: string;
  nodes: IntegrationNode[];
}
