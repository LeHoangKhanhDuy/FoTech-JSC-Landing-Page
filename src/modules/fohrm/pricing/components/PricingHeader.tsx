import type { CSSProperties } from 'react';
import { Zap } from 'lucide-react';

interface PricingHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  className?: string;
  style?: CSSProperties;
}

export default function PricingHeader({
  badge,
  title,
  subtitle,
  className = '',
  style,
}: PricingHeaderProps) {
  return (
    <div style={style} className={`mx-auto max-w-3xl text-center ${className}`}>
      <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-600 dark:border-blue-500/30 dark:bg-blue-950/50 dark:text-blue-400">
        <Zap className="h-3.5 w-3.5" aria-hidden="true" />
        <span className="uppercase tracking-wider">{badge}</span>
      </div>

      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl leading-tight">
        {title}
      </h2>

      <p className="mt-3.5 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}
