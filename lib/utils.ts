import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrencyINR(amountInLakhs: number): string {
  return `₹${amountInLakhs.toFixed(1)}L`;
}
