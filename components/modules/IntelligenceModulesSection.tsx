"use client";

import React, { useState } from "react";
import { 
  Coins, 
  BarChart3, 
  Building2, 
  AlertOctagon, 
  Leaf, 
  ArrowUpRight, 
  ArrowDownRight, 
  AlertTriangle,
  FileCheck2,
  TrendingUp,
  Info
} from "lucide-react";
import { INTELLIGENCE_MODULES } from "@/lib/data";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { cn } from "@/lib/utils";

const MODULE_ICONS = {
  cost: Coins,
  utilization: BarChart3,
  vendor: Building2,
  failure: AlertOctagon,
  sustainability: Leaf,
};

export function IntelligenceModulesSection() {
  const [activeTab, setActiveTab] = useState(INTELLIGENCE_MODULES[0].id);

  const currentModule =
    INTELLIGENCE_MODULES.find((m) => m.id === activeTab) || INTELLIGENCE_MODULES[0];

  return (
    <section id="intelligence" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase">
              05 • Analytical Architecture
            </span>
            <StatusBadge status="CURRENT" size="sm" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Five specialized intelligence engines for enterprise mobility.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Velora decomposes the complex operational, contractual, and physical realities of corporate transport into five dedicated analytical modules.
          </p>
        </div>

        {/* Module Tab Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-slate-100">
          {INTELLIGENCE_MODULES.map((mod) => {
            const Icon = MODULE_ICONS[mod.id as keyof typeof MODULE_ICONS] || Coins;
            const isActive = activeTab === mod.id;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveTab(mod.id)}
                type="button"
                className={cn(
                  "flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer border",
                  isActive
                    ? "bg-slate-950 text-white border-slate-950 shadow-xs"
                    : "bg-slate-50 text-slate-700 border-slate-200/80 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-teal-400" : "text-slate-400")} />
                <span>{mod.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Module Showcase Card */}
        <div className="bg-slate-50/70 border border-slate-200 rounded-3xl p-6 sm:p-10">
          
          {/* Header of Active Module */}
          <div className="flex flex-wrap items-start justify-between gap-4 mb-8 pb-6 border-b border-slate-200/80">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  {currentModule.name}
                </h3>
                <StatusBadge status="CURRENT" size="sm" />
              </div>
              <p className="text-sm font-medium text-teal-800">
                {currentModule.tagline}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mt-2 leading-relaxed">
                {currentModule.description}
              </p>
            </div>
          </div>

          {/* 4 Primary Analytical KPIs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {currentModule.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-2xs"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    {metric.label}
                  </span>
                  {metric.change && (
                    <span
                      className={cn(
                        "text-[10px] font-mono px-1.5 py-0.5 rounded flex items-center gap-0.5",
                        metric.isPositive
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-slate-100 text-slate-600 border border-slate-200"
                      )}
                    >
                      {metric.change}
                    </span>
                  )}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-mono mb-1">
                  {metric.value}
                </div>
                <div className="text-[11px] text-slate-500">
                  {metric.subtext}
                </div>
              </div>
            ))}
          </div>

          {/* Deep Breakdown Grid & Sample Enterprise Insight */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* 4 Capability Breakdown Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentModule.breakdown.map((item, bIdx) => (
                <div
                  key={bIdx}
                  className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-2xs"
                >
                  <h4 className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Right: Sample Empirical Insight */}
            <div className="lg:col-span-4 bg-slate-950 text-white rounded-2xl p-6 border border-slate-800 shadow-md">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">
                  Sample Diagnostic Finding
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono mb-4">
                &ldquo;{currentModule.sampleInsight}&rdquo;
              </p>
              <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 font-mono flex items-center justify-between">
                <span>Multi-Source Reconciled</span>
                <span className="text-teal-400">Auditable Proof</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
