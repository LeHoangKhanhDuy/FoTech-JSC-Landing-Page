import type { ComponentType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DropdownIconProps {
  icon?: ComponentType<{ className?: string }> | ReactNode;
  className?: string;
}

export function DropdownIcon({ icon, className }: DropdownIconProps) {
  if (!icon) return null;

  if (typeof icon === "function" || (typeof icon === "object" && icon !== null && "render" in icon)) {
    const IconComponent = icon as ComponentType<{ className?: string }>;
    return <IconComponent className={cn("h-4 w-4 shrink-0", className)} />;
  }

  return <span className={cn("flex h-4 w-4 shrink-0 items-center justify-center", className)}>{icon}</span>;
}
