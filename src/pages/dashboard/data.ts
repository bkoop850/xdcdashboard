export type KpiStatus = 'on-track' | 'at-risk' | 'off-track';

export interface Kpi {
  name: string;
  status: KpiStatus;
  currentLabel: string;
  currentValue: string;
  targetLabel: string;
  targetValue: string;
}

export interface DimensionDetailSection {
  title: string;
  stats: { label: string; value: string }[];
}

export interface DimensionData {
  title: string;
  kpis: Kpi[];
  detail?: DimensionDetailSection[];
}

export interface ImpactBuildupContributor {
  dimension: string;
  weight: string;
  rationale: string;
}

export interface ImpactBuildup {
  outcome: string;
  description: string;
  formula: string;
  contributors: ImpactBuildupContributor[];
  rollup: string;
}

export interface ImpactScore {
  label: string;
  value: string;
  change: string;
  direction: 'positive' | 'negative' | 'neutral';
  buildup?: ImpactBuildup;
}

export interface LevelData {
  id: string;
  label: string;
  appTitle?: string;
  impactScores: ImpactScore[];
  dimensions: DimensionData[];
}

export interface BusinessLink {
  name: string;
  url: string;
}

export interface BusinessCluster {
  name: string;
  url: string;
  subBusinesses: BusinessLink[];
}

export const businessClusters: BusinessCluster[] = [
  {
    name: 'Precision Diagnosis',
    url: 'https://share.philips.com/sites/Intranet_Precision_Diagnosis',
    subBusinesses: [
      { name: 'Computed Tomography', url: 'https://share.philips.com/sites/Intranet_Precision_Diagnosis/SitePages/Computed-Tomography.aspx' },
      { name: 'Diagnostic X-Ray', url: 'https://share.philips.com/sites/Intranet_Precision_Diagnosis/SitePages/Diagnostic-X-Ray.aspx' },
      { name: 'Magnetic Resonance', url: 'https://share.philips.com/sites/Intranet_Precision_Diagnosis/SitePages/Magnetic-Resonance.aspx' },
      { name: 'Ultrasound', url: 'https://share.philips.com/sites/Intranet_Precision_Diagnosis/SitePages/Ultrasound.aspx' },
    ],
  },
  {
    name: 'Image Guided Therapy',
    url: 'https://share.philips.com/sites/Intranet_Image_Guided_Therapy',
    subBusinesses: [
      { name: 'IGT Systems', url: 'https://share.philips.com/sites/Intranet_Image_Guided_Therapy/SitePages/IGT-Systems.aspx' },
      { name: 'IGT Devices', url: 'https://share.philips.com/sites/Intranet_Image_Guided_Therapy/SitePages/Devices.aspx' },
    ],
  },
  {
    name: 'Enterprise Informatics',
    url: 'https://share.philips.com/sites/Intranet_Enterprise_Informatics',
    subBusinesses: [
      { name: 'Clinical Informatics', url: 'https://share.philips.com/sites/Intranet_Enterprise_Informatics/SitePages/Clinical-Informatics.aspx' },
      { name: 'Imaging Informatics', url: 'https://share.philips.com/sites/Intranet_Enterprise_Informatics/SitePages/Imaging-Informatics.aspx' },
    ],
  },
  {
    name: 'Monitoring',
    url: 'https://share.philips.com/sites/Intranet_Monitoring',
    subBusinesses: [
      { name: 'Ambulatory Monitoring & Diagnostics', url: 'https://share.philips.com/sites/Intranet_Monitoring/SitePages/Ambulatory-Monitoring-&-Diagnostics.aspx' },
      { name: 'Hospital Patient Monitoring', url: 'https://share.philips.com/sites/Intranet_Monitoring/SitePages/Hospital-Patient-Monitoring.aspx' },
    ],
  },
  {
    name: 'Sleep & Respiratory Care',
    url: 'https://share.philips.com/sites/Intranet_Sleep_and_Respiratory_Care',
    subBusinesses: [],
  },
  {
    name: 'Personal Health',
    url: 'https://share.philips.com/sites/Intranet_Personal_Health',
    subBusinesses: [
      { name: 'Grooming & Beauty', url: 'https://share.philips.com/sites/Intranet_Personal_Health/SitePages/Grooming-&-Beauty.aspx' },
      { name: 'Oral Healthcare', url: 'https://share.philips.com/sites/Intranet_Personal_Health/SitePages/Oral-Healthcare.aspx' },
      { name: "Mother & Child Care / Women's Health", url: "https://share.philips.com/sites/Intranet_Personal_Health/SitePages/Mother_and_Child_Care_Women's_Health.aspx" },
    ],
  },
];

export const xdcImpactFactor: ImpactScore = {
  label: 'XDC Strategic Value',
  value: '76 / 100',
  change: '↑ +9 pts YoY',
  direction: 'positive',
  buildup: {
    outcome: 'Total Design Value',
    description:
      'The single top-line index for the whole XDC program. It blends how deeply the design system is adopted (the foundation) with the value that adoption produces (the outcomes) — because impact you cannot sustain is not real impact. One number that answers "is XDC working, and is it worth it?"',
    formula:
      'XDC Impact Factor = 0.60·Value Outcomes + 0.40·Adoption Foundation   (both normalised 0–100)',
    contributors: [
      {
        dimension: 'Value Outcomes — Philips Impact',
        weight: '60%',
        rationale:
          'The three strategic KPIs — Customer Experience Index (82), Risk Avoided (€8.7M ≈ 87), and Design Velocity (≈80) — average to ~83. This is what the business actually cares about, so it carries the most weight.',
      },
      {
        dimension: 'Adoption Foundation — XDC Maturity',
        weight: '40%',
        rationale:
          'Overall Asset Adoption (64), Active Consumers (≈74) and Rollout Progress (58) average to ~65. It discounts the outcome score: strong results on a thin adoption base are fragile and weighted down.',
      },
    ],
    rollup:
      'Bottom-up: 8 design dimensions → each topic card\u2019s KPIs feed either the Maturity adoption metrics or the Philips impact KPIs → those two layers combine here. 0.60·83 + 0.40·65 = 76. The factor rises when outcomes improve and when adoption broadens to support them, so teams cannot inflate it by optimising only one side.',
  },
};

