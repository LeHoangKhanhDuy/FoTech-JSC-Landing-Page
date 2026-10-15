import {
  Activity,
  CalendarDays,
  ClipboardList,
  FileHeart,
  Pill,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export interface FoMedFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FOMED_FEATURES: FoMedFeature[] = [
  {
    icon: CalendarDays,
    title: "Lịch hẹn & tiếp nhận",
    description:
      "Theo dõi lịch khám, trạng thái hẹn và luồng tiếp nhận bệnh nhân trên cùng một màn hình.",
  },
  {
    icon: UsersRound,
    title: "Quản lý bệnh nhân",
    description:
      "Lưu trữ thông tin tập trung, tra cứu nhanh lịch sử khám và hồ sơ liên quan.",
  },
  {
    icon: FileHeart,
    title: "Hồ sơ bệnh án điện tử",
    description:
      "Ghi nhận thông tin thăm khám và kết quả điều trị theo từng hồ sơ bệnh nhân.",
  },
  {
    icon: ClipboardList,
    title: "Quản lý vận hành",
    description:
      "Kết nối các bước từ đặt lịch, khám bệnh đến thu ngân trong một quy trình rõ ràng.",
  },
  {
    icon: Pill,
    title: "Kho thuốc & kê đơn",
    description:
      "Theo dõi danh mục thuốc và hỗ trợ quản lý kê đơn trong quá trình khám chữa bệnh.",
  },
  {
    icon: Activity,
    title: "Báo cáo hoạt động",
    description:
      "Nắm tình hình lịch khám, bệnh nhân và doanh thu để theo dõi hoạt động phòng khám.",
  },
];

export const FOMED_WORKFLOW = [
  {
    number: "01",
    title: "Đặt lịch khám",
    description: "Ghi nhận lịch hẹn và thông tin ban đầu của bệnh nhân.",
  },
  {
    number: "02",
    title: "Tiếp nhận bệnh nhân",
    description: "Tra cứu hồ sơ, cập nhật trạng thái và chuyển tiếp đúng quy trình.",
  },
  {
    number: "03",
    title: "Thăm khám & lưu hồ sơ",
    description: "Bác sĩ xem thông tin cần thiết và ghi nhận nội dung thăm khám.",
  },
  {
    number: "04",
    title: "Hoàn tất & theo dõi",
    description: "Kết thúc lượt khám, quản lý đơn thuốc và theo dõi báo cáo hoạt động.",
  },
];
