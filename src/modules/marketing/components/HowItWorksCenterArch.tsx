import ecosystemCore from "@/assets/fotech/FoTech_Ecosystem_Core.png";

interface HowItWorksCenterArchProps {
  className?: string;
  style?: React.CSSProperties;
}

export function HowItWorksCenterArch({
  className = "",
  style,
}: HowItWorksCenterArchProps = {}) {
  return (
    <div
      style={style}
      className={`relative flex h-full min-h-[460px] items-center justify-center overflow-hidden lg:col-span-4 ${className}`}
    >
      <img
        src={ecosystemCore}
        alt="Nền tảng FoTech kết nối các giải pháp trong hệ sinh thái"
        className="h-full max-h-[560px] w-full max-w-[560px] object-contain"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
