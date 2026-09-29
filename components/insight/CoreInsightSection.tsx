"use client";

import React from "react";
import { ArrowRight, Layers, Cpu, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/lib/data";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { cn } from "@/lib/utils";

const PROGRESSION_STAGES = [
  { stage: "01", question: "What happened?", desc: "Operational trip logging & driver timestamps", role: "Basic ETMS Reporting" },
  { stage: "02", question: "What did it cost?", desc: "Invoice matching, toll slips & surge markups", role: "Financial Reconciliation" },
  { stage: "03", question: "Why did it occur?", desc: "Route overlap, chronic vendor failure & SLA gaps", role: "Root Cause Diagnostics" },
  { stage: "04", question: "What should change?", desc: "Contract renegotiation, route merger & capacity shifts", role: "Velora Intelligence" },
];

export function CoreInsightSection() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Insight Callout */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-teal-800 uppercase bg-teal-100/70 border border-teal-200 px-3 py-1 rounded-full mb-4">
            03 • The Analytical Paradigm Shift
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-6">
            Reporting tells you what happened. <br className="hidden sm:inline" />
            <span className="text-teal-800">Intelligence tells you what to do next.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Traditional tools stop at static retrospective dashboards. Velora operates as an independent, vendor-neutral intelligence layer that analyzes across your vendors, contracts, and GPS traces to deliver actionable operational decisions.
          </p>

          {/* 4-Stage Analytical Progression */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {PROGRESSION_STAGES.map((step, idx) => (
              <div
                key={idx}
                className={cn(
                  "p-5 rounded-2xl border transition-all relative",
                  idx === 3
                    ? "bg-slate-950 text-white border-slate-800 shadow-md ring-1 ring-teal-500/30"
                    : "bg-white text-slate-800 border-slate-200 shadow-2xs"
                )}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={cn(
                      "text-xs font-mono font-bold px-2 py-0.5 rounded",
                      idx === 3 ? "bg-teal-500/20 text-teal-300" : "bg-slate-100 text-slate-500"
                    )}
                  >
                    STEP {step.stage}
                  </span>
                  {idx === 3 && (
                    <span className="text-[10px] font-mono uppercase bg-teal-500/30 text-teal-300 px-2 py-0.5 rounded">
                      Velora Focus
                    </span>
                  )}
                </div>

                <h3 className={cn("text-base font-bold mb-1.5", idx === 3 ? "text-white" : "text-slate-900")}>
                  {step.question}
                </h3>
                <p className={cn("text-xs leading-relaxed mb-3", idx === 3 ? "text-slate-300" : "text-slate-500")}>
                  {step.desc}
                </p>

                <div
                  className={cn(
                    "text-[11px] font-mono uppercase tracking-wider pt-2 border-t",
                    idx === 3 ? "border-slate-800 text-teal-400" : "border-slate-100 text-slate-400"
                  )}
                >
                  {step.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 05: How Velora Works (4-Step Operational Pipeline) */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase block mb-2">
              04 • Operational Architecture
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              How Velora Works: From messy feeds to verified decisions
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Four disciplined phases designed to discover, quantify, and capture enterprise mobility value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS_STEPS.map((phase, idx) => (
              <div
                key={idx}
                className={cn(
                  "rounded-2xl border p-6 flex flex-col justify-between transition-all",
                  phase.status.includes("FUTURE")
                    ? "bg-slate-900 text-white border-slate-800 relative overflow-hidden"
                    : "bg-white text-slate-900 border-slate-200 shadow-2xs"
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={cn(
                        "text-xl font-mono font-bold",
                        phase.status.includes("FUTURE") ? "text-teal-400" : "text-slate-400"
                      )}
                    >
                      {phase.step}
                    </span>
                    <StatusBadge
                      status={phase.status}
                      size="sm"
                    />
                  </div>

                  <h4
                    className={cn(
                      "text-lg font-bold tracking-tight mb-1",
                      phase.status.includes("FUTURE") ? "text-white" : "text-slate-900"
                    )}
                  >
                    {phase.title}
                  </h4>
                  <div
                    className={cn(
                      "text-xs font-medium mb-3",
                      phase.status.includes("FUTURE") ? "text-teal-300" : "text-teal-800"
                    )}
                  >
                    {phase.subtitle}
                  </div>

                  <p
                    className={cn(
                      "text-xs leading-relaxed mb-6",
                      phase.status.includes("FUTURE") ? "text-slate-300" : "text-slate-600"
                    )}
                  >
                    {phase.description}
                  </p>
                </div>

                <div
                  className={cn(
                    "pt-4 border-t space-y-1.5",
                    phase.status.includes("FUTURE") ? "border-slate-800" : "border-slate-100"
                  )}
                >
                  {phase.details.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className={cn(
                        "text-[11px] font-mono flex items-center gap-1.5",
                        phase.status.includes("FUTURE") ? "text-slate-400" : "text-slate-500"
                      )}
                    >
                      <span className="w-1 h-1 rounded-full bg-teal-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
