"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { DiagnosticModal } from "@/components/form/DiagnosticModal";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-all">
        {/* Top subtle validation status bar */}
        <div className="bg-slate-900 text-slate-300 text-[11px] py-1.5 px-4 text-center border-b border-slate-800 flex items-center justify-center gap-2 font-mono">
          <StatusBadge status="VALIDATING" size="sm" />
          <span className="hidden sm:inline text-slate-400">|</span>
          <span className="truncate">Currently validating with enterprise mobility & transport teams</span>
          <button
            onClick={() => setDiagnosticOpen(true)}
            className="text-teal-400 hover:text-teal-300 underline underline-offset-2 ml-1 cursor-pointer font-sans"
          >
            Request Diagnostic &rarr;
          </button>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-wider font-mono shadow-xs group-hover:bg-teal-700 transition-colors">
                V
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-slate-900 uppercase leading-none font-mono">
                  VELORA
                </span>
                <span className="text-[10px] tracking-widest text-slate-500 uppercase font-mono mt-0.5">
                  MOBITECH
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-600">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-slate-950 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setDiagnosticOpen(true)}
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold tracking-wide transition shadow-xs cursor-pointer"
            >
              <span>Get a Mobility Diagnostic</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setDiagnosticOpen(true)}
              type="button"
              className="px-3 py-1.5 rounded-md bg-teal-700 text-white text-xs font-semibold"
            >
              Diagnostic
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs font-medium text-slate-700 hover:text-slate-950 py-1.5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setDiagnosticOpen(true);
                }}
                type="button"
                className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-teal-700 text-white text-xs font-semibold"
              >
                <span>Get a Mobility Diagnostic</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </header>

      <DiagnosticModal isOpen={diagnosticOpen} onClose={() => setDiagnosticOpen(false)} />
    </>
  );
}
