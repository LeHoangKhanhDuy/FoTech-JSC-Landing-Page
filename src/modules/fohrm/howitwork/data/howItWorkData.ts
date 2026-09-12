import type { StepData } from '../types/howItWorkTypes';

export const HOW_IT_WORKS_STEPS: StepData[] = [
  {
    id: 'step-faceid-checkin',
    stepNumber: 1,
    badge: 'Bước 01 · Chấm Công Thông Minh',
    title: 'Check-in FaceID AI & Định vị GPS/Wifi tức thời',
    description:
      'Nhân viên điểm danh chỉ mất 0.2 giây với thuật toán AI FaceID nhận diện sống (anti-spoofing) độ chính xác 99.8%. Tích hợp định vị GPS bán kính văn phòng và xác thực Wifi công ty, loại bỏ hoàn toàn tình trạng chấm công hộ hay gian lận.',
    highlights: [
      'Nhận diện khuôn mặt FaceID 3D chống chụp ảnh/video giả mạo',
      'Khoanh vùng định vị GPS Geofencing & Wifi IP Router chuẩn xác',
      'Đồng bộ dữ liệu chấm công thời gian thực (Real-time Cloud Sync)',
    ],
    accentColor: '#2563eb', // Blue
    visualType: 'faceid',
    metrics: [
      { label: 'Tốc độ nhận diện', value: '0.2s', trend: 'Tức thời' },
      { label: 'Độ chuẩn xác', value: '99.8%', trend: 'Anti-spoofing' },
      { label: 'Đồng bộ Cloud', value: '100%', trend: 'Realtime' },
    ],
  },
  {
    id: 'step-shift-ai-assistant',
    stepNumber: 2,
    badge: 'Bước 02 · Tự Động Hóa Vận Hành',
    title: 'Phân ca kíp, đối soát công & Trợ lý FINA AI',
    description:
      'Tự động tổng hợp và phân loại dữ liệu chấm công theo ma trận ca kíp (ca xoay, ca gãy, ca đêm). Trợ lý ảo FINA AI tự động tiếp nhận, kiểm tra quỹ phép năm và phê duyệt đơn từ (nghỉ phép, làm ngoài giờ, công tác) trong vòng 5 giây.',
    highlights: [
      'Xử lý linh hoạt mọi mô hình ca kíp: ca gãy, ca xoay, tăng ca OT 1.5x - 2.0x',
      'Trợ lý ảo FINA AI giải đáp Luật Lao động & Quy chế nội bộ 24/7',
      'Duyệt đơn từ thông minh 1-click trực tiếp trên Mobile App & Zalo OA',
    ],
    accentColor: '#06b6d4', // Cyan
    visualType: 'fina_ai',
    metrics: [
      { label: 'Thời gian duyệt đơn', value: '< 5s', trend: 'Tự động' },
      { label: 'Tự động hóa tác vụ', value: '90%', trend: 'Tiết kiệm 80h/tháng' },
      { label: 'Hỗ trợ nhân viên', value: '24/7', trend: 'FINA AI' },
    ],
  },
  {
    id: 'step-payroll-calculation',
    stepNumber: 3,
    badge: 'Bước 03 · Tính Lương Chuẩn Xác',
    title: 'AI tự động tính lương, thuế TNCN & BHXH 2026',
    description:
      'Chỉ với một cú nhấp chuột, cỗ máy tính lương AI tự động tổng hợp ngày công thực tế, phụ cấp, tiền thưởng KPI, trích nộp BHXH (10.5%) và áp dụng biểu thuế TNCN lũy tiến mới nhất theo Luật Lao động Việt Nam 2026.',
    highlights: [
      'Triệt tiêu 100% sai sót tính toán thủ công và trùng lặp dữ liệu Excel',
      'Tự động cập nhật biểu thuế TNCN & mức đóng BHXH, BHYT, BHTN 2026',
      'Xuất phiếu lương điện tử mã hóa mật khẩu OTP gửi riêng từng nhân sự',
    ],
    accentColor: '#f59e0b', // Amber/Orange
    visualType: 'payroll',
    metrics: [
      { label: 'Tốc độ chốt lương', value: '3 phút', trend: 'Nhanh gấp 10 lần' },
      { label: 'Tỷ lệ chính xác', value: '100%', trend: 'Chuẩn luật' },
      { label: 'Bảo mật phiếu lương', value: 'OTP 2FA', trend: 'Mã hóa AES-256' },
    ],
  },
  {
    id: 'step-bank-accounting-sync',
    stepNumber: 4,
    badge: 'Bước 04 · Chi Lương & Kế Toán',
    title: 'Chi trả lương 1-Click Bank API & Đồng bộ hạch toán',
    description:
      'Tích hợp trực tiếp Open Banking API của các ngân hàng hàng đầu (Vietcombank, MB Bank, Techcombank, VPBank...). Thực hiện lệnh chi trả lương hàng loạt chỉ trong 30 giây, đồng thời tự động xuất hóa đơn chứng từ đồng bộ vào phần mềm kế toán MISA, FAST.',
    highlights: [
      'Giải ngân trực tiếp qua API ngân hàng, không cần xuất file import thủ công',
      'Hỗ trợ chi lương liên ngân hàng 24/7 tức thời, tỷ lệ thành công 99.99%',
      'Tự động hạch toán bút toán chi phí nhân công sang phần mềm kế toán',
    ],
    accentColor: '#10b981', // Emerald
    visualType: 'bank_api',
    metrics: [
      { label: 'Tốc độ giải ngân', value: '30s', trend: 'Hàng loạt' },
      { label: 'Kết nối ngân hàng', value: '4+ Big Banks', trend: 'Open API' },
      { label: 'Đồng bộ kế toán', value: 'MISA / FAST', trend: 'Tự động 100%' },
    ],
  },
];
