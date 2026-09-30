"use client";

import React from "react";
import { CheckCircle2, Shield, Eye, HelpCircle, FileText, Lock } from "lucide-react";

const ANATOMY_STEPS = [
  {
    step: "01",
    title: "Actionable Directive",
    label: "Recommendation",
    desc: "A specific, operational change proposal — not a vague advisory metric.",
    example: "'Consolidate 17 low-occupancy routes into 8 high-capacity shuttles.'",
  },
  {
    step: "02",
    title: "Auditable Ground Truth",
    label: "Observed Evidence",
    desc: "Rigorous historical telemetry from GPS traces, gate RFID, and trip sheets.",
    example: "90 days of GPS odometer logs demonstrating <35% seat utilization.",
  },
  {
    step: "03",
    title: "Transparent Preconditions",
    label: "Explicit Assumptions",
    desc: "Clearly stated baseline parameters regarding fuel tariffs and employee shift schedules.",
    example: "Contract mileage rates remain constant over next 2 quarters.",
  },
  {
    step: "04",
    title: "Operational Boundaries",
    label: "Realistic Constraints",
    desc: "Strict adherence to female security escorts, maximum detour thresholds, and campus arrival SLAs.",
    example: "Detour capped at <12 mins; 100% security escort compliance.",
  },
  {
    step: "05",
    title: "Quantified Financial Outcome",
    label: "Expected Impact",
    desc: "Net projected monetary recovery separated from non-monetized risk factors.",
    example: "₹31.4L annual net savings without degrading SLA reliability.",
  },
];

export function ExplainabilitySection() {
  return (
    <section className="py-24 sm:py-32 bg-black border-b border-[#161717]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        
        {/* Head */}
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-[#1e2022] bg-[#0a0a0a] px-4 py-2 rounded-full text-[12.5px] text-[#9aa0a6] font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2fe583] shadow-[0_0_8px_#2fe583]" />
            Algorithmic integrity
          </div>
          <h2 className="text-[28px] sm:text-[38px] lg:text-[42px] font-bold tracking-tight text-[#f5f6f7] leading-[1.15]">
            Every recommendation should be <br />
            <span className="text-[#2fe583]">explainable.</span>
          </h2>
          <p className="mt-4 text-[#9aa0a6] text-[16.5px] leading-relaxed">
            Enterprise transport operations cannot run on black-box predictions. Velora enforces an auditable 5-part anatomical standard for every proposed change.
          </p>
        </div>

        {/* 5-Part Anatomy Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {ANATOMY_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0a0a0a] border border-[#1e2022] hover:border-[#2c2f31] rounded-[18px] p-5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 font-mono">
                  <span className="text-xs font-bold text-[#2fe583] bg-[rgba(47,229,131,0.10)] px-2 py-0.5 rounded border border-[rgba(47,229,131,0.30)]">
                    PART {item.step}
                  </span>
                  <span className="text-[10px] text-[#6b7075] uppercase">
                    {item.label}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#f5f6f7] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#9aa0a6] leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#161717] bg-[#050605] -mx-5 -mb-5 p-3 rounded-b-[18px]">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#6b7075] block mb-0.5">
                  Sample Standard
                </span>
                <span className="text-[11px] font-mono text-[#8fe6ba] block leading-normal">
                  {item.example}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Guiding Principle Card */}
        <div className="bg-[#091510] border border-[rgba(47,229,131,0.35)] rounded-[22px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_40px_rgba(47,229,131,0.06)]">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono text-[#2fe583] uppercase tracking-widest block mb-1">
              Core Technical Principle
            </span>
            <div className="text-lg sm:text-xl font-bold font-mono text-[#f5f6f7]">
              Correctness + Explainability &gt; Novelty
            </div>
            <p className="text-xs text-[#9aa0a6] max-w-xl">
              We never obscure enterprise transport decisions behind proprietary buzzwords. Transport managers retain total transparent control over every policy lever and assumption.
            </p>
          </div>

          <div className="shrink-0 font-mono text-xs text-[#2fe583] bg-black/80 px-4 py-2.5 rounded-full border border-[rgba(47,229,131,0.35)]">
            Zero Black-Box Logic
          </div>
        </div>

      </div>
    </section>
  );
}
