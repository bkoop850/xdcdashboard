import {
  backgroundSecondary,
  backgroundTertiary,
  borderLeft,
  borderTop,
} from '@filament/react/atomic-styles';
import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('body', {
  padding: 0,
  margin: 0,
});

export const content = style([
  backgroundTertiary,
  borderTop,
  borderLeft,
  {
    gridArea: 'content',
    overflowY: 'auto',
    padding: '1rem',
    borderTopLeftRadius: '0.5rem',
  },
]);

export const page = style([
  backgroundSecondary,
  {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: 'auto 1fr',
    gridTemplateAreas: `
    'header'
    'content'`,
    height: '100svh',
  },
]);
