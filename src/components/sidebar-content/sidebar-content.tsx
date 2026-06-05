import { NavLink } from '@filament/react/nav-link';
import { useMemo } from 'react';
import { useLocation } from 'react-router';
import { routes } from './routes';

export const SidebarContent = () => {
  const { pathname, search } = useLocation();

  const activeRouteId = useMemo(() => {
    const currentHref = decodeURI(`${pathname}${search}`);
    const activeRoute = routes.find((route) => route.href === currentHref);

    if (activeRoute) {
      return activeRoute.id;
    }

    return undefined;
  }, [pathname, search]);

  return (
    <>
      {routes.map((route) => (
        <NavLink
          href={route.href}
          key={route.id}
          isActive={route.id === activeRouteId}
        >
          {route.name}
        </NavLink>
      ))}
    </>
  );
};
