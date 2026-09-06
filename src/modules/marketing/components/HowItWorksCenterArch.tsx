import FoTechLogo from "@/assets/FoTech_Logo.png";

export function HowItWorksCenterArch() {
  return (
    <div className="lg:col-span-4 relative h-[480px] sm:h-[510px] rounded-t-[240px] rounded-b-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 via-slate-900/40 to-slate-950/90 overflow-hidden flex flex-col items-center justify-center p-6 shadow-2xl backdrop-blur-xl">
      <div className="absolute -top-10 w-72 h-72 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-slate-800/80 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-dashed border-slate-700/40 animate-[spin_60s_linear_infinite]" />
        <div className="absolute inset-8 rounded-full border border-slate-800/60" />

        <svg
          viewBox="0 0 300 300"
          className="absolute inset-0 w-full h-full text-slate-800/60 pointer-events-none"
        >
          <line x1="150" y1="0" x2="150" y2="300" stroke="currentColor" strokeWidth="1" />
          <line x1="0" y1="150" x2="300" y2="150" stroke="currentColor" strokeWidth="1" />
          <line x1="44" y1="44" x2="256" y2="256" stroke="currentColor" strokeWidth="1" />
          <line x1="44" y1="256" x2="256" y2="44" stroke="currentColor" strokeWidth="1" />
        </svg>

        <div className="relative z-10 flex flex-col items-center justify-center w-30 h-30 rounded-2xl border border-blue-500/30 bg-[#071329] p-3.5 shadow-2xl text-center backdrop-blur-md">
          <img
            src={FoTechLogo}
            alt="FoTech Logo"
            className="h-16 w-16 object-contain mb-1 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"
          />
          <span className="text-[10px] font-bold text-white uppercase tracking-wider">
            FoTech Core
          </span>
          <span className="text-[10px] font-medium text-emerald-400 flex items-center gap-1 mt-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
            Active
          </span>
        </div>
      </div>
    </div>
  );
}
