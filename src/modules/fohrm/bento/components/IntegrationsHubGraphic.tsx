import React from 'react';
import { BENTO_INTEGRATION_NODES, BENTO_CENTER_NODE } from '@/modules/fohrm/bento/data/bentoData';
import { CurvedConnectors } from '@/modules/fohrm/bento/components/CurvedConnectors';
import { SyncProgressBar } from '@/modules/fohrm/bento/components/SyncProgressBar';

interface IntegrationsHubGraphicProps {
  activeNodeId?: string | null;
  onNodeMouseEnter?: (id: string) => void;
  onNodeMouseLeave?: () => void;
  onNodeClick?: (id: string) => void;
}

export const IntegrationsHubGraphic: React.FC<IntegrationsHubGraphicProps> = ({
  activeNodeId = null,
  onNodeMouseEnter,
  onNodeMouseLeave,
  onNodeClick,
}) => {
  const CenterIcon = BENTO_CENTER_NODE.icon;

  return (
    <div
      className="relative w-full h-[360px] overflow-hidden rounded-2xl bg-slate-50/90 dark:bg-[#090c13] border border-slate-200/80 dark:border-white/[0.08] shadow-inner select-none transition-colors duration-300"
      aria-label="Đồ họa Hub Tích hợp Dữ liệu FoHRM"
    >
      <CurvedConnectors activeNodeId={activeNodeId} />

      <div className="absolute top-4 sm:top-5 inset-x-0 w-full h-10 pointer-events-none">
        {BENTO_INTEGRATION_NODES.map((node) => {
          const NodeIcon = node.icon;
          const isHovered = activeNodeId === node.id;

          return (
            <div
              key={node.id}
              style={{ left: `${node.xPercent / 10}%` }}
              className="absolute top-0 -translate-x-1/2 pointer-events-auto"
            >
              <button
                type="button"
                onMouseEnter={() => onNodeMouseEnter?.(node.id)}
                onMouseLeave={() => onNodeMouseLeave?.()}
                onClick={() => onNodeClick?.(node.id)}
                title={`${node.label}: ${node.sublabel}`}
                className={`group relative flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded-full border transition-all duration-300 text-[10px] sm:text-xs md:text-sm font-medium whitespace-nowrap shadow-lg cursor-pointer ${
                  isHovered
                    ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-blue-500/25 scale-105 ring-2 ring-blue-500/20 dark:bg-slate-800 dark:border-blue-400/80 dark:text-white dark:shadow-blue-500/25'
                    : 'bg-white hover:bg-slate-50 border-slate-200/90 hover:border-slate-300 text-slate-700 shadow-slate-900/5 dark:bg-[#121622]/90 dark:hover:bg-[#191f30] dark:border-white/10 dark:hover:border-white/20 dark:text-slate-200 dark:shadow-black/50'
                }`}
              >
                <NodeIcon
                  className={`h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 transition-colors ${
                    isHovered
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-400 group-hover:text-slate-600 dark:text-slate-400 dark:group-hover:text-slate-200'
                  }`}
                  aria-hidden="true"
                />
                <span className="hidden lg:inline">{node.label}</span>
                <span className="hidden sm:inline lg:hidden">{node.shortLabel}</span>
                <span className="inline sm:hidden">{node.mobileLabel}</span>
              </button>
            </div>
          );
        })}
      </div>

      <div className="absolute top-[155px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="group relative inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-[11px] sm:text-sm shadow-[0_0_30px_rgba(37,99,235,0.45)] border border-blue-400/50 hover:scale-105 transition-all duration-200 cursor-default select-none">
          <span className="absolute -inset-1 rounded-full bg-blue-400/25 opacity-75 animate-pulse transition-opacity pointer-events-none" />
          <CenterIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white shrink-0" aria-hidden="true" />
          <span className="tracking-tight text-white">{BENTO_CENTER_NODE.label}</span>
        </div>
      </div>

      <div className="absolute top-[235px] inset-x-0 flex justify-center z-10">
        <SyncProgressBar />
      </div>
    </div>
  );
};
