export interface IntelligenceModule {
  id: string;
  name: string;
  tagline: string;
  description: string;
  metrics: { label: string; value: string; subtext: string; change?: string; isPositive?: boolean }[];
  breakdown: { title: string; desc: string }[];
  sampleInsight: string;
}

export interface Recommendation {
  id: string;
  badge: "ILLUSTRATIVE EXAMPLE";
  title: string;
  category: string;
  annualOpportunity: string;
  summary: string;
  evidence: string[];
  assumptions: string[];
  constraints: string[];
  expectedImpact: string;
}

export const NAV_LINKS = [
  { label: "Intelligence", href: "#intelligence" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Failure Economics", href: "#failure-economics" },
  { label: "Decisions", href: "#decision-engine" },
  { label: "ETMS Layer", href: "#etms-comparison" },
  { label: "Future Vision", href: "#future-vision" },
  { label: "Validation", href: "#validation" },
];

export const FRAGMENTED_SOURCES = [
  { name: "ETMS", desc: "Schedules, trip sheets & shift dispatches", tag: "Operational" },
  { name: "GPS Telemetry", desc: "Vehicle tracking & actual route paths", tag: "Spatial" },
  { name: "Vendors", desc: "FSPs, fleet owners & driver assignments", tag: "Supply" },
  { name: "Invoices", desc: "Monthly billings, toll slips & line items", tag: "Financial" },
  { name: "Contracts", desc: "SLA terms, rate cards & escalation clauses", tag: "Legal" },
  { name: "Rosters", desc: "Shift requirements & employee drop points", tag: "Workplace" },
  { name: "Finance / ERP", desc: "General ledger entries & cost center spend", tag: "Accounting" },
  { name: "HR Registry", desc: "Shift policies, gender safety & eligibility", tag: "Governance" },
];

export const FIVE_KEY_QUESTIONS = [
  {
    number: "01",
    question: "Which routes are inefficient?",
    context: "Most ETMS run static routing algorithms that leave overlapping corridors running half-empty.",
    insight: "Velora detects parallel corridors with <40% seat occupancy and identifies consolidation windows without breaching shift SLAs.",
  },
  {
    number: "02",
    question: "Which vendors are actually costing us more?",
    context: "A low base contract rate often conceals frequent breakdowns, late arrivals, and emergency spot-cab surcharges.",
    insight: "Velora computes the 'Effective Cost' per vendor — aggregating base contract fees with hidden failure penalties.",
  },
  {
    number: "03",
    question: "Where are we paying for unused capacity?",
    context: "Enterprises frequently pay fixed minimum vehicle guarantees for 26-seater tempo travellers running with 7 passengers.",
    insight: "Velora maps historical demand curves against contracted fleet size to expose dead kilometers and surplus vehicle slots.",
  },
  {
    number: "04",
    question: "What do failures really cost?",
    context: "When a driver doesn't show up, paying for an emergency replacement cab is only the tip of the iceberg.",
    insight: "Velora quantifies the compound economic burden: spot ride surcharges, shift worker waiting friction, and transport desk escalations.",
  },
  {
    number: "05",
    question: "Which changes would create measurable savings?",
    context: "Dashboards present historical averages, but transport managers cannot determine which contractual intervention to execute next.",
    insight: "Velora converts diagnostic data into ranked, constraint-aware operational interventions backed by auditable evidence.",
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "CONNECT",
    subtitle: "Bring fragmented mobility data together",
    status: "CURRENT",
    description: "Ingest and normalize data from ETMS, GPS traces, vendor billings, and rate cards without requiring systems replacement.",
    details: ["API & flat-file data ingest", "Multi-source time synchronization", "Rate contract digitisation", "Driver & route reconciliation"],
  },
  {
    step: "02",
    title: "DIAGNOSE",
    subtitle: "Find cost, utilization, vendor and reliability issues",
    status: "CURRENT",
    description: "Expose hidden financial leakage, billing anomalies, dead kilometers, and chronic vendor SLA breaches.",
    details: ["Seat-km cost variance analysis", "Toll & mileage invoice auditing", "Vendor reliability ranking", "Failure cost decomposition"],
  },
  {
    step: "03",
    title: "DECIDE",
    subtitle: "Recommend specific operational actions",
    status: "CURRENT",
    description: "Synthesize actionable recommendations with explicit evidence, assumptions, and operational constraints.",
    details: ["Route consolidation simulations", "Shift capacity reallocation", "Vendor contract enforcement", "Calculated annual opportunity"],
  },
  {
    step: "04",
    title: "EXECUTE",
    subtitle: "Orchestrate approved mobility supply",
    status: "FUTURE CAPABILITY",
    description: "Long-term vision to automatically dispatch approved, verified multi-provider supply to fill capacity gaps in real time.",
    details: ["Multi-provider network clearing", "Algorithmic capacity matching", "Automated contract settlement", "Dynamic fallback orchestration"],
  },
];

export const INTELLIGENCE_MODULES: IntelligenceModule[] = [
  {
    id: "cost",
    name: "Cost Intelligence",
    tagline: "Uncover hidden cost leakage and billing variances across contracts",
    description: "Reconcile vendor invoices against contractual rate cards, actual GPS traces, and toll slips to stop financial leakage.",
    metrics: [
      { label: "Cost per Trip", value: "₹342", subtext: "Average across all shifts", change: "-4.2%", isPositive: true },
      { label: "Cost per Seat-km", value: "₹3.85", subtext: "Benchmarked vs industry ₹3.40", change: "+13.2%", isPositive: false },
      { label: "Invoice Variance Flagged", value: "₹14.8L", subtext: "Discrepant billed km vs GPS traces", change: "Audit alert" },
      { label: "Toll Overbillings", value: "₹2.1L", subtext: "Fastag deductions mismatch", change: "High severity" },
    ],
    breakdown: [
      { title: "Spend by Vendor", desc: "Detailed breakdown of contractual base rates vs actual realized billing per vendor." },
      { title: "Spend by Route Corridor", desc: "Isolates high-expenditure corridors that consistently exceed allocated shift budgets." },
      { title: "Invoice Anomaly Engine", desc: "Automated checks for ghost trips, duplicate trip sheets, and inflated detour km." },
      { title: "Rate Card Adherence", desc: "Audits surge rates, night-shift allowances, and vehicle category charges." },
    ],
    sampleInsight: "Vendor C billed 14,200 km beyond recorded GPS odometer traces over the last quarter across Electronic City corridors.",
  },
  {
    id: "utilization",
    name: "Utilization Intelligence",
    tagline: "Maximize passenger occupancy and eliminate dead kilometers",
    description: "Continuous visibility into vehicle capacity, seat occupancy, and idle standing time across every shift and vehicle class.",
    metrics: [
      { label: "Avg Seat Occupancy", value: "48.2%", subtext: "Across peak and non-peak shifts", change: "Low capacity" },
      { label: "Dead Kilometers", value: "18.6%", subtext: "Billed travel without passengers", change: "+2.4%", isPositive: false },
      { label: "Underutilized Routes", value: "24 Routes", subtext: "Running with <35% passenger load", change: "Consolidation ready" },
      { label: "Surplus Vehicle Slots", value: "12 Cabs", subtext: "Contracted but unutilized", change: "₹4.8L/mo waste" },
    ],
    breakdown: [
      { title: "Occupancy Curve Mapping", desc: "Shift-by-shift analysis comparing seat capacity against rostered and boarded employees." },
      { title: "Route Utilization Heatmaps", desc: "Identifies underperforming bus and cab routes that share geographical proximity." },
      { title: "Dead-KM Audit", desc: "Monitors dead mileage between garage and first pickup to optimize staging locations." },
      { title: "Vehicle Category Optimization", desc: "Identifies where 26-seater buses should replace multiple 7-seater vehicles." },
    ],
    sampleInsight: "17 morning shifts along Outer Ring Road consistently run with fewer than 5 passengers in 12-seater vans.",
  },
  {
    id: "vendor",
    name: "Vendor Intelligence",
    tagline: "Benchmark true supplier performance and effective cost",
    description: "Look beyond contract rates to evaluate vendor reliability, punctuality, and SLA adherence on equal footing.",
    metrics: [
      { label: "Vendor SLA Compliance", value: "91.8%", subtext: "On-time arrival threshold", change: "-3.1%", isPositive: false },
      { label: "Effective Cost Gap", value: "₹48/trip", subtext: "Hidden costs above base contract", change: "Vendor A highest" },
      { label: "Trip Completion Rate", value: "97.4%", subtext: "Excluding reported breakdowns", change: "Within tolerance" },
      { label: "Replacement Cab Rate", value: "4.6%", subtext: "Trips requiring emergency spot ride", change: "High friction" },
    ],
    breakdown: [
      { title: "Effective Cost Index", desc: "Combines baseline contractual rates with failure penalty burdens and spot replacements." },
      { title: "Punctuality & Shift Arrival", desc: "Tracks on-time arrivals at campus gates within the critical 15-minute shift window." },
      { title: "Driver Allocation Stability", desc: "Monitors driver turnover and vehicle compliance to preserve safety standards." },
      { title: "Cross-Vendor Benchmarking", desc: "Direct head-to-head comparison of vendors servicing identical geographical clusters." },
    ],
    sampleInsight: "Vendor A's base rate is ₹25 cheaper per trip than Vendor B, but Vendor A's failure rate adds ₹72 in effective replacement costs.",
  },
  {
    id: "failure",
    name: "Failure Intelligence",
    tagline: "Track the total economic cost of vendor and vehicle breakdowns",
    description: "Quantify the direct financial burden and operational friction created when scheduled transport operations fail.",
    metrics: [
      { label: "Monthly No-Shows", value: "86 Trips", subtext: "Vendor unfulfilled bookings", change: "+12 vs last mo", isPositive: false },
      { label: "Avg Spot Surcharge", value: "₹520", subtext: "Premium paid for emergency rides", change: "2.6x normal" },
      { label: "Intervention Hours", value: "142 hrs", subtext: "Transport desk manual escalations", change: "Heavy overhead" },
      { label: "True Failure Burden", value: "₹8.9L", subtext: "Quarterly economic impact", change: "Avoidable loss" },
    ],
    breakdown: [
      { title: "Driver No-Show Analysis", desc: "Pinpoints high-risk shift windows and recurring driver drop-outs before shift start." },
      { title: "Breakdown & Towing Cascades", desc: "Exposes chronic mechanical unreliability in specific vehicle fleets." },
      { title: "Emergency Spot Ride Tracking", desc: "Logs ride-hailing spot expenses triggered by unfulfilled enterprise routes." },
      { title: "Transport Desk Escalation Overhead", desc: "Measures hours spent by enterprise dispatch teams handling emergency calls." },
    ],
    sampleInsight: "Over 68% of evening shift failures occur with a single supplier between 10:30 PM and 11:30 PM.",
  },
  {
    id: "sustainability",
    name: "Sustainability Intelligence",
    tagline: "Measure operational carbon emissions and EV fleet efficiency",
    description: "Actionable decarbonization analytics grounded in real route telemetry, vehicle fuel types, and passenger loadings.",
    metrics: [
      { label: "CO₂ per Passenger-km", value: "78g", subtext: "Average across fleet", change: "-8.5%", isPositive: true },
      { label: "EV Fleet Utilization", value: "22.4%", subtext: "Of total active operational hours", change: "+5.1%", isPositive: true },
      { label: "Avoidable Idle Emissions", value: "3.2 tons", subtext: "Engine idling at campus gates", change: "High waste" },
      { label: "EV Range Compatibility", value: "84 Routes", subtext: "Ready for zero-emission conversion", change: "Ready to deploy" },
    ],
    breakdown: [
      { title: "Carbon Footprint by Fuel Type", desc: "Rigorous accounting of diesel, CNG, and electric vehicle operational emissions." },
      { title: "EV Route Feasibility Engine", desc: "Identifies routes within realistic single-charge range and charging depot proximity." },
      { title: "Gate Idling Reduction", desc: "Tracks vehicle turnaround times at security gates to cut unnecessary idling." },
      { title: "Green Fleet Benchmarking", desc: "Assists sustainability and ESG reporting with auditable, trip-by-trip carbon telemetry." },
    ],
    sampleInsight: "Converting 28 low-mileage night shuttle routes to EVs would eliminate 41 tons of CO₂ annually with zero midday charging requirements.",
  },
];

export const RECOMMENDATIONS: Recommendation[] = [
  {
    id: "rec-1",
    badge: "ILLUSTRATIVE EXAMPLE",
    title: "Consolidate 17 low-occupancy routes along Outer Ring Road",
    category: "Route Optimization",
    annualOpportunity: "₹31.4L",
    summary: "Merge overlapping 12-seater tempo routes operating at sub-35% occupancy into optimized 26-seater bus routes during the 08:30 shift.",
    evidence: [
      "17 identified routes exhibit average passenger occupancy of 32.4% over 90 days.",
      "Geographic route corridor overlap exceeds 78% within a 1.2 km corridor buffer.",
      "Sufficient spare capacity verified in contracted 26-seater bus tier.",
      "Employee drop timestamps indicate zero shift arrival time penalties.",
    ],
    assumptions: [
      "Assumes employee home clusters remain stable over next 6 months.",
      "Assumes 26-seater vehicle contract rate remains at ₹52/km baseline.",
    ],
    constraints: [
      "Maximum employee detour time strictly constrained to <12 minutes.",
      "Female employee drop safety guidelines fully respected with dedicated security escort compliance.",
      "Campus gate entry clearance buffer maintained at 15 minutes before shift start.",
    ],
    expectedImpact: "Direct elimination of 11 leased vehicles, yielding ₹2.62L in monthly recurring savings (₹31.4L annualized) while maintaining on-time arrival rate above 98%.",
  },
  {
    id: "rec-2",
    badge: "ILLUSTRATIVE EXAMPLE",
    title: "Reallocate late-night shift capacity from Vendor A to Vendor B",
    category: "Vendor Allocation",
    annualOpportunity: "₹9.6L",
    summary: "Vendor A exhibits a 9.2% failure rate between 23:00 and 01:00, forcing expensive emergency spot cab bookings. Shift 40 daily late-night runs to Vendor B.",
    evidence: [
      "Vendor A recorded 74 late-night trip cancellations and no-shows over the preceding quarter.",
      "Vendor B maintains a 99.1% on-time fulfillment rate during identical shift hours.",
      "Emergency spot cab surge reimbursements averaged ₹880/trip compared to ₹340 contract rate.",
    ],
    assumptions: [
      "Vendor B has 40 additional drivers verified with active background checks ready for night shifts.",
    ],
    constraints: [
      "Vendor B allocation must remain under 45% of total enterprise volume to prevent single-supplier dependency.",
      "Mandatory telematics integration required before driver deployment.",
    ],
    expectedImpact: "Eliminates ₹80,000/month in emergency spot-ride surcharges, saving ₹9.6L annually and reducing transport desk night escalations by 84%.",
  },
  {
    id: "rec-3",
    badge: "ILLUSTRATIVE EXAMPLE",
    title: "Audit and deduct Vendor C invoice discrepancies",
    category: "Invoice Audit",
    annualOpportunity: "₹6.8L",
    summary: "Automated cross-referencing between GPS telemetry logs and billed monthly invoices reveals systematic duplicate trip claims and inflated detour mileage.",
    evidence: [
      "43 trips billed on dates with zero matching GPS ignition or security gate RFID logs.",
      "Consistent 14.2% mileage inflation billed on Whitefield–Bellandur corridor vs actual recorded route tracks.",
      "Incorrect vehicle category billing (billed as Innova, dispatched as Dzire).",
    ],
    assumptions: [
      "RFID gate logs and GPS telematics provider timestamps are synchronized and accurate.",
    ],
    constraints: [
      "Contractual dispute notice must be formally served within 30 days of invoice receipt.",
    ],
    expectedImpact: "Immediate recovery of ₹6.8L in discrepant billing credits across the upcoming settlement cycle, establishing precedent for strict rate-card compliance.",
  },
];

export const ETMS_COMPARISON = [
  {
    capability: "Primary Mission",
    etms: "Daily operational dispatch, driver tracking, and employee roster management",
    velora: "Independent intelligence, cross-system auditing, economic optimization, and decisioning",
  },
  {
    capability: "System Stance",
    etms: "Operational system of record (single vendor ecosystem)",
    velora: "Vendor-neutral analytical layer sitting above all systems, vendors & contracts",
  },
  {
    capability: "Economic Benchmarking",
    etms: "Reports contract rates and invoiced sums without deep cross-supplier benchmarking",
    velora: "Computes true 'Effective Cost' incorporating failure overheads and capacity waste",
  },
  {
    capability: "Anomaly Detection",
    etms: "Basic approval workflows based on vendor-submitted trip sheets",
    velora: "Multi-point audit: GPS traces vs RFID gates vs contract rate cards vs invoiced lines",
  },
  {
    capability: "Failure Economics",
    etms: "Records trip cancellations as operational statistics",
    velora: "Quantifies the compound monetary and operational burden of failure events",
  },
  {
    capability: "Decision Support",
    etms: "Static dashboards that show historical averages",
    velora: "Ranked, explainable, constraint-checked recommendations ready for executive sign-off",
  },
];

export const SAVINGS_TIERS = [
  {
    name: "IDENTIFIABLE SAVINGS",
    tagline: "Mathematical Opportunity",
    desc: "The total theoretical savings revealed by raw algorithmic analysis of routes, idle capacity, and billing variances.",
    badge: "Algorithmic Potential",
    example: "Mathematical identification of ₹45L in unoptimized routes.",
  },
  {
    name: "IMPLEMENTABLE SAVINGS",
    tagline: "Operationally Viable",
    desc: "The realistic subset of savings that can be executed after factoring in union contracts, shift policies, and safety constraints.",
    badge: "Operationally Grounded",
    example: "₹31.4L actionable after female drop safety buffers and max detour times.",
  },
  {
    name: "REALIZED SAVINGS",
    tagline: "Bottom-Line Impact",
    desc: "The actual audited cost reduction and efficiency gains verified in financial statements after operational deployment.",
    badge: "Audited Ledger Value",
    example: "Direct bankable balance sheet savings tracked month-over-month.",
  },
];

export const FUTURE_VISION_STEPS = [
  {
    stage: "01",
    name: "Intelligence",
    status: "CURRENT",
    question: "What happened?",
    desc: "Harmonize data, audit invoices, and expose operational inefficiencies across all existing mobility providers.",
  },
  {
    stage: "02",
    name: "Benchmark",
    status: "CURRENT",
    question: "What should it cost?",
    desc: "Establish true corridor and vehicle-level cost baselines based on normalized cross-market empirical data.",
  },
  {
    stage: "03",
    name: "Risk & Reliability",
    status: "VALIDATING",
    question: "Where is failure likely?",
    desc: "Predict supplier reliability bottlenecks, route breakdown patterns, and shift delay vulnerabilities before they occur.",
  },
  {
    stage: "04",
    name: "Orchestration",
    status: "FUTURE CAPABILITY",
    question: "What should we do?",
    desc: "Algorithmic decision dispatch — dynamically shifting allocations to pre-vetted operators with full policy compliance.",
  },
  {
    stage: "05",
    name: "Liquidity Network",
    status: "FUTURE VISION",
    question: "Which supply fulfills it?",
    desc: "Open multi-provider mobility clearing layer connecting enterprise demand directly with verified institutional fleet supply.",
  },
];

export const WHY_VELORA_PILLARS = [
  {
    title: "Vendor-Neutral",
    desc: "We do not operate fleets or sell proprietary vehicles. Our only allegiance is to your enterprise balance sheet and operational efficiency.",
  },
  {
    title: "Evidence-Driven",
    desc: "Every finding is rooted in synchronized multi-source telemetry: GPS traces, RFID access logs, rate cards, and financial statements.",
  },
  {
    title: "Explainable",
    desc: "No black-box algorithms. Every recommendation details the exact evidence, assumptions, operational constraints, and expected monetary return.",
  },
  {
    title: "Economics-First",
    desc: "We prioritize hard monetary leakage, invoice reconciliations, and capacity optimization over vanity operational metrics.",
  },
  {
    title: "Operationally Grounded",
    desc: "We understand enterprise mobility realities: shift handoffs, gender safety compliance, escort policies, and driver retention constraints.",
  },
];

export const FORM_OPTIONS = {
  roles: [
    "Head of Transport / Employee Mobility",
    "Facilities / Workplace Operations Director",
    "Procurement / Strategic Sourcing Lead",
    "Finance / FP&A Director",
    "HR / People Operations Leader",
    "Corporate Security & Safety Officer",
    "Fleet Operator / Mobility Service Provider",
    "Other Enterprise Stakeholder",
  ],
  employeeBrackets: [
    "Under 500 employees",
    "500 – 2,000 employees",
    "2,000 – 5,000 employees",
    "5,000 – 15,000 employees",
    "15,000+ employees",
  ],
  dailyTrips: [
    "Fewer than 200 trips / day",
    "200 – 1,000 trips / day",
    "1,000 – 3,000 trips / day",
    "3,000+ trips / day",
  ],
  vendorCounts: [
    "1 – 2 vendors",
    "3 – 5 vendors",
    "6 – 10 vendors",
    "More than 10 vendors",
  ],
  etmsOptions: [
    "MoveInSync",
    "Routematic",
    "WhistleDrive",
    "In-house proprietary tool",
    "Manual spreadsheets & spreadsheets + GPS",
    "Other / Multiple systems",
  ],
  dataSharing: [
    "Yes — Ready to evaluate anonymized historical data for diagnostic",
    "Maybe — Subject to review and standard mutual NDA",
    "No — Prefer exploratory discussion and methodology demo first",
  ],
};
