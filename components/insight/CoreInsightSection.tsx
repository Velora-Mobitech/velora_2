"use client";

import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const FLOW_CARDS = [
  {
    num: "01",
    title: "Connect",
    desc: "Bring together fragmented mobility data from ETMS, GPS, vendors, invoices, contracts, HR and finance systems — without ripping out what you already use.",
    isNext: false,
  },
  {
    num: "02",
    title: "Diagnose",
    desc: "Find cost, utilization and reliability issues: invoice anomalies, dead-km waste, occupancy shortfalls, and the true cost of vendor and driver failure.",
    isNext: false,
  },
  {
    num: "03",
    title: "Decide",
    desc: "Get specific, evidence-backed operational recommendations — not a dashboard of charts you still have to interpret yourself.",
    isNext: false,
  },
  {
    num: "04",
    title: "Execute",
    desc: "Orchestrate those decisions across a vetted, approved supply network on your behalf with policy compliance.",
    isNext: true,
    tag: "Coming soon",
  },
];

const ANALYTICAL_STAGES = [
  { step: "01", question: "What happened?", desc: "Trip logging & driver timestamps", who: "ETMS Reporting" },
  { step: "02", question: "What did it cost?", desc: "Invoice matching & toll slips", who: "ERP Ledgers" },
  { step: "03", question: "Why did it occur?", desc: "Corridor overlap & vendor SLA gaps", who: "Root Cause Audit" },
  { step: "04", question: "What should change?", desc: "Route mergers & contract reallocation", who: "Velora Intelligence", isCore: true },
];

export function CoreInsightSection() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-black border-b border-[#161717] relative">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        
        {/* Head */}
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-[#1e2022] bg-[#0a0a0a] px-4 py-2 rounded-full text-[12.5px] text-[#9aa0a6] font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2fe583] shadow-[0_0_8px_#2fe583]" />
            How Velora works
          </div>
          <h2 className="text-[28px] sm:text-[38px] lg:text-[42px] font-bold tracking-tight text-[#f5f6f7] leading-[1.15]">
            Connect. Diagnose. Decide. <br />
            <span className="text-[#2fe583]">Eventually, execute.</span>
          </h2>
          <p className="mt-4 text-[#9aa0a6] text-[16.5px] leading-relaxed">
            Four stages, proven in sequence — not shipped simultaneously as one unproven system.
          </p>
        </div>

        {/* 4 Flow Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {FLOW_CARDS.map((card) => (
            <div
              key={card.num}
              className={cn(
                "rounded-[14px] p-6 relative border transition-all duration-200 flex flex-col justify-between group",
                card.isNext
                  ? "bg-[#091510] border-[rgba(47,229,131,0.35)] shadow-[0_0_30px_rgba(47,229,131,0.06)]"
                  : "bg-[#0a0a0a] border-[#1e2022] hover:border-[#2c2f31]"
              )}
            >
              <div>
                <div
                  className={cn(
                    "w-[34px] h-[34px] rounded-[9px] flex items-center justify-center font-mono font-extrabold text-[13px] mb-5",
                    card.isNext
                      ? "bg-[#2fe583] text-[#06170d]"
                      : "bg-[rgba(47,229,131,0.10)] text-[#2fe583]"
                  )}
                >
                  {card.num}
                </div>

                <h3 className="text-[17px] font-bold text-[#f5f6f7] mb-2.5">
                  {card.title}
                </h3>
                <p className="text-[13.5px] text-[#9aa0a6] leading-relaxed">
                  {card.desc}
                </p>
              </div>

              {card.tag && (
                <div className="pt-4">
                  <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold tracking-[0.05em] uppercase text-[#2fe583] bg-[rgba(47,229,131,0.10)] border border-[rgba(47,229,131,0.35)] px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2fe583] animate-pulse" />
                    {card.tag}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Analytical Progression: Reporting vs Intelligence */}
        <div className="bg-[#0a0a0a] border border-[#1e2022] rounded-[22px] p-6 sm:p-10 relative overflow-hidden">
          <div className="max-w-[700px] mb-8">
            <span className="text-[11.5px] font-mono tracking-[0.06em] uppercase text-[#2fe583] font-semibold block mb-2">
              The Analytical Paradigm Shift
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#f5f6f7]">
              Reporting tells you what happened. <span className="text-[#2fe583]">Intelligence tells you what to do next.</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ANALYTICAL_STAGES.map((stage) => (
              <div
                key={stage.step}
                className={cn(
                  "p-5 rounded-[14px] border transition-all",
                  stage.isCore
                    ? "bg-[#091510] border-[rgba(47,229,131,0.4)] shadow-[0_0_20px_rgba(47,229,131,0.1)]"
                    : "bg-[#0c0d0d] border-[#1e2022]"
                )}
              >
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className={stage.isCore ? "text-[#2fe583] font-bold" : "text-[#6b7075]"}>
                    STEP {stage.step}
                  </span>
                  <span className={cn("text-[10px] uppercase font-mono px-1.5 py-0.5 rounded", stage.isCore ? "bg-[rgba(47,229,131,0.15)] text-[#2fe583]" : "text-[#6b7075]")}>
                    {stage.who}
                  </span>
                </div>
                <h4 className={cn("text-[15px] font-bold mb-1", stage.isCore ? "text-[#f5f6f7]" : "text-[#f5f6f7]")}>
                  {stage.question}
                </h4>
                <p className="text-[12.5px] text-[#9aa0a6]">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
