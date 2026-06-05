import { style } from '@vanilla-extract/css';

export const sidebar = style({
  gridArea: 'sidebar',
  width: '22.5rem',
  left: 0,
  flexWrap: 'nowrap',
});

export const sidebarModal = style({
  height: '100vh',
  top: '-3.5rem',
});
