import { ServiceItemData } from "../types/types";

interface ServiceHeaderProps {
  service: ServiceItemData;
}

export default function ServiceHeader({ service }: ServiceHeaderProps) {
  return (
    <div>
      {/* Service Badge */}
      <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-950/60 px-3.5 py-1 text-xs font-bold text-blue-400 backdrop-blur-md">
        <span>{service.badge}</span>
      </div>

      {/* Main Heading */}
      <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[44px] lg:leading-[1.12]">
        {service.title}{" "}
        <span className="bg-gradient-to-r from-[#00A3FF] via-[#2979FF] to-[#A855F7] bg-clip-text text-transparent">
          {service.titleHighlight}
        </span>
      </h3>

      {/* Subtitle / Description */}
      <p className="mt-4 max-w-[720px] text-sm leading-relaxed text-slate-300 sm:text-base">
        {service.subtitle}
      </p>
    </div>
  );
}
