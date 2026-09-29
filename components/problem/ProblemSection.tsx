"use client";

import React, { useState } from "react";
import { 
  Database, 
  HelpCircle, 
  CheckCircle, 
  Layers, 
  ArrowRight,
  TrendingDown,
  Clock,
  Coins,
  ShieldAlert,
  Sliders
} from "lucide-react";
import { FRAGMENTED_SOURCES, FIVE_KEY_QUESTIONS } from "@/lib/data";
import { cn } from "@/lib/utils";

const QUESTION_ICONS = [
  TrendingDown, // Route efficiency
  Coins,        // Vendor true cost
  Layers,       // Unused capacity
  ShieldAlert,  // Cost of failure
  Sliders,      // Measurable savings
];

export function ProblemSection() {
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  return (
    <section id="problem" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-mono font-bold tracking-widest text-slate-500 uppercase mb-3">
            02 • The Data Fragmentation Dilemma
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-4">
            Your mobility data knows the answer. It&apos;s just scattered everywhere.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Enterprise transport operations generate millions of telemetry points, trip logs, and invoices each month. But because this data lives in disconnected operational silos, transport leaders are left answering critical economic questions with guesswork.
          </p>
        </div>

        {/* 8 Fragmented Silos Matrix */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
              Disconnected Systems of Record
            </span>
            <span className="text-xs text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded font-mono">
              Unreconciled Silos
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {FRAGMENTED_SOURCES.map((source, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/90 hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-slate-900 font-mono">
                    {source.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase px-1.5 py-0.5 rounded bg-white border border-slate-200">
                    {source.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {source.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The 5 Critical Questions Stakeholders Cannot Answer */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-10">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-1 rounded-md mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
              Critical Operational Questions
            </div>
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
              Five questions every transport and finance head asks — and struggles to answer
            </h3>
          </div>

          {/* Interactive Question Selector & Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Question List */}
            <div className="lg:col-span-6 space-y-2">
              {FIVE_KEY_QUESTIONS.map((item, idx) => {
                const Icon = QUESTION_ICONS[idx] || HelpCircle;
                const isCurrent = selectedQuestion === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedQuestion(idx)}
                    type="button"
                    className={cn(
                      "w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5",
                      isCurrent
                        ? "bg-white border-slate-900 shadow-sm"
                        : "bg-white/60 border-slate-200 hover:bg-white text-slate-700"
                    )}
                  >
                    <div
                      className={cn(
                        "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border text-xs font-mono font-bold",
                        isCurrent
                          ? "bg-slate-900 text-white border-slate-900"
                          : "bg-slate-100 text-slate-500 border-slate-200"
                      )}
                    >
                      {item.number}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className={cn("text-sm font-semibold", isCurrent ? "text-slate-950" : "text-slate-700")}>
                          {item.question}
                        </h4>
                        <ArrowRight
                          className={cn(
                            "w-4 h-4 transition-transform",
                            isCurrent ? "text-teal-600 translate-x-1" : "text-slate-300"
                          )}
                        />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Question Detail Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs relative">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    DIAGNOSTIC FOCUS • {FIVE_KEY_QUESTIONS[selectedQuestion].number}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-4">
                  {FIVE_KEY_QUESTIONS[selectedQuestion].question}
                </h4>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                      Today&apos;s Blindspot
                    </span>
                    <p className="text-slate-700">
                      {FIVE_KEY_QUESTIONS[selectedQuestion].context}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200/80 text-teal-900">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-teal-700 font-semibold block mb-1">
                      Velora Intelligence Approach
                    </span>
                    <p className="text-teal-950">
                      {FIVE_KEY_QUESTIONS[selectedQuestion].insight}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Independent Audit Engine</span>
                  <a href="#decision-engine" className="text-teal-700 hover:text-teal-800 font-medium font-sans">
                    View recommendation evidence &rarr;
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
