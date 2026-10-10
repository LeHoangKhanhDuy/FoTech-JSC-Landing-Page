import FoTechLogo from "@/assets/FoTech_Logo.png";

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
      className={`lg:col-span-4 relative h-full min-h-[460px] sm:min-h-[500px] rounded-[28px] bg-gradient-to-b from-[#0d214d] via-[#091738] to-[#030919] shadow-xl shadow-blue-950/30 overflow-hidden flex flex-col items-center justify-center p-6 transition-colors duration-300 ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35)_0%,rgba(37,99,235,0.15)_50%,transparent_80%)] pointer-events-none" />
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-blue-500/40 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-dashed border-blue-400/50" />
        <div className="absolute inset-8 rounded-full border border-blue-500/40" />

        <svg
          viewBox="0 0 300 300"
          className="absolute inset-0 w-full h-full text-blue-400/40 pointer-events-none"
        >
          <line x1="150" y1="0" x2="150" y2="300" stroke="currentColor" strokeWidth="1" />
          <line x1="0" y1="150" x2="300" y2="150" stroke="currentColor" strokeWidth="1" />
          <line x1="44" y1="44" x2="256" y2="256" stroke="currentColor" strokeWidth="1" />
          <line x1="44" y1="256" x2="256" y2="44" stroke="currentColor" strokeWidth="1" />
        </svg>

        <div className="relative z-10 flex flex-col items-center justify-center w-32 h-32 rounded-2xl border border-blue-500/50 bg-[#071329] p-3.5 shadow-lg shadow-blue-500/20 text-center">
          <img
            src={FoTechLogo}
            alt="FoTech Logo"
            className="h-16 w-16 object-contain mb-1 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"
          />
          <span className="text-[10px] font-bold uppercase tracking-wider text-white">
            FoTech Core
          </span>
          <span className="text-[10px] font-medium flex items-center gap-1.5 mt-0.5 text-emerald-400">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            Active
          </span>
        </div>
      </div>
    </div>
  );
}
