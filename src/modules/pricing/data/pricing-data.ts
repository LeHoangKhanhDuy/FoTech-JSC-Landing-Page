import { ServiceTabItemData } from "@/modules/pricing/types/pricing-types";

export const servicesTabData: ServiceTabItemData[] = [
  {
    id: "website",
    tabLabel: "Thiết kế Web",
    title: "Giải pháp Thiết kế Web Doanh nghiệp",
    subtitle:
      "Nền tảng Website chuẩn SEO, UI/UX hiện đại tối ưu tỷ lệ chuyển đổi cho mô hình B2B & B2C.",
    bullets: [
      "Thiết kế giao diện độc quyền, bám sát bộ nhận diện thương hiệu doanh nghiệp",
      "Tối ưu tốc độ tải trang (Core Web Vitals) và cấu trúc chuẩn SEO Google",
      "Tích hợp Chatbot AI, CMS quản trị trực quan và luồng thu thập Lead tự động",
      "Triển khai hạ tầng bảo mật WAF đa tầng, chống DDoS và sao lưu dữ liệu 24/7",
    ],
    brands: [
      {
        name: "REACT.JS",
        bgColor: "bg-slate-950/80 border-slate-500/40",
        textColor: "text-slate-100",
      },
      {
        name: "LARAVEL",
        bgColor: "bg-slate-950/80 border-slate-500/40",
        textColor: "text-slate-100",
      },
      {
        name: "TYPESCRIPT",
        bgColor: "bg-slate-950/80 border-slate-500/40",
        textColor: "text-slate-100",
      },
      {
        name: "TAILWIND CSS",
        bgColor: "bg-slate-950/80 border-slate-500/40",
        textColor: "text-slate-100",
      },
      {
        name: "...",
        bgColor: "bg-zinc-950/80 border-zinc-500/40",
        textColor: "text-zinc-300",
      },
    ],
    buttonText: "Khám phá ngay",
    badge: "Website B2B Chuyên Nghiệp",
    previewType: "website",
  },
  {
    id: "fohrm",
    tabLabel: "Quản trị Nhân sự",
    title: "Nền tảng Quản trị Nhân sự (FoHRM)",
    subtitle:
      "Tự động hóa luồng vận hành nhân sự: Chấm công đa phương thức, tính lương và đánh giá hiệu suất.",
    bullets: [
      "Chấm công linh hoạt qua định vị GPS, IP WiFi và nhận diện khuôn mặt (FaceID)",
      "Hệ thống tự động hóa bảng lương, quản lý bảo hiểm và thuế TNCN chuẩn xác",
      "Số hóa hồ sơ nhân sự, phê duyệt đơn từ trực tuyến nhanh chóng chỉ với 1 chạm",
      "Dashboard HR Analytics cung cấp báo cáo realtime, hỗ trợ quyết định chiến lược",
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
    buttonText: "Khám phá ngay",
    badge: "FoHRM Platform AI",
    previewType: "fohrm",
  },
  {
    id: "troovn",
    tabLabel: "Quản lý Phòng trọ",
    title: "Hệ sinh thái Quản lý Trọ (Troo.vn)",
    subtitle:
      "Giải pháp PropTech toàn diện giúp số hóa quy trình quản lý nhà trọ và hợp đồng cho thuê.",
    bullets: [
      "Hệ thống tìm kiếm thông minh với 100% tin đăng được xác thực hình ảnh thực tế",
      "Số hóa hợp đồng thuê nhà, hỗ trợ ký kết điện tử an toàn và chuẩn pháp lý",
      "Tự động chốt chỉ số điện nước, tính toán chi phí và gửi hóa đơn qua Zalo",
      "Tích hợp thanh toán mã QR tự động gạch nợ và đối soát doanh thu chặt chẽ",
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
    buttonText: "Khám phá ngay",
    badge: "Troo.vn PropTech Platform",
    previewType: "troovn",
  },
  {
    id: "fomed",
    tabLabel: "Quản lý Phòng khám",
    title: "Giải pháp Quản lý Phòng khám (FoMed)",
    subtitle:
      "Hệ thống số hóa quy trình y tế: Quản lý bệnh án EMR, kho dược và lịch hẹn chuẩn Bộ Y tế.",
    bullets: [
      "Số hóa toàn diện bệnh án điện tử (EMR), lưu trữ lịch sử khám chữa bệnh bảo mật",
      "Điều phối lịch hẹn thông minh, tối ưu luồng bệnh nhân và giảm thời gian chờ đợi",
      "Kiểm soát chặt chẽ quy trình xuất nhập kho dược, tự động cảnh báo thuốc cận date",
      "Quản lý doanh thu minh bạch, hỗ trợ xuất hóa đơn điện tử và liên thông dữ liệu",
    ],
    brands: [
      {
        name: "ISO 27001",
        bgColor: "bg-slate-950/80 border-slate-500/40",
        textColor: "text-slate-300",
      },
      {
        name: "HIPAA READY",
        bgColor: "bg-blue-950/80 border-blue-500/40",
        textColor: "text-blue-400",
      },
      {
        name: "E-INVOICE",
        bgColor: "bg-amber-950/80 border-amber-500/40",
        textColor: "text-amber-400",
      },
    ],
    buttonText: "Khám phá ngay",
    badge: "FoMed Healthcare EMR",
    previewType: "fomed",
  },
  {
    id: "focode",
    tabLabel: "Sàn Source Code",
    title: "Chợ Giao dịch Mã nguồn (FoCode)",
    subtitle:
      "Nền tảng phân phối Source Code, Mobile App & UI Kit chất lượng cao cho cộng đồng lập trình.",
    bullets: [
      "Kho tài nguyên đa dạng với hàng ngàn mã nguồn đã qua kiểm duyệt kỹ thuật nghiêm ngặt",
      "Hệ thống thanh toán tự động, bàn giao mã nguồn 1-click ngay tức thì",
      "Cam kết chất lượng Clean Code, cấu trúc chuẩn hóa kèm tài liệu triển khai chi tiết",
      "Chính sách bảo hành rõ ràng, hỗ trợ kỹ thuật cài đặt trong suốt quá trình sử dụng",
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
    buttonText: "Khám phá ngay",
    badge: "FoCode Marketplace",
    previewType: "focode",
  },
  {
    id: "custom",
    tabLabel: "Phần mềm Tùy chỉnh",
    title: "Phát triển Hệ thống Tùy biến",
    subtitle:
      "Tư vấn và phát triển giải pháp phần mềm riêng biệt (ERP, CRM) giải quyết bài toán đặc thù.",
    bullets: [
      "Thiết kế và phát triển ứng dụng Mobile, Web App nghiệp vụ phức tạp quy mô lớn",
      "Tích hợp sâu rộng với hệ thống sẵn có (ERP, POS, Cổng thanh toán, Logistics)",
      "Tư vấn thiết kế kiến trúc Microservices, đảm bảo khả năng chịu tải và mở rộng hệ thống",
      "Đội ngũ kỹ sư đồng hành sát sao từ khâu phân tích, triển khai đến chuyển giao vận hành",
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
