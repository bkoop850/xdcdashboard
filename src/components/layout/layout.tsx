import { backgroundPrimary } from '@filament/react/atomic-styles';
import { base } from '@filament/react/base-styles';
import { blue } from '@filament/react/themes/blue.css';
import { light } from '@filament/react/themes/light.css';
import { medium } from '@filament/react/themes/medium.css';
import { Portal } from '@filament/react/utils';
import { clsx } from 'clsx';
import { useState } from 'react';
import { Outlet } from 'react-router';

import { Navigation } from '~/components/navigation';
import { PageTitleProvider } from '~/providers';

import * as styles from './styles.css';

export const Layout = () => {
  const [pageTitle, setPageTitle] = useState('');

  return (
    <PageTitleProvider.Provider value={{ pageTitle, setPageTitle }}>
      <div
        className={clsx(
          blue,
          light,
          medium,
          base,
          backgroundPrimary,
          styles.page
        )}
      >
        <Portal>
          <Navigation />
          <main className={styles.content}>
            <Outlet />
          </main>
        </Portal>
      </div>
    </PageTitleProvider.Provider>
  );
};
