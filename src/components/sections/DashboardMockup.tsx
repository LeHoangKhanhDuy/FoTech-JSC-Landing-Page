import { useState } from 'react';
import {
  Bot,
  CalendarCheck2,
  CheckCircle2,
  Clock,
  Sparkles,
  TrendingUp,
  Wallet,
  ShieldCheck,
  Send,
  Building2,
  Users,
  ChevronRight,
} from 'lucide-react';

const samplePrompts = [
  {
    question: 'Quy định tính ngày phép theo Luật Lao Động 2026?',
    answer: 'Theo Điều 113 Luật LĐ 2026, nhân viên làm đủ 12 tháng được hưởng 12 ngày phép/năm. Thâm niên cứ 05 năm được cộng thêm 01 ngày.',
    action: 'Xem điều khoản chi tiết',
  },
  {
    question: 'Duyệt tự động 5 đơn nghỉ phép phòng Sales?',
    answer: 'Đã đối soát quỹ phép còn lại và lịch làm ca. 5 đơn xin nghỉ của phòng Sales đều hợp lệ và đã được phê duyệt tự động.',
    action: 'Xem 5 đơn vừa duyệt',
  },
  {
    question: 'Tổng hợp bảng lương Tháng 8 cho 120 nhân sự?',
    answer: 'Đã tính toán xong công chuẩn, tăng ca OT, phụ cấp và thuế TNCN lũy tiến. Tổng quỹ lương: 1.420.000.000 VNĐ.',
    action: 'Xuất file Excel & Chi trả Bank API',
  },
];

