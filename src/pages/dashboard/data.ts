export type KpiStatus = 'on-track' | 'at-risk' | 'off-track';

export interface Kpi {
  name: string;
  status: KpiStatus;
  currentLabel: string;
  currentValue: string;
  targetLabel: string;
  targetValue: string;
}

export interface DimensionData {
  title: string;
  kpis: Kpi[];
}

export interface ImpactScore {
  label: string;
  value: string;
  change: string;
  direction: 'positive' | 'negative' | 'neutral';
}

export interface LevelData {
  id: string;
  label: string;
  appTitle?: string;
  impactScores: ImpactScore[];
  dimensions: DimensionData[];
}

export const levels: LevelData[] = [
  {
    id: 'maturity',
    label: 'Maturity',
    impactScores: [
      { label: 'Overall Asset Adoption', value: '64%', change: '↑ +8% YoY', direction: 'positive' },
      { label: 'Active Consumers', value: '1,847', change: '↑ +312 vs last quarter', direction: 'positive' },
      { label: 'Rollout Progress', value: '58%', change: '↑ +12% this quarter', direction: 'positive' },
    ],
    dimensions: [
      {
        title: 'Usability',
        kpis: [
          { name: 'Guardrail Adoption', status: 'on-track', currentLabel: 'adopted', currentValue: '78%', targetLabel: 'target', targetValue: '90%' },
          { name: 'Template Usage', status: 'on-track', currentLabel: 'utilization', currentValue: '64%', targetLabel: 'target', targetValue: '80%' },
        ],
      },
      {
        title: 'Design Language System',
        kpis: [
          { name: 'Component Adoption %', status: 'at-risk', currentLabel: 'in use', currentValue: '52%', targetLabel: 'target', targetValue: '75%' },
          { name: 'Design Consistency Score', status: 'on-track', currentLabel: 'consistent', currentValue: '89%', targetLabel: 'target', targetValue: '95%' },
        ],
      },
      {
        title: 'CMF',
        kpis: [
          { name: 'Brand Compliance Rate', status: 'on-track', currentLabel: 'compliant', currentValue: '91%', targetLabel: 'target', targetValue: '98%' },
          { name: 'Spec Adherence %', status: 'on-track', currentLabel: 'current', currentValue: '78%', targetLabel: 'target', targetValue: '90%' },
        ],
      },
      {
        title: 'Design Reviews',
        kpis: [
          { name: 'Review Turnaround Time', status: 'on-track', currentLabel: 'current', currentValue: '2.8 days', targetLabel: 'target', targetValue: '2 days' },
          { name: 'Stakeholder Sign-off Rate', status: 'on-track', currentLabel: 'current', currentValue: '87%', targetLabel: 'target', targetValue: '95%' },
        ],
      },
      {
        title: 'Design for Services',
        kpis: [
          { name: 'Service Documentation Completeness', status: 'on-track', currentLabel: 'complete', currentValue: '88%', targetLabel: 'target', targetValue: '95%' },
          { name: 'Service User Satisfaction', status: 'on-track', currentLabel: 'rating', currentValue: '4.4/5', targetLabel: 'target', targetValue: '4.6/5' },
        ],
      },
      {
        title: 'Data & AI Design',
        kpis: [
          { name: 'Data Model Completeness', status: 'on-track', currentLabel: 'current', currentValue: '79%', targetLabel: 'target', targetValue: '95%' },
          { name: 'AI Feature Quality Score', status: 'on-track', currentLabel: 'current', currentValue: '84%', targetLabel: 'target', targetValue: '92%' },
        ],
      },
      {
        title: 'Design Tools',
        kpis: [
          { name: 'Design Tool Adoption', status: 'on-track', currentLabel: 'of teams', currentValue: '72%', targetLabel: 'target', targetValue: '85%' },
          { name: 'Plugin Usage Rate', status: 'at-risk', currentLabel: 'active users', currentValue: '48%', targetLabel: 'target', targetValue: '70%' },
        ],
      },
      {
        title: 'UX Telemetry',
        kpis: [
          { name: 'Products Instrumented', status: 'on-track', currentLabel: 'of 30', currentValue: '24', targetLabel: 'target', targetValue: '30' },
          { name: 'Decisions Backed by UX Telemetry', status: 'on-track', currentLabel: 'this month', currentValue: '47', targetLabel: 'target', targetValue: '60' },
        ],
      },
    ],
  },
  {
    id: 'product',
    label: 'Product Impact',
    appTitle: 'ECG Reports',
    impactScores: [
      { label: 'Task Success Rate', value: '92%', change: '↑ +3% vs baseline', direction: 'positive' },
      { label: 'AI Feature Quality', value: '89%', change: '↑ +5% vs last quarter', direction: 'positive' },
      { label: 'User Satisfaction', value: '4.3/5', change: '↑ +0.2 pts YoY', direction: 'positive' },
    ],
    dimensions: [
      {
        title: 'Usability',
        kpis: [
          { name: 'Task Completion Rate', status: 'on-track', currentLabel: 'current', currentValue: '92%', targetLabel: 'target', targetValue: '94%' },
          { name: 'User Satisfaction Score', status: 'on-track', currentLabel: 'current', currentValue: '4.4/5', targetLabel: 'target', targetValue: '4.6/5' },
        ],
      },
      {
        title: 'Design Language System',
        kpis: [
          { name: 'Component Library Coverage', status: 'at-risk', currentLabel: 'current', currentValue: '68%', targetLabel: 'target', targetValue: '85%' },
          { name: 'Design Consistency Score', status: 'on-track', currentLabel: 'current', currentValue: '93%', targetLabel: 'target', targetValue: '95%' },
        ],
      },
      {
        title: 'CMF',
        kpis: [
          { name: 'Brand Compliance Rate', status: 'on-track', currentLabel: 'current', currentValue: '96%', targetLabel: 'target', targetValue: '98%' },
          { name: 'Spec Adherence %', status: 'on-track', currentLabel: 'current', currentValue: '85%', targetLabel: 'target', targetValue: '92%' },
        ],
      },
      {
        title: 'Design Reviews',
        kpis: [
          { name: 'Review Turnaround Time', status: 'on-track', currentLabel: 'current', currentValue: '2.8 days', targetLabel: 'target', targetValue: '2 days' },
          { name: 'Stakeholder Sign-off Rate', status: 'on-track', currentLabel: 'current', currentValue: '91%', targetLabel: 'target', targetValue: '95%' },
        ],
      },
      {
        title: 'Design for Services',
        kpis: [
          { name: 'Service Documentation Completeness', status: 'on-track', currentLabel: 'current', currentValue: '92%', targetLabel: 'target', targetValue: '95%' },
          { name: 'Service User Satisfaction', status: 'on-track', currentLabel: 'current', currentValue: '4.5/5', targetLabel: 'target', targetValue: '4.6/5' },
        ],
      },
      {
        title: 'Data & AI Design',
        kpis: [
          { name: 'Data Model Completeness', status: 'on-track', currentLabel: 'current', currentValue: '82%', targetLabel: 'target', targetValue: '95%' },
          { name: 'AI Feature Quality Score', status: 'on-track', currentLabel: 'current', currentValue: '89%', targetLabel: 'target', targetValue: '92%' },
        ],
      },
      {
        title: 'Design Tools',
        kpis: [
          { name: 'Prototyping Speed', status: 'on-track', currentLabel: 'avg', currentValue: '2.1 days', targetLabel: 'target', targetValue: '1.5 days' },
          { name: 'Design-to-Dev Handoff Accuracy', status: 'on-track', currentLabel: 'current', currentValue: '91%', targetLabel: 'target', targetValue: '95%' },
        ],
      },
      {
        title: 'UX Telemetry',
        kpis: [
          { name: 'Time-on-Task', status: 'on-track', currentLabel: 'avg', currentValue: '12.8 min', targetLabel: 'target', targetValue: '15 min' },
          { name: 'Feature Stickiness', status: 'on-track', currentLabel: '7-day', currentValue: '68%', targetLabel: 'target', targetValue: '75%' },
        ],
      },
    ],
  },
  {
    id: 'business',
    label: 'BU Impact',
    appTitle: 'A&MD',
    impactScores: [
      { label: 'Activation Rate', value: '42%', change: '↑ +5% YoY', direction: 'positive' },
      { label: 'User Retention', value: '72%', change: '↑ +6% vs last quarter', direction: 'positive' },
      { label: 'Revenue Impact', value: '+$1.8M', change: '↑ +28% vs H1', direction: 'positive' },
    ],
    dimensions: [
      {
        title: 'Usability',
        kpis: [
          { name: 'SUS Score (System Usability Scale)', status: 'on-track', currentLabel: 'current', currentValue: '72/100', targetLabel: 'target', targetValue: '80/100' },
          { name: 'Product Adoption Rate', status: 'on-track', currentLabel: 'of TAM', currentValue: '34%', targetLabel: 'target', targetValue: '45%' },
        ],
      },
      {
        title: 'Design Language System',
        kpis: [
          { name: 'Design System Adoption %', status: 'at-risk', currentLabel: 'of teams', currentValue: '58%', targetLabel: 'target', targetValue: '80%' },
          { name: 'Time-to-Market Reduction', status: 'on-track', currentLabel: 'faster', currentValue: '23%', targetLabel: 'target', targetValue: '30%' },
        ],
      },
      {
        title: 'CMF',
        kpis: [
          { name: 'Manufacturing Rework Reduction', status: 'on-track', currentLabel: 'reduction', currentValue: '31%', targetLabel: 'target', targetValue: '40%' },
          { name: 'Supply Chain Standardization', status: 'at-risk', currentLabel: 'standardized', currentValue: '54%', targetLabel: 'target', targetValue: '75%' },
        ],
      },
      {
        title: 'Design Reviews',
        kpis: [
          { name: 'First-Pass Approval Rate', status: 'on-track', currentLabel: 'of reviews', currentValue: '62%', targetLabel: 'target', targetValue: '75%' },
          { name: 'Design Process Maturity Level', status: 'at-risk', currentLabel: 'current', currentValue: 'Level 2', targetLabel: 'target', targetValue: 'Level 3' },
        ],
      },
      {
        title: 'Design for Services',
        kpis: [
          { name: 'Service Adoption Rate', status: 'at-risk', currentLabel: 'of customers', currentValue: '41%', targetLabel: 'target', targetValue: '60%' },
          { name: 'Service Revenue Contribution %', status: 'on-track', currentLabel: 'of BU revenue', currentValue: '18%', targetLabel: 'target', targetValue: '25%' },
        ],
      },
      {
        title: 'Data & AI Design',
        kpis: [
          { name: 'AI-Powered Feature Usage %', status: 'at-risk', currentLabel: 'of users', currentValue: '47%', targetLabel: 'target', targetValue: '70%' },
          { name: 'Data Insights Implementation Rate', status: 'on-track', currentLabel: 'of insights', currentValue: '61%', targetLabel: 'target', targetValue: '75%' },
        ],
      },
      {
        title: 'Design Tools',
        kpis: [
          { name: 'Tool License Utilization', status: 'at-risk', currentLabel: 'active', currentValue: '61%', targetLabel: 'target', targetValue: '80%' },
          { name: 'Cross-Team Collaboration Score', status: 'on-track', currentLabel: 'current', currentValue: '74%', targetLabel: 'target', targetValue: '85%' },
        ],
      },
      {
        title: 'UX Telemetry',
        kpis: [
          { name: 'Activation Rate', status: 'on-track', currentLabel: 'current', currentValue: '42%', targetLabel: 'target', targetValue: '50%' },
          { name: 'User Retention', status: 'on-track', currentLabel: '12-month', currentValue: '72%', targetLabel: 'target', targetValue: '80%' },
        ],
      },
    ],
  },
  {
    id: 'philips',
    label: 'Philips Impact',
    impactScores: [
      { label: 'Brand Strength', value: '8.2/10', change: '↑ +0.8 pts vs baseline', direction: 'positive' },
      { label: 'Risk Avoided', value: '$8.7M', change: '↑ +12% vs prior year', direction: 'positive' },
      { label: 'Total Strategic Value', value: '$15.2M', change: '↑ +42% YoY', direction: 'positive' },
    ],
    dimensions: [
      {
        title: 'Usability',
        kpis: [
          { name: 'Reduced Regulatory Risk', status: 'on-track', currentLabel: 'compliant', currentValue: '94%', targetLabel: 'target', targetValue: '99%' },
          { name: 'Net Promoter Score (NPS)', status: 'on-track', currentLabel: 'current', currentValue: '54', targetLabel: 'target', targetValue: '65' },
        ],
      },
      {
        title: 'Design Language System',
        kpis: [
          { name: 'Reduced Design Debt', status: 'at-risk', currentLabel: 'value', currentValue: '$8.2M', targetLabel: 'target', targetValue: '$12M' },
          { name: 'Brand Consistency Index', status: 'at-risk', currentLabel: 'current', currentValue: '71/100', targetLabel: 'target', targetValue: '85/100' },
        ],
      },
      {
        title: 'CMF',
        kpis: [
          { name: 'Customer Retention Rate', status: 'on-track', currentLabel: 'annual', currentValue: '87%', targetLabel: 'target', targetValue: '92%' },
          { name: 'Cost Savings (Standardization)', status: 'on-track', currentLabel: 'YTD', currentValue: '$18.5M', targetLabel: 'annual target', targetValue: '$25M' },
        ],
      },
      {
        title: 'Design Reviews',
        kpis: [
          { name: 'Reduced Time-to-Market', status: 'on-track', currentLabel: 'faster', currentValue: '28%', targetLabel: 'target', targetValue: '35%' },
          { name: 'Increased Design Velocity', status: 'on-track', currentLabel: 'avg', currentValue: '3.2 releases/month', targetLabel: 'target', targetValue: '4 releases/month' },
        ],
      },
      {
        title: 'Design for Services',
        kpis: [
          { name: 'Services Revenue Growth %', status: 'on-track', currentLabel: 'YoY', currentValue: '+24%', targetLabel: 'target', targetValue: '+30%' },
          { name: 'Service Ecosystem Health', status: 'at-risk', currentLabel: 'current', currentValue: '72/100', targetLabel: 'target', targetValue: '85/100' },
        ],
      },
      {
        title: 'Data & AI Design',
        kpis: [
          { name: 'Data Monetization Revenue', status: 'on-track', currentLabel: 'YTD', currentValue: '$12.5M', targetLabel: 'annual target', targetValue: '$18M' },
          { name: 'AI Competitive Advantage Score', status: 'at-risk', currentLabel: 'current', currentValue: '68/100', targetLabel: 'target', targetValue: '85/100' },
        ],
      },
      {
        title: 'Design Tools',
        kpis: [
          { name: 'Toolchain ROI', status: 'on-track', currentLabel: 'current', currentValue: '3.2x', targetLabel: 'target', targetValue: '4.0x' },
          { name: 'Design Efficiency Gain', status: 'on-track', currentLabel: 'reduction', currentValue: '34%', targetLabel: 'target', targetValue: '40%' },
        ],
      },
      {
        title: 'UX Telemetry',
        kpis: [
          { name: 'Brand Strength', status: 'on-track', currentLabel: 'current', currentValue: '8.2/10', targetLabel: 'target', targetValue: '9.0/10' },
          { name: 'NPS', status: 'on-track', currentLabel: 'current', currentValue: '54', targetLabel: 'target', targetValue: '65' },
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
