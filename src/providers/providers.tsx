import type { Dispatch, SetStateAction } from 'react';
import { createContext } from 'react';

export interface PageTitleContextProps {
  pageTitle: string;
  setPageTitle: Dispatch<SetStateAction<string>>;
}

export const PageTitleProvider = createContext<PageTitleContextProps>({
  pageTitle: '',
  setPageTitle: () => {},
});
