"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-20 pb-10 bg-black text-[#f5f6f7] border-t border-[#161717]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        
        {/* Foot Grid from Reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-11 border-b border-[#161717]">
          
          {/* Brand */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-black border border-[#2a2a2a] flex items-center justify-center font-extrabold text-sm text-[#2fe583] font-mono">
                V
              </div>
              <span className="font-bold text-[16px] text-[#f5f6f7] tracking-tight">
                Velora
              </span>
            </div>

            <p className="text-[13.5px] text-[#9aa0a6] max-w-[32ch] leading-relaxed">
              Independent mobility intelligence for enterprise transport, procurement and finance teams.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-[34px] h-[34px] border border-[#1e2022] hover:border-[#2fe583] hover:text-[#2fe583] rounded-[9px] flex items-center justify-center text-[#9aa0a6] transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                  <path d="M10 21v-7a3 3 0 0 1 6 0v7M10 21v-6" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-[34px] h-[34px] border border-[#1e2022] hover:border-[#2fe583] hover:text-[#2fe583] rounded-[9px] flex items-center justify-center text-[#9aa0a6] transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M22 4s-.7 2-2 3.2C21.8 16 15 21 8.5 17.5 12 18 15 15 15 15c-3.5.5-5-2-5-2 1.5.2 2.5-.5 2.5-.5C9 12 8 9 8 9c2.5 2.5 6 3 6 3-.5-3 1-5 1-5 .3 1.5 1.5 2.5 1.5 2.5C17.5 7 18 5 18 5c1 0 2.5 1 2.5 1Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Col */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-[13px] font-bold text-[#f5f6f7]">Product</h5>
            <ul className="space-y-2 text-[13.5px] text-[#9aa0a6]">
              <li><a href="#how-it-works" className="hover:text-[#f5f6f7] transition-colors">How it works</a></li>
              <li><a href="#intelligence" className="hover:text-[#f5f6f7] transition-colors">Intelligence</a></li>
              <li><a href="#failure-economics" className="hover:text-[#f5f6f7] transition-colors">Failure economics</a></li>
              <li><a href="#decision-engine" className="hover:text-[#f5f6f7] transition-colors">Decision engine</a></li>
              <li><a href="#future-vision" className="hover:text-[#f5f6f7] transition-colors">Future vision</a></li>
            </ul>
          </div>

          {/* Company Col */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-[13px] font-bold text-[#f5f6f7]">Company</h5>
            <ul className="space-y-2 text-[13.5px] text-[#9aa0a6]">
              <li><a href="mailto:hello@velora.com" className="hover:text-[#f5f6f7] transition-colors">Contact</a></li>
              <li><a href="mailto:partners@velora.com" className="hover:text-[#f5f6f7] transition-colors">Design Partner</a></li>
              <li><a href="#validation" className="hover:text-[#f5f6f7] transition-colors">Validation</a></li>
            </ul>
          </div>

          {/* Legal Col */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-[13px] font-bold text-[#f5f6f7]">Governance</h5>
            <ul className="space-y-2 text-[13.5px] text-[#9aa0a6]">
              <li><a href="#" className="hover:text-[#f5f6f7] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#f5f6f7] transition-colors">Data Confidentiality</a></li>
              <li><a href="#" className="hover:text-[#f5f6f7] transition-colors">Pre-Validation Standard</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] text-[#6b7075] font-mono">
          <div>
            &copy; 2026 Velora Mobitech. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="hover:text-[#f5f6f7] transition-colors flex items-center gap-1.5 cursor-pointer font-sans text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#2fe583]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
