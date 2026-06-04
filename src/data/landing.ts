import {
  BadgeCheck,
  BarChart3,
  Bot,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  FileSpreadsheet,
  Fingerprint,
  Gauge,
  Globe2,
  LineChart,
  LockKeyhole,
  MessageSquareText,
  ScanFace,
  Sparkles,
  TimerReset,
  UsersRound,
  WalletCards,
  Workflow,
  Zap,
} from 'lucide-react';
import type { FaqItem, Feature, IconCard, PricingPlan, Stat } from '@/types/landing';

export const heroStats: Stat[] = [
  { value: 100, suffix: '+', label: 'Doanh nghiệp' },
  { value: 10000, suffix: '+', label: 'Nhân viên' },
  { value: 99.9, suffix: '%', label: 'Độ ổn định', decimals: 1 },
];

export const trustedCompanies = [
  'FoTech',
  'ABC Corp',
  'XYZ Group',
  'Tech Startup',
  'Retail Chain',
  'Manufacturing Co',
];

export const problems: IconCard[] = [
  {
    title: 'Chấm công thủ công',
    description: 'Dữ liệu vào ra thiếu chính xác, mất nhiều giờ tổng hợp mỗi kỳ lương.',
    icon: Clock3,
    tone: 'danger',
  },
  {
    title: 'Dữ liệu rời rạc',
    description: 'Thông tin nhân sự nằm ở nhiều file, nhiều nhóm chat và khó kiểm soát phiên bản.',
    icon: Workflow,
    tone: 'warning',
  },
  {
    title: 'Tính lương bằng Excel',
    description: 'Công thức phức tạp, dễ sai sót khi có tăng ca, phụ cấp và ngày nghỉ.',
    icon: FileSpreadsheet,
    tone: 'danger',
  },
  {
    title: 'Nghỉ phép khó quản lý',
    description: 'Luồng duyệt chậm, nhân viên khó biết số ngày phép còn lại theo thời gian thực.',
    icon: CalendarCheck2,
    tone: 'warning',
  },
  {
    title: 'HR bị hỏi quá nhiều',
    description: 'Các câu hỏi lặp lại về phép, lương, ca làm khiến đội HR quá tải.',
    icon: MessageSquareText,
    tone: 'primary',
  },
  {
    title: 'Thiếu báo cáo tức thời',
    description: 'Ban lãnh đạo không có dữ liệu vận hành nhân sự đủ nhanh để ra quyết định.',
    icon: BarChart3,
    tone: 'success',
  },
];

export const solutionSteps = [
  { title: 'Attendance', description: 'Ghi nhận GPS, QR, FaceID, Wifi theo ca làm.' },
  { title: 'Leave', description: 'Tự động kiểm tra quỹ phép, tuyến duyệt và trạng thái.' },
  { title: 'Payroll', description: 'Chuyển dữ liệu công, nghỉ, tăng ca thành bảng lương.' },
  { title: 'AI Assistant', description: 'FINA phản hồi câu hỏi HR bằng tiếng Việt.' },
  { title: 'Analytics', description: 'Dashboard tức thời cho vận hành và lãnh đạo.' },
];

export const features: Feature[] = [
  {
    title: 'Attendance',
    description: 'Chấm công đa phương thức phù hợp mô hình văn phòng, nhà máy và chuỗi bán lẻ.',
    icon: Fingerprint,
    tone: 'primary',
    points: ['GPS', 'QR', 'FaceID', 'Wifi'],
  },
  {
    title: 'Leave',
    description: 'Quản lý phép minh bạch với luồng duyệt linh hoạt theo phòng ban.',
    icon: CalendarCheck2,
    tone: 'success',
    points: ['Đăng ký nghỉ', 'Phê duyệt', 'Quỹ phép', 'Lịch đội nhóm'],
  },
  {
    title: 'Payroll',
    description: 'Tự động hóa dữ liệu tính lương, phụ cấp, tăng ca và khấu trừ.',
    icon: WalletCards,
    tone: 'warning',
    points: ['Tính lương tự động', 'Phụ cấp', 'Tăng ca', 'Xuất bảng lương'],
  },
  {
    title: 'Employee Portal',
    description: 'Self Service giúp nhân viên chủ động xử lý tác vụ HR thường ngày.',
    icon: UsersRound,
    tone: 'primary',
    points: ['Hồ sơ cá nhân', 'Phiếu lương', 'Đơn từ', 'Thông báo'],
  },
  {
    title: 'Analytics',
    description: 'Dashboard theo dõi tình hình nhân sự, công, phép và hiệu suất vận hành.',
    icon: LineChart,
    tone: 'success',
    points: ['Dashboard', 'KPI', 'Heatmap', 'Báo cáo tức thời'],
  },
  {
    title: 'AI Assistant',
    description: 'Chat HR bằng tiếng Việt để trả lời nhanh các câu hỏi nhân viên.',
    icon: Bot,
    tone: 'danger',
    points: ['FINA AI', 'Hỏi đáp HR', 'Gợi ý quy trình', 'Tra cứu nhanh'],
  },
];

export const modules: IconCard[] = [
  { title: 'Attendance', description: 'Ca làm, công chuẩn, đi muộn, về sớm.', icon: TimerReset, tone: 'primary' },
  { title: 'Leave', description: 'Đơn nghỉ, phép năm, lịch vắng mặt.', icon: CalendarCheck2, tone: 'success' },
  { title: 'Payroll', description: 'Bảng lương, phụ cấp, khấu trừ.', icon: WalletCards, tone: 'warning' },
  { title: 'Employee', description: 'Hồ sơ, hợp đồng, tài liệu nhân sự.', icon: UsersRound, tone: 'primary' },
  { title: 'Recruitment', description: 'Nguồn ứng viên, phỏng vấn, offer.', icon: Building2, tone: 'danger' },
  { title: 'Performance', description: 'Mục tiêu, đánh giá, năng lực.', icon: Gauge, tone: 'success' },
  { title: 'Offboarding', description: 'Bàn giao, tài sản, xác nhận nghỉ việc.', icon: CheckCircle2, tone: 'warning' },
];

