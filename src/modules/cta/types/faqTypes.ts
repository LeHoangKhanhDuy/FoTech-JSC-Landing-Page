export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
}

export interface FAQStatData {
  value: string;
  label: string;
}

export interface FAQSectionData {
  title: string;
  subtitle?: string;
  ctaText?: string;
  items: FAQItemData[];
  badge?: string;
  description?: string;
  stats?: FAQStatData[];
  buttonText?: string;
  column1?: FAQItemData[];
  column2?: FAQItemData[];
}
