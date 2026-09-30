"use client";

import React, { useState } from "react";
import { ETMS_COMPARISON, SAVINGS_TIERS } from "@/lib/data";
import { Check, ArrowRight, ShieldCheck, Database, FileSpreadsheet, Scale, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

export function EtmsComparisonSection() {
  const [activeSchema, setActiveSchema] = useState<"trip" | "audit">("trip");

  return (
    <section id="etms-comparison" className="py-24 sm:py-32 bg-black border-b border-[#161717]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        
        {/* Split Section: Works with what you already run */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-24">
          
          {/* Left Text & Stack List */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 border border-[#1e2022] bg-[#0a0a0a] px-4 py-2 rounded-full text-[12.5px] text-[#9aa0a6] font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2fe583] shadow-[0_0_8px_#2fe583]" />
              Vendor-neutral by design
            </div>

            <h2 className="text-[26px] sm:text-[34px] font-bold tracking-tight text-[#f5f6f7] leading-[1.3] mb-4">
              Works with what you <span className="text-[#2fe583]">already run.</span>
            </h2>

            <p className="text-[16px] text-[#9aa0a6] leading-relaxed mb-8">
              Velora is not another ETMS. It sits above your existing systems and vendors, ingesting the exports and access you&apos;re already able to share — no incumbent API access required, no rip-and-replace.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="bg-[#0a0a0a] border border-[#1e2022] rounded-[10px] p-4 flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-[rgba(47,229,131,0.10)] flex items-center justify-center shrink-0 text-[#2fe583]">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-[14px] font-bold text-[#f5f6f7] mb-0.5">ETMS &amp; GPS</h5>
                  <p className="text-[12px] text-[#9aa0a6]">MoveInSync, Routematic, internal tools</p>
                </div>
              </div>

              <div className="bg-[#0a0a0a] border border-[#1e2022] rounded-[10px] p-4 flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-[rgba(47,229,131,0.10)] flex items-center justify-center shrink-0 text-[#2fe583]">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-[14px] font-bold text-[#f5f6f7] mb-0.5">Finance systems</h5>
                  <p className="text-[12px] text-[#9aa0a6]">Invoices, rate cards, contracts</p>
                </div>
              </div>

              <div className="bg-[#0a0a0a] border border-[#1e2022] rounded-[10px] p-4 flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-[rgba(47,229,131,0.10)] flex items-center justify-center shrink-0 text-[#2fe583]">
                  <CalendarDays className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-[14px] font-bold text-[#f5f6f7] mb-0.5">HR systems</h5>
                  <p className="text-[12px] text-[#9aa0a6]">Rosters, shifts, employee data</p>
                </div>
              </div>

              <div className="bg-[#0a0a0a] border border-[#1e2022] rounded-[10px] p-4 flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-[rgba(47,229,131,0.10)] flex items-center justify-center shrink-0 text-[#2fe583]">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-[14px] font-bold text-[#f5f6f7] mb-0.5">Vendor contracts</h5>
                  <p className="text-[12px] text-[#9aa0a6]">SLAs, rate structures</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Code Card from Reference */}
          <div className="lg:col-span-6">
            <div className="bg-[#091510] border border-[rgba(47,229,131,0.35)] rounded-[22px] p-6 shadow-[0_0_35px_rgba(47,229,131,0.06)]">
              <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[rgba(47,229,131,0.2)]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-black border border-[#1e2022] flex items-center justify-center text-[#2fe583]">
                    <span className="font-mono text-xs font-bold">&gt;_</span>
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-[#f5f6f7]">Normalized trip record</h4>
                    <span className="text-[12px] text-[#9aa0a6]">One unified schema across any source</span>
                  </div>
                </div>

                <div className="flex gap-1.5 font-mono text-[10px]">
                  <button
                    onClick={() => setActiveSchema("trip")}
                    className={cn(
                      "px-2.5 py-1 rounded-md transition",
                      activeSchema === "trip" ? "bg-[#2fe583] text-[#06170d] font-bold" : "text-[#9aa0a6] bg-[#050605]"
                    )}
                  >
                    Trip JSON
                  </button>
                  <button
                    onClick={() => setActiveSchema("audit")}
                    className={cn(
                      "px-2.5 py-1 rounded-md transition",
                      activeSchema === "audit" ? "bg-[#2fe583] text-[#06170d] font-bold" : "text-[#9aa0a6] bg-[#050605]"
                    )}
                  >
                    Anomaly Audit
                  </button>
                </div>
              </div>

              {/* Code block */}
              <div className="bg-[#050605] border border-[#1e2022] rounded-[10px] p-4 text-[12.5px] font-mono leading-[1.7] text-[#8fe6ba] overflow-x-auto shadow-inner">
                {activeSchema === "trip" ? (
                  <pre className="whitespace-pre">
{`{
  `}<span className="text-[#2fe583]">&quot;trip_id&quot;</span>{`: `}<span className="text-white">&quot;TRP-88421&quot;</span>{`,
  `}<span className="text-[#2fe583]">&quot;vendor&quot;</span>{`: `}<span className="text-white">&quot;Vendor C&quot;</span>{`,
  `}<span className="text-[#2fe583]">&quot;route&quot;</span>{`: `}<span className="text-white">&quot;Whitefield – ORR&quot;</span>{`,
  `}<span className="text-[#2fe583]">&quot;occupancy&quot;</span>{`: `}<span className="text-[#2fe583]">0.41</span>{`,
  `}<span className="text-[#2fe583]">&quot;billed_km&quot;</span>{`: `}<span className="text-[#2fe583]">38.2</span>{`,
  `}<span className="text-[#2fe583]">&quot;anomaly_flag&quot;</span>{`: `}<span className="text-[#2fe583]">&quot;excess_km&quot;</span>{`
}`}
                  </pre>
                ) : (
                  <pre className="whitespace-pre">
{`{
  `}<span className="text-[#2fe583]">&quot;audit_case&quot;</span>{`: `}<span className="text-white">&quot;DISP-9921&quot;</span>{`,
  `}<span className="text-[#2fe583]">&quot;gps_odometer&quot;</span>{`: `}<span className="text-[#2fe583]">24.8</span>{`,
  `}<span className="text-[#2fe583]">&quot;invoice_billed&quot;</span>{`: `}<span className="text-[#fb7185]">38.2</span>{`,
  `}<span className="text-[#2fe583]">&quot;variance_loss&quot;</span>{`: `}<span className="text-[#fb7185]">&quot;₹696.80&quot;</span>{`,
  `}<span className="text-[#2fe583]">&quot;action&quot;</span>{`: `}<span className="text-[#2fe583]">&quot;auto_deduct_settlement&quot;</span>{`
}`}
                  </pre>
                )}
              </div>

              {/* Stack grid */}
              <div className="grid grid-cols-2 gap-3.5 mt-4">
                <div className="bg-[#050605] border border-[#1e2022] rounded-[10px] p-3 text-center">
                  <strong className="block text-[14px] text-[#2fe583] font-mono">Exports-based</strong>
                  <span className="text-[11px] text-[#6b7075]">No forced API access</span>
                </div>
                <div className="bg-[#050605] border border-[#1e2022] rounded-[10px] p-3 text-center">
                  <strong className="block text-[14px] text-[#2fe583] font-mono">Vendor-neutral</strong>
                  <span className="text-[11px] text-[#6b7075]">Works across contracts</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Comparison Matrix Table */}
        <div className="border border-[#1e2022] rounded-[22px] overflow-hidden mb-20 bg-[#0a0a0a]">
          <div className="grid grid-cols-1 md:grid-cols-12 bg-[#0c0d0d] p-4 sm:p-5 text-xs font-mono font-bold uppercase tracking-wider border-b border-[#1e2022]">
            <div className="md:col-span-3 text-[#6b7075]">Capability</div>
            <div className="md:col-span-4 text-[#9aa0a6]">Existing Mobility Stack (ETMS)</div>
            <div className="md:col-span-5 text-[#2fe583]">Velora Intelligence Layer</div>
          </div>

          <div className="divide-y divide-[#1e2022] text-xs sm:text-sm">
            {ETMS_COMPARISON.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 gap-2 md:gap-4 items-start hover:bg-[#0f1011] transition-colors"
              >
                <div className="md:col-span-3 font-semibold text-[#f5f6f7] font-mono text-xs">
                  {row.capability}
                </div>
                <div className="md:col-span-4 text-[#9aa0a6] leading-relaxed">
                  {row.etms}
                </div>
                <div className="md:col-span-5 text-[#f5f6f7] font-medium leading-relaxed flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#2fe583] shrink-0 mt-0.5" />
                  <span>{row.velora}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Three Tiers of Savings */}
        <div className="pt-8 border-t border-[#1e2022]">
          <div className="text-center max-w-[680px] mx-auto mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-[#6b7075] uppercase block mb-2">
              Value Realization
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#f5f6f7]">
              The Three Tiers of Enterprise Savings
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SAVINGS_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className="bg-[#0a0a0a] border border-[#1e2022] rounded-[18px] p-6 flex flex-col justify-between hover:border-[#2c2f31] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#6b7075]">
                      TIER 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[rgba(47,229,131,0.10)] border border-[rgba(47,229,131,0.30)] text-[#2fe583] uppercase">
                      {tier.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#f5f6f7] mb-1">
                    {tier.name}
                  </h4>
                  <div className="text-xs font-mono text-[#2fe583] mb-3">
                    {tier.tagline}
                  </div>
                  <p className="text-xs text-[#9aa0a6] leading-relaxed mb-6">
                    {tier.desc}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#050605] border border-[#1e2022] text-[11px] font-mono text-[#8fe6ba]">
                  <span className="text-[#6b7075] block text-[9px] uppercase">Example</span>
                  {tier.example}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
