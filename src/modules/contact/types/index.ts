import { LucideIcon } from "lucide-react";

export type ContactModalType = "demo" | "trial" | "consulting";

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  type?: ContactModalType;
}

export interface ContactProductOption {
  id: string;
  name: string;
  desc?: string;
  icon?: LucideIcon;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  selectedProductId: string;
}
