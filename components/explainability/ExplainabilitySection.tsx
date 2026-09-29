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
    <section className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-3">
            08 • Algorithmic Integrity
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Every recommendation should be explainable.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Enterprise transport operations cannot run on black-box predictions. Velora enforces an auditable 5-part anatomical standard for every proposed change.
          </p>
        </div>

        {/* 5-Part Anatomy Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {ANATOMY_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                    PART {item.step}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">
                    {item.label}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 bg-slate-50/60 -mx-5 -mb-5 p-3 rounded-b-2xl">
                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                  Sample Standard
                </span>
                <span className="text-[11px] font-mono text-slate-700 block leading-normal">
                  {item.example}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Guiding Principle Card */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">
              Core Technical Principle
            </span>
            <div className="text-lg font-bold">
              Correctness + Explainability &gt; Novelty
            </div>
            <p className="text-xs text-slate-400 max-w-xl">
              We never obscure enterprise transport decisions behind proprietary buzzwords. Transport managers retain total transparent control over every policy lever and assumption.
            </p>
          </div>

          <div className="shrink-0 font-mono text-xs text-slate-300 bg-slate-800/80 px-4 py-2.5 rounded-xl border border-slate-700">
            Zero Black-Box Logic
          </div>
        </div>

      </div>
    </section>
  );
}
