import { Layers, ShieldCheck, Database } from 'lucide-react';
import { CoreValueItem, MarketingStatItem } from '../types';

export const coreValues: CoreValueItem[] = [
  {
    icon: Layers,
    tone: 'blue',
    title: 'Tích Hợp Liền Mạch (Seamless Integration)',
    description: 'Đồng bộ dữ liệu thông suốt giữa tất cả ứng dụng trong hệ sinh thái FoTech (FoHRM, FoMed, FoCode, Troo.vn). Người dùng chỉ cần 1 tài khoản duy nhất (Single Sign-On - SSO) để truy cập toàn bộ hệ thống.',
    bullets: ['Đăng nhập 1 lần SSO cho mọi ứng dụng', 'Đồng bộ danh mục phòng ban & nhân sự', 'Tích hợp API Webhook linh hoạt'],
  },
  {
    icon: ShieldCheck,
    tone: 'emerald',
    title: 'Bảo Mật Cấp Doanh Nghiệp (Enterprise Security trên AWS)',
    description: 'Vận hành trên hạ tầng đám mây Amazon Web Services (AWS) đạt chứng chỉ an toàn ISO 27001 và GDPR. Mã hóa dữ liệu đầu cuối chuẩn AES-256 bit và tự động sao lưu 24/7.',
    bullets: ['Hạ tầng AWS Cloud đa vùng SLA 99.99%', 'Mã hóa dữ liệu 256-bit cao nhất', 'Nhật ký truy cập Audit Log minh bạch'],
  },
  {
    icon: Database,
    tone: 'indigo',
    title: 'Dữ Liệu Tập Trung (Centralized Data & Realtime Intelligence)',
    description: 'Xóa bỏ các "ốc đảo dữ liệu" (Data Silos) trong doanh nghiệp. Ban quản trị có một trung tâm thông tin duy nhất để theo dõi biến động chi phí, hiệu suất và doanh thu theo thời gian thực.',
    bullets: ['Dashboard báo cáo tổng quan realtime', 'Trích xuất báo cáo thông minh 1-click', 'Dự báo xu hướng vận hành bằng AI'],
  },
];

export const marketingStats: MarketingStatItem[] = [
  {
    value: '500+',
    label: 'Doanh nghiệp Tin Dùng',
    colorClass: 'text-blue-600 dark:text-blue-400',
  },
  {
    value: '99.99%',
    label: 'Cam kết Uptime SLA',
    colorClass: 'text-indigo-600 dark:text-indigo-400',
  },
  {
    value: '100,000+',
    label: 'Người Dùng Hàng Ngày',
    colorClass: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    value: '24/7',
    label: 'Hỗ trợ Kỹ thuật Chuyên sâu',
    colorClass: 'text-amber-500',
  },
];
