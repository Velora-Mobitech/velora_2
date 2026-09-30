"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { DiagnosticModal } from "@/components/form/DiagnosticModal";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);

  return (
    <>
      <div className="sticky top-4 z-50 px-4 sm:px-6">
        <nav className="max-w-[920px] mx-auto flex items-center justify-between bg-[#060606]/85 backdrop-blur-xl border border-[#1e2022] rounded-full p-2 pl-4 sm:pl-5 shadow-2xl transition-all hover:border-[#2a2a2a]">
          
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-black border border-[#2a2a2a] group-hover:border-[#2fe583]/50 flex items-center justify-center font-extrabold text-sm text-[#2fe583] transition-colors shadow-xs">
              V
            </div>
            <span className="font-bold text-[15.5px] text-[#f5f6f7] tracking-tight group-hover:text-white transition-colors">
              Velora
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7">
            <a href="#how-it-works" className="text-[13.5px] text-[#9aa0a6] hover:text-[#f5f6f7] transition-colors font-medium">
              How it works
            </a>
            <a href="#intelligence" className="text-[13.5px] text-[#9aa0a6] hover:text-[#f5f6f7] transition-colors font-medium">
              Intelligence
            </a>
            <a href="#failure-economics" className="text-[13.5px] text-[#9aa0a6] hover:text-[#f5f6f7] transition-colors font-medium">
              Failure economics
            </a>
            <a href="#decision-engine" className="text-[13.5px] text-[#9aa0a6] hover:text-[#f5f6f7] transition-colors font-medium">
              Decision engine
            </a>
            <a href="#future-vision" className="text-[13.5px] text-[#9aa0a6] hover:text-[#f5f6f7] transition-colors font-medium">
              Future vision
            </a>
          </div>

          {/* Primary CTA */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDiagnosticOpen(true)}
              type="button"
              className="btn-green-gradient inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13.5px] font-bold tracking-tight shadow-md cursor-pointer"
            >
              <span>Get a Diagnostic</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded-full text-[#9aa0a6] hover:text-[#f5f6f7] hover:bg-[#161717] transition"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 max-w-[920px] mx-auto bg-[#0a0a0a] border border-[#1e2022] rounded-2xl p-5 shadow-2xl space-y-3">
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-[#9aa0a6] hover:text-[#f5f6f7] py-1"
            >
              How it works
            </a>
            <a
              href="#intelligence"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-[#9aa0a6] hover:text-[#f5f6f7] py-1"
            >
              Intelligence
            </a>
            <a
              href="#failure-economics"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-[#9aa0a6] hover:text-[#f5f6f7] py-1"
            >
              Failure economics
            </a>
            <a
              href="#decision-engine"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-[#9aa0a6] hover:text-[#f5f6f7] py-1"
            >
              Decision engine
            </a>
            <a
              href="#future-vision"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-[#9aa0a6] hover:text-[#f5f6f7] py-1"
            >
              Future vision
            </a>
            <div className="pt-2 border-t border-[#161717]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setDiagnosticOpen(true);
                }}
                type="button"
                className="w-full btn-green-gradient py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <span>Get a Mobility Diagnostic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>

      <DiagnosticModal isOpen={diagnosticOpen} onClose={() => setDiagnosticOpen(false)} />
    </>
  );
}
