import { ShieldCheck, Headphones } from 'lucide-react';
import { TrustPointItem, StarItem } from '../types';

export const trustPointsData: TrustPointItem[] = [
  {
    id: 'setup-time',
    label: 'Cấu hình hoàn tất trong 5 phút',
    icon: ShieldCheck,
    iconBg: 'bg-[#022A27] border border-[#00E5A3]/40',
    iconColor: 'text-[#00E5A3]',
  },
  {
    id: 'no-credit-card',
    label: 'Không cần thẻ tín dụng',
    icon: ShieldCheck,
    iconBg: 'bg-[#051C47] border border-[#2979FF]/40',
    iconColor: 'text-[#2979FF]',
  },
  {
    id: 'dedicated-support',
    label: 'Hỗ trợ kỹ thuật 24/7',
    icon: Headphones,
    iconBg: 'bg-[#200052] border border-[#9D4EDD]/40',
    iconColor: 'text-[#9D4EDD]',
  },
];

export const starsData: StarItem[] = [
  // Stars distributed inside the CTA Card
  { id: 1, x: 8, y: 25, size: 2.5, delay: 0.1, duration: 3.5, glow: true },
  { id: 2, x: 15, y: 55, size: 3.5, delay: 0.8, duration: 4.2, glow: true },
  { id: 3, x: 12, y: 78, size: 2, delay: 1.4, duration: 3.2 },
  { id: 4, x: 22, y: 35, size: 3, delay: 0.3, duration: 5.0, glow: true },
  { id: 5, x: 28, y: 68, size: 2.5, delay: 1.1, duration: 3.8 },

  { id: 6, x: 92, y: 28, size: 2.5, delay: 0.2, duration: 4.1, glow: true },
  { id: 7, x: 85, y: 58, size: 3.5, delay: 1.0, duration: 4.8, glow: true },
  { id: 8, x: 88, y: 80, size: 2, delay: 1.6, duration: 3.4 },
  { id: 9, x: 78, y: 38, size: 3, delay: 0.7, duration: 5.3, glow: true },
  { id: 10, x: 72, y: 65, size: 2.5, delay: 1.2, duration: 3.7 },

  { id: 11, x: 48, y: 12, size: 2, delay: 0.5, duration: 4.0 },
  { id: 12, x: 52, y: 88, size: 2, delay: 1.3, duration: 4.5 },
];
