import { MessageSquare, ScanFace, Landmark, Calculator, Plug } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface IntegrationNode {
  id: string;
  label: string;
  shortLabel: string;
  mobileLabel: string;
  sublabel: string;
  icon: LucideIcon;
  color: string;
  xPercent: number;
  pulseDelay: string;
}

export const BENTO_INTEGRATION_NODES: IntegrationNode[] = [
  {
    id: "chat",
    label: "Zalo ZNS / Email",
    shortLabel: "Zalo / Email",
    mobileLabel: "Zalo",
    sublabel: "Đại diện cho thông báo, phiếu lương tự động",
    icon: MessageSquare,
    color: "from-blue-500 to-cyan-400",
    xPercent: 135,
    pulseDelay: "0s",
  },
  {
    id: "boards",
    label: "Máy Chấm công",
    shortLabel: "Máy Chấm công",
    mobileLabel: "Chấm công",
    sublabel: "Đại diện cho nguồn dữ liệu chấm công thực tế",
    icon: ScanFace,
    color: "from-indigo-500 to-blue-400",
    xPercent: 380,
    pulseDelay: "0.6s",
  },
  {
    id: "crm",
    label: "API Ngân hàng",
    shortLabel: "API Ngân hàng",
    mobileLabel: "Bank API",
    sublabel: "Đại diện cho luồng chi lương tự động 1-chạm",
    icon: Landmark,
    color: "from-emerald-500 to-teal-400",
    xPercent: 620,
    pulseDelay: "1.2s",
  },
  {
    id: "reports",
    label: "Phần mềm Kế toán",
    shortLabel: "Kế toán",
    mobileLabel: "Kế toán",
    sublabel: "Đại diện để đẩy bút toán hạch toán lương",
    icon: Calculator,
    color: "from-amber-500 to-orange-400",
    xPercent: 865,
    pulseDelay: "1.8s",
  },
];

export const BENTO_CENTER_NODE = {
  label: 'FoHRM Master Data',
  icon: Plug,
};

export const BENTO_SYNC_STATS = {
  status: 'Đang đồng bộ hệ thống',
  records: '1.250 hồ sơ',
};

export const BENTO_CONTENT = {
  badge: "Hệ Sinh Thái Mở",
  sectionTitle: "Trung Tâm Điều Phối Dữ Liệu Nhân Sự Master Data",
  sectionSubtitle:
    "Kết nối liền mạch với các thiết bị phần cứng chấm công, cổng thanh toán ngân hàng và phần mềm tài chính doanh nghiệp.",
  headline: "Tích hợp liền mạch mọi nền tảng",
  description:
    "Kết nối mượt mà với máy chấm công, API Ngân hàng và các phần mềm nội bộ sẵn có. Dữ liệu nhân sự tự động luân chuyển xuyên suốt mà không cần nhập liệu thủ công.",
  painPointHighlight:
    "Đánh thẳng vào nỗi đau lớn nhất của kế toán và HR: Chấm dứt hoàn toàn việc xuất/nhập file Excel thủ công giữa các phần mềm khác nhau (loại bỏ triệt để Data Silos).",
  features: [
    "Không còn nhập liệu Excel thủ công",
    "Chấm công FaceID real-time tự động đổ về bảng công",
    "Chi lương hàng loạt qua Bank API chỉ với 1 click",
    "Quản lý định danh và Đăng nhập một lần (SSO)",
  ],
};
