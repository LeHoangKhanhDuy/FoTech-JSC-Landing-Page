import { CheckCircle2 } from 'lucide-react';
import { CapabilityItem } from '../types';

interface CapabilityCardProps {
  capability: CapabilityItem;
}

export default function CapabilityCard({ capability }: CapabilityCardProps) {
  const Icon = capability.icon;

  return (
    <div
      className={`group relative flex flex-col justify-between rounded-[18px] border border-slate-200/90 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 dark:border-slate-800/80 dark:bg-slate-900/75 dark:shadow-2xl dark:hover:bg-slate-900/90 min-h-[400px] ${capability.theme.borderHover}`}
    >
      <div>
        {/* Top Bar: Icon Container + Number Badge */}
        <div className="flex items-center justify-between">
          <div
            className={`flex h-[52px] w-[52px] items-center justify-center rounded-[14px] shadow-xs transition-transform duration-300 group-hover:scale-105 ${capability.theme.iconBg}`}
          >
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>

          <span
            className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${capability.theme.badgeBg}`}
          >
            {capability.number}
          </span>
        </div>

        {/* Card Title & Subtitle */}
        <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          {capability.title}
        </h3>
        <p className={`mt-0.5 text-xs font-semibold ${capability.theme.badgeText}`}>
          {capability.subtitle}
        </p>

        {/* Card Description */}
        <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
          {capability.description}
        </p>
      </div>

      {/* Feature Bullet List & Micro Action */}
      <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800/80">
        <ul className="space-y-2.5">
          {capability.features.map((feat) => (
            <li key={feat} className="flex items-center gap-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
              <CheckCircle2 className={`h-4 w-4 shrink-0 ${capability.theme.checkColor}`} aria-hidden="true" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Micro-Action Soft Badge */}
        <div className="mt-5 flex items-center justify-between">
          <span className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${capability.theme.actionBg}`}>
            {capability.action}
          </span>
        </div>
      </div>
    </div>
  );
}
