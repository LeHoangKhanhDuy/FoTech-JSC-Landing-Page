import { ServiceId, ServiceTabItemData } from '@/modules/pricing/types/pricing-types';

interface ServiceTabNavProps {
  tabs: ServiceTabItemData[];
  activeTabId: ServiceId;
  onSelectTab: (id: ServiceId) => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function ServiceTabNav({
  tabs,
  activeTabId,
  onSelectTab,
  onMouseEnter,
  onMouseLeave,
}: ServiceTabNavProps) {
  return (
    <div
      className="w-full overflow-x-auto py-2 px-4 sm:px-0 flex justify-start sm:justify-center mb-8 sm:mb-10 animate-fade-in-up [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      data-lenis-prevent
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="inline-flex flex-nowrap items-center gap-2 sm:gap-2.5 rounded-2xl bg-white p-2 dark:bg-slate-900/60 dark:border-slate-800/80 backdrop-blur-md shrink-0 sm:mx-auto">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectTab(tab.id)}
              className={`relative z-10 shrink-0 whitespace-nowrap px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white scale-[1.03]'
                  : 'bg-transparent text-slate-700 hover:text-slate-950 hover:bg-slate-300/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60'
              }`}
            >
              {tab.tabLabel}
            </button>
          );
        })}
      </div>
    </div>
  );
}
