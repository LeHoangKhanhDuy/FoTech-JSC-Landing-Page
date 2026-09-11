export type BillingCycle = 'monthly' | 'yearly';

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  monthlyPrice: string;
  annualPrice: string;
  period: string;
  features: string[];
  subfeaturesHeading?: string;
  highlighted: boolean;
  hasToggle: boolean;
  buttonText: string;
  modalType: 'demo' | 'trial' | 'consulting';
}

export interface FreeTrialData {
  title: string;
  badge: string;
  infoText: string;
  buttonText: string;
  modalType: 'demo' | 'trial' | 'consulting';
}

export interface PricingSectionData {
  badge: string;
  title: string;
  subtitle: string;
  freeTrial: FreeTrialData;
  plans: PricingPlan[];
}
