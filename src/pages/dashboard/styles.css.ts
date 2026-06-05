import { style, globalStyle } from '@vanilla-extract/css';

export const page = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  width: '100%',
});

export const impactScoresGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
  marginBottom: '16px',
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const impactCard = style({
  width: '100%',
  borderTop: '3px solid var(--fil-color-brand)',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
});

export const impactLabel = style({
  fontSize: '12px',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  fontWeight: 500,
});

export const impactValue = style({
  fontSize: '36px',
  fontWeight: 600,
  lineHeight: 1,
  marginTop: '10px',
  marginBottom: '6px',
});

export const impactChange = style({
  fontSize: '12px',
});

export const dimensionsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '20px',
  '@media': {
    '(max-width: 1024px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const dimensionCard = style({
  width: '100%',
  borderLeft: '4px solid var(--fil-color-brand)',
});

export const clickableCard = style({
  cursor: 'pointer',
  transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
  ':hover': {
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderColor: 'var(--fil-color-brand)',
  },
});

export const kpiItem = style({
  paddingBottom: '16px',
  marginBottom: '16px',
  borderBottom: '1px solid var(--fil-color-border-subtle, #f8f8f8)',
  selectors: {
    '&:last-child': {
      marginBottom: 0,
      paddingBottom: 0,
      borderBottom: 'none',
    },
  },
});

export const kpiHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: '6px',
  gap: '8px',
});

export const kpiName = style({
  fontSize: '13px',
  fontWeight: 500,
  flex: 1,
  lineHeight: 1.4,
});

export const kpiStatusWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontSize: '11px',
  whiteSpace: 'nowrap',
  flexShrink: 0,
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

export const kpiMetrics = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '12px',
  fontSize: '12px',
});

export const metricValue = style({
  fontWeight: 600,
});

export const tabPanel = style({
  paddingTop: '24px',
});

export const tabBar = style({
  borderBottom: '2px solid var(--fil-color-border-subtle, #e8e8e8)',
});

export const tabItem = style({
  borderBottom: '2px solid transparent',
  marginBottom: '-2px',
  opacity: 0.6,
  transition: 'opacity 0.2s ease',
});

export const tabItemActive = style({
  borderBottom: '2px solid var(--fil-color-brand)',
  opacity: 1,
});

export const modalGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '16px',
  '@media': {
    '(max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const modalStat = style({
  background: 'var(--fil-color-background-secondary, #f8f8f8)',
  padding: '16px',
  borderRadius: '6px',
  borderLeft: '3px solid var(--fil-color-brand)',
});

export const modalStatLabel = style({
  fontSize: '12px',
  fontWeight: 500,
  marginBottom: '8px',
});

export const modalStatValue = style({
  fontSize: '20px',
  fontWeight: 600,
});

export const modalSection = style({
  marginBottom: '24px',
});

export const modalSectionTitle = style({
  fontSize: '12px',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  marginBottom: '16px',
});

globalStyle(`${tabPanel} > *`, {
  width: '100%',
});
