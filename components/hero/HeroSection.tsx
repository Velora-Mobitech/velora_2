"use client";

import React, { useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { DataFlowDiagram } from "./DataFlowDiagram";
import { DiagnosticModal } from "@/components/form/DiagnosticModal";

export function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden bg-black text-[#f5f6f7]">
      {/* Subtle radial emerald gradient from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(47,229,131,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 relative z-10">
        
        <div className="max-w-[720px]">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1e2022] bg-[#0a0a0a] text-xs text-[#9aa0a6] font-medium mb-6 shadow-xs hover:border-[#2a2a2a] transition-colors">
            <span className="w-4 h-4 rounded-[4px] bg-black border border-[#2a2a2a] text-[#2fe583] font-mono text-[9px] font-extrabold flex items-center justify-center">
              V
            </span>
            <span>Mobility intelligence for the enterprise</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#2fe583] shadow-[0_0_8px_#2fe583] ml-1" />
          </div>

          {/* Heading */}
          <h1 className="text-[34px] sm:text-[48px] lg:text-[56px] font-extrabold tracking-[-0.02em] leading-[1.1] mb-6">
            <span className="text-[#75797d]">Know where your enterprise mobility is</span>{" "}
            <span className="text-[#f5f6f7]">losing money.</span>
          </h1>

          {/* Lede text */}
          <p className="text-[17.5px] text-[#9aa0a6] leading-relaxed max-w-[54ch] mb-8 font-normal">
            Velora turns fragmented transport, vendor and financial data into actionable mobility intelligence — helping enterprises identify cost leakage, operational inefficiencies and reliability risks before they become expensive.
          </p>

          {/* CTA Row */}
          <div className="flex flex-wrap items-center gap-5 mb-14">
            <button
              onClick={() => setModalOpen(true)}
              type="button"
              className="btn-green-gradient inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-[14px] font-bold tracking-tight cursor-pointer shadow-lg"
            >
              <span>Get a Mobility Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#validation"
              className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-[#f5f6f7] hover:text-[#2fe583] transition-colors group"
            >
              <span>Talk to the Velora Team</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Hero Visual: Reconciled Ledger & Telemetry Diagram */}
        <div className="mt-8">
          <DataFlowDiagram />
        </div>

      </div>

      <DiagnosticModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
