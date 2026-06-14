import { style } from '@vanilla-extract/css';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  padding: '0',
  width: '100%',
});

/* ── Layer sections ── */

export const layerSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
});

/* ── Chain arrow ── */

export const chainArrow = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
  padding: '2px 0',
  opacity: 0.5,
});

export const arrowLine = style({
  width: '2px',
  height: '8px',
  backgroundColor: 'var(--fil-color-brand)',
});

export const arrowLabel = style({
  fontSize: '11px',
  fontWeight: 500,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  color: 'var(--fil-color-brand)',
});

export const arrowHead = style({
  fontSize: '12px',
  lineHeight: 1,
  color: 'var(--fil-color-brand)',
});

/* ── Clickable card ── */

export const clickableCard = style({
  cursor: 'pointer',
  transition: 'box-shadow 0.2s ease, transform 0.15s ease',
  ':hover': {
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transform: 'translateY(-1px)',
  },
});

/* ── Benefits for Philips ── */

export const outcomesGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px',
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const outcomeCard = style({
  width: '100%',
  borderTop: '3px solid var(--fil-color-brand)',
});

export const outcomeLabel = style({
  fontSize: '12px',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  fontWeight: 500,
});

export const outcomeValue = style({
  fontSize: '26px',
  fontWeight: 600,
  lineHeight: 1,
  marginTop: '8px',
  marginBottom: '4px',
});

/* ── Effectiveness & Quality ── */

export const effectivenessGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px',
  '@media': {
    '(max-width: 1024px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const effectivenessCard = style({
  width: '100%',
  borderLeft: '4px solid var(--fil-color-brand)',
});

export const metricsGrid = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0',
});

/* ── Impact Drivers ── */

export const driverGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  marginBottom: '6px',
});

export const driversGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '10px',
});

export const driverCard = style({
  width: '100%',
  borderLeft: '3px solid var(--fil-color-border-subtle, #e8e8e8)',
});

/* ── Metric items ── */

export const metricItem = style({
  padding: '8px 10px',
  marginBottom: '4px',
  borderRadius: '6px',
  selectors: {
    '&:last-child': {
      marginBottom: 0,
    },
  },
});

export const metricItemOnTrack = style({
  backgroundColor: 'rgba(0, 176, 80, 0.06)',
  borderLeft: '3px solid #00b050',
});

export const metricItemAtRisk = style({
  backgroundColor: 'rgba(255, 192, 0, 0.08)',
  borderLeft: '3px solid #ffc000',
});

export const metricItemOffTrack = style({
  backgroundColor: 'rgba(255, 68, 68, 0.06)',
  borderLeft: '3px solid #ff4444',
});

export const metricHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '2px',
  gap: '8px',
});

export const metricLabel = style({
  fontSize: '13px',
  fontWeight: 500,
  flex: 1,
  lineHeight: 1.4,
});

export const metricStatusWrapper = style({
  display: 'none',
});

export const statusDot = style({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  flexShrink: 0,
});

export const statusOnTrack = style({
  backgroundColor: '#00b050',
});

export const statusAtRisk = style({
  backgroundColor: '#ffc000',
});

export const statusOffTrack = style({
  backgroundColor: '#ff4444',
});

export const metricValue = style({
  fontSize: '16px',
  fontWeight: 600,
  display: 'flex',
  alignItems: 'baseline',
  gap: '0',
});

/* ── Dialog ── */

export const dialogMetric = style({
  marginBottom: '20px',
});

export const dialogMetricValue = style({
  fontSize: '48px',
  fontWeight: 700,
  lineHeight: 1,
  marginBottom: '4px',
  color: 'var(--fil-color-brand)',
});

export const dialogSection = style({
  marginBottom: '20px',
});

export const dialogSectionTitle = style({
  fontSize: '12px',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  marginBottom: '8px',
});

export const dialogQuestion = style({
  fontStyle: 'italic',
  display: 'block',
});

export const dialogChips = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
});

export const dialogChip = style({
  fontSize: '12px',
  fontWeight: 500,
  padding: '4px 10px',
  borderRadius: '12px',
  backgroundColor: 'var(--fil-color-background-subtle, #f0f0f0)',
  border: '1px solid var(--fil-color-border-subtle, #e0e0e0)',
});

/* ── Page title ── */

export const pageTitle = style({
  marginBottom: '4px',
});

/* ── Before/After ── */

export const beforeValue = style({
  fontSize: '13px',
  fontWeight: 400,
  color: 'var(--fil-color-text-secondary, #888)',
  textDecoration: 'line-through',
});

export const arrow = style({
  margin: '0 5px',
  color: 'var(--fil-color-text-secondary, #aaa)',
  fontSize: '12px',
});

export const sectionHeaderClickable = style({
  cursor: 'pointer',
  userSelect: 'none',
});

export const metricDescription = style({
  fontSize: '11px',
  color: 'var(--fil-color-text-secondary, #888)',
  marginTop: '2px',
  lineHeight: 1.3,
});
