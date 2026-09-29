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
    role: FORM_OPTIONS.roles[0],
    employees: FORM_OPTIONS.employeeBrackets[1],
    dailyTrips: FORM_OPTIONS.dailyTrips[1],
    vendorCount: FORM_OPTIONS.vendorCounts[1],
    etms: FORM_OPTIONS.etmsOptions[0],
    biggestChallenge: "",
    shareData: FORM_OPTIONS.dataSharing[0],
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
      <div className="bg-white rounded-2xl border border-teal-200 p-8 sm:p-10 text-center shadow-sm">
        <div className="w-14 h-14 bg-teal-50 border border-teal-200 text-teal-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="text-xs font-mono font-medium text-teal-700 uppercase tracking-wider mb-1">
          Submission Confirmed • Ref: {refId}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
          Diagnostic Evaluation Initiated
        </h3>
        <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed mb-6">
          Thank you for sharing your mobility footprint. A Velora operational analyst will review your profile to prepare a preliminary Mobility Efficiency Diagnostic assessment.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 max-w-md mx-auto text-left mb-6 space-y-1.5 font-mono">
          <div className="flex justify-between">
            <span className="text-slate-400">Enterprise:</span>
            <span className="text-slate-800 font-semibold">{formData.company}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Contact:</span>
            <span className="text-slate-800 font-semibold">{formData.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Data Sharing:</span>
            <span className="text-slate-800 font-semibold truncate max-w-[200px]">{formData.shareData}</span>
          </div>
        </div>

        <div className="flex justify-center gap-3">
          {onSuccessClose ? (
            <button
              onClick={onSuccessClose}
              type="button"
              className="px-6 py-2.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
            >
              Done
            </button>
          ) : (
            <button
              onClick={() => setSuccess(false)}
              type="button"
              className="px-6 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
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
      className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 relative overflow-hidden text-left"
    >
      <div className="mb-8 border-b border-slate-100 pb-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-mono font-semibold tracking-wider uppercase text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
            Enterprise Qualification
          </span>
          <span className="text-xs text-slate-400 font-mono">Confidential Review</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          Request a Mobility Efficiency Diagnostic
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
          Provide your transport parameters below to evaluate cost leakage, capacity optimization, and vendor SLA performance.
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
          <div>{error}</div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Field 1: Full Name */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="name">
            Full Name <span className="text-teal-600">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Sridhar Ramanathan"
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 text-slate-900 placeholder:text-slate-400 transition"
          />
        </div>

        {/* Field 2: Work Email */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="email">
            Work Email <span className="text-teal-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 text-slate-900 placeholder:text-slate-400 transition"
          />
        </div>

        {/* Field 3: Company */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="company">
            Company / Enterprise Name <span className="text-teal-600">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. Wipro Enterprises"
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 text-slate-900 placeholder:text-slate-400 transition"
          />
        </div>

        {/* Field 4: Role */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="role">
            Primary Role / Function <span className="text-teal-600">*</span>
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 text-slate-900 bg-white transition"
          >
            {FORM_OPTIONS.roles.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* Field 5: Approx Employees Using Transport */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="employees">
            Approx. Employees Using Transport
          </label>
          <select
            id="employees"
            name="employees"
            value={formData.employees}
            onChange={handleChange}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 text-slate-900 bg-white transition"
          >
            {FORM_OPTIONS.employeeBrackets.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Field 6: Approx Daily Trips */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="dailyTrips">
            Approx. Daily Trips
          </label>
          <select
            id="dailyTrips"
            name="dailyTrips"
            value={formData.dailyTrips}
            onChange={handleChange}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 text-slate-900 bg-white transition"
          >
            {FORM_OPTIONS.dailyTrips.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Field 7: Number of Vendors */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="vendorCount">
            Number of Active Vendors (FSPs)
          </label>
          <select
            id="vendorCount"
            name="vendorCount"
            value={formData.vendorCount}
            onChange={handleChange}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 text-slate-900 bg-white transition"
          >
            {FORM_OPTIONS.vendorCounts.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Field 8: Current ETMS */}
        <div>
          <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="etms">
            Current ETMS / Operational Tool
          </label>
          <select
            id="etms"
            name="etms"
            value={formData.etms}
            onChange={handleChange}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 text-slate-900 bg-white transition"
          >
            {FORM_OPTIONS.etmsOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Field 9: Biggest Mobility Challenge */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="biggestChallenge">
            Biggest Mobility Challenge or Cost Concern
          </label>
          <textarea
            id="biggestChallenge"
            name="biggestChallenge"
            rows={3}
            value={formData.biggestChallenge}
            onChange={handleChange}
            placeholder="e.g. Unexplained invoice mileage inflation, high failure rates during night shifts, or excessive empty 26-seater runs..."
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 text-slate-900 placeholder:text-slate-400 transition"
          />
        </div>

        {/* Field 10: Willing to Share Anonymized Data */}
        <div className="sm:col-span-2">
          <label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="shareData">
            Willingness to Share Anonymized Historical Data for Diagnostic Evaluation?
          </label>
          <select
            id="shareData"
            name="shareData"
            value={formData.shareData}
            onChange={handleChange}
            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-teal-600 focus:ring-1 focus:ring-teal-600 text-slate-900 bg-white transition"
          >
            {FORM_OPTIONS.dataSharing.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <p className="text-[11px] text-slate-500 mt-1.5 flex items-center gap-1.5">
            <Lock className="w-3 h-3 text-slate-400" />
            Enterprise confidentiality strictly maintained under standard mutual non-disclosure agreement.
          </p>
        </div>
      </div>

      <div className="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="w-4 h-4 text-teal-600" />
          <span>Vendor-neutral, secure enterprise diagnostic</span>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-teal-700 hover:bg-teal-800 text-white text-xs font-semibold tracking-wide transition shadow-sm disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Analyzing Parameters...</span>
            </>
          ) : (
            <>
              <span>Get a Mobility Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
