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
  badge: string;
  title: string;
  description: string;
  stats: FAQStatData[];
  buttonText: string;
  availabilityNote: string;
  column1: FAQItemData[];
  column2: FAQItemData[];
}
