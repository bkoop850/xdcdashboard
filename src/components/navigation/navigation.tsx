import { PhilipsLogo } from '@filament/react/icons/philips-logo';
import { QuestionMarkCircle } from '@filament/react/icons/question-mark-circle';
import { FlexBox } from '@filament/react/layout';
import { H1 } from '@filament/react/text';
import { TopBar, TopBarTitle, TopBarUserInfo } from '@filament/react/top-bar';
import { Button } from '@filament/react/button';
import { useContext } from 'react';
import * as globalStyles from '~/global-styles.css';
import { PageTitleProvider } from '~/providers';
import * as styles from './styles.css';

export const Navigation = () => {
  const { pageTitle } = useContext(PageTitleProvider);

  return (
    <TopBar className={styles.headerStyle}>
      <FlexBox className={styles.container}>
        <TopBarTitle className={globalStyles.showOnDesktop}>
          <PhilipsLogo className={styles.logo} />
          {pageTitle && <H1>{pageTitle}</H1>}
        </TopBarTitle>

        <TopBarUserInfo>
          <Button
            aria-label="question"
            variant="quiet"
            shape="square"
            isIconOnly
            className={globalStyles.showOnDesktop}
          >
            <QuestionMarkCircle />
          </Button>
        </TopBarUserInfo>
      </FlexBox>
    </TopBar>
  );
};
