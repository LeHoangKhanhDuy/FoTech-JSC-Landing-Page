import { memo } from 'react';
import { ServiceId } from '@/modules/pricing/types/pricing-types';
import {
  SERVICE_PREVIEW_CONFIGS,
  ServicePreviewIndicator,
} from '@/modules/pricing/data/service-preview';

interface ServiceMockPreviewProps {
  previewType: ServiceId;
}

function PreviewIndicator({
  indicator,
  borderClass,
}: {
  indicator: ServicePreviewIndicator;
  borderClass: string;
}) {
  if (indicator.type === 'bars') {
    return (
      <div className="grid grid-cols-3 gap-2 mt-2">
        <div className="h-2 rounded bg-blue-500/40 w-3/4" />
        <div className="h-2 rounded bg-slate-300 dark:bg-slate-700/50 w-full" />
        <div className="h-2 rounded bg-slate-300 dark:bg-slate-700/50 w-2/3" />
      </div>
    );
  }

  const DetailIcon = indicator.detailIcon;

  return (
    <div
      className={`flex items-center justify-between mt-2 pt-2 border-t ${borderClass} dark:border-slate-800/80`}
    >
      <div>
        <span className="text-[10px] text-slate-500 dark:text-slate-400 block">
          {indicator.detailTitle}
        </span>
        <span className="text-sm font-bold text-slate-900 dark:text-white">
          {indicator.detailValue}
        </span>
      </div>
      {DetailIcon && (
        <DetailIcon className="h-5 w-5 text-current" />
      )}
    </div>
  );
}

function ServiceMockPreview({ previewType }: ServiceMockPreviewProps) {
  const config = SERVICE_PREVIEW_CONFIGS[previewType] || SERVICE_PREVIEW_CONFIGS.custom;
  const Icon = config.icon;
  const borderMatch = config.gradient.match(/border-([\w-]+)/);
  const indicatorBorderClass = borderMatch ? `border-${borderMatch[1]}` : 'border-slate-200';

  return (
    <div className="space-y-3">
      <div
        className={`h-28 rounded-xl border p-3.5 flex flex-col justify-between dark:border-slate-800/80 bg-gradient-to-br ${config.gradient}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon className={`h-4 w-4 ${config.iconColor}`} />
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              {config.title}
            </span>
          </div>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${config.badgeClass}`}
          >
            {config.badge}
          </span>
        </div>

        <PreviewIndicator indicator={config.indicator} borderClass={indicatorBorderClass} />
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {config.stats.map((stat, idx) => (
          <div
            key={idx}
            className="rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/80 p-3 text-xs shadow-sm"
          >
            <span className="text-slate-500 dark:text-slate-400 block text-[10px]">
              {stat.label}
            </span>
            <span className={`text-base font-extrabold ${stat.colorClass}`}>
              {stat.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(ServiceMockPreview);
