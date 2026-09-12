export type StepVisualType = 'faceid' | 'fina_ai' | 'payroll' | 'bank_api';

export interface StepMetric {
  label: string;
  value: string;
  trend?: string;
}

export interface StepData {
  id: string;
  stepNumber: number;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  accentColor: string;
  visualType: StepVisualType;
  metrics?: StepMetric[];
}

export interface TimelineNodeProps {
  stepNumber: number;
  isActive: boolean;
  accentColor?: string;
  onClick?: () => void;
}

export interface TimelineProgressLineProps {
  lineRef?: React.RefObject<HTMLDivElement | null>;
}

export interface TimelineStepCardProps {
  step: StepData;
  isActive: boolean;
  isReversed?: boolean;
}

export interface TimelineVisualCardProps {
  step: StepData;
  isActive: boolean;
  onActionClick?: () => void;
}

export interface HowItWorksSectionProps {
  className?: string;
}