export const levels: LevelData[] = [
  {
    id: 'maturity',
    label: 'XDC Maturity',
    impactScores: [
      {
        label: 'Overall Asset Adoption',
        value: '64%',
        change: '↑ +8% YoY',
        direction: 'positive',
        buildup: {
          outcome: 'Asset Uptake',
          description:
            'How broadly the reusable XDC design assets — components, guardrails, templates and tooling — are actually used across the portfolio. It is the headline signal that the program is being absorbed into day-to-day practice rather than sitting on the shelf.',
          formula:
            'Asset Adoption = 0.30·DLS Component Adoption + 0.25·Usability (Guardrail + Template) + 0.25·Design Tools Adoption + 0.20·CMF Conformance',
          contributors: [
            {
              dimension: 'Design Language System',
              weight: '30%',
              rationale:
                'Component Adoption (52%) is the core asset-uptake metric — every reused component is a direct adoption event.',
            },
            {
              dimension: 'Usability',
              weight: '25%',
              rationale:
                'Guardrail Adoption (78%) and Template Usage (64%) show teams building on top of approved patterns instead of from scratch.',
            },
            {
              dimension: 'Design Tools',
              weight: '25%',
              rationale:
                'Design Tool Adoption (72%) and Plugin Usage (48%) gate access to the assets — no tooling, no adoption.',
            },
            {
              dimension: 'CMF',
              weight: '20%',
              rationale:
                'Brand Compliance (91%) and Spec Adherence (78%) confirm the adopted assets are being applied to spec rather than diverging.',
            },
          ],
          rollup:
            'Each dimension card contributes its adoption-related KPIs, which are normalised to a 0–100% scale and combined with the weights above. Maturity is the program base level, so this score rolls up unchanged into the higher Business Unit and Philips views.',
        },
      },
      {
        label: 'Active Consumers',
        value: '1,847',
        change: '↑ +312 vs last quarter',
        direction: 'positive',
        buildup: {
          outcome: 'Community Engagement',
          description:
            'The count of designers, engineers and stakeholders actively consuming XDC assets, telemetry and services. It measures reach and stickiness of the program across the organisation.',
          formula:
            'Active Consumers = Σ unique active users across Design Tools, UX Telemetry, Design Reviews and Services touchpoints',
          contributors: [
            {
              dimension: 'Design Tools',
              weight: '35%',
              rationale:
                'Tool and plugin active users (72% / 48%) are the primary identity signal for who is engaging with the system.',
            },
            {
              dimension: 'UX Telemetry',
              weight: '25%',
              rationale:
                'Products Instrumented (24 of 30) and decisions backed by telemetry (47/mo) show teams actively pulling insights.',
            },
            {
              dimension: 'Design Reviews',
              weight: '20%',
              rationale:
                'Stakeholder Sign-off Rate (87%) reflects reviewers and approvers actively participating in the workflow.',
            },
            {
              dimension: 'Design for Services',
              weight: '20%',
              rationale:
                'Service User Satisfaction (4.4/5) indicates an engaged base of service consumers, not just one-off visitors.',
            },
          ],
          rollup:
            'Unique active users are de-duplicated across the four touchpoints so a person engaging with multiple dimensions is counted once. The total rolls up to the portfolio level as the program-wide reach figure.',
        },
      },
      {
        label: 'Rollout Progress',
        value: '58%',
        change: '↑ +12% this quarter',
        direction: 'positive',
        buildup: {
          outcome: 'Deployment Coverage',
          description:
            'How far the XDC rollout has progressed across the portfolio — the share of products and teams that have the system, instrumentation and documentation in place. It tracks completeness of deployment rather than depth of use.',
          formula:
            'Rollout Progress = 0.30·DLS Coverage + 0.25·UX Telemetry Instrumentation + 0.25·Data Model Completeness + 0.20·Service Documentation Completeness',
          contributors: [
            {
              dimension: 'Design Language System',
              weight: '30%',
              rationale:
                'Component Adoption (52%) doubles as a rollout signal — products on the system are products that have been onboarded.',
            },
            {
              dimension: 'UX Telemetry',
              weight: '25%',
              rationale:
                'Products Instrumented (24 of 30 = 80%) is the clearest measure of how many products the rollout has reached.',
            },
            {
              dimension: 'Data & AI Design',
              weight: '25%',
              rationale:
                'Data Model Completeness (79%) shows the underlying data foundations are being stood up alongside the rollout.',
            },
            {
              dimension: 'Design for Services',
              weight: '20%',
              rationale:
                'Service Documentation Completeness (88%) confirms each rolled-out area is documented and supportable.',
            },
          ],
          rollup:
            'Coverage is computed per product, then averaged across the portfolio with the weights above. As more products are onboarded the maturity figure rises and feeds directly into the Business Unit and Philips rollout views.',
        },
      },
    ],
    dimensions: [
      {
        title: 'Usability',
        kpis: [
          { name: 'Guardrail Adoption', status: 'on-track', currentLabel: 'adopted', currentValue: '78%', targetLabel: 'target', targetValue: '90%' },
          { name: 'Template Usage', status: 'on-track', currentLabel: 'utilization', currentValue: '64%', targetLabel: 'target', targetValue: '80%' },
        ],
        detail: [
          {
            title: 'Adoption',
            stats: [
              { label: 'Guardrail Adoption', value: '78%' },
              { label: 'Template Usage', value: '64%' },
              { label: 'Teams Following Patterns', value: '21 / 30' },
              { label: 'Patterns Published', value: '52' },
            ],
          },
          {
            title: 'Effectiveness',
            stats: [
              { label: 'Heuristic Pass Rate', value: '83%' },
              { label: 'Usability Findings / Audit', value: '4.2' },
              { label: 'Critical Issues Open', value: '7' },
              { label: 'WCAG AA Conformance', value: '88%' },
            ],
          },
          {
            title: 'Enablement',
            stats: [
              { label: 'Designers Trained', value: '146' },
              { label: 'Playbook Views / mo', value: '1,920' },
              { label: 'Avg Time-to-Pattern', value: '1.1 days' },
              { label: 'Support Requests', value: '23 / mo' },
            ],
          },
        ],
      },
      {
        title: 'Design Language System',
        kpis: [
          { name: 'Component Adoption %', status: 'at-risk', currentLabel: 'in use', currentValue: '52%', targetLabel: 'target', targetValue: '75%' },
          { name: 'Design Consistency Score', status: 'on-track', currentLabel: 'consistent', currentValue: '89%', targetLabel: 'target', targetValue: '95%' },
        ],
        detail: [
          {
            title: 'Adoption',
            stats: [
              { label: 'Component Adoption', value: '52%' },
              { label: 'Components in Library', value: '248' },
              { label: 'Teams on System', value: '18 / 30' },
              { label: 'New Components / Qtr', value: '14' },
            ],
          },
          {
            title: 'Quality',
            stats: [
              { label: 'Design Consistency Score', value: '89%' },
              { label: 'Accessibility Pass Rate', value: '92%' },
              { label: 'Token Coverage', value: '76%' },
              { label: 'Deprecated Usage', value: '6%' },
            ],
          },
          {
            title: 'Contribution',
            stats: [
              { label: 'PRs Merged (Qtr)', value: '64' },
              { label: 'Community Contributors', value: '27' },
              { label: 'Avg Review Time', value: '1.4 days' },
              { label: 'Open Issues', value: '38' },
            ],
          },
        ],
      },
      {
        title: 'CMF',
        kpis: [
          { name: 'Brand Compliance Rate', status: 'on-track', currentLabel: 'compliant', currentValue: '91%', targetLabel: 'target', targetValue: '98%' },
          { name: 'Spec Adherence %', status: 'on-track', currentLabel: 'current', currentValue: '78%', targetLabel: 'target', targetValue: '90%' },
        ],
        detail: [
          {
            title: 'Compliance',
            stats: [
              { label: 'Brand Compliance Rate', value: '91%' },
              { label: 'Spec Adherence', value: '78%' },
              { label: 'Color Accuracy (ΔE)', value: '1.8' },
              { label: 'Material Specs Approved', value: '134' },
            ],
          },
          {
            title: 'Coverage',
            stats: [
              { label: 'Products with CMF Specs', value: '22 / 30' },
              { label: 'Finishes Standardised', value: '41' },
              { label: 'Supplier Conformance', value: '86%' },
              { label: 'Pending Approvals', value: '9' },
            ],
          },
          {
            title: 'Quality',
            stats: [
              { label: 'First-Pass CMF Approval', value: '74%' },
              { label: 'Rework Rate', value: '9%' },
              { label: 'Audit Score', value: '84 / 100' },
              { label: 'Non-conformances Open', value: '12' },
            ],
          },
        ],
      },
      {
        title: 'Design Reviews',
        kpis: [
          { name: 'Review Turnaround Time', status: 'on-track', currentLabel: 'current', currentValue: '2.8 days', targetLabel: 'target', targetValue: '2 days' },
          { name: 'Stakeholder Sign-off Rate', status: 'on-track', currentLabel: 'current', currentValue: '87%', targetLabel: 'target', targetValue: '95%' },
        ],
        detail: [
          {
            title: 'Throughput',
            stats: [
              { label: 'Review Turnaround Time', value: '2.8 days' },
              { label: 'Reviews / mo', value: '64' },
              { label: 'Backlog', value: '11' },
              { label: 'On-time Rate', value: '82%' },
            ],
          },
          {
            title: 'Outcomes',
            stats: [
              { label: 'Stakeholder Sign-off Rate', value: '87%' },
              { label: 'First-Pass Approval', value: '61%' },
              { label: 'Issues Caught / Review', value: '3.4' },
              { label: 'Escalations', value: '5 / mo' },
            ],
          },
          {
            title: 'Coverage',
            stats: [
              { label: 'Projects Reviewed', value: '26 / 30' },
              { label: 'Reviewers Active', value: '34' },
              { label: 'Checklist Adherence', value: '90%' },
              { label: 'Avg Reviewers / Session', value: '3.1' },
            ],
          },
        ],
      },
      {
        title: 'Design for Services',
        kpis: [
          { name: 'Service Documentation Completeness', status: 'on-track', currentLabel: 'complete', currentValue: '88%', targetLabel: 'target', targetValue: '95%' },
          { name: 'Service User Satisfaction', status: 'on-track', currentLabel: 'rating', currentValue: '4.4/5', targetLabel: 'target', targetValue: '4.6/5' },
        ],
        detail: [
          {
            title: 'Documentation',
            stats: [
              { label: 'Service Doc Completeness', value: '88%' },
              { label: 'Service Blueprints', value: '46' },
              { label: 'Journeys Mapped', value: '63' },
              { label: 'Docs Updated (Qtr)', value: '128' },
            ],
          },
          {
            title: 'Satisfaction',
            stats: [
              { label: 'Service User Satisfaction', value: '4.4 / 5' },
              { label: 'Support CSAT', value: '4.2 / 5' },
              { label: 'First-Contact Resolution', value: '79%' },
              { label: 'Avg Resolution Time', value: '6.4 hrs' },
            ],
          },
          {
            title: 'Coverage',
            stats: [
              { label: 'Products with Service Design', value: '19 / 30' },
              { label: 'Touchpoints Designed', value: '212' },
              { label: 'SLA Adherence', value: '91%' },
              { label: 'Gaps Identified', value: '17' },
            ],
          },
        ],
      },
      {
        title: 'Data & AI Design',
        kpis: [
          { name: 'Data Model Completeness', status: 'on-track', currentLabel: 'current', currentValue: '79%', targetLabel: 'target', targetValue: '95%' },
          { name: 'AI Feature Quality Score', status: 'on-track', currentLabel: 'current', currentValue: '84%', targetLabel: 'target', targetValue: '92%' },
        ],
        detail: [
          {
            title: 'Data Foundations',
            stats: [
              { label: 'Data Model Completeness', value: '79%' },
              { label: 'Schemas Documented', value: '88' },
              { label: 'Data Quality Score', value: '83%' },
              { label: 'Governance Coverage', value: '71%' },
            ],
          },
          {
            title: 'AI Quality',
            stats: [
              { label: 'AI Feature Quality Score', value: '84%' },
              { label: 'Model Precision (avg)', value: '0.88' },
              { label: 'Explainability Coverage', value: '67%' },
              { label: 'Bias Audits Passed', value: '14 / 16' },
            ],
          },
          {
            title: 'Adoption',
            stats: [
              { label: 'Products with AI Features', value: '17 / 30' },
              { label: 'AI Patterns Published', value: '29' },
              { label: 'Teams Using Guidelines', value: '20' },
              { label: 'Open Risk Items', value: '8' },
            ],
          },
        ],
      },
      {
        title: 'Design Tools',
        kpis: [
          { name: 'Design Tool Adoption', status: 'on-track', currentLabel: 'of teams', currentValue: '72%', targetLabel: 'target', targetValue: '85%' },
          { name: 'Plugin Usage Rate', status: 'at-risk', currentLabel: 'active users', currentValue: '48%', targetLabel: 'target', targetValue: '70%' },
        ],
        detail: [
          {
            title: 'Adoption',
            stats: [
              { label: 'Design Tool Adoption', value: '72%' },
              { label: 'Plugin Usage Rate', value: '48%' },
              { label: 'Licensed Seats', value: '420' },
              { label: 'Active Seats', value: '302' },
            ],
          },
          {
            title: 'Productivity',
            stats: [
              { label: 'Avg Setup Time', value: '1.6 days' },
              { label: 'Automations Run / mo', value: '4,800' },
              { label: 'Handoff Accuracy', value: '88%' },
              { label: 'Time Saved / Designer', value: '5.2 hrs/wk' },
            ],
          },
          {
            title: 'Health',
            stats: [
              { label: 'Plugins Maintained', value: '18' },
              { label: 'Avg Plugin Rating', value: '4.1 / 5' },
              { label: 'Support Tickets / mo', value: '31' },
              { label: 'Deprecated Tools', value: '3' },
            ],
          },
        ],
      },
      {
        title: 'UX Telemetry',
        kpis: [
          { name: 'Products Instrumented', status: 'on-track', currentLabel: 'of 30', currentValue: '24', targetLabel: 'target', targetValue: '30' },
          { name: 'Decisions Backed by UX Telemetry', status: 'on-track', currentLabel: 'this month', currentValue: '47', targetLabel: 'target', targetValue: '60' },
        ],
        detail: [
          {
            title: 'Instrumentation',
            stats: [
              { label: 'Products Instrumented', value: '24 / 30' },
              { label: 'Coverage', value: '80%' },
              { label: 'Events / day', value: '1.2M' },
              { label: 'Healthy Pipelines', value: '28 / 30' },
            ],
          },
          {
            title: 'Session Metrics',
            stats: [
              { label: 'Avg Session Duration', value: '12.3 min' },
              { label: 'Sessions This Month', value: '24,531' },
              { label: 'Avg Sessions / User', value: '8.2' },
              { label: 'Bounce Rate', value: '8.3%' },
            ],
          },
          {
            title: 'Decision Impact',
            stats: [
              { label: 'Decisions Backed by Telemetry', value: '47 / mo' },
              { label: 'Insights Shipped', value: '31' },
              { label: 'Median Insight → Change', value: '9 days' },
              { label: 'Teams Subscribed', value: '22' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'product',
    label: 'Project Impact',
    appTitle: 'ECG Reports',
    impactScores: [
      {
        label: 'Task Success Rate',
        value: '92%',
        change: '↑ +3% vs baseline',
        direction: 'positive',
        buildup: {
          outcome: 'Effective Use',
          description:
            'The share of core ECG Reports workflows users complete successfully without errors or assistance. It is the project-level proof that the design actually works in the hands of clinicians.',
          formula:
            'Task Success = 0.50·Usability Task Completion + 0.30·UX Telemetry Workflow Funnel + 0.20·DLS Consistency',
          contributors: [
            {
              dimension: 'Usability',
              weight: '50%',
              rationale:
                'Task Completion Rate (92%) and error-recovery are the direct measure of whether users get the job done.',
            },
            {
              dimension: 'UX Telemetry',
              weight: '30%',
              rationale:
                'Real-world funnel data — Report Created → Signed (88%) and low drop-off — confirms success in production, not just in testing.',
            },
            {
              dimension: 'Design Language System',
              weight: '20%',
              rationale:
                'Consistency (93%) removes friction from unfamiliar patterns, lifting first-time success.',
            },
          ],
          rollup:
            'Measured per workflow from product telemetry, weighted by usage frequency into this project score, then rolled up by active users into the Business Unit and Philips experience metrics.',
        },
      },
      {
        label: 'AI Feature Quality',
        value: '89%',
        change: '↑ +5% vs last quarter',
        direction: 'positive',
        buildup: {
          outcome: 'Trustworthy AI',
          description:
            'A composite of how accurate, explainable and trusted the AI-assisted features in ECG Reports are. High quality here is what lets clinicians rely on AI output safely.',
          formula:
            'AI Quality = 0.55·Data & AI Model Quality + 0.25·Data Foundations + 0.20·Usability of AI Surfaces',
          contributors: [
            {
              dimension: 'Data & AI Design',
              weight: '55%',
              rationale:
                'Model precision (0.91), low false-positive rate (3.2%) and explainability coverage are the core quality signals.',
            },
            {
              dimension: 'Data & AI Design — Foundations',
              weight: '25%',
              rationale:
                'Data Model Completeness (82%) and validation coverage determine how reliable the inputs to the AI are.',
            },
            {
              dimension: 'Usability',
              weight: '20%',
              rationale:
                'Well-designed AI surfaces with low override rates (11%) show users trust and act on the output.',
            },
          ],
          rollup:
            'Scored per AI feature, weighted by interaction volume into the project figure, then aggregated by BU into the Philips AI competitive-advantage view.',
        },
      },
      {
        label: 'User Satisfaction',
        value: '4.3/5',
        change: '↑ +0.2 pts YoY',
        direction: 'positive',
        buildup: {
          outcome: 'User Delight',
          description:
            'How satisfied clinicians are with ECG Reports overall — a blended sentiment score from in-product surveys, support signals and service experience.',
          formula:
            'Satisfaction = 0.45·Usability Satisfaction + 0.35·UX Telemetry Engagement + 0.20·Design for Services',
          contributors: [
            {
              dimension: 'Usability',
              weight: '45%',
              rationale:
                'User Satisfaction Score (4.4/5) and SUS (79) are the most direct expression of how users feel about the product.',
            },
            {
              dimension: 'UX Telemetry',
              weight: '35%',
              rationale:
                'Stickiness (68%) and return rate (71%) are behavioural proof that satisfaction is real, not just stated.',
            },
            {
              dimension: 'Design for Services',
              weight: '20%',
              rationale:
                'Fast resolution (4.1 hrs) and high self-serve success (74%) keep satisfaction high after launch.',
            },
          ],
          rollup:
            'Survey and behavioural signals are blended per release, tracked over time on this project, then volume-weighted into the Business Unit NPS and Philips brand-strength figures.',
        },
      },
    ],
    dimensions: [
      {
        title: 'Usability',
        kpis: [
          { name: 'Task Completion Rate', status: 'on-track', currentLabel: 'current', currentValue: '92%', targetLabel: 'target', targetValue: '94%' },
          { name: 'User Satisfaction Score', status: 'on-track', currentLabel: 'current', currentValue: '4.4/5', targetLabel: 'target', targetValue: '4.6/5' },
        ],
        detail: [
          {
            title: 'Task Success',
            stats: [
              { label: 'Task Completion Rate', value: '92%' },
              { label: 'Avg Steps to Complete', value: '6.1' },
              { label: 'Error Recovery Rate', value: '88%' },
              { label: 'Critical Path Success', value: '94%' },
            ],
          },
          {
            title: 'Satisfaction',
            stats: [
              { label: 'User Satisfaction Score', value: '4.4 / 5' },
              { label: 'SUS Score', value: '79 / 100' },
              { label: 'Perceived Ease', value: '4.3 / 5' },
              { label: 'Would Recommend', value: '86%' },
            ],
          },
          {
            title: 'Accessibility',
            stats: [
              { label: 'WCAG AA Conformance', value: '95%' },
              { label: 'Keyboard Coverage', value: '100%' },
              { label: 'Screen Reader Pass', value: '91%' },
              { label: 'Open A11y Issues', value: '4' },
            ],
          },
        ],
      },
      {
        title: 'Design Language System',
        kpis: [
          { name: 'Component Library Coverage', status: 'at-risk', currentLabel: 'current', currentValue: '68%', targetLabel: 'target', targetValue: '85%' },
          { name: 'Design Consistency Score', status: 'on-track', currentLabel: 'current', currentValue: '93%', targetLabel: 'target', targetValue: '95%' },
        ],
        detail: [
          {
            title: 'Coverage',
            stats: [
              { label: 'Component Library Coverage', value: '68%' },
              { label: 'Screens on System', value: '142' },
              { label: 'Custom Components', value: '22' },
              { label: 'Reuse Rate', value: '74%' },
            ],
          },
          {
            title: 'Quality',
            stats: [
              { label: 'Design Consistency Score', value: '93%' },
              { label: 'Accessibility Pass Rate', value: '95%' },
              { label: 'Visual Regressions (Qtr)', value: '3' },
              { label: 'Token Adoption', value: '81%' },
            ],
          },
          {
            title: 'Velocity',
            stats: [
              { label: 'Handoff Accuracy', value: '91%' },
              { label: 'Time Saved / Release', value: '18%' },
              { label: 'Components Reused', value: '156' },
              { label: 'Net-new Built', value: '22' },
            ],
          },
        ],
      },
      {
        title: 'CMF',
        kpis: [
          { name: 'Brand Compliance Rate', status: 'on-track', currentLabel: 'current', currentValue: '96%', targetLabel: 'target', targetValue: '98%' },
          { name: 'Spec Adherence %', status: 'on-track', currentLabel: 'current', currentValue: '85%', targetLabel: 'target', targetValue: '92%' },
        ],
        detail: [
          {
            title: 'Compliance',
            stats: [
              { label: 'Brand Compliance Rate', value: '96%' },
              { label: 'Spec Adherence', value: '85%' },
              { label: 'Iconography Conformance', value: '93%' },
              { label: 'Typography Conformance', value: '97%' },
            ],
          },
          {
            title: 'Application',
            stats: [
              { label: 'Screens Styled to Spec', value: '138 / 142' },
              { label: 'Color Tokens Used', value: '64' },
              { label: 'Off-brand Instances', value: '5' },
              { label: 'Contrast Pass Rate', value: '98%' },
            ],
          },
          {
            title: 'Quality',
            stats: [
              { label: 'First-Pass Approval', value: '88%' },
              { label: 'Visual QA Defects', value: '6' },
              { label: 'Audit Score', value: '92 / 100' },
              { label: 'Open Issues', value: '3' },
            ],
          },
        ],
      },
      {
        title: 'Design Reviews',
        kpis: [
          { name: 'Review Turnaround Time', status: 'on-track', currentLabel: 'current', currentValue: '2.8 days', targetLabel: 'target', targetValue: '2 days' },
          { name: 'Stakeholder Sign-off Rate', status: 'on-track', currentLabel: 'current', currentValue: '91%', targetLabel: 'target', targetValue: '95%' },
        ],
        detail: [
          {
            title: 'Throughput',
            stats: [
              { label: 'Review Turnaround Time', value: '2.8 days' },
              { label: 'Reviews This Release', value: '18' },
              { label: 'Open Review Items', value: '4' },
              { label: 'On-time Rate', value: '89%' },
            ],
          },
          {
            title: 'Outcomes',
            stats: [
              { label: 'Stakeholder Sign-off Rate', value: '91%' },
              { label: 'First-Pass Approval', value: '72%' },
              { label: 'Issues Caught / Review', value: '2.8' },
              { label: 'Escalations', value: '1' },
            ],
          },
          {
            title: 'Participation',
            stats: [
              { label: 'Reviewers Engaged', value: '9' },
              { label: 'Checklist Adherence', value: '94%' },
              { label: 'Avg Reviewers / Session', value: '3.4' },
              { label: 'Action Items Closed', value: '92%' },
            ],
          },
        ],
      },
      {
        title: 'Design for Services',
        kpis: [
          { name: 'Service Documentation Completeness', status: 'on-track', currentLabel: 'current', currentValue: '92%', targetLabel: 'target', targetValue: '95%' },
          { name: 'Service User Satisfaction', status: 'on-track', currentLabel: 'current', currentValue: '4.5/5', targetLabel: 'target', targetValue: '4.6/5' },
        ],
        detail: [
          {
            title: 'Documentation',
            stats: [
              { label: 'Service Doc Completeness', value: '92%' },
              { label: 'Journeys Mapped', value: '12' },
              { label: 'Support Articles', value: '48' },
              { label: 'Docs Updated (Qtr)', value: '34' },
            ],
          },
          {
            title: 'Satisfaction',
            stats: [
              { label: 'Service User Satisfaction', value: '4.5 / 5' },
              { label: 'First-Contact Resolution', value: '83%' },
              { label: 'Avg Resolution Time', value: '4.1 hrs' },
              { label: 'Self-serve Success', value: '74%' },
            ],
          },
          {
            title: 'Coverage',
            stats: [
              { label: 'Touchpoints Designed', value: '38' },
              { label: 'SLA Adherence', value: '95%' },
              { label: 'Escalation Rate', value: '6%' },
              { label: 'Gaps Identified', value: '3' },
            ],
          },
        ],
      },
      {
        title: 'Data & AI Design',
        kpis: [
          { name: 'Data Model Completeness', status: 'on-track', currentLabel: 'current', currentValue: '82%', targetLabel: 'target', targetValue: '95%' },
          { name: 'AI Feature Quality Score', status: 'on-track', currentLabel: 'current', currentValue: '89%', targetLabel: 'target', targetValue: '92%' },
        ],
        detail: [
          {
            title: 'Data Foundations',
            stats: [
              { label: 'Data Model Completeness', value: '82%' },
              { label: 'Fields Documented', value: '214' },
              { label: 'Data Quality Score', value: '87%' },
              { label: 'Validation Coverage', value: '79%' },
            ],
          },
          {
            title: 'AI Quality',
            stats: [
              { label: 'AI Feature Quality Score', value: '89%' },
              { label: 'Model Precision', value: '0.91' },
              { label: 'False Positive Rate', value: '3.2%' },
              { label: 'Explainability Coverage', value: '74%' },
            ],
          },
          {
            title: 'Adoption',
            stats: [
              { label: 'AI Features Live', value: '6' },
              { label: 'Daily AI Interactions', value: '8,400' },
              { label: 'User Override Rate', value: '11%' },
              { label: 'Trust Score', value: '4.2 / 5' },
            ],
          },
        ],
      },
      {
        title: 'Design Tools',
        kpis: [
          { name: 'Prototyping Speed', status: 'on-track', currentLabel: 'avg', currentValue: '2.1 days', targetLabel: 'target', targetValue: '1.5 days' },
          { name: 'Design-to-Dev Handoff Accuracy', status: 'on-track', currentLabel: 'current', currentValue: '91%', targetLabel: 'target', targetValue: '95%' },
        ],
        detail: [
          {
            title: 'Speed',
            stats: [
              { label: 'Prototyping Speed', value: '2.1 days' },
              { label: 'Iterations / Week', value: '4.3' },
              { label: 'Time to First Prototype', value: '1.2 days' },
              { label: 'Reusable Flows', value: '28' },
            ],
          },
          {
            title: 'Handoff',
            stats: [
              { label: 'Handoff Accuracy', value: '91%' },
              { label: 'Redlines Auto-generated', value: '86%' },
              { label: 'Dev Clarification Requests', value: '0.6 / screen' },
              { label: 'Spec Drift', value: '4%' },
            ],
          },
          {
            title: 'Tooling',
            stats: [
              { label: 'Plugins Used', value: '11' },
              { label: 'Automations Run / mo', value: '640' },
              { label: 'Time Saved / Designer', value: '6.1 hrs/wk' },
              { label: 'Tool Satisfaction', value: '4.3 / 5' },
            ],
          },
        ],
      },
      {
        title: 'UX Telemetry',
        kpis: [
          { name: 'Time-on-Task', status: 'on-track', currentLabel: 'avg', currentValue: '12.8 min', targetLabel: 'target', targetValue: '15 min' },
          { name: 'Feature Stickiness', status: 'on-track', currentLabel: '7-day', currentValue: '68%', targetLabel: 'target', targetValue: '75%' },
        ],
        detail: [
          {
            title: 'Task Performance',
            stats: [
              { label: 'Time-on-Task', value: '12.8 min' },
              { label: 'Task Success Rate', value: '92%' },
              { label: 'Error Rate', value: '1.4%' },
              { label: 'Rage Clicks / Session', value: '0.3' },
            ],
          },
          {
            title: 'Engagement',
            stats: [
              { label: 'Feature Stickiness (7d)', value: '68%' },
              { label: 'Daily Active Users', value: '1,240' },
              { label: 'Return Rate (7d)', value: '71%' },
              { label: 'Avg Features Used', value: '6.4' },
            ],
          },
          {
            title: 'Workflow Funnel',
            stats: [
              { label: 'Report Created → Signed', value: '88%' },
              { label: 'Drop-off at Review', value: '7%' },
              { label: 'Median Completion', value: '4.2 min' },
              { label: 'Abandoned Sessions', value: '5%' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'business',
    label: 'Business Unit Impact',
    appTitle: 'A&MD',
    impactScores: [
      {
        label: 'Activation Rate',
        value: '42%',
        change: '↑ +5% YoY',
        direction: 'positive',
        buildup: {
          outcome: 'Adoption at Scale',
          description:
            'The share of A&MD users who reach first meaningful value after onboarding. Activation is the leading indicator of whether the BU\u2019s products convert sign-ups into real, sticky usage.',
          formula:
            'Activation = 0.45·Usability Onboarding + 0.35·UX Telemetry Activation Funnel + 0.20·DLS Time-to-Market',
          contributors: [
            {
              dimension: 'Usability',
              weight: '45%',
              rationale:
                'SUS (72) and product adoption (34% of TAM) show how easily new users get started across the BU portfolio.',
            },
            {
              dimension: 'UX Telemetry',
              weight: '35%',
              rationale:
                'Activation Rate (42%) and time-to-value (6.2 days) are measured directly from the BU activation funnel.',
            },
            {
              dimension: 'Design Language System',
              weight: '20%',
              rationale:
                'Faster time-to-market (23%) means activation-improving changes ship sooner across products.',
            },
          ],
          rollup:
            'Activation is measured per product, weighted by new-user volume into this BU figure, then rolled up across BUs into the Philips customer-health view.',
        },
      },
      {
        label: 'User Retention',
        value: '72%',
        change: '↑ +6% vs last quarter',
        direction: 'positive',
        buildup: {
          outcome: 'Sustained Loyalty',
          description:
            'The 12-month share of A&MD users who keep coming back. Retention is the truest test of long-term experience quality and the foundation of recurring revenue.',
          formula:
            'Retention = 0.40·UX Telemetry Engagement + 0.30·Usability Satisfaction + 0.30·Design for Services',
          contributors: [
            {
              dimension: 'UX Telemetry',
              weight: '40%',
              rationale:
                'Retention (72%), stickiness (34% DAU/MAU) and low churn (4.1%) are direct behavioural retention signals.',
            },
            {
              dimension: 'Usability',
              weight: '30%',
              rationale:
                'Higher SUS and CSAT (4.2/5) reduce frustration that drives users away over time.',
            },
            {
              dimension: 'Design for Services',
              weight: '30%',
              rationale:
                'Reliable service and high renewal (88%) keep customers in the ecosystem month over month.',
            },
          ],
          rollup:
            'Retention cohorts are tracked per product, blended by active-user volume into the BU score, then aggregated across BUs into Philips experience-linked retention.',
        },
      },
      {
        label: 'Revenue Impact',
        value: '+$1.8M',
        change: '↑ +28% vs H1',
        direction: 'positive',
        buildup: {
          outcome: 'Commercial Value',
          description:
            'The incremental revenue attributable to design-led improvements in A&MD — from higher activation, retention and service attach. It connects design work to the BU P&L.',
          formula:
            'Revenue Impact = Σ (activation uplift + retention uplift + service attach) × ARPU − cost to serve',
          contributors: [
            {
              dimension: 'Design for Services',
              weight: 'High',
              rationale:
                'Service revenue contribution (18%) and recurring revenue are the largest design-attributable revenue lever.',
            },
            {
              dimension: 'UX Telemetry',
              weight: 'High',
              rationale:
                'Activation and retention uplifts convert directly into expansion and lower churn revenue.',
            },
            {
              dimension: 'CMF',
              weight: 'Medium',
              rationale:
                'Manufacturing rework reduction (31%) and cost savings protect margin on every unit sold.',
            },
            {
              dimension: 'Design Reviews',
              weight: 'Low',
              rationale:
                'Faster, cleaner releases shorten time-to-revenue for new features.',
            },
          ],
          rollup:
            'Each lever is converted to attributable revenue per product, summed into the BU figure, then aggregated across BUs into the Philips Risk-Avoided and value metrics.',
        },
      },
    ],
    dimensions: [
      {
        title: 'Usability',
        kpis: [
          { name: 'SUS Score (System Usability Scale)', status: 'on-track', currentLabel: 'current', currentValue: '72/100', targetLabel: 'target', targetValue: '80/100' },
          { name: 'Product Adoption Rate', status: 'on-track', currentLabel: 'of TAM', currentValue: '34%', targetLabel: 'target', targetValue: '45%' },
        ],
        detail: [
          {
            title: 'Usability',
            stats: [
              { label: 'SUS Score', value: '72 / 100' },
              { label: 'Task Success (avg)', value: '88%' },
              { label: 'Time-on-Task Trend', value: '-12% YoY' },
              { label: 'Critical Usability Issues', value: '9' },
            ],
          },
          {
            title: 'Market Adoption',
            stats: [
              { label: 'Product Adoption (of TAM)', value: '34%' },
              { label: 'Active Accounts', value: '1,420' },
              { label: 'Adoption Trend', value: '+5% YoY' },
              { label: 'Win Rate', value: '38%' },
            ],
          },
          {
            title: 'Voice of Customer',
            stats: [
              { label: 'NPS', value: '46' },
              { label: 'CSAT', value: '4.2 / 5' },
              { label: 'Feedback Items / Qtr', value: '320' },
              { label: 'Top Issue Resolution', value: '74%' },
            ],
          },
        ],
      },
      {
        title: 'Design Language System',
        kpis: [
          { name: 'Design System Adoption %', status: 'at-risk', currentLabel: 'of teams', currentValue: '58%', targetLabel: 'target', targetValue: '80%' },
          { name: 'Time-to-Market Reduction', status: 'on-track', currentLabel: 'faster', currentValue: '23%', targetLabel: 'target', targetValue: '30%' },
        ],
        detail: [
          {
            title: 'Adoption',
            stats: [
              { label: 'Design System Adoption', value: '58%' },
              { label: 'Teams Onboarded', value: '11 / 19' },
              { label: 'Products on System', value: '14' },
              { label: 'Adoption Trend', value: '+9% QoQ' },
            ],
          },
          {
            title: 'Efficiency',
            stats: [
              { label: 'Time-to-Market Reduction', value: '23%' },
              { label: 'Avg Build Saving', value: '19%' },
              { label: 'Design Debt Backlog', value: '142 items' },
              { label: 'Rework Rate', value: '11%' },
            ],
          },
          {
            title: 'Consistency',
            stats: [
              { label: 'Cross-Product Consistency', value: '78%' },
              { label: 'Brand Compliance', value: '88%' },
              { label: 'Pattern Coverage', value: '73%' },
              { label: 'Audit Score', value: '81 / 100' },
            ],
          },
        ],
      },
      {
        title: 'CMF',
        kpis: [
          { name: 'Manufacturing Rework Reduction', status: 'on-track', currentLabel: 'reduction', currentValue: '31%', targetLabel: 'target', targetValue: '40%' },
          { name: 'Supply Chain Standardization', status: 'at-risk', currentLabel: 'standardized', currentValue: '54%', targetLabel: 'target', targetValue: '75%' },
        ],
        detail: [
          {
            title: 'Cost & Rework',
            stats: [
              { label: 'Manufacturing Rework Reduction', value: '31%' },
              { label: 'Cost Savings (YTD)', value: '$4.2M' },
              { label: 'Scrap Rate', value: '2.8%' },
              { label: 'Tooling Reuse', value: '64%' },
            ],
          },
          {
            title: 'Standardisation',
            stats: [
              { label: 'Supply Chain Standardisation', value: '54%' },
              { label: 'Common Materials', value: '38' },
              { label: 'Approved Suppliers', value: '22' },
              { label: 'Lead-time Variance', value: '±9%' },
            ],
          },
          {
            title: 'Quality',
            stats: [
              { label: 'Field Defect Rate', value: '0.6%' },
              { label: 'Finish Conformance', value: '89%' },
              { label: 'Audit Score', value: '80 / 100' },
              { label: 'Open Non-conformances', value: '14' },
            ],
          },
        ],
      },
      {
        title: 'Design Reviews',
        kpis: [
          { name: 'First-Pass Approval Rate', status: 'on-track', currentLabel: 'of reviews', currentValue: '62%', targetLabel: 'target', targetValue: '75%' },
          { name: 'Design Process Maturity Level', status: 'at-risk', currentLabel: 'current', currentValue: 'Level 2', targetLabel: 'target', targetValue: 'Level 3' },
        ],
        detail: [
          {
            title: 'Approval',
            stats: [
              { label: 'First-Pass Approval Rate', value: '62%' },
              { label: 'Avg Review Cycles', value: '1.8' },
              { label: 'Reviews / Qtr', value: '148' },
              { label: 'Escalations', value: '12' },
            ],
          },
          {
            title: 'Process Maturity',
            stats: [
              { label: 'Maturity Level', value: 'Level 2' },
              { label: 'Process Adherence', value: '76%' },
              { label: 'Documented Gates', value: '5 / 7' },
              { label: 'Teams at Target', value: '8 / 19' },
            ],
          },
          {
            title: 'Governance',
            stats: [
              { label: 'Design Authority Coverage', value: '84%' },
              { label: 'Decision Log Completeness', value: '79%' },
              { label: 'Avg Turnaround', value: '3.4 days' },
              { label: 'Open Actions', value: '27' },
            ],
          },
        ],
      },
      {
        title: 'Design for Services',
        kpis: [
          { name: 'Service Adoption Rate', status: 'at-risk', currentLabel: 'of customers', currentValue: '41%', targetLabel: 'target', targetValue: '60%' },
          { name: 'Service Revenue Contribution %', status: 'on-track', currentLabel: 'of BU revenue', currentValue: '18%', targetLabel: 'target', targetValue: '25%' },
        ],
        detail: [
          {
            title: 'Adoption',
            stats: [
              { label: 'Service Adoption Rate', value: '41%' },
              { label: 'Customers on Services', value: '620' },
              { label: 'Attach Rate', value: '37%' },
              { label: 'Adoption Trend', value: '+6% YoY' },
            ],
          },
          {
            title: 'Revenue',
            stats: [
              { label: 'Service Revenue Contribution', value: '18%' },
              { label: 'Recurring Revenue', value: '$2.4M / mo' },
              { label: 'Renewal Rate', value: '88%' },
              { label: 'Upsell Rate', value: '21%' },
            ],
          },
          {
            title: 'Experience',
            stats: [
              { label: 'Service CSAT', value: '4.1 / 5' },
              { label: 'SLA Adherence', value: '92%' },
              { label: 'First-Contact Resolution', value: '77%' },
              { label: 'Ecosystem Health', value: '74 / 100' },
            ],
          },
        ],
      },
      {
        title: 'Data & AI Design',
        kpis: [
          { name: 'AI-Powered Feature Usage %', status: 'at-risk', currentLabel: 'of users', currentValue: '47%', targetLabel: 'target', targetValue: '70%' },
          { name: 'Data Insights Implementation Rate', status: 'on-track', currentLabel: 'of insights', currentValue: '61%', targetLabel: 'target', targetValue: '75%' },
        ],
        detail: [
          {
            title: 'AI Usage',
            stats: [
              { label: 'AI Feature Usage', value: '47%' },
              { label: 'AI Features Live', value: '11' },
              { label: 'Daily AI Interactions', value: '34,000' },
              { label: 'Override Rate', value: '14%' },
            ],
          },
          {
            title: 'Insights',
            stats: [
              { label: 'Insights Implementation Rate', value: '61%' },
              { label: 'Insights Generated / Qtr', value: '210' },
              { label: 'Median Time-to-Action', value: '12 days' },
              { label: 'Backlog', value: '48' },
            ],
          },
          {
            title: 'Foundations',
            stats: [
              { label: 'Data Quality Score', value: '81%' },
              { label: 'Governance Coverage', value: '69%' },
              { label: 'Models in Production', value: '23' },
              { label: 'Bias Audits Passed', value: '19 / 23' },
            ],
          },
        ],
      },
      {
        title: 'Design Tools',
        kpis: [
          { name: 'Tool License Utilization', status: 'at-risk', currentLabel: 'active', currentValue: '61%', targetLabel: 'target', targetValue: '80%' },
          { name: 'Cross-Team Collaboration Score', status: 'on-track', currentLabel: 'current', currentValue: '74%', targetLabel: 'target', targetValue: '85%' },
        ],
        detail: [
          {
            title: 'Utilisation',
            stats: [
              { label: 'Tool License Utilisation', value: '61%' },
              { label: 'Licensed Seats', value: '240' },
              { label: 'Active Seats', value: '146' },
              { label: 'Annual License Cost', value: '$0.9M' },
            ],
          },
          {
            title: 'Collaboration',
            stats: [
              { label: 'Cross-Team Collaboration', value: '74%' },
              { label: 'Shared Libraries', value: '19' },
              { label: 'Cross-team Files', value: '212' },
              { label: 'Avg Contributors / File', value: '3.6' },
            ],
          },
          {
            title: 'Efficiency',
            stats: [
              { label: 'Automations Run / mo', value: '3,100' },
              { label: 'Time Saved / Designer', value: '4.4 hrs/wk' },
              { label: 'Onboarding Time', value: '2.1 days' },
              { label: 'Tool Satisfaction', value: '3.9 / 5' },
            ],
          },
        ],
      },
      {
        title: 'UX Telemetry',
        kpis: [
          { name: 'Activation Rate', status: 'on-track', currentLabel: 'current', currentValue: '42%', targetLabel: 'target', targetValue: '50%' },
          { name: 'User Retention', status: 'on-track', currentLabel: '12-month', currentValue: '72%', targetLabel: 'target', targetValue: '80%' },
        ],
        detail: [
          {
            title: 'Adoption',
            stats: [
              { label: 'Activation Rate', value: '42%' },
              { label: 'User Retention (12mo)', value: '72%' },
              { label: 'Monthly Active Users', value: '18,400' },
              { label: 'New Activations / mo', value: '2,310' },
            ],
          },
          {
            title: 'Engagement',
            stats: [
              { label: 'Avg Sessions / User', value: '9.6' },
              { label: 'Feature Adoption', value: '61%' },
              { label: 'Stickiness (DAU/MAU)', value: '34%' },
              { label: 'Churn Rate', value: '4.1%' },
            ],
          },
          {
            title: 'Outcomes',
            stats: [
              { label: 'NPS', value: '48' },
              { label: 'CSAT', value: '4.3 / 5' },
              { label: 'Support Tickets / 1k Users', value: '12' },
              { label: 'Time-to-Value', value: '6.2 days' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'philips',
    label: 'Philips Impact',
    impactScores: [
      {
        label: 'Customer Experience Index',
        value: '82/100',
        change: '↑ +6 pts vs baseline',
        direction: 'positive',
        buildup: {
          outcome: 'Customer Health',
          description:
            'A 0–100 composite of how well XDC-enabled products support safe, effective, and satisfying use in real clinical settings.',
          formula: 'CEI = 0.40·UX Telemetry + 0.25·Usability + 0.20·Design for Services + 0.15·Data & AI Design',
          contributors: [
            { dimension: 'UX Telemetry', weight: '40%', rationale: 'Real-world task success rate, error rate and time-on-task — the strongest evidence of clinical experience.' },
            { dimension: 'Usability', weight: '25%', rationale: 'Guardrail and template adoption as a leading indicator of designed-in safety.' },
            { dimension: 'Design for Services', weight: '20%', rationale: 'Service satisfaction and documentation completeness across the care pathway.' },
            { dimension: 'Data & AI Design', weight: '15%', rationale: 'Quality and trustworthiness of AI-assisted decisions.' },
          ],
          rollup:
            'Measured per app from its own telemetry, weighted by active users into each Business Unit, then volume-weighted across BUs into the Philips figure.',
        },
      },
      {
        label: 'Risk Avoided',
        value: '€8.7M',
        change: '↑ +12% vs prior year',
        direction: 'positive',
        buildup: {
          outcome: 'Risk Reduction',
          description:
            'Monetary value of compliance, brand and rework risk avoided by using governed XDC assets instead of bespoke design.',
          formula: 'Risk Avoided = Σ (adoptionᵈ × exposureᵈ × severityᵈ)',
          contributors: [
            { dimension: 'CMF', weight: 'High', rationale: 'Brand compliance and spec adherence — avoided brand and regulatory penalties.' },
            { dimension: 'Design Language System', weight: 'High', rationale: 'Component adoption — avoided inconsistency and downstream QA rework.' },
            { dimension: 'Design Reviews', weight: 'Medium', rationale: 'Sign-off rate and turnaround — avoided late-stage, costly defects.' },
            { dimension: 'Usability', weight: 'Medium', rationale: 'Guardrail adoption — avoided IEC 60601 / 62366 usability-file findings.' },
          ],
          rollup:
            'Each dimension contributes an avoided cost = adoption × financial exposure covered × severity if absent. Summed per project, aggregated by BU, then across Philips.',
        },
      },
      {
        label: 'Design Velocity',
        value: '1,240 wks',
        change: '↑ +18% YoY',
        direction: 'positive',
        buildup: {
          outcome: 'Speed of Innovation',
          description:
            'Design and engineering weeks saved per release cycle by reusing XDC assets rather than building from scratch.',
          formula: 'Velocity = Σ (reuseᵈ × baseline effortᵈ) − adoption friction',
          contributors: [
            { dimension: 'Design Tools', weight: 'High', rationale: 'Tool and plugin adoption — automation leverage across teams.' },
            { dimension: 'Design Language System', weight: 'High', rationale: 'Component reuse — less re-building of common UI.' },
            { dimension: 'Design Reviews', weight: 'Medium', rationale: 'Faster review turnaround — less waiting between stages.' },
            { dimension: 'Design for Services', weight: 'Low', rationale: 'Reusable service patterns shorten service design.' },
          ],
          rollup:
            'Weeks saved = reuse rate × original build cost, minus onboarding overhead. Summed per project, rolled up by BU, then aggregated to Philips.',
        },
      },
    ],
    dimensions: [
      {
        title: 'Usability',
        kpis: [
          { name: 'Reduced Regulatory Risk', status: 'on-track', currentLabel: 'compliant', currentValue: '94%', targetLabel: 'target', targetValue: '99%' },
          { name: 'Net Promoter Score (NPS)', status: 'on-track', currentLabel: 'current', currentValue: '54', targetLabel: 'target', targetValue: '65' },
        ],
        detail: [
          {
            title: 'Regulatory Risk',
            stats: [
              { label: 'Compliance Coverage', value: '94%' },
              { label: 'IEC 62366 Files Complete', value: '88%' },
              { label: 'Open Usability Findings', value: '21' },
              { label: 'Audit Pass Rate', value: '92%' },
            ],
          },
          {
            title: 'Customer Loyalty',
            stats: [
              { label: 'NPS', value: '54' },
              { label: 'CSAT', value: '4.4 / 5' },
              { label: 'Detractor Rate', value: '11%' },
              { label: 'NPS Trend', value: '+7 YoY' },
            ],
          },
          {
            title: 'Scale',
            stats: [
              { label: 'Products Assessed', value: '96 / 120' },
              { label: 'Markets Covered', value: '34' },
              { label: 'Usability Studies / Qtr', value: '62' },
              { label: 'Participants / Qtr', value: '1,140' },
            ],
          },
        ],
      },
      {
        title: 'Design Language System',
        kpis: [
          { name: 'Reduced Design Debt', status: 'at-risk', currentLabel: 'value', currentValue: '$8.2M', targetLabel: 'target', targetValue: '$12M' },
          { name: 'Brand Consistency Index', status: 'at-risk', currentLabel: 'current', currentValue: '71/100', targetLabel: 'target', targetValue: '85/100' },
        ],
        detail: [
          {
            title: 'Strategic Value',
            stats: [
              { label: 'Reduced Design Debt', value: '$8.2M' },
              { label: 'Brand Consistency Index', value: '71 / 100' },
              { label: 'Reuse Savings (YTD)', value: '$14.6M' },
              { label: 'Standardised Components', value: '312' },
            ],
          },
          {
            title: 'Scale',
            stats: [
              { label: 'Portfolio Adoption', value: '64%' },
              { label: 'BUs on System', value: '5 / 6' },
              { label: 'Products on System', value: '96' },
              { label: 'Contributors', value: '140' },
            ],
          },
          {
            title: 'Quality',
            stats: [
              { label: 'Accessibility Conformance', value: '90%' },
              { label: 'Consistency Score', value: '83%' },
              { label: 'Deprecated Usage', value: '7%' },
              { label: 'Audit Pass Rate', value: '86%' },
            ],
          },
        ],
      },
      {
        title: 'CMF',
        kpis: [
          { name: 'Customer Retention Rate', status: 'on-track', currentLabel: 'annual', currentValue: '87%', targetLabel: 'target', targetValue: '92%' },
          { name: 'Cost Savings (Standardization)', status: 'on-track', currentLabel: 'YTD', currentValue: '$18.5M', targetLabel: 'annual target', targetValue: '$25M' },
        ],
        detail: [
          {
            title: 'Commercial Impact',
            stats: [
              { label: 'Customer Retention Rate', value: '87%' },
              { label: 'Cost Savings (YTD)', value: '$18.5M' },
              { label: 'Repeat Purchase Rate', value: '64%' },
              { label: 'Premium Mix', value: '38%' },
            ],
          },
          {
            title: 'Standardisation',
            stats: [
              { label: 'Portfolio Material Reuse', value: '58%' },
              { label: 'Common Finishes', value: '72' },
              { label: 'Supplier Consolidation', value: '-23%' },
              { label: 'Lead-time Reduction', value: '17%' },
            ],
          },
          {
            title: 'Quality',
            stats: [
              { label: 'Field Defect Rate', value: '0.4%' },
              { label: 'Brand Conformance', value: '90%' },
              { label: 'Audit Score', value: '85 / 100' },
              { label: 'Open Non-conformances', value: '31' },
            ],
          },
        ],
      },
      {
        title: 'Design Reviews',
        kpis: [
          { name: 'Reduced Time-to-Market', status: 'on-track', currentLabel: 'faster', currentValue: '28%', targetLabel: 'target', targetValue: '35%' },
          { name: 'Increased Design Velocity', status: 'on-track', currentLabel: 'avg', currentValue: '3.2 releases/month', targetLabel: 'target', targetValue: '4 releases/month' },
        ],
        detail: [
          {
            title: 'Speed',
            stats: [
              { label: 'Time-to-Market Reduction', value: '28%' },
              { label: 'Design Velocity', value: '3.2 rel/mo' },
              { label: 'Avg Cycle Time', value: '6.4 wks' },
              { label: 'Velocity Trend', value: '+18% YoY' },
            ],
          },
          {
            title: 'Quality Gate',
            stats: [
              { label: 'First-Pass Approval', value: '68%' },
              { label: 'Defects Caught Pre-launch', value: '84%' },
              { label: 'Post-launch Hotfixes', value: '-22% YoY' },
              { label: 'Escalations / Qtr', value: '14' },
            ],
          },
          {
            title: 'Governance',
            stats: [
              { label: 'Programs Under Review', value: '96' },
              { label: 'Design Authority Coverage', value: '88%' },
              { label: 'Process Maturity (avg)', value: 'Level 2.6' },
              { label: 'Decision Log Completeness', value: '82%' },
            ],
          },
        ],
      },
      {
        title: 'Design for Services',
        kpis: [
          { name: 'Services Revenue Growth %', status: 'on-track', currentLabel: 'YoY', currentValue: '+24%', targetLabel: 'target', targetValue: '+30%' },
          { name: 'Service Ecosystem Health', status: 'at-risk', currentLabel: 'current', currentValue: '72/100', targetLabel: 'target', targetValue: '85/100' },
        ],
        detail: [
          {
            title: 'Revenue',
            stats: [
              { label: 'Services Revenue Growth', value: '+24% YoY' },
              { label: 'Recurring Revenue', value: '$186M' },
              { label: 'Renewal Rate', value: '90%' },
              { label: 'Net Revenue Retention', value: '112%' },
            ],
          },
          {
            title: 'Ecosystem Health',
            stats: [
              { label: 'Ecosystem Health Index', value: '72 / 100' },
              { label: 'Partner Integrations', value: '48' },
              { label: 'Active Service Lines', value: '22' },
              { label: 'Churned Services', value: '3' },
            ],
          },
          {
            title: 'Experience',
            stats: [
              { label: 'Service CSAT', value: '4.2 / 5' },
              { label: 'SLA Adherence', value: '93%' },
              { label: 'Avg Resolution Time', value: '5.8 hrs' },
              { label: 'Self-serve Success', value: '71%' },
            ],
          },
        ],
      },
      {
        title: 'Data & AI Design',
        kpis: [
          { name: 'Data Monetization Revenue', status: 'on-track', currentLabel: 'YTD', currentValue: '$12.5M', targetLabel: 'annual target', targetValue: '$18M' },
          { name: 'AI Competitive Advantage Score', status: 'at-risk', currentLabel: 'current', currentValue: '68/100', targetLabel: 'target', targetValue: '85/100' },
        ],
        detail: [
          {
            title: 'Monetisation',
            stats: [
              { label: 'Data Monetisation Revenue', value: '$12.5M' },
              { label: 'Data Products Live', value: '14' },
              { label: 'Paying Data Customers', value: '210' },
              { label: 'Revenue Trend', value: '+31% YoY' },
            ],
          },
          {
            title: 'AI Advantage',
            stats: [
              { label: 'Competitive Advantage Score', value: '68 / 100' },
              { label: 'AI Patents Filed', value: '19' },
              { label: 'Models in Production', value: '64' },
              { label: 'Avg Model Precision', value: '0.89' },
            ],
          },
          {
            title: 'Trust & Governance',
            stats: [
              { label: 'Bias Audits Passed', value: '54 / 64' },
              { label: 'Explainability Coverage', value: '71%' },
              { label: 'Regulatory Approvals', value: '12' },
              { label: 'Open Risk Items', value: '23' },
            ],
          },
        ],
      },
      {
        title: 'Design Tools',
        kpis: [
          { name: 'Toolchain ROI', status: 'on-track', currentLabel: 'current', currentValue: '3.2x', targetLabel: 'target', targetValue: '4.0x' },
          { name: 'Design Efficiency Gain', status: 'on-track', currentLabel: 'reduction', currentValue: '34%', targetLabel: 'target', targetValue: '40%' },
        ],
        detail: [
          {
            title: 'ROI',
            stats: [
              { label: 'Toolchain ROI', value: '3.2x' },
              { label: 'Annual Tool Spend', value: '$4.1M' },
              { label: 'Value Generated', value: '$13.1M' },
              { label: 'Payback Period', value: '7 mo' },
            ],
          },
          {
            title: 'Efficiency',
            stats: [
              { label: 'Design Efficiency Gain', value: '34%' },
              { label: 'Hours Saved / Qtr', value: '18,400' },
              { label: 'Automation Coverage', value: '62%' },
              { label: 'Avg Onboarding Time', value: '1.8 days' },
            ],
          },
          {
            title: 'Scale',
            stats: [
              { label: 'Active Seats', value: '1,240' },
              { label: 'Plugins Maintained', value: '34' },
              { label: 'Automations Run / mo', value: '52,000' },
              { label: 'Tool Satisfaction', value: '4.2 / 5' },
            ],
          },
        ],
      },
      {
        title: 'UX Telemetry',
        kpis: [
          { name: 'Brand Strength', status: 'on-track', currentLabel: 'current', currentValue: '8.2/10', targetLabel: 'target', targetValue: '9.0/10' },
          { name: 'NPS', status: 'on-track', currentLabel: 'current', currentValue: '54', targetLabel: 'target', targetValue: '65' },
        ],
        detail: [
          {
            title: 'Brand & Experience',
            stats: [
              { label: 'Brand Strength', value: '8.2 / 10' },
              { label: 'NPS', value: '54' },
              { label: 'CSAT', value: '4.4 / 5' },
              { label: 'Trust Index', value: '79 / 100' },
            ],
          },
          {
            title: 'Scale',
            stats: [
              { label: 'Instrumented Products', value: '96 / 120' },
              { label: 'Monthly Active Users', value: '1.9M' },
              { label: 'Events / day', value: '42M' },
              { label: 'Markets Covered', value: '34' },
            ],
          },
          {
            title: 'Strategic Signal',
            stats: [
              { label: 'Experience-linked Revenue', value: '$214M' },
              { label: 'Retention Uplift', value: '+6 pts' },
              { label: 'Complaints / 10k', value: '-18% YoY' },
              { label: 'Decisions Informed', value: '312 / qtr' },
            ],
          },
        ],
      },
    ],
  },
];

export interface TelemetryModalData {
  sessionMetrics: { label: string; value: string }[];
  performanceMetrics: { label: string; value: string }[];
  userEngagement: { label: string; value: string }[];
}

export const telemetryModalData: TelemetryModalData = {
  sessionMetrics: [
    { label: 'Average Session Duration', value: '12.3 min' },
    { label: 'Target Duration', value: '15 min' },
    { label: 'Sessions This Month', value: '24,531' },
    { label: 'Avg Sessions/User', value: '8.2' },
  ],
  performanceMetrics: [
    { label: 'Page Load Time (P95)', value: '1.8s' },
    { label: 'Target Load Time', value: '2.0s' },
    { label: 'Bounce Rate', value: '8.3%' },
    { label: 'Error Rate', value: '0.2%' },
  ],
  userEngagement: [
    { label: 'Daily Active Users', value: '3,847' },
    { label: 'Weekly Active Users', value: '8,234' },
    { label: 'Feature Adoption Rate', value: '76%' },
    { label: 'User Retention (30d)', value: '84%' },
  ],
};
