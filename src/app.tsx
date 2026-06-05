import { RouterProvider } from '@filament/react/router';
import { Route, Routes, useHref, useNavigate } from 'react-router';

import { Layout } from '~/components/layout';
import { Dashboard } from '~/pages/dashboard';
import { GenericPage } from '~/pages/generic-page';
import { ROUTES } from '~/pages/routes';

export const App = () => {
  const navigate = useNavigate();

  return (
    <RouterProvider navigate={navigate} useHref={useHref}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path={ROUTES.GenericPage} element={<GenericPage />} />
        </Route>
      </Routes>
    </RouterProvider>
  );
};
