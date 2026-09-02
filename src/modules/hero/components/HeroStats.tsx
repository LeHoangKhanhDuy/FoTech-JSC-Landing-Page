export interface HeroStatItem {
  value: string;
  label: string;
}

const statsData: HeroStatItem[] = [
  {
    value: "10+",
    label: "Dịch vụ & Sản phẩm cốt lõi",
  },
  {
    value: "100%",
    label: "Dữ liệu mã hóa bảo mật",
  },
  {
    value: "20+",
    label: "Nền tảng tích hợp",
  },
  {
    value: "24/7",
    label: "Giám sát & Hỗ trợ kỹ thuật",
  },
];

export default function HeroStats() {
  return (
    <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
      <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 py-5 backdrop-blur-sm shadow-xl shadow-blue-950/20 transition-all duration-500 hover:shadow-blue-500/10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-800/80 text-center">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="group px-4 py-3 flex flex-col items-center justify-center rounded-xl transition-all duration-300 cursor-default"
            >
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white transition-all duration-300 inline-block">
                {stat.value}
              </span>
              <span className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 transition-colors duration-300">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
