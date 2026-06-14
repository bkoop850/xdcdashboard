/* ───────────────────────────────────────────────────────────────────
   Value Chain Model
   ─────────────────────────────────────────────────────────────────── 
   Impact Drivers  →  Effectiveness Impact  →  Quality Impact  →  Benefits for Philips
   ─────────────────────────────────────────────────────────────────── */

export type KpiStatus = 'on-track' | 'at-risk' | 'off-track';

export interface Metric {
  label: string;
  value: string;
  before?: string;
  description?: string;
  status: KpiStatus;
}

/* ── Layer 1: Benefits for Philips ── */

export interface BusinessOutcome {
  id: string;
  name: string;
  value: string;
  change: string;
  direction: 'positive' | 'negative' | 'neutral';
  description: string;
}

export const businessOutcomes: BusinessOutcome[] = [
  {
    id: 'customer-experience',
    name: 'Customer Health',
    value: '82/100',
    change: '↑ +6 pts YoY',
    direction: 'positive',
    description:
      'Composite of how well XDC-enabled products support safe, effective, and satisfying use in real clinical settings.',
  },
  {
    id: 'design-velocity',
    name: 'Design Velocity',
    value: '3.2×',
    change: '↑ +0.4× YoY',
    direction: 'positive',
    description:
      'How quickly teams ship design-quality experiences compared to teams without XDC capabilities.',
  },
  {
    id: 'risk-reduction',
    name: 'Risk Reduction',
    value: '23%',
    change: '↑ +4% YoY',
    direction: 'positive',
    description:
      'Share of usability and compliance risks identified and resolved before release through XDC capabilities.',
  },
];


/* ── Layer 2b: Quality Impact (product-level proof) ── */

export interface QualityImpact {
  id: string;
  capability: string;
  contributesTo: string[];
  metrics: Metric[];
}

export const qualityImpact: QualityImpact[] = [
  {
    id: 'usability-quality',
    capability: 'usability',
    contributesTo: ['customer-experience', 'risk-reduction'],
    metrics: [
      { label: 'System Usability Scale (SUS)', value: '79/100', before: '68/100', status: 'on-track' },
      { label: 'Adverse Event Reduction', value: '-31%', before: '-14%', status: 'on-track' },
    ],
  },
  {
    id: 'ux-telemetry-quality',
    capability: 'ux-telemetry',
    contributesTo: ['customer-experience', 'risk-reduction'],
    metrics: [
      { label: 'Use Related Complaints Reduction', value: '-12%', before: '-3%', status: 'on-track' },
      { label: 'Product Adoption Increase', value: '+8%', before: '+2%', status: 'on-track' },
    ],
  },
  {
    id: 'dls-quality',
    capability: 'dls',
    contributesTo: ['design-velocity', 'risk-reduction'],
    metrics: [
      { label: 'UX Code Quality', value: '93%', before: '71%', description: '% of front-end code that follows DLS/UX patterns', status: 'on-track' },
      { label: 'Modality Brand Strength', value: '87%', before: '62%', status: 'on-track' },
    ],
  },
];

/* ── Layer 2: Effectiveness Impact ── */

export interface CapabilityEffectiveness {
  id: string;
  name: string;
  question: string;
  metrics: Metric[];
  contributesTo: string[]; // business outcome IDs
}

export const capabilityEffectiveness: CapabilityEffectiveness[] = [
  {
    id: 'usability',
    name: 'Usability',
    question: 'Is usability practice creating measurable contribution?',
    contributesTo: ['usability-quality', 'risk-reduction'],
    metrics: [
      { label: 'Usability Documentation Efficiency Gain', value: '+34%', before: '+12%', status: 'on-track' },
      { label: 'Late Stage Usability Findings', value: '7', before: '19', status: 'at-risk' },
    ],
  },
  {
    id: 'ux-telemetry',
    name: 'UX Telemetry',
    question: 'Is telemetry creating measurable contribution?',
    contributesTo: ['ux-telemetry-quality', 'design-velocity'],
    metrics: [
      { label: 'Design Decision Speed', value: '+40%', before: '+11%', status: 'on-track' },
      { label: 'Product Development Rework Reduction', value: '18%', before: '6%', status: 'at-risk' },
    ],
  },
  {
    id: 'dls',
    name: 'Design Language System',
    question: 'Is DLS creating measurable contribution?',
    contributesTo: ['dls-quality', 'design-velocity'],
    metrics: [
      { label: 'Reuse Savings (dev hours/sprint)', value: '120h', before: '45h', status: 'on-track' },
      { label: 'Consistency Improvement', value: '+34%', before: '+9%', status: 'on-track' },
    ],
  },
];

/* ── Layer 3: Impact Drivers ── */

export interface CapabilityDriver {
  id: string;
  capability: string; // links to CapabilityEffectiveness.id
  name: string;
  explanation: string;
  metrics: Metric[];
}

export const capabilityDrivers: CapabilityDriver[] = [
  // Usability drivers
  {
    id: 'usability-capabilities',
    capability: 'usability',
    name: 'Capabilities',
    explanation: 'Team readiness and staffing for usability practice.',
    metrics: [
      { label: 'Usability Community Trained', value: '146', status: 'on-track' },
      { label: 'Projects Sufficiently Staffed', value: '21/30', status: 'at-risk' },
    ],
  },
  {
    id: 'usability-compliance',
    capability: 'usability',
    name: 'Compliance',
    explanation: 'How well teams meet usability standards and escalation processes.',
    metrics: [
      { label: 'Usability Guardrail Pass Rate', value: '83%', status: 'on-track' },
      { label: 'Initiated PS&Q Escalations', value: '12', status: 'on-track' },
    ],
  },
  // UX Telemetry drivers
  {
    id: 'telemetry-adoption',
    capability: 'ux-telemetry',
    name: 'Adoption',
    explanation: 'How broadly UX telemetry is adopted across products and teams.',
    metrics: [
      { label: 'Products Instrumented', value: '12/22', status: 'at-risk' },
      { label: 'Project Team Readiness', value: '18/30', status: 'at-risk' },
    ],
  },
  {
    id: 'telemetry-active-users',
    capability: 'ux-telemetry',
    name: 'Active Users',
    explanation: 'How actively teams consume and act on telemetry data.',
    metrics: [
      { label: 'Teams Using Dashboards', value: '14/30', status: 'at-risk' },
      { label: 'Decisions Backed by UX Telemetry', value: '62%', status: 'at-risk' },
    ],
  },
  // DLS drivers
  {
    id: 'dls-adoption',
    capability: 'dls',
    name: 'Component Adoption',
    explanation: 'How broadly the design system is adopted across teams.',
    metrics: [
      { label: 'Component Adoption Rate', value: '52%', status: 'at-risk' },
      { label: 'Teams on System', value: '18/30', status: 'at-risk' },
    ],
  },
  {
    id: 'dls-usage',
    capability: 'dls',
    name: 'Tool Usage',
    explanation: 'How actively teams use design system tooling.',
    metrics: [
      { label: 'Figma Library Subscribers', value: '312', status: 'on-track' },
      { label: 'Token Usage in Codebase', value: '78%', status: 'on-track' },
    ],
  },
];
