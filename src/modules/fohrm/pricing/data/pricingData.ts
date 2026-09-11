import { PricingSectionData } from '@/modules/fohrm/pricing/types/pricingTypes';

export const pricingData: PricingSectionData = {
  badge: "BẢNG GIÁ MINH BẠCH",
  title: "Linh Hoạt Theo Quy Mô Doanh Nghiệp",
  subtitle:
    "Không chi phí ẩn. Chọn gói giải pháp phù hợp cho doanh nghiệp của bạn",
  freeTrial: {
    title: "Dùng thử miễn phí",
    badge: "14 NGÀY",
    infoText: "14 ngày trải nghiệm trọn gói tính năng, không cần thẻ tín dụng",
    buttonText: "Bắt đầu ngay",
    modalType: "trial",
  },
  plans: [
    {
      id: "starter",
      name: "Starter",
      description:
        "Phù hợp cho cửa hàng F&B, Retail hoặc Startup bắt đầu chuẩn hóa chấm công và đơn từ tự động.",
      annual: {
        price: "230.000 đ",
        period: "/tháng",
        billingNote: "Thanh toán 2.760.000 đ/năm",
      },
      monthly: {
        price: "290.000 đ",
        period: "/tháng",
        billingNote: "Thanh toán linh hoạt từng tháng",
      },
      features: [
        "+20.000 đ /nhân sự thêm",
        "Sẵn 10 tài khoản nhân sự đầu tiên",
        "Chấm công GPS, QR Code & Wi-Fi đa điểm",
        "Quản lý đơn từ & Quỹ phép năm tự động",
        "Bảng công linh hoạt cho nhân viên part-time / ca xoay",
        "Cổng thông tin nhân viên (Self-Service Web & App)",
      ],
      highlighted: false,
      hasToggle: true,
      buttonText: "Dùng Thử Starter",
      modalType: "trial",
    },
    {
      id: "growth",
      name: "Growth",
      badge: "Phổ biến nhất",
      description:
        "Giải pháp tự động hóa toàn diện C&B, tính lương đa ca kíp và tích hợp ngân hàng cho doanh nghiệp đang mở rộng.",
      annual: {
        price: "1.790.000 đ",
        period: "/tháng",
        billingNote: "Thanh toán 21.480.000 đ/năm",
      },
      monthly: {
        price: "2.250.000 đ",
        period: "/tháng",
        billingNote: "Thanh toán linh hoạt từng tháng",
      },
      features: [
        "+36.000 đ /nhân sự thêm",
        "Toàn bộ tính năng Starter + Sẵn 50 tài khoản nhân sự",
        "Chấm công AI FaceID chống gian lận",
        "Bảng tổng lương (Master Payroll) cột động tùy biến",
        "Tự động trích nộp BHXH (10.5% & 23.5%) & Thuế TNCN lũy tiến 2026",
        "Chi lương tự động qua API Ngân hàng liên kết (1-click)",
        "Trợ lý ảo AI FINA phân tích dữ liệu nhân sự 24/7",
      ],
      highlighted: true,
      hasToggle: true,
      buttonText: "Chọn Gói Growth",
      modalType: "trial",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      badge: "Tập đoàn & Chuỗi lớn",
      description:
        "Dành riêng cho tập đoàn đa pháp nhân, chuỗi nhà máy hoặc hệ sinh thái lớn cần hạ tầng bảo mật độc lập.",
      annual: {
        price: "Liên hệ",
        period: "",
        billingNote: "Báo giá may đo theo quy mô từ 150+ nhân sự",
      },
      monthly: {
        price: "Liên hệ",
        period: "",
        billingNote: "Báo giá may đo theo quy mô từ 150+ nhân sự",
      },
      features: [
        "Không giới hạn quy mô số lượng nhân sự",
        "Tùy chỉnh luồng tính lương và tích hợp ERP chuyên biệt",
        "Phân quyền quản trị nâng cao (Multi-tenant & Multi-branch)",
        "Triển khai Server riêng (Private AWS Cloud)",
        "Cam kết chất lượng dịch vụ SLA 99.99% & Quản lý tài khoản riêng",
      ],
      highlighted: false,
      hasToggle: false,
      buttonText: "Đặt Lịch Tư Vấn",
      modalType: "consulting",
    },
  ],
};
