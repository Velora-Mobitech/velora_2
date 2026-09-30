"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const QUESTIONS = [
  {
    idx: "01",
    question: "Which routes are inefficient?",
    context: "Most ETMS run static routing templates where parallel corridors run half-empty.",
    insight: "Velora detects overlapping corridors with <35% seat occupancy and models merger windows without violating shift SLAs.",
  },
  {
    idx: "02",
    question: "Which vendors are actually costing us more?",
    context: "A low base contract rate often conceals frequent breakdowns and emergency spot-ride surcharges.",
    insight: "Velora computes the 'Effective Cost' per vendor — aggregating base contract fees with hidden failure penalties.",
  },
  {
    idx: "03",
    question: "Where are we paying for unused capacity?",
    context: "Enterprises frequently pay fixed monthly guarantees for 26-seater tempo travellers running with 7 passengers.",
    insight: "Velora maps historical demand curves against contracted fleet size to expose dead kilometers and surplus vehicle slots.",
  },
  {
    idx: "04",
    question: "What do failures really cost?",
    context: "When a driver doesn't show up, paying for an emergency replacement cab is only the tip of the iceberg.",
    insight: "Velora quantifies compound economic friction: spot ride surcharges, shift worker waiting delay, and transport desk escalations.",
  },
  {
    idx: "05",
    question: "Which changes would create measurable savings?",
    context: "Dashboards show averages, but transport managers cannot easily verify which contract terms to renegotiate.",
    insight: "Velora converts diagnostic data into ranked, constraint-aware operational interventions backed by auditable evidence.",
  },
  {
    idx: "06",
    question: "Where is invoice leakage actually happening?",
    context: "Invoices are approved with basic batch checks, missing duplicate trip logs and inflated detour mileage.",
    insight: "Velora reconciles GPS telemetry traces against RFID security gate scans and rate card contracts to catch billing discrepancies.",
  },
];

const CHIPS = [
  "ETMS",
  "GPS",
  "Vendors",
  "Invoices",
  "Contracts",
  "HR systems",
  "Rosters",
  "Finance systems",
];

export function ProblemSection() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(0);

  return (
    <section id="problem" className="py-24 sm:py-32 bg-black border-b border-[#161717] relative">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        
        {/* Head */}
        <div className="text-center max-w-[680px] mx-auto mb-14">
          <div className="inline-flex items-center gap-2 border border-[#1e2022] bg-[#0a0a0a] px-4 py-2 rounded-full text-[12.5px] text-[#9aa0a6] font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2fe583] shadow-[0_0_8px_#2fe583]" />
            The problem
          </div>
          <h2 className="text-[28px] sm:text-[38px] lg:text-[42px] font-bold tracking-tight text-[#f5f6f7] leading-[1.15]">
            Transportation isn&apos;t broken. <span className="text-[#2fe583]">It&apos;s unmeasured.</span>
          </h2>
          <p className="mt-4 text-[#9aa0a6] text-[16.5px] leading-relaxed">
            Every enterprise running employee mobility is already sitting on the answers — spread across systems that don&apos;t talk to each other.
          </p>
        </div>

        {/* 6 Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[960px] mx-auto mb-10">
          {QUESTIONS.map((item, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <div
                key={item.idx}
                onClick={() => setSelectedIdx(isSelected ? null : idx)}
                className={cn(
                  "bg-[#0a0a0a] border rounded-[14px] p-5 sm:p-6 flex flex-col justify-between transition-all duration-200 cursor-pointer group",
                  isSelected
                    ? "border-[rgba(47,229,131,0.5)] bg-[#0c0d0d] shadow-[0_0_25px_rgba(47,229,131,0.08)]"
                    : "border-[#1e2022] hover:border-[#2c2f31]"
                )}
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs font-bold text-[#2fe583] pt-0.5">
                    {item.idx}
                  </span>
                  <div className="flex-1">
                    <p className="text-[15.5px] text-[#f5f6f7] font-medium group-hover:text-white transition-colors">
                      {item.question}
                    </p>
                  </div>
                  <ArrowRight
                    className={cn(
                      "w-4 h-4 transition-transform shrink-0",
                      isSelected ? "text-[#2fe583] rotate-90" : "text-[#6b7075] group-hover:text-[#9aa0a6]"
                    )}
                  />
                </div>

                {/* Expanded Diagnostic Insight */}
                {isSelected && (
                  <div className="mt-4 pt-4 border-t border-[#1e2022] space-y-2 text-xs">
                    <div className="text-[#9aa0a6]">
                      <span className="text-[#6b7075] uppercase font-mono text-[10px] block mb-0.5">Blindspot</span>
                      {item.context}
                    </div>
                    <div className="p-3 rounded-lg bg-[#091510] border border-[rgba(47,229,131,0.25)] text-[#8fe6ba]">
                      <span className="text-[#2fe583] uppercase font-mono text-[10px] font-semibold block mb-0.5">Velora Diagnostic</span>
                      {item.insight}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Chips Wrap */}
        <div className="mt-10 text-center">
          <div className="text-[12px] tracking-[0.08em] uppercase text-[#6b7075] font-semibold mb-4">
            Fragmented across
          </div>
          <div className="flex flex-wrap gap-2.5 justify-center max-w-[800px] mx-auto">
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className="text-[12.5px] text-[#9aa0a6] border border-[#1e2022] hover:border-[#2a2a2a] hover:text-[#f5f6f7] px-4 py-2 rounded-full bg-[#0a0a0a] transition-colors font-medium select-none"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
