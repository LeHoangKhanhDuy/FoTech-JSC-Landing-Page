export default function CosmicOrbit() {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden z-0 opacity-60 dark:opacity-100 transition-opacity duration-300" aria-hidden="true">
      <svg
        viewBox="0 0 1000 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Outer Ellipse 3 */}
        <ellipse
          cx="500"
          cy="310"
          rx="560"
          ry="165"
          stroke="url(#card-orbit-sides-3)"
          strokeWidth="1.8"
          strokeDasharray="5 5"
        />

        {/* Middle Ellipse 2 */}
        <ellipse
          cx="500"
          cy="310"
          rx="440"
          ry="125"
          stroke="url(#card-orbit-sides-2)"
          strokeWidth="2.2"
        />

        {/* Inner Ellipse 1 */}
        <ellipse
          cx="500"
          cy="310"
          rx="320"
          ry="85"
          stroke="url(#card-orbit-sides-1)"
          strokeWidth="1.8"
          strokeDasharray="4 4"
        />

        {/* GLOWING NODE DOTS ONLY ON THE LEFT AND RIGHT WINGS */}
        <g className="animate-pulse" style={{ animationDuration: '3.5s' }}>
          {/* Left Wing Nodes */}
          <circle cx="185" cy="310" r="4.5" fill="#38BDF8" />
          <circle cx="185" cy="310" r="10" fill="#38BDF8" fillOpacity="0.4" />

          <circle cx="85" cy="285" r="5.5" fill="#3B82F6" />
          <circle cx="85" cy="285" r="13" fill="#3B82F6" fillOpacity="0.45" />

          <circle cx="140" cy="410" r="4.5" fill="#A855F7" />
          <circle cx="140" cy="410" r="10" fill="#A855F7" fillOpacity="0.35" />

          {/* Right Wing Nodes */}
          <circle cx="815" cy="310" r="4.5" fill="#38BDF8" />
          <circle cx="815" cy="310" r="10" fill="#38BDF8" fillOpacity="0.35" />

          <circle cx="915" cy="285" r="5.5" fill="#3B82F6" />
          <circle cx="915" cy="285" r="13" fill="#3B82F6" fillOpacity="0.45" />

          <circle cx="860" cy="410" r="4.5" fill="#9D4EDD" />
          <circle cx="860" cy="410" r="10" fill="#9D4EDD" fillOpacity="0.35" />
        </g>

        {/* SVG Gradients (Fade center completely: opacity 0 between 28% and 72%) */}
        <defs>
          <linearGradient id="card-orbit-sides-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.85" />
            <stop offset="24%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="30%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="70%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="76%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id="card-orbit-sides-2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.9" />
            <stop offset="26%" stopColor="#3B82F6" stopOpacity="0.75" />
            <stop offset="32%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="68%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="74%" stopColor="#3B82F6" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="card-orbit-sides-3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9D4EDD" stopOpacity="0.75" />
            <stop offset="22%" stopColor="#38BDF8" stopOpacity="0.65" />
            <stop offset="28%" stopColor="#38BDF8" stopOpacity="0" />
            <stop offset="72%" stopColor="#38BDF8" stopOpacity="0" />
            <stop offset="78%" stopColor="#38BDF8" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#9D4EDD" stopOpacity="0.75" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
