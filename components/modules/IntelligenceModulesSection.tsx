"use client";

import React, { useState } from "react";
import { Coins, BarChart3, Building2, AlertOctagon, Leaf, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModuleData {
  id: string;
  name: string;
  items: string[];
  kpi: { label: string; value: string; subtext: string };
  insight: string;
}

const MODULES: ModuleData[] = [
  {
    id: "cost",
    name: "Cost Intelligence",
    items: [
      "Spend by vendor",
      "Spend by route",
      "₹ / trip",
      "₹ / seat-km",
      "Cost variance",
      "Invoice anomalies",
    ],
    kpi: { label: "Cost per Seat-km", value: "₹3.85", subtext: "+13.2% vs industry baseline" },
    insight: "Vendor C billed 14,200 km beyond recorded GPS odometer traces over the last quarter across Electronic City corridors.",
  },
  {
    id: "utilization",
    name: "Utilization Intelligence",
    items: [
      "Occupancy",
      "Vehicle utilization",
      "Route utilization",
      "Dead km",
      "Unused capacity",
    ],
    kpi: { label: "Average Occupancy", value: "48.2%", subtext: "17 routes below 35% threshold" },
    insight: "17 morning shifts along Outer Ring Road consistently run with fewer than 5 passengers in 12-seater vans.",
  },
  {
    id: "vendor",
    name: "Vendor Intelligence",
    items: [
      "Effective cost",
      "Reliability",
      "SLA performance",
      "Failure rates",
      "Vendor comparison",
    ],
    kpi: { label: "Vendor SLA Compliance", value: "91.8%", subtext: "+₹48/trip effective cost gap" },
    insight: "Vendor A's base rate is ₹25 cheaper per trip than Vendor B, but Vendor A's failure rate adds ₹72 in effective replacement costs.",
  },
  {
    id: "failure",
    name: "Failure Intelligence",
    items: [
      "No-shows",
      "Breakdowns",
      "Cancellations",
      "Delays",
      "Emergency replacements",
      "Estimated failure cost",
    ],
    kpi: { label: "Spot Cab Premium", value: "2.6x Tariff", subtext: "86 unfulfilled monthly bookings" },
    insight: "Over 68% of evening shift failures occur with a single supplier between 10:30 PM and 11:30 PM.",
  },
  {
    id: "sustainability",
    name: "Sustainability Intelligence",
    items: [
      "CO₂ / trip",
      "CO₂ / passenger-km",
      "EV utilization",
      "Carbon-aware alternatives",
    ],
    kpi: { label: "EV Fleet Compatibility", value: "84 Routes", subtext: "Ready for zero-emission conversion" },
    insight: "Converting 28 low-mileage night shuttle routes to EVs would eliminate 41 tons of CO₂ annually with zero midday charging requirements.",
  },
];

export function IntelligenceModulesSection() {
  const [selectedModule, setSelectedModule] = useState<string>("cost");

  const currentMod = MODULES.find((m) => m.id === selectedModule) || MODULES[0];

  return (
    <section id="intelligence" className="py-24 sm:py-32 bg-black border-b border-[#161717]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        
        {/* Head */}
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-[#1e2022] bg-[#0a0a0a] px-4 py-2 rounded-full text-[12.5px] text-[#9aa0a6] font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2fe583] shadow-[0_0_8px_#2fe583]" />
            What Velora measures
          </div>
          <h2 className="text-[28px] sm:text-[38px] lg:text-[42px] font-bold tracking-tight text-[#f5f6f7] leading-[1.15]">
            Five intelligence modules, <span className="text-[#2fe583]">one shared data layer.</span>
          </h2>
          <p className="mt-4 text-[#9aa0a6] text-[16.5px] leading-relaxed">
            Each module answers a different question about the same underlying mobility system — cross-referenced, never read in isolation.
          </p>
        </div>

        {/* 6-Card Grid matching references */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          
          {/* Card 1: Cost */}
          <div
            onClick={() => setSelectedModule("cost")}
            className={cn(
              "rounded-[14px] p-6 sm:p-7 border transition-all duration-200 cursor-pointer flex flex-col justify-between select-none",
              selectedModule === "cost"
                ? "bg-[#0c0d0d] border-[rgba(47,229,131,0.5)] shadow-[0_0_25px_rgba(47,229,131,0.07)]"
                : "bg-[#0a0a0a] border-[#1e2022] hover:border-[#2c2f31]"
            )}
          >
            <div>
              <div className="w-[38px] h-[38px] rounded-[10px] bg-[rgba(47,229,131,0.10)] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#2fe583]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-[16.5px] font-bold text-[#f5f6f7] mb-3.5">
                Cost Intelligence
              </h3>
              <ul className="divide-y divide-dashed divide-[#161717] text-[13.5px] text-[#9aa0a6]">
                {MODULES[0].items.map((item, idx) => (
                  <li key={idx} className="py-1.5 first:pt-0 last:pb-0">{item}</li>
                ))}
              </ul>
            </div>
            <div className="pt-4 mt-4 border-t border-[#1e2022] text-[11px] font-mono text-[#2fe583] flex items-center justify-between">
              <span>{MODULES[0].kpi.value}</span>
              <span className="text-[#6b7075]">Inspect &rarr;</span>
            </div>
          </div>

          {/* Card 2: Utilization */}
          <div
            onClick={() => setSelectedModule("utilization")}
            className={cn(
              "rounded-[14px] p-6 sm:p-7 border transition-all duration-200 cursor-pointer flex flex-col justify-between select-none",
              selectedModule === "utilization"
                ? "bg-[#0c0d0d] border-[rgba(47,229,131,0.5)] shadow-[0_0_25px_rgba(47,229,131,0.07)]"
                : "bg-[#0a0a0a] border-[#1e2022] hover:border-[#2c2f31]"
            )}
          >
            <div>
              <div className="w-[38px] h-[38px] rounded-[10px] bg-[rgba(47,229,131,0.10)] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#2fe583]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" /><path d="M7 15l4-6 3 3 5-8" />
                </svg>
              </div>
              <h3 className="text-[16.5px] font-bold text-[#f5f6f7] mb-3.5">
                Utilization Intelligence
              </h3>
              <ul className="divide-y divide-dashed divide-[#161717] text-[13.5px] text-[#9aa0a6]">
                {MODULES[1].items.map((item, idx) => (
                  <li key={idx} className="py-1.5 first:pt-0 last:pb-0">{item}</li>
                ))}
              </ul>
            </div>
            <div className="pt-4 mt-4 border-t border-[#1e2022] text-[11px] font-mono text-[#2fe583] flex items-center justify-between">
              <span>{MODULES[1].kpi.value}</span>
              <span className="text-[#6b7075]">Inspect &rarr;</span>
            </div>
          </div>

          {/* Card 3: Vendor */}
          <div
            onClick={() => setSelectedModule("vendor")}
            className={cn(
              "rounded-[14px] p-6 sm:p-7 border transition-all duration-200 cursor-pointer flex flex-col justify-between select-none",
              selectedModule === "vendor"
                ? "bg-[#0c0d0d] border-[rgba(47,229,131,0.5)] shadow-[0_0_25px_rgba(47,229,131,0.07)]"
                : "bg-[#0a0a0a] border-[#1e2022] hover:border-[#2c2f31]"
            )}
          >
            <div>
              <div className="w-[38px] h-[38px] rounded-[10px] bg-[rgba(47,229,131,0.10)] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#2fe583]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a4 4 0 0 1 8 0v2" />
                </svg>
              </div>
              <h3 className="text-[16.5px] font-bold text-[#f5f6f7] mb-3.5">
                Vendor Intelligence
              </h3>
              <ul className="divide-y divide-dashed divide-[#161717] text-[13.5px] text-[#9aa0a6]">
                {MODULES[2].items.map((item, idx) => (
                  <li key={idx} className="py-1.5 first:pt-0 last:pb-0">{item}</li>
                ))}
              </ul>
            </div>
            <div className="pt-4 mt-4 border-t border-[#1e2022] text-[11px] font-mono text-[#2fe583] flex items-center justify-between">
              <span>{MODULES[2].kpi.value}</span>
              <span className="text-[#6b7075]">Inspect &rarr;</span>
            </div>
          </div>

          {/* Card 4: Failure */}
          <div
            onClick={() => setSelectedModule("failure")}
            className={cn(
              "rounded-[14px] p-6 sm:p-7 border transition-all duration-200 cursor-pointer flex flex-col justify-between select-none",
              selectedModule === "failure"
                ? "bg-[#0c0d0d] border-[rgba(47,229,131,0.5)] shadow-[0_0_25px_rgba(47,229,131,0.07)]"
                : "bg-[#0a0a0a] border-[#1e2022] hover:border-[#2c2f31]"
            )}
          >
            <div>
              <div className="w-[38px] h-[38px] rounded-[10px] bg-[rgba(47,229,131,0.10)] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#2fe583]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 9v4M12 17h.01" /><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
                </svg>
              </div>
              <h3 className="text-[16.5px] font-bold text-[#f5f6f7] mb-3.5">
                Failure Intelligence
              </h3>
              <ul className="divide-y divide-dashed divide-[#161717] text-[13.5px] text-[#9aa0a6]">
                {MODULES[3].items.map((item, idx) => (
                  <li key={idx} className="py-1.5 first:pt-0 last:pb-0">{item}</li>
                ))}
              </ul>
            </div>
            <div className="pt-4 mt-4 border-t border-[#1e2022] text-[11px] font-mono text-[#2fe583] flex items-center justify-between">
              <span>{MODULES[3].kpi.value}</span>
              <span className="text-[#6b7075]">Inspect &rarr;</span>
            </div>
          </div>

          {/* Card 5: Sustainability */}
          <div
            onClick={() => setSelectedModule("sustainability")}
            className={cn(
              "rounded-[14px] p-6 sm:p-7 border transition-all duration-200 cursor-pointer flex flex-col justify-between select-none",
              selectedModule === "sustainability"
                ? "bg-[#0c0d0d] border-[rgba(47,229,131,0.5)] shadow-[0_0_25px_rgba(47,229,131,0.07)]"
                : "bg-[#0a0a0a] border-[#1e2022] hover:border-[#2c2f31]"
            )}
          >
            <div>
              <div className="w-[38px] h-[38px] rounded-[10px] bg-[rgba(47,229,131,0.10)] flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#2fe583]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 4 13c0-6 7-11 7-11s7 5 7 11a7 7 0 0 1-7 7Z" />
                </svg>
              </div>
              <h3 className="text-[16.5px] font-bold text-[#f5f6f7] mb-3.5">
                Sustainability Intelligence
              </h3>
              <ul className="divide-y divide-dashed divide-[#161717] text-[13.5px] text-[#9aa0a6]">
                {MODULES[4].items.map((item, idx) => (
                  <li key={idx} className="py-1.5 first:pt-0 last:pb-0">{item}</li>
                ))}
              </ul>
            </div>
            <div className="pt-4 mt-4 border-t border-[#1e2022] text-[11px] font-mono text-[#2fe583] flex items-center justify-between">
              <span>{MODULES[4].kpi.value}</span>
              <span className="text-[#6b7075]">Inspect &rarr;</span>
            </div>
          </div>

          {/* Card 6: Note Card in panel-green */}
          <div className="rounded-[14px] p-6 sm:p-7 bg-[#091510] border border-[rgba(47,229,131,0.35)] flex items-center shadow-[0_0_30px_rgba(47,229,131,0.05)]">
            <p className="text-[14px] text-[#9aa0a6] leading-relaxed">
              Every module is fed by the same reconciled dataset — so a cost finding, a utilization finding and a failure finding about the same route are never in conflict.
            </p>
          </div>

        </div>

        {/* Selected Module Detail Panel */}
        <div className="p-5 sm:p-7 rounded-[18px] bg-[#0c0d0d] border border-[rgba(47,229,131,0.35)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#2fe583] uppercase tracking-wider">
                Active Module: {currentMod.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2fe583] shadow-[0_0_8px_#2fe583]" />
            </div>
            <p className="text-sm font-mono text-[#f5f6f7] leading-relaxed max-w-2xl">
              &ldquo;{currentMod.insight}&rdquo;
            </p>
          </div>

          <div className="bg-[#050605] border border-[#1e2022] rounded-xl px-5 py-3 text-left md:text-right shrink-0">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#6b7075] block">
              {currentMod.kpi.label}
            </span>
            <span className="text-xl font-bold font-mono text-[#2fe583]">
              {currentMod.kpi.value}
            </span>
            <span className="text-[11px] text-[#9aa0a6] block font-mono">
              {currentMod.kpi.subtext}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
