"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight, ShieldCheck, Lock } from "lucide-react";
import { FORM_OPTIONS } from "@/lib/data";

interface DiagnosticFormProps {
  onSuccessClose?: () => void;
  isModal?: boolean;
}

export function DiagnosticForm({ onSuccessClose, isModal = false }: DiagnosticFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    employees: "",
    dailyTrips: "",
    vendorCount: "",
    etms: "",
    biggestChallenge: "",
    shareData: "yes",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refId, setRefId] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/diagnostic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (res.ok && json.success) {
        setSuccess(true);
        setRefId(json.referenceId || "VEL-INIT");
      } else {
        setError(json.error || "Failed to submit diagnostic request. Please verify fields.");
      }
    } catch (err: unknown) {
      setError("An unexpected network error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-[#0a0a0a] rounded-[22px] border border-[rgba(47,229,131,0.35)] p-8 sm:p-10 text-center shadow-[0_0_50px_rgba(47,229,131,0.08)]">
        <div className="w-14 h-14 bg-[rgba(47,229,131,0.10)] border border-[rgba(47,229,131,0.35)] text-[#2fe583] rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(47,229,131,0.2)]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="text-xs font-mono font-medium text-[#2fe583] uppercase tracking-wider mb-1">
          Submission Confirmed • Ref: {refId}
        </div>
        <h3 className="text-2xl font-bold text-[#f5f6f7] tracking-tight mb-2">
          Diagnostic Evaluation Initiated
        </h3>
        <p className="text-sm text-[#9aa0a6] max-w-lg mx-auto leading-relaxed mb-6">
          Thank you for submitting your enterprise mobility parameters. A member of the Velora operational analysis team will review your profile to prepare your preliminary Mobility Efficiency Diagnostic.
        </p>

        <div className="bg-[#050605] border border-[#1e2022] rounded-xl p-4 text-xs text-[#9aa0a6] max-w-md mx-auto text-left mb-6 space-y-1.5 font-mono">
          <div className="flex justify-between">
            <span className="text-[#6b7075]">Enterprise:</span>
            <span className="text-[#f5f6f7] font-semibold">{formData.company}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6b7075]">Contact:</span>
            <span className="text-[#f5f6f7] font-semibold">{formData.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6b7075]">Data Sharing:</span>
            <span className="text-[#2fe583] font-semibold uppercase">{formData.shareData}</span>
          </div>
        </div>

        <div className="flex justify-center gap-3">
          {onSuccessClose ? (
            <button
              onClick={onSuccessClose}
              type="button"
              className="btn-green-gradient px-6 py-2.5 rounded-full text-xs font-bold"
            >
              Done
            </button>
          ) : (
            <button
              onClick={() => setSuccess(false)}
              type="button"
              className="px-6 py-2.5 rounded-full border border-[#1e2022] hover:border-[#2fe583] text-[#f5f6f7] text-xs font-semibold transition-colors"
            >
              Submit Another Inquiry
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0a0a0a] rounded-[22px] border border-[#1e2022] p-7 sm:p-9 text-left relative overflow-hidden shadow-2xl"
    >
      {error && (
        <div className="mb-6 p-4 rounded-xl bg-[rgba(244,63,94,0.12)] border border-[rgba(244,63,94,0.3)] text-[#fb7185] text-xs flex items-start gap-2.5 font-mono">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <div>{error}</div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-4.5">
        {/* Field 1: Name */}
        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-semibold text-[#6b7075]" htmlFor="f-name">
            Name
          </label>
          <input
            id="f-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Sridhar Ramanathan"
            className="bg-[#050505] border border-[#1e2022] rounded-[10px] text-[#f5f6f7] p-3 text-[14px] outline-none focus:border-[#2fe583] transition-colors placeholder:text-[#3a3d40]"
          />
        </div>

        {/* Field 2: Email */}
        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-semibold text-[#6b7075]" htmlFor="f-email">
            Work email
          </label>
          <input
            id="f-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className="bg-[#050505] border border-[#1e2022] rounded-[10px] text-[#f5f6f7] p-3 text-[14px] outline-none focus:border-[#2fe583] transition-colors placeholder:text-[#3a3d40]"
          />
        </div>

        {/* Field 3: Company */}
        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-semibold text-[#6b7075]" htmlFor="f-company">
            Company
          </label>
          <input
            id="f-company"
            name="company"
            type="text"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Wipro Enterprises"
            className="bg-[#050505] border border-[#1e2022] rounded-[10px] text-[#f5f6f7] p-3 text-[14px] outline-none focus:border-[#2fe583] transition-colors placeholder:text-[#3a3d40]"
          />
        </div>

        {/* Field 4: Role */}
        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-semibold text-[#6b7075]" htmlFor="f-role">
            Role
          </label>
          <input
            id="f-role"
            name="role"
            type="text"
            required
            value={formData.role}
            onChange={handleChange}
            placeholder="e.g. Head of Transport"
            className="bg-[#050505] border border-[#1e2022] rounded-[10px] text-[#f5f6f7] p-3 text-[14px] outline-none focus:border-[#2fe583] transition-colors placeholder:text-[#3a3d40]"
          />
        </div>

        {/* Field 5: Approx Employees */}
        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-semibold text-[#6b7075]" htmlFor="f-employees">
            Approx. employees using transport
          </label>
          <input
            id="f-employees"
            name="employees"
            type="text"
            value={formData.employees}
            onChange={handleChange}
            placeholder="e.g. 1,200"
            className="bg-[#050505] border border-[#1e2022] rounded-[10px] text-[#f5f6f7] p-3 text-[14px] outline-none focus:border-[#2fe583] transition-colors placeholder:text-[#3a3d40]"
          />
        </div>

        {/* Field 6: Approx Daily Trips */}
        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-semibold text-[#6b7075]" htmlFor="f-trips">
            Approx. daily trips
          </label>
          <input
            id="f-trips"
            name="dailyTrips"
            type="text"
            value={formData.dailyTrips}
            onChange={handleChange}
            placeholder="e.g. 900"
            className="bg-[#050505] border border-[#1e2022] rounded-[10px] text-[#f5f6f7] p-3 text-[14px] outline-none focus:border-[#2fe583] transition-colors placeholder:text-[#3a3d40]"
          />
        </div>

        {/* Field 7: Number of Vendors */}
        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-semibold text-[#6b7075]" htmlFor="f-vendors">
            Number of vendors
          </label>
          <input
            id="f-vendors"
            name="vendorCount"
            type="text"
            value={formData.vendorCount}
            onChange={handleChange}
            placeholder="e.g. 3"
            className="bg-[#050505] border border-[#1e2022] rounded-[10px] text-[#f5f6f7] p-3 text-[14px] outline-none focus:border-[#2fe583] transition-colors placeholder:text-[#3a3d40]"
          />
        </div>

        {/* Field 8: Current ETMS */}
        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-semibold text-[#6b7075]" htmlFor="f-etms">
            Current ETMS
          </label>
          <input
            id="f-etms"
            name="etms"
            type="text"
            value={formData.etms}
            onChange={handleChange}
            placeholder="e.g. MoveInSync"
            className="bg-[#050505] border border-[#1e2022] rounded-[10px] text-[#f5f6f7] p-3 text-[14px] outline-none focus:border-[#2fe583] transition-colors placeholder:text-[#3a3d40]"
          />
        </div>

        {/* Field 9: Biggest Challenge (Full Width) */}
        <div className="sm:col-span-2 flex flex-col gap-2">
          <label className="text-[12px] font-semibold text-[#6b7075]" htmlFor="f-challenge">
            Biggest mobility challenge
          </label>
          <textarea
            id="f-challenge"
            name="biggestChallenge"
            rows={3}
            value={formData.biggestChallenge}
            onChange={handleChange}
            placeholder="e.g. Unexplained invoice mileage inflation, high failure rates during night shifts..."
            className="bg-[#050505] border border-[#1e2022] rounded-[10px] text-[#f5f6f7] p-3 text-[14px] outline-none focus:border-[#2fe583] transition-colors placeholder:text-[#3a3d40] resize-y min-h-[78px]"
          />
        </div>

        {/* Field 10: Radio Row (Full Width) */}
        <div className="sm:col-span-2 flex flex-col gap-2">
          <label className="text-[12px] font-semibold text-[#6b7075]">
            Interested in sharing anonymized historical data?
          </label>
          <div className="flex gap-5 pt-1">
            <label className="flex items-center gap-2 text-[13.5px] text-[#f5f6f7] cursor-pointer">
              <input
                type="radio"
                name="shareData"
                value="yes"
                checked={formData.shareData === "yes"}
                onChange={handleChange}
                className="accent-[#2fe583]"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center gap-2 text-[13.5px] text-[#f5f6f7] cursor-pointer">
              <input
                type="radio"
                name="shareData"
                value="no"
                checked={formData.shareData === "no"}
                onChange={handleChange}
                className="accent-[#2fe583]"
              />
              <span>No</span>
            </label>
          </div>
        </div>
      </div>

      {/* Submit Row from Reference */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-7 pt-6 border-t border-[#161717]">
        <span className="text-[12px] text-[#6b7075] max-w-[32ch] leading-relaxed">
          We read every response ourselves. No automated follow-up, no spam.
        </span>

        <button
          type="submit"
          disabled={loading}
          className="btn-green-gradient inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-[13.5px] font-bold shadow-lg disabled:opacity-50 cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-[#06170d]" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Request diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
