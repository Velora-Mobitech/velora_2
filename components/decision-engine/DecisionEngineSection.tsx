"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, ShieldCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const SLIPS = [
  {
    id: "slip-1",
    tag: "Example — Route consolidation",
    title: "Consolidate 17 low-occupancy routes",
    figLabel: "Potential annual opportunity",
    figValue: "₹31.4L",
    k: "Evidence",
    featured: true,
    items: [
      "Occupancy below threshold (<35% over 90 days)",
      "Overlapping pickup corridors (78% spatial overlap)",
      "Sufficient capacity in contracted 26-seaters",
      "SLA-compatible consolidation with zero female drop safety compromise",
    ],
  },
  {
    id: "slip-2",
    tag: "Example — Vendor reallocation",
    title: "Shift late-night capacity from Vendor A to Vendor B",
    figLabel: "Direction",
    figValue: "Reliability ↑",
    k: "Expected",
    featured: false,
    items: [
      "Lower effective true cost (-₹48 / trip)",
      "Improved reliability (Vendor B 99.1% vs Vendor A 91.4%)",
      "Reduced emergency-replacement exposure (84% fewer escalations)",
    ],
  },
  {
    id: "slip-3",
    tag: "Example — Invoice anomaly",
    title: "Investigate Vendor C invoice anomalies",
    figLabel: "Status",
    figValue: "Flagged",
    k: "Detected",
    featured: false,
    items: [
      "43 duplicate trip claims identified across 3 campus gates",
      "Excess billed kilometres (14.2% discrepancy vs GPS telemetry)",
      "Inconsistent vehicle category (billed Innova, dispatched Dzire)",
    ],
  },
];

export function DecisionEngineSection() {
  const [expandedId, setExpandedId] = useState<string | null>("slip-1");

  return (
    <section id="decision-engine" className="py-24 sm:py-32 bg-black border-b border-[#161717]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        
        {/* Head */}
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-[#1e2022] bg-[#0a0a0a] px-4 py-2 rounded-full text-[12.5px] text-[#9aa0a6] font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2fe583] shadow-[0_0_8px_#2fe583]" />
            The decision engine
          </div>
          <h2 className="text-[28px] sm:text-[38px] lg:text-[42px] font-bold tracking-tight text-[#f5f6f7] leading-[1.15]">
            Not &ldquo;AI-powered recommendations.&rdquo; <br />
            <span className="text-[#2fe583]">Specific ones.</span>
          </h2>
          <p className="mt-4 text-[#9aa0a6] text-[16.5px] leading-relaxed">
            Illustrative examples of the kind of finding Velora is built to surface — each with the evidence behind it, not just a conclusion.
          </p>
        </div>

        {/* Slips Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-16">
          {SLIPS.map((slip) => {
            const isFeatured = slip.featured;
            return (
              <div
                key={slip.id}
                className={cn(
                  "bg-[#0a0a0a] rounded-[22px] overflow-hidden flex flex-col justify-between border transition-all duration-200 group",
                  isFeatured
                    ? "border-[rgba(47,229,131,0.35)] shadow-[0_0_35px_rgba(47,229,131,0.06)]"
                    : "border-[#1e2022] hover:border-[#2c2f31]"
                )}
              >
                <div>
                  <div className="text-[10.5px] font-bold tracking-[0.06em] uppercase text-[#6b7075] px-6 pt-5 pb-1">
                    {slip.tag}
                  </div>

                  <h3 className="text-[17px] font-bold text-[#f5f6f7] px-6 py-2 pb-5 leading-[1.4]">
                    {slip.title}
                  </h3>

                  {/* Figure Box */}
                  <div className="mx-6 p-4 rounded-[10px] bg-[rgba(47,229,131,0.10)] border border-[rgba(47,229,131,0.35)] flex items-center justify-between">
                    <span className="text-[12.5px] text-[#9aa0a6]">{slip.figLabel}</span>
                    <strong className="text-[19px] font-extrabold text-[#2fe583] font-mono">
                      {slip.figValue}
                    </strong>
                  </div>

                  {/* Body with glowing green dots */}
                  <div className="p-6">
                    <div className="text-[11px] font-mono tracking-[0.06em] uppercase text-[#6b7075] font-bold mb-3">
                      {slip.k}
                    </div>
                    <ul className="space-y-2.5">
                      {slip.items.map((item, idx) => (
                        <li key={idx} className="text-[13.5px] text-[#9aa0a6] pl-4 relative leading-relaxed">
                          <span className="absolute left-0 top-[8px] w-1.5 h-1.5 rounded-full bg-[#2fe583] shadow-[0_0_5px_#2fe583]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-5 pt-2 border-t border-[#161717] text-[11px] font-mono text-[#6b7075] flex items-center justify-between">
                  <span>Illustrative Example</span>
                  <span className="text-[#2fe583]">Auditable</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decision Close Banner */}
        <div className="text-center pt-8 text-[20px] sm:text-[26px] font-bold max-w-[760px] mx-auto leading-[1.45]">
          <span className="text-[#6b7075]">Velora does not stop at reporting what happened.</span><br />
          <span className="text-[#f5f6f7]">It recommends what should happen next.</span>
        </div>

      </div>
    </section>
  );
}
