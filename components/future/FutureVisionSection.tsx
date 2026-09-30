"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, ShieldCheck, Lock } from "lucide-react";
import { FUTURE_VISION_STEPS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FutureVisionSection() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <section id="future-vision" className="py-24 sm:py-32 bg-black border-b border-[#161717] relative overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        
        {/* Split Section from Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-20">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 border border-[#1e2022] bg-[#0a0a0a] px-4 py-2 rounded-full text-[12.5px] text-[#9aa0a6] font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2fe583] shadow-[0_0_8px_#2fe583]" />
              Coming next
            </div>

            <h2 className="text-[26px] sm:text-[34px] font-bold tracking-tight text-[#f5f6f7] leading-[1.3] mb-4">
              Velora won&apos;t just tell you what to change. <br />
              <span className="text-[#2fe583]">It will help you execute it.</span>
            </h2>

            <p className="text-[16px] text-[#9aa0a6] leading-relaxed mb-6">
              As the intelligence layer matures, Velora&apos;s long-term vision is to connect enterprises with a trusted network of compliant mobility capacity — enabling resilient, multi-provider transportation without forcing enterprises to rebuild their existing mobility stack.
            </p>

            <div className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.05em] uppercase text-[#2fe583] bg-[rgba(47,229,131,0.10)] border border-[rgba(47,229,131,0.35)] px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2fe583] animate-pulse" />
              Orchestration — not yet active
            </div>
          </div>

          {/* Right Network Graphic Card from Reference */}
          <div className="lg:col-span-6">
            <div className="bg-[#091510] border border-[rgba(47,229,131,0.35)] rounded-[22px] p-8 relative h-[360px] overflow-hidden shadow-[0_0_50px_rgba(47,229,131,0.08)]">
              
              {/* Radar waves animation */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[rgba(47,229,131,0.2)] animate-ping opacity-25 pointer-events-none" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-[rgba(47,229,131,0.15)] animate-pulse pointer-events-none" />

              {/* Connecting spokes */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#2fe583" strokeWidth="1.5" strokeDasharray="4 4" className="animate-signal" />
                <line x1="50%" y1="50%" x2="80%" y2="15%" stroke="#2fe583" strokeWidth="1.5" strokeDasharray="4 4" className="animate-signal" />
                <line x1="50%" y1="50%" x2="16%" y2="80%" stroke="#2fe583" strokeWidth="1.5" strokeDasharray="4 4" className="animate-signal" />
                <line x1="50%" y1="50%" x2="82%" y2="82%" stroke="#2fe583" strokeWidth="1.5" strokeDasharray="4 4" className="animate-signal" />
                <line x1="50%" y1="50%" x2="10%" y2="50%" stroke="#2fe583" strokeWidth="1.5" strokeDasharray="4 4" className="animate-signal" />
              </svg>

              {/* Nodes */}
              <div
                onMouseEnter={() => setHoveredNode("tempo")}
                onMouseLeave={() => setHoveredNode(null)}
                className="absolute top-[16%] left-[18%] w-[48px] h-[48px] rounded-full bg-[#0a0a0a] border border-[#2c3a33] hover:border-[#2fe583] flex items-center justify-center text-lg transition-transform hover:scale-110 cursor-pointer shadow-md"
              >
                🚐
              </div>

              <div
                onMouseEnter={() => setHoveredNode("spot-cab")}
                onMouseLeave={() => setHoveredNode(null)}
                className="absolute top-[12%] right-[16%] w-[48px] h-[48px] rounded-full bg-[#0a0a0a] border border-[#2c3a33] hover:border-[#2fe583] flex items-center justify-center text-lg transition-transform hover:scale-110 cursor-pointer shadow-md"
              >
                🚕
              </div>

              <div
                onMouseEnter={() => setHoveredNode("bus")}
                onMouseLeave={() => setHoveredNode(null)}
                className="absolute bottom-[16%] left-[14%] w-[48px] h-[48px] rounded-full bg-[#0a0a0a] border border-[#2c3a33] hover:border-[#2fe583] flex items-center justify-center text-lg transition-transform hover:scale-110 cursor-pointer shadow-md"
              >
                🚌
              </div>

              <div
                onMouseEnter={() => setHoveredNode("ev")}
                onMouseLeave={() => setHoveredNode(null)}
                className="absolute bottom-[14%] right-[18%] w-[48px] h-[48px] rounded-full bg-[#0a0a0a] border border-[#2c3a33] hover:border-[#2fe583] flex items-center justify-center text-lg transition-transform hover:scale-110 cursor-pointer shadow-md"
              >
                🚙
              </div>

              <div
                onMouseEnter={() => setHoveredNode("campus")}
                onMouseLeave={() => setHoveredNode(null)}
                className="absolute top-[50%] left-[6%] -translate-y-1/2 w-[48px] h-[48px] rounded-full bg-[#0a0a0a] border border-[#2c3a33] hover:border-[#2fe583] flex items-center justify-center text-lg transition-transform hover:scale-110 cursor-pointer shadow-md"
              >
                🏢
              </div>

              {/* Central VELORA Hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[84px] h-[84px] rounded-full bg-black border-[2px] border-[#2fe583] flex flex-col items-center justify-center text-[12px] font-mono font-extrabold text-[#2fe583] shadow-[0_0_35px_rgba(47,229,131,0.45)] text-center select-none z-10">
                <span>VELORA</span>
                <span className="text-[8px] text-[#8fe6ba] uppercase tracking-wider font-sans font-medium">Hub</span>
              </div>

              {/* Node Tooltip */}
              {hoveredNode && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/90 border border-[#2fe583]/50 text-[11px] text-[#2fe583] font-mono shadow-md">
                  {hoveredNode === "tempo" && "Verified 26-Seater Shuttle Pool"}
                  {hoveredNode === "spot-cab" && "On-Demand Backup Fleet Clearing"}
                  {hoveredNode === "bus" && "High-Capacity Corridor Shuttles"}
                  {hoveredNode === "ev" && "Zero-Emission EV Campus Network"}
                  {hoveredNode === "campus" && "Enterprise Demand Hub"}
                </div>
              )}
            </div>
          </div>

        </div>

        {/* 5-Stage Evolution Roadmap */}
        <div className="pt-8 border-t border-[#1e2022]">
          <div className="mb-8">
            <span className="text-xs font-mono text-[#6b7075] uppercase tracking-wider block mb-1">
              Phased Progression
            </span>
            <h3 className="text-lg font-bold text-[#f5f6f7]">
              From Diagnostic Intelligence to Network Clearing
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {FUTURE_VISION_STEPS.map((step) => (
              <div
                key={step.stage}
                className={cn(
                  "p-4 rounded-[14px] border transition-all text-xs",
                  step.status.includes("CURRENT")
                    ? "bg-[#091510] border-[rgba(47,229,131,0.35)] shadow-xs"
                    : "bg-[#0a0a0a] border-[#1e2022]"
                )}
              >
                <div className="flex items-center justify-between mb-2 font-mono">
                  <span className="text-[#6b7075] font-bold">0{step.stage}</span>
                  <span
                    className={cn(
                      "text-[9px] uppercase px-1.5 py-0.5 rounded font-mono",
                      step.status.includes("CURRENT")
                        ? "bg-[rgba(47,229,131,0.15)] text-[#2fe583]"
                        : "text-[#6b7075] bg-[#161717]"
                    )}
                  >
                    {step.status}
                  </span>
                </div>
                <div className="text-[#2fe583] font-mono text-[11px] mb-1">{step.question}</div>
                <div className="font-bold text-[#f5f6f7] mb-1">{step.name}</div>
                <p className="text-[11.5px] text-[#9aa0a6] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
