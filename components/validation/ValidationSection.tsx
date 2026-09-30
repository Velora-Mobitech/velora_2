"use client";

import React, { useState } from "react";
import { DiagnosticForm } from "@/components/form/DiagnosticForm";
import { DiagnosticModal } from "@/components/form/DiagnosticModal";
import { ArrowRight } from "lucide-react";

export function ValidationSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* SECTION: GET A MOBILITY EFFICIENCY DIAGNOSTIC */}
      <section id="validation" className="py-24 sm:py-32 bg-black border-b border-[#161717] relative">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          
          {/* Head */}
          <div className="text-center max-w-[680px] mx-auto mb-14">
            <div className="inline-flex items-center gap-2 border border-[#1e2022] bg-[#0a0a0a] px-4 py-2 rounded-full text-[12.5px] text-[#9aa0a6] font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2fe583] shadow-[0_0_8px_#2fe583]" />
              Get started
            </div>
            <h2 className="text-[28px] sm:text-[38px] lg:text-[42px] font-bold tracking-tight text-[#f5f6f7] leading-[1.15]">
              Get a Mobility <span className="text-[#2fe583]">Efficiency Diagnostic</span>
            </h2>
            <p className="mt-4 text-[#9aa0a6] text-[16.5px] leading-relaxed">
              Tell us about your mobility setup — a member of the Velora team will follow up directly to scope your diagnostic.
            </p>
          </div>

          {/* Centered Calc-Card Form from Reference */}
          <div className="max-w-[800px] mx-auto mb-6">
            <DiagnosticForm />
          </div>

          {/* Link Row from Reference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[800px] mx-auto">
            <a
              href="mailto:partners@velora.com?subject=Design%20Partner%20interest"
              className="bg-[#0a0a0a] border border-[#1e2022] hover:border-[#2c2f31] rounded-[14px] p-5 flex justify-between items-center transition-colors group"
            >
              <span className="text-[14px] font-semibold text-[#f5f6f7] group-hover:text-white transition-colors">
                Become a Design Partner
              </span>
              <span className="text-[#2fe583] font-bold text-base transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>

            <a
              href="mailto:hello@velora.com?subject=What%20we're%20missing"
              className="bg-[#0a0a0a] border border-[#1e2022] hover:border-[#2c2f31] rounded-[14px] p-5 flex justify-between items-center transition-colors group"
            >
              <span className="text-[14px] font-semibold text-[#f5f6f7] group-hover:text-white transition-colors">
                Tell us what we&apos;re missing
              </span>
              <span className="text-[#2fe583] font-bold text-base transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
          </div>

        </div>
      </section>

      {/* FINAL BAND FROM REFERENCE */}
      <section className="py-20 sm:py-28 bg-black border-b border-[#161717]">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="max-w-[1180px] mx-auto bg-[#0a0a0a] border border-[#1e2022] rounded-[32px] p-12 sm:p-16 text-center relative overflow-hidden shadow-2xl">
            {/* Radial top glow */}
            <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(47,229,131,0.12),transparent_70%)] pointer-events-none" />

            <h2 className="text-[24px] sm:text-[34px] font-bold tracking-tight text-[#f5f6f7] mb-8 relative z-10">
              Ready to see where your mobility budget is leaking?
            </h2>

            <button
              onClick={() => setModalOpen(true)}
              type="button"
              className="btn-green-gradient inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-[14px] font-bold shadow-xl relative z-10 cursor-pointer"
            >
              <span>Get a Mobility Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <DiagnosticModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
