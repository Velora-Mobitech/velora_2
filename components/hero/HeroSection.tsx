"use client";

import React, { useState } from "react";
import { ArrowRight, MessageSquare, ShieldCheck, ArrowDown, Activity } from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { DataFlowDiagram } from "./DataFlowDiagram";
import { DiagnosticModal } from "@/components/form/DiagnosticModal";

export function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden border-b border-slate-200/80 bg-slate-50">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow & Status */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-xs font-mono font-bold tracking-widest text-teal-800 uppercase bg-teal-50 border border-teal-200/80 px-3 py-1 rounded-full">
            Enterprise Mobility Intelligence
          </span>
          <StatusBadge status="VALIDATING" size="sm" />
          <span className="text-xs text-slate-500 font-mono hidden sm:inline">
            Currently validating with enterprise mobility teams
          </span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl leading-[1.1] mb-6">
          Know where your enterprise mobility is losing money.
        </h1>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl leading-relaxed mb-8 sm:mb-10 font-normal">
          Velora turns fragmented transport, vendor and financial data into actionable mobility intelligence — helping enterprises identify cost leakage, operational inefficiencies and reliability risks before they become expensive.
        </p>

        {/* CTAs & Conversion Actions */}
        <div className="flex flex-wrap items-center gap-4 mb-12 sm:mb-16">
          <button
            onClick={() => setModalOpen(true)}
            type="button"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold tracking-wide transition shadow-sm cursor-pointer"
          >
            <span>Get a Mobility Diagnostic</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="#validation"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-sm font-semibold tracking-wide transition shadow-xs"
          >
            <MessageSquare className="w-4 h-4 text-slate-500" />
            <span>Talk to the Velora Team</span>
          </a>

          <a
            href="#how-it-works"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-900 px-3 py-2 transition"
          >
            <span>How it works</span>
            <ArrowDown className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Enterprise Value Callout Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs mb-12 sm:mb-16">
          <div className="border-r border-slate-100 last:border-0 pr-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
              Core Stance
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-900 block mt-0.5">
              Vendor-Neutral Layer
            </span>
            <span className="text-[11px] text-slate-500 block">Sits above existing ETMS</span>
          </div>

          <div className="border-r border-slate-100 last:border-0 pr-3 pl-2 sm:pl-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
              Analytical Focus
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-900 block mt-0.5">
              Failure Economics
            </span>
            <span className="text-[11px] text-slate-500 block">True cost of breakdown</span>
          </div>

          <div className="border-r border-slate-100 last:border-0 pr-3 pl-2 sm:pl-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
              Actionability
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-900 block mt-0.5">
              Explainable Decisions
            </span>
            <span className="text-[11px] text-slate-500 block">Evidence & constraints</span>
          </div>

          <div className="pl-2 sm:pl-3">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
              Current Stage
            </span>
            <span className="text-xs sm:text-sm font-semibold text-teal-800 block mt-0.5">
              Data → Diagnostics
            </span>
            <span className="text-[11px] text-slate-500 block">Enterprise validation</span>
          </div>
        </div>

        {/* Hero Visual: Abstract Data Flow Diagram */}
        <div className="mt-4">
          <DataFlowDiagram />
        </div>

      </div>

      <DiagnosticModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
