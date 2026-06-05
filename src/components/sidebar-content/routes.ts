import { ROUTES } from '~/pages/routes';

export type RouteType = {
  id: string;
  name: string;
  href: string;
};

export const routes: RouteType[] = [
  { id: 'dashboard', name: 'Dashboard', href: ROUTES.Dashboard },
  {
    id: 'route1',
    name: 'Route 1',
    href: `${ROUTES.GenericPage}?title=Route 1`,
  },
  {
    id: 'route2',
    name: 'Route 2',
    href: `${ROUTES.GenericPage}?title=Route 2`,
  },
  {
    id: 'route3',
    name: 'Route 3',
    href: `${ROUTES.GenericPage}?title=Route 3`,
  },
  {
    id: 'route4',
    name: 'Route 4',
    href: `${ROUTES.GenericPage}?title=Route 4`,
  },
  {
    id: 'route5',
    name: 'Route 5',
    href: `${ROUTES.GenericPage}?title=Route 5`,
  },
];
