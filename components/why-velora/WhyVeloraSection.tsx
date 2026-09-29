"use client";

import React from "react";
import { WHY_VELORA_PILLARS } from "@/lib/data";
import { ShieldCheck, Compass, CheckCircle2, TrendingUp, Cpu } from "lucide-react";

const PILLAR_ICONS = [Compass, CheckCircle2, ShieldCheck, TrendingUp, Cpu];

export function WhyVeloraSection() {
  return (
    <section id="why-velora" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-3">
            12 • Foundation Principles
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Why Velora is built differently.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We are not a transport contractor bidding for vehicle routes, nor an ETMS vendor defending proprietary software locks. We are an independent intelligence advocate for your organization&apos;s mobility bottom line.
          </p>
        </div>

        {/* 5 Operational Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_VELORA_PILLARS.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-slate-300 transition-all hover:bg-white hover:shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-teal-800 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200/60 text-[10px] font-mono text-slate-400 uppercase">
                  Pillar 0{idx + 1} • Core Standard
                </div>
              </div>
            );
          })}

          {/* 6th Card: Enterprise Creed */}
          <div className="p-6 rounded-2xl bg-slate-950 text-white border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest block mb-2">
                Our Enterprise Commitment
              </span>
              <h3 className="text-base font-bold text-white mb-2">
                Decisions Over Dashboards
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                We believe enterprise transport teams don&apos;t need another complicated screen of charts. They need mathematically proven, operationally safe decisions they can take to their board and vendors.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-800 text-[10px] font-mono text-teal-400 uppercase">
              Validation Before Scale
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
