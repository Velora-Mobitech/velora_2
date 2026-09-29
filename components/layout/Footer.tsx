"use client";

import React from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/data";
import { ShieldCheck, Lock, ArrowUp } from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-sm tracking-wider font-mono">
                V
              </div>
              <span className="text-lg font-bold tracking-tight text-white uppercase font-mono">
                VELORA MOBITECH
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              A vendor-neutral intelligence and orchestration layer for enterprise mobility. Turning messy transport, vendor and financial data into trustworthy, economically useful decisions.
            </p>

            <div className="pt-2">
              <StatusBadge status="VALIDATING" size="sm" />
              <span className="text-xs text-slate-400 block mt-2 font-mono">
                Currently validating with enterprise mobility teams.
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs text-slate-400">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-teal-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Governance & Claim Discipline */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
              Governance & Integrity
            </span>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 leading-relaxed font-mono space-y-2">
              <div className="flex items-center gap-2 text-teal-400">
                <ShieldCheck className="w-4 h-4" />
                <span className="font-semibold">Pre-Validation Standard</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Velora does not fabricate logos, testimonials, or guaranteed savings. All synthetic optimization numbers are marked as Illustrative Examples.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Velora Mobitech. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Lock className="w-3.5 h-3.5 text-teal-500" />
              Enterprise Data Confidentiality
            </span>
            <button
              onClick={scrollToTop}
              type="button"
              className="hover:text-white transition flex items-center gap-1 cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
