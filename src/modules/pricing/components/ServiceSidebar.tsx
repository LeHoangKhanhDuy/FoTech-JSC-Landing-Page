import { KeyboardEvent } from "react";
import ServiceNavItem from "@/modules/pricing/components/ServiceNavItem";
import { ServiceItemData, ServiceId } from "@/modules/pricing/types/pricing-types";

interface ServiceSidebarProps {
  services: ServiceItemData[];
  activeServiceId: ServiceId;
  onSelectService: (id: ServiceId) => void;
}

export default function ServiceSidebar({
  services,
  activeServiceId,
  onSelectService,
}: ServiceSidebarProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = services.findIndex((s) => s.id === activeServiceId);
    let nextIndex = currentIndex;

    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % services.length;
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + services.length) % services.length;
    }

    if (nextIndex !== currentIndex) {
      onSelectService(services[nextIndex].id);
    }
  };

  return (
    <>
      <div
        role="tablist"
        aria-orientation="vertical"
        onKeyDown={handleKeyDown}
        className="hidden lg:flex w-[320px] shrink-0 flex-col gap-3 border-r border-slate-800/80 p-6"
      >
        <div className="mb-2 px-1 text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Sản phẩm & bảng giá dịch vụ
        </div>
        {services.map((service) => (
          <ServiceNavItem
            key={service.id}
            service={service}
            isActive={service.id === activeServiceId}
            onSelect={() => onSelectService(service.id)}
          />
        ))}
      </div>

      <div
        role="tablist"
        aria-orientation="horizontal"
        onKeyDown={handleKeyDown}
        className="flex lg:hidden overflow-x-auto gap-2 p-4 border-b border-slate-800/80 no-scrollbar"
      >
        {services.map((service) => {
          const Icon = service.icon;
          const isActive = service.id === activeServiceId;

          return (
            <button
              key={service.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectService(service.id)}
              className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all ${
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800"
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span>{service.name}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
