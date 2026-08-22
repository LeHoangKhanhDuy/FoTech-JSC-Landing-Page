import type { MouseEventHandler } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DropdownIcon } from "@/components/ui/dropdown/DropdownIcon";
import type {
  DropdownBaseItemProps,
  DropdownDangerProps,
} from "@/components/ui/dropdown/types";
import { cn } from "@/lib/utils";

interface DropdownItemProps extends DropdownBaseItemProps, DropdownDangerProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  active?: boolean;
}

export function DropdownItem({
  icon,
  label,
  description,
  danger,
  disabled,
  shortcut,
  onClick,
  active,
  className,
}: DropdownItemProps) {
  return (
    <DropdownMenu.Item
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "group my-0.5 flex min-h-9 cursor-pointer select-none items-center gap-3 rounded-lg px-3 py-2 text-sm outline-none transition-colors",
        !active &&
          "text-slate-200 hover:bg-slate-800 hover:text-white focus:bg-slate-800 focus:text-white data-[highlighted]:bg-slate-800 data-[highlighted]:text-white",
        "data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        danger &&
          !active &&
          "text-rose-400 focus:text-rose-300 data-[highlighted]:text-rose-300",
        active &&
          "bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold focus:bg-blue-600/30 data-[highlighted]:bg-blue-600/30",
        className
      )}
    >
      <DropdownIcon
        icon={icon}
        className={cn(
          danger
            ? "text-rose-400"
            : "text-slate-400 group-data-[highlighted]:text-white",
          active && "text-blue-400 group-data-[highlighted]:text-blue-300"
        )}
      />
      <span className="min-w-0 flex-1">
        <span className="block truncate font-medium">{label}</span>
        {description ? (
          <span
            className={cn(
              "mt-0.5 block truncate text-xs text-slate-400",
              active && "text-blue-300/80"
            )}
          >
            {description}
          </span>
        ) : null}
      </span>
      {shortcut ? (
        <span
          className={cn(
            "ml-auto shrink-0 text-xs font-medium text-slate-400",
            active && "text-blue-300/80"
          )}
        >
          {shortcut}
        </span>
      ) : null}
    </DropdownMenu.Item>
  );
}