export const benefits: IconCard[] = [
  { title: 'Dễ triển khai', description: 'Cấu hình nhanh theo phòng ban, ca làm và chính sách hiện có.', icon: Zap, tone: 'warning' },
  { title: 'AI tiếng Việt', description: 'FINA hiểu ngữ cảnh HR Việt Nam và trả lời tự nhiên.', icon: Sparkles, tone: 'primary' },
  { title: 'UI hiện đại', description: 'Trải nghiệm rõ ràng cho HR, quản lý và nhân viên.', icon: ScanFace, tone: 'success' },
  { title: 'Multi Tenant', description: 'Sẵn sàng vận hành nhiều công ty, chi nhánh, đơn vị.', icon: Globe2, tone: 'primary' },
  { title: 'Bảo mật cao', description: 'Phân quyền, nhật ký hoạt động và kiểm soát truy cập.', icon: LockKeyhole, tone: 'danger' },
  { title: 'Giá hợp lý', description: 'Linh hoạt theo quy mô nhân sự và tốc độ tăng trưởng.', icon: BadgeCheck, tone: 'success' },
];

export const testimonials = [
  {
    name: 'Nguyễn Minh Anh',
    role: 'CEO, Retail Chain',
    quote:
      'FoTalent AI giúp chúng tôi chuẩn hóa dữ liệu chấm công và giảm đáng kể thời gian xử lý bảng lương cho hơn 600 nhân sự.',
  },
  {
    name: 'Trần Hoài Nam',
    role: 'HR Manager, Manufacturing Co',
    quote:
      'Điểm khác biệt lớn nhất là FINA. Nhân viên hỏi ngày phép, tăng ca hay quy trình đều nhận được câu trả lời rất nhanh.',
  },
  {
    name: 'Lê Thu Trang',
    role: 'Operations Manager, Tech Startup',
    quote:
      'Dashboard vận hành giúp đội quản lý nhìn thấy tình trạng nhân sự theo từng phòng ban mà không phải chờ báo cáo thủ công.',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    audience: '≤20 nhân viên',
    price: 'Liên hệ',
    description: 'Cho đội ngũ nhỏ bắt đầu số hóa HRM.',
    features: ['Chấm công cơ bản', 'Quản lý nghỉ phép', 'Employee Portal', 'Hỗ trợ email'],
  },
  {
    name: 'Growth',
    audience: '≤100 nhân viên',
    price: 'Phổ biến',
    description: 'Cho doanh nghiệp tăng trưởng cần tự động hóa toàn diện.',
    features: ['Tất cả trong Starter', 'Payroll tự động', 'FINA AI Assistant', 'Dashboard analytics', 'Hỗ trợ ưu tiên'],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    audience: 'Không giới hạn',
    price: 'Tùy chỉnh',
    description: 'Cho tổ chức đa chi nhánh, nhiều chính sách và yêu cầu bảo mật cao.',
    features: ['Tất cả trong Growth', 'Multi Tenant', 'SSO và phân quyền nâng cao', 'Tích hợp API', 'CSM riêng'],
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'FoTalent AI có phải phần mềm đăng nhập nội bộ không?',
    answer: 'Không. Đây là trang giới thiệu sản phẩm SaaS, phục vụ thu lead, đăng ký demo và đăng ký dùng thử.',
  },
  {
    question: 'FINA có hỗ trợ tiếng Việt không?',
    answer: 'Có. FINA được định hướng là AI Assistant tiếng Việt cho các câu hỏi HR thường gặp và tra cứu dữ liệu nhân sự.',
  },
  {
    question: 'Có thể chấm công bằng những cách nào?',
    answer: 'FoTalent AI hỗ trợ GPS, QR, FaceID và Wifi để phù hợp nhiều mô hình làm việc.',
  },
  {
    question: 'Hệ thống có thay thế Excel tính lương không?',
    answer: 'Có. Dữ liệu công, phép, tăng ca và phụ cấp được chuẩn hóa để tự động hóa bảng lương.',
  },
  {
    question: 'Doanh nghiệp nhiều chi nhánh có dùng được không?',
    answer: 'Có. FoTalent AI hỗ trợ multi tenant, nhiều phòng ban, chi nhánh và chính sách vận hành.',
  },
  {
    question: 'Có dashboard báo cáo tức thời không?',
    answer: 'Có. Dashboard cung cấp KPI, biểu đồ, heatmap và hiệu suất phòng ban theo thời gian thực.',
  },
  {
    question: 'Có thể tích hợp với hệ thống hiện tại không?',
    answer: 'Gói Enterprise có thể tích hợp API và cấu hình theo quy trình sẵn có của doanh nghiệp.',
  },
  {
    question: 'Dữ liệu nhân sự có được bảo mật không?',
    answer: 'FoTalent AI được thiết kế với phân quyền, kiểm soát truy cập và nhật ký hoạt động cho dữ liệu nhạy cảm.',
  },
  {
    question: 'Có bản dùng thử không?',
    answer: 'Có. Khách hàng có thể đăng ký trải nghiệm thử hoặc đặt lịch demo với đội FoTech.',
  },
  {
    question: 'Gói Growth phù hợp với ai?',
    answer: 'Growth phù hợp doanh nghiệp đến 100 nhân viên cần payroll, AI Assistant và báo cáo vận hành đầy đủ.',
  },
];
