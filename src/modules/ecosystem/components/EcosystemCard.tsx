import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { EcosystemProduct } from "@/modules/ecosystem/data/ecosystemData";

interface EcosystemCardProps {
  product: EcosystemProduct;
  onOpenModal: (type: "demo" | "consulting" | "trial") => void;
}

export default function EcosystemCard({
  product,
  onOpenModal,
}: EcosystemCardProps) {
  const Icon = product.icon;
  const Stat1Icon = product.stats.stat1Icon;
  const Stat2Icon = product.stats.stat2Icon;

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 dark:bg-slate-900/75 dark:shadow-2xl dark:hover:bg-slate-900/90 ${product.theme.cardBorderHover}`}
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-bold shadow-lg ${product.theme.iconBg}`}
            >
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {product.name}
                </h3>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold border ${product.theme.badgeStyle}`}
                >
                  {product.badge}
                </span>
              </div>
              <p
                className={`mt-0.5 text-xs font-semibold ${product.theme.subtitleColor}`}
              >
                {product.subtitle}
              </p>
            </div>
          </div>
          {product.topRightBadge && (
            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 border border-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-400 dark:border-emerald-500/20">
              {product.topRightBadge}
            </span>
          )}
        </div>

        <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
          {product.description}
        </p>

        <div
          className={`mt-5 rounded-xl border p-4 ${product.theme.featureBgStyle || "border-slate-200/70 bg-slate-50 dark:border-slate-800/80 dark:bg-slate-950/60"}`}
        >
          <div
            className={`grid gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300 ${product.features.length > 3 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}
          >
            {product.features.map((feat) => (
              <div key={feat} className="flex items-center gap-2">
                <CheckCircle2
                  className={`h-4 w-4 shrink-0 ${product.theme.checkIconColor}`}
                  aria-hidden="true"
                />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-4 dark:border-slate-800/80">
        <div className="flex items-center gap-5 text-xs">
          <div className="flex items-center gap-2">
            <Stat1Icon
              className={`h-4 w-4 ${product.theme.statIconColor}`}
              aria-hidden="true"
            />
            <div>
              <p className="font-bold text-slate-900 dark:text-white leading-none">
                {product.stats.value1}
              </p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                {product.stats.label1}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Stat2Icon
              className={`h-4 w-4 ${product.theme.statIconColor}`}
              aria-hidden="true"
            />
            <div>
              <p className="font-bold text-slate-900 dark:text-white leading-none">
                {product.stats.value2}
              </p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                {product.stats.label2}
              </p>
            </div>
          </div>
        </div>

        {product.cta.link ? (
          <Link to={product.cta.link}>
            <Button
              variant="primary"
              size="sm"
              icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
              className={`text-xs px-4 py-2 ${product.theme.btnStyle}`}
            >
              {product.cta.label}
            </Button>
          </Link>
        ) : (
          <Button
            variant="outline"
            size="sm"
            onClick={() => onOpenModal(product.cta.modalType || "demo")}
            icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
            className={`text-xs px-4 py-2 ${product.theme.btnStyle}`}
          >
            {product.cta.label}
          </Button>
        )}
      </div>
    </div>
  );
}
