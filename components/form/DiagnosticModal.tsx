"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { DiagnosticForm } from "./DiagnosticForm";

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DiagnosticModal({ isOpen, onClose }: DiagnosticModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl my-8 z-10">
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#161717] hover:bg-[#2c2f31] text-[#9aa0a6] hover:text-white flex items-center justify-center transition border border-[#1e2022]"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="border border-[rgba(47,229,131,0.35)] rounded-[22px] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
          <DiagnosticForm isModal onSuccessClose={onClose} />
        </div>
      </div>
    </div>
  );
}
