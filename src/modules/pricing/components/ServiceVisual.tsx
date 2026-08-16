import { ServiceId } from "@/modules/pricing/types/pricing-types";
import { Users, CheckCircle, Code2, HeartPulse, Globe } from "lucide-react";

interface ServiceVisualProps {
  serviceId: ServiceId;
}

export default function ServiceVisual({ serviceId }: ServiceVisualProps) {
  if (serviceId === "fohrm") {
    return (
      <div className="relative w-full max-w-[340px] rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl">
        <div className="absolute -inset-4 pointer-events-none -z-10 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent_70%)]" />
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600/30 text-blue-400">
              <Users className="h-4 w-4" />
            </div>
            <span className="text-xs font-bold text-white">
              FoHRM AI Assistant
            </span>
          </div>
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-2.5">
            <span className="text-[10px] text-slate-400">
              Chấm công hôm nay
            </span>
            <div className="mt-1 text-sm font-extrabold text-emerald-400">
              98.5%
            </div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-2.5">
            <span className="text-[10px] text-slate-400">
              Bảng lương T8/2026
            </span>
            <div className="mt-1 text-sm font-extrabold text-blue-400">
              Đã phê duyệt
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-950/40 p-2.5">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">
              HR
            </div>
            <div>
              <div className="text-xs font-semibold text-white">
                Tự động hóa Payroll
              </div>
              <div className="text-[10px] text-slate-400">
                Tính bảo hiểm & thuế TNCN
              </div>
            </div>
          </div>
          <CheckCircle className="h-4 w-4 text-emerald-400" />
        </div>
      </div>
    );
  }

  if (serviceId === "focode") {
    return (
      <div className="relative w-full max-w-[340px] rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-600/30 text-purple-400">
              <Code2 className="h-4 w-4" />
            </div>
            <span className="text-xs font-bold text-white">
              FoCode Terminal
            </span>
          </div>
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
        </div>

        <div className="mt-3 rounded-xl border border-slate-800 bg-slate-950/80 p-3 font-mono text-[11px] leading-relaxed">
          <div className="text-purple-400">
            $ focode deploy --env=production
          </div>
          <div className="text-slate-400 mt-1">✔ Building Microservices...</div>
          <div className="text-emerald-400">
            ✔ Core Web Vitals Score: 99/100
          </div>
          <div className="text-blue-400">✔ CI/CD Deployment Passed!</div>
        </div>
      </div>
    );
  }

  if (serviceId === "fomed") {
    return (
      <div className="relative w-full max-w-[340px] rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-600/30 text-emerald-400">
              <HeartPulse className="h-4 w-4" />
            </div>
            <span className="text-xs font-bold text-white">
              FoMed Clinic EMR
            </span>
          </div>
          <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-emerald-400">
            BYT Standard
          </span>
        </div>

        <div className="mt-3 space-y-2">
          <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 text-xs">
            <span className="text-slate-300">Hồ sơ Bệnh án EMR</span>
            <span className="font-bold text-emerald-400">Đồng bộ 100%</span>
          </div>
          <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/60 p-2.5 text-xs">
            <span className="text-slate-300">Kho thuốc & Đơn điện tử</span>
            <span className="font-bold text-blue-400">Tự động cảnh báo</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[340px] rounded-2xl border border-slate-800 bg-slate-900/90 p-4 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-600/30 text-amber-400">
            <Globe className="h-4 w-4" />
          </div>
          <span className="text-xs font-bold text-white">Web Architecture</span>
        </div>
        <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[9px] font-bold text-amber-400">
          SEO 100
        </span>
      </div>

      <div className="mt-3 rounded-xl border border-slate-800 bg-slate-950/60 p-3 text-xs space-y-2">
        <div className="flex justify-between text-slate-300">
          <span>Tối ưu Responsive</span>
          <span className="text-emerald-400 font-bold">Hoàn hảo</span>
        </div>
        <div className="flex justify-between text-slate-300">
          <span>Tốc độ tải trang</span>
          <span className="text-blue-400 font-bold">&lt; 0.8 giây</span>
        </div>
      </div>
    </div>
  );
}
