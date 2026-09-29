"use client";

import React, { useState } from "react";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { DiagnosticForm } from "@/components/form/DiagnosticForm";
import { ShieldCheck, Users, Sparkles, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";

export function ValidationSection() {
  const [partnerMode, setPartnerMode] = useState<"diagnostic" | "feedback">("diagnostic");

  return (
    <section id="validation" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Validation Callout Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold tracking-widest text-teal-800 uppercase bg-teal-100/70 border border-teal-200 px-2.5 py-1 rounded-full">
              13 • Design Partnership
            </span>
            <StatusBadge status="VALIDATING" size="sm" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Help us build the right intelligence layer.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
            Velora is currently validating its mobility intelligence thesis with forward-thinking enterprise mobility teams. We&apos;re looking for organizations willing to share how mobility is managed today, evaluate anonymized historical data where possible, and help us test whether these insights lead to measurably better operational decisions.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Strict Mutual Non-Disclosure</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Anonymized Data Ingestion</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Tailored Diagnostic Report</span>
            </div>
          </div>
        </div>

        {/* Section 15 & 16: Final Diagnostic Application Container */}
        <div id="diagnostic-form" className="scroll-mt-24">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                Section 14 • Mobility Efficiency Diagnostic
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                Find out where your mobility operation is losing value.
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Diagnostic Form (10 Fields) */}
            <div className="lg:col-span-8">
              <DiagnosticForm />
            </div>

            {/* Right Information & Design Partner Panel */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Partner Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Become a Design Partner
                    </h4>
                    <span className="text-[10px] font-mono text-teal-700 uppercase">
                      Cohorts Limited
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Design Partners receive a complimentary deep-dive audit of their historical ETMS and billing feeds, custom constraint modeling, and direct access to Velora&apos;s product team.
                </p>

                <div className="space-y-2 text-xs text-slate-500 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    <span>Cross-vendor rate audit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    <span>Dead km & capacity heatmap</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                    <span>Failure economics scorecard</span>
                  </div>
                </div>
              </div>

              {/* Data Confidentiality Promise */}
              <div className="p-6 rounded-2xl bg-slate-950 text-white border border-slate-800 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-400">
                    Data Security & NDA
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  We never store unencrypted PII. Employee identities, home addresses, and confidential vendor rates are hashed and scrubbed prior to algorithmic evaluation.
                </p>
                <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400">
                  Enterprise-grade governance
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
