import { ServiceTabItemData } from "@/modules/pricing/types/pricing-types";

export const servicesTabData: ServiceTabItemData[] = [
  {
    id: "website",
    tabLabel: "Thiết kế Website",
    title: "Giải pháp Website Doanh nghiệp Cao cấp",
    subtitle:
      'Kiến tạo "mặt tiền số" chuẩn UI/UX, tối ưu hiệu năng và tỷ lệ chuyển đổi (CRO) cho mô hình B2B & B2C.',
    bullets: [
      "Thiết kế giao diện độc quyền, thể hiện chính xác định vị và bộ nhận diện thương hiệu",
      "Tối ưu Core Web Vitals (tốc độ tải trang) và kiến trúc chuẩn SEO lên top Google",
      "Tích hợp CMS quản trị trực quan, luồng thu thập Lead tự động và Chatbot AI",
      "Triển khai hạ tầng bảo mật WAF đa tầng, chống tấn công DDoS và sao lưu 24/7",
    ],
    brands: [
      {
        name: "NEXT.JS",
        bgColor: "bg-black/90 border-slate-500/40",
        textColor: "text-white",
      },
      {
        name: "REACT.JS",
        bgColor: "bg-slate-950/80 border-slate-500/40",
        textColor: "text-blue-400",
      },
      {
        name: "LARAVEL",
        bgColor: "bg-slate-950/80 border-slate-500/40",
        textColor: "text-red-500",
      },
      {
        name: "TYPESCRIPT",
        bgColor: "bg-slate-950/80 border-slate-500/40",
        textColor: "text-blue-500",
      },
      {
        name: "TAILWIND CSS",
        bgColor: "bg-zinc-950/80 border-zinc-500/40",
        textColor: "text-cyan-400",
      },
    ],
    buttonText: "Khám phá giải pháp",
    badge: "Website B2B Chuyên Nghiệp",
    previewType: "website",
  },
  {
    id: "fohrm",
    tabLabel: "Quản trị Nhân sự",
    title: "Nền tảng Quản trị Nhân sự (FoHRM)",
    subtitle:
      "Số hóa toàn diện vòng đời nhân sự: Chấm công đa chi nhánh, tính lương tự động và quản trị hiệu suất.",
    bullets: [
      "Chấm công linh hoạt qua định vị GPS, IP WiFi và nhận diện khuôn mặt AI (FaceID)",
      "Tự động hóa hoàn toàn bảng lương phức tạp, quản lý BHXH và Thuế TNCN chuẩn xác 100%",
      "Xây dựng văn phòng không giấy tờ (Paperless) với quy trình duyệt đơn từ trực tuyến",
      "Dashboard HR Analytics cung cấp báo cáo theo thời gian thực, hỗ trợ ban lãnh đạo ra quyết định",
    ],
    brands: [
      {
        name: "AWS CLOUD",
        bgColor: "bg-orange-950/80 border-orange-500/40",
        textColor: "text-orange-400",
      },
      {
        name: "POSTGRESQL",
        bgColor: "bg-blue-950/80 border-blue-500/40",
        textColor: "text-blue-400",
      },
      {
        name: "REDIS CACHE",
        bgColor: "bg-red-950/80 border-red-500/40",
        textColor: "text-red-400",
      },
    ],
    buttonText: "Trải nghiệm FoHRM",
    badge: "FoHRM Platform AI",
    previewType: "fohrm",
  },
  {
    id: "troovn",
    tabLabel: "Trọ & Căn hộ",
    title: "Nền tảng Quản lý Trọ & Căn hộ (Troo.vn)",
    subtitle:
      "Giải pháp PropTech giúp số hóa toàn diện quy trình vận hành chuỗi phòng trọ, căn hộ dịch vụ.",
    bullets: [
      "Tìm kiếm thông minh với 100% tin đăng được đồng bộ trạng thái phòng trống thực tế",
      "Số hóa hợp đồng thuê nhà, hỗ trợ ký kết điện tử an toàn và lưu trữ chuẩn pháp lý",
      "Tự động chốt chỉ số điện nước, tính toán chi phí và gửi hóa đơn tự động qua Zalo",
      "Tích hợp thanh toán VietQR, tự động gạch nợ và đối soát doanh thu chặt chẽ",
    ],
    brands: [
      {
        name: "ZALO ZNS",
        bgColor: "bg-blue-950/80 border-blue-500/40",
        textColor: "text-blue-400",
      },
      {
        name: "SEPAY API",
        bgColor: "bg-emerald-950/80 border-emerald-500/40",
        textColor: "text-emerald-400",
      },
      {
        name: "VIETQR",
        bgColor: "bg-red-950/80 border-red-500/40",
        textColor: "text-red-400",
      },
    ],
    buttonText: "Khám phá Troo.vn",
    badge: "Troo.vn PropTech Platform",
    previewType: "troovn",
  },
  {
    id: "fomed",
    tabLabel: "Quản lý Phòng khám",
    title: "Nền tảng Quản lý Phòng khám (FoMed)",
    subtitle:
      "Chuyển đổi số vận hành y tế: Quản lý bệnh án điện tử, kiểm soát kho dược và tối ưu luồng bệnh nhân.",
    bullets: [
      "Số hóa bệnh án điện tử (EMR), tra cứu nhanh lịch sử khám chữa bệnh với độ bảo mật cao",
      "Điều phối lịch hẹn thông minh, giảm thiểu thời gian chờ đợi và nâng cao trải nghiệm",
      "Kiểm soát chặt chẽ quy trình xuất/nhập kho dược, tự động cảnh báo thuốc cận date",
      "Quản lý tài chính minh bạch, hỗ trợ xuất hóa đơn điện tử và liên thông dữ liệu chuẩn Bộ Y tế",
    ],
    brands: [
      {
        name: "ISO 27001",
        bgColor: "bg-slate-950/80 border-slate-500/40",
        textColor: "text-slate-300",
      },
      {
        name: "HIPAA COMPLIANT",
        bgColor: "bg-blue-950/80 border-blue-500/40",
        textColor: "text-blue-400",
      },
      {
        name: "E-INVOICE",
        bgColor: "bg-amber-950/80 border-amber-500/40",
        textColor: "text-amber-400",
      },
    ],
    buttonText: "Triển khai FoMed",
    badge: "FoMed Healthcare EMR",
    previewType: "fomed",
  },
  {
    id: "focode",
    tabLabel: "Sàn TMĐT",
    title: "Nền tảng Giao dịch Mã nguồn (FoCode)",
    subtitle:
      "Hệ sinh thái cung cấp Source Code, Mobile App & UI Kit chất lượng cao cho cộng đồng lập trình.",
    bullets: [
      "Kho tài nguyên đa dạng, 100% mã nguồn trải qua kiểm duyệt kỹ thuật nghiêm ngặt",
      "Hệ thống thanh toán tự động, bàn giao toàn vẹn mã nguồn và tài liệu chỉ với 1-click",
      "Cam kết kiến trúc Clean Code, chuẩn hóa cấu trúc giúp dễ dàng mở rộng và tùy biến",
      "Chính sách bảo hành minh bạch, đội ngũ kỹ thuật đồng hành hỗ trợ cài đặt tận tình",
    ],
    brands: [
      {
        name: "REACT NATIVE",
        bgColor: "bg-cyan-950/80 border-cyan-500/40",
        textColor: "text-cyan-400",
      },
      {
        name: "FLUTTER",
        bgColor: "bg-sky-950/80 border-sky-500/40",
        textColor: "text-sky-400",
      },
      {
        name: "LARAVEL",
        bgColor: "bg-rose-950/80 border-rose-500/40",
        textColor: "text-rose-400",
      },
    ],
    buttonText: "Truy cập FoCode",
    badge: "FoCode Marketplace",
    previewType: "focode",
  },
  {
    id: "custom",
    tabLabel: "Custom",
    title: "Phát triển Phần mềm Đặc thù (Custom App)",
    subtitle:
      "Tư vấn và phát triển giải pháp phần mềm chuyên biệt, giải quyết triệt để bài toán nghiệp vụ phức tạp.",
    bullets: [
      "Thiết kế và lập trình Web/Mobile App theo đúng luồng vận hành riêng của từng doanh nghiệp",
      "Tích hợp API sâu rộng với các hệ thống lõi (ERP, CRM, Cổng thanh toán, Logistics)",
      "Ứng dụng kiến trúc Microservices chịu tải cao, đảm bảo khả năng mở rộng quy mô tức thì",
      "Đội ngũ chuyên gia đồng hành sát sao từ khâu khảo sát, phân tích đến chuyển giao vận hành",
    ],
    brands: [
      {
        name: "MICROSERVICES",
        bgColor: "bg-indigo-950/80 border-indigo-500/40",
        textColor: "text-indigo-400",
      },
      {
        name: "DOCKER",
        bgColor: "bg-blue-950/80 border-blue-500/40",
        textColor: "text-blue-400",
      },
      {
        name: "KUBERNETES",
        bgColor: "bg-blue-900/80 border-blue-500/40",
        textColor: "text-blue-300",
      },
    ],
    buttonText: "Nhận tư vấn ngay",
    badge: "Custom Enterprise System",
    previewType: "custom",
  },
];
