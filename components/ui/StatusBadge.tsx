import React from "react";
import { cn } from "@/lib/utils";

export type StatusVariant =
  | "CURRENT"
  | "ILLUSTRATIVE"
  | "ILLUSTRATIVE EXAMPLE"
  | "FUTURE"
  | "FUTURE CAPABILITY"
  | "FUTURE VISION"
  | "VALIDATING"
  | "AUDIT ALERT";

interface StatusBadgeProps {
  status: StatusVariant | string;
  className?: string;
  size?: "sm" | "md";
}

export function StatusBadge({ status, className, size = "sm" }: StatusBadgeProps) {
  let badgeStyles = "bg-slate-100 text-slate-700 border-slate-200";

  const upper = status.toUpperCase();

  if (upper.includes("CURRENT")) {
    badgeStyles = "bg-teal-50 text-teal-800 border-teal-200";
  } else if (upper.includes("ILLUSTRATIVE")) {
    badgeStyles = "bg-amber-50 text-amber-800 border-amber-200 font-mono";
  } else if (upper.includes("FUTURE")) {
    badgeStyles = "bg-indigo-50 text-indigo-700 border-indigo-200";
  } else if (upper.includes("VALIDATING")) {
    badgeStyles = "bg-emerald-50 text-emerald-800 border-emerald-200";
  } else if (upper.includes("AUDIT") || upper.includes("ALERT") || upper.includes("LEAKAGE")) {
    badgeStyles = "bg-rose-50 text-rose-800 border-rose-200 font-mono";
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium uppercase tracking-wider rounded-md border",
        size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs",
        badgeStyles,
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80" />
      {status}
    </span>
  );
}
