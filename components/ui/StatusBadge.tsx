import React from "react";
import { cn } from "@/lib/utils";

export type StatusVariant =
  | "CURRENT"
  | "ILLUSTRATIVE"
  | "ILLUSTRATIVE EXAMPLE"
  | "FUTURE"
  | "FUTURE CAPABILITY"
  | "FUTURE VISION"
  | "COMING SOON"
  | "VALIDATING"
  | "AUDIT ALERT";

interface StatusBadgeProps {
  status: StatusVariant | string;
  className?: string;
  size?: "sm" | "md";
}

export function StatusBadge({ status, className, size = "sm" }: StatusBadgeProps) {
  let badgeStyles = "bg-[#0a0a0a] text-[#9aa0a6] border-[#1e2022]";
  let dotColor = "bg-[#2fe583] shadow-[0_0_8px_#2fe583]";

  const upper = status.toUpperCase();

  if (upper.includes("CURRENT") || upper.includes("VALIDATING") || upper.includes("COMING SOON")) {
    badgeStyles = "bg-[rgba(47,229,131,0.10)] text-[#2fe583] border-[rgba(47,229,131,0.35)]";
    dotColor = "bg-[#2fe583] shadow-[0_0_8px_#2fe583]";
  } else if (upper.includes("ILLUSTRATIVE")) {
    badgeStyles = "bg-[#0a0a0a] text-[#9aa0a6] border-[#1e2022] font-mono";
    dotColor = "bg-[#9aa0a6]";
  } else if (upper.includes("FUTURE")) {
    badgeStyles = "bg-[rgba(47,229,131,0.08)] text-[#2fe583] border-[rgba(47,229,131,0.30)]";
    dotColor = "bg-[#2fe583] shadow-[0_0_8px_#2fe583]";
  } else if (upper.includes("AUDIT") || upper.includes("ALERT") || upper.includes("LEAKAGE")) {
    badgeStyles = "bg-[rgba(244,63,94,0.12)] text-[#fb7185] border-[rgba(244,63,94,0.35)] font-mono";
    dotColor = "bg-[#fb7185] shadow-[0_0_8px_#fb7185]";
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-medium uppercase tracking-wider rounded-full border transition-colors",
        size === "sm" ? "px-2.5 py-0.5 text-[10px]" : "px-3.5 py-1 text-xs",
        badgeStyles,
        className
      )}
    >
      <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotColor)} />
      {status}
    </span>
  );
}
