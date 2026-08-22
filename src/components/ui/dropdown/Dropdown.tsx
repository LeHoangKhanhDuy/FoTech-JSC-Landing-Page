import type { ReactNode } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";
import type { DropdownAlign, DropdownSide, DropdownWidth } from "@/components/ui/dropdown/types";

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  align?: DropdownAlign;
  side?: DropdownSide;
  width?: DropdownWidth;
  disabled?: boolean;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Dropdown({
  trigger,
  children,
  align = "start",
  side = "bottom",
  width,
  disabled,
  className,
  open,
  onOpenChange,
}: DropdownProps) {
  const contentStyle = width
    ? { width: typeof width === "number" ? `${width}px` : width }
    : undefined;

  return (
    <DropdownMenu.Root modal={false} open={open} onOpenChange={onOpenChange}>
      <DropdownMenu.Trigger asChild disabled={disabled}>
        {trigger}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align={align}
          side={side}
          sideOffset={8}
          collisionPadding={16}
          style={contentStyle}
          className={cn(
            "z-[10000] min-w-[220px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-xl border border-slate-800 bg-slate-900 p-1.5 text-white shadow-2xl shadow-black/50 outline-none backdrop-blur-xl",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className
          )}
        >
          {children}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
