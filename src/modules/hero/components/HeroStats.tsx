export interface HeroStatItem {
  value: string;
  label: string;
}

const statsData: HeroStatItem[] = [
  {
    value: "99.99%",
    label: "Tỷ lệ Sẵn sàng System SLA",
  },
  {
    value: "500+",
    label: "Doanh nghiệp Tin dùng",
  },
  {
    value: "10M+",
    label: "Tác vụ Xử lý / Ngày",
  },
  {
    value: "<50ms",
    label: "Tốc độ Phản hồi FINA AI",
  },
];

export default function HeroStats() {
  return (
    <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 py-5 backdrop-blur-sm shadow-xl shadow-blue-950/20">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800/80 text-center">
          {statsData.map((stat, idx) => (
            <div key={idx} className="px-4 py-2 flex flex-col items-center justify-center">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                {stat.value}
              </span>
              <span className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
