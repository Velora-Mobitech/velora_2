"use client";

import React, { useState } from "react";
import { AlertOctagon, ArrowRight, ShieldCheck, DollarSign, Clock, Users, FileWarning, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FailureEconomicsSection() {
  const [activeScenario, setActiveScenario] = useState<"standard" | "breakdown">("breakdown");

  return (
    <section id="failure-economics" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow & Title */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-3">
            06 • Economic Differentiation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            A failed trip costs more than the replacement ride.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Most procurement evaluations look solely at the base contractual rate per trip. Velora introduces the <strong>Total Cost of Failure</strong> framework — quantifying the true compound financial drain when vendors cancel or break down.
          </p>
        </div>

        {/* Core Formula Banner */}
        <div className="bg-slate-950 text-white rounded-2xl p-6 sm:p-8 mb-12 border border-slate-800 font-mono shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs text-teal-400 uppercase tracking-widest block mb-1">
              Velora Core Formula
            </span>
            <div className="text-lg sm:text-xl font-bold tracking-tight text-white">
              Effective Vendor Cost = Base Contract Rate + Failure Economic Burden
            </div>
            <p className="text-xs text-slate-400 font-sans mt-1">
              A ₹320 cab that fails 7% of the time often costs more than a ₹360 cab with 99.5% reliability.
            </p>
          </div>
          <div className="shrink-0 px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-center">
            <span className="text-[10px] text-slate-400 block uppercase">Vendor Comparison</span>
            <span className="text-sm font-bold text-teal-400">Total Economic Exposure</span>
          </div>
        </div>

        {/* Division: Hard Monetary Cost vs Non-Monetized Risk */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Column 1: HARD MONETARY COST */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono font-bold text-rose-700 uppercase tracking-wider block">
                  Audited Direct Loss
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  Hard Monetary Cost
                </h3>
              </div>
              <span className="text-xs font-mono bg-rose-50 text-rose-700 border border-rose-200 px-2.5 py-1 rounded-md">
                Direct Financial Impact
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1">
                  <span>Emergency Spot Replacement Surcharges</span>
                  <span className="font-mono text-rose-700">2.5x – 3x Tariff</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Spot-hailing cabs (Uber/Ola/local fleets) at surge rates when rostered drivers fail to arrive at campus or pickup nodes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1">
                  <span>Contractual SLA Penalty Deductions</span>
                  <span className="font-mono text-slate-700">₹200 – ₹500 / incident</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Time-consuming dispute reconciliation overhead where vendor deductions must be audited, argued, and recovered in billing cycles.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1">
                  <span>Guaranteed Minimum Fleet Surcharges</span>
                  <span className="font-mono text-slate-700">Billed Even When Idle</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Contracts with fixed monthly guarantees for leased tempo travellers regardless of actual vehicle readiness.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 font-mono">
              Auditable on general ledgers, bank transactions & ERP vendor settlements.
            </div>
          </div>

          {/* Column 2: NON-MONETIZED OPERATIONAL RISK */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">
                  Operational Friction
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  Non-Monetized Risk
                </h3>
              </div>
              <span className="text-xs font-mono bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-md">
                Disciplined Analysis
              </span>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1">
                  <span>Shift Worker Waiting Time & Delay</span>
                  <span className="font-mono text-slate-700">Productivity Friction</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Production lines and 24/7 service desk handoffs stalled when late vehicles delay incoming engineering and customer operations shifts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1">
                  <span>Transport Desk Intervention Overhead</span>
                  <span className="font-mono text-slate-700">140+ Hours / Month</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Transport supervisors forced to make panic phone calls to drivers and manual reassignments instead of optimizing operations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1">
                  <span>Female Employee Safety & Compliance Risk</span>
                  <span className="font-mono text-slate-700">Zero-Tolerance Mandate</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Breakdowns during night shifts trigger emergency escort protocols and severe safety exposure that cannot be resolved with cash.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-teal-800 font-mono bg-teal-50/50 p-2.5 rounded-lg border border-teal-100">
              <strong>Methodological Rigor:</strong> Velora does not arbitrarily fabricate rupee values for safety or reputation. We report hard monetary impact separately from operational risk.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
