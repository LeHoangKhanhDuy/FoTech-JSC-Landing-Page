import type { ComponentType, ReactNode } from "react";

export type DropdownAlign = "start" | "center" | "end";
export type DropdownSide = "top" | "right" | "bottom" | "left";
export type DropdownWidth = number | string;

export interface DropdownBaseItemProps {
  icon?: ComponentType<{ className?: string }> | ReactNode;
  label: ReactNode;
  description?: ReactNode;
  disabled?: boolean;
  shortcut?: string;
  className?: string;
}

export interface DropdownDangerProps {
  danger?: boolean;
}
