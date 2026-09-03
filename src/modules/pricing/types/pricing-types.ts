export type ServiceId = 'website' | 'fohrm' | 'troovn' | 'fomed' | 'focode' | 'custom';

export interface ServicePartnerBrand {
  name: string;
  badgeText?: string;
  bgColor?: string;
  textColor?: string;
}

export interface ServiceTabItemData {
  id: ServiceId;
  tabLabel: string;
  title: string;
  subtitle: string;
  bullets: string[];
  brands: ServicePartnerBrand[];
  buttonText: string;
  badge: string;
  previewType: 'website' | 'fohrm' | 'troovn' | 'fomed' | 'focode' | 'custom';
}
