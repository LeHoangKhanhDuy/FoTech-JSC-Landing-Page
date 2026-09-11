import { useState } from "react";
import { IntegrationNode } from "@/modules/feature/types/feature-type";
import CentralHub from "@/modules/feature/components/CentralHub";
import OrbitalNode from "@/modules/feature/components/OrbitalNode";

interface OrbitalMapProps {
  hubName: string;
  nodes: IntegrationNode[];
  className?: string;
  style?: React.CSSProperties;
}

export default function OrbitalMap({
  hubName,
  nodes,
  className = "",
  style,
}: OrbitalMapProps) {
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);

  return (
    <div
      style={style}
      className={`relative w-full aspect-square max-w-[520px] mx-auto flex items-center justify-center select-none ${className}`}
    >
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="rgba(0, 47, 255, 0.4)"
          strokeWidth="0.3"
          strokeDasharray="1.5 1.5"
          className="animate-[spin_90s_linear_infinite] origin-center"
        />

        <circle
          cx="50"
          cy="50"
          r="24"
          stroke="rgba(0, 47, 255, 0.4)"
          strokeWidth="0.4"
          strokeDasharray="1 1"
          className="animate-[spin_60s_linear_infinite_reverse] origin-center"
        />

        {nodes.map((node) => {
          const isHighlighted = activeNodeId === node.id;
          return (
            <line
              key={node.id}
              x1="50"
              y1="50"
              x2={node.x}
              y2={node.y}
              stroke={
                isHighlighted
                  ? "rgba(59, 130, 246, 0.9)"
                  : "rgba(0, 47, 255, 0.4)"
              }
              strokeWidth={isHighlighted ? "0.9" : "0.4"}
              strokeDasharray={isHighlighted ? "none" : "1 1.5"}
              className="transition-all duration-300"
            />
          );
        })}
      </svg>

      <CentralHub hubName={hubName} />

      {nodes.map((node) => (
        <OrbitalNode
          key={node.id}
          node={node}
          isActive={activeNodeId === node.id}
          onHover={(id) => setActiveNodeId(id)}
        />
      ))}
    </div>
  );
}
