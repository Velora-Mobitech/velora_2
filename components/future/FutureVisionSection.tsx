"use client";

import React from "react";
import { FUTURE_VISION_STEPS } from "@/lib/data";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ArrowRight, Sparkles, Network, Layers, ShieldCheck, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export function FutureVisionSection() {
  return (
    <section id="future-vision" className="py-20 sm:py-28 bg-slate-950 text-white relative overflow-hidden border-b border-slate-900">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
              11 • Long-Term Roadmap
            </span>
            <StatusBadge status="FUTURE VISION" size="sm" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            And eventually, Velora won&apos;t just tell you what to change. <br />
            <span className="text-teal-400">It will help you execute it.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Today, Velora is your independent intelligence and diagnostic engine. In the future, that same intelligence will power automated orchestration and multi-provider supply clearing.
          </p>
        </div>

        {/* 5-Stage Conceptual Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
          {FUTURE_VISION_STEPS.map((step, idx) => (
            <div
              key={idx}
              className={cn(
                "rounded-2xl p-5 border flex flex-col justify-between transition-all",
                step.status.includes("CURRENT")
                  ? "bg-slate-900/90 border-slate-700"
                  : step.status.includes("VALIDATING")
                  ? "bg-slate-900/60 border-teal-800/60"
                  : "bg-slate-900/30 border-slate-800/80 opacity-80 hover:opacity-100"
              )}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-500">
                    STAGE {step.stage}
                  </span>
                  <StatusBadge status={step.status} size="sm" />
                </div>

                <div className="text-xs font-mono text-teal-400 mb-1">
                  {step.question}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {step.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 uppercase">
                {step.status.includes("CURRENT") ? "Available Today" : "Conceptual Roadmap"}
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Enterprise Boundary Notice */}
        <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 text-xs text-slate-400 max-w-4xl mx-auto flex items-start gap-3">
          <Lock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-slate-200 block mb-0.5 font-mono uppercase text-[11px]">
              Pre-Validation Governance Notice:
            </strong>
            The orchestration and liquidity network layers described above are long-term conceptual horizons. Velora does not currently operate a live ride dispatch marketplace, broker third-party drivers directly, or claim instantaneous fallback fleet coverage. Our current active focus is 100% committed to delivering authoritative data diagnostics and explainable decisions.
          </div>
        </div>

      </div>
    </section>
  );
}
