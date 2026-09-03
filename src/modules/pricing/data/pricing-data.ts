import { ServiceTabItemData } from '@/modules/pricing/types/pricing-types';

export const servicesTabData: ServiceTabItemData[] = [
  {
    id: 'website',
    tabLabel: 'Thiết kế Web',
    title: 'Lĩnh vực Thiết kế Web',
    subtitle: 'Giải pháp thiết kế Website B2B chuẩn SEO, UI/UX hiện đại tối ưu tỷ lệ chuyển đổi',
    bullets: [
      'Giao diện UI/UX độc quyền, chuẩn hóa nhận diện thương hiệu doanh nghiệp',
      'Tối ưu tốc độ tải trang Core Web Vitals chuẩn Google & chuẩn SEO nâng cao',
      'Tích hợp Chatbot AI, CMS quản trị thông minh & Form thu thập Lead tự động',
      'Hệ thống bảo mật WAF đa tầng, chống DDoS & sao lưu dữ liệu tự động 24/7'
    ],
    brands: [
      { name: 'FPT', bgColor: 'bg-emerald-950/80 border-emerald-500/40', textColor: 'text-emerald-400' },
      { name: 'SWINBURNE', bgColor: 'bg-rose-950/80 border-rose-500/40', textColor: 'text-rose-400' },
      { name: 'DAI NAM', bgColor: 'bg-amber-950/80 border-amber-500/40', textColor: 'text-amber-400' }
    ],
    buttonText: 'Khám phá ngay',
    badge: 'Website B2B Chuyên Nghiệp',
    previewType: 'website'
  },
  {
    id: 'fohrm',
    tabLabel: 'Quản trị Nhân sự',
    title: 'Lĩnh vực Quản trị Nhân sự (FoHRM)',
    subtitle: 'Tự động hóa toàn bộ quy trình nhân sự, chấm công AI & tính lương chính xác',
    bullets: [
      'Chấm công thông minh AI nhận diện khuôn mặt FaceID & định vị GPS',
      'Tự động hóa tính lương, thuế TNCN, bảo hiểm & phúc lợi nhân viên',
      'Quản lý hồ sơ nhân sự tập trung, phê duyệt đơn từ trực tuyến 1-click',
      'Hệ thống báo cáo HR Analytics trực quan hỗ trợ ban lãnh đạo ra quyết định'
    ],
    brands: [
      { name: 'VIETCOMBANK', bgColor: 'bg-blue-950/80 border-blue-500/40', textColor: 'text-blue-400' },
      { name: 'VINHOMES', bgColor: 'bg-indigo-950/80 border-indigo-500/40', textColor: 'text-indigo-400' },
      { name: 'MASAN', bgColor: 'bg-rose-950/80 border-rose-500/40', textColor: 'text-rose-400' }
    ],
    buttonText: 'Khám phá ngay',
    badge: 'FoHRM Platform AI',
    previewType: 'fohrm'
  },
  {
    id: 'troovn',
    tabLabel: 'Tìm phòng Trọ',
    title: 'Lĩnh vực Tìm kiếm & Quản lý Trọ (Troo.vn)',
    subtitle: 'Nền tảng PropTech số hóa quản lý nhà trọ, ký hợp đồng điện tử & tự động hóa điện nước',
    bullets: [
      'Tìm kiếm & đăng tin phòng trọ chính chủ 100% xác thực hình ảnh thực tế',
      'Hợp đồng thuê nhà điện tử bảo mật, ký kết trực tuyến an toàn pháp lý',
      'Tự động chốt số điện nước, tính tiền dịch vụ & gửi hóa đơn Zalo/App',
      'Thanh toán mã QR Code linh hoạt, tự động gạch nợ & báo cáo doanh thu'
    ],
    brands: [
      { name: 'TROO.VN', bgColor: 'bg-amber-950/80 border-amber-500/40', textColor: 'text-amber-400' },
      { name: 'DAT XANH', bgColor: 'bg-emerald-950/80 border-emerald-500/40', textColor: 'text-emerald-400' },
      { name: 'SAVILLS', bgColor: 'bg-sky-950/80 border-sky-500/40', textColor: 'text-sky-400' }
    ],
    buttonText: 'Khám phá ngay',
    badge: 'Troo.vn PropTech Platform',
    previewType: 'troovn'
  },
  {
    id: 'fomed',
    tabLabel: 'Quản lý Phòng khám',
    title: 'Lĩnh vực Quản lý Phòng khám (FoMed)',
    subtitle: 'Số hóa bệnh án điện tử EMR, quản lý kho dược & lịch khám chuẩn Bộ Y tế',
    bullets: [
      'Bệnh án điện tử EMR số hóa toàn bộ lịch sử khám chữa bệnh an toàn',
      'Quản lý lịch hẹn khám thông minh, giảm 90% thời gian chờ đợi bệnh nhân',
      'Tự động cảnh báo tồn kho thuốc, hạn sử dụng & quản lý xuất nhập kho dược',
      'Báo cáo tài chính doanh thu, hóa đơn điện tử & kết nối cổng BHYT'
    ],
    brands: [
      { name: 'MEDLATEC', bgColor: 'bg-rose-950/80 border-rose-500/40', textColor: 'text-rose-400' },
      { name: 'TAM ANH', bgColor: 'bg-blue-950/80 border-blue-500/40', textColor: 'text-blue-400' },
      { name: 'HOAN MY', bgColor: 'bg-emerald-950/80 border-emerald-500/40', textColor: 'text-emerald-400' }
    ],
    buttonText: 'Khám phá ngay',
    badge: 'FoMed Healthcare EMR',
    previewType: 'fomed'
  },
  {
    id: 'focode',
    tabLabel: 'Sàn TMĐT',
    title: 'Lĩnh vực Sàn Source Code (FoCode)',
    subtitle: 'Chợ mua bán Source Code Web App, Mobile App & UI Kit đóng gói sẵn',
    bullets: [
      'Kho 1.000+ Source Code Web & Mobile App đã qua kiểm duyệt kỹ thuật',
      'Tự động bàn giao mã nguồn trọn gói 1-click ngay sau khi thanh toán',
      '100% mã nguồn Clean Code chuẩn hóa, test sạch bug & kèm tài liệu setup',
      'Hỗ trợ kỹ thuật cài đặt trực tiếp và chính sách bảo hành mã nguồn'
    ],
    brands: [
      { name: 'REACT', bgColor: 'bg-cyan-950/80 border-cyan-500/40', textColor: 'text-cyan-400' },
      { name: 'FLUTTER', bgColor: 'bg-sky-950/80 border-sky-500/40', textColor: 'text-sky-400' },
      { name: 'NODEJS', bgColor: 'bg-emerald-950/80 border-emerald-500/40', textColor: 'text-emerald-400' }
    ],
    buttonText: 'Khám phá ngay',
    badge: 'FoCode Marketplace',
    previewType: 'focode'
  },
  {
    id: 'custom',
    tabLabel: 'Khác',
    title: 'Lĩnh vực Giải pháp Tùy biến (Khác)',
    subtitle: 'Phát triển hệ thống ERP/CRM, App Mobile & giải pháp chuyển đổi số theo yêu cầu',
    bullets: [
      'Phát triển ứng dụng Mobile (iOS/Android) & Web Application quy mô lớn',
      'Tích hợp hệ thống phần mềm doanh nghiệp (ERP, CRM, POS, Payment Gateway)',
      'Tư vấn kiến trúc Cloud Microservices, tối ưu hạ tầng Server & Database',
      'Đội ngũ chuyên gia CNTT đồng hành chuyển giao quy trình kỹ thuật trọn gói'
    ],
    brands: [
      { name: 'TECHCOMBANK', bgColor: 'bg-red-950/80 border-red-500/40', textColor: 'text-red-400' },
      { name: 'SHOPEE', bgColor: 'bg-orange-950/80 border-orange-500/40', textColor: 'text-orange-400' },
      { name: 'GRAB', bgColor: 'bg-emerald-950/80 border-emerald-500/40', textColor: 'text-emerald-400' }
    ],
    buttonText: 'Khám phá ngay',
    badge: 'Custom Enterprise System',
    previewType: 'custom'
  }
];
