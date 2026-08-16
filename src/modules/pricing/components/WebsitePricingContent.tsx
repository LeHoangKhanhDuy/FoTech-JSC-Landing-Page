import { CheckCircle2, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { websitePackagesData } from "@/modules/pricing/data/pricing-data";

interface WebsitePricingContentProps {
  onSelectPackage: (pkgName: string) => void;
}

export default function WebsitePricingContent({
  onSelectPackage,
}: WebsitePricingContentProps) {
  return (
    <div className="space-y-8">
      <div>
        <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/60 px-3.5 py-1 text-xs font-bold text-amber-400 backdrop-blur-md">
          <span>Web Development Pricing</span>
        </div>

        <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Thiết kế website theo nhu cầu{" "}
          <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
            doanh nghiệp
          </span>
        </h3>

        <p className="mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-300">
          Cung cấp các gói thiết kế website chuẩn SEO, giao diện UI/UX cao cấp,
          tương thích hoàn hảo trên mọi thiết bị với chi phí tối ưu nhất.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {websitePackagesData.map((pkg) => (
          <div
            key={pkg.id}
            className={`group relative flex flex-col justify-between rounded-2xl p-5 transition-all duration-200 ${
              pkg.popular
                ? "border-2 border-amber-500 bg-slate-900/90 shadow-[0_0_30px_rgba(245,158,11,0.2)]"
                : "border border-slate-800 bg-slate-900/50 hover:border-amber-500/40"
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-amber-500 px-3 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-slate-950 shadow-md">
                  PHỔ BIẾN NHẤT
                </span>
              </div>
            )}

            <div>
              <h4 className="text-lg font-bold text-white">{pkg.name}</h4>
              <p className="text-[11px] text-slate-400 font-medium">
                {pkg.target}
              </p>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-2xl font-extrabold text-amber-400 tracking-tight">
                  {pkg.price}
                </span>
                <span className="text-[11px] text-slate-400">{pkg.period}</span>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-slate-300">
                {pkg.description}
              </p>

              <ul className="mt-4 space-y-2">
                {pkg.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-2 text-xs text-slate-200"
                  >
                    <CheckCircle2
                      className="h-3.5 w-3.5 shrink-0 text-amber-400"
                      aria-hidden="true"
                    />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <Button
                variant="primary"
                size="md"
                onClick={() => onSelectPackage(pkg.name)}
                icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
                className={`w-full justify-center font-bold text-xs rounded-xl h-10 ${
                  pkg.popular
                    ? "bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold border-0 shadow-md"
                    : "border border-amber-500/30 bg-amber-950/40 text-amber-400 hover:bg-amber-500/20"
                }`}
              >
                {pkg.ctaText}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
