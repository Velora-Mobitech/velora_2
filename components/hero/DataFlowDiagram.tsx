"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck, Activity, Database, Sparkles, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface IngestRow {
  name: string;
  source: string;
  initialStatus: string;
  reconciledStatus: string;
  telemetry: string;
  anomaly?: string;
}

const LEDGER_DATA: IngestRow[] = [
  { name: "ETMS trip exports", source: "MoveInSync / Routematic", initialStatus: "unreconciled", reconciledStatus: "quantified", telemetry: "2,420 daily dispatches audited", anomaly: "17 low-occupancy routes (<35%)" },
  { name: "GPS & telemetry logs", source: "Odometer & Telematics", initialStatus: "unreconciled", reconciledStatus: "quantified", telemetry: "98.4% coordinate trace match", anomaly: "14,200 dead km flagged" },
  { name: "Vendor billing invoices", source: "Monthly PDF & Sheets", initialStatus: "unaudited", reconciledStatus: "flagged", telemetry: "₹38.4L monthly billing audited", anomaly: "43 duplicate trip claims" },
  { name: "Contracts & rate cards", source: "Master Service Agreements", initialStatus: "siloed", reconciledStatus: "quantified", telemetry: "₹52/km baseline tariff indexed", anomaly: "₹4.8L unverified toll markups" },
  { name: "HR rosters & shift policies", source: "Shift Scheduling Registry", initialStatus: "siloed", reconciledStatus: "quantified", telemetry: "3,800 active commuters tracked", anomaly: "Night escort compliance verified" },
  { name: "Finance ERP ledgers", source: "SAP / Oracle General Ledger", initialStatus: "siloed", reconciledStatus: "ranked", telemetry: "GL transport cost center matched", anomaly: "Effective true failure cost +₹48/trip" },
];

