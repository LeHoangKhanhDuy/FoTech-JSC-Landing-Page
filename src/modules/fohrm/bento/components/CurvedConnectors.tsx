import React from 'react';

interface CurvedConnectorsProps {
  activeNodeId?: string | null;
}

export const CurvedConnectors: React.FC<CurvedConnectorsProps> = ({
  activeNodeId,
}) => {
  // Đường cong chuẩn hóa theo viewBox 1000 x 320
  // Node 1 (X: 135, Y: 48) -> Center (X: 500, Y: 145)
  // Node 2 (X: 380, Y: 48) -> Center (X: 500, Y: 145)
  // Node 3 (X: 620, Y: 48) -> Center (X: 500, Y: 145)
  // Node 4 (X: 865, Y: 48) -> Center (X: 500, Y: 145)
  // Center (X: 500, Y: 185) -> Sync Card (X: 500, Y: 230)
  const paths = [
    {
      id: 'chat',
      d: 'M 135 48 C 135 110, 480 115, 500 145',
      delay: '0s',
      duration: '2.8s',
    },
    {
      id: 'boards',
      d: 'M 380 48 C 380 105, 490 115, 500 145',
      delay: '0.6s',
      duration: '2.8s',
    },
    {
      id: 'crm',
      d: 'M 620 48 C 620 105, 510 115, 500 145',
      delay: '1.2s',
      duration: '2.8s',
    },
    {
      id: 'reports',
      d: 'M 865 48 C 865 110, 520 115, 500 145',
      delay: '1.8s',
      duration: '2.8s',
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      <style>{`
        @keyframes bentoTravelPulse {
          0% {
            stroke-dashoffset: 440;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }
        @keyframes bentoVerticalPulse {
          0% {
            stroke-dashoffset: 90;
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }
      `}</style>

      <svg
        viewBox="0 0 1000 320"
        preserveAspectRatio="none"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <filter id="bento-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.4" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="vertical-pulse-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </linearGradient>

          <pattern
            id="bento-matrix-dots"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="12"
              cy="12"
              r="1"
              className="fill-white/[0.07] dark:fill-white/[0.09]"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#bento-matrix-dots)" />

        <circle
          cx="500"
          cy="150"
          r="120"
          fill="url(#ambient-center-glow)"
          opacity="0.15"
          className="pointer-events-none"
        />
        <radialGradient id="ambient-center-glow">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>

        {paths.map((path) => {
          const isHighlighted = activeNodeId === path.id;
          return (
            <path
              key={`base-${path.id}`}
              d={path.d}
              fill="none"
              stroke="currentColor"
              strokeWidth={isHighlighted ? '2' : '1.5'}
              className={`transition-colors duration-300 ${
                isHighlighted
                  ? 'text-blue-400 stroke-2'
                  : 'text-white/[0.14] dark:text-white/[0.18]'
              }`}
            />
          );
        })}

        <path
          d="M 500 185 L 500 230"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-white/[0.14] dark:text-white/[0.18]"
        />

        {paths.map((path) => {
          return (
            <path
              key={`pulse-${path.id}`}
              d={path.d}
              fill="none"
              stroke="url(#pulse-gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="26 380"
              filter="url(#bento-glow)"
              style={{
                animation: `bentoTravelPulse ${path.duration} cubic-bezier(0.4, 0, 0.2, 1) infinite`,
                animationDelay: path.delay,
              }}
            />
          );
        })}

        <path
          d="M 500 185 L 500 230"
          fill="none"
          stroke="url(#vertical-pulse-gradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="16 75"
          filter="url(#bento-glow)"
          style={{
            animation: 'bentoVerticalPulse 1.4s ease-in-out infinite',
            animationDelay: '0.8s',
          }}
        />
      </svg>
    </div>
  );
};
