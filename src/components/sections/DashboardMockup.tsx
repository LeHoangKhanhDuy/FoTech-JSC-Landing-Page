import { Bot, CalendarCheck2, Clock3, MoreHorizontal, TrendingUp, WalletCards } from 'lucide-react';

const floatingCards = [
  { label: 'Attendance', value: '96.4%', icon: Clock3, className: 'left-0 top-16' },
  { label: 'Leave', value: '18 đơn', icon: CalendarCheck2, className: 'right-2 top-5' },
  { label: 'Payroll', value: 'Ready', icon: WalletCards, className: 'bottom-10 left-5' },
  { label: 'FINA AI', value: 'Online', icon: Bot, className: 'bottom-20 right-0' },
];

export default function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="dashboard-grid glass-panel overflow-hidden rounded-2xl p-4 md:p-5">
        <div className="rounded-xl border border-slate-200 bg-white shadow-2xl shadow-[#1972F5]/10 dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-slate-800">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1972F5]">FoTalent AI</p>
              <h3 className="mt-1 text-lg font-bold text-slate-950 dark:text-white">HR Operations Center</h3>
            </div>
            <button
              type="button"
              aria-label="Mở thêm tùy chọn"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-900 dark:text-slate-300"
            >
              <MoreHorizontal className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="grid gap-4 p-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                {['On-time', 'Leave', 'Payroll'].map((item, index) => (
                  <div key={item} className="rounded-lg border border-slate-100 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
                    <p className="text-xs text-slate-500 dark:text-slate-400">{item}</p>
                    <p className="mt-2 text-lg font-bold text-slate-950 dark:text-white">
                      {index === 0 ? '92%' : index === 1 ? '24' : '98%'}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Attendance Analytics</p>
                  <TrendingUp className="h-5 w-5 text-[#00C951]" aria-hidden="true" />
                </div>
                <div className="flex h-36 items-end gap-2">
                  {[42, 62, 48, 74, 58, 88, 69, 95, 82].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-md bg-[#1972F5]"
                      style={{ height: `${height}%`, opacity: 0.36 + index * 0.06 }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-bold text-slate-900 dark:text-white">Department Performance</p>
                <div className="mt-4 space-y-3">
                  {[
                    ['Sales', 86, '#1972F5'],
                    ['Factory', 74, '#00C951'],
                    ['Finance', 63, '#FEBA17'],
                  ].map(([name, width, color]) => (
                    <div key={name}>
                      <div className="mb-1 flex justify-between text-xs text-slate-500 dark:text-slate-400">
                        <span>{name}</span>
                        <span>{width}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                        <div className="h-2 rounded-full" style={{ width: `${width}%`, backgroundColor: String(color) }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                <p className="text-sm font-bold text-slate-900 dark:text-white">Heatmap</p>
                <div className="mt-4 grid grid-cols-7 gap-2">
                  {Array.from({ length: 28 }).map((_, index) => (
                    <span
                      key={index}
                      className="aspect-square rounded-md"
                      style={{
                        backgroundColor: index % 6 === 0 ? '#FF2056' : index % 4 === 0 ? '#FEBA17' : index % 3 === 0 ? '#00C951' : '#1972F5',
                        opacity: 0.18 + (index % 5) * 0.12,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {floatingCards.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className={`absolute hidden min-w-36 rounded-lg border border-slate-200 bg-white/90 p-3 shadow-xl shadow-slate-200/70 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90 dark:shadow-black/20 md:block ${item.className}`}
            style={{ animation: `float-card ${5 + index}s ease-in-out infinite` }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1972F5]/10 text-[#1972F5]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-slate-500 dark:text-slate-400">{item.label}</span>
                <span className="block text-sm font-bold text-slate-950 dark:text-white">{item.value}</span>
              </span>
            </div>
          </div>
        );
      })}
      <style>{`
        @keyframes float-card {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
}
