import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProblemSection } from "@/components/problem/ProblemSection";
import { CoreInsightSection } from "@/components/insight/CoreInsightSection";
import { IntelligenceModulesSection } from "@/components/modules/IntelligenceModulesSection";
import { FailureEconomicsSection } from "@/components/failure-economics/FailureEconomicsSection";
import { DecisionEngineSection } from "@/components/decision-engine/DecisionEngineSection";
import { ExplainabilitySection } from "@/components/explainability/ExplainabilitySection";
import { EtmsComparisonSection } from "@/components/comparison/EtmsComparisonSection";
import { FutureVisionSection } from "@/components/future/FutureVisionSection";
import { WhyVeloraSection } from "@/components/why-velora/WhyVeloraSection";
import { ValidationSection } from "@/components/validation/ValidationSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      {/* 01. Minimal Sticky Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* 02. Hero Section: Know Where Your Mobility Is Losing Money */}
        <HeroSection />

        {/* 03. Problem: Scattered Data Silos & 5 Key Questions */}
        <ProblemSection />

        {/* 04 & 05. Core Insight & 4-Step Pipeline: Connect → Diagnose → Decide → Execute */}
        <CoreInsightSection />

        {/* 06. Five Specialized Intelligence Modules */}
        <IntelligenceModulesSection />

        {/* 07. Failure Economics: A failed trip costs more than the replacement ride */}
        <FailureEconomicsSection />

        {/* 08. Decision Engine: Concrete Recommendation Cards */}
        <DecisionEngineSection />

        {/* 09. Algorithmic Integrity & Explainability Matrix */}
        <ExplainabilitySection />

        {/* 10 & 11. ETMS Positioning & Three Tiers of Savings */}
        <EtmsComparisonSection />

        {/* 12. Future Vision: Strategic Progression to Liquidity */}
        <FutureVisionSection />

        {/* 13. Why Velora: Foundation Principles */}
        <WhyVeloraSection />

        {/* 14, 15 & 16. Validation, Design Partner Invitation & Diagnostic Form */}
        <ValidationSection />
      </main>

      {/* 17. Footer: Enterprise Governance & Security */}
      <Footer />
    </div>
  );
}
