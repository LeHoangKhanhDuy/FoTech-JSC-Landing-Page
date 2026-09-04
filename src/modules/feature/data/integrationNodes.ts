import {
  Users,
  PieChart,
  Briefcase,
  BellRing,
  FolderSync,
  ShoppingCart,
} from "lucide-react";
import { IntegrationFeatureData } from "@/modules/feature/types/feature-type";

export const integrationFeatureData: IntegrationFeatureData = {
  badge: "KHẢ NĂNG TÍCH HỢP",
  title: "Đồng bộ dữ liệu toàn doanh nghiệp trên",
  titleHighlight: "1 Hub duy nhất",
  subtitle:
    "Xóa bỏ rào cản phòng ban. FoTech Hub kết nối xuyên suốt luồng công việc từ Quản trị nhân sự, Vận hành phòng khám đến Sàn thương mại. Mọi dữ liệu được tự động hóa, cập nhật theo thời gian thực để giúp ban lãnh đạo ra quyết định tức thì",
  ctaText: "Trải nghiệm FoTech Hub",
  statusBadge: "Đồng bộ dữ liệu Real-time 24/7",
  hubName: "FOTECH HUB",
  nodes: [
    {
      id: "hrm",
      label: "HR & Payroll",
      sublabel: "Quản Trị Nhân Sự",
      icon: Users,
      angle: 0,
      x: 50,
      y: 10,
      status: "active",
      description:
        "Đồng bộ hồ sơ nhân viên, quy trình chấm công, và tính lương tự động (FoHRM).",
    },
    {
      id: "analytics",
      label: "Analytics",
      sublabel: "Báo Cáo Phân Tích",
      icon: PieChart,
      angle: 60,
      x: 84.6,
      y: 30,
      status: "synced",
      description:
        "Trực quan hóa dữ liệu kinh doanh, cung cấp Insight theo thời gian thực.",
    },
    {
      id: "operations",
      label: "Operations",
      sublabel: "Vận Hành Dịch Vụ",
      icon: Briefcase,
      angle: 120,
      x: 84.6,
      y: 70,
      status: "active",
      description:
        "Chuẩn hóa quy trình vận hành chuỗi dịch vụ, phòng khám (FoMed).",
    },
    {
      id: "communications",
      label: "Communications",
      sublabel: "Giao Tiếp & Phê Duyệt",
      icon: BellRing,
      angle: 180,
      x: 50,
      y: 90,
      status: "synced",
      description:
        "Thông báo xét duyệt đơn từ, giao việc tức thì liên phòng ban.",
    },
    {
      id: "storage",
      label: "Data & Assets",
      sublabel: "Kho Dữ Liệu Số",
      icon: FolderSync,
      angle: 240,
      x: 15.4,
      y: 70,
      status: "active",
      description:
        "Lưu trữ tập trung hợp đồng, tài liệu và tài sản doanh nghiệp an toàn.",
    },
    {
      id: "crm",
      label: "Sales & CRM",
      sublabel: "Quản Trị Khách Hàng",
      icon: ShoppingCart,
      angle: 300,
      x: 15.4,
      y: 30,
      status: "synced",
      description:
        "Quản lý vòng đời khách hàng, đồng bộ luồng đơn hàng đa kênh (FoCode).",
    },
  ],
};
