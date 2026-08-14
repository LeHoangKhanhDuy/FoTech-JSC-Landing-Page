import { useState } from 'react';
import { ShoppingBag, Factory, Laptop, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '@/components/common/Button';
import LeadModal from '@/components/common/LeadModal';

const solutionsData = [
  {
    id: 'retail',
    name: 'Chuỗi Bán Lẻ & F&B',
    icon: ShoppingBag,
    tagline: 'Quản lý hàng trăm chi nhánh & ca làm xoay vòng',
    highlights: [
      'Chấm công QR & Wifi tại từng cửa hàng',
      'Tự động xếp ca xoay, ca gãy và ca đêm',
      'Tính lương thưởng doanh số (Commission) tự động',
      'Cảnh báo đi muộn/về sớm tức thời cho Cửa hàng trưởng',
    ],
    stats: 'Giảm 80% thời gian tổng hợp công tại cửa hàng',
  },
  {
    id: 'factory',
    name: 'Nhà Máy & Sản Xuất',
    icon: Factory,
    tagline: 'Chấm công hàng ngàn công nhân & đối soát OT chuẩn xác',
    highlights: [
      'Tích hợp máy chấm công FaceID tốc độ 0.2s/người',
      'Tự động tính phụ cấp ca 3, độc hại, ăn trưa',
      'Kiểm soát hạn mức tăng ca OT theo Luật Lao động',
      'Xuất phiếu lương giấy & thông báo Zalo ZNS',
    ],
    stats: 'Chính xác 100% dữ liệu lương công nhân',
  },
  {
    id: 'tech',
    name: 'Công Nghệ & Dịch Vụ',
    icon: Laptop,
    tagline: 'Tự động hóa nhân sự cho đội ngũ Hybrid Work',
    highlights: [
      'Check-in GPS kèm nhận diện khuôn mặt trên Mobile App',
      'Tích hợp đánh giá KPI, OKR & hiệu suất quý',
      'Phê duyệt đơn nghỉ, WFH 1-click qua Slack / Teams',
      'FINA AI trả lời nhanh mọi chính sách công ty',
    ],
    stats: 'Tăng 35% mức độ hài lòng của nhân viên',
  },
  {
    id: 'enterprise',
    name: 'Doanh Nghiệp Đa Chi Nhánh',
    icon: Layers,
    tagline: 'Phân quyền đa cấp & Báo cáo tập trung Realtime',
    highlights: [
      'Phân quyền RBAC chi tiết theo phòng ban/chi nhánh',
      'Chi trả lương tập trung qua kết nối Bank API',
      'Báo cáo biến động nhân sự & chi phí nhân công realtime',
      'Đạt chuẩn an toàn thông tin ISO 27001',
    ],
    stats: 'Tiết kiệm 60h công sức xử lý HR mỗi tháng',
  },
];

export default function SolutionSection() {
  const [selectedSolution, setSelectedSolution] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const current = solutionsData[selectedSolution];
  const Icon = current.icon;

  return (
    <section id="solutions" className="relative py-20 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
            <Layers className="h-3.5 w-3.5" aria-hidden="true" />
            Giải Pháp Theo Ngành
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Tùy Chỉnh Linh Hoạt Cho Mọi Mô Hình Doanh Nghiệp
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            Dù bạn vận hành 20 hay 5,000 nhân sự, FoHRM luôn có gói giải pháp tối ưu nhất cho ngành nghề của bạn.
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {solutionsData.map((sol, index) => {
            const TabIcon = sol.icon;
            const isSelected = selectedSolution === index;

            return (
              <button
                key={sol.id}
                type="button"
                onClick={() => setSelectedSolution(index)}
                className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all duration-200 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-[1.02]'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <TabIcon className="h-4 w-4" aria-hidden="true" />
                <span>{sol.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Card Content */}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50/60 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 md:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/30">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {current.name}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {current.tagline}
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {current.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  variant="primary"
                  onClick={() => setModalOpen(true)}
                  icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                >
                  Nhận giải pháp tư vấn cho {current.name}
                </Button>
              </div>
            </div>

            {/* Right Metric Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-blue-200/60 bg-white p-7 shadow-xl dark:border-blue-900/40 dark:bg-slate-800">
                <div className="flex items-center gap-2 text-xs font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  <span>Hiệu quả thực tế</span>
                </div>
                <p className="mt-3 text-2xl font-extrabold leading-snug text-slate-900 dark:text-white">
                  "{current.stats}"
                </p>
                <div className="mt-6 border-t border-slate-100 pt-4 text-xs font-medium text-slate-500 dark:border-slate-700 dark:text-slate-400">
                  Tất cả tính năng được thiết kế theo đúng đặc thụ vận hành của ngành {current.name}.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type="demo"
      />
    </section>
  );
}
