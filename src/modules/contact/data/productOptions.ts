import {
  Sparkles,
  Users,
  Stethoscope,
  ShoppingBag,
  Home,
  ShoppingCart,
} from "lucide-react";
import { ContactProductOption } from "@/modules/contact/types";

export const contactProductOptions: ContactProductOption[] = [
  {
    id: "all",
    name: "Chọn sản phẩm",
    desc: "Tư vấn toàn bộ hệ sinh thái B2B FoTech",
    icon: Sparkles,
  },
  {
    id: "fohrm",
    name: "FoHRM – Quản trị nhân sự AI",
    desc: "Tự động chấm công, tính lương & trợ lý AI FINA",
    icon: Users,
  },
  {
    id: "fomed",
    name: "FoMed – Quản lý phòng khám",
    desc: "Bệnh án điện tử EMR chuẩn y tế & kho dược",
    icon: Stethoscope,
  },
  {
    id: "focode",
    name: "FoCode – Sàn Source Code",
    desc: "Chợ mua bán Source Code Web & Mobile App",
    icon: ShoppingBag,
  },
  {
    id: "troovn",
    name: "Troo.vn – Tìm kiếm & Quản lý trọ",
    desc: "Kết nối phòng trọ chính chủ & hợp đồng điện tử",
    icon: Home,
  },
  {
    id: "website",
    name: "Thiết kế Website & Phần mềm theo yêu cầu",
    desc: "Thiết kế UI/UX độc quyền & Web App nâng cao",
    icon: ShoppingCart,
  },
];