export default function DashboardMockup() {
  const [activePromptIndex, setActivePromptIndex] = useState(0);

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* Background Glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 opacity-30 blur-2xl dark:opacity-40 animate-pulse-glow" />

      {/* Main Dashboard Container */}
      <div className="relative rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-2xl backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/95 sm:p-5">
        
        {/* Top Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-3 w-3 gap-1.5">
              <span className="h-3 w-3 rounded-full bg-rose-500" />
              <span className="h-3 w-3 rounded-full bg-amber-500" />
              <span className="h-3 w-3 rounded-full bg-emerald-500" />
            </div>
            <div className="h-4 w-px bg-slate-200 dark:bg-slate-800" />
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
              <Building2 className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
              <span>FoTech JSC - Operations Dashboard</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
              AI Assistant Active
            </span>
            <span className="hidden items-center gap-1 text-[11px] font-medium text-slate-500 dark:text-slate-400 sm:inline-flex">
              <ShieldCheck className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
              ISO 27001
            </span>
          </div>
        </div>

        {/* Dashboard Grid: 2 Panels */}
        <div className="mt-4 grid gap-4 lg:grid-cols-12">
          
          {/* Panel 1: Trợ lý AI (AI HR Assistant Panel) - 6 cols */}
          <div className="flex flex-col justify-between rounded-xl border border-blue-100 bg-gradient-to-b from-blue-50/50 to-white p-4 dark:border-slate-800 dark:from-slate-800/60 dark:to-slate-900 lg:col-span-6">
            <div>
              <div className="flex items-center justify-between border-b border-blue-100/60 pb-3 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md shadow-blue-500/30">
                    <Bot className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Trợ lý AI Nhân sự (FoHRM Bot)</h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">Hỏi đáp quy chế & Tự động hóa quy trình</p>
                  </div>
                </div>
                <span className="rounded-md bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700 dark:bg-blue-900/50 dark:text-blue-300">
                  Tiếng Việt 100%
                </span>
              </div>

              {/* Chat Prompts Selector */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {samplePrompts.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePromptIndex(idx)}
                    className={`rounded-lg px-2.5 py-1 text-[11px] font-medium transition ${
                      activePromptIndex === idx
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                    }`}
                  >
                    {idx === 0 ? '💬 Luật Lao Động' : idx === 1 ? '⚡ Duyệt Phép' : '💰 Tính Lương'}
                  </button>
                ))}
              </div>

              {/* Simulated Chat Dialogue */}
              <div className="mt-3.5 space-y-3">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="max-w-[85%] rounded-2xl rounded-tr-none bg-blue-600 px-3 py-2 text-xs font-medium text-white shadow-sm">
                    {samplePrompts[activePromptIndex].question}
                  </div>
                </div>

                {/* AI Assistant Reply */}
                <div className="flex gap-2">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                  <div className="max-w-[88%] rounded-2xl rounded-tl-none border border-slate-200 bg-white p-3 text-xs shadow-sm dark:border-slate-700 dark:bg-slate-800">
                    <p className="leading-relaxed text-slate-700 dark:text-slate-200">
                      {samplePrompts[activePromptIndex].answer}
                    </p>
                    <div className="mt-2.5 flex items-center justify-between border-t border-slate-100 pt-2 dark:border-slate-700/60">
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="h-3 w-3" aria-hidden="true" /> Tuân thủ 100% Luật LĐ
                      </span>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-600 hover:underline dark:text-blue-400"
                      >
                        {samplePrompts[activePromptIndex].action}
                        <ChevronRight className="h-3 w-3" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input Box */}
            <div className="mt-4 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-800">
              <input
                type="text"
                readOnly
                value="Nhập câu hỏi HR hoặc yêu cầu trợ lý AI..."
                className="w-full text-xs text-slate-400 bg-transparent outline-none cursor-default"
              />
              <button
                type="button"
                className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                <Send className="h-3 w-3" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Panel 2: Tổng quan vận hành (HR Operations Panel) - 6 cols */}
          <div className="flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-900/60 lg:col-span-6">
            <div>
              <div className="flex items-center justify-between border-b border-slate-200/60 pb-3 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
                    <TrendingUp className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">Tổng quan Vận hành HR</h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">Dữ liệu thời gian thực (Real-time)</p>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">Hôm nay</span>
              </div>

              {/* 3 Metric Cards */}
              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="rounded-xl border border-slate-200/60 bg-white p-2.5 shadow-sm dark:border-slate-800 dark:bg-slate-800">
                  <div className="flex items-center gap-1.5 text-blue-600">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">Chấm công</span>
                  </div>
                  <p className="mt-1 text-sm font-extrabold text-slate-900 dark:text-white">98.4%</p>
                  <p className="text-[9px] text-emerald-600 font-semibold">542/550 đúng giờ</p>
                </div>

                <div className="rounded-xl border border-slate-200/60 bg-white p-2.5 shadow-sm dark:border-slate-800 dark:bg-slate-800">
                  <div className="flex items-center gap-1.5 text-amber-500">
                    <CalendarCheck2 className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">Nghỉ phép</span>
                  </div>
                  <p className="mt-1 text-sm font-extrabold text-slate-900 dark:text-white">8 đơn</p>
                  <p className="text-[9px] text-blue-600 font-semibold">Cần duyệt ngay</p>
                </div>

                <div className="rounded-xl border border-slate-200/60 bg-white p-2.5 shadow-sm dark:border-slate-800 dark:bg-slate-800">
                  <div className="flex items-center gap-1.5 text-emerald-600">
                    <Wallet className="h-3.5 w-3.5" aria-hidden="true" />
                    <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">Bảng lương</span>
                  </div>
                  <p className="mt-1 text-sm font-extrabold text-slate-900 dark:text-white">T8 Sẵn sàng</p>
                  <p className="text-[9px] text-emerald-600 font-semibold">Đã kiểm tra 100%</p>
                </div>
              </div>

              {/* Department Attendance Heatmap / Visual Bar */}
              <div className="mt-3 rounded-xl border border-slate-200/60 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-800">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 dark:text-slate-200">
                  <span>Tỷ lệ có mặt theo phòng ban</span>
                  <span className="text-emerald-600">+4.2% so với tháng trước</span>
                </div>
                <div className="mt-2.5 space-y-2">
                  {[
                    { dept: 'Khối Công nghệ & Sản phẩm', percent: 99, color: 'bg-blue-600' },
                    { dept: 'Khối Kinh doanh & Marketing', percent: 97, color: 'bg-indigo-500' },
                    { dept: 'Khối Vận hành & Hành chính', percent: 98, color: 'bg-emerald-500' },
                  ].map((item) => (
                    <div key={item.dept}>
                      <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400">
                        <span>{item.dept}</span>
                        <span className="font-bold text-slate-700 dark:text-slate-200">{item.percent}%</span>
                      </div>
                      <div className="mt-1 h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-700">
                        <div
                          className={`h-1.5 rounded-full ${item.color}`}
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Status Bar */}
            <div className="mt-3 flex items-center justify-between rounded-lg bg-blue-50 px-3 py-2 dark:bg-blue-950/40">
              <div className="flex items-center gap-2">
                <Users className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
                <span className="text-[11px] font-semibold text-blue-900 dark:text-blue-200">
                  Đã đồng bộ 100% dữ liệu máy chấm công & App Mobile
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Floating Glowing Badges */}
      <div className="absolute -left-6 top-1/4 hidden rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 sm:flex items-center gap-3 animate-float-card">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
          <Bot className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-bold text-slate-900 dark:text-white">FINA AI Assistant</p>
          <p className="text-[10px] text-slate-500 dark:text-slate-400">Tự động trả lời 200+ câu hỏi HR/ngày</p>
        </div>
      </div>

      <div className="absolute -right-6 bottom-8 hidden rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 sm:flex items-center gap-3 animate-float-card" style={{ animationDelay: '1.5s' }}>
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
          <Wallet className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-bold text-slate-900 dark:text-white">Tích hợp Bank API</p>
          <p className="text-[10px] text-slate-500 dark:text-slate-400">Chi trả bảng lương 1-click an toàn</p>
        </div>
      </div>
    </div>
  );
}