export function DataFlowDiagram() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [pulseLive, setPulseLive] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % LEDGER_DATA.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const activeItem = LEDGER_DATA[activeIdx];

  return (
    <div className="relative rounded-[28px] p-4 sm:p-6 bg-gradient-to-b from-[rgba(47,229,131,0.12)] via-[rgba(47,229,131,0.02)] to-transparent border border-[rgba(47,229,131,0.35)] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
      
      {/* Background ambient mesh */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(47,229,131,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="bg-[#0a0a0a] border border-[#1e2022] rounded-[18px] overflow-hidden relative z-10">
        
        {/* Ledger Head */}
        <div className="p-4 sm:px-6 py-4 border-b border-[#1e2022] flex flex-wrap items-center justify-between gap-3 text-xs text-[#9aa0a6] bg-[#0c0d0d]">
          <div className="flex items-center gap-3">
            <span className="font-medium text-[#f5f6f7]">Enterprise mobility data — as it exists today</span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#1e2022]" />
            <span className="hidden sm:inline text-[#6b7075] font-mono text-[11px]">Real-time Reconciliation Simulation</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2fe583] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2fe583] shadow-[0_0_8px_#2fe583]" />
            </span>
            <span className="font-semibold text-[#2fe583] text-[13px] tracking-wide font-mono">
              Live Stream
            </span>
          </div>
        </div>

        {/* Ledger Body: Left Ingest vs Right Diagnostic Output */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#1e2022]">
          
          {/* Left Column: Raw Sources Ingested */}
          <div className="lg:col-span-6 p-5 sm:p-6 bg-[#0a0a0a]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11.5px] font-mono tracking-[0.06em] uppercase text-[#6b7075] font-semibold">
                Sources Ingested
              </span>
              <span className="text-[11px] text-[#9aa0a6] font-mono bg-[#161717] px-2 py-0.5 rounded border border-[#1e2022]">
                6 Siloed Feeds
              </span>
            </div>

            <div className="space-y-1">
              {LEDGER_DATA.map((row, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={cn(
                      "flex items-center justify-between py-2.5 px-3 rounded-lg border transition-all cursor-pointer text-sm select-none",
                      isActive
                        ? "bg-[#141517] border-[rgba(47,229,131,0.35)] shadow-xs"
                        : "border-transparent hover:bg-[#0f1011] text-[#9aa0a6]"
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={cn("w-1.5 h-1.5 rounded-full transition-colors", isActive ? "bg-[#2fe583] shadow-[0_0_6px_#2fe583]" : "bg-[#2c2f31]")} />
                      <span className={cn("font-medium transition-colors", isActive ? "text-[#f5f6f7]" : "text-[#9aa0a6]")}>
                        {row.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11.5px] font-mono text-[#6b7075]">
                        {row.initialStatus}
                      </span>
                      {isActive && (
                        <ArrowRight className="w-3.5 h-3.5 text-[#2fe583] animate-pulse" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Velora Diagnostic Output */}
          <div className="lg:col-span-6 p-5 sm:p-6 bg-[#091510]/50 relative overflow-hidden flex flex-col justify-between">
            {/* Subtle glow in background */}
            <div className="absolute -top-12 -right-12 w-44 h-44 bg-[radial-gradient(circle,rgba(47,229,131,0.14)_0%,transparent_70%)] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11.5px] font-mono tracking-[0.06em] uppercase text-[#2fe583] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#2fe583]" />
                  Velora Diagnostic Output
                </span>
                <span className="text-[11px] font-mono text-[#2fe583] bg-[rgba(47,229,131,0.10)] px-2 py-0.5 rounded border border-[rgba(47,229,131,0.3)]">
                  Automated Reconciliation
                </span>
              </div>

              {/* Quantified outputs */}
              <div className="space-y-2">
                <div className="flex items-center justify-between py-2 border-b border-[#161717] text-sm">
                  <span className="text-[#f5f6f7]">Cost leakage by vendor &amp; route</span>
                  <span className="text-xs font-mono font-semibold text-[#2fe583]">quantified</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#161717] text-sm">
                  <span className="text-[#f5f6f7]">Utilization &amp; dead-km waste</span>
                  <span className="text-xs font-mono font-semibold text-[#2fe583]">quantified</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#161717] text-sm">
                  <span className="text-[#f5f6f7]">Cost of vendor / driver failure</span>
                  <span className="text-xs font-mono font-semibold text-[#2fe583]">quantified</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-[#161717] text-sm">
                  <span className="text-[#f5f6f7]">Invoice anomalies &amp; toll markups</span>
                  <span className="text-xs font-mono font-semibold text-[#2fe583]">flagged</span>
                </div>
                <div className="flex items-center justify-between py-2 text-sm">
                  <span className="text-[#f5f6f7]">Ranked operational decisions</span>
                  <span className="text-xs font-mono font-semibold text-[#2fe583]">ranked</span>
                </div>
              </div>
            </div>

            {/* Dynamic Telemetry Box for selected active feed */}
            <div className="mt-5 p-3.5 rounded-xl bg-[#050605] border border-[rgba(47,229,131,0.30)] relative z-10">
              <div className="flex items-center justify-between mb-1.5 text-[11px] font-mono">
                <span className="text-[#9aa0a6] uppercase tracking-wider">Inspect: {activeItem.name}</span>
                <span className="text-[#2fe583] flex items-center gap-1 font-semibold">
                  <CheckCircle2 className="w-3 h-3 text-[#2fe583]" />
                  Reconciled
                </span>
              </div>
              <div className="text-xs text-[#f5f6f7] font-medium mb-1">
                {activeItem.telemetry}
              </div>
              <div className="text-[11.5px] font-mono text-[#8fe6ba]">
                &rarr; Diagnostic Finding: <span className="text-[#2fe583]">{activeItem.anomaly}</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Subtext */}
      <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-[#6b7075] font-mono px-2">
        <span>No rip-and-replace required. Works directly with your current ETMS &amp; spreadsheets.</span>
        <span className="text-[#2fe583] font-semibold">100% Vendor-Neutral</span>
      </div>

    </div>
  );
}
