"use client";

import React, { useState } from "react";
import { AlertOctagon, ArrowRight, ShieldCheck, DollarSign, Clock, Users, Sliders } from "lucide-react";
import { cn } from "@/lib/utils";

export function FailureEconomicsSection() {
  const [dailyTrips, setDailyTrips] = useState(800);
  const [failureRate, setFailureRate] = useState(4.5); // %
  const [spotMultiplier, setSpotMultiplier] = useState(2.6); // 2.6x normal cab rate

  // Formula calculations
  const monthlyTrips = dailyTrips * 24;
  const failedTripsMonthly = Math.round((monthlyTrips * failureRate) / 100);
  const baseTripCost = 340; // ₹
  const spotTripCost = Math.round(baseTripCost * spotMultiplier);
  const spotExcessMonthly = failedTripsMonthly * (spotTripCost - baseTripCost);
  const escalationHoursMonthly = Math.round(failedTripsMonthly * 0.35); // ~20 mins intervention per breakdown
  const annualExcessLakhs = ((spotExcessMonthly * 12) / 100000).toFixed(1);

  return (
    <section id="failure-economics" className="py-24 sm:py-32 bg-black border-b border-[#161717]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        
        {/* Head */}
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-[#1e2022] bg-[#0a0a0a] px-4 py-2 rounded-full text-[12.5px] text-[#9aa0a6] font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2fe583] shadow-[0_0_8px_#2fe583]" />
            Failure economics
          </div>
          <h2 className="text-[28px] sm:text-[38px] lg:text-[42px] font-bold tracking-tight text-[#f5f6f7] leading-[1.15]">
            A failed trip costs more than the <br />
            <span className="text-[#2fe583]">replacement ride.</span>
          </h2>
          <p className="mt-4 text-[#9aa0a6] text-[16.5px] leading-relaxed">
            Most procurement teams evaluate vendors solely on baseline contractual rates. Velora quantifies the true compound financial drain when scheduled trips fail.
          </p>
        </div>

        {/* Core Formula Box */}
        <div className="bg-[#091510] border border-[rgba(47,229,131,0.35)] rounded-[22px] p-6 sm:p-8 mb-12 shadow-[0_0_40px_rgba(47,229,131,0.06)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.06em] text-[#2fe583] block mb-1">
              Velora Principle
            </span>
            <div className="text-lg sm:text-xl font-bold font-mono text-[#f5f6f7]">
              Effective Cost = Contract Tariff + Compound Failure Burden
            </div>
            <p className="text-xs text-[#9aa0a6] mt-1 max-w-xl">
              A ₹320 cab that fails 7% of the time consistently costs more than a ₹360 cab with 99.5% shift arrival reliability.
            </p>
          </div>

          <div className="shrink-0 bg-[#050605] border border-[#1e2022] rounded-xl px-5 py-3 text-center">
            <span className="text-[10px] font-mono text-[#6b7075] uppercase block">Benchmark</span>
            <span className="text-sm font-bold font-mono text-[#2fe583]">+₹48 – ₹92 / trip gap</span>
          </div>
        </div>

        {/* Interactive Failure Calculator */}
        <div className="bg-[#0a0a0a] border border-[#1e2022] rounded-[22px] p-6 sm:p-8 mb-16">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#161717]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2fe583] flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5 text-[#2fe583]" />
              Interactive Enterprise Failure Burden Simulator
            </span>
            <span className="text-xs text-[#9aa0a6] font-mono">Live Recalculation</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-xs font-mono text-[#9aa0a6] mb-2">
                Daily Trips ({dailyTrips})
              </label>
              <input
                type="range"
                min="200"
                max="3000"
                step="50"
                value={dailyTrips}
                onChange={(e) => setDailyTrips(Number(e.target.value))}
                className="w-full accent-[#2fe583] bg-[#1e2022] rounded h-1.5 cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#9aa0a6] mb-2">
                Vendor Failure / No-Show Rate ({failureRate}%)
              </label>
              <input
                type="range"
                min="1.0"
                max="10.0"
                step="0.5"
                value={failureRate}
                onChange={(e) => setFailureRate(Number(e.target.value))}
                className="w-full accent-[#2fe583] bg-[#1e2022] rounded h-1.5 cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-[#9aa0a6] mb-2">
                Emergency Spot Ride Surcharge ({spotMultiplier}x)
              </label>
              <input
                type="range"
                min="1.5"
                max="4.0"
                step="0.1"
                value={spotMultiplier}
                onChange={(e) => setSpotMultiplier(Number(e.target.value))}
                className="w-full accent-[#2fe583] bg-[#1e2022] rounded h-1.5 cursor-pointer"
              />
            </div>
          </div>

          {/* Results Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-[#050605] border border-[#1e2022] rounded-xl p-4">
              <span className="text-[10px] font-mono uppercase text-[#6b7075] block">Failed Trips / Month</span>
              <span className="text-2xl font-bold font-mono text-[#f5f6f7]">{failedTripsMonthly}</span>
              <span className="text-[11px] text-[#9aa0a6] block mt-0.5">Unfulfilled bookings</span>
            </div>

            <div className="bg-[#050605] border border-[#1e2022] rounded-xl p-4">
              <span className="text-[10px] font-mono uppercase text-[#6b7075] block">Spot Cab Premium</span>
              <span className="text-2xl font-bold font-mono text-[#fb7185]">₹{spotTripCost - baseTripCost}</span>
              <span className="text-[11px] text-[#9aa0a6] block mt-0.5">Surge above contract</span>
            </div>

            <div className="bg-[#050605] border border-[#1e2022] rounded-xl p-4">
              <span className="text-[10px] font-mono uppercase text-[#6b7075] block">Intervention Hours</span>
              <span className="text-2xl font-bold font-mono text-[#f5f6f7]">{escalationHoursMonthly} hrs</span>
              <span className="text-[11px] text-[#9aa0a6] block mt-0.5">Transport team overhead</span>
            </div>

            <div className="bg-[#091510] border border-[rgba(47,229,131,0.35)] rounded-xl p-4 shadow-sm">
              <span className="text-[10px] font-mono uppercase text-[#2fe583] block">Annual Surcharge Leakage</span>
              <span className="text-2xl font-bold font-mono text-[#2fe583]">₹{annualExcessLakhs}L</span>
              <span className="text-[11px] text-[#8fe6ba] block mt-0.5">Avoidable direct loss</span>
            </div>
          </div>
        </div>

        {/* Split: Hard Monetary Cost vs Non-Monetized Risk */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Hard Monetary Cost */}
          <div className="bg-[#0a0a0a] border border-[#1e2022] rounded-[18px] p-6 sm:p-7">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#161717]">
              <div>
                <span className="text-[11px] font-mono uppercase text-[#fb7185] font-bold block">
                  Audited Ledger Loss
                </span>
                <h3 className="text-lg font-bold text-[#f5f6f7]">Hard Monetary Cost</h3>
              </div>
              <span className="text-[10.5px] font-mono bg-[rgba(244,63,94,0.12)] text-[#fb7185] border border-[rgba(244,63,94,0.3)] px-2 py-0.5 rounded">
                Direct Financial Impact
              </span>
            </div>

            <ul className="space-y-3 text-xs text-[#9aa0a6] leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fb7185] mt-1.5 shrink-0" />
                <div>
                  <strong className="text-[#f5f6f7] block">Emergency Spot Replacement Cabs (2.5x Tariff)</strong>
                  Emergency app-hailing rides booked at surge rates when rostered drivers fail to report.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fb7185] mt-1.5 shrink-0" />
                <div>
                  <strong className="text-[#f5f6f7] block">SLA Penalty Reconciliation Disputes</strong>
                  Administrative time required to dispute, prove, and deduct contractual penalties in vendor settlements.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#fb7185] mt-1.5 shrink-0" />
                <div>
                  <strong className="text-[#f5f6f7] block">Guaranteed Minimum Idle Vehicle Billing</strong>
                  Fixed monthly retainer payments billed for vehicles that remain parked with zero utilization.
                </div>
              </li>
            </ul>
          </div>

          {/* Non-Monetized Risk */}
          <div className="bg-[#0a0a0a] border border-[#1e2022] rounded-[18px] p-6 sm:p-7">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#161717]">
              <div>
                <span className="text-[11px] font-mono uppercase text-[#2fe583] font-bold block">
                  Operational Integrity
                </span>
                <h3 className="text-lg font-bold text-[#f5f6f7]">Non-Monetized Risk</h3>
              </div>
              <span className="text-[10.5px] font-mono bg-[rgba(47,229,131,0.10)] text-[#2fe583] border border-[rgba(47,229,131,0.3)] px-2 py-0.5 rounded">
                Disciplined Analysis
              </span>
            </div>

            <ul className="space-y-3 text-xs text-[#9aa0a6] leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2fe583] mt-1.5 shrink-0" />
                <div>
                  <strong className="text-[#f5f6f7] block">Shift Arrival Friction & Production Delays</strong>
                  Engineering or manufacturing handoffs stalled when late vehicles hold up incoming shifts.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2fe583] mt-1.5 shrink-0" />
                <div>
                  <strong className="text-[#f5f6f7] block">Transport Desk Escalation Overhead</strong>
                  Hundreds of hours spent by transport coordinators answering urgent driver calls and manually reassigning routes.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2fe583] mt-1.5 shrink-0" />
                <div>
                  <strong className="text-[#f5f6f7] block">Female Employee Safety Compliance</strong>
                  Late night breakdowns that trigger mandatory security escort protocols and zero-tolerance safety exposure.
                </div>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
