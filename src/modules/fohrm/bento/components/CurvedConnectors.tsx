import React from 'react';

interface CurvedConnectorsProps {
  activeNodeId?: string | null;
}

export const CurvedConnectors: React.FC<CurvedConnectorsProps> = ({
  activeNodeId,
}) => {
  // Tọa độ các đường kết nối chuẩn hóa theo viewBox 1000 x 360
  // Điểm hội tụ của 4 đường trên là tâm nút FoHRM Master Data (500, 138)
  // Đường dọc xuất phát từ tâm nút (500, 138) chạy thẳng xuống card đồng bộ (500, 240)
  const paths = [
    {
      id: 'chat',
      d: 'M 135 52 C 135 95, 480 95, 500 138',
      delay: '0s',
      duration: '2.6s',
    },
    {
      id: 'boards',
      d: 'M 380 52 C 380 95, 490 95, 500 138',
      delay: '0.6s',
      duration: '2.6s',
    },
    {
      id: 'crm',
      d: 'M 620 52 C 620 95, 510 95, 500 138',
      delay: '1.2s',
      duration: '2.6s',
    },
    {
      id: 'reports',
      d: 'M 865 52 C 865 95, 520 95, 500 138',
      delay: '1.8s',
      duration: '2.6s',
    },
  ];

  const verticalLine = {
    d: 'M 499.95 138 L 500.05 240',
  };

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
        @keyframes bentoVerticalDownPulse {
          0% {
            stroke-dashoffset: 184;
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
      `}</style>

      <svg
        viewBox="0 0 1000 360"
        preserveAspectRatio="none"
        className="w-full h-full"
        aria-hidden="true"
      >
        <defs>
          {/* Bộ lọc phát sáng cho các luồng xung */}
          <filter id="bento-glow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradient sáng đường cong cho Light Mode (Xanh đậm rực rỡ) */}
          <linearGradient id="pulse-gradient-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.2" />
            <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="1" />
          </linearGradient>

          {/* Gradient sáng đường cong cho Dark Mode (Trắng - Xanh phát quang) */}
          <linearGradient id="pulse-gradient-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#60a5fa" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </linearGradient>

          {/* Gradient sáng đường dọc cho Light Mode (Xanh đậm chạy xuống) */}
          <linearGradient
            id="vertical-down-gradient-light"
            x1="500"
            y1="138"
            x2="500"
            y2="240"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.2" />
            <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="1" />
          </linearGradient>

          {/* Gradient sáng đường dọc cho Dark Mode (Trắng phát quang chạy xuống) */}
          <linearGradient
            id="vertical-down-gradient-dark"
            x1="500"
            y1="138"
            x2="500"
            y2="240"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#93c5fd" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </linearGradient>

          {/* Lưới ma trận chấm nền Dot Matrix thích ứng Light & Dark */}
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
              className="fill-slate-900/[0.08] dark:fill-white/[0.09]"
            />
          </pattern>
        </defs>

        {/* Nền Dot Matrix */}
        <rect width="100%" height="100%" fill="url(#bento-matrix-dots)" />

        {/* Hào quang nền phía sau nút trung tâm */}
        <circle
          cx="500"
          cy="140"
          r="130"
          fill="url(#ambient-center-glow)"
          opacity="0.15"
          className="dark:opacity-0.2 pointer-events-none"
        />
        <radialGradient id="ambient-center-glow">
          <stop offset="0%" stopColor="#2563eb" stopOpacity="1" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
        </radialGradient>

        {/* 4 đường cong từ chip nguồn xuống nút trung tâm */}
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
                  ? 'text-blue-500 dark:text-blue-400 stroke-2'
                  : 'text-slate-300 dark:text-white/[0.25]'
              }`}
            />
          );
        })}

        {/* Đường nối dọc từ nút trung tâm xuống card đồng bộ */}
        <path
          d={verticalLine.d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-slate-300 dark:text-white/[0.25]"
        />

        {/* Xung sáng chạy trên 4 đường cong - Light Mode */}
        {paths.map((path) => {
          return (
            <path
              key={`pulse-light-${path.id}`}
              d={path.d}
              fill="none"
              stroke="url(#pulse-gradient-light)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="26 380"
              filter="url(#bento-glow)"
              className="dark:hidden"
              style={{
                animation: `bentoTravelPulse ${path.duration} cubic-bezier(0.4, 0, 0.2, 1) infinite`,
                animationDelay: path.delay,
              }}
            />
          );
        })}

        {/* Xung sáng chạy trên 4 đường cong - Dark Mode */}
        {paths.map((path) => {
          return (
            <path
              key={`pulse-dark-${path.id}`}
              d={path.d}
              fill="none"
              stroke="url(#pulse-gradient-dark)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="26 380"
              filter="url(#bento-glow)"
              className="hidden dark:inline"
              style={{
                animation: `bentoTravelPulse ${path.duration} cubic-bezier(0.4, 0, 0.2, 1) infinite`,
                animationDelay: path.delay,
              }}
            />
          );
        })}

        {/* Luồng sáng chạy thẳng xuống - Light Mode */}
        <path
          d={verticalLine.d}
          fill="none"
          stroke="url(#vertical-down-gradient-light)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="24 160"
          filter="url(#bento-glow)"
          className="dark:hidden"
          style={{
            animation: 'bentoVerticalDownPulse 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
          }}
        >
          <animate
            attributeName="stroke-dashoffset"
            from="184"
            to="0"
            dur="1.8s"
            repeatCount="indefinite"
          />
        </path>

        {/* Luồng sáng chạy thẳng xuống - Dark Mode */}
        <path
          d={verticalLine.d}
          fill="none"
          stroke="url(#vertical-down-gradient-dark)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="24 160"
          filter="url(#bento-glow)"
          className="hidden dark:inline"
          style={{
            animation: 'bentoVerticalDownPulse 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
          }}
        >
          <animate
            attributeName="stroke-dashoffset"
            from="184"
            to="0"
            dur="1.8s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};
