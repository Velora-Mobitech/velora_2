"use client";

import React, { useState } from "react";
import { RECOMMENDATIONS, Recommendation } from "@/lib/data";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Coins, 
  ArrowUpRight, 
  ShieldCheck, 
  FileText,
  Sliders,
  Scale
} from "lucide-react";
import { cn } from "@/lib/utils";

export function DecisionEngineSection() {
  const [expandedId, setExpandedId] = useState<string>(RECOMMENDATIONS[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? "" : id);
  };

  return (
    <section id="decision-engine" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
              07 • Decision Engine
            </span>
            <StatusBadge status="ILLUSTRATIVE EXAMPLE" size="sm" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Don&apos;t stop at the diagnosis. <br />
            <span className="text-teal-800">Decide what changes next.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Velora bridges the gap between passive reporting and operational action. Every finding is translated into an actionable, evidence-backed decision card engineered for transport managers and procurement heads.
          </p>
        </div>

        {/* 3 Concrete Recommendation Cards */}
        <div className="space-y-6 mb-16">
          {RECOMMENDATIONS.map((rec) => {
            const isExpanded = expandedId === rec.id;
            return (
              <div
                key={rec.id}
                className={cn(
                  "rounded-2xl border transition-all duration-200 overflow-hidden",
                  isExpanded
                    ? "bg-white border-slate-900 shadow-md ring-1 ring-slate-900"
                    : "bg-slate-50/70 border-slate-200 hover:border-slate-300"
                )}
              >
                {/* Header Bar */}
                <div
                  onClick={() => toggleExpand(rec.id)}
                  className="p-6 sm:p-7 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <StatusBadge status={rec.badge} size="sm" />
                      <span className="text-xs font-mono text-slate-500 uppercase">
                        {rec.category}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                      {rec.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
                      {rec.summary}
                    </p>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 shrink-0 pt-2 md:pt-0 border-t md:border-0 border-slate-100">
                    <div className="text-left md:text-right">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                        Annual Opportunity
                      </span>
                      <span className="text-2xl font-black font-mono text-teal-800 tracking-tight">
                        {rec.annualOpportunity}
                      </span>
                    </div>

                    <button
                      type="button"
                      aria-label="Toggle details"
                      className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition shrink-0"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Anatomical Detail Section */}
                {isExpanded && (
                  <div className="px-6 pb-7 pt-2 border-t border-slate-100 bg-slate-50/50">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 mb-6">
                      
                      {/* Evidence Box */}
                      <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-mono font-bold text-teal-800 uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                          Observed Evidence
                        </span>
                        <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                          {rec.evidence.map((ev, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                              <span>{ev}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Assumptions Box */}
                      <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-mono font-bold text-slate-600 uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                          <Sliders className="w-3.5 h-3.5 text-slate-500" />
                          Tested Assumptions
                        </span>
                        <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                          {rec.assumptions.map((as, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                              <span>{as}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Constraints Box */}
                      <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-2xs">
                        <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                          <Scale className="w-3.5 h-3.5 text-amber-600" />
                          Operational Constraints
                        </span>
                        <ul className="space-y-2 text-xs text-slate-600 leading-relaxed">
                          {rec.constraints.map((cn, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                              <span>{cn}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Bottom Expected Impact Strip */}
                    <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-950 text-xs sm:text-sm font-medium flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-semibold text-teal-900 block font-mono text-xs uppercase mb-0.5">
                          Expected Verified Impact:
                        </strong>
                        {rec.expectedImpact}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing Principle Banner */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-slate-900 leading-relaxed">
            &ldquo;Velora does not stop at reporting what happened. It recommends what should happen next.&rdquo;
          </p>
          <span className="text-xs text-slate-500 font-mono mt-1 block">
            Evidence over hype • Economics over vanity metrics • Explainability over novelty
          </span>
        </div>

      </div>
    </section>
  );
}
