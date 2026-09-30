"use client";

import React from "react";
import { WHY_VELORA_PILLARS } from "@/lib/data";
import { Compass, CheckCircle2, ShieldCheck, TrendingUp, Cpu } from "lucide-react";

const PILLAR_ICONS = [Compass, CheckCircle2, ShieldCheck, TrendingUp, Cpu];

export function WhyVeloraSection() {
  return (
    <section id="why-velora" className="py-24 sm:py-32 bg-black border-b border-[#161717]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        
        {/* Head */}
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <div className="inline-flex items-center gap-2 border border-[#1e2022] bg-[#0a0a0a] px-4 py-2 rounded-full text-[12.5px] text-[#9aa0a6] font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2fe583] shadow-[0_0_8px_#2fe583]" />
            Foundation principles
          </div>
          <h2 className="text-[28px] sm:text-[38px] lg:text-[42px] font-bold tracking-tight text-[#f5f6f7] leading-[1.15]">
            Why Velora is built <span className="text-[#2fe583]">differently.</span>
          </h2>
          <p className="mt-4 text-[#9aa0a6] text-[16.5px] leading-relaxed">
            We are not a transport contractor bidding for vehicle routes, nor an ETMS vendor defending proprietary software locks. We are an independent intelligence advocate for your organization&apos;s mobility bottom line.
          </p>
        </div>

        {/* 5 Operational Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {WHY_VELORA_PILLARS.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-[18px] bg-[#0a0a0a] border border-[#1e2022] hover:border-[#2c2f31] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[rgba(47,229,131,0.10)] border border-[rgba(47,229,131,0.25)] text-[#2fe583] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#f5f6f7] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9aa0a6] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#161717] text-[10px] font-mono text-[#6b7075] uppercase">
                  Pillar 0{idx + 1} • Core Standard
                </div>
              </div>
            );
          })}

          {/* 6th Card: Enterprise Creed */}
          <div className="p-6 sm:p-7 rounded-[18px] bg-[#091510] border border-[rgba(47,229,131,0.35)] flex flex-col justify-between shadow-[0_0_30px_rgba(47,229,131,0.06)]">
            <div>
              <span className="text-[11px] font-mono text-[#2fe583] uppercase tracking-widest block mb-2 font-semibold">
                Our Enterprise Creed
              </span>
              <h3 className="text-base font-bold text-[#f5f6f7] mb-2">
                Decisions Over Dashboards
              </h3>
              <p className="text-xs text-[#9aa0a6] leading-relaxed">
                We believe enterprise transport teams don&apos;t need another complicated screen of charts. They need mathematically proven, operationally safe decisions they can take to their board and vendors.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-[rgba(47,229,131,0.2)] text-[10px] font-mono text-[#2fe583] uppercase font-semibold">
              Validation Before Scale
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
