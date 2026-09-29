"use client";

import React from "react";
import { ETMS_COMPARISON, SAVINGS_TIERS } from "@/lib/data";
import { Layers, ShieldCheck, Check, ArrowRight, AlertCircle } from "lucide-react";

export function EtmsComparisonSection() {
  return (
    <section id="etms-comparison" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-3">
            09 • Architectural Positioning
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Not another transport management system.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Velora does not replace your daily dispatcher or driver application. We sit as an independent analytical layer across your existing ETMS, GPS providers, and vendor contracts.
          </p>
        </div>

        {/* Side-by-Side Comparison Table */}
        <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-900 text-white p-4 sm:p-5 text-xs font-mono font-bold uppercase tracking-wider">
            <div className="md:col-span-3 text-slate-400">Core Capability</div>
            <div className="md:col-span-4 text-slate-300">Existing Mobility Stack (ETMS)</div>
            <div className="md:col-span-5 text-teal-400">Velora Intelligence Layer</div>
          </div>

          <div className="divide-y divide-slate-200 bg-white text-xs sm:text-sm">
            {ETMS_COMPARISON.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 gap-2 md:gap-4 items-start hover:bg-slate-50/70 transition-colors"
              >
                <div className="md:col-span-3 font-semibold text-slate-900 font-mono text-xs">
                  {row.capability}
                </div>
                <div className="md:col-span-4 text-slate-600 leading-relaxed">
                  <span className="md:hidden font-mono text-[10px] text-slate-400 uppercase block mb-0.5">
                    Existing ETMS:
                  </span>
                  {row.etms}
                </div>
                <div className="md:col-span-5 text-slate-900 font-medium leading-relaxed flex items-start gap-2">
                  <span className="md:hidden font-mono text-[10px] text-teal-700 uppercase block mb-0.5">
                    Velora Layer:
                  </span>
                  <div className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>{row.velora}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 11: Savings Framework */}
        <div className="pt-10 border-t border-slate-100">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase block mb-2">
              10 • Value Realization Taxonomy
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              The Three Tiers of Enterprise Savings
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              We never promise inflated or unverified theoretical savings. Velora explicitly distinguishes raw mathematical opportunities from operationally feasible and bankable bottom-line recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SAVINGS_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      TIER 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 uppercase">
                      {tier.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 tracking-tight mb-1">
                    {tier.name}
                  </h4>
                  <div className="text-xs font-semibold text-teal-800 mb-3 font-mono">
                    {tier.tagline}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {tier.desc}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200 text-[11px] font-mono text-slate-600">
                  <span className="text-slate-400 block text-[9px] uppercase">Concrete Example</span>
                  {tier.example}
                </div>
              </div>
            ))}
          </div>

          {/* Savings Disclaimer Note */}
          <div className="mt-8 p-4 rounded-xl bg-slate-100/80 border border-slate-200 text-slate-600 text-xs flex items-start gap-2.5 max-w-3xl">
            <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>Enterprise Transparency:</strong> Velora does not make sweeping claims of guaranteed savings. All operational savings depend on the enterprise&apos;s current contract terms, route densities, and execution compliance.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
