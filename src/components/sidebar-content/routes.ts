import { ROUTES } from '~/pages/routes';

export type RouteType = {
  id: string;
  name: string;
  href: string;
};

export const routes: RouteType[] = [
  { id: 'dashboard', name: 'Dashboard', href: ROUTES.Dashboard },
  {
    id: 'usability',
    name: 'Usability',
    href: `${ROUTES.GenericPage}?title=Usability`,
  },
  {
    id: 'ux-telemetry',
    name: 'UX Telemetry',
    href: `${ROUTES.GenericPage}?title=UX Telemetry`,
  },
  {
    id: 'dls',
    name: 'DLS',
    href: `${ROUTES.GenericPage}?title=Design Language System`,
  },
];
