import { style } from '@vanilla-extract/css';

export const headerStyle = style({
  gridArea: 'header',
  containerType: 'inline-size',
});

export const container = style({
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

export const logo = style({
  marginLeft: '0.5rem',
});
