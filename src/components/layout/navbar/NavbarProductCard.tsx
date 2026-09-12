import { Link } from "react-router-dom";
import type { EcosystemProduct } from "@/components/layout/navbar/navbarData";

interface NavbarProductCardProps {
  product: EcosystemProduct;
  onClick?: () => void;
}

export function NavbarProductCard({ product, onClick }: NavbarProductCardProps) {
  const Icon = product.icon;

  const content = (
    <div className="group relative flex items-center gap-3.5 rounded-xl border border-slate-100 bg-slate-50/80 p-3 hover:border-blue-500/30 hover:bg-blue-50/50 dark:border-transparent dark:bg-slate-900/40 dark:hover:border-white/20 dark:hover:bg-slate-800/90 transition-all duration-300 cursor-pointer shadow-sm">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${product.color} text-white shadow-md group-hover:scale-105 transition-transform duration-300`}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-slate-100 transition-colors block">
          {product.name}
        </span>
        <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-0.5">
          {product.tagline}
        </p>
        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
          {product.desc}
        </p>
      </div>
    </div>
  );

  if (product.isRoute) {
    return (
      <Link to={product.link} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <a href={product.link} onClick={onClick}>
      {content}
    </a>
  );
}
