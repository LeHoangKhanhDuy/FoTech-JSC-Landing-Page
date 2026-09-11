export type BillingCycle = 'monthly' | 'yearly';

export interface PriceDetails {
  price: string;
  period: string;
  billingNote: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  monthly: PriceDetails;
  annual: PriceDetails;
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
