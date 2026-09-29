"use client";

import React, { useState } from "react";
import { 
  Database, 
  MapPin, 
  Building2, 
  FileSpreadsheet, 
  Scale, 
  CalendarDays, 
  ReceiptText, 
  TrendingDown, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  AlertTriangle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { StatusBadge } from "@/components/ui/StatusBadge";

const INPUT_NODES = [
  { id: "etms", label: "ETMS Dispatches", icon: Database, color: "text-blue-600 bg-blue-50 border-blue-200" },
  { id: "gps", label: "GPS Telemetry", icon: MapPin, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
  { id: "vendors", label: "Vendor Portals", icon: Building2, color: "text-amber-600 bg-amber-50 border-amber-200" },
  { id: "invoices", label: "Monthly Invoices", icon: FileSpreadsheet, color: "text-purple-600 bg-purple-50 border-purple-200" },
  { id: "contracts", label: "Rate Contracts", icon: Scale, color: "text-indigo-600 bg-indigo-50 border-indigo-200" },
  { id: "rosters", label: "Shift Rosters", icon: CalendarDays, color: "text-teal-600 bg-teal-50 border-teal-200" },
  { id: "finance", label: "Finance / ERP", icon: ReceiptText, color: "text-slate-600 bg-slate-100 border-slate-200" },
];

const OUTPUT_INSIGHTS = [
  {
    tag: "Cost Leakage",
    label: "Invoice discrepancy detected",
    value: "₹14.8L variance",
    type: "leakage",
    subtext: "GPS vs billed km mismatch",
  },
  {
    tag: "Capacity Waste",
    label: "Underutilized 26-seater routes",
    value: "32% avg occupancy",
    type: "capacity",
    subtext: "17 consolidation candidates",
  },
  {
    tag: "Vendor SLA",
    label: "Effective true failure cost",
    value: "+₹48 / trip penalty",
    type: "vendor",
    subtext: "Vendor A spot ride exposure",
  },
];

export function DataFlowDiagram() {
  const [activeInput, setActiveInput] = useState<string | null>("etms");

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 relative overflow-hidden">
      {/* Background grid accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Top Header Label */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-100 relative z-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
              Analytical Data Pipeline
            </span>
            <StatusBadge status="CURRENT" size="sm" />
          </div>
          <p className="text-sm font-medium text-slate-900 mt-0.5">
            Fragmented Enterprise Feeds Normalized into Verified Operational Decisions
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
          <span className="inline-block w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
          Zero Systems Disruption Required
        </div>
      </div>

      {/* Pipeline Visual Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
        
        {/* Left Side: 7 Fragmented Ingest Sources */}
        <div className="lg:col-span-4 space-y-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
              01. Raw Data Silos
            </span>
            <span className="text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
              7 Integrated Feeds
            </span>
          </div>

          <div className="space-y-1.5">
            {INPUT_NODES.map((node) => {
              const Icon = node.icon;
              const isSelected = activeInput === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveInput(node.id)}
                  type="button"
                  className={cn(
                    "w-full flex items-center justify-between p-2.5 rounded-lg border text-left text-xs transition-all duration-150",
                    isSelected
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-slate-50/80 text-slate-700 border-slate-200/80 hover:bg-slate-100/80"
                  )}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={cn(
                        "w-7 h-7 rounded flex items-center justify-center border",
                        isSelected ? "bg-slate-800 border-slate-700 text-white" : node.color
                      )}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">{node.label}</span>
                  </div>
                  <ArrowRight
                    className={cn(
                      "w-3.5 h-3.5 transition-transform",
                      isSelected ? "text-teal-400 translate-x-0.5" : "text-slate-500"
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Center: Velora Analytical Core */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center px-2 py-4">
          <div className="w-full bg-slate-950 text-white rounded-2xl p-6 border border-slate-800 shadow-xl relative overflow-hidden text-center group">
            {/* Subtle glow effect */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-teal-500/20 transition-colors" />

            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/40 text-teal-400 mb-4">
              <Sparkles className="w-6 h-6" />
            </div>

            <div className="text-xs font-mono font-semibold tracking-widest text-teal-400 uppercase mb-1">
              Velora Mobitech
            </div>
            <h3 className="text-base font-semibold tracking-tight text-white mb-2">
              Intelligence Engine
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Vendor-neutral reconciliation layer executing cross-system data unification, GPS audit checks, and rate-card adherence.
            </p>

            {/* Inner Processing Signals */}
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono border-t border-slate-800/80 pt-4 text-slate-300">
              <div className="bg-slate-900/90 rounded px-2.5 py-1.5 border border-slate-800 text-left">
                <span className="text-slate-500 block text-[9px]">METHOD</span>
                Audit Reconcile
              </div>
              <div className="bg-slate-900/90 rounded px-2.5 py-1.5 border border-slate-800 text-left">
                <span className="text-slate-500 block text-[9px]">INDEPENDENCE</span>
                Vendor-Neutral
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Actionable Decisions */}
        <div className="lg:col-span-4 space-y-2.5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">
              02. Actionable Insights
            </span>
            <span className="text-[11px] text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded font-medium">
              Decision-Ready
            </span>
          </div>

          <div className="space-y-3">
            {OUTPUT_INSIGHTS.map((out, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 transition-all hover:border-slate-300 hover:shadow-xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    {out.type === "leakage" && <AlertTriangle className="w-3 h-3 text-rose-500" />}
                    {out.type === "capacity" && <TrendingDown className="w-3 h-3 text-amber-500" />}
                    {out.type === "vendor" && <ShieldCheck className="w-3 h-3 text-teal-600" />}
                    {out.tag}
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-900">
                    {out.value}
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-800">
                  {out.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {out.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 font-mono">
        <div>
          Current Operational Flow: <strong className="text-slate-800">Data → Diagnostics → Decisions</strong>
        </div>
        <div className="text-slate-600">
          Future: Data → Intelligence → Decisioning → Orchestration → Liquidity
        </div>
      </div>
    </div>
  );
}
