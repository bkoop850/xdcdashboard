import { H2 } from '@filament/react/text';
import { useSearchParams } from 'react-router';

export const GenericPage = () => {
  const [searchParams] = useSearchParams();

  return <H2>{searchParams.get('title')}</H2>;
};
